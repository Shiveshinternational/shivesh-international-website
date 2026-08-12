import Image from "next/image";
import Link from "next/link";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const exportHighlights = [
  "Serving Buyers Across 50+ Countries",
  "Retail, Bulk & Private-Label Supply",
  "Export Documentation Support",
  "Reliable Global Logistics Coordination",
];

export default function ExportSection() {
  return (
    <section
      id="export"
      className="relative overflow-hidden bg-[#0B3325] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[460px] w-[460px] rounded-full bg-[#C9A962]/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C9A962]/[0.045] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/28 to-transparent"
      />

      <RevealOnScroll>
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <StaggerItem delay={0}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/16" />

              <div className="group relative min-h-[560px] overflow-hidden rounded-[26px] border border-[#C9A962]/28 bg-[#173B2A] shadow-[0_28px_70px_rgba(0,0,0,0.24)] lg:min-h-[620px]">
                <Image
                  src="/images/products/export/export-global-network-premium-v2.png"
                  alt="Shivesh International global export network"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-right transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/68 via-transparent to-black/5" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#173B2A]/12 via-transparent to-transparent" />

                {/* Bottom premium caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-[500px] border border-white/15 bg-[#0D2F22]/74 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-[#C9A962]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                        Global Export Network
                      </span>
                    </div>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-[24px] font-medium leading-[1.25] text-[#F7F1E7] sm:text-[28px]">
                      Delivering Indian Natural Products Worldwide
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

                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#C9A962]">
                  Export Worldwide
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={220}>
              <h2 className="max-w-[650px] font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,4.6vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#F7F1E7]">
                Delivering Nature.
                <span className="mt-1 block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Across the Globe.
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-6 max-w-[620px] font-[family-name:var(--font-playfair)] text-xl italic leading-relaxed text-[#E4C878] sm:text-2xl">
                Reliable export support for global brands, distributors and
                private-label partners.
              </p>
            </StaggerItem>

            <StaggerItem delay={420}>
              <p className="mt-7 max-w-[650px] text-[16px] font-light leading-[1.9] text-[#F5F0E6]/62 sm:text-[17px]">
                We supply premium natural products to international buyers with
                export-oriented packaging, documentation support, quality
                consistency and dependable logistics coordination.
              </p>
            </StaggerItem>

            {/* =================================================
                EXPORT HIGHLIGHTS
            ================================================= */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {exportHighlights.map((item, index) => (
                <StaggerItem key={item} delay={520 + index * 85}>
                  <div className="group flex min-h-[82px] items-start gap-4 border-b border-[#F5F0E6]/10 py-4 transition-colors duration-300 hover:border-[#C9A962]/55">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-white/[0.035]">
                      <span className="text-[12px] font-bold text-[#E4C878]">
                        ✓
                      </span>
                    </div>

                    <p className="text-[14px] font-semibold leading-6 text-[#F7F1E7]">
                      {item}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* =================================================
                CTA AREA
            ================================================= */}
            <StaggerItem delay={860}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/export"
                  className="group inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#12382A] shadow-[0_14px_35px_rgba(201,169,98,0.20)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                >
                  Explore Export
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 border border-[#F5F0E6]/20 bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#F5F0E6] hover:text-[#12382A]"
                >
                  Become Our Partner
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </StaggerItem>

            {/* Bottom micro statement */}
            <StaggerItem delay={940}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C9A962]/30" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F5F0E6]/38">
                  Global Reach · Export Support · Private Label · Logistics
                </span>
              </div>
            </StaggerItem>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}