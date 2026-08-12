import Image from "next/image";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

type FactoryTourStepProps = {
  stepNumber: string;
  eyebrow: string;
  title: string;
  introduction: string;
  description: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  buyerBenefitTitle: string;
  buyerBenefits: string[];
  imagePosition?: "left" | "right";
  background?: "cream" | "light" | "dark";
};

export default function FactoryTourStep({
  stepNumber,
  eyebrow,
  title,
  introduction,
  description,
  image,
  imageAlt,
  highlights,
  buyerBenefitTitle,
  buyerBenefits,
  imagePosition = "right",
  background = "cream",
}: FactoryTourStepProps) {
  const imageOnLeft = imagePosition === "left";
  const darkBackground = background === "dark";

  const backgroundClass =
    background === "dark"
      ? "bg-[#102f23] text-[#F5F0E6]"
      : background === "light"
        ? "bg-[#ede5d7] text-[#173b2a]"
        : "bg-[#f5f0e6] text-[#173b2a]";

  const bodyTextClass = darkBackground
    ? "text-[#F5F0E6]/68"
    : "text-[#4c5f54]";

  const cardClass = darkBackground
    ? "border-[#C9A962]/25 bg-white/[0.04]"
    : "border-[#173b2a]/10 bg-white/45";

  return (
    <section
      className={`relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32 ${backgroundClass}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 font-[family-name:var(--font-playfair)] text-[220px] font-semibold leading-none text-[#C9A962]/[0.06] sm:text-[320px] lg:text-[420px]"
      >
        {stepNumber}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[12%] h-80 w-80 rounded-full bg-[#C9A962]/10 blur-[120px]"
      />

      <RevealOnScroll>
        <div className="relative mx-auto w-full max-w-[1500px]">
          <div
            className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
              imageOnLeft ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            <StaggerItem delay={0}>
              <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#dcd2c2] shadow-[0_35px_95px_rgba(0,0,0,0.20)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/65 via-transparent to-black/10" />

                <div className="pointer-events-none absolute -left-[90%] top-0 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-[1300ms] group-hover:left-[145%] group-hover:opacity-100" />

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Manufacturing Stage
                    </p>

                    <p className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      Step {stepNumber}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E4C878]/60 bg-[#102f23]/70 text-xl text-[#E4C878] backdrop-blur-xl">
                    ↓
                  </div>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                    {eyebrow}
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="font-[family-name:var(--font-playfair)] text-7xl font-semibold leading-none text-[#C9A962]/25 sm:text-8xl">
                  {stepNumber}
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {title}
                </h2>
              </StaggerItem>

              <StaggerItem delay={480}>
                <p
                  className={`mt-7 text-xl font-medium leading-9 ${
                    darkBackground
                      ? "text-[#E4C878]"
                      : "text-[#8B6A1E]"
                  }`}
                >
                  {introduction}
                </p>
              </StaggerItem>

              <StaggerItem delay={600}>
                <div className="mt-8 space-y-5">
                  {description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`text-lg leading-9 ${bodyTextClass}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem delay={720}>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className={`flex items-start gap-4 border p-4 backdrop-blur-sm ${cardClass}`}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C9A962]" />

                      <span className="font-medium leading-7">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>
          </div>

          <StaggerItem delay={840}>
            <div
              className={`mt-16 grid gap-8 rounded-[26px] border p-8 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start ${
                darkBackground
                  ? "border-[#C9A962]/25 bg-white/[0.035]"
                  : "border-[#C9A962]/25 bg-[#173b2a] text-[#F5F0E6]"
              }`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.40em] text-[#C9A962]">
                  Buyer Perspective
                </p>

                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight">
                  {buyerBenefitTitle}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {buyerBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 border-b border-[#C9A962]/15 pb-4"
                  >
                    <span className="mt-1 text-lg text-[#C9A962]">✓</span>

                    <span className="leading-7 text-[#F5F0E6]/70">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}