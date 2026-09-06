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
    absolute: "Henna-Based Hair Colors Manufacturer & Exporter India",
  },
  description:
    "Henna-Based Hair Colors manufacturer, exporter and supplier in India offering 16 powder shades for bulk, wholesale, salon, OEM, ODM and private-label buyers.",
  alternates: {
    canonical: "/products/henna-based-hair-colors",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shiveshinternational.com/products/henna-based-hair-colors",
    siteName: "Shivesh International",
    title: "Henna-Based Hair Colors Manufacturer, Exporter & Supplier India",
    description:
      "Explore 16 Henna-Based Hair Color powder shades for importers, distributors, salons, cosmetic brands, OEM, ODM and private-label buyers.",
    images: [
      {
        url: "/images/products/henna-based-hair-colors/henna-based-hair-colors-hero-final-v2.png",
        alt: "Shivesh International Henna-Based Hair Colors professional shade range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henna-Based Hair Colors Manufacturer, Exporter & Supplier India",
    description:
      "16 Henna-Based Hair Color shades manufactured in India for bulk, salon, wholesale, OEM, ODM and private-label buyers.",
    images: [
      "/images/products/henna-based-hair-colors/henna-based-hair-colors-hero-final-v2.png",
    ],
  },
};

const procurementFaqs = [
  {
    question: "How many Henna-Based Hair Color shades are available?",
    answer:
      "The portfolio contains 16 Henna-Based Hair Color shades. Each shade has a different formulation, and final product details are confirmed for the selected shade.",
  },
  {
    question: "What is the chemical content after dilution?",
    answer:
      "Made with less than 3% chemicals after dilution. Exact chemical names and individual percentages are communicated directly to buyers when required and are not published on the website.",
  },
  {
    question: "Are all 16 shades PPD-free, ammonia-free and peroxide-free?",
    answer:
      "Yes. All 16 Henna-Based Hair Color shades are PPD-Free, Ammonia-Free and Peroxide-Free.",
  },
  {
    question: "Do the shades contain metallic salts or synthetic dye?",
    answer:
      "No. All 16 shades contain No Metallic Salts and No Synthetic Dye.",
  },
  {
    question: "Do all 16 shades provide grey coverage?",
    answer:
      "Yes. All 16 Henna-Based Hair Color shades provide 100% grey coverage when prepared and applied according to the recommended directions.",
  },
  {
    question: "What is the product form and processing time?",
    answer:
      "The product is a triple-sifted finest powder. The approximate mixing ratio is one part powder to three parts water, with an approximate processing time of 30 minutes.",
  },
  {
    question: "What is the bulk minimum order quantity?",
    answer:
      "Bulk orders can start from 100 kg, subject to commercial and product confirmation.",
  },
  {
    question: "What is the private-label MOQ?",
    answer:
      "Private-label minimums vary by pack size, packaging, artwork, design, customization and commercial feasibility.",
  },
  {
    question: "Which retail and bulk packaging sizes are available?",
    answer:
      "Retail and private-label packs are available in 100 g, 200 g, 500 g and 1 kg. Bulk packaging is available in 20 kg and 25 kg double-layer vacuum packing.",
  },
  {
    question: "Are OEM, ODM and private-label services available?",
    answer:
      "Yes. OEM, ODM and private-label services are available, including buyer logo and artwork on finished packs, subject to technical and commercial confirmation.",
  },
  {
    question: "Which commercial documents are available?",
    answer:
      "A COA is supplied with every commercial batch or order. SDS/MSDS and a Country of Origin Certificate or Statement are available. A Phytosanitary Certificate and Fumigation Certificate are available on requirement.",
  },
  {
    question: "Are free samples available?",
    answer:
      "Yes. Free samples are available for prospective buyers after the required shade and application are reviewed.",
  },
  {
    question: "What is the shelf life?",
    answer:
      "The shelf life is 12 months when stored away from direct sunlight in a cool, dry place.",
  },
  {
    question: "What is the typical lead time?",
    answer:
      "Typical lead time is approximately 10–15 days after commercial and order confirmation, subject to product, quantity, packaging, customization and complete order requirements. Transit and delivery times are not guaranteed.",
  },
  {
    question: "How should an importer request a quotation?",
    answer:
      "Share the selected shade, required quantity, bulk, OEM, ODM or private-label scope, pack size, artwork or branding requirements, destination country or port, required documents, Incoterm requirement and company contact details through the contact page or WhatsApp export team.",
  },
];

const hennaBasedHairColorsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://shiveshinternational.com/products/henna-based-hair-colors#webpage",
      url: "https://shiveshinternational.com/products/henna-based-hair-colors",
      name: "Henna-Based Hair Colors Manufacturer, Exporter and Supplier India",
      description:
        "Commercial product and procurement information for 16 Henna-Based Hair Color shades manufactured, supplied and exported from India.",
      isPartOf: {
        "@id": "https://shiveshinternational.com/#website",
      },
      about: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      breadcrumb: {
        "@id":
          "https://shiveshinternational.com/products/henna-based-hair-colors#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/henna-based-hair-colors#breadcrumb",
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
          name: "Henna-Based Hair Colors",
          item: "https://shiveshinternational.com/products/henna-based-hair-colors",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://shiveshinternational.com/products/henna-based-hair-colors#faq",
      mainEntity: procurementFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function HennaBasedHairColorsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hennaBasedHairColorsStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Navbar />

      {/* PRODUCT HERO */}
      <section
        id="henna-based-hair-colors"
        className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]"
      >
        <Image
    src="/images/products/henna-based-hair-colors/henna-based-hair-colors-hero-final-v2.png"
    alt="Henna-Based Hair Colors manufacturer and exporter displaying 16 professional powder shades"
    fill
    priority
    sizes="100vw"
    className="h-full w-full object-cover object-center"
  />
        {/* Lighter localized overlays keep the image visible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/62 via-[#102f23]/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/8" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-10 pt-28 sm:px-8 lg:px-12">
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
                Henna-Based Hair
                <br />
                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Colors
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-5 font-[family-name:var(--font-playfair)] text-xl italic text-[#E4C878] sm:text-2xl">
                16 Professional Shades with 100% Grey Coverage.
              </p>
            </StaggerItem>

            <StaggerItem delay={320}>
              <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Shivesh International is a Henna-Based Hair Colors manufacturer,
                exporter and supplier from India offering 16 professional powder
                shades for bulk importers, wholesalers, salons, cosmetic brands
                and private-label buyers worldwide.
              </p>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#shade-collection"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  Explore 16 Shades
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
                  ["16", "Professional Shades"],
                  ["Grey", "Coverage"],
                  ["Fine", "Powder"],
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

      {/* ABOUT HENNA-BASED HAIR COLORS */}
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
              <div className="group relative min-h-[760px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/henna-based-hair-colors/henna-based-hair-colors-about-final-v2.png"
                  alt="Professional Henna-Based Hair Colors collection"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="-translate-y-[1%] scale-[1.04] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.15]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/78 via-transparent to-black/10" />

                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Professional Colour Portfolio
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    16 Henna-Based Hair Color Shades
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
                    About Henna-Based Hair Colors
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Professional Hair Colour Performance
                  <span className="block text-[#9f7f36]">
                    with a Henna-Based Format
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={340}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  A practical powder hair-colour range created for grey
                  coverage, salon application and commercial retail markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={460}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Henna-Based Hair Colors are formulated as a performance-led
                    range for buyers seeking a triple-sifted finest powder,
                    broad shade selection and reliable colour development for
                    professional and retail use. All 16 shades are PPD-Free,
                    Ammonia-Free, Peroxide-Free, contain No Metallic Salts and
                    No Synthetic Dye.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Unlike our Natural Henna Hair Colors range, this category is
                    designed as a henna-based hair dye solution with a
                    performance-focused formulation intended to support grey
                    coverage, consistent shade delivery and shorter processing
                    time.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    The collection includes 16 commercial shades, including
                    Black Henna, Dark Brown Henna, Burgundy Henna, Wine Red
                    Henna, Auburn Henna, Blonde Henna and Ginger Blonde Henna.
                  </p>

                  <p className="border-l-2 border-[#C9A962] pl-5 text-lg font-semibold leading-8 text-[#173b2a]">
                    Made with less than 3% chemicals after dilution.
                  </p>

                  <p className="text-sm leading-7 text-[#4c5f54]">
                    Each shade has a different formulation. Exact chemical names
                    and individual percentages are communicated directly to
                    buyers when required and are not published on the website.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Shivesh International supplies Henna-Based Hair Colors to
                    importers, distributors, salon chains, wholesalers, cosmetic
                    brands and qualified private-label buyers in international
                    markets.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={580}>
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

      {/* COMPLETE 16-SHADE COLLECTION */}
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
                Explore All 16 Henna-Based Hair Colors
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                A professional colour portfolio developed for grey coverage,
                salon application, retail brands and private-label markets.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {[
                {
                  name: "Black Henna",
                  tone: "Rich Professional Black",
                  image:
                    "/images/products/henna-based-hair-colors/black-henna-final-v1.png",
                },
                {
                  name: "Dark Brown Henna",
                  tone: "Deep Dark Brown Tone",
                  image:
                    "/images/products/henna-based-hair-colors/dark-brown-henna-final-v1.png",
                },
                {
                  name: "Medium Brown Henna",
                  tone: "Balanced Medium Brown",
                  image:
                    "/images/products/henna-based-hair-colors/medium-brown-henna-final-v1.png",
                },
                {
                  name: "Brown Henna",
                  tone: "Classic Brown Shade",
                  image:
                    "/images/products/henna-based-hair-colors/brown-henna-final-v1.png",
                },
                {
                  name: "Light Brown Henna",
                  tone: "Soft Light Brown",
                  image:
                    "/images/products/henna-based-hair-colors/light-brown-henna-final-v1.png",
                },
                {
                  name: "Golden Brown Henna",
                  tone: "Warm Golden Brown",
                  image:
                    "/images/products/henna-based-hair-colors/golden-brown-henna-final-v1.png",
                },
                {
                  name: "Copper Brown Henna",
                  tone: "Warm Copper-Brown",
                  image:
                    "/images/products/henna-based-hair-colors/copper-brown-henna-final-v1.png",
                },
                {
                  name: "Chestnut Henna",
                  tone: "Elegant Chestnut Brown",
                  image:
                    "/images/products/henna-based-hair-colors/chestnut-henna-final-v1.png",
                },
                {
                  name: "Mahogany Henna",
                  tone: "Deep Mahogany Tone",
                  image:
                    "/images/products/henna-based-hair-colors/mahogany-henna-final-v1.png",
                },
                {
                  name: "Burgundy Henna",
                  tone: "Rich Burgundy Shade",
                  image:
                    "/images/products/henna-based-hair-colors/burgundy-henna-final-v1.png",
                },
                {
                  name: "Wine Red Henna",
                  tone: "Elegant Wine-Red Tone",
                  image:
                    "/images/products/henna-based-hair-colors/wine-red-henna-final-v1.png",
                },
                {
                  name: "Red Henna",
                  tone: "Vibrant Red Shade",
                  image:
                    "/images/products/henna-based-hair-colors/red-henna-final-v1.png",
                },
                {
                  name: "Auburn Henna",
                  tone: "Warm Auburn Shade",
                  image:
                    "/images/products/henna-based-hair-colors/auburn-henna-final-v1.png",
                },
                {
                  name: "Orange Henna",
                  tone: "Bright Orange Tone",
                  image:
                    "/images/products/henna-based-hair-colors/orange-henna-final-v1.png",
                },
                {
                  name: "Blonde Henna",
                  tone: "Soft Blonde Tone",
                  image:
                    "/images/products/henna-based-hair-colors/blonde-henna-final-v1.png",
                },
                {
                  name: "Ginger Blonde Henna",
                  tone: "Warm Ginger-Blonde",
                  image:
                    "/images/products/henna-based-hair-colors/ginger-blonde-henna-final-v1.png",
                },
              ].map((shade, index) => (
                <StaggerItem key={shade.name} delay={(index % 4) * 60}>
                  <article className="group relative h-full overflow-hidden rounded-[22px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_14px_38px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_55px_rgba(0,0,0,0.26)]">
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#ebe3d5]">
                      <ProductCardModal
                        src={shade.image}
                        alt={shade.name}
                        category="Professional Henna Hair Dye"
                        description="A premium Henna-Based Hair Color available for professional, retail and private-label markets."
                      >
                        <Image
                          src={shade.image}
                          alt={shade.name}
                          width={320}
height={320}
className="h-full w-full scale-[1.10] object-cover transition-transform duration-700 group-hover:scale-[1.16]"
                        />
                      </ProductCardModal>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/18 via-transparent to-white/10" />

                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-[9px] font-bold text-[#E4C878]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                        Professional Henna Hair Dye
                      </p>

                      <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-semibold leading-[1.35] text-[#173b2a]">
                        {shade.name}
                      </h3>

                      <div className="mt-3 h-px w-10 bg-[#C9A962]" />

                      <p className="mt-3 text-sm leading-6 text-[#4c5f54]">
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
                grey percentage, hair condition, preparation method and
                processing time.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* PROFESSIONAL SHADE GUIDE */}
      <section
        id="professional-shade-guide"
        className="relative overflow-hidden bg-[#ede5d7] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
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
                Compare All 16 Henna-Based Hair Colors
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Compare Black, Brown, Burgundy, Red, Auburn, Orange and Blonde
                Henna-Based Hair Color shades for salon, wholesale, distributor,
                OEM and private-label product planning.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  name: "Black Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #050505 0%, #262626 50%, #080808 100%)",
                    image: "/images/products/henna-based-hair-colors/black-henna-shade-final-v1.png",
                },
                {
                  number: "02",
                  name: "Dark Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #24150f 0%, #4a2c20 50%, #1b100c 100%)",
                    image: "/images/products/henna-based-hair-colors/dark-brown-henna-shade-final-v1.png",
                },
                {
                  number: "03",
                  name: "Medium Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #4a2d20 0%, #76503b 50%, #352016 100%)",
                    image: "/images/products/henna-based-hair-colors/medium-brown-henna-shade-final-v1.png",
                },
                {
                  number: "04",
                  name: "Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #5a3827 0%, #8a6045 50%, #40271b 100%)",
                    image: "/images/products/henna-based-hair-colors/brown-henna-shade-final-v1.png",
                },
                {
                  number: "05",
                  name: "Light Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #76533a 0%, #a67d5b 50%, #5d402c 100%)",
                    image: "/images/products/henna-based-hair-colors/light-brown-henna-shade-final-v1.png",
                },
                {
                  number: "06",
                  name: "Golden Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #745028 0%, #b88b48 50%, #5d3d1d 100%)",
                    image: "/images/products/henna-based-hair-colors/golden-brown-henna-shade-final-v1.png",
                },
                {
                  number: "07",
                  name: "Copper Brown Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #71351f 0%, #b86738 50%, #542617 100%)",
                    image: "/images/products/henna-based-hair-colors/copper-brown-henna-shade-final-v1.png",
                },
                {
                  number: "08",
                  name: "Chestnut Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #4e241b 0%, #8b4634 50%, #371813 100%)",
                    image: "/images/products/henna-based-hair-colors/chestnut-henna-shade-final-v1.png",
                },
                {
                  number: "09",
                  name: "Mahogany Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #3e1718 0%, #762f31 50%, #2d1011 100%)",
                    image: "/images/products/henna-based-hair-colors/mahogany-henna-shade-final-v1.png",
                },
                {
                  number: "10",
                  name: "Burgundy Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #3b0a18 0%, #791a38 50%, #260610 100%)",
                    image: "/images/products/henna-based-hair-colors/burgundy-henna-shade-final-v1.png",
                },
                {
                  number: "11",
                  name: "Wine Red Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #4b0b1f 0%, #8f2448 50%, #300613 100%)",
                    image: "/images/products/henna-based-hair-colors/wine-red-henna-shade-final-v1.png",
                },
                {
                  number: "12",
                  name: "Red Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #7a1715 0%, #c24132 50%, #58100e 100%)",
                    image: "/images/products/henna-based-hair-colors/red-henna-shade-final-v1.png",
                },
                {
                  number: "13",
                  name: "Auburn Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #71331e 0%, #a65430 50%, #512316 100%)",
                    image: "/images/products/henna-based-hair-colors/auburn-henna-shade-final-v1.png",
                },
                {
                  number: "14",
                  name: "Orange Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #a34218 0%, #e67a28 50%, #763011 100%)",
                    image: "/images/products/henna-based-hair-colors/orange-henna-shade-final-v1.png",
                },
                {
                  number: "15",
                  name: "Blonde Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #a97b3c 0%, #d8b36b 50%, #805a2a 100%)",
                    image: "/images/products/henna-based-hair-colors/blonde-henna-shade-final-v1.png",
                },
                {
                  number: "16",
                  name: "Ginger Blonde Henna",
                  
                  swatch:
                    "linear-gradient(135deg, #a55a27 0%, #d98b45 50%, #79401c 100%)",
                    image: "/images/products/henna-based-hair-colors/ginger-blonde-henna-shade-final-v1.png",
                },
              ].map((shade, index) => (
                <StaggerItem key={shade.name} delay={(index % 4) * 55}>
                  <article className="group h-full overflow-hidden rounded-[20px] border border-[#C9A962]/30 bg-[#f5f0e6] shadow-[0_12px_34px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_20px_48px_rgba(0,0,0,0.15)]">
                    <div className="relative h-[92px] overflow-hidden">
                    {shade.image ? (
 <ProductCardModal
    src={shade.image}
    alt={`${shade.name} hair shade close-up`}
    category="Professional Hair Shade Reference"
    description="A professional visual reference for this Henna-Based Hair Color shade. Final results may vary according to the original hair colour and application conditions."
  >
    <div className="relative h-full w-full">
      <Image
        src={shade.image}
        alt={`${shade.name} hair shade close-up`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  </ProductCardModal>
) : (
  <div
  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
  style={{ background: shade.swatch }}
/>
)}

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />

<div className="pointer-events-none absolute left-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/35 bg-black/25 px-2 text-[9px] font-bold text-white backdrop-blur-sm">
  {shade.number}
</div>
</div>
                      

                    <div className="p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9f7f36]">
                        {shade.name.replace(/ Henna$/, "")}
                      </p>

                      <h3 className="mt-2 min-h-[42px] font-[family-name:var(--font-playfair)] text-[16px] font-semibold leading-[1.35] text-[#173b2a]">
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
                percentage, hair condition, preparation method and processing
                time.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* ADVANCED HAIR COLOR PERFORMANCE */}
      <section
        id="professional-hair-color-performance"
        className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* IMAGE */}
            <StaggerItem delay={0}>
              <div className="group relative min-h-[450px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_28px_75px_rgba(0,0,0,0.26)]">
                <Image
                  src="/images/products/henna-based-hair-colors/henna-based-hair-colors-advanced-performance-final-v1.png"
                  alt="Professional Henna-Based Hair Colors for grey coverage and commercial salon use"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Professional Hair Dye Range
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    16 Shades for Commercial Hair Colour Markets
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
                    Advanced Hair Color Performance
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Developed for Grey Coverage, Faster Processing and
                  Professional Results
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Our Henna-Based Hair Colors are designed as a
                  performance-focused powder hair dye range for buyers seeking
                  practical application, dependable colour development and a
                  broad commercial shade portfolio.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Enhanced Grey Coverage",
                      text: "All 16 shades provide 100% grey coverage when prepared and applied according to the recommended directions.",
                    },
                    {
                      title: "Shorter Processing Time",
                      text: "Designed for a practical application cycle with approximately 30 minutes of processing time.",
                    },
                    {
                      title: "Smooth Powder Preparation",
                      text: "Fine powder texture supports easier mixing and a more uniform application paste.",
                    },
                    {
                      title: "Professional Colour Performance",
                      text: "Suitable for salon, retail and commercial hair-colour applications.",
                    },
                    {
                      title: "16 Commercial Shades",
                      text: "A broad portfolio from Black Henna and Dark Brown Henna to Burgundy Henna and Ginger Blonde Henna.",
                    },
                    {
                      title: "Private-Label Manufacturing",
                      text: "OEM, ODM, custom branding and packaging support available for qualified buyers.",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="border-b border-[#C9A962]/18 pb-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 text-[11px] text-[#E4C878]">
                          ✓
                        </span>

                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F5F0E6]">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#F5F0E6]/62">
                            {feature.text}
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
      {/* PROFESSIONAL BUYERS */}
      <section
        id="professional-buyers"
        className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1380px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                International B2B Supply
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Henna-Based Hair Color Supply for Professional Buyers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Shivesh International manufactures, exports and supplies
                Henna-Based Hair Colors from India for wholesale, salon, retail,
                cosmetic and hair-care programmes in international markets.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Importers", "Commercial supply planning, export documents and destination-based order coordination."],
                ["Distributors & Wholesalers", "A 16-shade portfolio for regional distribution, wholesale and retail channels."],
                ["Salons & Salon Suppliers", "Professional powder hair colours with approximately 30-minute processing."],
                ["Cosmetic Brands", "Finished-product supply for cosmetic portfolios and buyer-brand programmes."],
                ["Hair-Care Brands", "Shade selection and packaging support for commercial hair-colour ranges."],
                ["Private-Label Buyers", "Buyer logo, artwork and finished retail packaging, subject to feasibility."],
                ["OEM & ODM Buyers", "Manufacturing and product support under agreed technical and commercial requirements."],
                ["Sourcing Companies", "Centralized product, documentation and export coordination for qualified bulk enquiries."],
              ].map(([title, text], index) => (
                <StaggerItem key={title} delay={(index % 4) * 60}>
                  <article className="h-full rounded-[22px] border border-[#C9A962]/28 bg-[#ede5d7] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9f7f36]">
                      B2B {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#4c5f54]">
                      {text}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-[#102f23] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
              >
                Discuss Your Buyer Requirement →
              </Link>
              <Link
                href="/export"
                className="inline-flex border border-[#173b2a]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173b2a]"
              >
                Review Export Support →
              </Link>
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
                Product Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Technical Information
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                A concise technical overview of our Henna-Based Hair Colors for
                professional evaluation, commercial sourcing and private-label
                development.
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
                  ["Product Category", "Henna-Based Hair Colors"],
                  ["Available Shades", "16 Professional Shades"],
                  ["Product Form", "Triple-Sifted Finest Powder"],
                  ["Formulation", "Each Shade Has a Different Formulation"],
                  ["Raw-Material Origin", "India"],
                  ["Product Type", "Performance-Focused Henna Hair Dye"],
                  ["Grey Coverage", "100% Grey Coverage across All 16 Shades"],
                  ["Product Qualifications", "PPD-Free · Ammonia-Free · Peroxide-Free · No Metallic Salts · No Synthetic Dye"],
                  ["Chemical Content after Dilution", "Made with less than 3% chemicals after dilution."],
                  [
                    "Preparation Ratio",
                    "Approx. 1 Part Powder to 3 Parts Water",
                  ],
                  ["Processing Time", "Approximately 30 Minutes"],
                  [
                    "Application Method",
                    "Apply Paste Evenly and Comb After 5 Minutes",
                  ],
                  ["Appearance", "Shade-Specific Fine Powder"],
                  ["Odour", "Characteristic"],
                  ["Country of Origin", "India"],
                  ["Bulk Minimum Order", "Orders Can Start from 100 kg, Subject to Commercial and Product Confirmation"],
                  ["Private-Label MOQ", "Varies by Pack Size, Packaging, Artwork, Design, Customization and Commercial Feasibility"],
                  ["Shelf Life", "12 Months under Recommended Storage"],
                  [
                    "Storage",
                    "Store Away from Direct Sunlight in a Cool, Dry Place",
                  ],
                  ["Retail / Private-Label Packs", "100 g, 200 g, 500 g and 1 kg"],
                  ["Bulk Packaging", "20 kg and 25 kg Double-Layer Vacuum Packing"],
                  ["Private Label", "OEM, ODM and Custom Branding Available"],
                  ["Buyer Branding", "Buyer Logo and Artwork Available on Finished Packs"],
                  ["Quality Testing", "According to Buyer Instructions or Requirements"],
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
              Exact formulation details, shade performance and technical
              parameters may vary according to the selected Henna-Based Hair
              Color, agreed buyer specification and batch-specific
              documentation.
            </p>
          </div>
        </RevealOnScroll>
      </section>
      {/* SENSITIVITY TEST */}
      <section
        id="sensitivity-test"
        className="bg-[#102f23] px-6 py-16 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-20"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Sensitivity Test
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Perform a Preliminary Test Before Every Application
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                A preliminary sensitivity test should be carried out before each
                application to check for any visible irritation, inflammation or
                hypersensitivity.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Clean the Test Area",
                  text: "Clean a small area behind the ear or on the inner forearm using soap and water or an alcohol-based cleanser.",
                },
                {
                  step: "02",
                  title: "Prepare a Small Quantity",
                  text: "Prepare a small quantity of the selected Henna-Based Hair Color according to the directions provided with the product.",
                },
                {
                  step: "03",
                  title: "Apply and Leave Uncovered",
                  text: "Apply a small amount to the cleaned area, allow it to dry and leave the area uncovered for 24 hours.",
                },
                {
                  step: "04",
                  title: "Check the Skin",
                  text: "Wash the area gently. Do not use the product if irritation, redness, swelling or inflammation is observed.",
                },
              ].map((item, index) => (
                <StaggerItem key={item.step} delay={index * 70}>
                  <article className="group h-full rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:bg-white/[0.07] hover:shadow-[0_20px_55px_rgba(0,0,0,0.22)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#173b2a] text-[11px] font-bold tracking-[0.12em] text-[#E4C878]">
                      {item.step}
                    </div>

                    <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-px w-10 bg-[#C9A962]" />

                    <p className="mt-5 text-sm leading-7 text-[#F5F0E6]/65">
                      {item.text}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-5xl rounded-[22px] border border-[#C9A962]/30 bg-[#071b14] px-6 py-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                Important Safety Notice
              </p>

              <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#F5F0E6]/68">
                The sensitivity test should be repeated before every
                application. This product is intended for external use only and
                must not be used for colouring eyelashes or eyebrows.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* HOW TO USE */}
      <section
        id="how-to-use"
        className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1450px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                How To Use
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Simple 5-Step Professional Application
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Follow the recommended preparation and application procedure for
                consistent colour performance.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {[
                {
                  step: "01",
                  icon: "🥣",
                  title: "Prepare the Paste",
                  text: "Mix approximately one part powder with three parts water to prepare a smooth and lump-free paste.",
                },
                {
                  step: "02",
                  icon: "💇",
                  title: "Apply Evenly",
                  text: "Apply the prepared paste evenly from roots to ends while wearing suitable protective gloves.",
                },
                {
                  step: "03",
                  icon: "🪮",
                  title: "Comb After 5 Minutes",
                  text: "After approximately five minutes, gently comb the hair to help distribute the colour evenly.",
                },
                {
                  step: "04",
                  icon: "⏳",
                  title: "Wash After 30 Minutes",
                  text: "Rinse thoroughly after approximately thirty minutes until the water becomes clear.",
                },
                {
                  step: "05",
                  icon: "⚠️",
                  title: "Important",
                  text: "Avoid contact with eyes and eyebrows. This product is intended for external use only.",
                },
              ].map((item, index) => (
                <StaggerItem key={item.step} delay={index * 70}>
                  <article className="group h-full overflow-hidden rounded-[22px] border border-[#C9A962]/25 bg-[#ede5d7] p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-4xl">
                      {item.icon}
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
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
      <section
        id="packaging-oem-private-label"
        className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Packaging & Private Label
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl">
                Flexible Packaging for Retail, Professional and Export Markets
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Bulk Henna-Based Hair Colors are supplied from India in retail,
                professional and export packaging for importers, distributors,
                wholesalers, salon chains, OEM clients and private-label brands.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#9f7f36]">
                  Available Pack Sizes
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Retail & Professional Packing
                </h3>

                <p className="mt-5 leading-8 text-[#4c5f54]">
                   100 g · 200 g · 500 g · 1 kg · Premium Metallic Pouches ·
                   Designer Printed Boxes · Professional Salon Packs
                </p>
              </article>

              <article className="rounded-[24px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6]">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#C9A962]">
                  Packaging Formats
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Commercial Packaging Options
                </h3>

                <p className="mt-5 leading-8 text-[#F5F0E6]/70">
                   20 kg and 25 kg Double-Layer Vacuum Packing · Metallic
                   Pouches · Printed Pouches · Designer Boxes · Glass Jars ·
                   Retail Cartons · Bulk Cartons · Private-Label Packaging
                </p>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "OEM Manufacturing",
                "ODM Support",
                "Custom Branding",
                "Designer Boxes",
                "Metallic Pouches",
                "Bulk Export Cartons",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[#C9A962]/30 bg-[#f5f0e6] p-5 text-center font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* COMMERCIAL DOCUMENTATION AND ORDER PLANNING */}
      <section
        id="commercial-documentation"
        className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-2">
            <article className="border border-[#C9A962]/24 bg-[#071b14]/45 p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
                Commercial Documentation
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Documentation for Hair-Color Importers and Distributors
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/68">
                Documentation and quality testing are coordinated for the
                confirmed shade, commercial order and buyer or destination
                requirements.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "COA with Every Commercial Batch or Order",
                  "SDS / MSDS Available",
                  "Country of Origin Certificate or Statement Available",
                  "Phytosanitary Certificate Available on Requirement",
                  "Fumigation Certificate Available on Requirement",
                  "Quality Testing according to Buyer Instructions or Requirements",
                  "Incoterms according to Buyer Requirement and Quotation",
                  "Export and Shipping Coordination for Confirmed Orders",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-[#C9A962]/20 bg-[#102f23]/45 p-4 text-sm leading-7 text-[#F5F0E6]/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border border-[#C9A962]/30 bg-[#071b14]/55 p-5 text-sm leading-7 text-[#F5F0E6]/62">
                Buyers and importers remain responsible for confirming product
                classification, registration, labelling, customs and other
                destination-market requirements. Documentation support does not
                guarantee regulatory approval or customs clearance.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#F5F0E6]/62">
                Company certifications and registrations that may be referenced
                include ISO, GMP, Halal, Kosher, HACCP, MSME and FSSAI. Review
                the certifications page for the available company documents.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/certifications"
                  className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
                >
                  ISO · GMP · Halal · Kosher · HACCP · MSME · FSSAI →
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
                >
                  Buyer Resources →
                </Link>
              </div>
            </article>

            <article className="border border-[#C9A962]/24 bg-[#071b14]/45 p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
                Samples & Order Planning
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Plan a Bulk, OEM, ODM or Private-Label Order
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  ["Free Samples", "Available for prospective buyers after the shade and application requirement are reviewed."],
                  ["Bulk Minimum Order", "Orders can start from 100 kg, subject to commercial and product confirmation."],
                  ["Private-Label MOQ", "Varies by pack size, packaging, artwork, design, customization and commercial feasibility."],
                  ["Typical Lead Time", "Approximately 10–15 days after commercial and order confirmation, subject to the complete order requirements."],
                  ["Incoterms", "Coordinated according to buyer requirement and the quotation."],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 border-b border-[#C9A962]/18 pb-4 sm:grid-cols-[145px_1fr]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
                      {label}
                    </p>
                    <p className="text-sm leading-7 text-[#F5F0E6]/70">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-[#C9A962]/25 p-5">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  What to Include in Your RFQ
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/68">
                  Share the selected shade, quantity, bulk or buyer-brand supply
                  model, required pack size, artwork or logo needs, destination
                  country or port, required documentation, Incoterm requirement
                  and company contact details.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23]"
                >
                  Request Quote or Free Sample →
                </Link>
                <a
                  href="/catalogues/Shivesh-International-Product-Catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-[#C9A962]/55 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
                >
                  View / Download Product Catalogue →
                </a>
              </div>
            </article>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCUREMENT FAQ */}
      <section
        id="procurement-faq"
        className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                Buyer Questions
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Henna-Based Hair Colors Procurement FAQs
              </h2>
            </div>
            <div className="mt-12 divide-y divide-[#173b2a]/15 border-y border-[#173b2a]/15">
              {procurementFaqs.map((faq, index) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
                    <h3 className="text-xl font-semibold leading-snug">
                      <span className="mr-4 text-[#9f7f36]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#9f7f36] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-[940px] pb-7 text-[15px] leading-8 text-[#4c5f54]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* FINAL CTA */}

      <section
        id="buyer-enquiry"
        className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6]"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Professional Hair Dye Solutions
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Ready to Launch Your Own Henna-Based Hair Color Brand?
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">
              Contact Shivesh International for bulk Henna-Based Hair Colors,
              export pricing, 16-shade selection, OEM manufacturing and
              private-label packaging. Bulk orders can start from 100 kg,
              subject to commercial and product confirmation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23]"
              >
                Request Quotation →
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em]"
              >
                WhatsApp Our Team →
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[10px] font-bold uppercase tracking-[0.18em]">
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
                href="/products/natural-henna-hair-colors"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Explore Natural Henna Hair Colors
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/products/natural-henna-powder"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Natural Henna Powder
              </Link>

              <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

              <Link
                href="/products/natural-indigo-powder"
                className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
              >
                Natural Indigo Powder
              </Link>
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
