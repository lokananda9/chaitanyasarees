import { MapPin, PhoneCall, Sparkles } from "lucide-react";

import type { SiteContent } from "@/lib/site-content";

export function SiteHeader({ content }: { content: SiteContent }) {
  const links = [
    { label: content.header_nav_visit_label, href: "#visit" },
    { label: content.header_nav_contact_label, href: "#contact" },
  ];

  const brandMark =
    content.brand_mark.trim() ||
    content.site_name
      .split(/\s+/)
      .map((part) => part[0] ?? "")
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2rem] px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="flex items-center gap-3"
              aria-label={`${content.site_name} home`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-[#8d4a54] text-sm font-semibold tracking-[0.24em] text-white shadow-[0_16px_32px_rgba(141,74,84,0.26)]">
                {brandMark}
              </span>
              <span>
                <span className="font-display block text-[1.9rem] leading-none text-[#241712] sm:text-[2.2rem]">
                  {content.site_name}
                </span>
                <span className="mt-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-600">
                  <Sparkles className="h-3.5 w-3.5 text-[#8d4a54]" />
                  {content.site_tagline}
                </span>
              </span>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-[0.12em] text-stone-700 transition-colors duration-300 hover:text-[#8d4a54]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full border border-[#8d4a54]/20 bg-[#8d4a54]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8d4a54]">
                {content.header_hours_badge}
              </div>
              <a
                href={`tel:${content.contact_phone_link}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#8d4a54] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6e3842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d4a54] focus-visible:ring-offset-2"
              >
                <PhoneCall className="h-4 w-4" />
                {content.header_call_label}
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#8d4a54]/10 pt-4 lg:hidden">
            <nav aria-label="Mobile" className="flex gap-2 overflow-x-auto pb-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[#8d4a54]/12 bg-white/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <span className="hidden items-center gap-2 text-xs font-medium text-stone-600 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-[#8d4a54]" />
              {content.site_location_short}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
