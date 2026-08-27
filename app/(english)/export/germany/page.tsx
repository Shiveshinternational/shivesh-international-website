import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import GoldenParticles from "@/app/components/GoldenParticles";
import MagneticButtons from "@/app/components/MagneticButtons";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import FooterSection from "@/sections/FooterSection";
import { germanyLanguageAlternates } from "@/app/lib/i18n";

const pageUrl = "https://shiveshinternational.com/export/germany";
const heroImage =
  "https://shiveshinternational.com/images/export/germany/germany-natural-products-export-hero-premium-v1.png";

export const metadata: Metadata = {
  title: "Natural Products Exporter to Germany | Shivesh International",
  description:
    "Indian exporter of henna, indigo, botanical hair colours, Ayurvedic herbs and spices for German bulk, wholesale and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "natural products exporter to Germany",
    "natural products supplier Germany",
    "Indian natural products exporter Germany",
    "natural products manufacturer India for Germany",
    "natural products wholesale supplier Germany",
    "bulk natural products supplier Germany",
    "private label natural products Germany",
    "OEM natural products manufacturer Germany",
    "Indian botanical products supplier Germany",
    "herbal products exporter to Germany",
    "natural products supplier Berlin",
    "natural products supplier Hamburg",

    "henna powder exporter to Germany",
    "natural henna powder supplier Germany",
    "natural henna powder manufacturer for Germany",
    "Indian henna powder exporter Germany",
    "Sojat henna powder supplier Germany",
    "bulk henna powder supplier Germany",
    "wholesale henna powder exporter Germany",
    "organic henna powder supplier Germany",
    "private label henna powder Germany",
    "OEM henna powder manufacturer Germany",
    "henna powder importer supplier Germany",
    "henna powder distributor supply Germany",
    "export grade henna powder Germany",

    "indigo powder exporter to Germany",
    "natural indigo powder supplier Germany",
    "natural indigo powder manufacturer for Germany",
    "Indian indigo powder exporter Germany",
    "bulk indigo powder supplier Germany",
    "wholesale indigo powder exporter Germany",
    "private label indigo powder Germany",
    "OEM indigo powder manufacturer Germany",
    "Indigofera tinctoria powder supplier Germany",
    "botanical hair colour powder supplier Germany",

    "natural henna hair colours exporter Germany",
    "botanical hair colours supplier Germany",
    "natural hair colour manufacturer for Germany",
    "henna hair colour wholesale supplier Germany",
    "private label henna hair colours Germany",
    "OEM botanical hair colours Germany",
    "professional salon hair colours supplier Germany",
    "henna-based hair colours supplier Germany",
    "natural hair dye exporter to Germany",
    "powder hair colour supplier Germany",

    "Ayurvedic herbs exporter to Germany",
    "Ayurvedic herbs supplier Germany",
    "Indian herbal powders exporter Germany",
    "bulk herbal powder supplier Germany",
    "wholesale Ayurvedic herbs Germany",
    "private label Ayurvedic herbs Germany",
    "botanical powders wholesaler Germany",
    "Indian herbs supplier for German brands",

    "Indian spices exporter to Germany",
    "Indian spices supplier Germany",
    "bulk Indian spices exporter Germany",
    "wholesale spices supplier Germany",
    "private label Indian spices Germany",
    "whole and ground spices exporter Germany",
    "Indian spice manufacturer for German buyers",

    "Germany importer natural products India",
    "Germany distributor natural products India",
    "natural products supplier for German brands",
    "Indian exporter for German cosmetic brands",
    "Indian exporter for German salon suppliers",
    "retail packaging natural products Germany",
    "custom packaging natural products Germany",
    "export documentation support for Germany",
    "natural products shipping from India to Germany",
    "Shivesh International Germany exporter",
  ],
  alternates: {
    canonical: pageUrl,
    languages: germanyLanguageAlternates,
  },
  openGraph: {
    title: "Natural Products Exporter to Germany",
    description:
      "Bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for professional German buyers.",
    url: pageUrl,
    type: "website",
    locale: "en_GB",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/germany/germany-natural-products-export-hero-premium-v1.png",
        width: 1942,
        height: 809,
        alt: "German buyers and Indian exporter coordinating natural-product supply overlooking Hamburg port",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Products Exporter to Germany",
    description:
      "Indian bulk supplier of henna, indigo, botanical hair colours, herbs and spices for German importers and private-label brands.",
    images: ["/images/export/germany/germany-natural-products-export-hero-premium-v1.png"],
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

const products = [
  {
    number: "01",
    title: "Natural Henna Powder",
    description:
      "Finely processed henna powder for German natural-cosmetic, professional salon and private-label requirements in agreed commercial formats.",
    href: "/products/natural-henna-powder",
  },
  {
    number: "02",
    title: "Natural Indigo Powder",
    description:
      "Natural indigo powder for botanical hair-colour ranges, supplied with buyer-reviewed specifications and suitable bulk or branded packing.",
    href: "/products/natural-indigo-powder",
  },
  {
    number: "03",
    title: "Natural Henna Hair Colors",
    description:
      "Botanical powder hair colours for German distributors, organic hair-care brands and professional suppliers developing considered shade ranges.",
    href: "/products/natural-henna-hair-colors",
  },
  {
    number: "04",
    title: "Henna-Based Hair Colors",
    description:
      "Henna-based hair-colour products for professional and retail channels, with formulation, pack and artwork requirements reviewed for feasibility.",
    href: "/products/henna-based-hair-colors",
  },
  {
    number: "05",
    title: "Ayurvedic Indian Herbs",
    description:
      "Selected Ayurvedic herbs and botanical powders for German wellness, personal-care, ingredient and buyer-brand sourcing programmes.",
    href: "/products/ayurvedic-indian-herbs",
  },
  {
    number: "06",
    title: "Indian Spices",
    description:
      "Selected whole and ground Indian spices for German importers, wholesalers, food businesses and feasible private-label presentation.",
    href: "/products/indian-spices",
  },
];

const buyerTypes = [
  "Importers",
  "Distributors",
  "Wholesalers",
  "Natural Cosmetic Brands",
  "Botanical Hair-Care Brands",
  "Professional Salon Suppliers",
  "Ayurvedic Businesses",
  "Retail Chains",
  "Wellness Businesses",
  "OEM Buyers",
  "Bulk Buyers",
  "Private-Label Buyers",
];

const supplyServices = [
  {
    title: "Bulk & Wholesale Supply",
    text: "Commercial quantities for German importers and wholesalers can be prepared in suitable bulk, professional or selected retail formats. MOQ is 200 kg per item.",
  },
  {
    title: "OEM & Private Label",
    text: "German brands can discuss OEM and private-label supply for selected products, subject to product, range, order and production feasibility.",
  },
  {
    title: "Custom Packaging",
    text: "Retail packs, bulk packs, pouches, cartons and jars can be coordinated where feasible. Buyer artwork remains subject to technical and print review.",
  },
  {
    title: "Specifications & Documents",
    text: "Available specifications and relevant commercial documentation are reviewed for the selected product, intended use, shipment and buyer requirement.",
  },
];

const process = [
  {
    step: "01",
    title: "Product & Quantity Review",
    text: "We review the required product, grade, intended application, commercial quantity and minimum order requirement.",
  },
  {
    step: "02",
    title: "Specification & Sample Discussion",
    text: "Available specifications, samples, packing formats and buyer-specific requirements are discussed before commercial confirmation.",
  },
  {
    step: "03",
    title: "Quotation & Commercial Terms",
    text: "Pricing, production scope, payment terms, packing details and applicable shipment terms are reviewed with the buyer.",
  },
  {
    step: "04",
    title: "Packaging & Artwork Coordination",
    text: "Bulk, wholesale, professional or private-label presentation is coordinated according to feasibility and the buyer’s supplied artwork.",
  },
  {
    step: "05",
    title: "Production & Quality Review",
    text: "Confirmed products are processed, packed and reviewed according to the agreed specification and order requirements.",
  },
  {
    step: "06",
    title: "Export Documentation & Dispatch Coordination",
    text: "Commercial documentation, packing information and shipment coordination are prepared according to the confirmed order and agreed delivery terms.",
  },
];

const faqs = [
  {
    question: "Which Indian natural products are available for German buyers?",
    answer:
      "The commercial range covers natural henna powder, natural indigo powder, two botanical hair-colour categories, Ayurvedic Indian herbs and selected Indian spices. Availability is reviewed for each enquiry.",
  },
  {
    question: "What MOQ applies to wholesale orders for Germany?",
    answer:
      "The minimum order quantity is 200 kg per item. The practical quantity and packing configuration may also depend on the selected product and private-label brief.",
  },
  {
    question: "Which types of German businesses can request supply?",
    answer:
      "We welcome relevant enquiries from importers, distributors, wholesalers, natural-cosmetic and botanical hair-care brands, salon suppliers, wellness businesses, retail chains and buyer-brand companies.",
  },
  {
    question: "Can German brands discuss OEM and private-label packaging?",
    answer:
      "Yes, for selected products and commercially suitable orders. Retail packs, professional formats, bulk packs and buyer-brand presentation are reviewed against production, material and printing feasibility.",
  },
  {
    question: "Can buyer-supplied artwork and metallised pouches be reviewed?",
    answer:
      "Buyer artwork can be assessed for suitable packaging, including gold or silver metallised pouches where relevant. Dielines, label content, materials, colours and print quantities require technical review.",
  },
  {
    question: "Can product specifications and samples be discussed before ordering?",
    answer:
      "Available specifications, grades, packing formats and commercially suitable samples may be discussed before order confirmation. Options depend on the selected product and intended application.",
  },
  {
    question: "Which export documents may be coordinated for Germany?",
    answer:
      "Relevant commercial and shipment documents, packing information and available product details are coordinated for the confirmed transaction. Applicability depends on the product and agreed shipment.",
  },
  {
    question: "Who confirms German and EU import and compliance requirements?",
    answer:
      "The German importer or buyer remains responsible for product classification, import requirements, customs clearance, labelling, product claims, registration and all applicable German and European Union requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Natural Products Exporter to Germany",
      description:
        "Germany-focused bulk, wholesale and private-label supply of henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices from India.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
        width: 1536,
        height: 1024,
      },
      inLanguage: "en-DE",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Natural Products Export Supply to Germany",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Export-oriented Indian natural product supply for importers, distributors, wholesalers, salon suppliers and brands in Germany.",
      url: pageUrl,
      provider: { "@id": "https://shiveshinternational.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Germany",
        sameAs: "https://www.wikidata.org/wiki/Q183",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: buyerTypes.join(", "),
      },
      category: products.map((product) => product.title),
      termsOfService:
        "Minimum order quantity is 200 kg per item. Product, packaging, documentation and commercial terms are confirmed for each buyer requirement.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Export to Germany",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Natural Products Supplied to German Buyers",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.title,
        url: `https://shiveshinternational.com${product.href}`,
      })),
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function GermanyExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[#071B14]">
        <Image
          src="/images/export/germany/germany-natural-products-export-hero-premium-v1.png"
          alt="German buyers and Indian exporter coordinating natural-product supply overlooking Hamburg port"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[56%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/38 via-[#102F23]/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/[0.06]" />
        <GoldenParticles />
        <div className="relative z-10 flex min-h-[760px] items-center px-6 pb-24 pt-28 sm:min-h-[800px] sm:px-8 sm:pb-28 lg:min-h-[820px] lg:px-12 lg:pb-32">
          <div className="w-full max-w-[790px]">
            <StaggerItem delay={0}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">
                  India to Germany
                </span>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Natural Products Exporter
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  from India to Germany
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International supports German importers, distributors,
                wholesalers, natural-cosmetic brands and salon suppliers with
                Indian henna, indigo, botanical hair colours, Ayurvedic herbs
                and spices for bulk, OEM and private-label requirements.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#germany-product-range"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore the Range <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request a Germany Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["Germany", "Buyer Enquiries"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-white/15 bg-black/20 px-4 py-4 backdrop-blur-md">
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">{value}</p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6]/55">{label}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      <section id="germany-product-range" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Commercial Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Indian Natural Products
                <span className="mt-1 block text-[#A97B22]">for the German Market</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                A six-category portfolio for professional buyers developing
                natural-cosmetic, botanical hair-care, salon, wellness, food
                and own-brand ranges for Germany.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <StaggerItem key={product.title} delay={(index % 3) * 90}>
                  <article className="group flex h-full min-h-[300px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/60">{product.number}</span>
                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight">{product.title}</h3>
                    <p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">{product.description}</p>
                    <Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22]">
                      View Product <span className="transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Built for Professional Buying</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Structured Supply for
                <span className="block text-[#E4C878]">German Business Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">
                Enquiries from Berlin, Hamburg, Munich, Frankfurt, Düsseldorf
                and other German markets are reviewed around intended use,
                volume, specifications, packaging and shipment planning.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {buyerTypes.map((buyer) => (
                  <span key={buyer} className="border border-[#C9A962]/30 bg-white/[0.04] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]/75">{buyer}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {supplyServices.map((service) => (
                <article key={service.title} className="border border-[#C9A962]/25 bg-[#071B14]/55 p-7 sm:p-8">
                  <span className="block h-px w-12 bg-[#C9A962]" />
                  <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">{service.title}</h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/65">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">German Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">Germany Export Supply FAQ</h2>
            </div>
            <div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">
              {faqs.map((faq) => (
                <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3>
                  <p className="text-[14px] font-light leading-7 text-[#4C5F54]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#102F23] shadow-[0_28px_70px_rgba(20,50,38,0.18)]">
              <Image
                src="/images/export/germany/germany-packaging-engineering-lab-premium-v1.png"
                alt="German packaging engineering lab developing private-label formats for natural products"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer Brand Development</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Packaging for
                <span className="block text-[#A97B22]">German Buyer-Brand Requirements</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                German buyers may discuss retail and bulk packs, gold or silver
                metallised pouches where relevant, cartons, jars and coordinated
                private-label presentation for commercially suitable orders.
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">
                Buyer-supplied artwork remains subject to technical, material
                and print feasibility. The importer is responsible for German
                and EU labelling, claims, registration and market requirements.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#D8BB68]">
                Discuss Private Label <span>→</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-12 h-[460px] w-[460px] rounded-full bg-[#C9A962]/10 blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 bottom-10 h-[520px] w-[520px] rounded-full bg-[#C9A962]/[0.07] blur-[170px]"
        />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#C9A962]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">
                    India to Germany
                  </p>
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">
                  Structured Export Coordination
                  <span className="mt-1 block text-[#E4C878]">for German Buyers</span>
                </h2>
                <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#F5F0E6]/68 sm:text-[17px]">
                  Each Germany export enquiry is reviewed around the product,
                  commercial quantity, specification, packaging format,
                  destination and buyer documentation requirements before
                  commercial confirmation and shipment planning.
                </p>
              </div>

              <figure
                className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_75px_rgba(0,0,0,0.28)]"
              >
                <Image
                  src="/images/export/germany/germany-botanical-traceability-coordination-premium-v1.png"
                  alt="Germany botanical shipment traceability and receiving-quality coordination"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878] backdrop-blur-md sm:bottom-6 sm:left-6">
                  India–Germany Export Coordination
                </figcaption>
              </figure>
            </div>

            <div className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="group relative h-full border border-[#C9A962]/22 bg-[#071B14]/65 p-7 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-500 hover:border-[#C9A962]/55 sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#C9A962]/10 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-[23px] font-semibold leading-tight text-[#F5F0E6] sm:text-[26px]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/62">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <span className="mt-7 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              ))}
            </div>

            <aside className="mx-auto mt-20 max-w-[1120px] border border-[#C9A962]/45 bg-[#F5F0E6] p-7 text-[#173B2A] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-9 lg:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173B2A] text-lg text-[#E4C878]">
                  i
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">
                    Germany and EU Importer Responsibility
                  </h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54] sm:text-[15px]">
                    Shivesh International coordinates commercial and export
                    documentation for the confirmed order. The German importer
                    or buyer remains responsible for product classification,
                    import requirements, customs clearance, labelling, product
                    claims, registration and applicable German and EU requirements.
                  </p>
                </div>
              </div>
            </aside>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request a Germany Export Quote
                <span>→</span>
              </Link>
              <p className="mx-auto mt-5 max-w-[720px] text-[9px] font-semibold uppercase tracking-[0.24em] text-[#F5F0E6]/38">
                Product · Quantity · Specification · Packaging · Documentation
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <GoldenParticles />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1000px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Start a Germany Supply Conversation</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Plan Natural-Product Supply for Germany</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
              Share the product, quantity, pack size, branding brief, destination
              and required information. Our team will review the enquiry and
              respond with the next commercially practical steps.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">
              Request a Germany Export Quote <span>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <FooterSection />
      <FloatingContactButtons />
      <MagneticButtons />
      <PremiumCursor />
    </main>
  );
}
