"use server";

import { revalidatePath } from "next/cache";
import db from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// --- MIDDLEWARE CHECKER ---
async function requireAuth() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");
}

// --- TYPES ---
export interface Collection {
  id: string;
  title: string;
  summary: string;
  tags: string;
  note: string | null;
  tone: string;
  wide: number;
}

export interface CollectionImage {
  id: string;
  collection_id: string;
  url: string;
  sort_order: number;
}

// --- GETTERS ---
export async function getCollections(): Promise<Collection[]> {
  const stmt = db.prepare('SELECT * FROM collections ORDER BY created_at DESC');
  return stmt.all() as Collection[];
}

export async function getCollectionById(id: string): Promise<Collection | undefined> {
  const stmt = db.prepare('SELECT * FROM collections WHERE id = ?');
  return stmt.get(id) as Collection | undefined;
}

export async function getCollectionImages(collectionId: string): Promise<CollectionImage[]> {
  const stmt = db.prepare('SELECT * FROM collection_images WHERE collection_id = ? ORDER BY sort_order ASC');
  return stmt.all(collectionId) as CollectionImage[];
}

// --- MUTATIONS ---
export async function createCollection(formData: FormData) {
  await requireAuth();
  
  const id = crypto.randomUUID();
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const tags = formData.get("tags") as string;
  const note = formData.get("note") as string;
  const tone = formData.get("tone") as string;
  const wide = formData.get("wide") === "true" ? 1 : 0;

  const stmt = db.prepare(`
    INSERT INTO collections (id, title, summary, tags, note, tone, wide)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  stmt.run(id, title, summary, tags, note, tone, wide);
  revalidatePath("/admin");
  revalidatePath("/#collections");
  return { success: true, id };
}

export async function updateCollection(id: string, formData: FormData) {
  await requireAuth();
  
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const tags = formData.get("tags") as string;
  const note = formData.get("note") as string;
  const tone = formData.get("tone") as string;
  const wide = formData.get("wide") === "true" ? 1 : 0;

  const stmt = db.prepare(`
    UPDATE collections 
    SET title = ?, summary = ?, tags = ?, note = ?, tone = ?, wide = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);
  
  stmt.run(title, summary, tags, note, tone, wide, id);
  revalidatePath(`/admin/collections/${id}`);
  revalidatePath(`/collections/${id}`);
  revalidatePath("/#collections");
  return { success: true };
}

export async function deleteCollection(id: string) {
  await requireAuth();
  
  // First, get all images to delete them from disk
  const images = await getCollectionImages(id);
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  for (const img of images) {
    const filename = path.basename(img.url);
    const filepath = path.join(uploadDir, filename);
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
  }

  // Database CASCADE handles deleting collection_images rows
  const stmt = db.prepare('DELETE FROM collections WHERE id = ?');
  stmt.run(id);
  
  revalidatePath("/admin");
  revalidatePath("/#collections");
  return { success: true };
}

// --- IMAGE UPLOADS ---
export async function uploadImages(collectionId: string, formData: FormData) {
  await requireAuth();
  
  const files = formData.getAll("images") as File[];
  if (!files || files.length === 0) return { error: "No files uploaded" };

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Get current max sort order for this collection
  const maxOrderStmt = db.prepare('SELECT MAX(sort_order) as maxOrder FROM collection_images WHERE collection_id = ?');
  const result = maxOrderStmt.get(collectionId) as { maxOrder: number | null };
  let currentSortOrder = (result.maxOrder ?? -1) + 1;

  const insertImageStmt = db.prepare(`
    INSERT INTO collection_images (id, collection_id, url, sort_order)
    VALUES (?, ?, ?, ?)
  `);

  const tx = db.transaction((uploadedFiles: { id: string, collection_id: string, url: string, sort_order: number }[]) => {
    for (const file of uploadedFiles) {
      insertImageStmt.run(file.id, file.collection_id, file.url, file.sort_order);
    }
  });

  const records = [];

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.name);
    const filename = `img-${uniqueSuffix}${extension}`;
    const filepath = path.join(uploadDir, filename);
    
    // Save to disk
    fs.writeFileSync(filepath, buffer);
    
    records.push({
      id: crypto.randomUUID(),
      collection_id: collectionId,
      url: `/uploads/${filename}`,
      sort_order: currentSortOrder++
    });
  }

  tx(records);
  
  revalidatePath(`/admin/collections/${collectionId}`);
  revalidatePath(`/collections/${collectionId}`);
  return { success: true };
}

export async function deleteImage(imageId: string, imageUrl: string) {
  await requireAuth();
  
  // Delete from disk
  const filename = path.basename(imageUrl);
  const filepath = path.join(process.cwd(), "public", "uploads", filename);
  
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }

  // Delete from DB
  const stmt = db.prepare('DELETE FROM collection_images WHERE id = ?');
  stmt.run(imageId);
  
  // Revalidation requires the collection id, but we might be calling this from client components.
  // The caller should ideally revalidate or we can just revalidate all.
  revalidatePath("/admin/collections/[id]", "page"); 
  return { success: true };
}
