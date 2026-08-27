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

const pageUrl = "https://shiveshinternational.com/export/australia";
const heroImage =
  "https://shiveshinternational.com/images/export/australia/australia-botanical-sourcing-sydney-hero-premium-v1.png";

export const metadata: Metadata = {
  title: "Natural Products Exporter to Australia | Shivesh International",
  description:
    "Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for Australian importers, wholesalers, OEM and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "natural products exporter to Australia",
    "Indian natural products exporter Australia",
    "India to Australia botanical supply",
    "natural products supplier for Australia",
    "natural products manufacturer India for Australia",
    "henna powder manufacturer India for Australia",
    "indigo powder manufacturer India for Australia",
    "botanical hair color manufacturer India for Australia",
    "bulk natural products supplier Australia",
    "wholesale natural products exporter Australia",
    "OEM natural products Australia",
    "private label botanical products Australia",
    "Indian botanical products supplier Australia",
    "herbal products exporter to Australia",
    "natural henna powder exporter to Australia",
    "henna powder supplier for Australia",
    "Indian henna powder exporter Australia",
    "Sojat henna powder supplier Australia",
    "bulk henna powder Australia",
    "wholesale henna powder supplier Australia",
    "private label henna Australia",
    "OEM henna powder supplier Australia",
    "henna powder importer Australia",
    "henna powder distributor supply Australia",
    "natural indigo powder exporter to Australia",
    "indigo powder supplier Australia",
    "Indian indigo powder exporter Australia",
    "bulk indigo powder Australia",
    "wholesale indigo powder supplier Australia",
    "private label indigo powder Australia",
    "OEM indigo powder Australia",
    "Indigofera tinctoria supplier Australia",
    "botanical hair colour supplier Australia",
    "natural henna hair colour exporter Australia",
    "natural henna hair colours supplier Australia",
    "henna-based hair colour supplier Australia",
    "botanical hair colours wholesale Australia",
    "private label hair colours Australia",
    "OEM botanical hair colours Australia",
    "professional salon hair colour supplier Australia",
    "natural hair dye exporter to Australia",
    "powder hair colour supplier Australia",
    "Ayurvedic herbs exporter to Australia",
    "Ayurvedic herbs supplier Australia",
    "Indian herbs wholesale Australia",
    "Indian herbal powders exporter Australia",
    "bulk Ayurvedic herbs Australia",
    "private label Ayurvedic herbs Australia",
    "botanical powders wholesaler Australia",
    "Indian herbs supplier for Australian brands",
    "Indian spices exporter to Australia",
    "Indian spices supplier Australia",
    "bulk Indian spices Australia",
    "wholesale Indian spices supplier Australia",
    "private label Indian spices Australia",
    "whole and ground spices exporter Australia",
    "Indian spice supplier for Australian food businesses",
    "Australian natural products importers",
    "Australian botanical products distributors",
    "Australian natural products wholesalers",
    "Indian exporter for Australian cosmetic brands",
    "Indian supplier for Australian salon businesses",
    "Indian exporter for Australian wellness brands",
    "natural products supplier for Australian retail chains",
    "retail packaging natural products Australia",
    "professional packs natural products Australia",
    "bulk packaging natural products Australia",
    "custom packaging supplier Australia",
    "multiple pouch colours private label Australia",
    "buyer brand packaging Australia",
    "product specifications exporter Australia",
    "export documentation India to Australia",
    "India to Australia shipment coordination",
    "Shivesh International Australia exporter",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Botanical and Natural Product Supply for Australia",
    description:
      "Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for Australian bulk, wholesale, OEM and private-label buyers.",
    url: pageUrl,
    type: "website",
    locale: "en_AU",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/australia/australia-botanical-sourcing-sydney-hero-premium-v1.png",
        width: 1536,
        height: 1024,
        alt: "Indian natural products prepared for commercial export supply to Australian buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botanical and Natural Product Supply for Australia",
    description:
      "India-based supplier of henna, indigo, botanical hair colours, herbs and spices for professional Australian buyers.",
    images: ["/images/export/australia/australia-botanical-sourcing-sydney-hero-premium-v1.png"],
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
  { number: "01", title: "Natural Henna Powder", description: "Finely processed henna powder for Australian importers, natural-cosmetic brands and professional channels, with grade, intended use and pack details reviewed per order.", href: "/products/natural-henna-powder" },
  { number: "02", title: "Natural Indigo Powder", description: "Botanical indigo powder for Australian hair-care programmes, supplied in commercially suitable bulk, professional or buyer-branded formats.", href: "/products/natural-indigo-powder" },
  { number: "03", title: "Natural Henna Hair Colors", description: "A botanical colour portfolio for Australian distributors, salon suppliers and brands developing professional or retail ranges.", href: "/products/natural-henna-hair-colors" },
  { number: "04", title: "Henna-Based Hair Colors", description: "Henna-based hair-colour products for commercial Australian channels, subject to product suitability, packaging and production feasibility.", href: "/products/henna-based-hair-colors" },
  { number: "05", title: "Ayurvedic Indian Herbs", description: "Selected Ayurvedic herbs and botanical powders for Australian wellness, personal-care and specialist retail sourcing programmes.", href: "/products/ayurvedic-indian-herbs" },
  { number: "06", title: "Indian Spices", description: "Selected whole and ground Indian spices for Australian importers, wholesalers, retail chains and commercially relevant food businesses.", href: "/products/indian-spices" },
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
  { title: "Bulk & Wholesale Supply", text: "Australian importers, distributors and wholesalers can discuss bulk, professional and selected retail formats. The minimum order quantity is 200 kg per item." },
  { title: "OEM & Private Label", text: "Australian natural-cosmetic, botanical hair-care and wellness brands can review selected OEM or private-label programmes subject to product and production feasibility." },
  { title: "Custom Packaging", text: "Commercially feasible pouches, cartons, jars and buyer-brand presentation can be reviewed. Artwork, materials, colours and printing require technical and commercial confirmation." },
  { title: "Specifications & Documents", text: "Available product specifications and relevant commercial or export documents are discussed for the selected item, intended application and confirmed transaction." },
];

const process = [
  { step: "01", title: "Product & Quantity Review", text: "We review the selected product, intended Australian channel, application, quantity and the 200 kg-per-item minimum order requirement." },
  { step: "02", title: "Specification & Sample Discussion", text: "Available specifications, intended use, packing options and commercially feasible samples are discussed before order confirmation." },
  { step: "03", title: "Quotation & Commercial Terms", text: "The quotation sets out confirmed scope, pricing, payment terms, packaging and applicable shipment terms for buyer review." },
  { step: "04", title: "Packaging & Artwork Coordination", text: "Bulk, professional, retail or private-label presentation and supplied artwork are reviewed against material, print and production feasibility." },
  { step: "05", title: "Production & Quality Review", text: "Confirmed goods are processed, packed and reviewed against the agreed specification and commercial order requirements." },
  { step: "06", title: "Export Documentation & Dispatch Coordination", text: "Relevant commercial documents, packing information and dispatch planning from India are coordinated according to confirmed terms." },
];

const faqs = [
  { question: "Which Indian natural products are available for Australian buyers?", answer: "The commercial range covers natural henna powder, natural indigo powder, natural henna hair colours, henna-based hair colours, Ayurvedic Indian herbs and selected Indian spices. Suitability and availability are reviewed for each intended application." },
  { question: "What MOQ applies to Australian wholesale orders?", answer: "The minimum order quantity is 200 kg per item. Final quantities and packing configurations depend on the selected product, supply format and confirmed commercial requirement." },
  { question: "Which Australian businesses can request supply?", answer: "Relevant enquiries are welcome from importers, distributors, wholesalers, natural-cosmetic and botanical hair-care brands, salon suppliers, wellness businesses, retail chains, OEM buyers, private-label buyers and bulk buyers." },
  { question: "Can Australian brands discuss OEM and private-label packaging?", answer: "Yes, for selected products and commercially suitable orders. Buyer-brand presentation, pack sizes and formats are confirmed only after technical, production and commercial review." },
  { question: "Can different pouch colours, materials and finishes be reviewed?", answer: "Retail pouches, kraft options, gold or silver metallised pouches and multiple commercially feasible colours or finishes may be discussed. No colour, material, finish or size is guaranteed until feasibility is confirmed." },
  { question: "What specifications and commercial documents may be discussed?", answer: "Available specifications and relevant commercial or export documents can be reviewed for the selected product and transaction. Samples may also be discussed where commercially feasible." },
  { question: "Who confirms Australian import, labelling and market requirements?", answer: "The Australian importer or buyer remains responsible for confirming applicable import, biosecurity, ingredient, labelling, claims, registration and market requirements. Requirements vary by product and intended use; no regulatory approval or customs-clearance guarantee is offered." },
  { question: "How does India-to-Australia shipment coordination work?", answer: "After product, quantity, specification, packaging and commercial terms are confirmed, Shivesh International coordinates available export documentation, packing information and dispatch planning from India. Shipment arrangements follow the agreed transaction terms." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Botanical and Natural Product Supply for Australia",
      description:
        "Australia-market information for bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices from India.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
        width: 1536,
        height: 1024,
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "India-to-Australia Botanical and Natural Product Supply",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Commercial export supply from India for Australian importers, distributors, wholesalers, salon suppliers, buyer brands and relevant food businesses.",
      url: pageUrl,
      provider: { "@id": "https://shiveshinternational.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Australia",
        sameAs: "https://www.wikidata.org/wiki/Q408",
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
          name: "Export to Australia",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Natural Products Supplied to Australian Buyers",
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

export default function AustraliaExportPage() {
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
          src="/images/export/australia/australia-botanical-sourcing-sydney-hero-premium-v1.png"
          alt="Australian natural-product buyers and Indian botanical exporter reviewing products in a Sydney harbour conservatory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/38 via-[#102F23]/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/[0.06]" />
        <GoldenParticles />
        <div className="relative z-10 flex items-center px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="w-full max-w-[790px]">
            <StaggerItem delay={0}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">
                  India to Australia
                </span>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Botanical Supply from India
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  for Australian Buyers
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International supports professional buyers across Australia—including enquiries connected with Sydney, Melbourne, Brisbane, Perth and Adelaide—with bulk, wholesale, OEM and private-label supply from India. These market references do not imply a local office or warehouse.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#australia-product-range"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore the Range <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request an Australia Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["Australia", "Buyer Enquiries"],
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

      <section id="australia-product-range" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Commercial Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Indian Natural Products
                <span className="mt-1 block text-[#A97B22]">for the Australian Market</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                Six commercial categories for Australian professional buyers developing
                natural-cosmetic, botanical hair-care, salon, wellness, retail,
                food or buyer-brand programmes.
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
                <span className="block text-[#E4C878]">Australian Business Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">
                Australian importers, distributors, wholesalers, natural-cosmetic brands,
                salon suppliers, wellness businesses, retail chains and
                buyer-brand companies are supported through a commercial review
                of intended use, specification, quantity and packaging.
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
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Australian Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">Australia Export Supply FAQ</h2>
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
                src="/images/export/australia/australia-sustainable-retail-packaging-studio-premium-v1.png"
                alt="Australian buyers and Indian exporter developing sustainable retail and private-label packaging formats"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer Brand Development</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Packaging Options for
                <span className="block text-[#A97B22]">Australian Buyer-Brand Programmes</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                Australian buyers may discuss retail pouches, professional formats,
                bulk packs, kraft pouches, gold or silver metallised pouches,
                multiple commercially feasible colours and finishes, cartons,
                jars, supplied artwork, pack sizes and packing configurations.
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">
                Artwork, materials, colours, printing and pack formats require
                technical and commercial review; not every option is always
                available. The importer remains responsible for Australian
                labelling, language, ingredients, claims and market requirements.
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
                    India to Australia
                  </p>
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">
                  Structured Export Coordination for Australian Buyers
                </h2>
                <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#F5F0E6]/68 sm:text-[17px]">
                  Each Australia enquiry is coordinated around product suitability,
                  quantity, specification, packaging, available documentation
                  and dispatch planning from India according to confirmed terms.
                </p>
              </div>

              <figure
                className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_75px_rgba(0,0,0,0.28)]"
              >
                <Image
                  src="/images/export/australia/australia-port-arrival-quality-coordination-premium-v1.png"
                  alt="India-to-Australia shipment arrival, packing and receiving-quality coordination at Port Botany"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878] backdrop-blur-md sm:bottom-6 sm:left-6">
                  India–Australia Export Coordination
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
                    Australian Importer Responsibility
                  </h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54] sm:text-[15px]">
                    Shivesh International can discuss available specifications and
                    relevant commercial or export documents for the selected
                    product. The Australian importer or buyer remains responsible
                    for confirming applicable import, biosecurity, ingredient,
                    labelling, claims, registration and market requirements,
                    which may vary by product and intended use. No regulatory
                    approval or customs-clearance guarantee is offered. This is
                    commercial information, not legal advice.
                  </p>
                </div>
              </div>
            </aside>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request an Australia Export Quote
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
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Start an Australia Supply Conversation</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Plan Your Australia Supply Programme</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
              Share the product, intended use, quantity, pack configuration,
              branding brief and Australian destination. Our India-based export
              team will review the requirement and outline practical next steps.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">
              Request an Australia Export Quote <span>→</span>
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
