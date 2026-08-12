import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import GoldenParticles from "@/app/components/GoldenParticles";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title:
    "Manufacturing Infrastructure | Shivesh International Natural Products",
  description:
    "Explore the manufacturing infrastructure of Shivesh International in Faridabad, Haryana, India — from raw-material preparation and precision processing to quality control, packing, warehousing and dispatch.",
};

const overviewPoints = [
  "Raw Material Receiving",
  "Material Inspection & Segregation",
  "Cleaning & Preparation",
  "Controlled Material Handling",
];

const processingPoints = [
  "Grinding & Pulverising",
  "Precision Sieving",
  "Controlled Blending",
  "Batch-Wise Processing",
];

const qualityPoints = [
  "Quality Review",
  "Product Filling",
  "Professional Sealing",
  "Retail, Bulk & Private-Label Packing",
];

const dispatchPoints = [
  "Finished Goods Organisation",
  "Carton Packing",
  "Dispatch Preparation",
  "Logistics Coordination",
];

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* =====================================================
          01 — HERO
      ===================================================== */}
      <section className="relative isolate min-h-[72vh] overflow-hidden bg-[#071b14]">
        <Image
          src="/images/infrastructure/infrastructure-hero-factory-front-final-v2.png"
          alt="Shivesh International manufacturing infrastructure"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light premium overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061711]/60 via-[#071b14]/18 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/14 via-transparent to-black/5" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Manufacturing Infrastructure
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[660px] text-[clamp(3rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Where Nature Meets
                <span className="block text-[#E4C878]">
                  Precision Manufacturing
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/80">
                Explore our organised manufacturing journey in Faridabad,
                Haryana — from natural raw-material preparation and precision
                processing to professional packing, warehousing and dispatch.
              </p>
            </StaggerItem>

            <StaggerItem delay={340}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#manufacturing-overview"
                  className="group inline-flex items-center gap-3 bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore Facility
                  <span className="transition-transform group-hover:translate-y-1">
                    ↓
                  </span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-white/30 bg-[#071b14]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Discuss Manufacturing
                </Link>
              </div>
            </StaggerItem>
          </div>
        </div>

        {/* Sharp bottom boundary — no blur */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#C9A962]/35" />
      </section>

      {/* =====================================================
          02 — MANUFACTURING OVERVIEW
          Receiving + Inspection + Cleaning + Preparation
      ===================================================== */}
      <section
        id="manufacturing-overview"
        className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
            {/* Image */}
            <StaggerItem delay={0}>
              <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
                <Image
                  src="/images/infrastructure/infrastructure-manufacturing-overview-final-v2.png"
                  
                  alt="Raw material handling and manufacturing preparation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/55 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">
                    Controlled Material Preparation
                  </p>

                  <p className="mt-3 max-w-lg font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">
                    A Structured Beginning for Every Production Batch
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Content */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Manufacturing Overview
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={220}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">
                  From Natural Raw Material
                  <span className="block text-[#9f7f36]">
                    to Processing-Ready Input
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={320}>
                <p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">
                  Every finished product begins with organised handling and
                  careful preparation.
                </p>
              </StaggerItem>

              <StaggerItem delay={420}>
                <p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  Incoming henna leaves, herbs, spices and botanical
                  ingredients are received, identified and organised according
                  to their category and intended production use. Materials move
                  through inspection, segregation, cleaning and preparation
                  before entering the main processing stages.
                </p>
              </StaggerItem>

              <StaggerItem delay={500}>
                <p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  This structured beginning supports clearer batch handling,
                  cleaner material flow and more efficient production planning.
                </p>
              </StaggerItem>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {overviewPoints.map((point, index) => (
                  <StaggerItem key={point} delay={580 + index * 70}>
                    <div className="flex h-full items-start gap-3 border-b border-[#173b2a]/10 pb-4">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">
                        ✓
                      </span>

                      <span className="text-[15px] font-medium leading-7">
                        {point}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          03 — PRECISION PROCESSING
          Grinding + Pulverising + Sieving + Blending
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-56 top-12 h-[500px] w-[500px] rounded-full bg-[#C9A962]/8 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
            {/* Content */}
            <div>
              <StaggerItem delay={0}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                    Precision Processing
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">
                  Grinding, Sieving
                  <span className="block text-[#E4C878]">
                    & Controlled Blending
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium italic leading-8 text-[#C9A962]">
                  Processing designed around material characteristics, product
                  grade and buyer requirements.
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-7 max-w-[680px] text-lg leading-9 text-[#F5F0E6]/68">
                  Prepared natural materials move through industrial grinding
                  and pulverising before suitable sieving systems help refine
                  powder texture and remove larger particles.
                </p>
              </StaggerItem>

              <StaggerItem delay={440}>
                <p className="mt-5 max-w-[680px] text-lg leading-9 text-[#F5F0E6]/68">
                  Where formulations, botanical ingredients or hair-colour
                  shades require blending, ingredients are mixed batch-wise to
                  support even distribution and more consistent product
                  preparation.
                </p>
              </StaggerItem>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {processingPoints.map((point, index) => (
                  <StaggerItem key={point} delay={520 + index * 70}>
                    <div className="flex h-full items-center gap-3 rounded-[16px] border border-[#C9A962]/18 bg-white/[0.035] p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 text-[10px] text-[#E4C878]">
                        ✓
                      </span>

                      <span className="text-[15px] font-medium">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>

            {/* Image */}
            <StaggerItem delay={180}>
              <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/infrastructure/infrastructure-precision-processing-final-v2.png"
                  alt="Grinding sieving and blending manufacturing process"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/68 via-transparent to-black/5" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">
                    Product-Specific Processing
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">
                    Precision at Every Processing Stage
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          04 — QUALITY CONTROL & PACKING
          Quality + Filling + Sealing + Packing
      ===================================================== */}
      <section className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
            {/* Image */}
            <StaggerItem delay={0}>
              <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
                <Image
                  src="/images/infrastructure/infrastructure-quality-control-packing-final-v3.png"
                  alt="Quality control and professional packing operations"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center"
                />
              </div>
            </StaggerItem>

            {/* Content */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Quality Control & Packing
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={220}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">
                  Quality Review
                  <span className="block text-[#9f7f36]">
                    Before Final Presentation
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={320}>
                <p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">
                  Processing and packing are connected through an organised
                  product-review stage.
                </p>
              </StaggerItem>

              <StaggerItem delay={420}>
                <p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  Processed batches are reviewed for relevant physical
                  characteristics, appearance and packing readiness before
                  products move into the selected filling format.
                </p>
              </StaggerItem>

              <StaggerItem delay={500}>
                <p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  Depending on buyer requirements, products may be prepared in
                  retail pouches, metallic packs, jars, boxes or bulk formats.
                  Filling, sealing, label coordination and carton packing are
                  planned around the selected commercial presentation.
                </p>
              </StaggerItem>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {qualityPoints.map((point, index) => (
                  <StaggerItem key={point} delay={580 + index * 70}>
                    <div className="flex h-full items-start gap-3 border-b border-[#173b2a]/10 pb-4">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">
                        ✓
                      </span>

                      <span className="text-[15px] font-medium leading-7">
                        {point}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          05 — WAREHOUSE & DISPATCH
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
            {/* Content */}
            <div>
              <StaggerItem delay={0}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Warehouse & Dispatch
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">
                  Organised Storage.
                  <span className="block text-[#9f7f36]">
                    Export-Ready Dispatch.
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">
                  The final manufacturing stage prepares completed orders for
                  their next commercial destination.
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  Finished products, packing materials and completed orders are
                  organised to support clearer inventory movement and dispatch
                  preparation.
                </p>
              </StaggerItem>

              <StaggerItem delay={440}>
                <p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">
                  Completed cartons may be prepared for transporter collection,
                  palletisation, container loading or movement to the designated
                  logistics location according to the shipment plan.
                </p>
              </StaggerItem>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {dispatchPoints.map((point, index) => (
                  <StaggerItem key={point} delay={520 + index * 70}>
                    <div className="flex h-full items-start gap-3 rounded-[16px] border border-[#C9A962]/25 bg-[#f5f0e6]/70 p-4">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">
                        ✓
                      </span>

                      <span className="text-[15px] font-medium leading-7">
                        {point}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>

            {/* Image */}
            <StaggerItem delay={180}>
              <div className="group relative aspect-video w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
                <Image
                  src="/images/infrastructure/infrastructure-warehouse-dispatch-final-v2.png"
                  alt="Warehouse export packing and dispatch preparation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/60 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">
                    Final Logistics Preparation
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">
                    From Finished Carton to Dispatch-Ready Order
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A962]">
              Manufacturing Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Manufacture and Pack
              <span className="block text-[#E4C878]">for Your Brand?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
              Share your product category, quantity, pack size, private-label
              requirements and destination market with our team.
            </p>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-4 bg-[#C9A962] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_20px_55px_rgba(201,169,98,0.28)]"
            >
              Contact Our Production Team
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <FooterSection />
      <FloatingContactButtons />
      <PremiumCursor />
      <MagneticButtons />
    </main>
  );
}