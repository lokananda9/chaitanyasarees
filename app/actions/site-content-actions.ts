"use server";

import { revalidatePath } from "next/cache";
import { verifyAdminSession } from "@/lib/auth";
import db from "@/lib/db";
import { SITE_CONTENT_KEYS, type SiteContentKey } from "@/lib/site-content";

async function requireAuth() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    throw new Error("Unauthorized");
  }
}

export async function updateSiteContent(formData: FormData) {
  await requireAuth();

  const entries = SITE_CONTENT_KEYS.map((key) => [
    key,
    String(formData.get(key) ?? ""),
  ]) as Array<[SiteContentKey, string]>;

  const upsert = db.prepare(`
    INSERT INTO site_content (content_key, value, updated_at)
    VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(content_key)
    DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
  `);

  const transaction = db.transaction((values: Array<[SiteContentKey, string]>) => {
    for (const [key, value] of values) {
      upsert.run(key, value);
    }
  });

  transaction(entries);

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/content");

  return { success: true };
}
