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
import { franceLanguageAlternates } from "@/app/lib/i18n";

const pageUrl = "https://shiveshinternational.com/export/france";
const heroImage =
  "https://shiveshinternational.com/images/export/france/france-botanical-beauty-atelier-hero-premium-v1.png";

export const metadata: Metadata = {
  title: "Natural Products Exporter to France",
  description:
    "Henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices for French importers, wholesalers, OEM and private-label buyers. MOQ 200 kg per item.",
  keywords: [
    "natural products exporter to France",
    "natural products supplier France",
    "Indian natural products exporter France",
    "India to France natural products export",
    "natural products wholesale supplier France",
    "bulk natural products supplier France",
    "private label natural products France",
    "OEM natural products manufacturer France",
    "Indian botanical products supplier France",
    "herbal products exporter to France",
    "henna powder exporter to France",
    "natural henna powder supplier France",
    "Indian henna powder exporter France",
    "Sojat henna powder supplier France",
    "bulk henna powder supplier France",
    "wholesale henna powder exporter France",
    "private label henna powder France",
    "OEM henna powder manufacturer France",
    "henna powder importer France",
    "henna powder distributor France",
    "indigo powder exporter to France",
    "natural indigo powder supplier France",
    "Indian indigo powder exporter France",
    "bulk indigo powder supplier France",
    "wholesale indigo powder exporter France",
    "private label indigo powder France",
    "OEM indigo powder manufacturer France",
    "Indigofera tinctoria powder supplier France",
    "botanical hair colour powder supplier France",
    "natural henna hair colours exporter France",
    "botanical hair colours supplier France",
    "natural hair colour manufacturer for France",
    "henna hair colour wholesale supplier France",
    "private label henna hair colours France",
    "OEM botanical hair colours France",
    "professional salon hair colours supplier France",
    "henna-based hair colours supplier France",
    "natural hair dye exporter to France",
    "Ayurvedic herbs exporter to France",
    "Ayurvedic herbs supplier France",
    "Indian herbal powders exporter France",
    "bulk herbal powder supplier France",
    "wholesale Ayurvedic herbs France",
    "private label Ayurvedic herbs France",
    "botanical powders wholesaler France",
    "Indian herbs supplier for French brands",
    "Indian spices exporter to France",
    "Indian spices supplier France",
    "bulk Indian spices exporter France",
    "wholesale spices supplier France",
    "private label Indian spices France",
    "whole and ground spices exporter France",
    "Indian spice supplier for French food businesses",
    "French importer natural products India",
    "French distributor natural products India",
    "French wholesaler botanical products",
    "natural products supplier for French brands",
    "Indian exporter for French cosmetic brands",
    "Indian exporter for French salon suppliers",
    "Indian supplier for French wellness businesses",
    "retail packaging natural products France",
    "professional packaging natural products France",
    "bulk packaging natural products France",
    "customised packaging natural products France",
    "buyer brand development France",
    "product specifications natural products France",
    "commercial documentation exporter France",
    "India to France export coordination",
    "shipment planning India to France",
    "Shivesh International France exporter",
  ],
  alternates: {
    canonical: pageUrl,
    languages: franceLanguageAlternates,
  },
  openGraph: {
    title: "Natural Products Export Supply for France",
    description:
      "Bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for professional French buyers.",
    url: pageUrl,
    type: "website",
    locale: "en_GB",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/france/france-botanical-beauty-atelier-hero-premium-v1.png",
        width: 1536,
        height: 1024,
        alt: "French natural-cosmetics buyers and Indian botanical exporter developing products in a Paris atelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Products Export Supply for France",
    description:
      "Indian bulk supplier of henna, indigo, botanical hair colours, herbs and spices for French importers and private-label brands.",
    images: ["/images/export/france/france-botanical-beauty-atelier-hero-premium-v1.png"],
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
  { number: "01", title: "Natural Henna Powder", description: "Finely processed henna powder for French importers, natural-cosmetic brands and professional channels, with grade, specification and pack details agreed per order.", href: "/products/natural-henna-powder" },
  { number: "02", title: "Natural Indigo Powder", description: "Botanical indigo powder for commercial hair-colour programmes, available in reviewed bulk, professional and buyer-branded formats.", href: "/products/natural-indigo-powder" },
  { number: "03", title: "Natural Henna Hair Colors", description: "A considered botanical colour range for French distributors, salon suppliers and organic hair-care brands developing professional or retail portfolios.", href: "/products/natural-henna-hair-colors" },
  { number: "04", title: "Henna-Based Hair Colors", description: "Henna-based colour products for buyer-brand ranges, subject to formulation, intended use, packaging and commercial feasibility.", href: "/products/henna-based-hair-colors" },
  { number: "05", title: "Ayurvedic Indian Herbs", description: "Selected Ayurvedic herbs and botanical powders for wellness, personal-care and specialist retail sourcing programmes in the French market.", href: "/products/ayurvedic-indian-herbs" },
  { number: "06", title: "Indian Spices", description: "Selected whole and ground Indian spices for relevant French importers, wholesalers, retail chains and food businesses.", href: "/products/indian-spices" },
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
  { title: "Bulk & Wholesale Supply", text: "Commercial quantities for French importers, distributors and wholesalers can be planned in bulk, professional or selected retail formats. MOQ is 200 kg per item." },
  { title: "OEM & Private Label", text: "Natural-cosmetic, botanical hair-care and wellness brands can discuss selected OEM or private-label programmes, subject to product and production feasibility." },
  { title: "Custom Packaging", text: "Pouches, cartons, jars and buyer-brand presentation can be coordinated for feasible orders. Buyer-supplied artwork remains subject to material, technical and printing review." },
  { title: "Specifications & Documents", text: "Available product specifications and relevant commercial documentation are reviewed for the selected item, intended use and confirmed transaction." },
];

const process = [
  { step: "01", title: "Product & Quantity Review", text: "The France enquiry begins with the product, intended channel, grade, quantity and 200 kg-per-item minimum order requirement." },
  { step: "02", title: "Specification & Sample Discussion", text: "Available specifications, intended use, pack options and commercially feasible samples are discussed with the buyer." },
  { step: "03", title: "Quotation & Commercial Terms", text: "The quotation records the confirmed scope, pricing, payment terms, packaging and applicable commercial shipment terms." },
  { step: "04", title: "Packaging & Artwork Coordination", text: "Retail, professional, bulk or private-label presentation is reviewed with buyer artwork against technical, material and print feasibility." },
  { step: "05", title: "Production & Quality Review", text: "Confirmed goods are processed, packed and reviewed against the agreed product specification and order requirements." },
  { step: "06", title: "Export Documentation & Dispatch Coordination", text: "Commercial documents, packing information and dispatch planning are coordinated from India according to confirmed commercial terms." },
];

const faqs = [
  { question: "Which product categories can French buyers source?", answer: "The range covers natural henna powder, natural indigo powder, natural henna hair colours, henna-based hair colours, Ayurvedic Indian herbs and selected Indian spices. Availability and suitability are reviewed for every enquiry." },
  { question: "What is the MOQ for France export orders?", answer: "The minimum order quantity is 200 kg per item. Final quantities and packing configurations depend on the selected product, format and confirmed commercial scope." },
  { question: "Which French buyer types can enquire?", answer: "We welcome relevant enquiries from importers, distributors, wholesalers, natural-cosmetic and botanical hair-care brands, salon suppliers, Ayurvedic and wellness businesses, retail chains, OEM buyers and private-label brands." },
  { question: "Is bulk and wholesale supply available for France?", answer: "Yes. Feasible products can be prepared for bulk and wholesale supply in agreed bulk packs, professional formats or selected retail presentations." },
  { question: "Can French brands request OEM or private-label packaging?", answer: "OEM and private-label support can be discussed for selected products. Pack formats, buyer-brand presentation and quantities are confirmed only after technical and commercial review." },
  { question: "Can buyer-supplied artwork and metallised pouches be used?", answer: "Buyer artwork may be reviewed for gold or silver metallised pouches, kraft formats, cartons, jars and other feasible packs. Material, dieline, printing, language and quantity requirements remain subject to approval." },
  { question: "Are product specifications, documents and samples available?", answer: "Available specifications and relevant commercial documents are discussed for the chosen product and transaction. Samples may be arranged where commercially feasible; neither availability nor suitability is automatic." },
  { question: "Who confirms French and EU import requirements?", answer: "The French importer or buyer remains responsible for confirming product classification, intended use, applicable French and European Union requirements, import requirements, customs clearance, registration or notification where applicable, labelling, language requirements, ingredient declarations, claims and market-placement obligations." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Natural Products Export Supply for France",
      description:
        "English-language France market information for bulk, wholesale, OEM and private-label supply of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices.",
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
      name: "India-to-France Natural Products Export Supply",
      serviceType:
        "Bulk, wholesale, OEM and private-label natural products export supply",
      description:
        "Commercial natural-product export supply from India for professional importers, distributors, wholesalers, salon suppliers and buyer brands serving France.",
      url: pageUrl,
      provider: { "@id": "https://shiveshinternational.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "France",
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
          name: "Export to France",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Natural Products Supplied to French Buyers",
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

export default function FranceExportPage() {
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
          src="/images/export/france/france-botanical-beauty-atelier-hero-premium-v1.png"
          alt="French natural-cosmetics buyers and Indian botanical exporter developing products in a Paris atelier"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[90%_center]"
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
                  India to France
                </span>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">
                Botanical Supply from India
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  for French Buyers
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">
                Shivesh International works with professional buyers across France—from Paris and Lyon to Marseille, Bordeaux and Lille—on bulk, wholesale, OEM and private-label sourcing of Indian henna, indigo, botanical hair colours, Ayurvedic herbs and selected spices.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#france-product-range"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Explore the Range <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  Request a France Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Item"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["France", "Buyer Enquiries"],
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

      <section id="france-product-range" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Commercial Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Indian Natural Products
                <span className="mt-1 block text-[#A97B22]">for the French Market</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
                A six-category portfolio for professional buyers developing
                natural-cosmetic, botanical hair-care, salon, wellness, food
                and own-brand ranges for France.
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
                <span className="block text-[#E4C878]">French Business Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">
                French importers, distributors, wholesalers, salon suppliers,
                retail chains and buyer brands are supported through a
                commercial review of intended use, specification, quantity,
                packaging and supply feasibility.
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
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">French Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">France Export Supply FAQ</h2>
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
                src="/images/export/france/france-private-label-colour-pouch-gallery-premium-v1.png"
                alt="French buyers and Indian exporter discussing multiple private-label pouch colours and packaging finishes"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer Brand Development</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">
                Packaging Programmes for
                <span className="block text-[#A97B22]">French Retail and Professional Channels</span>
              </h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                French buyers may discuss retail packs, professional formats,
                bulk packs, gold or silver metallised pouches where relevant,
                kraft or other commercially feasible formats, cartons, jars
                and coordinated buyer-brand presentation.
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">
                Buyer-supplied artwork remains subject to technical, material
                and printing feasibility. The importer remains responsible for
                French and EU labelling, language, ingredient declarations,
                product claims and market requirements.
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
                    India to France
                  </p>
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">
                  Structured Export Coordination for French Buyers
                </h2>
                <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#F5F0E6]/68 sm:text-[17px]">
                  Each enquiry is coordinated around the selected product,
                  quantity, specification, packaging, available documentation
                  and shipment planning from India according to confirmed
                  commercial terms.
                </p>
              </div>

              <figure
                className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_75px_rgba(0,0,0,0.28)]"
              >
                <Image
                  src="/images/export/france/france-maritime-route-coordination-atelier-premium-v1.png"
                  alt="India-to-France maritime route, documentation and shipment coordination in Marseille"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878] backdrop-blur-md sm:bottom-6 sm:left-6">
                  India–France Export Coordination
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
                    France and EU Importer Responsibility
                  </h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54] sm:text-[15px]">
                    Shivesh International coordinates commercial and export
                    documentation for the confirmed order. The French importer
                    or buyer remains responsible for product classification,
                    import requirements, customs clearance, labelling, product
                    claims, registration and applicable French and EU requirements.
                  </p>
                </div>
              </div>
            </aside>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request a France Export Quote
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
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Start a France Supply Conversation</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Plan Natural-Product Supply for France</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
              Share the product, quantity, pack size, branding brief, destination
              and required information. Our team will review the enquiry and
              respond with the next commercially practical steps.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">
              Request a France Export Quote <span>→</span>
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
