import { Gem, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-content";

export function AboutSection({ content }: { content: SiteContent }) {
  const promiseCards = [
    {
      icon: Sparkles,
      title: content.about_card_1_title,
      text: content.about_card_1_text,
    },
    {
      icon: Gem,
      title: content.about_card_2_title,
      text: content.about_card_2_text,
    },
    {
      icon: HeartHandshake,
      title: content.about_card_3_title,
      text: content.about_card_3_text,
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Left: heading + warm gradient card */}
          <Reveal>
            <div>
              <SectionHeading
                eyebrow={content.about_eyebrow}
                title={content.about_title}
                description={content.about_description}
              />

              {/* Warm peach gradient "Our Focus" card — matches festival/party sarees palette */}
              <article className="relative mt-8 overflow-hidden rounded-[2.2rem] border border-white/45 bg-[linear-gradient(145deg,#f4d19a_0%,#fbedd4_50%,#fffaf3_100%)] p-7 shadow-[0_30px_80px_rgba(77,42,32,0.10)] sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.52),transparent_28%)]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8d4a54]">
                  {content.about_focus_eyebrow}
                </p>
                <p className="font-display mt-4 whitespace-pre-line text-4xl leading-tight text-[#241712] sm:text-5xl">
                  {content.about_focus_title}
                </p>
                <p className="mt-5 whitespace-pre-line text-sm leading-7 text-stone-600 sm:text-base">
                  {content.about_focus_description}
                </p>
              </article>
            </div>
          </Reveal>

          {/* Right: promise cards */}
          <div className="grid gap-6">
            {promiseCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={`${card.title}-${index}`} delay={index * 0.08}>
                  <article className="glass-panel rounded-[1.8rem] p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d4a54]/10 text-[#8d4a54]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-5 text-3xl leading-none text-[#241712]">
                      {card.title}
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-stone-600">
                      {card.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
