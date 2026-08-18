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

const pageUrl = "https://shiveshinternational.com/export/uk";
const heroImage =
  "https://shiveshinternational.com/images/export/export-hero-global-network-final-v3.png";

export const metadata: Metadata = {
  title: "Henna & Natural Products Exporter to the UK",
  description:
    "Bulk henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices supplied from India to UK importers, wholesalers and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "henna powder exporter to UK",
    "natural indigo powder supplier UK",
    "botanical hair colours wholesale UK",
    "private label henna UK",
    "Ayurvedic herbs exporter UK",
    "Indian spices wholesale UK",
    "natural products supplier India UK",
    "OEM botanical products UK",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-GB": pageUrl,
      "en-US": "https://shiveshinternational.com/export/usa",
      "x-default": "https://shiveshinternational.com/export",
    },
  },
  openGraph: {
    title: "Henna & Natural Products Exporter to the UK",
    description:
      "Bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for professional UK buyers.",
    url: pageUrl,
    type: "website",
    locale: "en_GB",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/export-hero-global-network-final-v3.png",
        width: 1536,
        height: 1024,
        alt: "Indian natural products prepared for international wholesale supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henna & Natural Products Exporter to the UK",
    description:
      "Indian bulk supplier of henna, indigo, botanical hair colours, herbs and spices for UK importers and private-label brands.",
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
      "Finely processed henna powder for professional, cosmetic and private-label requirements, with grade and packing details agreed for each order.",
    href: "/products/natural-henna-powder",
  },
  {
    number: "02",
    title: "Natural Indigo Powder",
    description:
      "Botanical indigo powder supplied for commercial hair-colour applications in buyer-selected bulk or approved branded formats.",
    href: "/products/natural-indigo-powder",
  },
  {
    number: "03",
    title: "Natural Henna Hair Colors",
    description:
      "A botanical colour portfolio for distributors, salon suppliers and brands seeking a considered range of commercial shades.",
    href: "/products/natural-henna-hair-colors",
  },
  {
    number: "04",
    title: "Henna-Based Hair Colors",
    description:
      "Henna-based colour products for professional and retail programmes, subject to formulation, pack and artwork feasibility.",
    href: "/products/henna-based-hair-colors",
  },
  {
    number: "05",
    title: "Ayurvedic Indian Herbs",
    description:
      "Selected Indian herb and botanical powders for wellness, personal-care, salon and private-label sourcing programmes.",
    href: "/products/ayurvedic-indian-herbs",
  },
  {
    number: "06",
    title: "Indian Spices",
    description:
      "Selected whole and ground Indian spices for importers, wholesalers, food businesses and buyer-brand requirements.",
    href: "/products/indian-spices",
  },
];

const buyerTypes = [
  "Importers",
  "Distributors",
  "Wholesalers",
  "Salon Suppliers",
  "Cosmetic Brands",
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
    title: "Share the UK Requirement",
    text: "Tell us the product, grade, quantity, pack size, intended use, delivery destination and whether buyer branding is required.",
  },
  {
    step: "02",
    title: "Product & Pack Review",
    text: "We review availability, MOQ, specifications, packaging, artwork and private-label feasibility for the proposed programme.",
  },
  {
    step: "03",
    title: "Commercial Confirmation",
    text: "Product scope, price, Incoterms, payment terms, lead time and applicable documentation are confirmed before the order proceeds.",
  },
  {
    step: "04",
    title: "Export Coordination",
    text: "We coordinate packing, shipment preparation and agreed export documents from India for dispatch towards the United Kingdom.",
  },
];

const faqs = [
  {
    question: "What is the minimum order quantity for UK buyers?",
    answer:
      "The minimum order quantity is 200 kg per item. Packaging, product selection and private-label requirements may affect the practical commercial quantity.",
  },
  {
    question: "Can you supply UK wholesalers and salon suppliers?",
    answer:
      "Yes. We welcome enquiries from importers, distributors, wholesalers, salon suppliers, cosmetic brands, wellness businesses and private-label buyers, subject to product and commercial feasibility.",
  },
  {
    question: "Do you support OEM and buyer-branded packaging?",
    answer:
      "OEM and private-label support is available for selected products. Custom packaging and buyer-supplied artwork can be reviewed against pack, print, quantity and technical requirements.",
  },
  {
    question: "Which documents can be provided for an export order?",
    answer:
      "Product specifications and relevant commercial or shipment documents are discussed for each order. Availability and applicability depend on the product, destination requirements and agreed transaction.",
  },
  {
    question: "Do you guarantee UK customs clearance or regulatory compliance?",
    answer:
      "No. Requirements vary by product, intended use, claims, ingredients, labelling and route to market. The UK importer or responsible business should verify applicable customs and regulatory obligations before ordering.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Henna and Natural Products Exporter to the UK",
      description:
        "UK-focused bulk and private-label supply of henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices from India.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
        width: 1536,
        height: 1024,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Natural Products Export Supply to the United Kingdom",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Export-oriented Indian natural product supply for professional buyers in the United Kingdom.",
      url: pageUrl,
      provider: { "@id": "https://shiveshinternational.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
        sameAs: "https://www.wikidata.org/wiki/Q145",
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
          name: "Export to the UK",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Natural Products Supplied to UK Buyers",
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

export default function UKExportPage() {
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
          src="/images/export/export-hero-global-network-final-v3.png"
          alt="Natural products export network connecting India with professional buyers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/90 via-[#102F23]/65 to-[#071B14]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        <GoldenParticles />
        <div className="relative z-10 flex min-h-[760px] items-center px-6 pb-24 pt-28 sm:min-h-[800px] sm:px-8 sm:pb-28 lg:min-h-[820px] lg:px-12 lg:pb-32">
          <div className="w-full max-w-[790px]">
            <StaggerItem delay={0}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">
                  India to the United Kingdom
                </span>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Natural Products Supply
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  for UK Business
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International supplies Indian henna, indigo, botanical
                hair colours, Ayurvedic herbs and spices for UK importers,
                distributors, wholesalers, salon suppliers, brands and
                private-label buyers.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#uk-product-range"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore the Range <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request a UK Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["UK", "Buyer Enquiries"],
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

      <section id="uk-product-range" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Commercial Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Indian Natural Products
                <span className="mt-1 block text-[#A97B22]">for the UK Market</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                A focused portfolio for professional buyers developing wholesale,
                salon, cosmetic, wellness, food or own-brand ranges.
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
                <span className="block text-[#E4C878]">Distinct UK Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">
                Each enquiry is reviewed around the product, intended use,
                volume, presentation and commercial route rather than treated as
                a standard retail order.
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
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] overflow-hidden border border-[#C9A962]/35 bg-[#102F23] shadow-[0_28px_70px_rgba(20,50,38,0.18)]">
              <Image
                src="/images/export/export-private-label-packaging-final-v1.png"
                alt="Private-label packaging formats for natural products export supply"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer Brand Development</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Packaging That Fits
                <span className="block text-[#A97B22]">Your Commercial Brief</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                Buyers may propose their own artwork and preferred presentation.
                We review dielines, label content, pack size, materials, print
                quantities and export-carton needs before confirming feasibility.
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">
                Artwork review is a production-coordination service and does not
                constitute approval of UK labelling, claims or market compliance.
                Those obligations remain subject to the buyer&apos;s own professional
                assessment.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#D8BB68]">
                Discuss Private Label <span>→</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">India to United Kingdom</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">A Clear Export Enquiry Process</h2>
              <p className="mx-auto mt-7 max-w-[780px] text-[16px] font-light leading-8 text-[#4C5F54]">
                A practical sequence for aligning the product, commercial terms,
                packaging and shipment responsibilities before dispatch.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <article key={item.step} className="border border-[#173B2A]/12 bg-[#F9F5EC] p-7">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]">{item.step}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-12 max-w-[1050px] border border-[#C9A962]/35 bg-[#173B2A] p-7 text-[#F5F0E6] sm:p-9">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">Documentation and UK Market Responsibility</h3>
              <p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/68">
                Commercial invoice, packing list, transport documents and other
                applicable product or shipment information are discussed for the
                agreed order. Availability is not universal. The UK importer or
                responsible business must determine the customs, product,
                labelling and regulatory requirements relevant to its intended
                use and route to market.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">UK Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">Export Supply FAQ</h2>
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

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <GoldenParticles />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1000px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Start a UK Supply Conversation</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Tell Us What Your Business Needs</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
              Share the product, quantity, pack size, branding brief, destination
              and required information. Our team will review the enquiry and
              respond with the next commercially practical steps.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">
              Request a UK Export Quote <span>→</span>
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
