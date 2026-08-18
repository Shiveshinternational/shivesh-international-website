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
  title: "Henna & Natural Products Exporter to USA",
  description:
    "Indian manufacturer, exporter and supplier of natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for USA importers, distributors, wholesalers and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "natural products exporter to USA",
    "natural products supplier USA",
    "Indian natural products exporter USA",
    "natural products manufacturer India for USA",
    "natural products wholesale supplier USA",
    "bulk natural products exporter USA",
    "private label natural products USA",
    "OEM natural products manufacturer for USA",
    "Indian botanical products supplier USA",
    "herbal products exporter to USA",

    "henna powder exporter to USA",
    "natural henna powder supplier USA",
    "natural henna powder manufacturer for USA",
    "Indian henna powder exporter USA",
    "Sojat henna powder supplier USA",
    "bulk henna powder supplier USA",
    "wholesale henna powder exporter USA",
    "organic henna powder supplier USA",
    "private label henna powder USA",
    "OEM henna powder manufacturer USA",
    "henna powder importer supplier USA",
    "henna powder distributor supply USA",
    "export grade henna powder USA",

    "indigo powder exporter to USA",
    "natural indigo powder supplier USA",
    "natural indigo powder manufacturer for USA",
    "bulk indigo powder supplier USA",
    "wholesale indigo powder exporter USA",
    "private label indigo powder USA",
    "Indigofera tinctoria powder supplier USA",
    "botanical hair color powder supplier USA",

    "natural henna hair colors exporter USA",
    "botanical hair colors supplier USA",
    "natural hair color manufacturer for USA",
    "henna hair color wholesale supplier USA",
    "private label henna hair colors USA",
    "OEM botanical hair colors USA",
    "professional salon hair colors supplier USA",
    "natural hair dye exporter to USA",

    "Ayurvedic herbs exporter to USA",
    "Ayurvedic herbs supplier USA",
    "Indian herbal powders exporter USA",
    "bulk herbal powder supplier USA",
    "private label Ayurvedic herbs USA",
    "botanical powders wholesaler USA",

    "Indian spices exporter to USA",
    "Indian spices supplier USA",
    "bulk Indian spices exporter USA",
    "wholesale spices supplier USA",
    "private label Indian spices USA",
    "whole and ground spices exporter USA",

    "USA importer natural products India",
    "USA distributor natural products India",
    "USA wholesale botanical products supplier",
    "natural products supplier for American brands",
    "private label supplier for USA brands",
    "Indian exporter for USA cosmetic brands",
    "Indian exporter for USA salon brands",
    "Indian exporter for USA wellness brands",
    "retail packaging natural products USA",
    "bulk packaging natural products USA",
    "export documentation support for USA",
    "natural products shipping from India to USA",
    "Shivesh International USA exporter",
  ],
  alternates: {
    canonical: "/export/usa",
  },
  openGraph: {
    title: "Henna & Natural Products Exporter to USA",
    description:
      "Bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colors, Ayurvedic herbs and spices for professional buyers in the United States.",
    url: "https://shiveshinternational.com/export/usa",
    type: "website",
    locale: "en_US",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/usa/usa-henna-natural-products-export-hero-final-v3.png",
        width: 1536,
        height: 1024,
        alt: "Indian henna and natural products exporter supplying buyers in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henna & Natural Products Exporter to USA",
    description:
      "Indian supplier of henna, indigo, botanical hair colors, herbs and spices for USA importers, distributors and private-label brands.",
    images: ["/images/export/usa/usa-henna-natural-products-export-hero-final-v3.png"],
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
const usaExportStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://shiveshinternational.com/export/usa#webpage",
      url: "https://shiveshinternational.com/export/usa",
      name: "Henna and Natural Products Exporter to USA",
      description:
        "USA-focused export support for natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices supplied from India.",
      isPartOf: {
        "@id": "https://shiveshinternational.com/#website",
      },
      about: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      breadcrumb: {
        "@id": "https://shiveshinternational.com/export/usa#breadcrumb",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://shiveshinternational.com/images/export/usa/usa-henna-natural-products-export-hero-final-v3.png",
        width: 1536,
        height: 1024,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "Service",
      "@id": "https://shiveshinternational.com/export/usa#service",
      name: "Natural Products Export Supply to USA",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Export-oriented supply of Indian henna, indigo, botanical hair colors, Ayurvedic herbs and spices for importers, distributors, wholesalers, salons, cosmetic brands and private-label buyers in the United States.",
      url: "https://shiveshinternational.com/export/usa",
      provider: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
        sameAs: "https://www.wikidata.org/wiki/Q30",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Importers, distributors, wholesalers, retailers, salon brands, cosmetic companies, wellness brands and private-label buyers in the United States",
      },
      category: [
        "Natural Henna Powder",
        "Natural Indigo Powder",
        "Natural Henna Hair Colors",
        "Henna-Based Hair Colors",
        "Ayurvedic Indian Herbs",
        "Indian Spices",
      ],
      termsOfService:
        "Minimum order quantity is 200 kg per item. Product availability, packaging and commercial terms are confirmed according to buyer requirements.",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://shiveshinternational.com/export/usa#breadcrumb",
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
          name: "Export",
          item: "https://shiveshinternational.com/export",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Export to USA",
          item: "https://shiveshinternational.com/export/usa",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": "https://shiveshinternational.com/export/usa#products",
      name: "Natural Products Supplied to USA",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Natural Henna Powder",
          url: "https://shiveshinternational.com/products/natural-henna-powder",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Natural Indigo Powder",
          url: "https://shiveshinternational.com/products/natural-indigo-powder",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Natural Henna Hair Colors",
          url: "https://shiveshinternational.com/products/natural-henna-hair-colors",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Henna-Based Hair Colors",
          url: "https://shiveshinternational.com/products/henna-based-hair-colors",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Ayurvedic Indian Herbs",
          url: "https://shiveshinternational.com/products/ayurvedic-indian-herbs",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Indian Spices",
          url: "https://shiveshinternational.com/products/indian-spices",
        },
      ],
    },
  ],
};
const usaExportFaqs = [
  {
    question: "What natural products do you export from India to the USA?",
    answer:
      "Shivesh International supplies Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and selected Indian Spices for qualified commercial buyers in the United States.",
  },
  {
    question: "What is the minimum order quantity for USA buyers?",
    answer:
      "The minimum order quantity is 200 kg per item. Final commercial quantity may also depend on the selected product, packaging format and private-label requirements.",
  },
  {
    question: "Do you provide private-label and OEM products for USA brands?",
    answer:
      "Yes. Qualified USA buyers can discuss OEM and private-label support for selected products, including buyer-brand coordination, labels, pouches, retail boxes, professional packs and export cartons.",
  },
  {
    question: "Can USA buyers order bulk and wholesale packaging?",
    answer:
      "Yes. Bulk, wholesale, professional and selected retail packaging options can be reviewed according to the product category, order quantity and packaging feasibility.",
  },
  {
    question: "Can product samples be arranged before a bulk USA order?",
    answer:
      "Samples may be reviewed where commercially suitable and available. Sample quantity, product availability, courier cost and any applicable charges are confirmed before dispatch.",
  },
  {
    question: "Do you arrange shipping from India to the United States?",
    answer:
      "We coordinate applicable export packing, commercial documentation and shipment preparation. Freight method, destination, Incoterms and logistics responsibility are confirmed with the buyer before order finalisation.",
  },
  {
    question: "Are all products automatically approved for sale in the USA?",
    answer:
      "No universal approval claim is made. Requirements vary by product, intended use, packaging and destination. The USA importer or buyer must confirm applicable customs, federal, state, labelling and product-specific requirements.",
  },
  {
    question: "How can a USA buyer request an export quotation?",
    answer:
      "The buyer can use the website contact form and share the required product, grade, quantity, packaging format, private-label requirements and destination. Our export team will review the enquiry before providing commercial information.",
  },
];

const usaFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://shiveshinternational.com/export/usa#faq",
  mainEntity: usaExportFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
export default function USAExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaExportStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaFaqStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <Navbar />

      {/* USA EXPORT HERO */}
      <section
        id="natural-products-exporter-to-usa"
        className="relative isolate min-h-[720px] overflow-hidden bg-[#071b14] lg:aspect-[160/63] lg:min-h-0"
      >
        <Image
          src="/images/export/usa/usa-henna-natural-products-export-hero-final-v3.png"
          alt="Indian henna indigo herbs and spices exporter supplying professional buyers in the USA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/80 via-[#102f23]/45 to-[#071b14]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-black/12" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[78vh] w-full items-center px-6 pb-16 pt-28 sm:px-8 lg:px-12">
          <div className="w-full max-w-[760px]">
            <StaggerItem delay={0}>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">
                  India to the United States
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={100}>
              <h1 className="max-w-[750px] font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Henna & Natural Products
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Exporter to USA
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[670px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International is an Indian manufacturer, exporter and
                supplier of Natural Henna Powder, Natural Indigo Powder,
                botanical hair colors, Ayurvedic Indian Herbs and Indian
                Spices for importers, distributors, wholesalers and
                private-label buyers across the United States.
              </p>
            </StaggerItem>

            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#usa-export-products"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore USA Supply
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request USA Export Quote
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[720px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["USA", "Buyer Support"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-white/15 bg-black/18 px-4 py-4 backdrop-blur-md"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">
                      {value}
                    </p>

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6]/52">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>
      {/* USA EXPORT PRODUCT PORTFOLIO */}
      <section
        id="usa-export-products"
        className="relative overflow-hidden bg-[#F5F0E6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[960px] text-center">
              <StaggerItem delay={0}>
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-14 bg-[#C9A962]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36] sm:text-xs">
                    Natural Products Supplied to USA
                  </p>

                  <span className="h-px w-14 bg-[#C9A962]" />
                </div>
              </StaggerItem>

              <StaggerItem delay={100}>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#12382A]">
                  Indian Natural Products
                  <span className="mt-1 block text-[#A97B22]">
                    for Professional USA Buyers
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={200}>
                <p className="mx-auto mt-7 max-w-[850px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                  Our export portfolio supports USA importers, distributors,
                  wholesalers, cosmetic companies, salon brands, wellness
                  businesses, retailers and private-label buyers seeking
                  dependable product sourcing from India.
                </p>
              </StaggerItem>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Natural Henna Powder",
                  description:
                    "Sojat-origin natural henna powder supplied in bulk, wholesale and private-label formats for qualified USA buyers.",
                  href: "/products/natural-henna-powder",
                },
                {
                  number: "02",
                  title: "Natural Indigo Powder",
                  description:
                    "Triple-sifted Indigofera tinctoria powder for botanical hair-colour, salon and private-label product requirements.",
                  href: "/products/natural-indigo-powder",
                },
                {
                  number: "03",
                  title: "Natural Henna Hair Colors",
                  description:
                    "A coordinated collection of botanical powder hair colours for professional, wholesale and buyer-brand markets.",
                  href: "/products/natural-henna-hair-colors",
                },
                {
                  number: "04",
                  title: "Henna-Based Hair Colors",
                  description:
                    "Professional henna-based powder hair-colour options for distributors, salons and cosmetic brands in the USA.",
                  href: "/products/henna-based-hair-colors",
                },
                {
                  number: "05",
                  title: "Ayurvedic Indian Herbs",
                  description:
                    "Indian Ayurvedic herbs and herbal powders for wellness, personal-care, ingredient and private-label businesses.",
                  href: "/products/ayurvedic-indian-herbs",
                },
                {
                  number: "06",
                  title: "Indian Spices",
                  description:
                    "Selected whole and ground Indian spices supplied for eligible wholesale, retail and private-label requirements.",
                  href: "/products/indian-spices",
                },
              ].map((product, index) => (
                <StaggerItem
                  key={product.title}
                  delay={280 + (index % 3) * 80}
                >
                  <article className="group flex h-full min-h-[280px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/65 hover:shadow-[0_22px_55px_rgba(20,50,38,0.12)]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold tracking-[0.25em] text-[#A97B22]">
                        {product.number}
                      </span>

                      <span className="h-px w-12 bg-[#C9A962]/60" />
                    </div>

                    <h3 className="mt-8 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight text-[#173B2A]">
                      {product.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]/80">
                      {product.description}
                    </p>

                    <Link
                      href={product.href}
                      className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B6A1E] transition-colors duration-300 group-hover:text-[#173B2A]"
                    >
                      View Product Details
                      <span>→</span>
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <StaggerItem delay={600}>
              <div className="mx-auto mt-10 max-w-[900px] border border-[#C9A962]/30 bg-[#12382A] px-6 py-6 text-center text-[#F5F0E6] sm:px-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">
                  Commercial Order Requirement
                </p>

                <p className="mt-3 text-[14px] font-light leading-7 text-[#F5F0E6]/72">
                  The minimum order quantity is 200 kg per item. Product
                  selection, packaging, labelling and shipment terms are
                  confirmed according to the buyer&apos;s commercial
                  requirements.
                </p>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* WHY USA BUYERS CHOOSE US */}
      <section
        id="why-usa-buyers-choose-us"
        className="relative overflow-hidden bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-[#C9A962]/[0.06] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[940px] text-center">
              <StaggerItem delay={0}>
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-14 bg-[#C9A962]/75" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A962] sm:text-xs">
                    USA Buyer Advantages
                  </p>

                  <span className="h-px w-14 bg-[#C9A962]/75" />
                </div>
              </StaggerItem>

              <StaggerItem delay={100}>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[#F7F1E7]">
                  Why USA Buyers Choose
                  <span className="mt-1 block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                    Shivesh International
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={200}>
                <p className="mx-auto mt-7 max-w-[850px] text-[16px] font-light leading-8 text-[#F5F0E6]/65 sm:text-[17px]">
                  We support professional buyers with structured sourcing,
                  controlled processing, commercially suitable packaging and
                  export coordination for natural products supplied from India
                  to the United States.
                </p>
              </StaggerItem>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#C9A962]/18 bg-[#C9A962]/18 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Experienced Indian Supplier",
                  description:
                    "More than 30 years of industry experience across natural products, sourcing, processing and commercial buyer requirements.",
                },
                {
                  number: "02",
                  title: "Controlled Product Processing",
                  description:
                    "Structured handling, grinding, sieving, blending, quality checks and packing according to the applicable product category.",
                },
                {
                  number: "03",
                  title: "Bulk & Wholesale Supply",
                  description:
                    "Commercial supply support for USA importers, distributors, wholesalers, salons, cosmetic businesses and wellness brands.",
                },
                {
                  number: "04",
                  title: "OEM & Private Label Support",
                  description:
                    "Buyer-brand coordination covering selected products, pack sizes, artwork, labels, retail presentation and export cartons.",
                },
                {
                  number: "05",
                  title: "Export Documentation Support",
                  description:
                    "Professional coordination for commercial documents, product details, packing information and shipment-related requirements.",
                },
                {
                  number: "06",
                  title: "Buyer-Focused Communication",
                  description:
                    "Clear coordination for product selection, order quantity, samples where applicable, packaging and repeat supply planning.",
                },
              ].map((item, index) => (
                <StaggerItem
                  key={item.title}
                  delay={280 + (index % 3) * 80}
                >
                  <article className="group relative flex h-full min-h-[285px] flex-col bg-[#0D3828] p-7 transition-colors duration-500 hover:bg-[#123F2E]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A962]/70">
                        Advantage
                      </span>

                      <span className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#E4C878]">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center gap-2">
                      <span className="h-px w-9 bg-[#C9A962]/75" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    </div>

                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[25px] font-medium leading-tight text-[#F7F1E7]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/55 transition-colors duration-500 group-hover:text-[#F5F0E6]/72">
                      {item.description}
                    </p>

                    <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </StaggerItem>
              ))}
            </div>

            <StaggerItem delay={650}>
              <div className="mt-10 flex flex-col items-center justify-between gap-5 border border-[#C9A962]/22 bg-white/[0.035] px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E4C878]">
                    Planning a USA Import Requirement?
                  </p>

                  <p className="mt-2 text-[14px] font-light leading-7 text-[#F5F0E6]/60">
                    Share your required product, quantity, packaging format and
                    destination for an export-focused commercial discussion.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Discuss USA Requirement
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* USA BULK PACKAGING OEM AND PRIVATE LABEL */}
      <section
        id="usa-private-label-natural-products"
        className="relative overflow-hidden bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-44 bottom-0 h-[460px] w-[460px] rounded-full bg-[#C9A962]/12 blur-[150px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              {/* LEFT IMAGE */}
              <StaggerItem delay={0}>
                <div className="relative">
                  <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/20" />

                  <div className="group relative aspect-[900/1009] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#12382A] shadow-[0_28px_70px_rgba(20,50,38,0.18)] lg:min-h-[620px]">
                    <Image
                      src="/images/export/usa/usa-private-label-natural-products-packaging-final-v3.png"
                      alt="Private label henna indigo herbs and spices packaging for USA importers and distributors"
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/75 via-transparent to-black/5" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="max-w-[520px] border border-white/15 bg-[#0D2F22]/78 p-5 backdrop-blur-md">
                        <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                          USA Buyer-Brand Solutions
                        </p>

                        <p className="mt-3 font-[family-name:var(--font-playfair)] text-[25px] font-medium leading-tight text-[#F7F1E7] sm:text-[29px]">
                          Retail, Professional, Bulk and Private-Label Packaging
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* RIGHT CONTENT */}
              <div>
                <StaggerItem delay={100}>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-14 bg-[#C9A962]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36] sm:text-xs">
                      OEM & Private Label for USA
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem delay={180}>
                  <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#12382A]">
                    Packaging Solutions
                    <span className="mt-1 block text-[#A97B22]">
                      for USA Brands and Distributors
                    </span>
                  </h2>
                </StaggerItem>

                <StaggerItem delay={260}>
                  <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                    Qualified USA buyers can discuss bulk supply, wholesale
                    packs, professional packaging, OEM manufacturing support
                    and private-label presentation for selected natural
                    products. Final options depend on the product, order
                    quantity, artwork and packaging feasibility.
                  </p>
                </StaggerItem>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      code: "OEM",
                      title: "OEM Product Support",
                    },
                    {
                      code: "PL",
                      title: "Private-Label Branding",
                    },
                    {
                      code: "PK",
                      title: "Custom Pack Coordination",
                    },
                    {
                      code: "LB",
                      title: "Buyer-Supplied Label Artwork",
                    },
                    {
                      code: "BX",
                      title: "Retail Boxes & Pouches",
                    },
                    {
                      code: "CT",
                      title: "Bulk Export Cartons",
                    },
                  ].map((service, index) => (
                    <StaggerItem
                      key={service.title}
                      delay={340 + (index % 2) * 70}
                    >
                      <article className="group flex min-h-[82px] items-center gap-4 border-b border-[#173B2A]/12 py-4 transition-colors duration-300 hover:border-[#C9A962]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#12382A] text-[9px] font-bold tracking-[0.1em] text-[#E4C878]">
                          {service.code}
                        </div>

                        <h3 className="font-[family-name:var(--font-playfair)] text-[19px] font-semibold leading-tight text-[#173B2A]">
                          {service.title}
                        </h3>
                      </article>
                    </StaggerItem>
                  ))}
                </div>

                <StaggerItem delay={600}>
                  <div className="mt-9 border border-[#C9A962]/35 bg-[#F5F0E6]/80 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9F7F36]">
                      MOQ and Packaging Review
                    </p>

                    <p className="mt-3 text-[14px] font-light leading-7 text-[#4C5F54]">
                      Minimum order quantity is 200 kg per item. Retail pack
                      sizes, professional packs, bulk bags, printing, labels,
                      cartons and buyer-brand requirements are reviewed before
                      commercial confirmation.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem delay={680}>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                  >
                    Request Private Label Details
                    <span>→</span>
                  </Link>
                </StaggerItem>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
            {/* USA EXPORT PROCESS AND DOCUMENTATION */}
      <section
        id="usa-export-process"
        className="relative overflow-hidden bg-[#F5F0E6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 top-20 h-[460px] w-[460px] rounded-full bg-[#173B2A]/[0.05] blur-[150px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* LEFT CONTENT */}
              <div>
                <StaggerItem delay={0}>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-14 bg-[#C9A962]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36] sm:text-xs">
                      India to USA Export Coordination
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem delay={100}>
                  <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#12382A]">
                    Structured Export Process
                    <span className="mt-1 block text-[#A97B22]">
                      for United States Buyers
                    </span>
                  </h2>
                </StaggerItem>

                <StaggerItem delay={180}>
                  <p className="mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                    Each USA export enquiry is reviewed according to the
                    selected product, commercial quantity, packaging format,
                    destination and buyer documentation requirements before
                    order confirmation and shipment planning.
                  </p>
                </StaggerItem>

                <div className="mt-10 space-y-3">
                  {[
                    {
                      step: "01",
                      title: "Product & Quantity Review",
                      description:
                        "We review the required product, grade, quantity, intended application and minimum order requirement.",
                    },
                    {
                      step: "02",
                      title: "Quotation & Commercial Terms",
                      description:
                        "Pricing, packing, production scope, payment terms and applicable shipment terms are discussed with the buyer.",
                    },
                    {
                      step: "03",
                      title: "Packaging & Label Confirmation",
                      description:
                        "Bulk, wholesale, professional or private-label presentation is confirmed according to commercial feasibility.",
                    },
                    {
                      step: "04",
                      title: "Production & Quality Checks",
                      description:
                        "The confirmed product is processed, packed and reviewed according to the applicable product and order requirements.",
                    },
                    {
                      step: "05",
                      title: "Export Documents & Dispatch",
                      description:
                        "Applicable commercial documents, packing information and shipment coordination are prepared for dispatch.",
                    },
                  ].map((item, index) => (
                    <StaggerItem
                      key={item.step}
                      delay={260 + index * 70}
                    >
                      <article className="group grid gap-4 border-b border-[#173B2A]/12 py-5 sm:grid-cols-[64px_1fr]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#12382A] font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#E4C878]">
                          {item.step}
                        </div>

                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#173B2A]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[14px] font-light leading-7 text-[#4C5F54]/80">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <StaggerItem delay={180}>
                <div className="relative">
                  <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/18" />

                  <div className="group relative aspect-[12/13] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#12382A] shadow-[0_28px_70px_rgba(20,50,38,0.18)]">
                    <Image
                      src="/images/export/usa/india-to-usa-export-shipping-coordination-final-v3.png"
                      alt="Natural products export shipment documentation and logistics coordination from India to USA"
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/78 via-transparent to-black/5" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="border border-white/15 bg-[#0D2F22]/78 p-5 backdrop-blur-md">
                        <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                          Export Shipment Coordination
                        </p>

                        <p className="mt-3 font-[family-name:var(--font-playfair)] text-[26px] font-medium leading-tight text-[#F7F1E7]">
                          Commercial Documents, Packing and Dispatch Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </div>

            {/* IMPORTANT COMPLIANCE NOTE */}
            <StaggerItem delay={700}>
              <div className="mt-14 grid gap-5 border border-[#C9A962]/32 bg-[#EDE5D7] p-7 md:grid-cols-[auto_1fr] md:items-start md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#12382A] text-lg font-bold text-[#E4C878]">
                  i
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9F7F36]">
                    USA Import and Regulatory Requirements
                  </p>

                  <p className="mt-3 text-[14px] font-light leading-7 text-[#4C5F54]">
                    Documentation and regulatory requirements vary by product,
                    intended use, packaging and destination. The USA importer
                    or buyer should confirm applicable federal, state, customs,
                    labelling and product-specific requirements before placing
                    the commercial order.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* USA BUYER TYPES AND TARGET MARKETS */}
      <section
        id="usa-natural-products-buyers"
        className="relative overflow-hidden bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-[#C9A962]/[0.06] blur-[150px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.72fr]">
              <div>
                <StaggerItem delay={0}>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-14 bg-[#C9A962]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A962] sm:text-xs">
                      B2B Natural Products Buyers in USA
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem delay={100}>
                  <h2 className="mt-6 max-w-[900px] font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.7rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[#F7F1E7]">
                    Supporting Professional Buyers
                    <span className="mt-1 block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                      across the United States
                    </span>
                  </h2>
                </StaggerItem>
              </div>

              <StaggerItem delay={180}>
                <p className="text-[15px] font-light leading-8 text-[#F5F0E6]/62">
                  Our USA-focused export support is designed for qualified
                  commercial buyers seeking bulk, wholesale, OEM or
                  private-label natural products supplied from India.
                </p>
              </StaggerItem>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#C9A962]/18 bg-[#C9A962]/18 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Importers",
                  description:
                    "USA import businesses sourcing Indian botanical, cosmetic, wellness and food-category products.",
                },
                {
                  number: "02",
                  title: "Distributors",
                  description:
                    "Regional and nationwide distributors developing natural hair-care, herbal, wellness or spice portfolios.",
                },
                {
                  number: "03",
                  title: "Wholesalers",
                  description:
                    "Commercial buyers requiring bulk quantities, wholesale packs or products for further distribution.",
                },
                {
                  number: "04",
                  title: "Cosmetic Brands",
                  description:
                    "Beauty and hair-care companies sourcing henna, indigo and botanical powder hair-colour products.",
                },
                {
                  number: "05",
                  title: "Salon Brands",
                  description:
                    "Professional salon groups and hair-care businesses seeking selected botanical colour products.",
                },
                {
                  number: "06",
                  title: "Wellness Companies",
                  description:
                    "Herbal and personal-care businesses sourcing Ayurvedic herbs and botanical powder ingredients.",
                },
                {
                  number: "07",
                  title: "Retail Businesses",
                  description:
                    "Retail and e-commerce brands discussing selected consumer packs and buyer-brand presentation.",
                },
                {
                  number: "08",
                  title: "Private-Label Buyers",
                  description:
                    "Qualified USA businesses requiring custom branding, packaging and coordinated product ranges.",
                },
              ].map((buyer, index) => (
                <StaggerItem
                  key={buyer.title}
                  delay={240 + (index % 4) * 65}
                >
                  <article className="group relative flex h-full min-h-[245px] flex-col bg-[#0D3828] p-6 transition-colors duration-500 hover:bg-[#123F2E]">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#C9A962]/65">
                        USA Buyer
                      </span>

                      <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">
                        {buyer.number}
                      </span>
                    </div>

                    <h3 className="mt-8 font-[family-name:var(--font-playfair)] text-[24px] font-medium text-[#F7F1E7]">
                      {buyer.title}
                    </h3>

                    <p className="mt-4 text-[13px] font-light leading-7 text-[#F5F0E6]/52 transition-colors duration-500 group-hover:text-[#F5F0E6]/70">
                      {buyer.description}
                    </p>

                    <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </StaggerItem>
              ))}
            </div>

            {/* USA COMMERCIAL REGIONS */}
            <StaggerItem delay={700}>
              <div className="mt-12 border border-[#C9A962]/24 bg-white/[0.035] p-7 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">
                      United States Market Coverage
                    </p>

                    <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-[30px] font-medium leading-tight text-[#F7F1E7]">
                      Commercial Enquiries from across the USA
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "New York",
                      "New Jersey",
                      "California",
                      "Texas",
                      "Florida",
                      "Illinois",
                      "Georgia",
                      "Washington",
                      "Massachusetts",
                      "Pennsylvania",
                      "North Carolina",
                      "Other USA Markets",
                    ].map((market) => (
                      <span
                        key={market}
                        className="border border-[#C9A962]/25 bg-[#071B14]/30 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]/62"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-7 border-t border-white/10 pt-6 text-[12px] font-light leading-6 text-[#F5F0E6]/42">
                  Locations shown represent target commercial markets and do
                  not imply a local office, warehouse or exclusive
                  distribution arrangement in the United States.
                </p>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* USA EXPORT FAQ */}
      <section
        id="usa-export-faq"
        className="relative overflow-hidden bg-[#F5F0E6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-44 top-20 h-[440px] w-[440px] rounded-full bg-[#C9A962]/10 blur-[150px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-[900px] text-center">
              <StaggerItem delay={0}>
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-14 bg-[#C9A962]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36] sm:text-xs">
                    USA Export Questions
                  </p>

                  <span className="h-px w-14 bg-[#C9A962]" />
                </div>
              </StaggerItem>

              <StaggerItem delay={100}>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.7rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#12382A]">
                  Frequently Asked Questions
                  <span className="mt-1 block text-[#A97B22]">
                    from USA Buyers
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={180}>
                <p className="mx-auto mt-7 max-w-[800px] text-[16px] font-light leading-8 text-[#4C5F54]">
                  Important commercial information for USA importers,
                  distributors, wholesalers and private-label businesses
                  considering natural-product sourcing from India.
                </p>
              </StaggerItem>
            </div>

            <div className="mt-14 divide-y divide-[#173B2A]/12 border-y border-[#173B2A]/12">
              {usaExportFaqs.map((faq, index) => (
                <StaggerItem
                  key={faq.question}
                  delay={240 + (index % 4) * 60}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                      <div className="flex items-start gap-5">
                        <span className="pt-1 text-[10px] font-bold tracking-[0.22em] text-[#A97B22]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-[family-name:var(--font-playfair)] text-[20px] font-semibold leading-snug text-[#173B2A] sm:text-[23px]">
                          {faq.question}
                        </h3>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 text-xl text-[#A97B22] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="pb-7 pl-0 sm:pl-12">
                      <p className="max-w-[900px] text-[14px] font-light leading-8 text-[#4C5F54]/82 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </StaggerItem>
              ))}
            </div>

            <StaggerItem delay={700}>
              <div className="mt-10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                >
                  Ask Our Export Team
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* FINAL USA BUYER ENQUIRY CTA */}
      <section
        id="usa-buyer-enquiry"
        className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[170px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/45 to-transparent"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1100px]">
            <StaggerItem delay={0}>
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]/75" />

                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878] sm:text-xs">
                  USA Importers · Distributors · Private-Label Buyers
                </p>

                <span className="h-px w-14 bg-[#C9A962]/75" />
              </div>
            </StaggerItem>

            <StaggerItem delay={100}>
              <h2 className="mx-auto mt-7 max-w-[1000px] font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-[1.03] tracking-[-0.04em] text-[#F7F1E7]">
                Source Indian Natural Products
                <span className="mt-2 block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  for Your USA Business
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={200}>
              <p className="mx-auto mt-7 max-w-[850px] text-[16px] font-light leading-8 text-[#F5F0E6]/65 sm:text-[17px]">
                Contact Shivesh International for bulk, wholesale, OEM and
                private-label enquiries for Natural Henna Powder, Natural
                Indigo Powder, botanical hair colors, Ayurvedic Indian Herbs
                and Indian Spices supplied from India to the United States.
              </p>
            </StaggerItem>

            <StaggerItem delay={280}>
              <div className="mx-auto mt-8 max-w-[760px] border border-[#C9A962]/24 bg-white/[0.035] px-6 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E4C878]">
                  Information to Include in Your Enquiry
                </p>

                <p className="mt-3 text-[13px] font-light leading-7 text-[#F5F0E6]/55">
                  Product name · Required quantity · Packaging format ·
                  Private-label requirement · Destination city and state ·
                  Business details
                </p>
              </div>
            </StaggerItem>

            <StaggerItem delay={360}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Request USA Export Quote
                  <span>→</span>
                </Link>

                <a
                  href="mailto:export@shiveshinternational.com?subject=USA%20Export%20Enquiry"
                  className="inline-flex items-center gap-4 border border-[#F5F0E6]/28 bg-transparent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Email Export Team
                  <span>→</span>
                </a>

                <a
                  href="https://wa.me/919999774950?text=Hello%20Shivesh%20International%2C%20I%20have%20a%20USA%20export%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 border border-[#F5F0E6]/28 bg-transparent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  WhatsApp Export Team
                  <span>→</span>
                </a>
              </div>
            </StaggerItem>

            {/* INTERNAL LINKS */}
            <StaggerItem delay={440}>
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A962]/75">
                  Explore Shivesh International
                </p>

                <nav
                  aria-label="Related export and product pages"
                  className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
                >
                  {[
                    {
                      label: "Global Export Services",
                      href: "/export",
                    },
                    {
                      label: "Natural Henna Powder",
                      href: "/products/natural-henna-powder",
                    },
                    {
                      label: "Natural Indigo Powder",
                      href: "/products/natural-indigo-powder",
                    },
                    {
                      label: "Natural Henna Hair Colors",
                      href: "/products/natural-henna-hair-colors",
                    },
                    {
                      label: "Ayurvedic Indian Herbs",
                      href: "/products/ayurvedic-indian-herbs",
                    },
                    {
                      label: "Indian Spices",
                      href: "/products/indian-spices",
                    },
                    {
                      label: "Manufacturing Infrastructure",
                      href: "/infrastructure",
                    },
                    {
                      label: "Certifications",
                      href: "/certifications",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#F5F0E6]/48 transition-colors duration-300 hover:text-[#E4C878]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </StaggerItem>

            <StaggerItem delay={520}>
              <p className="mx-auto mt-8 max-w-[850px] text-[11px] font-light leading-6 text-[#F5F0E6]/35">
                Minimum order quantity: 200 kg per item. Product availability,
                final pricing, packaging, production schedule, export
                documentation and shipment terms are confirmed after reviewing
                the buyer&apos;s complete commercial requirement.
              </p>
            </StaggerItem>
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
