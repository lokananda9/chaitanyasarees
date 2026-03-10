"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Save, Upload, Trash2, Loader2, Plus, Image as ImageIcon } from "lucide-react";
import { 
  Collection, 
  CollectionImage, 
  createCollection, 
  updateCollection, 
  uploadImages, 
  deleteImage 
} from "@/app/actions/collection-actions";

export default function CollectionEditor({
  collection,
  images = []
}: {
  collection?: Collection;
  images?: CollectionImage[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const isNew = !collection;

  async function handleSave(formData: FormData) {
    setLoading(true);
    try {
      if (isNew) {
        const res = await createCollection(formData);
        if (res.id) {
          router.push(`/admin/collections/${res.id}`);
        }
      } else {
        await updateCollection(collection.id, formData);
        router.refresh(); // Refresh to catch updated state
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleUploadFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length || isNew) return;
    
    setUploading(true);
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
        formData.append("images", e.target.files[i]);
    }

    try {
        await uploadImages(collection.id, formData);
        router.refresh();
        // Reset the input
        if (e.target) e.target.value = '';
    } finally {
        setUploading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/admin"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#241712]">
            {isNew ? "Create Collection" : "Edit Collection"}
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            {isNew ? "Set up the text details first, then you can upload pictures." : "Modify collection details and manage gallery images."}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left Col: Details Form */}
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-[#241712]">Collection Details</h2>
          <form action={handleSave} className="mt-6 space-y-6">
            <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium text-stone-700">Title</label>
              <input
                id="title"
                name="title"
                defaultValue={collection?.title}
                required
                className="block w-full rounded-xl border-0 py-2.5 text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6"
                placeholder="e.g. Wedding Sarees"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="summary" className="text-sm font-medium text-stone-700">Summary</label>
              <textarea
                id="summary"
                name="summary"
                defaultValue={collection?.summary}
                required
                rows={3}
                className="block w-full border-0 py-2.5 rounded-xl text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6"
                placeholder="Short description showcasing the collection..."
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="tags" className="text-sm font-medium text-stone-700">Tags (comma separated)</label>
              <input
                id="tags"
                name="tags"
                defaultValue={collection?.tags}
                required
                className="block w-full border-0 py-2.5 rounded-xl text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6"
                placeholder="Bridal silks, Zari accents, Reception-ready"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="note" className="text-sm font-medium text-stone-700">Footnote / Accent text</label>
              <input
                id="note"
                name="note"
                defaultValue={collection?.note || ""}
                className="block w-full border-0 py-2.5 rounded-xl text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6"
                placeholder="e.g. Designed for milestone occasions"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="tone" className="text-sm font-medium text-stone-700">Gradient Colors (Tailwind)</label>
                <input
                  id="tone"
                  name="tone"
                  defaultValue={collection?.tone || "from-[#f0b3ad] via-[#f7ddd1] to-[#fff7f1]"}
                  className="block w-full border-0 py-2.5 rounded-xl text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6 text-xs font-mono"
                />
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  id="wide"
                  name="wide"
                  type="checkbox"
                  value="true"
                  defaultChecked={collection?.wide === 1}
                  className="h-5 w-5 rounded border-stone-300 text-[#8d4a54] focus:ring-[#8d4a54]"
                />
                <label htmlFor="wide" className="text-sm font-medium text-stone-700">
                  Feature Wide (Takes 2 columns)
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-[#241712] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#8d4a54] disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {isNew ? "Create Collection" : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Col: Images (Only show if editing existing) */}
        {!isNew ? (
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8 flex flex-col h-full max-h-[850px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#241712]">Gallery Images</h2>
              <label 
                 className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#8d4a54]/10 px-3 py-1.5 text-xs font-semibold text-[#8d4a54] transition-colors hover:bg-[#8d4a54]/20 ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
              >
                 {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                 Upload
                 <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleUploadFiles}
                 />
              </label>
            </div>

            {images.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 py-12 text-center text-stone-500">
                <Upload className="h-8 w-8 mb-3 text-stone-400" />
                <p className="text-sm max-w-[200px]">Upload half a dozen pics to show in the collection UI.</p>
              </div>
            ) : (
               <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-2 pb-2">
                 {images.map(img => (
                   <div key={img.id} className="group relative aspect-square overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                     <Image 
                       src={img.url}
                       alt="Collection Image"
                       priority={false}
                       fill
                       sizes="150px"
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
                        <button
                           onClick={async () => {
                             await deleteImage(img.id, img.url);
                             router.refresh();
                           }}
                           className="rounded-full bg-white/20 p-2 text-white hover:bg-red-500 hover:text-white transition-colors"
                        >
                           <Trash2 className="h-4 w-4" />
                        </button>
                     </div>
                   </div>
                 ))}
               </div>
            )}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-stone-200 border-dashed bg-stone-50/50 p-6 flex items-center justify-center text-center">
            <div className="max-w-[200px]">
               <ImageIcon className="h-8 w-8 mx-auto mb-3 text-stone-300" />
               <p className="text-sm font-medium text-stone-500">Save the collection details first to unlock image uploads.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
