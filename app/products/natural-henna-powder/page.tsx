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
    "Natural Henna Powder | Premium Export Grade | Shivesh International",
  description:
    "Premium export-grade natural henna powder from India for hair coloring, herbal cosmetics, salons, private label and bulk supply.",
};

export default function NaturalHennaPowderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/henna-powder/natural-henna-powder-hero-final-v2.png"
          alt="Premium export-grade natural henna powder"
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
                Natural Henna
                <br />
                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Powder
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-5 font-[family-name:var(--font-playfair)] text-xl italic text-[#E4C878] sm:text-2xl">
                Pure by Nature. Trusted Worldwide.
              </p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Premium-quality natural henna powder prepared from carefully
                selected henna leaves for international buyers, private-label
                brands, salons and professional herbal-product businesses.
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
                  ["Fine", "Mesh"],
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

      {/* ABOUT NATURAL HENNA POWDER */}
<section
  id="product-overview"
  className="relative overflow-hidden bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
>
  <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[140px]" />

  <RevealOnScroll>
    <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-20">

      {/* IMAGE */}

      <StaggerItem delay={0}>
        <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.16)]">

          <Image
            src="/images/products/henna-powder/natural-henna-about-model-holding-box-final-v1.png"
            alt="Premium Natural Henna Powder"
            fill
            className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/70 via-transparent to-black/10" />

        </div>
      </StaggerItem>

      {/* CONTENT */}

      <div>

        <StaggerItem delay={120}>
          <div className="mb-7 flex items-center gap-5">

            <span className="h-[3px] w-16 bg-[#C9A962]" />

            <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
              About Natural Henna Powder
            </span>

          </div>
        </StaggerItem>

        <StaggerItem delay={240}>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight">
            A Premium Botanical Powder
            <br />
            Prepared from
            <span className="text-[#9f7f36]">
              {" "}Lawsonia Inermis
            </span>
          </h2>
        </StaggerItem>

        <StaggerItem delay={360}>
          <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
            Carefully processed for professional buyers,
            private-label brands, salons and international markets.
          </p>
        </StaggerItem>

        <StaggerItem delay={480}>
          <div className="mt-8 space-y-6">

            <p className="text-lg leading-9 text-[#4c5f54]">
              Natural Henna Powder is obtained from the dried leaves
              of the henna plant, botanically known as
              <strong> Lawsonia inermis.</strong>
            </p>

            <p className="text-lg leading-9 text-[#4c5f54]">
              It has been traditionally valued for botanical hair
              colouring, herbal hair care and cosmetic preparations.
            </p>

            <p className="text-lg leading-9 text-[#4c5f54]">
              Shivesh International supplies export-grade Natural
              Henna Powder for wholesalers, distributors,
              cosmetic manufacturers, private-label businesses
              and professional salon markets.
            </p>

          </div>
        </StaggerItem>

      </div>

    </div>
  </RevealOnScroll>

</section>
    
            {/* SOJAT ORIGIN STORY */}
      <section className="relative overflow-hidden bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <StaggerItem delay={0}>
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                    The Origin of Our Henna
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Sourced from the Henna-Growing Region of
                  <span className="text-[#9f7f36]">
                    {" "}Sojat, Rajasthan
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Our raw henna leaves are sourced from Sojat City and its
                  surrounding henna-growing region in Pali district, Rajasthan,
                  India.
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <div className="mt-8 space-y-5">
                  <p className="text-lg leading-9 text-[#4c5f54]">
                    Sojat is widely associated with henna cultivation and the
                    traditional production of mehndi. The region has developed
                    a strong identity around the farming, collection and
                    commercial handling of henna leaves.
                  </p>

                  <p className="text-lg leading-9 text-[#4c5f54]">
                    We source selected raw henna leaves from this recognised
                    growing region and coordinate their movement for further
                    cleaning, drying preparation, grinding, sieving and packing.
                  </p>

                  <p className="text-lg leading-9 text-[#4c5f54]">
                    Highlighting the origin helps buyers understand where the
                    botanical raw material begins its journey before becoming
                    finished natural henna powder.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    "Sojat City, Pali District",
                    "Rajasthan, India",
                    "Recognised henna-growing region",
                    "Selected raw henna leaves",
                    "Farm-origin sourcing",
                    "Organised onward processing",
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
              <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#d8d0bf] shadow-[0_30px_85px_rgba(0,0,0,0.16)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-origin-sojat-rajasthan-final-v1.png"
                  alt="Henna farming and raw henna leaves sourced from Sojat Rajasthan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-[#E4C878]">
                    Raw Material Origin
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Sojat City, Rajasthan, India
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
            {/* FRESH GREEN HENNA POWDER BOWL */}
            <StaggerItem delay={0}>
              <div className="group relative min-h-[430px] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-benefits-healthy-hair-final-v1.png"
                  alt="Fresh vibrant green natural henna powder in a bowl"
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
                    Vibrant Green Natural Henna Powder
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* BENEFITS CONTENT */}
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
                  Traditional Botanical Care for Hair and Cosmetic Applications
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Natural henna is traditionally used across hair-care,
                  professional beauty and herbal cosmetic preparations.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Supports natural hair colouring",
                    "Traditionally used for hair conditioning",
                    "Suitable for botanical hair-care formulations",
                    "Used in professional salon applications",
                    "Suitable for herbal cosmetic products",
                    "Supports retail and private-label ranges",
                    "Can be used in mehndi preparations",
                    "Available for bulk commercial supply",
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
                A concise overview of our Natural Henna Powder for commercial,
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
                  ["Product Name", "Natural Henna Powder"],
                  ["Botanical Name", "Lawsonia inermis"],
                  ["Country of Origin", "India"],
                  ["Raw Material Origin", "Sojat, Rajasthan, India"],
                  ["Plant Part Used", "Leaves"],
                  ["Form", "Fine Natural Powder"],
                  ["Appearance", "Fresh Vibrant Green Powder"],
                  ["Colour", "Natural Green"],
                  ["Odour", "Characteristic Herbal"],
                  ["Mesh Size", "As per Agreed Product Grade"],
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
            {/* HOW TO USE */}
      <section className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                How to Use
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                A Simple Step-by-Step Henna Application Guide
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                The exact preparation and application method may vary according
                to hair type, product grade, desired result and professional
                formulation requirements.
              </p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {[
                {
                  step: "01",
                  icon: "🌿",
                  title: "Take Powder",
                  description:
                    "Place the required quantity of fresh green henna powder in a clean, non-metallic bowl.",
                },
                {
                  step: "02",
                  icon: "💧",
                  title: "Add Liquid",
                  description:
                    "Gradually add water or the preferred mixing liquid while stirring continuously.",
                },
                {
                  step: "03",
                  icon: "🥣",
                  title: "Make a Paste",
                  description:
                    "Mix until a smooth, lump-free and easily spreadable paste is formed.",
                },
                {
                  step: "04",
                  icon: "⏳",
                  title: "Allow to Rest",
                  description:
                    "Resting time may be selected according to the product and preferred application method.",
                },
                {
                  step: "05",
                  icon: "💇",
                  title: "Apply Evenly",
                  description:
                    "Apply the prepared paste evenly to clean hair using gloves and suitable application tools.",
                },
                {
                  step: "06",
                  icon: "⌛",
                  title: "Leave on Hair",
                  description:
                    "Keep the paste on the hair for the time appropriate to the desired result and hair condition.",
                },
                {
                  step: "07",
                  icon: "🚿",
                  title: "Rinse Thoroughly",
                  description:
                    "Rinse thoroughly with water and follow the preferred post-application hair-care routine.",
                },
              ].map((item, index) => (
                <StaggerItem key={item.step} delay={(index % 4) * 80}>
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#C9A962]/28 bg-[#ede5d7] p-5 text-center transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_25px_65px_rgba(0,0,0,0.13)]">
                    <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[60%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/65 to-transparent transition-all duration-[1100ms] group-hover:left-[150%]" />

                    <div className="relative">
                      <p className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#C9A962]/50">
                        {item.step}
                      </p>

                      {/* Temporary small visual.
                          Later this emoji can be replaced with a real image. */}
                      <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-4xl shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-105">
                        {item.icon}
                      </div>

                      <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight">
                        {item.title}
                      </h3>

                      <div className="mx-auto mt-4 h-px w-12 bg-[#C9A962]" />

                      <p className="mt-5 text-sm leading-7 text-[#4c5f54]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
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
              <div className="group relative mt-5 aspect-[1983/793] w-full overflow-hidden rounded-[24px] border border-[#C9A962]/30 bg-[#071b14] shadow-[0_20px_55px_rgba(0,0,0,0.11)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-packaging-options-international-final-v3.png"
                  alt="Natural henna powder packaging in pouches, boxes, jars and export cartons"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
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
              Natural Henna Powder Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Source Natural Henna Powder from India?
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