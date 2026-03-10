import { Clock3, MapPin, MessageCircle, PhoneCall, Store } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const serviceFacts = [
  {
    icon: Clock3,
    label: "Opening Hours",
    value: "9:00 AM – 9:00 PM",
  },
  {
    icon: Store,
    label: "Contact",
    value: "9908220032",
  },
];

export function StoreDetailsSection() {
  return (
    <section
      id="visit"
      className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Visit and Contact"
            title="Find us, call us, or simply walk in."
            description="We're conveniently located in Tadipatri. Get directions, call the store, or drop us a message on WhatsApp before you visit."
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
                    Contact Information
                  </p>
                  <p className="font-display mt-5 text-4xl leading-none text-[#241712] xl:text-5xl">
                    9908220032
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                    Reach us directly for collection enquiries, visit planning, or
                    guidance before you arrive.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="tel:+919908220032"
                      className="inline-flex items-center gap-2 rounded-full bg-[#8d4a54] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6e3842]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/919908220032"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#8d4a54]/20 bg-white/60 px-5 py-3 text-sm font-semibold text-[#241712] transition-all duration-300 hover:-translate-y-1 hover:bg-white/80"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
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
                  title="Chaitanya Sarees location map"
                  src="https://www.google.com/maps?q=Chaitanya+Sarees,+Tadipatri,+Andhra+Pradesh&output=embed"
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
                    Business Location
                  </span>
                </div>

                <h3 className="font-display mt-5 text-4xl leading-none text-[#241712]">
                  Chaitanya Sarees
                </h3>
                <p className="mt-3 text-base text-stone-700">flat no: 101, Gokulam Appartment,Sanjeeva Nagar,Tadipatri, Andhra Pradesh 515411</p>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Our store is a welcoming destination for occasion wear, festive shopping, and daily drapes.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.22} className="h-full">
            <article className="glass-panel flex h-full flex-col justify-between rounded-[2rem] p-6 sm:p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8d4a54]">
                  Opening Hours
                </p>
                <p className="font-display mt-3 text-3xl leading-tight text-[#241712] sm:text-4xl">
                  9:00 AM – 9:00 PM
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
                  Open every day. Walk in for a relaxed, personal saree browsing experience.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chaitanya+Sarees,+Tadipatri,+Andhra+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#8d4a54]/25 bg-[#8d4a54]/10 px-5 py-3 text-sm font-semibold text-[#8d4a54] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d4a54] hover:text-white"
              >
                Get Directions
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
