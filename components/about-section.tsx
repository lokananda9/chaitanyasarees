import { Gem, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const promiseCards = [
  {
    icon: Sparkles,
    title: "Curated variety",
    text: "Fresh colour stories and occasion-ready drapes that still feel timeless.",
  },
  {
    icon: Gem,
    title: "Rich traditional edits",
    text: "Elegant borders and ceremonial sarees chosen for depth and presence.",
  },
  {
    icon: HeartHandshake,
    title: "Personal service",
    text: "A Tadipatri boutique that offers warm guidance and easy accessibility.",
  },
];

export function AboutSection() {
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
                eyebrow="About Chaitanya Sarees"
                title="A saree boutique with a premium difference."
                description="We bring a carefully selected range of traditional and contemporary sarees under one welcoming roof — for every occasion and every family."
              />

              {/* Warm peach gradient "Our Focus" card — matches festival/party sarees palette */}
              <article className="relative mt-8 overflow-hidden rounded-[2.2rem] border border-white/45 bg-[linear-gradient(145deg,#f4d19a_0%,#fbedd4_50%,#fffaf3_100%)] p-7 shadow-[0_30px_80px_rgba(77,42,32,0.10)] sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.52),transparent_28%)]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8d4a54]">
                  Our Focus
                </p>
                <p className="font-display mt-4 text-4xl leading-tight text-[#241712] sm:text-5xl">
                  Every occasion,<br />beautifully dressed.
                </p>
                <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base">
                  From bridal grandeur to comfortable everyday drapes, our collection is curated for women who value quality, variety, and graceful styling.
                </p>
              </article>
            </div>
          </Reveal>

          {/* Right: promise cards */}
          <div className="grid gap-6">
            {promiseCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="glass-panel rounded-[1.8rem] p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d4a54]/10 text-[#8d4a54]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-5 text-3xl leading-none text-[#241712]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{card.text}</p>
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
