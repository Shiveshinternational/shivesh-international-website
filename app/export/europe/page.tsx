import type { Metadata } from "next";
import { existsSync } from "node:fs";
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

const canonicalUrl = "https://shiveshinternational.com/export/europe";
const heroImage = "/images/export/europe/europe-export-hero.png";

export const metadata: Metadata = {
  title: "Henna, Indigo, Herbs & Spices Exporter to Europe",
  description:
    "Shivesh International exports natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices to European importers, distributors and private-label buyers. MOQ 200 kg per product.",
  keywords: [
    "Natural products exporter to Europe",
    "Indian natural products supplier Europe",
    "Indian exporter for European importers",
    "Exporter from India to Europe",
    "Bulk natural products supplier Europe",
    "Private label products manufacturer India for Europe",
    "Wholesale botanical products Europe",
    "Indian manufacturer for European distributors",
    "Natural cosmetic ingredients exporter Europe",
    "Herbal product exporter from India to Europe",
    "Plant-based products supplier Europe",
    "Botanical ingredients supplier Europe",
    "Natural product private label Europe",
    "European importers sourcing from India",
    "Indian supplier for European wholesalers",
    "Henna powder exporter to Europe",
    "Natural henna powder supplier Europe",
    "Henna powder manufacturer India for Europe",
    "Bulk henna powder supplier Europe",
    "Organic henna powder exporter Europe",
    "Private label henna powder Europe",
    "Wholesale henna powder Europe",
    "Cosmetic-grade henna powder supplier Europe",
    "Pure henna powder exporter Europe",
    "Lawsonia inermis powder supplier Europe",
    "Henna powder wholesale supplier Europe",
    "Indian henna exporter for European importers",
    "Henna powder for cosmetic brands Europe",
    "Henna powder for salon suppliers Europe",
    "Henna powder private label manufacturer India",
    "Indigo powder exporter to Europe",
    "Natural indigo powder supplier Europe",
    "Indigo powder manufacturer India for Europe",
    "Bulk indigo powder supplier Europe",
    "Organic indigo powder exporter Europe",
    "Private label indigo powder Europe",
    "Wholesale indigo powder Europe",
    "Indigofera tinctoria powder supplier Europe",
    "Indigo powder for botanical hair color Europe",
    "Indigo powder for cosmetic brands Europe",
    "Indian indigo exporter Europe",
    "Natural hair dye ingredient supplier Europe",
    "Botanical hair color manufacturer for Europe",
    "Natural hair color private label Europe",
    "Natural henna hair color manufacturer for Europe",
    "Botanical hair color supplier Europe",
    "Plant-based hair color exporter Europe",
    "Natural hair dye manufacturer India for Europe",
    "Private label natural hair color Europe",
    "Henna hair color wholesale Europe",
    "Botanical hair dye supplier Europe",
    "Herbal hair color manufacturer for European brands",
    "Powder hair color exporter Europe",
    "Natural hair color supplier for salons Europe",
    "Henna-based hair color supplier Europe",
    "Private label botanical hair color manufacturer India",
    "Natural hair color for European distributors",
    "Botanical hair color bulk supplier Europe",
    "Ayurvedic herbs exporter to Europe",
    "Indian herbs supplier Europe",
    "Herbal powder exporter Europe",
    "Ayurvedic powder supplier Europe",
    "Bulk Indian herbs supplier Europe",
    "Wholesale Ayurvedic herbs Europe",
    "Indian botanical ingredients exporter Europe",
    "Herbal ingredients supplier for cosmetic brands Europe",
    "Natural herbal powder manufacturer India",
    "Ayurvedic herbs for European importers",
    "Indian herbs for wellness brands Europe",
    "Bulk herbal powders exporter Europe",
    "Cosmetic herbal ingredients supplier Europe",
    "Indian spices exporter to Europe",
    "Indian spices supplier Europe",
    "Bulk spices supplier Europe",
    "Wholesale Indian spices Europe",
    "Whole spices exporter to Europe",
    "Ground spices exporter Europe",
    "Private label Indian spices Europe",
    "Indian spice manufacturer for European buyers",
    "Spice exporter from India to Europe",
    "Indian spices for importers and distributors Europe",
    "Bulk spice powder supplier Europe",
    "Indian food ingredient supplier Europe",
    "Private label spice packaging Europe",
    "Indian spice wholesale supplier Europe",
    "Private label herbal products Europe",
    "Indian manufacturer for European importers",
    "Henna and indigo wholesale Europe",
    "Natural cosmetic ingredients supplier Europe",
    "Private label manufacturer India for Europe",
    "Custom packaging supplier for European buyers",
    "Private label henna packaging Europe",
    "Private label herbal powder Europe",
    "Private label spice supplier Europe",
    "Custom branded pouches for European importers",
    "Retail packaging natural products Europe",
    "Bulk packaging exporter India to Europe",
    "Contract packaging support for European brands",
    "Multilingual label coordination Europe",
    "White label natural products Europe",
    "Custom brand natural products supplier Europe",
    "Henna supplier for European importers",
    "Natural product supplier for European distributors",
    "Botanical products for European wholesalers",
    "Private label supplier for European brands",
    "Henna supplier for salon distributors Europe",
    "Herbal ingredients for cosmetic manufacturers Europe",
    "Indian products for European retail chains",
    "Bulk supplier for European natural product brands",
    "Export supplier for European e-commerce brands",
    "Natural ingredients for European beauty brands",
    "Indian exporter for European wholesale buyers",
    "B2B natural product supplier Europe",
    "Henna exporter to Italy",
    "Henna supplier Spain",
    "Natural products exporter Austria",
    "Herbal products supplier Finland",
    "Henna and indigo supplier Netherlands",
    "Indian herbs exporter Poland",
    "Natural hair color supplier Norway",
    "Henna powder exporter France",
  ],
  alternates: { canonical: "/export/europe" },
  openGraph: {
    title: "Henna, Indigo, Herbs & Spices Exporter to Europe",
    description:
      "Export-ready henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices for European professional buyers.",
    url: canonicalUrl,
    type: "website",
    locale: "en_GB",
    siteName: "Shivesh International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henna, Indigo, Herbs & Spices Exporter to Europe",
    description:
      "Indian natural-product supply for European importers, distributors and private-label buyers.",
  },
  robots: { index: true, follow: true },
};

const products = [
  {
    title: "Natural Henna Powder",
    text: "Pure Lawsonia inermis powder for European cosmetic brands, salon suppliers, wholesale buyers and private-label henna ranges, with grade and format confirmed per order.",
    href: "/products/natural-henna-powder",
  },
  {
    title: "Natural Indigo Powder",
    text: "Natural Indigofera tinctoria powder for botanical hair-color formulations, two-step coloring systems, cosmetic brands, bulk supply and private-label retail packs.",
    href: "/products/natural-indigo-powder",
  },
  {
    title: "Natural Henna Hair Colors",
    text: "A broad botanical shade collection for European distributors, salons and brands seeking plant-based, powdered and private-label natural hair-color options.",
    href: "/products/henna-hair-colors",
  },
  {
    title: "Henna-Based Hair Colors",
    text: "Export-ready henna-based powdered hair colors for professional channels, wholesale distribution and customized buyer-brand supply.",
    href: "/products/henna-based-hair-colors",
  },
  {
    title: "Ayurvedic Indian Herbs",
    text: "Indian herbal powders and botanical ingredients for European cosmetic, wellness, personal-care, wholesale and private-label applications.",
    href: "/products/ayurvedic-indian-herbs",
  },
  {
    title: "Indian Spices",
    text: "Whole and ground Indian spices for European importers, food businesses, distributors, private labels and bulk ingredient buyers.",
    href: "/products/indian-spices",
  },
];

const markets = [
  { code: "DE", name: "Germany", flag: "🇩🇪", href: "/export/germany", text: "Natural henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices for German importers, distributors and private-label brands." },
  { name: "Italy", flag: "🇮🇹", href: "/export/italy", text: "Henna exporter to Italy for botanical, salon and food-ingredient businesses seeking professional supply." },
  { name: "Spain", flag: "🇪🇸", href: "/export/spain", text: "Henna supplier for Spain with flexible natural-product sourcing for importers and buyer brands." },
  { name: "France", flag: "🇫🇷", href: "/export/france", text: "Henna powder exporter for France with botanical and private-label support for professional buyers." },
  { name: "Austria", flag: "🇦🇹", href: "/export/austria", text: "Natural products exporter for Austria supporting botanical and spice distribution channels." },
  { name: "Netherlands", flag: "🇳🇱", href: "/export/netherlands", text: "Henna and indigo supplier for Netherlands importers, distributors and private-label businesses." },
  { name: "Poland", flag: "🇵🇱", href: "/export/poland", text: "Indian herbs exporter for Poland supporting natural hair-care, wellness and spice buyers." },
  { name: "Norway", flag: "🇳🇴", href: "/export/norway", text: "Natural hair color supplier for Norway with coordinated Indian botanical product supply." },
];

const buyerTypes = [
  "Importers and distributors",
  "Natural cosmetic and hair-care brands",
  "Private-label product companies",
  "Salon and professional hair suppliers",
  "Herbal and Ayurvedic product businesses",
  "Food ingredient and spice buyers",
  "Bulk wholesalers and retail chains",
];

const buyerApplications = [
  {
    title: "Cosmetic & Personal-Care Applications",
    text: "Cosmetic companies and natural beauty brands can source henna, indigo and herbal ingredients for buyer-developed personal-care ranges, subject to agreed specifications and intended use.",
  },
  {
    title: "Salon & Professional Hair Care",
    text: "Salon suppliers and professional distributors can discuss natural henna powder, indigo and powdered hair-color formats for commercial hair-care channels.",
  },
  {
    title: "Botanical Hair-Color Manufacturing",
    text: "European hair-care brands can source plant-based hair-color powders and private-label botanical shades from an India-based manufacturing partner.",
  },
  {
    title: "Herbal & Wellness Products",
    text: "Ayurvedic herbs and natural herbal powders support wellness, cosmetic and own-brand product programmes for importers and specialist businesses.",
  },
  {
    title: "Retail & Private-Label Products",
    text: "Retail chains and e-commerce brands can coordinate buyer branding, selected pack formats and white-label natural products for their chosen market.",
  },
  {
    title: "Wholesale & Bulk Ingredients",
    text: "Wholesalers and manufacturers can consolidate botanical ingredients in commercial bulk formats for onward distribution or further processing.",
  },
  {
    title: "Food & Spice Distribution",
    text: "Food businesses and spice distributors can discuss whole and ground Indian spices for bulk, wholesale or private-label supply programmes.",
  },
];

const europeanBuyerProfiles = [
  ["Importers", "Coordinate multi-category sourcing, order information and shipment preparation with one Indian export contact."],
  ["Distributors & Wholesalers", "Build botanical, herbal, hair-care and spice assortments for professional resale channels."],
  ["Cosmetic & Hair-Care Brands", "Source natural ingredients and powdered hair-color products for buyer-developed ranges."],
  ["Salon Suppliers", "Review henna, indigo and botanical hair colors for professional hair-care distribution."],
  ["Herbal-Product Companies", "Source Ayurvedic powders and Indian botanicals for wellness and personal-care businesses."],
  ["Spice & Food Businesses", "Discuss whole spices, ground spices and food-ingredient formats for commercial supply."],
  ["Retail Chains", "Coordinate selected retail packs, buyer labels and repeat-order planning for store networks."],
  ["E-commerce Private Labels", "Develop custom-brand natural products for digital retail, subject to pack and order feasibility."],
];

const europeFaqs = [
  {
    question: "What products does Shivesh International export to Europe?",
    answer: "We supply natural henna powder, indigo powder, botanical hair colors, henna-based hair colors, Ayurvedic Indian herbs and selected whole or ground Indian spices for qualified European business buyers.",
  },
  {
    question: "What is the minimum order quantity for European buyers?",
    answer: "The minimum order quantity is 200 kg per product. Final quantities are confirmed according to the selected product, pack format and private-label requirements.",
  },
  {
    question: "Is private-label packaging available for Europe?",
    answer: "Private-label support can include buyer branding, custom labels, printed pouches, printed boxes and multilingual packaging coordination, subject to order and technical feasibility.",
  },
  {
    question: "Can European buyers order henna and indigo in bulk?",
    answer: "Yes. European importers, distributors and manufacturers can discuss bulk henna and indigo supply in available commercial formats, including 20 kg and 25 kg double-layer vacuum bags.",
  },
  {
    question: "Which retail packaging sizes are available?",
    answer: "Selected products can be discussed in 100 g, 200 g, 500 g and 1 kg retail pouches. Availability and artwork requirements are confirmed for each order.",
  },
  {
    question: "Does Shivesh International support export documentation?",
    answer: "We coordinate applicable commercial invoices, packing lists, certificates of origin, shipping documents, product specifications, COA and available quality documents for the agreed order.",
  },
  {
    question: "Can importers source multiple product categories in one order?",
    answer: "Multi-category enquiries are welcome. Product combination, minimum quantities, packaging, documentation and shipment feasibility are reviewed before commercial confirmation.",
  },
  {
    question: "How can a European buyer request a quotation?",
    answer: "Use the website contact form and share the product, quantity, packaging format, destination country and private-label needs. Our export team will review the enquiry and respond with the next practical steps.",
  },
];

const trustItems = [
  ["India-Based Export Supplier", "Direct coordination for export supply from our India-based team."],
  ["MOQ from 200 kg per Product", "Commercial orders begin at 200 kg for each selected product."],
  ["Retail, Bulk & Private Label", "Formats can be reviewed for retail, professional, wholesale and buyer-brand needs."],
  ["Multiple Botanical Product Categories", "Source henna, indigo, botanical colors, Ayurvedic herbs and spices."],
  ["Packaging Customization Support", "Artwork, labels, packs and buyer-specific details are coordinated subject to feasibility."],
  ["Export Documentation Coordination", "Available commercial and quality information is aligned with agreed order needs."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Henna, Indigo, Herbs & Spices Exporter to Europe",
      description:
        "European regional export hub for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices supplied from India.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://shiveshinternational.com/" },
        { "@type": "ListItem", position: 2, name: "Export", item: "https://shiveshinternational.com/export" },
        { "@type": "ListItem", position: 3, name: "Europe", item: canonicalUrl },
      ],
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${canonicalUrl}#faq`,
  mainEntity: europeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function OptionalImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 55vw, 100vw",
  className = "object-cover object-center",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const imageExists = existsSync(`${process.cwd()}/public${src}`);

  if (!imageExists) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}

export default function EuropeExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[#071B14]">
        <OptionalImage
          src={heroImage}
          alt="European buyers discussing henna, indigo, herbs and spices with the Shivesh International export team in India"
          priority
          sizes="100vw"
          className="object-cover object-[57%_center] sm:object-[58%_center] lg:object-[50%_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/72 via-[#102F23]/40 to-[#071B14]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/[0.04]" />
        <GoldenParticles />
        <div className="relative z-10 flex items-center px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="w-full max-w-[820px] lg:max-w-[860px] xl:max-w-[900px]">
            <StaggerItem delay={0}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">Exporting from India to Europe</p>
              </div>
            </StaggerItem>
            <StaggerItem delay={100}>
              <h1 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#F5F0E6] sm:text-5xl lg:text-6xl xl:text-[66px]">
                Natural Products Exporter to Europe
                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">Henna, Indigo, Herbs &amp; Spices</span>
              </h1>
            </StaggerItem>
            <StaggerItem delay={200}>
              <p className="mt-5 max-w-[730px] text-[16px] font-light leading-7 text-[#F5F0E6]/82 sm:text-[17px] sm:leading-8">
                Shivesh International is an Indian natural products supplier for Europe, supporting importers, distributors, wholesalers, cosmetic companies, salon suppliers and private-label brands with export-ready henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices from India.
              </p>
            </StaggerItem>
            <StaggerItem delay={300}>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Send Europe Inquiry <span>→</span></Link>
                <a href="#european-markets" className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Explore European Markets <span>↓</span></a>
              </div>
            </StaggerItem>
            <StaggerItem delay={400}>
              <div className="mt-10 grid max-w-[740px] grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["200 kg", "MOQ Per Product"],
                  ["Bulk", "Wholesale Supply"],
                  ["OEM", "Private Label"],
                  ["Europe", "Buyer Enquiries"],
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

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1120px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">European Natural Products Sourcing</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">One India-Based Exporter <span className="block text-[#A97B22]">for Multiple Product Categories</span></h2>
              <p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">
                European importers sourcing from India can coordinate several commercial categories with one export team. As an Indian exporter for European importers and distributors, Shivesh International supplies botanical ingredients for cosmetic and hair-care brands, salon channels, herbal-product companies, food businesses and wholesale buyers. This consolidated approach helps buyers align product specifications, order planning and export coordination across henna, indigo, plant-based hair colors, Ayurvedic herbs and spices.
              </p>
              <p className="mt-5 text-[15px] font-light leading-8 text-[#4C5F54]">Our role as a bulk natural products supplier for Europe includes consistent order review, private-label support and documentation assistance. Product suitability, available quality information, packaging and commercial feasibility are confirmed for each buyer, with an MOQ of 200 kg per product.</p>
              <div className="mt-8 flex flex-wrap gap-2">{buyerTypes.map((buyer) => <span key={buyer} className="border border-[#173B2A]/15 bg-white/55 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em]">{buyer}</span>)}</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six Export Product Categories</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Products Suitable <span className="block text-[#A97B22]">for Europe</span></h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54]">A focused portfolio for henna and indigo wholesale in Europe, botanical hair-color brands, herbal-product businesses and bulk spice buyers.</p>
            </div>
            <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <StaggerItem key={product.title} delay={(index % 3) * 90}>
                  <article className="group flex h-full min-h-[290px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/60">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight">{product.title}</h3>
                    <p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">{product.text}</p>
                    <Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A97B22]">Explore {product.title} <span className="transition-transform group-hover:translate-x-2">→</span></Link>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Commercial Use Cases</p>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.04]">Product-Specific <span className="block text-[#A97B22]">Buyer Applications</span></h2>
                <p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">Our portfolio supports botanical hair-color manufacturing, professional salon supply, herbal and wellness ranges, cosmetic ingredients, retail products and food distribution. Every enquiry is reviewed around the buyer’s intended application, specification and commercial format.</p>
              </div>
              <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
                {buyerApplications.map((application) => (
                  <article key={application.title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_16px_42px_rgba(20,50,38,0.06)]">
                    <span className="block h-px w-12 bg-[#C9A962]" />
                    <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight">{application.title}</h3>
                    <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{application.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[940px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">B2B Natural Product Supply</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.7vw,4.7rem)] font-semibold leading-[1.04]">European Buyer Types We Support</h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54]">A natural product supplier for European distributors must understand different buying models. We support ingredient sourcing, wholesale botanical products, salon distribution, retail-chain requirements and private-label programmes for European brands.</p>
            </div>
            <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {europeanBuyerProfiles.map(([title, text]) => (
                <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">{title}</h3>
                  <p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="european-markets" className="relative scroll-mt-24 overflow-hidden bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[940px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Regional Market Navigation</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Explore Our European Export Markets</h2>
              <p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#F5F0E6]/68">Discover market-focused supply, packaging and export support for buyers across major European destinations.</p>
            </div>
            <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {markets.map((market) => (
                <article key={market.name} className="group flex h-full flex-col border border-[#C9A962]/25 bg-[#071B14]/55 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70">
                  <span aria-hidden="true" className="text-4xl">{market.flag}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#E4C878]">{market.name}</h3>
                  <p className="mt-4 flex-1 text-[14px] font-light leading-7 text-[#F5F0E6]/65">{market.text}</p>
                  <Link href={market.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Explore Market <span className="transition-transform group-hover:translate-x-2">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-t border-[#C9A962]/20 bg-[#102F23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-[820px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">South American Market Navigation</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.2vw,4.2rem)] font-semibold leading-[1.04]">Explore South American Markets</h2>
              <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-light leading-8 text-[#F5F0E6]/68">Explore market-focused product supply, private-label packaging and export coordination for buyers in Brazil and Argentina.</p>
            </div>
            <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2">
              <article className="group flex h-full flex-col border border-[#C9A962]/25 bg-[#071B14]/55 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8">
                <span aria-hidden="true" className="text-4xl">🇧🇷</span>
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#E4C878]">Brazil</h3>
                <p className="mt-4 flex-1 text-[14px] font-light leading-7 text-[#F5F0E6]/65">Natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices for Brazilian importers, distributors, salon suppliers and private-label brands.</p>
                <Link href="/export/brazil" className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Explore Brazil Market <span className="transition-transform group-hover:translate-x-2">→</span></Link>
              </article>
              <article className="group flex h-full flex-col border border-[#C9A962]/25 bg-[#071B14]/55 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8">
                <span aria-hidden="true" className="text-4xl">🇦🇷</span>
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#E4C878]">Argentina</h3>
                <p className="mt-4 flex-1 text-[14px] font-light leading-7 text-[#F5F0E6]/65">Export-ready natural products and private-label supply solutions for Argentine importers, wholesalers, cosmetic brands and herbal-product businesses.</p>
                <Link href="/export/argentina" className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Explore Argentina Market <span className="transition-transform group-hover:translate-x-2">→</span></Link>
              </article>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Buyer-Brand Formats</p>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">Packaging &amp; Private-Label Solutions <span className="block text-[#A97B22]">for European Buyers</span></h2>
                <p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">As a private-label manufacturer in India for Europe, we can coordinate custom labels, printed pouches, printed boxes, buyer branding and barcode details for selected products. This includes private-label henna packaging, herbal powders and spice supply for European brands, subject to order and technical feasibility.</p>
                <p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">Retail packaging for natural products in Europe may use 100 g, 200 g, 500 g or 1 kg pouches, while bulk packaging from India to Europe can use 20 kg or 25 kg double-layer vacuum bags. Custom-branded pouches, contract-packaging support and multilingual label coordination are reviewed against the confirmed product, quantity and destination requirements.</p>
              </div>
              <div>
                <figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[#FBF8F1] shadow-[0_28px_70px_rgba(20,50,38,0.18)]">
                  <OptionalImage
                    src="/images/export/europe/europe-buyer-partnership.png"
                    alt="European buyers reviewing retail, bulk and private-label packaging options with an Indian export packaging team"
                    className="object-contain object-center"
                  />
                </figure>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Retail Packaging</h3><p className="mt-5 text-sm leading-7 text-[#4C5F54]">100 g · 200 g · 500 g · 1 kg pouches</p></article>
                <article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Bulk Packaging</h3><p className="mt-5 text-sm leading-7 text-[#4C5F54]">20 kg and 25 kg double-layer vacuum bags</p></article>
                <article className="border border-[#C9A962] bg-[#173B2A] p-7 text-[#F5F0E6] sm:col-span-2"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Minimum Order Quantity</p><p className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold">200 kg per product</p></article>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Shipment and Document Support</p>
                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">India-to-Europe Export Coordination</h2>
                <p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">We coordinate commercial invoices, packing lists, certificates of origin, shipping documents, product specifications, COA and available quality documents. Buyer-requested documentation is subject to availability.</p>
                <p className="mt-5 text-[15px] font-light leading-8 text-[#F5F0E6]/62">Support can include buyer-appointed freight forwarders, sea or air freight coordination, and port or airport dispatch from India. Documentation and product information can be coordinated according to the buyer’s product category, destination and agreed order requirements.</p>
              </div>
              <figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_70px_rgba(20,50,38,0.18)]">
                <OptionalImage src="/images/export/europe/india-to-europe-export-coordination.png" alt="India-to-Europe export documentation, freight coordination and container dispatch support" className="object-contain object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/65 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#E4C878] backdrop-blur-md">India-to-Europe Export Coordination</figcaption>
              </figure>
            </div>
            <aside className="mt-12 border border-[#C9A962]/35 bg-[#071B14]/60 p-7 text-sm font-light leading-7 text-[#F5F0E6]/64">The European importer or buyer remains responsible for confirming product classification, labelling, registration, customs and applicable destination-market requirements. No automatic compliance or customs-clearance claim is made.</aside>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Commercial Supply Strengths</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.7vw,4.7rem)] font-semibold leading-[1.04]">Why European Buyers Work with Shivesh International</h2></div>
            <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{trustItems.map(([title, text]) => <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">European Buyer Questions</p>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">Europe Export Supply FAQ</h2>
              <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-light leading-8 text-[#4C5F54]">Practical answers for importers, distributors, brands and wholesale buyers planning natural-product sourcing from India.</p>
            </div>
            <div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">
              {europeFaqs.map((faq) => (
                <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3>
                  <p className="text-[14px] font-light leading-7 text-[#4C5F54]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28">
        <GoldenParticles />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1000px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Europe Export Enquiry</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Looking for a Reliable Natural Product Supplier from India?</h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">Share your required product, quantity, packaging format, destination country and private-label requirements with our export team.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Send Your Europe Requirement <span>→</span></Link>
            <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]/45"><Link href="/export" className="hover:text-[#E4C878]">Export Hub</Link><Link href="/export/france" className="hover:text-[#E4C878]">France</Link><Link href="/contact" className="hover:text-[#E4C878]">Contact</Link></div>
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
