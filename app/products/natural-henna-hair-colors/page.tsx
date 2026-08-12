import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import GoldenParticles from "@/app/components/GoldenParticles";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import ProductCardModal from "@/app/components/ProductCardModal";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title:
    "Natural Henna Hair Colors | 18 Premium Shades | Shivesh International",
  description:
    "Explore 18 premium Natural Henna Hair Colors developed for professional salons, importers, distributors, private-label brands and international cosmetic markets.",
};



export default function NaturalHennaHairColorsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v2.png"
          alt="Complete collection of 18 Natural Henna Hair Colors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Lighter overlays keep the image visible while protecting text contrast. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/62 via-[#102f23]/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/8" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[700px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Premium Botanical Hair Colour Collection
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[700px] font-[family-name:var(--font-playfair)] text-[clamp(2.55rem,4vw,4.5rem)] font-medium leading-[1.07] tracking-[-0.035em] text-[#F5F0E6]">
                Natural Henna
                <br />
                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Hair Colors
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-5 font-[family-name:var(--font-playfair)] text-xl italic text-[#E4C878] sm:text-2xl">
                18 Naturally Inspired Shades. Crafted for Global Markets.
              </p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Discover our premium collection of Natural Henna Hair Colors,
                carefully developed with botanical ingredients for professional
                salons, importers, distributors, private-label brands and
                international cosmetic businesses.
              </p>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#shade-collection"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  Explore 18 Shades
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/28 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Quotation
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-7 grid max-w-[700px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["18", "Premium Shades"],
                  ["Botanical", "Formula"],
                  ["Export", "Grade"],
                  ["OEM", "Private Label"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-white/12 bg-black/10 px-4 py-3 backdrop-blur-md"
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

      {/* ABOUT NATURAL HENNA HAIR COLORS */}
      <section
        id="product-overview"
        className="relative overflow-hidden bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            {/* IMAGE */}
            <StaggerItem delay={0}>
              <div className="group relative min-h-[620px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)] lg:min-h-[760px]">
                <Image
                  src="/images/products/henna-hair-colors/natural-henna-hair-colors-about-final-v1.png"
                  alt="Premium Natural Henna Hair Colors collection"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#071b14]/55 via-[#071b14]/10 to-transparent" />

                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Complete Botanical Collection
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    18 Natural Henna Hair Color Shades
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* CONTENT */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    About Natural Henna Hair Colors
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Premium Botanical Hair Colors
                  <span className="block text-[#9f7f36]">
                    Inspired by Nature
                  </span>
                </h2>
              </StaggerItem>

              {/* COMPACT PREMIUM HIGHLIGHTS */}

              <StaggerItem delay={320}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  A professionally developed collection of 18 naturally inspired
                  powder hair colours created for modern botanical beauty
                  markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={440}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Natural Henna Hair Colors are carefully developed by
                    combining selected botanical ingredients with traditional
                    herbal knowledge and modern product presentation. The
                    collection offers 18 distinctive shades, ranging from
                    Natural Black Henna Hair Color and Natural Dark Brown Henna
                    Hair Color to Natural Burgundy Henna Hair Color, Natural
                    Blonde Henna Hair Color and Natural Strawberry Blonde Henna
                    Hair Color.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Each shade is supplied in fine powder form and is designed
                    for smooth preparation, even application and naturally
                    inspired colour results. The final appearance may differ
                    according to the original hair colour, grey percentage, hair
                    condition and selected application method.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    This broad shade portfolio enables importers, distributors,
                    salon chains and cosmetic brands to offer multiple colour
                    choices under one coordinated botanical hair-colour
                    category. Retail, professional and private-label
                    presentation options can be developed according to the
                    buyer&apos;s commercial requirements.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Shivesh International supports qualified international
                    buyers with export-oriented supply, flexible order
                    coordination, customised branding and packaging solutions
                    for professional and retail markets.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={560}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#shade-collection"
                    className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    View Complete Collection
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]"
                  >
                    Discuss Private Label
                    <span>→</span>
                  </Link>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMPLETE 18-SHADE COLLECTION */}
      <section
        id="shade-collection"
        className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Complete Shade Collection
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Explore All 18 Natural Henna Hair Colors
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                A complete botanical hair-colour portfolio created for
                professional salons, distributors, importers and private-label
                brands worldwide.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {[
                {
                  name: "Natural Black Henna Hair Color",
                  tone: "Rich Botanical Black",
                  image:
                    "/images/products/henna-hair-colors/01-natural-black-henna-hair-color-final.png"
                },
                {
                  name: "Natural Dark Brown Henna Hair Color",
                  tone: "Deep Dark Brown Tone",
                  image:
                    "/images/products/henna-hair-colors/02-natural-dark-brown-henna-hair-color-final.png"
                },
                {
                  name: "Natural Medium Brown Henna Hair Color",
                  tone: "Balanced Medium Brown",
                  image:
                    "/images/products/henna-hair-colors/03-natural-medium-brown-henna-hair-color-final.png"
                },
                {
                  name: "Natural Brown Henna Hair Color",
                  tone: "Classic Natural Brown",
                  image:
                    "/images/products/henna-hair-colors/04-natural-brown-henna-hair-color-final.png"
                },
                {
                  name: "Natural Light Brown Henna Hair Color",
                  tone: "Soft Light Brown Shade",
                  image:
                    "/images/products/henna-hair-colors/05-natural-light-brown-henna-hair-color-final.png",
                },
                {
                  name: "Natural Golden Brown Henna Hair Color",
                  tone: "Warm Golden Brown",
                  image:
                    "/images/products/henna-hair-colors/06-natural-golden-brown-henna-hair-color-final.png",
                },
                {
                  name: "Natural Copper Brown Henna Hair Color",
                  tone: "Warm Copper-Brown Tone",
                  image:
                    "/images/products/henna-hair-colors/07-natural-copper-brown-henna-hair-color-final.png",
                },
                {
                  name: "Natural Chestnut Henna Hair Color",
                  tone: "Elegant Chestnut Brown",
                  image:
                    "/images/products/henna-hair-colors/08-natural-chestnut-henna-hair-color-final.png",
                },
                {
                  name: "Natural Mahogany Henna Hair Color",
                  tone: "Deep Mahogany Tone",
                  image:
                    "/images/products/henna-hair-colors/09-natural-mahogany-henna-hair-color-final.png",
                },
                {
                  name: "Natural Burgundy Henna Hair Color",
                  tone: "Rich Burgundy Shade",
                  image:
                    "/images/products/henna-hair-colors/10-natural-burgundy-henna-hair-color-final.png",
                },
                {
                  name: "Natural Wine Red Henna Hair Color",
                  tone: "Elegant Wine-Red Tone",
                  image:
                    "/images/products/henna-hair-colors/11-natural-wine-red-henna-hair-color-final.png",
                },
                {
                  name: "Natural Red Henna Hair Color",
                  tone: "Vibrant Natural Red",
                  image:
                    "/images/products/henna-hair-colors/12-natural-red-henna-hair-color-final.png",
                },
                {
                  name: "Natural Auburn Henna Hair Color",
                  tone: "Warm Auburn Shade",
                  image:
                    "/images/products/henna-hair-colors/13-natural-auburn-henna-hair-color-final.png",
                },
                {
                  name: "Natural Orange Henna Hair Color",
                  tone: "Bright Botanical Orange",
                  image:
                    "/images/products/henna-hair-colors/14-natural-orange-henna-hair-color-final.png",
                },
                {
                  name: "Natural Blonde Henna Hair Color",
                  tone: "Soft Blonde Tone",
                  image:
                    "/images/products/henna-hair-colors/15-natural-blonde-henna-hair-color-final.png",
                },
                {
                  name: "Natural Ginger Blonde Henna Hair Color",
                  tone: "Warm Ginger-Blonde",
                  image:
                    "/images/products/henna-hair-colors/16-natural-ginger-blonde-henna-hair-color-final.png",
                },
                {
                  name: "Natural Strawberry Blonde Henna Hair Color",
                  tone: "Soft Strawberry-Blonde",
                  image:
                    "/images/products/henna-hair-colors/17-natural-strawberry-blonde-henna-hair-color-final.png",
                },
                {
                  name: "Natural Henna Hair Treatment",
                  tone: "Botanical Hair-Care Treatment",
                  image:
                    "/images/products/henna-hair-colors/18-natural-henna-hair-treatment-final.png",
                },
              ].map((shade, index) => (
                <StaggerItem key={shade.name} delay={(index % 6) * 55}>
                  <article className="group relative h-full overflow-hidden rounded-[22px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_14px_38px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_55px_rgba(0,0,0,0.26)]">
                    <div className="relative aspect-square overflow-hidden bg-[#ebe3d5]">
                      <ProductCardModal
                        src={shade.image}
                        alt={shade.name}
                        category="Premium Botanical Shade"
                        description="A premium Natural Henna Hair Color available for professional salons, retail markets and selected private-label requirements."
                      >
                        <Image
                          src={shade.image}
                          alt={shade.name}
                          width={260}
                          height={260}
                          className="h-full w-full object-cover object-center"
                        />
                      </ProductCardModal>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/18 via-transparent to-white/10" />

                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-[9px] font-bold text-[#E4C878]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                        Premium Botanical Shade
                      </p>

                      <h3 className="mt-2 min-h-[66px] font-[family-name:var(--font-playfair)] text-[17px] font-semibold leading-[1.35] text-[#173b2a]">
                        {shade.name}
                      </h3>

                      <div className="mt-3 h-px w-10 bg-[#C9A962]" />

                      <p className="mt-3 text-[12px] leading-5 text-[#4c5f54]">
                        {shade.tone}
                      </p>

                      
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-5 text-center">
              <p className="text-sm leading-7 text-[#F5F0E6]/65">
                Shade appearance may vary according to the original hair colour,
                hair condition, preparation method and application time.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* PROFESSIONAL SHADE SELECTION GUIDE */}
      <section className="relative overflow-hidden bg-[#ede5d7] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Professional Shade Guide
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Compare Our Complete Botanical Hair Color Range
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                A compact shade reference designed to help professional buyers,
                salons and private-label brands compare the complete collection
                at a glance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {[
                {
                  number: "01",
                  name: "Natural Black Henna Hair Color",
                  family: "Black",
                  image: "/images/products/henna-hair-colors/shade-guide/01-natural-black-hair-shade-closeup-final.png",
                  colors: ["#030303", "#242424", "#080808"],
                },
                {
                  number: "02",
                  name: "Natural Dark Brown Henna Hair Color",
                  family: "Dark Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/02-natural-dark-brown-hair-shade-closeup-final.png",
                  colors: ["#1b0d09", "#553225", "#21110c"],
                },
                {
                  number: "03",
                  name: "Natural Medium Brown Henna Hair Color",
                  family: "Medium Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/03-natural-medium-brown-hair-shade-closeup-final.png",
                  colors: ["#3b2117", "#845a40", "#43291d"],
                },
                {
                  number: "04",
                  name: "Natural Brown Henna Hair Color",
                  family: "Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/04-natural-brown-hair-shade-closeup-final.png",
                  colors: ["#4b2a1c", "#966648", "#4d2d20"],
                },
                {
                  number: "05",
                  name: "Natural Light Brown Henna Hair Color",
                  family: "Light Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/05-natural-light-brown-hair-shade-closeup-final.png",
                  colors: ["#68452f", "#b88b66", "#6e4932"],
                },
                {
                  number: "06",
                  name: "Natural Golden Brown Henna Hair Color",
                  family: "Golden Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/06-natural-golden-brown-hair-shade-closeup-final.png",
                  colors: ["#62401d", "#c89745", "#6a451f"],
                },
                {
                  number: "07",
                  name: "Natural Copper Brown Henna Hair Color",
                  family: "Copper Brown",
                  image: "/images/products/henna-hair-colors/shade-guide/07-natural-copper-brown-hair-shade-closeup-final.png",
                  colors: ["#672b18", "#c86d37", "#6b2e1b"],
                },
                {
                  number: "08",
                  name: "Natural Chestnut Henna Hair Color",
                  family: "Chestnut",
                  image: "/images/products/henna-hair-colors/shade-guide/08-natural-chestnut-hair-shade-closeup-final.png",
                  colors: ["#421b15", "#98503b", "#481d17"],
                },
                {
                  number: "09",
                  name: "Natural Mahogany Henna Hair Color",
                  family: "Mahogany",
                  image: "/images/products/henna-hair-colors/shade-guide/09-natural-mahogany-hair-shade-closeup-final.png",
                  colors: ["#351012", "#81383a", "#3b1315"],
                },
                {
                  number: "10",
                  name: "Natural Burgundy Henna Hair Color",
                  family: "Burgundy",
                  image: "/images/products/henna-hair-colors/shade-guide/10-natural-burgundy-hair-shade-closeup-final.png",
                  colors: ["#300611", "#84213f", "#360812"],
                },
                {
                  number: "11",
                  name: "Natural Wine Red Henna Hair Color",
                  family: "Wine Red",
                  image: "/images/products/henna-hair-colors/shade-guide/11-natural-wine-red-hair-shade-closeup-final.png",
                  colors: ["#410719", "#9b2950", "#44091b"],
                },
                {
                  number: "12",
                  name: "Natural Red Henna Hair Color",
                  family: "Red",
                  image: "/images/products/henna-hair-colors/shade-guide/12-natural-red-hair-shade-closeup-final.png",
                  colors: ["#70120f", "#d24a38", "#711510"],
                },
                {
                  number: "13",
                  name: "Natural Auburn Henna Hair Color",
                  family: "Auburn",
                  image: "/images/products/henna-hair-colors/shade-guide/13-natural-auburn-hair-shade-closeup-final.png",
                  colors: ["#622718", "#b65b32", "#682a19"],
                },
                {
                  number: "14",
                  name: "Natural Orange Henna Hair Color",
                  family: "Orange",
                  image: "/images/products/henna-hair-colors/shade-guide/14-natural-orange-hair-shade-closeup-final.png",
                  colors: ["#91350f", "#ef842a", "#963b13"],
                },
                {
                  number: "15",
                  name: "Natural Blonde Henna Hair Color",
                  family: "Blonde",
                  image: "/images/products/henna-hair-colors/shade-guide/15-natural-blonde-hair-shade-closeup-final.png",
                  colors: ["#93672f", "#e4c27a", "#9a6d32"],
                },
                {
                  number: "16",
                  name: "Natural Ginger Blonde Henna Hair Color",
                  family: "Ginger Blonde",
                  image: "/images/products/henna-hair-colors/shade-guide/16-natural-ginger-blonde-hair-shade-closeup-final.png",
                  colors: ["#93471e", "#e49a52", "#994b20"],
                },
                {
                  number: "17",
                  name: "Natural Strawberry Blonde Henna Hair Color",
                  family: "Strawberry Blonde",
                  image: "/images/products/henna-hair-colors/shade-guide/17-natural-strawberry-blonde-hair-shade-closeup-final.png",
                  colors: ["#a25c3f", "#ebb08b", "#a45f42"],
                },
                {
                  number: "18",
                  name: "Natural Henna Hair Treatment",
                  family: "Hair Treatment",
                  image: "/images/products/henna-hair-colors/shade-guide/18-natural-henna-hair-treatment-glossy-black-final.png",
                  colors: ["#294a28", "#78935b", "#31572e"],
                },
              ].map((shade, index) => (
                <StaggerItem key={shade.name} delay={(index % 6) * 45}>
                  <article className="group h-full overflow-hidden rounded-[20px] border border-[#C9A962]/30 bg-[#f5f0e6] shadow-[0_12px_34px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_20px_48px_rgba(0,0,0,0.15)]">
                    {/* HAIR SHADE VISUAL */}
                    <div className="relative h-[128px] overflow-hidden bg-[#17120f]">
                      <ProductCardModal
                        src={shade.image}
                        alt={shade.name}
                        category="Professional Hair Shade Reference"
                        description={`View the approved ${shade.family} model hair colour and its complete designer packaging.`}
                      >
                        <div className="relative h-[128px] w-full overflow-hidden">
                          <Image
                            src={shade.image}
                            alt={`${shade.family} coloured hair reference`}
                            fill
                            sizes="(min-width: 1280px) 16vw, (min-width: 640px) 33vw, 50vw"
                            className="scale-[1.72] object-cover object-[76%_43%] transition-transform duration-1000 ease-out group-hover:scale-[1.9]"
                          />
                        </div>
                      </ProductCardModal>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-white/8" />

                      {/* Moving salon-light reflection on hover. */}
                      <div className="pointer-events-none absolute -left-[55%] top-0 h-full w-[34%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/38 to-transparent opacity-0 blur-[2px] transition-all duration-1000 group-hover:left-[125%] group-hover:opacity-100" />

                      <div className="absolute left-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/35 bg-black/25 px-2 text-[9px] font-bold text-white backdrop-blur-sm">
                        {shade.number}
                      </div>
                    </div>

                    {/* SHADE DETAILS */}
                    <div className="p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9f7f36]">
                        {shade.family}
                      </p>

                      <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-[15px] font-semibold leading-[1.35] text-[#173b2a]">
                        {shade.name}
                      </h3>

                      
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/30 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6] shadow-[0_18px_45px_rgba(0,0,0,0.13)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                Shade Result Notice
              </p>

              <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#F5F0E6]/68">
                The displayed shades are visual references only. Final colour
                appearance may vary according to the original hair colour, grey
                percentage, hair condition, preparation method, application time
                and individual hair characteristics.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* BOTANICAL ACTIVE INGREDIENTS */}
      <section className="relative overflow-hidden bg-[#f5f0e6] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Botanical Active Ingredients
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                A Carefully Selected Botanical Blend
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Our Natural Henna Hair Colors are developed with a coordinated
                selection of traditional botanical ingredients chosen for
                professional hair-colour and herbal hair-care formulations.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {[
                {
  name: "Henna",
  image:
    "/images/products/henna-hair-colors/botanical-ingredients/01-raw-henna-ingredient-final.png",
},
                {
                  name: "Indigo",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/02-raw-indigo-ingredient-final.png",
                },
                {
                  name: "Amla",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/03-raw-amla-ingredient-final.png",
                },
                {
                  name: "Shikakai",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/04-raw-shikakai-ingredient-final.png",
                },
                {
                  name: "Brahmi",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/05-raw-brahmi-ingredient-final.png",
                },
                {
                  name: "Bhringraj",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/06-raw-bhringraj-ingredient-final.png",
                },
                {
                  name: "Soapnut",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/07-raw-soapnut-ingredient-final.png",
                },
                {
                  name: "Manjistha",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/08-raw-manjistha-ingredient-final.png",
                },
                {
                  name: "Harad",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/09-raw-harad-ingredient-final.png",
                },
                {
                  name: "Baheda",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/10-raw-baheda-ingredient-final.png",
                },
                {
                  name: "Kamala",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/11-raw-kamala-ingredient-final.png",
                },
                {
                  name: "Hibiscus",
                  image:
                    "/images/products/henna-hair-colors/botanical-ingredients/12-raw-hibiscus-ingredient-final.png",
                },
              ].map((ingredient, index) => (
                <StaggerItem key={ingredient.name} delay={(index % 6) * 45}>
                  <article className="group flex min-h-[116px] items-center gap-3 rounded-[20px] border border-[#C9A962]/28 bg-[#ede5d7] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:bg-[#faf6ee] hover:shadow-[0_16px_42px_rgba(0,0,0,0.10)]">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#C9A962]/35 bg-[#e3dacb]">
                      <Image
                        src={ingredient.image}
                        alt={`${ingredient.name} botanical ingredient`}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/20 via-transparent to-white/10" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                        Botanical Ingredient
                      </p>

                      <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-[17px] font-semibold leading-6 text-[#173b2a]">
                        {ingredient.name}
                      </h3>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-4 text-center text-[#F5F0E6]">
              <p className="text-sm leading-7 text-[#F5F0E6]/68">
                The exact botanical composition may vary by shade, formulation
                and agreed buyer specification.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* WHY CHOOSE OUR NATURAL HENNA HAIR COLORS */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* IMAGE */}
            <StaggerItem delay={0}>
              <div className="group relative min-h-[450px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_28px_75px_rgba(0,0,0,0.26)]">
                <Image
                  src="/images/products/henna-hair-colors/natural-henna-hair-colors-why-choose-collection-final-v1.png"
                  alt="Complete Natural Henna Hair Colors collection"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Complete Botanical Portfolio
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    18 Natural Henna Hair Color Shades
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* CONTENT */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                    Why Choose Our Collection
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Developed for Professional, Retail and Private-Label Markets
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Our Natural Henna Hair Colors combine an extensive shade
                  portfolio with flexible manufacturing, packaging and branding
                  support for qualified international buyers.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "18 Premium Shades",
                      text: "A broad collection ranging from Natural Black Henna Hair Color to Natural Strawberry Blonde Henna Hair Color.",
                    },
                    {
                      title: "Botanical Hair-Colour Range",
                      text: "Naturally inspired powder hair colours developed for professional and commercial applications.",
                    },
                    {
                      title: "Triple-Sifted Microfine Powder",
                      text: "Fine powder texture supports smoother mixing, preparation and application.",
                    },
                    {
                      title: "Professional Market Support",
                      text: "Suitable for salon chains, importers, distributors, cosmetic brands and wholesalers.",
                    },
                    {
                      title: "Flexible Packaging Options",
                      text: "Available in retail pouches, boxes, professional packs and selected bulk formats.",
                    },
                    {
                      title: "Private-Label Manufacturing",
                      text: "OEM, ODM, custom branding and buyer-oriented packaging can be discussed.",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="border-b border-[#C9A962]/18 pb-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 text-[11px] text-[#E4C878]">
                          ✓
                        </span>

                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F5F0E6]">
                            {benefit.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#F5F0E6]/62">
                            {benefit.text}
                          </p>
                        </div>
                      </div>
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
                A concise technical overview of our Natural Henna Hair Colors
                for professional evaluation, commercial sourcing and
                private-label development.
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
                  ["Product Category", "Natural Henna Hair Colors"],
                  ["Available Shades", "18 Premium Shades"],
                  ["Product Form", "Fine Powder"],
                  ["Texture", "Triple-Sifted Microfine Powder"],
                  ["Botanical Base", "Henna and Selected Herbal Ingredients"],
                  ["Primary Application", "Botanical Hair Colouring"],
                  ["Preparation", "Mix with Warm Water"],
                  ["Application Time", "Approximately 1 Hour"],
                  ["Appearance", "Shade-Specific Fine Powder"],
                  ["Odour", "Characteristic Herbal"],
                  ["Country of Origin", "India"],
                  ["Shelf Life", "24 Months under Recommended Storage"],
                  ["Storage", "Store in a Cool, Dry Place"],
                  ["Packaging", "Retail, Professional, Bulk and Private Label"],
                  ["Private Label", "OEM, ODM and Custom Branding Available"],
                  [
                    "Technical Documents",
                    "COA, MSDS and Technical Data Support",
                  ],
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
              Exact values, shade composition and technical parameters may vary
              according to the selected Natural Henna Hair Color, agreed buyer
              specification and batch-specific documentation.
            </p>
          </div>
        </RevealOnScroll>
      </section>
      {/* HOW TO USE */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                How To Use
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Simple 4-Step Hair Colour Application
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Follow these simple steps for smooth application and beautiful,
                naturally inspired hair colour results.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Prepare the Paste",
                  icon: "🥣",
                  text: "Mix the required quantity of Natural Henna Hair Color with warm water until a smooth and creamy paste is obtained.",
                },
                {
                  step: "02",
                  title: "Apply Evenly",
                  icon: "💇",
                  text: "Wear gloves and apply the prepared paste evenly from the roots to the ends of the hair.",
                },
                {
                  step: "03",
                  title: "Wait for 1 Hour",
                  icon: "⏳",
                  text: "Leave the paste on the hair for approximately one hour for optimum colour development.",
                },
                {
                  step: "04",
                  title: "Rinse Thoroughly",
                  icon: "🚿",
                  text: "Rinse thoroughly with clean water until all the paste is removed and enjoy naturally beautiful hair.",
                },
              ].map((item, index) => (
                <StaggerItem key={item.step} delay={index * 70}>
                  <article className="group h-full overflow-hidden rounded-[24px] border border-[#C9A962]/28 bg-[#ede5d7] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]">
                    <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-4xl">
                      {item.icon}
                    </div>

                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
                      Step {item.step}
                    </p>

                    <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <div className="mx-auto mt-4 h-px w-10 bg-[#C9A962]" />

                    <p className="mt-5 text-sm leading-7 text-[#4c5f54]">
                      {item.text}
                    </p>
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
                Flexible Packaging for Retail, Professional and Global Markets
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Our Natural Henna Hair Colors can be supplied in multiple
                packaging formats for retail brands, salon professionals,
                distributors and qualified private-label buyers.
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
                    Retail and Professional Packing
                  </h3>

                  <p className="mt-5 leading-8 text-[#4c5f54]">
                    Natural Henna Hair Colors are available in 100 g, 200 g, 500
                    g and 1 kg premium silver, golden, coloured and printed
                    pouches. Selected professional and bulk packing formats can
                    also be discussed according to order quantity and buyer
                    requirements.
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
                    private-label packaging according to the selected shade,
                    branding concept and buyer requirements.
                  </p>
                </article>
              </StaggerItem>
            </div>

            {/* PACKAGING IMAGE STRIP */}
            <StaggerItem delay={180}>
              <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
  <Image
    src="/images/products/henna-hair-colors/natural-henna-hair-colors-packaging-private-label-final-v1.png"
    alt="Natural Henna Hair Colors packaging and private-label options"
    fill
    sizes="(min-width: 1024px) 70vw, 100vw"
    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/80 via-[#102f23]/40 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Complete Packaging Range
                    </p>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      18 Shades in Retail, Professional and Private-Label Packs
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
      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[160px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Global Hair Color Solutions
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Build Your Own
              <br />
              Natural Henna Hair Color Brand?
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">
              Whether you are looking for premium retail products, professional
              salon ranges or complete private-label manufacturing, our team is
              ready to help you develop a successful botanical hair-color
              collection for your market.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
                  18 Premium Shades
                </p>

                <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
                  Complete botanical hair-color portfolio.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
                  Private Label
                </p>

                <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
                  OEM, ODM and complete branding support.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
                  Worldwide Export
                </p>

                <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
                  Retail, salon and professional markets worldwide.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 rounded-full border border-[#C9A962] bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request Quotation
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
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