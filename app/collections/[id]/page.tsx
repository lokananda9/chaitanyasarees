import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { getCollectionById, getCollectionImages } from "@/app/actions/collection-actions";
import { getSiteContent } from "@/lib/site-content";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [collection, siteContent] = await Promise.all([
    getCollectionById(id),
    getSiteContent(),
  ]);

  if (!collection) {
    notFound();
  }

  const images = await getCollectionImages(collection.id);

  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Header Area */}
      <header className="sticky top-0 z-40 border-b border-[#8d4a54]/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/#collections"
            className="group flex items-center gap-2 text-sm font-semibold text-[#8d4a54] transition-colors hover:text-[#241712]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8d4a54]/10 transition-colors group-hover:bg-stone-100">
              <ArrowLeft className="h-4 w-4" />
            </span>
            {siteContent.collection_back_label}
          </Link>

          <div className="hidden items-center gap-6 sm:flex">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
              <Clock3 className="h-4 w-4 text-[#8d4a54]" />
              {siteContent.header_hours_badge}
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
              <MapPin className="h-4 w-4 text-[#8d4a54]" />
              {siteContent.site_location_short}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full bg-[#8d4a54]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
            {collection.note || siteContent.collection_default_note}
          </p>
          <h1 className="font-display mt-8 text-5xl leading-tight text-[#241712] sm:text-6xl lg:text-7xl">
            {collection.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {collection.summary}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {collection.tags.split(',').map((tag) => (
              <span
                key={tag.trim()}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-stone-600 shadow-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Masonry or Grid Image Layout */}
        <div className="mt-16 sm:mt-24">
          {images.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-[#8d4a54]/30 bg-white/50 py-20 text-center">
               <h3 className="font-display text-2xl text-[#241712]">{siteContent.collection_empty_title}</h3>
               <p className="mt-2 text-stone-500">{siteContent.collection_empty_description}</p>
            </div>
          ) : (
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img, index) => {
                   // Create dynamic heights to mimic masonry
                   const isTall = index % 4 === 0 || index % 4 === 3;
                   
                   return (
                      <div 
                         key={img.id}
                         className={`group relative overflow-hidden rounded-[2rem] bg-stone-100 shadow-sm ${isTall ? 'min-h-[500px] sm:min-h-[600px] lg:col-span-2 lg:min-h-[700px]' : 'min-h-[400px] sm:min-h-[300px]'}`}
                      >
                         <Image
                            src={img.url}
                            alt={`${collection.title} image`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                   )
                })}
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
