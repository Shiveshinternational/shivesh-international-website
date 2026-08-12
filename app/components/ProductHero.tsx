import Image from "next/image";
import Link from "next/link";

import GoldenParticles from "@/app/components/GoldenParticles";
import StaggerItem from "@/app/components/StaggerItem";

type ProductHighlight = {
  value: string;
  label: string;
};

type ProductHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  highlights?: ProductHighlight[];
  compact?: boolean;
};

export default function ProductHero({
  eyebrow,
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  primaryButtonLabel = "Explore Product",
  primaryButtonHref = "#product-overview",
  secondaryButtonLabel = "Request Quotation",
  secondaryButtonHref = "/contact",
  highlights = [],
  compact = false,
}: ProductHeroProps) {
  return (
    <section
      className={`relative isolate flex items-center overflow-hidden ${
        compact ? "min-h-[72vh]" : "min-h-screen"
      }`}
    >
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          compact
            ? "from-[#061711]/78 via-[#102f23]/34 to-transparent"
            : "from-[#061711]/96 via-[#102f23]/82 to-[#102f23]/30"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          compact
            ? "from-black/22 via-transparent to-black/8"
            : "from-black/70 via-transparent to-black/20"
        }`}
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-[#C9A962]/12 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[8%] h-[360px] w-[360px] rounded-full bg-[#173b2a]/20 blur-[120px]"
      />

      <GoldenParticles />

      <div
        className={`relative z-10 w-full px-6 sm:px-8 lg:px-12 ${
          compact ? "pb-14 pt-28" : "mx-auto max-w-[1500px] pb-24 pt-36"
        }`}
      >
        <div className={compact ? "max-w-[760px]" : "max-w-5xl"}>
          <StaggerItem delay={0}>
            <div className={compact ? "mb-5 flex items-center gap-5" : "mb-7 flex items-center gap-5"}>
              <span className={compact ? "h-px w-14 bg-[#C9A962]" : "h-px w-20 bg-[#C9A962]"} />
              <span className="text-xs font-bold uppercase tracking-[0.46em] text-[#E4C878] sm:text-sm">
                {eyebrow}
              </span>
            </div>
          </StaggerItem>

          <StaggerItem delay={120}>
            <h1
              className={`font-[family-name:var(--font-playfair)] font-semibold leading-[1.04] text-[#F5F0E6] ${
                compact
                  ? "text-[clamp(2.55rem,4vw,4.5rem)] font-medium tracking-[-0.035em]"
                  : "text-5xl sm:text-6xl lg:text-8xl"
              }`}
            >
              {title}
            </h1>
          </StaggerItem>

          <StaggerItem delay={240}>
            <p
              className={`max-w-4xl font-[family-name:var(--font-playfair)] leading-relaxed text-[#E4C878] ${
                compact
                  ? "mt-5 text-xl font-medium italic sm:text-2xl"
                  : "mt-6 text-2xl font-medium sm:text-3xl lg:text-4xl"
              }`}
            >
              {subtitle}
            </p>
          </StaggerItem>

          <StaggerItem delay={360}>
            <p
              className={`max-w-3xl text-[#F5F0E6]/78 ${
                compact ? "mt-5 max-w-[620px] text-[16px] leading-8" : "mt-8 text-lg leading-9 sm:text-xl"
              }`}
            >
              {description}
            </p>
          </StaggerItem>

          <StaggerItem delay={480}>
            <div className={compact ? "mt-7 flex flex-wrap gap-4" : "mt-11 flex flex-wrap gap-4"}>
              <a
                href={primaryButtonHref}
                className={`inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)] ${
                  compact ? "px-7 py-4 text-[10px]" : "px-8 py-4 text-sm"
                }`}
              >
                {primaryButtonLabel}
                <span className="text-lg">↓</span>
              </a>

              <Link
                href={secondaryButtonHref}
                className={`inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/30 font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962] ${
                  compact ? "px-7 py-4 text-[10px]" : "px-8 py-4 text-sm"
                }`}
              >
                {secondaryButtonLabel}
              </Link>
            </div>
          </StaggerItem>

          {highlights.length > 0 && (
            <StaggerItem delay={600}>
              <div
                className={`grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4 ${
                  compact ? "mt-8" : "mt-14"
                }`}
              >
                {highlights.map((highlight) => (
                  <div
                    key={`${highlight.value}-${highlight.label}`}
                    className="border border-white/10 bg-black/15 px-5 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/45 hover:bg-black/25"
                  >
                    <p className={`font-[family-name:var(--font-playfair)] font-semibold text-[#E4C878] ${compact ? "text-lg" : "text-2xl"}`}>
                      {highlight.value}
                    </p>
                    <p className={`mt-2 font-bold uppercase tracking-[0.28em] text-[#F5F0E6]/55 ${compact ? "text-[9px]" : "text-[10px]"}`}>
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          )}
        </div>
      </div>

      {!compact && (
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F5F0E6]/45">
            Scroll to Explore
          </p>
          <div className="mx-auto mt-4 h-14 w-px overflow-hidden bg-white/15">
            <div className="h-7 w-px animate-pulse bg-[#C9A962]" />
          </div>
        </div>
      )}
    </section>
  );
}