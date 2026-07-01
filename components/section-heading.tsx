type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.42em] text-[#8c4c55]">
        {eyebrow}
      </p>
      <h2 className="font-display whitespace-pre-line text-4xl leading-none text-[#2d1d16] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 whitespace-pre-line text-base leading-7 text-stone-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
