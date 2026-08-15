import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const aboutPoints = [
  "Certified Manufacturing Unit",
  "30+ Years of Industry Experience",
  "Empowered by 800+ Farmers",
  "OEM & Private Label Manufacturing",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4EFE5] px-5 py-20 text-[#173b2a] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Soft premium background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#173b2a]/[0.05] blur-[140px]"
      />

      <RevealOnScroll>
        <div className="relative mx-auto grid max-w-[1450px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="relative">
            <StaggerItem delay={0}>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-16 bg-[#C9A962]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#B68B32]">
                  About Us
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="max-w-[640px] font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,4.6vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#12382A]">
                Rooted in Nature.
                <span className="mt-1 block text-[#A97B22]">
                  Built for Global Business.
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={220}>
              <p className="mt-6 font-[family-name:var(--font-playfair)] text-xl italic leading-relaxed text-[#8B6A1E] sm:text-2xl">
  Premium henna, indigo and botanical products from India for
  professional buyers worldwide.
</p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-7 max-w-[650px] text-[16px] font-light leading-[1.9] text-[#4C5F54] sm:text-[17px]">
  Shivesh International is a natural henna powder manufacturer
  and exporter from India, supplying Natural Henna Powder,
  Natural Indigo Powder, Henna Hair Colors, Ayurvedic Indian
  Herbs and Indian Spices. We support importers, distributors,
  wholesalers, salons and private-label brands through dependable
  sourcing, controlled processing, consistent quality and
  export-ready packaging.
</p>
            </StaggerItem>

            {/* =================================================
                TRUST POINTS
            ================================================= */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((point, index) => (
                <StaggerItem key={point} delay={420 + index * 80}>
                  <div className="group flex min-h-[66px] items-center gap-4 border-b border-[#173b2a]/10 py-3 transition-colors duration-300 hover:border-[#C9A962]/60">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#173b2a]/[0.035]">
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    </div>

                    <span className="text-[14px] font-semibold leading-5 text-[#173b2a]">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* CTA */}
            <StaggerItem delay={780}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="/about"
                  className="group inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#12382A] shadow-[0_14px_35px_rgba(201,169,98,0.20)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                >
                  About Shivesh International
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <div className="hidden items-center gap-3 sm:flex">
                  <span className="h-px w-12 bg-[#173b2a]/25" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#173b2a]/45">
                    India to the World
                  </span>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}
          <StaggerItem delay={300}>
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/16" />

              <div className="group relative min-h-[560px] overflow-hidden rounded-[26px] border border-[#C9A962]/28 bg-[#E8DFCF] shadow-[0_28px_70px_rgba(20,50,38,0.16)] lg:min-h-[610px]">
                <Image
                  src="/images/about-office-fullscreen.png"
                  alt="Shivesh International natural products export company office in New Delhi India"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                />

                {/* Image overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081A13]/35 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#173b2a]/10 via-transparent to-transparent" />

                {/* Bottom luxury caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-[430px] border border-white/15 bg-[#0D2F22]/70 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-[#C9A962]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                        Shivesh International
                      </span>
                    </div>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-medium leading-snug text-[#F7F1E7]">
                      Natural Products. Professional Standards.
                      Global Vision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative gold corner */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-[#C9A962]/55"
              />
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}