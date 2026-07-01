"use client";

import Image from "next/image";
import { ArrowRight, Clock3, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "@/lib/site-content";

export function HeroSection({ content }: { content: SiteContent }) {
  const shouldReduceMotion = useReducedMotion();
  const stats = [
    { label: content.hero_stat_2_label, value: content.hero_stat_2_value },
    { label: content.hero_stat_3_label, value: content.hero_stat_3_value },
    { label: content.hero_stat_4_label, value: content.hero_stat_4_value },
  ];

  return (
    <section
      id="top"
      className="relative px-4 pb-14 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28 lg:pt-12"
    >
      {/* Subtle ambient background layer */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
        <div className="hero-grid absolute left-[4%] top-16 h-40 w-40 rounded-[2rem] opacity-25" />
        <div className="absolute right-[8%] top-20 h-28 w-28 rounded-full border border-[#8d4a54]/10 bg-white/20 blur-sm" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/30 bg-[linear-gradient(145deg,rgba(247,238,229,0.96),rgba(232,216,204,0.94))] px-6 pb-8 pt-10 shadow-[0_44px_120px_rgba(77,42,32,0.18)] sm:px-10 sm:pb-10 sm:pt-12 lg:px-14 lg:pb-12 lg:pt-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,247,240,0.38),transparent_28%),radial-gradient(circle_at_20%_60%,rgba(184,105,111,0.14),transparent_24%)]" />

          {/* Main two-column grid */}
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT: COPY */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-stone-700">
                <Sparkles className="h-4 w-4 text-[#8d4a54]" />
                {content.hero_badge}
              </div>

              <h1 className="font-display mt-8 text-[4.4rem] leading-[0.86] text-[#241712] sm:text-[5.5rem] lg:text-[7.2rem]">
                {content.hero_title_line1}
                <span className="block text-[#8d4a54]">{content.hero_title_line2}</span>
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-9 text-stone-700 sm:text-2xl">
                {content.hero_description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8d4a54] px-7 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6e3842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d4a54] focus-visible:ring-offset-2"
                >
                  {content.hero_primary_cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={content.contact_whatsapp_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8d4a54]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-[#241712] transition-all duration-300 hover:-translate-y-1 hover:border-[#8d4a54]/40 hover:text-[#8d4a54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d4a54] focus-visible:ring-offset-2"
                >
                  {content.hero_secondary_cta}
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              {/* Stats strip */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={`${stat.label}-${index}`} className="soft-card rounded-[1.5rem] px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">{stat.label}</p>
                    <p className="mt-2 text-sm font-semibold text-[#241712]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: VISUAL SHOWCASE */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="relative min-h-[580px] overflow-hidden rounded-[2.6rem] border border-white/45 bg-[linear-gradient(145deg,#f0b3ad_0%,#f7ddd1_44%,#fdf6ef_100%)] p-5 shadow-[0_40px_100px_rgba(77,42,32,0.16)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.52),transparent_26%),radial-gradient(circle_at_80%_75%,rgba(240,160,120,0.12),transparent_24%)]" />

                <div className="relative h-full min-h-[540px]">
                  {/* Headline card */}
                  <div className="absolute left-0 top-6 z-10 w-[42%] rounded-[1.8rem] border border-white/40 bg-[rgba(245,231,222,0.72)] p-4 backdrop-blur-md">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
                      {content.hero_card_eyebrow}
                    </p>
                    <p className="mt-3 whitespace-pre-line font-display text-2xl leading-tight text-[#241712]">
                      {content.hero_card_title}
                    </p>
                  </div>

                  {/* Main saree image */}
                  <div className="absolute right-0 top-8 h-[68%] w-[70%] overflow-hidden rounded-[2rem] border border-white/14 shadow-[0_28px_60px_rgba(0,0,0,0.22)]">
                    <Image
                      src="/hero-main-sarees.png"
                      alt={`${content.site_name} featured collection`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-[center_28%]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,9,7,0.04),rgba(16,9,7,0.35))]" />
                  </div>

                  {/* Small inset image */}
                  <div className="absolute bottom-24 left-4 z-10 h-[200px] w-[38%] overflow-hidden rounded-[1.8rem] border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                    <Image
                      src="/hero-inset-details.png"
                      alt="Curated sarees"
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-[center_65%] scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,22,18,0.06),rgba(34,22,18,0.38))]" />
                  </div>

                  <div className="absolute inset-x-4 bottom-4 z-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="self-start rounded-[1.4rem] border border-[#8d4a54]/22 bg-[rgba(245,232,223,0.72)] px-3 py-2 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                        <Clock3 className="h-3.5 w-3.5 text-[#8d4a54]" />
                        {content.store_hours_display}
                      </div>
                    </div>

                    <div className="glass-panel max-w-[220px] rounded-[1.6rem] px-4 py-3 sm:ml-auto">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8d4a54]" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8d4a54]">
                            {content.hero_visit_label}
                          </p>
                          <p className="mt-1 whitespace-pre-line text-xs leading-5 text-stone-700">
                            {content.hero_visit_text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
