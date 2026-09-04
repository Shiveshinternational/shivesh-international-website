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
import { uaeLanguageAlternates } from "@/app/lib/i18n";
import FooterSection from "@/sections/FooterSection";

const pageUrl = "https://shiveshinternational.com/export/uae";
const heroImage =
  "https://shiveshinternational.com/images/export/export-hero-global-network-final-v3.png";

export const metadata: Metadata = {
  title: "Natural Products Exporter to UAE | Shivesh International",
  description:
    "Indian exporter of henna, indigo, botanical hair colors, Ayurvedic herbs and spices for UAE bulk, wholesale and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "natural products exporter to UAE",
    "natural products supplier UAE",
    "Indian natural products exporter UAE",
    "natural products manufacturer India for UAE",
    "natural products wholesale supplier UAE",
    "bulk natural products supplier UAE",
    "private label natural products UAE",
    "OEM natural products manufacturer UAE",
    "Indian botanical products supplier UAE",
    "natural products supplier Dubai",
    "natural products supplier Abu Dhabi",
    "natural products wholesaler Sharjah",

    "henna powder exporter to UAE",
    "natural henna powder supplier UAE",
    "natural henna powder manufacturer for UAE",
    "Indian henna powder exporter UAE",
    "henna powder supplier Dubai",
    "Sojat henna powder exporter UAE",
    "bulk henna powder supplier UAE",
    "wholesale henna powder exporter UAE",
    "organic henna powder supplier UAE",
    "private label henna powder UAE",
    "OEM henna powder manufacturer UAE",
    "henna powder importer supplier UAE",
    "export grade henna powder UAE",

    "indigo powder exporter to UAE",
    "natural indigo powder supplier UAE",
    "natural indigo powder manufacturer for UAE",
    "indigo powder supplier Dubai",
    "bulk indigo powder supplier UAE",
    "wholesale indigo powder exporter UAE",
    "private label indigo powder UAE",
    "OEM indigo powder manufacturer UAE",
    "Indigofera tinctoria powder supplier UAE",
    "botanical hair color powder supplier UAE",

    "natural henna hair colors exporter UAE",
    "botanical hair color supplier UAE",
    "natural hair color manufacturer for UAE",
    "henna hair color wholesale supplier UAE",
    "private label henna hair colors UAE",
    "OEM botanical hair colors UAE",
    "professional salon hair colors supplier UAE",
    "salon hair color supplier Dubai",
    "natural hair dye exporter to UAE",

    "Ayurvedic herbs exporter to UAE",
    "Ayurvedic herbs supplier UAE",
    "Ayurvedic herbs supplier Dubai",
    "Indian herbal powders exporter UAE",
    "bulk herbal powder supplier UAE",
    "wholesale Ayurvedic herbs UAE",
    "private label Ayurvedic herbs UAE",
    "botanical powders wholesaler UAE",

    "Indian spices exporter to UAE",
    "Indian spices supplier UAE",
    "Indian spices supplier Dubai",
    "bulk Indian spices exporter UAE",
    "wholesale spices supplier UAE",
    "private label Indian spices UAE",
    "whole and ground spices exporter UAE",

    "UAE importer natural products India",
    "UAE distributor natural products India",
    "Dubai wholesale natural products supplier",
    "natural products supplier for UAE brands",
    "Indian exporter for UAE cosmetic brands",
    "Indian exporter for UAE salon suppliers",
    "Indian exporter for UAE wellness brands",
    "retail packaging natural products UAE",
    "bulk packaging natural products UAE",
    "custom packaging natural products UAE",
    "export documentation support for UAE",
    "natural products shipping from India to UAE",
    "Shivesh International UAE exporter",
  ],
  alternates: {
    canonical: pageUrl,
    languages: uaeLanguageAlternates,
  },
  openGraph: {
    title: "Natural Products Exporter to UAE",
    description:
      "Bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colors, Ayurvedic herbs and spices for professional UAE buyers.",
    url: pageUrl,
    type: "website",
    locale: "en_AE",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/export-hero-global-network-final-v3.png",
        width: 1536,
        height: 1024,
        alt: "Indian henna and natural products prepared for wholesale supply to the UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Products Exporter to UAE",
    description:
      "Indian bulk supplier of henna, indigo, botanical hair colors, herbs and spices for UAE importers and private-label brands.",
    images: ["/images/export/export-hero-global-network-final-v3.png"],
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
      "Export-grade henna powder for UAE cosmetic, salon and buyer-brand requirements, prepared in agreed bulk or private-label formats.",
    href: "/products/natural-henna-powder",
  },
  {
    number: "02",
    title: "Natural Indigo Powder",
    description:
      "Natural indigo powder for professional botanical hair-color ranges, with specifications and packing selected for the confirmed UAE order.",
    href: "/products/natural-indigo-powder",
  },
  {
    number: "03",
    title: "Natural Henna Hair Colors",
    description:
      "Botanical hair colors for UAE distributors, salon suppliers and brands developing natural-looking professional or retail ranges.",
    href: "/products/natural-henna-hair-colors",
  },
  {
    number: "04",
    title: "Henna-Based Hair Colors",
    description:
      "Commercial henna-based hair-color options for salon and retail channels, subject to product, packaging and artwork feasibility.",
    href: "/products/henna-based-hair-colors",
  },
  {
    number: "05",
    title: "Ayurvedic Indian Herbs",
    description:
      "Selected Ayurvedic herbs and botanical powders for UAE wellness, personal-care and private-label sourcing programmes.",
    href: "/products/ayurvedic-indian-herbs",
  },
  {
    number: "06",
    title: "Indian Spices",
    description:
      "Whole and ground Indian spices for importers, wholesalers, food businesses and approved buyer-brand packing requirements.",
    href: "/products/indian-spices",
  },
];

const buyerTypes = [
  "Importers",
  "Distributors",
  "Wholesalers",
  "Salon Suppliers",
  "Cosmetic Brands",
  "Hair-Care Brands",
  "Retail Chains",
  "Wellness Businesses",
  "Private-Label Buyers",
];

const supplyServices = [
  {
    title: "Bulk & Wholesale Supply",
    text: "Commercial quantities can be prepared in suitable bulk, professional or selected retail formats. The minimum order quantity is 200 kg per item.",
  },
  {
    title: "OEM & Private Label",
    text: "Qualified buyers can discuss selected products under their own brand, with formulation or range feasibility reviewed before commercial confirmation.",
  },
  {
    title: "Custom Packaging",
    text: "Pack sizes, pouches, cartons, labels and buyer-supplied artwork can be coordinated subject to technical suitability, order quantity and print feasibility.",
  },
  {
    title: "Specifications & Documents",
    text: "Available product specifications and relevant commercial documents are reviewed for the chosen product, intended use, shipment and buyer requirements.",
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
    question: "Which natural products can be supplied to UAE buyers?",
    answer:
      "The range covers natural henna powder, natural indigo powder, natural henna hair colors, henna-based hair colors, Ayurvedic Indian herbs and Indian spices, subject to commercial feasibility.",
  },
  {
    question: "What is the minimum order quantity for UAE buyers?",
    answer:
      "The minimum order quantity is 200 kg per item. Packaging, product selection and private-label requirements may affect the practical commercial quantity.",
  },
  {
    question: "Can you supply UAE importers, wholesalers and salon suppliers?",
    answer:
      "Yes. We welcome enquiries from importers, distributors, wholesalers, salon suppliers, cosmetic and hair-care brands, wellness businesses, retail chains and private-label buyers across the UAE.",
  },
  {
    question: "Is OEM or private-label packaging available?",
    answer:
      "OEM and private-label support is available for selected products. Retail, professional and bulk packaging can be discussed according to product, quantity, material and print feasibility.",
  },
  {
    question: "Can UAE buyers provide their own packaging artwork?",
    answer:
      "Buyer-supplied artwork can be reviewed for selected packaging. Dielines, label content, pack size, materials, print quantities and export-carton requirements must be assessed before confirmation.",
  },
  {
    question: "Can samples and product specifications be discussed?",
    answer:
      "Available samples, product specifications, grades and packing formats can be discussed before commercial confirmation. Availability depends on the selected product and buyer requirement.",
  },
  {
    question: "Which commercial documents may be coordinated?",
    answer:
      "Relevant commercial and shipment documents, product specifications and packing information are discussed for the confirmed order. Availability and applicability depend on the product and transaction.",
  },
  {
    question: "Who is responsible for UAE registration, customs and compliance?",
    answer:
      "The UAE importer or buyer is responsible for product classification, registration where applicable, customs clearance, labelling, claims and compliance with applicable UAE requirements. No approval or import eligibility is guaranteed.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Natural Products Exporter to the UAE",
      description:
        "UAE-focused bulk, wholesale and private-label supply of henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices from India.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
        width: 1536,
        height: 1024,
      },
      inLanguage: "en-AE",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Natural Products Export Supply to the United Arab Emirates",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Export-oriented Indian natural product supply for importers, distributors, wholesalers, salon suppliers and brands in the United Arab Emirates.",
      url: pageUrl,
      provider: { "@id": "https://shiveshinternational.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
        sameAs: "https://www.wikidata.org/wiki/Q878",
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
          name: "Export to the UAE",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Natural Products Supplied to UAE Buyers",
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

export default function UAEExportPage() {
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
          src="/images/export/uae/uae-export-partnership-hero-premium-v1.png"
          alt="India and UAE business partners developing natural-product export supply"
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
                  India to the United Arab Emirates
                </span>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Natural Products Supply
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  for UAE Business
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International supplies Indian henna, indigo, botanical
                hair colors, Ayurvedic herbs and spices for UAE importers,
                distributors, wholesalers, salon suppliers, brands and
                private-label buyers across Dubai and the other Emirates.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#uae-product-range"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore the Range <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request a UAE Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["UAE", "Buyer Enquiries"],
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

      <section id="uae-product-range" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Commercial Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Indian Natural Products
                <span className="mt-1 block text-[#A97B22]">for the UAE Market</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                Six commercial categories for professional buyers developing
                wholesale, salon, cosmetic, wellness, food or own-brand ranges
                in Dubai, Abu Dhabi, Sharjah and other Emirates.
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
                Flexible Supply for
                <span className="block text-[#E4C878]">UAE Business Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">
                Supply for UAE importers, distributors, wholesalers, salon
                suppliers and brands is reviewed around intended use, volume,
                product specifications, packaging and shipment planning.
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
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">UAE Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">UAE Export Supply FAQ</h2>
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
                src="/images/export/uae/uae-private-label-packaging-studio-premium-v1.png"
                alt="UAE private-label packaging and brand-development collaboration"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer Brand Development</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Packaging That Fits
                <span className="block text-[#A97B22]">Your UAE Market Brief</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                UAE buyers may discuss retail packaging, professional packs,
                bulk formats and private-label presentation. We review pack
                sizes, materials, print quantities and export-carton needs.
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">
                Buyer-supplied artwork, dielines and label content are subject to
                feasibility review. Coordination does not constitute approval of
                UAE labelling, claims, registration or market compliance.
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
                    India to the United Arab Emirates
                  </p>
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">
                  Structured Export Coordination
                  <span className="mt-1 block text-[#E4C878]">for UAE Buyers</span>
                </h2>
                <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#F5F0E6]/68 sm:text-[17px]">
                  Each UAE export enquiry is reviewed according to the selected
                  product, commercial quantity, specification, packaging format,
                  destination and buyer documentation requirements before order
                  confirmation and shipment planning.
                </p>
              </div>

              <figure
                className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_75px_rgba(0,0,0,0.28)]"
              >
                <Image
                  src="/images/export/uae/uae-export-logistics-command-centre-premium-v1.png"
                  alt="India-to-UAE export documentation, inspection and shipment coordination"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878] backdrop-blur-md sm:bottom-6 sm:left-6">
                  India–UAE Export Coordination
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
                    UAE Importer Compliance Responsibility
                  </h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54] sm:text-[15px]">
                    Shivesh International coordinates commercial and export
                    documentation for the confirmed order. The UAE importer or
                    buyer remains responsible for product classification,
                    registration where applicable, customs clearance, labelling,
                    claims and compliance with applicable UAE requirements.
                  </p>
                </div>
              </div>
            </aside>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request a UAE Export Quote
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
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Start a UAE Supply Conversation</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Plan Your UAE Natural-Product Supply</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
              Share the product, quantity, pack size, branding brief, destination
              and required information. Our team will review the enquiry and
              respond with the next commercially practical steps.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">
              Request a UAE Export Quote <span>→</span>
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
