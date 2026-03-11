import Link from "next/link";
import {
  FileText,
  Image as ImageIcon,
  Plus,
  Settings2,
  Trash2,
} from "lucide-react";
import { getCollections, deleteCollection } from "@/app/actions/collection-actions";

export default async function AdminDashboard() {
  const collections = await getCollections();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#241712]">
            Collections
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Manage your boutique&apos;s collection cards, image galleries, and the full site copy.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 rounded-full border border-[#8d4a54]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#8d4a54] transition-all hover:border-[#8d4a54]/40 hover:bg-[#8d4a54]/5"
          >
            <FileText className="h-4 w-4" />
            Edit Website Copy
          </Link>
          <Link
            href="/admin/collections/new"
            className="inline-flex items-center gap-2 rounded-full bg-[#8d4a54] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6e3842]"
          >
            <Plus className="h-4 w-4" />
            New Collection
          </Link>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#8d4a54]/15 bg-[linear-gradient(145deg,rgba(141,74,84,0.06),rgba(255,255,255,0.9))] p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8d4a54]">
              Website Copy Control
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#241712]">
              Update every public text block from one admin page.
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Header labels, hero copy, about text, visit details, footer messaging, and collection page template text now live under the website copy editor.
            </p>
          </div>
          <Link
            href="/admin/content"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241712] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8d4a54]"
          >
            <FileText className="h-4 w-4" />
            Open Copy Editor
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-600">
                  <ImageIcon className="h-3.5 w-3.5" />
                  Gallery
                </span>
                {collection.wide === 1 && (
                  <span className="inline-flex rounded-full bg-[#8d4a54]/10 px-2.5 py-1 text-xs font-semibold text-[#8d4a54]">
                    Featured Wide
                  </span>
                )}
              </div>
              
              <h3 className="mt-4 font-display text-xl font-semibold text-[#241712]">
                {collection.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-stone-500">
                {collection.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 border-t border-stone-100 bg-stone-50/50 p-4">
              <Link
                href={`/admin/collections/${collection.id}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-inset ring-stone-300 transition-all hover:bg-stone-50"
              >
                <Settings2 className="h-4 w-4" />
                Edit Details & Pics
              </Link>
              
              <form
                action={async () => {
                  "use server";
                  await deleteCollection(collection.id);
                }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl p-2 text-stone-400 transition-colors hover:bg-red-50 hover:text-red-600"
                  title="Delete Collection"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        ))}

        {collections.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-stone-200 bg-stone-50 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8d4a54]/10 text-[#8d4a54]">
              <ImageIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#241712]">No collections yet</h3>
            <p className="mt-1 text-sm text-stone-500">Get started by creating a new collection to showcase.</p>
          </div>
        )}
      </div>
    </div>
  );
}
