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
    "Natural Indigo Powder | Premium Export Grade | Shivesh International",
  description:
    "Premium export-grade natural indigo powder from India for botanical hair colouring, salons, private-label brands and bulk supply.",
};

export default function NaturalIndigoPowderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/natural-indigo-powder/natural-indigo-powder-hero-ultrawide-4k-final-v2.png"
          alt="Premium export-grade natural indigo powder"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/68 via-[#102f23]/28 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Premium Export Grade
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[680px] font-[family-name:var(--font-playfair)] text-[clamp(2.65rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Natural Indigo
                <br />
                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Powder
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-5 font-[family-name:var(--font-playfair)] text-xl italic text-[#E4C878] sm:text-2xl">
                Botanical Colour. Naturally Darker Results.
              </p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Premium-quality natural indigo powder prepared from carefully
                selected Indigofera tinctoria leaves for international buyers,
                private-label brands, salons and botanical hair-colour businesses.
              </p>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#product-overview"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  Explore Product
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/32 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Quotation
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-7 grid max-w-[680px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["100%", "Natural"],
                  ["Fine", "Microfine"],
                  ["Export", "Grade"],
                  ["OEM", "Private Label"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-white/12 bg-black/12 px-4 py-3 backdrop-blur-md"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#E4C878]">
                      {value}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#F5F0E6]/52">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>
      {/* ABOUT NATURAL INDIGO POWDER */}
      <section
        id="product-overview"
        className="relative overflow-hidden bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[140px]" />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.16)]">
                <Image
                  src="/images/products/natural-indigo-powder/natural-indigo-about-two-models-holding-box-final-v1.png"
                  alt="Premium Natural Indigo Powder"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/70 via-transparent to-black/10" />
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                    About Natural Indigo Powder
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight">
                  A Premium Botanical Powder
                  <br />
                  Prepared from
                  <span className="text-[#9f7f36]"> Indigofera tinctoria</span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={320}>
                <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-3">
                  {[
                    { symbol: "BT", title: "Indigofera tinctoria" },
                    { symbol: "IN", title: "South India Origin" },
                    { symbol: "3X", title: "Triple Sifted Microfine Powder" },
                    { symbol: "FP", title: "Fine Natural Powder" },
                    { symbol: "EX", title: "Export Grade" },
                    { symbol: "PL", title: "Private Label Ready" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex min-h-[72px] items-center gap-3 rounded-[18px] border border-[#C9A962]/35 bg-white/35 px-4 py-3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-white/65 hover:shadow-[0_14px_35px_rgba(201,169,98,0.14)]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[9px] font-bold tracking-[0.08em] text-[#E4C878]">
                        {item.symbol}
                      </div>
                      <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-[#8B6A1E]">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem delay={420}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Triple-sifted microfine botanical powder prepared for professional salons,
                  private-label brands and international hair-colour markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={520}>
                <div className="mt-8 space-y-6">
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    Natural Indigo Powder is prepared from the dried leaves of the indigo
                    plant, botanically known as <strong>Indigofera tinctoria.</strong>
                  </p>
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    It is traditionally used as a botanical hair-colour ingredient and is
                    especially valued as the second step after Natural Henna for achieving
                    naturally darker brown to black hair shades.
                  </p>
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    Shivesh International supplies Natural Indigo Powder for wholesalers,
                    distributors, cosmetic manufacturers, salons, private-label businesses
                    and international buyers.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* THE ORIGIN OF OUR INDIGO */}
      <section className="relative overflow-hidden bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <StaggerItem delay={0}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    The Origin of Our Indigo
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Sourced from Selected Indigo-Growing Regions of
                  <span className="text-[#9f7f36]"> South India</span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Natural Indigo Powder is prepared from the leaves of Indigofera
                  tinctoria, traditionally cultivated across selected regions of
                  southern India.
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    The warm climate and agricultural conditions of South India
                    support the cultivation of Indigofera tinctoria for botanical
                    and commercial applications.
                  </p>
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    Selected indigo leaves are collected and processed into a fine,
                    triple-sifted microfine powder for professional, retail, bulk
                    and private-label requirements.
                  </p>
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    The botanical origin helps buyers understand the journey of
                    the raw material before it becomes finished Natural Indigo Powder.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Selected South India origin",
                    "Indigofera tinctoria leaves",
                    "Botanical raw-material sourcing",
                    "Triple-sifted microfine powder",
                    "Organised onward processing",
                    "Export-oriented supply",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-4 border border-[#C9A962]/25 bg-[#f5f0e6] p-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C9A962]" />
                      <span className="font-medium leading-7 text-[#173b2a]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>

            <StaggerItem delay={120}>
              <div className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#d8d0bf] shadow-[0_26px_70px_rgba(0,0,0,0.14)]">
                <Image
                  src="/images/products/natural-indigo-powder/natural-indigo-origin-south-india-farm-final-v1.png"
                  alt="Natural Indigo Powder sourced from South India"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Raw Material Origin
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Selected Regions of South India
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
      {/* BENEFITS */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[430px] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
                <Image
                  src="/images/products/natural-indigo-powder/natural-indigo-benefits-dark-shiny-hair-final-v1.png"
                  alt="Microfine Natural Indigo Powder in a bowl"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Fresh Powder Presentation
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white">
                    Microfine Natural Indigo Powder
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                    Benefits
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Botanical Hair Colour for Naturally Darker Shades
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Natural Indigo Powder is traditionally used in botanical
                  hair-colour applications and is especially valued after Natural
                  Henna for achieving naturally darker brown to black hair shades.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Supports naturally darker hair shades",
                    "Traditionally used after henna for black hair",
                    "Suitable for botanical hair-colour preparations",
                    "Used in professional salon applications",
                    "Supports brown-to-black colour development",
                    "Suitable for herbal cosmetic formulations",
                    "Available for retail and private-label ranges",
                    "Offered for bulk commercial supply",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 border-b border-[#C9A962]/15 pb-3"
                    >
                      <span className="mt-1 text-[#C9A962]">✓</span>
                      <span className="text-sm leading-6 text-[#F5F0E6]/72">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Product Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Technical Information
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                A concise overview of our Natural Indigo Powder for commercial,
                technical and product-evaluation requirements.
              </p>
            </div>

            <StaggerItem delay={120}>
              <div className="mt-12 overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] shadow-[0_24px_65px_rgba(0,0,0,0.11)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] bg-[#102f23] px-5 py-4 text-[#F5F0E6] sm:px-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Parameter
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Product Information
                  </p>
                </div>

                {[
                  ["Product Name", "Natural Indigo Powder"],
                  ["Botanical Name", "Indigofera tinctoria"],
                  ["Country of Origin", "India"],
                  ["Raw Material Origin", "Selected Regions of South India"],
                  ["Plant Part Used", "Leaves"],
                  ["Form", "Fine Natural Powder"],
                  ["Appearance", "Fine Green Botanical Powder"],
                  ["Colour", "Natural Green"],
                  ["Odour", "Characteristic Herbal"],
                  ["Powder Grade", "Triple Sifted Microfine"],
                  ["Moisture", "As per Agreed Specification"],
                  ["Shelf Life", "24 Months under Recommended Storage"],
                  ["Storage", "Store in a Cool, Dry Place"],
                  ["Packaging", "Retail, Professional, Bulk & Private Label"],
                ].map(([parameter, value], index) => (
                  <div
                    key={parameter}
                    className={`grid grid-cols-[0.9fr_1.1fr] border-t border-[#173b2a]/10 px-5 py-4 transition-colors duration-300 hover:bg-[#C9A962]/8 sm:px-7 ${
                      index % 2 === 0 ? "bg-[#f5f0e6]" : "bg-[#eee6d8]"
                    }`}
                  >
                    <p className="pr-4 text-sm font-bold uppercase tracking-[0.12em] text-[#8B6A1E] sm:text-[15px]">
                      {parameter}
                    </p>

                    <p className="pl-4 leading-7 text-[#173b2a]">{value}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-7 text-[#4c5f54]/72">
              Exact values may vary according to the agreed product grade,
              buyer specification and batch-specific Certificate of Analysis.
            </p>
          </div>
        </RevealOnScroll>
      </section>
      {/* HOW TO USE: NATURAL HENNA + INDIGO METHOD */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                How to Use
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Natural Henna + Indigo Method for Naturally Black Hair
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Follow this traditional two-step botanical application process:
                Natural Henna first, followed by Natural Indigo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <StaggerItem delay={0}>
                <article className="relative h-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ede5d7] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.10)] sm:p-9">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">
                      01
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#9f7f36]">
                        Step 1
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                        Natural Henna
                      </h3>
                    </div>
                  </div>

                  <div className="mt-7 h-px bg-[#C9A962]/30" />

                  <div className="mt-7 space-y-4 text-base leading-8 text-[#4c5f54]">
                    <p>
                      Mix the required quantity of Natural Henna Powder with hot
                      water to prepare a smooth, easily applicable paste. Allow
                      the paste to rest for approximately 3 hours.
                    </p>
                    <p>
                      Wear surgical gloves to protect your hands from staining.
                      Divide the hair into four sections and apply the paste
                      evenly from the roots to the tips.
                    </p>
                    <p>
                      Leave the paste on the hair for approximately 3 hours.
                      Rinse thoroughly with water and comb the hair into the
                      preferred style.
                    </p>
                  </div>

                  <div className="mt-7 rounded-[18px] border border-[#C9A962]/25 bg-[#f5f0e6] px-5 py-4">
                    <p className="text-sm font-semibold leading-7 text-[#8B6A1E]">
                      Step 2 may be followed immediately after rinsing or on the
                      following day.
                    </p>
                  </div>
                </article>
              </StaggerItem>

              <StaggerItem delay={120}>
                <article className="relative h-full overflow-hidden rounded-[28px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:p-9">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#173b2a] font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">
                      02
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A962]">
                        Step 2
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                        Natural Indigo
                      </h3>
                    </div>
                  </div>

                  <div className="mt-7 h-px bg-[#C9A962]/25" />

                  <div className="mt-7 space-y-4 text-base leading-8 text-[#F5F0E6]/70">
                    <p>
                      Mix Natural Indigo Powder with lukewarm water to prepare a
                      smooth, easily applicable paste. Use the freshly prepared
                      paste immediately.
                    </p>
                    <p>
                      Wear surgical gloves to protect your hands from staining.
                      Divide the hair into four sections and apply the paste
                      evenly from the roots to the tips.
                    </p>
                    <p>
                      Leave the paste on the hair for approximately 3 hours and
                      then rinse thoroughly with water.
                    </p>
                  </div>

                  <div className="mt-7 rounded-[18px] border border-[#C9A962]/30 bg-white/[0.04] px-5 py-4">
                    <p className="text-sm font-semibold leading-7 text-[#E4C878]">
                      For better colour development, use a hair dryer for
                      approximately 10–15 minutes after rinsing.
                    </p>
                  </div>
                </article>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PACKAGING & PRIVATE LABEL */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Packaging & Private Label
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Flexible Packaging for Retail, Bulk and Buyer Brands
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Packaging formats can be discussed according to product size,
                order quantity, branding requirements and commercial
                feasibility.
              </p>
            </div>

            {/* TWO COMPACT INFORMATION CARDS */}
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <StaggerItem delay={0}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9f7f36]">
                    Available Pack Sizes
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Retail and Bulk Packing
                  </h3>

                  <p className="mt-5 leading-8 text-[#4c5f54]">
                    100 g, 200 g, 500 g and 1 kg high-class
                    silver, golden and coloured pouches. For bulk supply, 20 kg
                    and 25 kg double-layer vacuum-sealed packing can be offered
                    to help maintain freshness.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem delay={120}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Packaging Formats
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Multiple Buyer-Oriented Options
                  </h3>

                  <p className="mt-5 leading-8 text-[#F5F0E6]/68">
                    Available in metallic pouches, coloured pouches, printed
                    pouches, printed paper boxes, cartons, jars and
                    private-label packaging according to buyer requirements.
                  </p>
                </article>
              </StaggerItem>
            </div>

            {/* PACKAGING IMAGE STRIP */}
            <StaggerItem delay={180}>
              <div className="group relative mt-5 aspect-[5/2] w-full overflow-hidden rounded-[24px] border border-[#C9A962]/30 bg-[#071b14] shadow-[0_20px_55px_rgba(0,0,0,0.11)]">
                <Image
                  src="/images/products/natural-indigo-powder/natural-indigo-packaging-private-label-final-v1.png"
                  alt="Natural indigo powder packaging in pouches, boxes, jars and export cartons"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/75 via-[#102f23]/35 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Complete Packaging Range
                    </p>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      Retail, Bulk and Private-Label Presentation
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* PRIVATE LABEL SERVICES */}
            <div className="mt-10">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                  Private Label Services
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    code: "OEM",
                    title: "OEM Manufacturing",
                  },
                  {
                    code: "ODM",
                    title: "ODM Support",
                  },
                  {
                    code: "BR",
                    title: "Custom Branding",
                  },
                  {
                    code: "BX",
                    title: "Designer Boxes",
                  },
                  {
                    code: "MP",
                    title: "Metallic Pouches",
                  },
                  {
                    code: "CT",
                    title: "Bulk Export Cartons",
                  },
                ].map((service, index) => (
                  <StaggerItem key={service.title} delay={(index % 3) * 80}>
                    <article className="flex items-center gap-4 rounded-[20px] border border-[#C9A962]/28 bg-[#f5f0e6] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_16px_45px_rgba(0,0,0,0.09)]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-[10px] font-bold tracking-[0.08em] text-[#E4C878]">
                        {service.code}
                      </div>

                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                        {service.title}
                      </h3>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
            
            {/* FINAL PRODUCT CTA */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Natural Indigo Powder Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Source Natural Indigo Powder from India?
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#F5F0E6]/65">
              Share your required quantity, mesh, packaging format, destination
              country and private-label needs. Our team will review your enquiry
              and guide you with the next practical step.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request Quotation
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                WhatsApp Our Team
                <span>→</span>
              </a>
            </div>
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