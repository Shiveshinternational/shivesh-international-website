import Image from "next/image";
import Link from "next/link";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const infrastructureHighlights = [
  "Modern Processing & Grinding Equipment",
  "Controlled Sieving and Blending",
  "Dedicated Quality Control Procedures",
  "Export-Ready Packing and Dispatch",
];

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="relative overflow-hidden bg-[#F3EEE4] px-5 py-20 text-[#173B2A] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-[#173B2A]/[0.045] blur-[150px]"
      />

      <RevealOnScroll>
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <StaggerItem delay={0}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/16" />

              <div className="group relative min-h-[560px] overflow-hidden rounded-[26px] border border-[#C9A962]/28 bg-[#DED4C3] shadow-[0_28px_70px_rgba(20,50,38,0.16)] lg:min-h-[620px]">
                <Image
                  src="/images/infrastructure/infrastructure-factory-front-elevation-v2.png"
                  alt="Shivesh International manufacturing infrastructure"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                />

                {/* Image overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B14]/65 via-transparent to-black/5" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#173B2A]/10 via-transparent to-transparent" />

                {/* Premium image caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-[500px] border border-white/15 bg-[#0D2F22]/72 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-[#C9A962]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                        Integrated Manufacturing Capability
                      </span>
                    </div>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-[24px] font-medium leading-[1.25] text-[#F7F1E7] sm:text-[28px]">
                      From Raw Material Handling to Export-Ready Packing
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[#C9A962]/55"
              />
            </div>
          </StaggerItem>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <div className="relative">
            <StaggerItem delay={120}>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-16 bg-[#C9A962]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#B68B32]">
                  Our Infrastructure
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={220}>
              <h2 className="max-w-[650px] font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,4.6vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#12382A]">
                Advanced Manufacturing.
                <span className="mt-1 block text-[#A97B22]">
                  Built for Global Standards.
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-6 max-w-[620px] font-[family-name:var(--font-playfair)] text-xl italic leading-relaxed text-[#8B6A1E] sm:text-2xl">
                Structured processing, controlled quality and professional
                export presentation.
              </p>
            </StaggerItem>

            <StaggerItem delay={420}>
              <p className="mt-7 max-w-[650px] text-[16px] font-light leading-[1.9] text-[#4C5F54] sm:text-[17px]">
                Our infrastructure supports the complete production journey,
                from raw-material handling and processing to grinding, sieving,
                blending, quality checks, packing and final dispatch. Each stage
                is coordinated to support consistency, cleanliness and
                buyer-specific commercial requirements.
              </p>
            </StaggerItem>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {infrastructureHighlights.map((item, index) => (
                <StaggerItem key={item} delay={520 + index * 80}>
                  <div className="group flex min-h-[82px] items-start gap-4 border-b border-[#173B2A]/10 py-4 transition-colors duration-300 hover:border-[#C9A962]/55">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#173B2A]/[0.035]">
                      <span className="text-[12px] font-bold text-[#A97B22]">
                        ✓
                      </span>
                    </div>

                    <p className="text-[14px] font-semibold leading-6 text-[#173B2A]">
                      {item}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* =================================================
                CTA AREA
            ================================================= */}
            <StaggerItem delay={900}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/infrastructure"
                  className="group inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#12382A] shadow-[0_14px_35px_rgba(201,169,98,0.20)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                >
                  Explore Infrastructure
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 border border-[#173B2A]/20 bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#173B2A] hover:bg-[#173B2A] hover:text-[#F7F1E7]"
                >
                  Discuss Requirement
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </StaggerItem>

            {/* Bottom micro statement */}
            <StaggerItem delay={980}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#173B2A]/20" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#173B2A]/42">
                  Processing · Quality · Packing · Export
                </span>
              </div>
            </StaggerItem>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}