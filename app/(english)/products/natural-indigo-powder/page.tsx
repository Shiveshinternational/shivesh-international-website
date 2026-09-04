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
  title: {
    absolute:
      "Natural Indigo Powder Manufacturer & Exporter India | Shivesh International",
  },

  description:
    "Natural Indigo Powder manufacturer and exporter in India supplying 100% pure Indigofera tinctoria leaf powder with 38%–45% Indigotin for bulk, OEM, ODM and private-label buyers.",

  alternates: {
    canonical: "/products/natural-indigo-powder",
  },

  category: "Natural Indigo Powder",

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
    url: "/products/natural-indigo-powder",
    siteName: "Shivesh International",
    title:
      "Natural Indigo Powder Manufacturer & Exporter from India",
    description:
      "100% pure microfine Indigofera tinctoria leaf powder from Tamil Nadu with 38%–45% Indigotin for bulk, OEM, ODM and private-label buyers.",
    images: [
      {
        url: "/images/products/natural-indigo-powder/natural-indigo-powder-hero-ultrawide-4k-final-v2.png",
        alt: "Natural indigo powder manufactured and exported from India by Shivesh International",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Natural Indigo Powder Manufacturer & Exporter India",
    description:
      "100% pure microfine Natural Indigo Powder from Tamil Nadu for bulk, OEM, ODM and private-label buyers worldwide.",
    images: [
      "/images/products/natural-indigo-powder/natural-indigo-powder-hero-ultrawide-4k-final-v2.png",
    ],
  },
};

const procurementFaqs = [
  {
    question: "What is Natural Indigo Powder?",
    answer:
      "Natural Indigo Powder is a microfine botanical powder prepared from selected Indigofera tinctoria leaves. It is commonly used in botanical hair-colour applications, including after Natural Henna to support darker brown-to-black shades.",
  },
  {
    question: "Is the Indigo Powder 100% pure?",
    answer:
      "Yes. It is 100% pure Indigofera tinctoria leaf powder with no added dye, chemical or other ingredient.",
  },
  {
    question: "What is the Indigotin specification?",
    answer: "The confirmed Indigotin specification is 38%–45%.",
  },
  {
    question: "Which mesh sizes are available?",
    answer: "Natural Indigo Powder is available in an 80–100 mesh range.",
  },
  {
    question: "What is the moisture specification?",
    answer: "The confirmed moisture specification is 5%–8%.",
  },
  {
    question: "What is the minimum order for bulk Natural Indigo Powder?",
    answer:
      "Bulk Natural Indigo Powder orders can start from 100 kg, subject to product, grade, packaging and commercial confirmation.",
  },
  {
    question: "What is the private-label MOQ?",
    answer:
      "Private-label minimums vary by pack size, packaging format, artwork, design, customization and commercial feasibility. The applicable MOQ is confirmed with the quotation.",
  },
  {
    question: "Is a Certificate of Analysis supplied?",
    answer:
      "Yes. A batch-specific Certificate of Analysis is available with every commercial batch or order.",
  },
  {
    question: "Are SDS/MSDS and Country of Origin documents available?",
    answer:
      "Yes. SDS/MSDS and a Country of Origin Certificate or Statement are available for commercial orders.",
  },
  {
    question: "Can phytosanitary and fumigation certificates be arranged?",
    answer:
      "A phytosanitary certificate can be arranged according to buyer or country requirements, and a fumigation certificate can be arranged when required.",
  },
  {
    question: "Are free samples available?",
    answer: "Yes. Free samples are available for prospective buyers.",
  },
  {
    question: "What packaging sizes are available?",
    answer:
      "Retail and private-label packs are available in 100 g, 200 g, 500 g and 1 kg. Bulk packaging is available in 20 kg and 25 kg double-layer vacuum packing.",
  },
  {
    question: "Are OEM, ODM and private-label services available?",
    answer:
      "Yes. OEM supply can follow an agreed buyer specification, formulation and branding; ODM support can follow mutually agreed technical and commercial requirements; and private-label supply can include buyer artwork and finished retail packaging, subject to feasibility.",
  },
  {
    question: "What is the typical order lead time?",
    answer:
      "Typical lead time is approximately 10–15 days after commercial and order confirmation, subject to product, quantity, packaging and complete requirements. Transit and delivery times are not guaranteed.",
  },
  {
    question: "How can an importer request a quotation?",
    answer:
      "Send the required product or grade, Indigotin and mesh requirements, quantity, supply model, pack size, artwork or branding needs, destination country or port, required documents, and company contact details through the contact page or WhatsApp export team.",
  },
];

const naturalIndigoPowderStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://shiveshinternational.com/products/natural-indigo-powder#product",
      name: "Natural Indigo Powder",
      alternateName: [
        "Indigofera tinctoria Powder",
        "Natural Indigo Leaf Powder",
        "Microfine Indigo Powder",
        "Indigo Powder for Hair",
      ],
      url:
        "https://shiveshinternational.com/products/natural-indigo-powder",
      image:
        "https://shiveshinternational.com/images/products/natural-indigo-powder/natural-indigo-powder-hero-ultrawide-4k-final-v2.png",
      description:
        "100% pure microfine Indigofera tinctoria leaf powder from Tamil Nadu, India, with 38%–45% Indigotin for bulk, OEM, ODM and private-label buyers.",
      category: "Natural Botanical Hair-Colouring Powder",
      material: "Selected Indigofera tinctoria Leaves",
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
          "Importers, distributors, wholesalers, salons, cosmetic manufacturers and private-label buyers",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Raw Material Origin",
          value: "Tamil Nadu, South India, India",
        },
        {
          "@type": "PropertyValue",
          name: "Botanical Name",
          value: "Indigofera tinctoria",
        },
        {
          "@type": "PropertyValue",
          name: "Composition",
          value:
            "100% Pure Indigofera tinctoria Leaf Powder; No Added Dye, Chemical or Other Ingredient",
        },
        {
          "@type": "PropertyValue",
          name: "Grade/Form",
          value: "Microfine Natural Indigo Powder",
        },
        {
          "@type": "PropertyValue",
          name: "Indigotin",
          value: "38%–45%",
        },
        {
          "@type": "PropertyValue",
          name: "Mesh Availability",
          value: "80–100 Mesh",
        },
        {
          "@type": "PropertyValue",
          name: "Moisture",
          value: "5%–8%",
        },
        {
          "@type": "PropertyValue",
          name: "Bulk Minimum Order",
          value: "Bulk Orders Can Start from 100 kg",
        },
        {
          "@type": "PropertyValue",
          name: "Private-Label MOQ",
          value:
            "Varies by Pack Size, Packaging, Artwork, Design and Customization",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value:
            "100 g, 200 g, 500 g and 1 kg retail packs; 20 kg and 25 kg double-layer vacuum bulk packing",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://shiveshinternational.com/products/natural-indigo-powder#webpage",
      url: "https://shiveshinternational.com/products/natural-indigo-powder",
      name: "Natural Indigo Powder Manufacturer & Exporter India",
      description:
        "Procurement information for 100% pure microfine Natural Indigo Powder supplied from Tamil Nadu, India.",
      isPartOf: {
        "@id": "https://shiveshinternational.com/#website",
      },
      about: {
        "@id":
          "https://shiveshinternational.com/products/natural-indigo-powder#product",
      },
      breadcrumb: {
        "@id":
          "https://shiveshinternational.com/products/natural-indigo-powder#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/natural-indigo-powder#breadcrumb",
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
          name: "Natural Indigo Powder",
          item:
            "https://shiveshinternational.com/products/natural-indigo-powder",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://shiveshinternational.com/products/natural-indigo-powder#faq",
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
export default function NaturalIndigoPowderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        naturalIndigoPowderStructuredData
      ).replace(/</g, "\\u003c"),
    }}
  />
      <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/natural-indigo-powder/natural-indigo-powder-hero-ultrawide-4k-final-v2.png"
          alt="Export-grade natural indigo powder manufacturer and supplier from India"
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
                  Manufacturer · Exporter · Supplier
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
                Shivesh International manufactures, exports and supplies 100%
                pure microfine Indigofera tinctoria leaf powder from Tamil Nadu,
                South India, for importers, distributors, wholesalers, salons,
                hair-care and cosmetic brands, and OEM, ODM and private-label buyers.
              </p>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#product-overview"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  View Indigo Details
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/32 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-7 grid max-w-[680px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["100%", "Pure Leaf Powder"],
                  ["38–45%", "Indigotin"],
                  ["80–100", "Mesh Range"],
                  ["B2B", "OEM · ODM · Private Label"],
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
                  alt="Natural indigo powder supplier from India with private-label retail packaging"
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
                    Natural Indigo Powder from India
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight">
  Natural Indigo Powder
  <br />
  Prepared from
  <span className="text-[#9f7f36]">
    {" "}Indigofera tinctoria Leaves
  </span>
</h2>
              </StaggerItem>

              <StaggerItem delay={320}>
                <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-3">
                  {[
                    { symbol: "BT", title: "Indigofera tinctoria" },
                    { symbol: "LF", title: "100% Pure Leaf Powder" },
                    { symbol: "IN", title: "Tamil Nadu, South India" },
                    { symbol: "MF", title: "Microfine Indigo Powder" },
                    { symbol: "38", title: "38%–45% Indigotin" },
                    { symbol: "EX", title: "Bulk Export Supply" },
                    { symbol: "PL", title: "OEM, ODM & Private Label" },
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
                  Export-quality Indigofera tinctoria powder for importers,
  wholesalers, cosmetic manufacturers, salons and private-label
  botanical hair-colour brands.
                </p>
              </StaggerItem>

              <StaggerItem delay={520}>
                <div className="mt-8 space-y-6">
  <p className="text-lg leading-9 text-[#4c5f54]">
    Natural Indigo Powder is prepared from selected leaves of
    <strong> Indigofera tinctoria</strong> sourced from Tamil Nadu,
    South India. It is supplied as a microfine botanical powder.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    This traditional botanical hair-colour powder is commonly used
    after Natural Henna to support darker brown-to-black hair
    shades in professional salon, herbal hair-care and cosmetic
    product applications.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    The composition is 100% pure Indigofera tinctoria leaf powder,
    with no added dye, chemical or other ingredient. Commercial
    supply supports importers, distributors, wholesalers, salons,
    hair-care brands, cosmetic brands and OEM, ODM and private-label buyers.
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
                    Natural Indigo Powder Origin
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
  Natural Indigo Powder from Tamil Nadu,
  <span className="text-[#9f7f36]">
    {" "}South India, India
  </span>
</h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Natural Indigo Powder sourced from selected Indigofera tinctoria
                  leaves from Tamil Nadu, South India, for botanical powder processing
                  and commercial export supply.
                </p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <div className="mt-7 space-y-5">
  <p className="text-lg leading-9 text-[#4c5f54]">
    Tamil Nadu is the confirmed raw-material origin for the selected
    Indigofera tinctoria leaves used in this product.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    Selected natural indigo leaves are processed into microfine
    Natural Indigo Powder for professional salons, retail brands,
    wholesale buyers and bulk export requirements.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    Product specifications, packaging, documentation and testing
    requirements are reviewed with the buyer before commercial supply.
  </p>
</div>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Tamil Nadu, South India Origin",
                    "Natural Indigofera tinctoria Leaves",
                    "100% Pure Leaf Powder",
                    "Microfine Natural Indigo Powder",
                    "Buyer-Required Quality Testing",
                    "Bulk, OEM, ODM and Private-Label Supply",
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
                  alt="Indigofera tinctoria leaves for natural indigo powder sourced from South India"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Natural Indigo Leaf Origin
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
  alt="Microfine natural indigo powder for dark brown and black botanical hair colour"
  fill
  sizes="(min-width: 1024px) 42vw, 100vw"
  className="object-cover transition-transform duration-[1300ms] group-hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Export-Quality Indigo Powder
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white">
                    Microfine Indigo Powder for Professional Buyers
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                    Benefits & Hair-Colour Applications
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Natural Indigo Powder for Dark Brown to Black Hair Shades
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
                  Natural Indigo Powder is traditionally used in botanical
  hair-colour applications and as the second step after Natural
  Henna to support dark brown-to-black shades for salons, herbal
  hair-colour brands and cosmetic product formulations.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Botanical colour for dark brown hair shades",
  "Traditionally used after henna for black shades",
  "Natural Indigo Powder for hair colouring",
  "Professional salon and beauty applications",
  "Henna and Indigo two-step colour method",
  "Herbal cosmetic and hair-colour formulations",
  "OEM and private-label Indigo products",
  "Wholesale and bulk Indigo Powder supply",
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
                Natural Indigo Powder Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Export-Grade Indigo Powder Technical Details
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Technical and commercial information for importers,
  distributors, cosmetic manufacturers and bulk Natural Indigo
  Powder buyers evaluating product grade, botanical origin,
  applications, packaging and private-label requirements.
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
                  ["Plant Part", "Selected Indigo Leaves"],
                  ["Composition", "100% Pure Indigofera tinctoria Leaf Powder; No Added Dye, Chemical or Other Ingredient"],
                  ["Raw Material Origin", "Tamil Nadu, South India, India"],
                  ["Grade/Form", "Microfine Natural Indigo Powder"],
                  ["Indigotin", "38%–45%"],
                  ["Mesh Availability", "80–100 Mesh"],
                  ["Moisture", "5%–8%"],
                  ["Bulk Minimum Order", "Bulk Orders Can Start from 100 kg"],
                  ["Private-Label MOQ", "Varies by Pack Size, Packaging, Artwork, Design and Customization"],
                  ["Shelf Life", "24 Months under Recommended Storage"],
                  ["Retail / Private-Label Packs", "100 g, 200 g, 500 g and 1 kg"],
                  ["Bulk Packaging", "20 kg and 25 kg Double-Layer Vacuum Packing"],
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
              Indigotin, mesh and moisture specifications are confirmed against
              the selected product and batch-specific Certificate of Analysis.
              Testing can be coordinated according to buyer instructions or requirements.
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
                How to Use Natural Indigo Powder
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Natural Henna + Indigo Method for Naturally Black Hair
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                This general guide explains the traditional two-step botanical
  hair-colour method using Natural Henna Powder first, followed by
  freshly prepared Natural Indigo Powder for darker brown-to-black
  hair shades.
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
                        Natural Henna Application
                      </h3>
                    </div>
                  </div>

                  <div className="mt-7 h-px bg-[#C9A962]/30" />

                 <div className="mt-7 space-y-4 text-base leading-8 text-[#4c5f54]">
  <p>
    Mix the required quantity of Natural Henna Powder with water
    to prepare a smooth, easily spreadable henna paste. Select
    the resting time according to the product grade and
    application method.
  </p>

  <p>
    Wear suitable protective gloves, divide clean hair into
    sections and apply the natural henna paste evenly from the
    roots to the tips.
  </p>

  <p>
    Leave the henna paste on the hair for the time appropriate
    to the desired result, then rinse thoroughly with water
    before proceeding to the Indigo application.
  </p>
</div>
                  <div className="mt-7 rounded-[18px] border border-[#C9A962]/25 bg-[#f5f0e6] px-5 py-4">
                    <p className="text-sm font-semibold leading-7 text-[#8B6A1E]">
                      The Natural Indigo step may be followed according to the selected
two-step application method and product instructions.
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
    smooth, easily spreadable Indigo paste. Use the freshly
    prepared paste promptly according to product instructions.
  </p>

  <p>
    Wear suitable protective gloves, divide the henna-treated
    hair into sections and apply the Natural Indigo paste evenly
    from roots to tips.
  </p>

  <p>
    Leave the Indigo paste on the hair for the time appropriate
    to the desired darker shade, then rinse thoroughly with
    water.
  </p>
</div>

                  <div className="mt-7 rounded-[18px] border border-[#C9A962]/30 bg-white/[0.04] px-5 py-4">
                    <p className="text-sm font-semibold leading-7 text-[#E4C878]">
                      Final colour development may continue after rinsing. Application
time and results can vary according to hair type, product grade
and the selected Henna–Indigo method.
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
                Indigo Powder Packaging & Bulk Supply
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Retail, Wholesale and Bulk Indigo Powder Packaging
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Flexible Natural Indigo Powder packaging for retail,
  professional, wholesale, bulk export and private-label orders,
  subject to pack size, order quantity, branding requirements and
  commercial feasibility.
              </p>
            </div>

            {/* TWO COMPACT INFORMATION CARDS */}
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <StaggerItem delay={0}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9f7f36]">
                    Retail & Bulk Pack Sizes
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Indigo Powder Retail and Bulk Packaging
                  </h3>

                  <p className="mt-5 leading-8 text-[#4c5f54]">
                    Retail Natural Indigo Powder can be offered in 100 g, 200 g,
  500 g and 1 kg silver, golden or coloured pouches. Wholesale
  and bulk Indigo Powder can be supplied in 20 kg and 25 kg
  double-layer vacuum-sealed export packing to help protect
  product freshness during storage and shipment.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem delay={120}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Export Packaging Options
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Custom Packaging for International Buyers
                  </h3>

                  <p className="mt-5 leading-8 text-[#F5F0E6]/68">
                    Packaging options include metallic pouches, coloured pouches,
  printed pouches, printed paper boxes, jars, master cartons and
  bulk export cartons. Custom packaging can be coordinated for
  importers, distributors, wholesalers and buyer-owned brands.
                  </p>
                </article>
              </StaggerItem>
            </div>

            {/* PACKAGING IMAGE STRIP */}
            <StaggerItem delay={180}>
              <div className="group relative mt-5 aspect-[5/2] w-full overflow-hidden rounded-[24px] border border-[#C9A962]/30 bg-[#071b14] shadow-[0_20px_55px_rgba(0,0,0,0.11)]">
                <Image
                  src="/images/products/natural-indigo-powder/natural-indigo-packaging-private-label-final-v1.png"
                  alt="Natural indigo powder retail private-label and bulk export packaging options"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/75 via-[#102f23]/35 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Indigo Powder Packaging Range
                    </p>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      Retail Packs, Bulk Supply and Export Cartons
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* PRIVATE LABEL SERVICES */}
            <div className="mt-10">
              <div className="text-center">
  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
    OEM, ODM & Private Label Indigo Powder Services
  </p>

  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#4c5f54]">
    Commercial supply options for importers, distributors, salon
    brands and cosmetic businesses requiring buyer-specific product,
    branding and finished-packaging support.
  </p>
</div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
  {
    code: "OEM",
    title: "OEM Indigo Powder Manufacturing",
    description: "Supply according to agreed buyer specification, formulation and branding.",
  },
  {
    code: "ODM",
    title: "ODM Indigo Product Support",
    description: "Product-development support according to mutually agreed technical and commercial requirements.",
  },
  {
    code: "BR",
    title: "Private Label Indigo Powder",
    description: "Buyer logo, artwork and finished retail packaging, subject to feasibility.",
  },
  {
    code: "BX",
    title: "Private Label Indigo Boxes",
    description: "Printed box programmes coordinated to approved artwork and order requirements.",
  },
  {
    code: "MP",
    title: "Printed Metallic Indigo Pouches",
    description: "Retail pouch formats coordinated to pack size, design and printing feasibility.",
  },
  {
    code: "CT",
    title: "Bulk Indigo Export Cartons",
    description: "Commercial packing for 20 kg and 25 kg double-layer vacuum packs.",
  },
                ].map((service, index) => (
                  <StaggerItem key={service.title} delay={(index % 3) * 80}>
                    <article className="flex h-full items-start gap-4 rounded-[20px] border border-[#C9A962]/28 bg-[#f5f0e6] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_16px_45px_rgba(0,0,0,0.09)]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-[10px] font-bold tracking-[0.08em] text-[#E4C878]">
                        {service.code}
                      </div>

                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#4c5f54]">
                          {service.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                Who We Supply
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Natural Indigo Powder for Professional Buyers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Procurement-focused supply for businesses developing bulk,
                professional, branded and finished retail Indigo Powder programmes.
              </p>
            </div>
            <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Importers", "Product, packaging and destination-document planning."],
                ["Distributors", "Wholesale and branded distribution programmes."],
                ["Wholesalers", "Commercial quantities and bulk export packing."],
                ["Cosmetic Brands", "Indigo powder for agreed cosmetic product requirements."],
                ["Hair-Care Brands", "Botanical hair-colour and hair-care product ranges."],
                ["Salons & Salon Suppliers", "Professional product and salon supply channels."],
                ["Herbal & Natural Brands", "Pure Indigofera tinctoria powder for branded ranges."],
                ["Private-Label Buyers", "Buyer artwork, retail packs and custom presentation."],
                ["OEM Buyers", "Supply to agreed specification, formulation and branding."],
                ["ODM Buyers", "Mutually agreed product-development and commercial support."],
                ["Bulk Buyers", "Bulk orders starting from 100 kg, subject to confirmation."],
                ["Sourcing Companies", "Consolidated product and commercial requirement support."],
              ].map(([title, text]) => (
                <article key={title} className="h-full border border-[#C9A962]/28 bg-[#ede5d7] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4c5f54]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* DOCUMENTS AND ORDER PLANNING */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">Documents & Export Support</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Commercial Documentation for Indigo Powder Buyers</h2>
              <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/68">Documentation is coordinated for the confirmed product, commercial order and destination requirements.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Batch-specific COA with every commercial batch or order", "SDS / MSDS available", "Country of Origin Certificate or Statement available", "Phytosanitary certificate arranged according to buyer or country requirements", "Fumigation certificate arranged when required", "Testing according to buyer instructions or requirements", "Applicable commercial and export documentation", "Incoterm coordination according to buyer requirements and the agreed quotation"].map((item) => (
                  <div key={item} className="border border-[#C9A962]/20 bg-[#071b14]/45 p-4 text-sm leading-7 text-[#F5F0E6]/72">{item}</div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#F5F0E6]/62">Company certifications and registrations presently include ISO, GMP, Halal, Kosher, HACCP, MSME and FSSAI. Applicability and scope should be reviewed against the selected product, order and buyer or destination requirement; this list does not represent automatic product-specific or destination-market approval.</p>
              <p className="mt-7 border border-[#C9A962]/30 bg-[#071b14]/55 p-5 text-sm leading-7 text-[#F5F0E6]/62">Destination-market import, customs, labelling, regulatory and product-specific requirements remain subject to buyer or importer verification and applicable authorities. Documentation support does not guarantee customs clearance or regulatory approval.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">Samples & Order Planning</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Plan Your Bulk, OEM, ODM or Private-Label Order</h2>
              <div className="mt-8 space-y-4">
                {[
                  ["Free Samples", "Free samples are available for prospective buyers."],
                  ["Bulk Order Quantity", "Bulk Natural Indigo Powder orders can start from 100 kg, subject to product, grade, packaging and commercial confirmation."],
                  ["Private-Label MOQ", "Private-label minimums vary by pack size, packaging format, artwork, design, customization and commercial feasibility."],
                  ["Typical Lead Time", "Approximately 10–15 days after commercial and order confirmation, subject to product, quantity, packaging and complete requirements. Transit and delivery times are not guaranteed."],
                  ["Payment & Shipping", "Payment terms are confirmed in the quotation. Shipping and Incoterms are coordinated according to buyer requirements and the agreed quotation."],
                ].map(([title, text]) => (
                  <article key={title} className="border border-[#C9A962]/22 bg-[#071b14]/45 p-5">
                    <h3 className="text-xl font-semibold text-[#E4C878]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#F5F0E6]/68">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23]">Request Quote or Sample →</Link>
                <a href="/catalogues/Shivesh-International-Product-Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#C9A962]/55 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">View Product Catalogue →</a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCUREMENT FAQ */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">Buyer Questions</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Natural Indigo Powder Procurement FAQs</h2>
            </div>
            <div className="mt-12 divide-y divide-[#173b2a]/15 border-y border-[#173b2a]/15">
              {procurementFaqs.map((faq, index) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
                    <h3 className="text-xl font-semibold leading-snug"><span className="mr-4 text-[#9f7f36]">{String(index + 1).padStart(2, "0")}</span>{faq.question}</h3>
                    <span className="text-2xl text-[#9f7f36] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-[940px] pb-7 text-[15px] leading-8 text-[#4c5f54]">{faq.answer}</p>
                </details>
              ))}
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
              Bulk & Private Label Indigo Powder Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Looking for a Natural Indigo Powder Manufacturer in India?
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#F5F0E6]/65">
              Contact Shivesh International for bulk, OEM, ODM and private-label
              Natural Indigo Powder supply. Share the product or grade, Indigotin
              and mesh requirements, quantity, supply model, pack size, artwork or
              branding needs, destination country or port, required documents and
              company contact details. Bulk orders can start from 100 kg; private-label
              minimums depend on packaging, design and customization.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request Indigo Powder Quote
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                WhatsApp Export Team
                <span>→</span>
              </a>
              <a
                href="/catalogues/Shivesh-International-Product-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                View Product Catalogue
                <span>→</span>
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[10px] font-bold uppercase tracking-[0.18em]">
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

  <Link href="/products/natural-henna-hair-colors" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Natural Henna Hair Colors</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/products/henna-based-hair-colors" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Henna-Based Hair Colors</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/certifications" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Certifications</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/resources" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Buyer Resources</Link>
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
