import { MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-content";

export function StoreDetailsSection({ content }: { content: SiteContent }) {
  return (
    <section
      id="visit"
      className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={content.visit_eyebrow}
            title={content.visit_title}
            description={content.visit_description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
          <Reveal className="h-full">
            <aside
              id="contact"
              className="relative flex flex-col h-full scroll-mt-32 overflow-hidden rounded-[2.4rem] border border-white/45 bg-[linear-gradient(145deg,#f0b3ad_0%,#f7ddd1_45%,#fff7f1_100%)] p-7 shadow-[0_30px_90px_rgba(77,42,32,0.12)] sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_28%)]" />
              <div className="relative flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8d4a54]">
                    {content.contact_eyebrow}
                  </p>
                  <p className="font-display mt-5 text-4xl leading-none text-[#241712] xl:text-5xl">
                    {content.contact_phone_display}
                  </p>
                  <p className="mt-5 max-w-xl whitespace-pre-line text-sm leading-7 text-stone-600 sm:text-base">
                    {content.contact_description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`tel:${content.contact_phone_link}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#8d4a54] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6e3842]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      {content.contact_call_label}
                    </a>
                    <a
                      href={content.contact_whatsapp_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#8d4a54]/20 bg-white/60 px-5 py-3 text-sm font-semibold text-[#241712] transition-all duration-300 hover:-translate-y-1 hover:bg-white/80"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {content.contact_whatsapp_label}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[2.4rem] border border-white/35 bg-white/55 p-2 shadow-[0_28px_80px_rgba(77,42,32,0.12)]">
              <div className="flex-1 overflow-hidden rounded-[1.9rem]">
                <iframe
                  title={`${content.site_name} location map`}
                  src={content.map_embed_url}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-frame h-full min-h-[300px] w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <article className="soft-card flex h-full flex-col justify-between rounded-[2rem] p-6 sm:p-7">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#8d4a54]/14 bg-[#8d4a54]/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#8d4a54]">
                    <MapPin className="h-3.5 w-3.5" />
                    {content.location_badge}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-4xl leading-none text-[#241712]">
                  {content.location_name}
                </h3>
                <p className="mt-3 whitespace-pre-line text-base text-stone-700">
                  {content.location_address}
                </p>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-stone-600">
                  {content.location_description}
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.22} className="h-full">
            <article className="glass-panel flex h-full flex-col justify-between rounded-[2rem] p-6 sm:p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
                  {content.hours_eyebrow}
                </p>
                <p className="font-display mt-3 text-3xl leading-tight text-[#241712] sm:text-4xl">
                  {content.store_hours_display}
                </p>
                <p className="mt-3 max-w-sm whitespace-pre-line text-sm leading-6 text-stone-600">
                  {content.hours_description}
                </p>
              </div>

              <a
                href={content.directions_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#8d4a54]/25 bg-[#8d4a54]/10 px-5 py-3 text-sm font-semibold text-[#8d4a54] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d4a54] hover:text-white"
              >
                {content.directions_label}
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
