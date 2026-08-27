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
  title: {
    absolute:
      "Natural Henna Hair Colors Manufacturer & Exporter India | Shivesh International",
  },

  description:
    "Natural Henna Hair Colors manufacturer, exporter and supplier in India offering 18 botanical powder shades for bulk, wholesale, salon, OEM and private-label buyers.",

  alternates: {
    canonical: "/products/natural-henna-hair-colors",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shiveshinternational.com/products/natural-henna-hair-colors",
    siteName: "Shivesh International",
    title:
      "Natural Henna Hair Colors Manufacturer & Exporter India",
    description:
      "Explore 18 Natural Henna Hair Color shades manufactured and exported from India for importers, distributors, salons, cosmetic brands and private-label buyers.",
    images: [
      {
        url: "/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v2.png",
        width: 1200,
        height: 630,
        alt: "Natural Henna Hair Colors manufacturer and exporter from India offering 18 botanical shades",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Natural Henna Hair Colors Manufacturer & Exporter India",
    description:
      "18 botanical powder hair-colour shades for bulk, wholesale, salon, OEM and private-label buyers worldwide.",
    images: [
      "/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v2.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const naturalHennaHairColorsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://shiveshinternational.com/products/natural-henna-hair-colors#product",
      name: "Natural Henna Hair Colors",
      alternateName: [
        "Botanical Henna Hair Colors",
        "Natural Henna Powder Hair Colors",
        "18 Shade Henna Hair Color Collection",
        "Private Label Henna Hair Colors",
        "Export-Grade Natural Henna Hair Colors",
      ],
      url:
        "https://shiveshinternational.com/products/natural-henna-hair-colors",
      image: [
        "https://shiveshinternational.com/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v2.png",
        "https://shiveshinternational.com/images/products/henna-hair-colors/natural-henna-hair-colors-about-final-v1.png",
        "https://shiveshinternational.com/images/products/henna-hair-colors/natural-henna-hair-colors-packaging-private-label-final-v1.png",
      ],
      description:
        "Natural Henna Hair Colors manufactured, supplied and exported from India in 17 botanical powder hair-color shades and one Natural Henna Hair Treatment for bulk, wholesale, salon, OEM and private-label buyers.",
      category: "Natural Botanical Powder Hair Colors",
      material: "Henna and selected botanical ingredients",
      brand: {
        "@type": "Brand",
        name: "Shivesh International",
      },
      manufacturer: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Importers, distributors, wholesalers, salon chains, cosmetic companies, OEM partners and private-label buyers",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Product Form",
          value: "Triple-sifted microfine botanical powder",
        },
        {
          "@type": "PropertyValue",
          name: "Product Portfolio",
          value:
            "17 Natural Henna Hair Color shades and 1 Natural Henna Hair Treatment",
        },
        {
          "@type": "PropertyValue",
          name: "Shade Range",
          value:
            "Natural Black, Dark Brown, Medium Brown, Brown, Light Brown, Golden Brown, Copper Brown, Chestnut, Mahogany, Burgundy, Wine Red, Red, Auburn, Orange, Blonde, Ginger Blonde and Strawberry Blonde",
        },
        {
          "@type": "PropertyValue",
          name: "Minimum Order Quantity",
          value: "200 kg per item",
        },
        {
          "@type": "PropertyValue",
          name: "Supply Options",
          value:
            "Retail, professional, bulk, wholesale, OEM, ODM and private label",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value:
            "100 g, 200 g, 500 g and 1 kg pouches, branded boxes, professional packs and selected bulk formats",
        },
        {
          "@type": "PropertyValue",
          name: "Private Label Services",
          value:
            "Custom branding, printed boxes, metallic pouches and buyer-owned packaging support",
        },
        {
          "@type": "PropertyValue",
          name: "Country of Origin",
          value: "India",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/natural-henna-hair-colors#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://shiveshinternational.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://shiveshinternational.com/#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Natural Henna Hair Colors",
          item:
            "https://shiveshinternational.com/products/natural-henna-hair-colors",
        },
      ],
    },
  ],
};

export default function NaturalHennaHairColorsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            naturalHennaHairColorsStructuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v2.png"
          alt="Natural Henna Hair Colors manufacturer and exporter from India offering 18 botanical powder hair colour shades"
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
                  Manufacturer · Exporter · Supplier
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
  18 Botanical Powder Hair-Colour Shades for Global Buyers.
</p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Shivesh International is a Natural Henna Hair Colors manufacturer,
  exporter and supplier from India, offering 18 botanical powder
  hair-colour shades for bulk importers, wholesalers, distributors,
  salon brands, cosmetic businesses and private-label buyers
  worldwide.
              </p>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#shade-collection"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  View 18 Hair Colors
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/28 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-7 grid max-w-[700px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["18", "Hair Color Shades"],
  ["Powder", "Botanical Range"],
  ["Bulk", "Export Supply"],
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
                  alt="Natural Henna Hair Colors manufacturer and exporter collection with 18 botanical powder shades"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#071b14]/55 via-[#071b14]/10 to-transparent" />

                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Manufacturer · Exporter · Private Label
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
  Natural Henna Hair Colors
  <span className="block text-[#9f7f36]">
    Manufacturer from India
  </span>
</h2>
              </StaggerItem>

              {/* COMPACT PREMIUM HIGHLIGHTS */}

              <StaggerItem delay={320}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
    An export-oriented collection of 18 botanical powder hair-color
    shades developed for importers, distributors, salons, cosmetic
    brands and private-label buyers worldwide.
  </p>
              </StaggerItem>

              <StaggerItem delay={440}>
  <div className="mt-7 space-y-5">
    <p className="text-lg leading-8 text-[#4c5f54]">
      Shivesh International manufactures, supplies and exports Natural
      Henna Hair Colors from India for professional and international
      botanical hair-colour markets. Our coordinated portfolio includes
      18 powder shades developed with selected botanical ingredients and
      presented for retail, salon, wholesale and private-label business
      requirements.
    </p>

    <p className="text-lg leading-8 text-[#4c5f54]">
      The collection ranges from Natural Black, Dark Brown, Medium Brown,
      Brown, Light Brown and Golden Brown to Copper Brown, Chestnut,
      Mahogany, Burgundy, Wine Red, Red, Auburn, Orange, Blonde, Ginger
      Blonde and Strawberry Blonde, together with a Natural Henna Hair
      Treatment option.
    </p>

    <p className="text-lg leading-8 text-[#4c5f54]">
      Each Natural Henna Hair Color is supplied in fine powder form for
      convenient preparation and even application. Final colour results
      can vary according to the original hair colour, percentage of grey
      hair, hair condition, preparation time and application method.
    </p>

    <p className="text-lg leading-8 text-[#4c5f54]">
      We support bulk importers, wholesalers, distributors, salon chains,
      cosmetic companies and buyer-owned brands with export-oriented
      supply, OEM coordination, customised packaging and private-label
      Natural Henna Hair Color solutions for global markets.
    </p>
  </div>
</StaggerItem>

              <StaggerItem delay={560}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#shade-collection"
                    className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    View All 18 Shades
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]"
                  >
                    Request Private Label Quote
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
                Export Collection · 18 Botanical Shades
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
  18 Natural Henna Hair Color Shades
  <span className="mt-2 block text-[#E4C878]">
    for Wholesale and Private Label Buyers
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Explore our complete Natural Henna Hair Colors export collection
  manufactured and supplied from India for bulk importers,
  wholesalers, distributors, salon chains, cosmetic companies,
  OEM partners and private-label hair-colour brands worldwide.
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
  alt={`${shade.name} botanical powder hair colour product`}
  category="Manufacturer · Exporter · Supplier"
  description={`${shade.name} manufactured, supplied and exported from India for bulk importers, wholesalers, distributors, professional salons, cosmetic brands, OEM partners and private-label buyers.`}
>
  <Image
    src={shade.image}
    alt={`${shade.name} botanical powder hair colour product box`}
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
                        Export · Wholesale · Private Label
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

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-6 text-center">
  <p className="text-sm leading-7 text-[#F5F0E6]/72">
    All 18 Natural Henna Hair Color shades are available for
    export-oriented retail, professional, bulk, wholesale, OEM and
    private-label requirements. Packaging, branding and shade selection
    can be coordinated according to the buyer&apos;s market requirements.
  </p>

  <p className="mt-3 text-xs leading-6 text-[#F5F0E6]/48">
    Final shade appearance may vary according to the original hair
    colour, grey percentage, hair condition, preparation method and
    application time.
  </p>
</div>
          </div>
        </RevealOnScroll>
      </section>
      {/* PROFESSIONAL SHADE SELECTION GUIDE */}
      <section
  id="professional-shade-guide"
  className="relative overflow-hidden bg-[#ede5d7] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
>

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Professional Hair Colour Shade Chart
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Compare 18 Natural Henna Hair Colors
  <span className="mt-2 block text-[#9f7f36]">
    with Our Professional Shade Guide
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                This professional Natural Henna Hair Color shade chart helps
  importers, distributors, salon chains, cosmetic companies and
  private-label buyers compare black, brown, red, auburn, orange
  and blonde botanical hair-colour families when planning their
  retail or professional product range.
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
  alt={`${shade.name} professional hair shade reference`}
  category="Professional Shade Guide"
  description={`${shade.name} visual reference for salons, importers, distributors and private-label buyers comparing the ${shade.family} botanical hair-colour family.`}
>
  <div className="relative h-[128px] w-full overflow-hidden">
    <Image
      src={shade.image}
      alt={`${shade.name} ${shade.family} hair colour shade reference`}
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
                        {shade.family} Hair Colour Family
                      </p>

                      <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-[15px] font-semibold leading-[1.35] text-[#173b2a]">
                        {shade.name}
                      </h3>

                      
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/30 bg-[#102f23] px-6 py-6 text-center text-[#F5F0E6] shadow-[0_18px_45px_rgba(0,0,0,0.13)]">
  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
    Professional Buyer Shade Guidance
  </p>

  <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#F5F0E6]/72">
    Importers, distributors, salon brands and private-label buyers can
    use this Natural Henna Hair Color shade guide when selecting a
    coordinated botanical powder hair-colour portfolio for their
    target market.
  </p>

  <p className="mx-auto mt-3 max-w-4xl text-xs leading-6 text-[#F5F0E6]/50">
    Displayed shades are visual references only. Final colour appearance
    may vary according to the original hair colour, grey percentage,
    hair condition, preparation method, application time and individual
    hair characteristics.
  </p>
</div>
          </div>
        </RevealOnScroll>
      </section>
      {/* BOTANICAL ACTIVE INGREDIENTS */}
      <section
  id="botanical-ingredients"
  className="relative overflow-hidden bg-[#f5f0e6] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
>
  <div
    aria-hidden="true"
    className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
  />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Botanical Hair-Colour Ingredients
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Selected Botanical Ingredients
  <span className="mt-2 block text-[#9f7f36]">
    for Natural Henna Hair Colors
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Our Natural Henna Hair Color range uses selected botanical
  ingredients according to the shade and agreed formulation.
  Ingredient options across the collection may include Henna,
  Indigo, Amla, Shikakai, Brahmi, Bhringraj, Soapnut, Manjistha,
  Harad, Baheda, Kamala and Hibiscus.
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
  alt={`${ingredient.name} raw botanical ingredient for Natural Henna Hair Colors`}
  fill
  sizes="64px"
  className="object-cover transition-transform duration-700 group-hover:scale-110"
/>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/20 via-transparent to-white/10" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                        Hair-Colour Ingredient
                      </p>

                      <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-[17px] font-semibold leading-6 text-[#173b2a]">
                        {ingredient.name}
                      </h3>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6]">
  <p className="text-sm leading-7 text-[#F5F0E6]/72">
    Botanical ingredient selection can be coordinated according to
    the Natural Henna Hair Color shade, product format, target market
    and approved buyer specification.
  </p>

  <p className="mt-2 text-xs leading-6 text-[#F5F0E6]/48">
    The exact botanical composition and ingredient declaration may
    vary by shade and formulation. Final specifications must be
    confirmed before bulk, OEM or private-label production.
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
                  alt="Natural Henna Hair Colors manufacturer and exporter collection with 18 powder shades"
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
                    Export · Wholesale · Private Label
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
                    Why Global Buyers Choose Us
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Natural Henna Hair Colors
  <span className="mt-2 block text-[#E4C878]">
    Manufactured for Global Markets
  </span>
</h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Shivesh International manufactures, supplies and exports a
    coordinated range of 18 Natural Henna Hair Colors from India,
    supported by professional processing, buyer-focused packaging
    and OEM or private-label coordination for international markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                     {
    title: "18 Coordinated Hair Color Shades",
    text: "A complete portfolio covering black, brown, red, auburn, orange, blonde and botanical hair-treatment categories.",
  },
  {
    title: "Manufacturer & Exporter from India",
    text: "Natural Henna Hair Colors manufactured, supplied and exported for professional and international B2B markets.",
  },
  {
    title: "Triple-Sifted Microfine Powder",
    text: "Fine powder texture supports convenient mixing, smooth preparation and even professional application.",
  },
  {
    title: "Bulk & Wholesale Supply",
    text: "Export-oriented supply support for importers, wholesalers, distributors, salon chains and cosmetic companies.",
  },
  {
    title: "Retail & Export Packaging",
    text: "Packaging options include branded boxes, retail pouches, professional packs and selected bulk formats.",
  },
  {
    title: "OEM & Private-Label Manufacturing",
    text: "Custom branding, buyer-owned packaging and OEM or ODM coordination can be discussed according to project requirements.",
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
      <section
  id="product-specifications"
  className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Natural Henna Hair Color Specifications
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Product Specifications
  <span className="mt-2 block text-[#9f7f36]">
    for Professional Buyers
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Review the general product specifications of our Natural Henna
  Hair Colors for bulk importing, wholesale distribution, salon
  use, commercial sourcing, OEM manufacturing and private-label
  product development.
              </p>
            </div>

            <StaggerItem delay={120}>
              <div className="mt-12 overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] shadow-[0_24px_65px_rgba(0,0,0,0.11)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] bg-[#102f23] px-5 py-4 text-[#F5F0E6] sm:px-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Parameter
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Technical & Commercial Information
                  </p>
                </div>

                {[
                  
  ["Product Name", "Natural Henna Hair Colors"],
  [
    "Manufacturer & Exporter",
    "Shivesh International, India",
  ],
  [
    "Shade Portfolio",
    "17 Hair Color Shades and 1 Natural Henna Hair Treatment",
  ],
  ["Product Form", "Fine Botanical Powder"],
  ["Powder Texture", "Triple-Sifted Microfine Powder"],
  [
    "Botanical Base",
    "Henna with Selected Botanical Ingredients according to Shade",
  ],
  [
    "Primary Application",
    "Professional and Retail Botanical Hair Colouring",
  ],
  [
    "Preparation Method",
    "Mix with Warm Water according to Product Instructions",
  ],
  [
    "Application Time",
    "Approximately 60 Minutes or as Directed for the Selected Shade",
  ],
  ["Appearance", "Shade-Specific Fine Powder"],
  ["Odour", "Characteristic Herbal Odour"],
  ["Country of Origin", "India"],
  ["Minimum Order Quantity", "200 kg per Item"],
  [
    "Supply Options",
    "Retail, Professional, Bulk, Wholesale, OEM and Private Label",
  ],
  [
    "Buyer Categories",
    "Importers, Distributors, Wholesalers, Salons and Cosmetic Brands",
  ],
  [
    "Packaging Options",
    "Branded Boxes, Retail Pouches, Professional Packs and Bulk Formats",
  ],
  [
    "Private Label",
    "OEM, ODM, Custom Branding and Buyer-Owned Packaging Support",
  ],
  [
    "Shelf Life",
    "Up to 24 Months under Recommended Storage Conditions",
  ],
  [
    "Storage",
    "Store Sealed in a Cool, Dry Place away from Moisture and Direct Sunlight",
  ],
  [
    "Technical Documents",
    "COA, MSDS and Technical Data Support subject to Product and Buyer Requirements",
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
              These are general Natural Henna Hair Color specifications. Exact
  composition, application instructions, technical values, packaging
  details and documentation may vary according to the selected shade,
  production batch, destination-market requirements and approved buyer
  specification.
            </p>
          </div>
        </RevealOnScroll>
      </section>
      {/* HOW TO USE */}
      <section
  id="how-to-use-henna-hair-colors"
  className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
        <RevealOnScroll>
          <div className="mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Natural Henna Hair Color Application
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  How to Use Natural Henna Hair Colors
  <span className="mt-2 block text-[#9f7f36]">
    in Four Simple Steps
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Follow this general Natural Henna Hair Color preparation and
  application guide for mixing the botanical powder, applying it
  evenly and rinsing the hair after the recommended processing time.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
    step: "01",
    title: "Mix the Hair Color Powder",
    icon: "🥣",
    text: "Place the required quantity of Natural Henna Hair Color powder in a clean, non-metallic bowl and gradually add warm water according to the product instructions.",
  },
  {
    step: "02",
    title: "Prepare a Smooth Paste",
    icon: "🥄",
    text: "Mix thoroughly until a smooth, creamy and easily applicable botanical hair-colour paste is obtained without dry lumps.",
  },
  {
    step: "03",
    title: "Apply from Roots to Ends",
    icon: "💇",
    text: "Wear suitable gloves, divide the hair into sections and apply the prepared paste evenly from the roots through the lengths and ends.",
  },
  {
    step: "04",
    title: "Process and Rinse Thoroughly",
    icon: "🚿",
    text: "Leave the product on for approximately 60 minutes, or for the duration stated on the selected shade instructions, and then rinse thoroughly with clean water.",
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

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/30 bg-[#102f23] px-6 py-6 text-center text-[#F5F0E6]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                Application & Safety Guidance
              </p>

              <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#F5F0E6]/70">
                Conduct a patch test and a strand test before full
                application. Read the instructions supplied with the
                selected shade, use suitable gloves and avoid contact
                with the eyes. Do not apply to an irritated or damaged
                scalp.
              </p>

              <p className="mx-auto mt-2 max-w-4xl text-xs leading-6 text-[#F5F0E6]/48">
                Preparation method, water quantity and processing time
                may vary according to the shade, formulation, hair
                length, original hair colour and buyer-approved product
                instructions.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PACKAGING & PRIVATE LABEL */}
      <section
  id="packaging-private-label"
  className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Packaging · Bulk Supply · Private Label
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Natural Henna Hair Color Packaging
  <span className="mt-2 block text-[#9f7f36]">
    for Bulk, OEM and Private Label Supply
  </span>
</h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                We supply Natural Henna Hair Colors in retail, professional and
  bulk packaging formats for importers, wholesalers, distributors,
  salon chains, cosmetic companies, OEM partners and private-label
  brands in international markets.
              </p>
            </div>

            {/* TWO COMPACT INFORMATION CARDS */}
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <StaggerItem delay={0}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9f7f36]">
                    Retail & Professional Pack Sizes
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    100 g to 1 kg Hair Color Packs
                  </h3>

                  <p className="mt-5 leading-8 text-[#4c5f54]">
                    Natural Henna Hair Colors are available in 100 g, 200 g,
  500 g and 1 kg premium silver, golden, coloured or printed
  pouches. Branded boxes, professional packs and selected bulk
  formats can also be coordinated according to the shade,
  order quantity and buyer specification.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem delay={120}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Bulk & Export Packaging
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Export-Ready Packaging Solutions
                  </h3>

                  <p className="mt-5 leading-8 text-[#F5F0E6]/68">
                    APackaging options include metallic pouches, coloured
  pouches, custom-printed pouches, printed paper boxes,
  professional packs, jars and export cartons. Buyer-owned
  branding and private-label packaging can be developed
  according to the selected shade and approved artwork.
                  </p>
                </article>
              </StaggerItem>
            </div>

            {/* PACKAGING IMAGE STRIP */}
            <StaggerItem delay={180}>
              <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
  <Image
    src="/images/products/henna-hair-colors/natural-henna-hair-colors-packaging-private-label-final-v1.png"
    alt="Natural Henna Hair Colors retail packaging bulk supply OEM and private-label export options"
    fill
    sizes="(min-width: 1024px) 70vw, 100vw"
    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/80 via-[#102f23]/40 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Retail · Professional · Bulk · OEM
                    </p>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      18 Hair Color Products with Custom Packaging Options
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* PRIVATE LABEL SERVICES */}
            <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
    OEM & Private Label Hair Color Services
  </p>

  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#173b2a] sm:text-4xl">
    Build Your Natural Henna Hair Color Brand
  </h3>

  <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#4c5f54]">
    Private-label support can include shade selection, OEM or ODM
    coordination, custom branding, packaging artwork, printed boxes,
    metallic pouches and bulk export-carton planning.
  </p>
</div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
    code: "OEM",
    title: "OEM Hair Color Manufacturing",
  },
  {
    code: "ODM",
    title: "ODM Product Development Support",
  },
  {
    code: "BR",
    title: "Private-Label Brand Packaging",
  },
  {
    code: "BX",
    title: "Custom Printed Hair Color Boxes",
  },
  {
    code: "MP",
    title: "Printed & Metallic Pouches",
  },
  {
    code: "CT",
    title: "Bulk Hair Color Export Cartons",
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

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/35 bg-[#102f23] px-6 py-6 text-center text-[#F5F0E6]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                Bulk Order & Private Label Requirements
              </p>

              <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#F5F0E6]/72">
                The minimum order quantity is 200 kg per item.
                Importers, distributors, wholesalers, salon brands and
                cosmetic companies can contact our export team for
                shade selection, pricing, packaging and private-label
                project coordination.
              </p>

              <p className="mx-auto mt-2 max-w-4xl text-xs leading-6 text-[#F5F0E6]/48">
                Final pack sizes, printing method, branding, carton
                configuration and documentation depend on the confirmed
                product, order quantity and destination-market requirements.
              </p>
            </div>
          
        </RevealOnScroll>
      </section>
      {/* FINAL CTA */}
      <section
  id="buyer-enquiry"
  className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12"
>
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[160px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Bulk · Wholesale · OEM · Private Label
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
  Source Natural Henna Hair Colors
  <br />
  Directly from an Indian Manufacturer
</h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">
              Contact Shivesh International for Natural Henna Hair Colors in
  retail, professional, bulk, wholesale, OEM and private-label
  formats. We support importers, distributors, salon brands and
  cosmetic companies with 18 product options, custom packaging and
  export coordination. Minimum order quantity is 200 kg per item.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
  <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
      18 Hair Color Products
    </p>

    <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
      A coordinated botanical powder hair-colour portfolio for
      professional and retail markets.
    </p>
  </div>

  <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
      OEM & Private Label
    </p>

    <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
      Custom branding, printed packaging, OEM and ODM project
      coordination for buyer-owned brands.
    </p>
  </div>

  <div className="rounded-[22px] border border-[#C9A962]/25 bg-white/[0.05] p-6 backdrop-blur-sm">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]">
      MOQ: 200 kg per Item
    </p>

    <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
      Bulk export supply for importers, wholesalers, distributors,
      salons and cosmetic companies worldwide.
    </p>
  </div>
</div>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 rounded-full border border-[#C9A962] bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request Bulk & Private Label Quote
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                WhatsApp Export Team
                <span>→</span>
                            </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[10px] font-bold uppercase tracking-[0.18em]">
              <Link
                href="/export"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                View Export Services
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/infrastructure"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                View Manufacturing Infrastructure
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/products/natural-henna-powder"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Explore Natural Henna Powder
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/products/natural-indigo-powder"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Explore Natural Indigo Powder
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/products/henna-based-hair-colors"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Explore Henna-Based Hair Colors
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <FooterSection />

      <FooterSection />
      <FloatingContactButtons />
      <PremiumCursor />
      <MagneticButtons />
    </main>
  );
}