"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Collection } from "@/app/actions/collection-actions";

export function FeaturedCollections({ collections }: { collections: Collection[] }) {
  const shouldReduceMotion = useReducedMotion();

  // Sort collections to match created order or some specific metric if needed.
  // For now we just use the array passed from the server component.

  return (
    <section
      id="collections"
      className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#8d4a54] animate-pulse"></span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
                Featured Collections
              </p>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-tight text-[#241712] sm:text-5xl lg:text-6xl">
              Signature edits for every celebration and every day.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
              Each collection is carefully crafted to help you find the perfect look for any occasion.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex flex-col justify-between h-full min-h-[380px] overflow-hidden rounded-[2.3rem] border border-white/35 bg-gradient-to-br ${collection.tone} p-6 shadow-[0_30px_90px_rgba(77,42,32,0.12)] sm:p-8`}
            >
              <Link href={`/collections/${collection.id}`} className="absolute inset-0 z-20">
                 <span className="sr-only">View {collection.title}</span>
              </Link>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.56),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
              <div className="absolute -right-12 top-10 h-56 w-40 rounded-full border border-white/34 bg-white/18 backdrop-blur-xl transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-105" />
              <div className="absolute bottom-0 right-0 h-44 w-40 rounded-tl-[4rem] border-l border-t border-white/28 bg-white/16 backdrop-blur-md transition-all duration-700 group-hover:h-52 group-hover:w-44" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
                    Collection 0{index + 1}
                  </p>
                  <h3 className="font-display mt-4 text-4xl leading-none text-[#241712] sm:text-5xl">
                    {collection.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
                    {collection.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium italic text-stone-700">
                    {collection.note}
                  </p>
                </div>

                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="rounded-[2rem] border border-white/40 bg-white/32 p-5 backdrop-blur-md">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {collection.tags.split(',').map((tag) => (
                        <span
                          key={tag.trim()}
                          className="rounded-full border border-white/55 bg-white/48 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-700"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8d4a54]/20 bg-[#8d4a54]/10 text-[#8d4a54] transition-all duration-300 group-hover:bg-[#8d4a54] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          
          {collections.length === 0 && (
             <div className="col-span-full py-12 text-center text-stone-500 bg-stone-50/50 rounded-3xl border border-stone-200">
                <p>No collections available at the moment.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
