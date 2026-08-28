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
import { belgiumLanguageAlternates } from "@/app/lib/i18n";
import FooterSection from "@/sections/FooterSection";

const pageUrl = "https://shiveshinternational.com/export/belgium";
const heroImage = "https://shiveshinternational.com/images/export/belgium/belgium-export-hero-natural-henna-hair-colors.png";

export const metadata: Metadata = {
  title: "Natural Products Exporter to Belgium | Bulk & Private Label",
  description: "Source Indian henna, indigo, botanical hair colours, Ayurvedic herbs and spices for Belgium. Bulk, wholesale, OEM and private label; MOQ 200 kg per item.",
  keywords: [
    "natural products exporter Belgium", "natural products supplier Belgium", "natural products manufacturer India Belgium", "Indian botanical products exporter Belgium", "botanical products supplier Belgium", "bulk natural products Belgium", "natural products wholesaler Belgium", "natural products distributor Belgium", "natural products retailer supply Belgium", "Belgium natural product buyers",
    "henna powder manufacturer Belgium", "henna powder exporter Belgium", "henna powder supplier Belgium", "henna powder wholesaler Belgium", "bulk henna powder Belgium", "henna retailer supply Belgium", "henna salon supply Belgium", "henna cosmetic brand supplier Belgium", "private label henna Belgium", "natural henna importer Belgium", "Indian henna B2B Belgium",
    "indigo powder manufacturer Belgium", "indigo powder exporter Belgium", "indigo powder supplier Belgium", "indigo powder wholesaler Belgium", "natural indigo bulk Belgium", "private label indigo Belgium", "indigo cosmetic brand supplier Belgium", "botanical indigo importer Belgium",
    "natural hair colour manufacturer Belgium", "botanical hair colour exporter Belgium", "plant based hair colour supplier Belgium", "henna based hair colour supplier Belgium", "henna based hair colors manufacturer Belgium", "natural hair colour wholesaler Belgium", "salon hair colour supply Belgium", "cosmetic brand hair colour supplier Belgium", "private label hair colour Belgium", "botanical hair colour distributor Belgium", "professional salon botanical colours Belgium",
    "Ayurvedic herbs exporter Belgium", "Ayurvedic herbs supplier Belgium", "Indian herbs wholesaler Belgium", "bulk Ayurvedic herbs Belgium", "herbal powder supplier Belgium", "private label herbs Belgium", "herbal cosmetic brand supplier Belgium", "Indian botanical powders Belgium", "wellness brand ingredients Belgium",
    "Indian spices exporter Belgium", "Indian spices supplier Belgium", "Indian spices wholesaler Belgium", "bulk Indian spices Belgium", "private label spices Belgium", "Indian spice importer Belgium", "spices for Belgian food buyers",
    "OEM natural products Belgium", "private label natural products Belgium", "private label cosmetics Belgium", "buyer brand packaging Belgium", "contract packaging natural products Belgium", "retail packaging natural products Belgium", "bulk packaging Belgium",
    "Belgium importers natural products", "Belgium distributors natural products", "Belgium wholesalers natural products", "Belgium retailers natural products", "Belgium salon suppliers", "Belgium cosmetic brands", "Belgium natural beauty buyers", "Belgium herbal product buyers", "Belgium sourcing companies natural products", "Belgium B2B botanical buyer",
    "India to Belgium natural products", "India Belgium B2B supply", "India Belgium botanical trade", "India to Belgium export coordination", "India Belgium wholesale supply", "Indian exporter for Brussels buyers", "Indian exporter for Antwerp buyers", "botanical supply Ghent Belgium", "natural products Liège Belgium", "natural products Charleroi Belgium", "natural products Namur Belgium",
  ],
  alternates: { canonical: pageUrl, languages: belgiumLanguageAlternates },
  openGraph: { title: "Natural Products Export Supply from India to Belgium", description: "Belgium-focused bulk, wholesale, OEM and private-label supply of henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices.", url: pageUrl, type: "website", locale: "en_GB", siteName: "Shivesh International", images: [{ url: "/images/export/belgium/belgium-export-hero-natural-henna-hair-colors.png", width: 1944, height: 809, alt: "Belgian salon and hair-colour professionals discussing natural henna hair colours supplied from India" }] },
  twitter: { card: "summary_large_image", title: "Natural Products Export Supply to Belgium", description: "Indian botanical products for Belgian importers, wholesalers, salons and private-label brands.", images: ["/images/export/belgium/belgium-export-hero-natural-henna-hair-colors.png"] },
  robots: { index: true, follow: true },
};

const products = [
  { title: "Natural Henna Powder", text: "Finely processed henna for Belgian importers, natural-cosmetic brands, retailers and professional salon channels.", href: "/products/natural-henna-powder" },
  { title: "Natural Indigo Powder", text: "Botanical indigo for hair-colour programmes, reviewed in bulk, professional and buyer-brand formats.", href: "/products/natural-indigo-powder" },
  { title: "Natural Henna Hair Colors", text: "A botanical colour range for distributors, hair-care brands and salon suppliers serving Belgium’s multilingual market.", href: "/products/natural-henna-hair-colors" },
  { title: "Henna-Based Hair Colors", text: "Buyer-brand colour products considered according to formulation, intended use, packaging and commercial feasibility.", href: "/products/henna-based-hair-colors" },
  { title: "Ayurvedic Indian Herbs", text: "Selected herbs and botanical powders for Belgian wellness, specialist retail and personal-care sourcing programmes.", href: "/products/ayurvedic-indian-herbs" },
  { title: "Indian Spices", text: "Selected whole and ground spices for relevant Belgian importers, wholesalers, retailers and food-sector buyers.", href: "/products/indian-spices" },
];

const buyers = [
  { title: "Importers and Distributors", text: "Coordinate product specifications, commercial quantities and available documentation for Belgium importers and distributors serving Brussels, Antwerp, Ghent and other commercial markets." },
  { title: "Natural and Organic Retail Brands", text: "Review henna, indigo, herbs, botanical hair-care products and spices for Belgian natural-product, organic and specialty retail ranges." },
  { title: "Cosmetic and Personal-Care Companies", text: "Support sourcing discussions for botanical powders, plant-based hair colours and buyer-developed cosmetic or personal-care concepts, subject to product and specification review." },
  { title: "Professional Salon Suppliers", text: "Discuss natural henna, indigo and botanical hair-colour products for salon supply and professional distribution channels in Belgium." },
  { title: "Herbal and Wellness Businesses", text: "Review Ayurvedic powders, herbal ingredients and selected botanicals for Belgian wellness, herbal and specialty-product businesses." },
  { title: "Private-Label and OEM Buyers", text: "Coordinate feasible buyer-brand pouches, cartons, artwork, labels and Private Label presentation for commercially suitable orders." },
  { title: "Food and Spice Importers", text: "Discuss selected whole, ground and blended Indian spices for Belgian food businesses, importers and specialist distributors." },
  { title: "Wholesalers and Specialty Retailers", text: "Build focused natural-product assortments for Belgian wholesale, e-commerce, specialty retail and professional supply channels." },
];

const steps = [
  ["01", "Product selection", "Confirm the product family, intended channel, grade, quantity and destination in Belgium."],
  ["02", "Specifications & samples", "Review available specifications and discuss samples where commercially feasible."],
  ["03", "Quotation & terms", "Confirm scope, pricing, payment terms, pack format and applicable shipment terms."],
  ["04", "Packaging & private label", "Review retail or bulk formats, buyer artwork, labels and print feasibility."],
  ["05", "Production & quality checks", "Process, pack and review the confirmed goods against agreed order requirements."],
  ["06", "Documents & dispatch", "Coordinate available export documents, shipment planning, dispatch and document sharing with the buyer or nominated forwarder."],
];

const documents = [
  { title: "Commercial Invoice", text: "Commercial invoice information can be prepared around the confirmed buyer, products, quantities, values and shipment terms." },
  { title: "Packing List", text: "Pack counts, net and gross weights, carton information and agreed shipment references can be coordinated for confirmed orders." },
  { title: "Certificate of Origin", text: "Certificate-of-origin coordination can be discussed where applicable to the confirmed product and shipment arrangement." },
  { title: "Specifications and COA", text: "Product specifications, COA where available, batch references and available quality information depend on the selected product." },
  { title: "Packaging Information", text: "Pouch, carton, bulk-pack, label and barcode information can be aligned with the buyer-approved packaging programme." },
  { title: "Shipping Documents", text: "Shipment documentation can be coordinated with the buyer-appointed freight forwarder and agreed dispatch plan." },
  { title: "Product / Batch Information", text: "Where available, product, batch, technical and quality-reference information can be reviewed according to the confirmed item." },
  { title: "Importer Review Responsibility", text: "The Belgian importer or buyer remains responsible for applicable import, registration, labelling, claims, customs and market-entry requirements." },
];

const locations = [
  { title: "Brussels", text: "Importers, cosmetic companies, e-commerce brands and national distributors can discuss multi-category sourcing and buyer-brand programmes." },
  { title: "Antwerp", text: "Port-connected importers, wholesalers and logistics-led buyers can review feasible bulk supply, export packing and onward distribution requirements." },
  { title: "Ghent", text: "Natural retailers, wellness businesses, salon suppliers and food-sector buyers can evaluate focused botanical, hair-care and spice ranges." },
  { title: "Liège", text: "French-speaking Belgian distributors and specialty retailers can discuss natural products for professional, retail and e-commerce channels." },
  { title: "Charleroi", text: "Regional wholesalers, personal-care businesses and professional suppliers can review commercially suitable products, packs and order structures." },
  { title: "Namur", text: "Specialty retailers, herbal businesses and wellness brands can assess selected herbs, botanical powders and buyer-brand formats." },
  { title: "Leuven", text: "Innovation-focused companies, cosmetic businesses and specialist buyers can discuss product specifications and considered private-label concepts." },
  { title: "Bruges", text: "Retail, hospitality-adjacent and regional distribution businesses can review relevant natural-product and Indian-spice supply programmes." },
];

const faqs = [
  { question: "Which products can Belgian buyers source?", answer: "The range covers natural henna powder, natural indigo powder, natural henna hair colours, henna-based hair colours, Ayurvedic Indian herbs and selected Indian spices. Suitability and availability are reviewed for each enquiry." },
  { question: "What is the minimum order quantity for Belgium?", answer: "The MOQ is 200 kg per item. Final quantities and packing configurations depend on the selected product, format and confirmed commercial scope." },
  { question: "Is bulk and wholesale supply available?", answer: "Yes. Feasible products can be prepared in agreed 20 kg or 25 kg bulk packs, professional formats or selected retail presentations, depending on product and quantity." },
  { question: "Can Belgian brands request Private Label or OEM supply?", answer: "Selected OEM and Private Label programmes can be reviewed for commercially feasible orders. Product, pack, artwork, printing and production details are confirmed before an order proceeds." },
  { question: "Which retail packaging formats may be considered?", answer: "Depending on the product and quantity, options may include 100 g, 200 g, 500 g and 1 kg packs, silver or gold metallized pouches, kraft formats, cartons and buyer-brand presentation." },
  { question: "Can samples be discussed before a commercial order?", answer: "Samples may be discussed where feasible after the required product, specification, intended use and commercial quantity are understood." },
  { question: "Which export documents are available for Belgium orders?", answer: "Available commercial, product and shipment documentation may be reviewed according to the selected product, order requirements and agreed transaction. No document or approval is implied without confirmation." },
  { question: "Who is responsible for Belgian and EU import requirements?", answer: "The Belgian importer or buyer remains responsible for product classification, import permissions, customs clearance, labelling, claims, registration and all applicable Belgian and EU requirements. We coordinate export and shipment information under confirmed commercial terms without guaranteeing clearance or delivery timing." },
];

const structuredData = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: "Natural Products Exporter from India to Belgium", description: "Bulk, wholesale, OEM and private-label supply of Indian botanical products for professional buyers in Belgium.", isPartOf: { "@id": "https://shiveshinternational.com/#website" }, about: { "@id": "https://shiveshinternational.com/#organization" }, breadcrumb: { "@id": `${pageUrl}#breadcrumb` }, primaryImageOfPage: { "@type": "ImageObject", url: heroImage }, inLanguage: "en" },
  { "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://shiveshinternational.com/" }, { "@type": "ListItem", position: 2, name: "Export", item: "https://shiveshinternational.com/export" }, { "@type": "ListItem", position: 3, name: "Export to Belgium", item: pageUrl }] },
] };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

export default function BelgiumExportPage() {
  return <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
    <Navbar />
    <section className="relative isolate overflow-hidden bg-[#071B14]">
      <Image src="/images/export/belgium/belgium-export-hero-natural-henna-hair-colors.png" alt="Belgian salon and hair-colour professionals discussing natural henna hair colours supplied from India" fill priority sizes="100vw" className="object-cover object-[68%_center] sm:object-[64%_center] lg:object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/80 via-[#102F23]/38 to-transparent" /><GoldenParticles />
      <div className="relative z-10 flex min-h-[760px] items-center px-6 pb-24 pt-28 sm:px-8 lg:px-12"><div className="w-full max-w-[820px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878] sm:text-xs">India → Belgium B2B supply</p>
        <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5.2vw,5.2rem)] font-medium leading-[1.03] tracking-[-0.04em] text-[#F5F0E6]">Natural Products Exporter<span className="mt-2 block text-[#E4C878]">from India to Belgium</span></h1>
        <p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-white/78 sm:text-[18px]">Commercial supply of natural henna, indigo, botanical hair colours, Ayurvedic herbs and Indian spices for Belgian importers, wholesalers, salons and brands—across bulk, wholesale, OEM and Private Label programmes.</p>
        <div className="mt-9 flex flex-wrap gap-4"><a href="#products" className="border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23]">Explore products ↓</a><Link href="/contact" className="border border-white/30 bg-black/20 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Request a Belgium quote</Link></div>
        <div className="mt-10 grid max-w-[760px] gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["200 kg", "MOQ per item"], ["Six", "Product families"], ["OEM", "Private Label"], ["Belgium", "Professional buyers"]].map(([value,label]) => <div key={label} className="border border-white/15 bg-black/25 px-4 py-4"><p className="font-[family-name:var(--font-playfair)] text-xl text-[#E4C878]">{value}</p><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55">{label}</p></div>)}</div>
      </div></div>
    </section>

    <section id="products" className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]">
      <div className="mx-auto max-w-[900px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36]">Six commercial product families</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.8vw,4.8rem)] font-semibold leading-[1.05]">Indian natural products<span className="block text-[#A97B22]">for Belgian buyer portfolios</span></h2><p className="mx-auto mt-7 max-w-[820px] leading-8 text-[#4C5F54]">A focused range for natural-beauty, professional hair-care, herbal, wellness, specialist retail and relevant food channels in Belgium.</p></div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product,index) => <StaggerItem key={product.title} delay={(index % 3) * 90}><article className="flex h-full min-h-[290px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="text-sm font-bold text-[#C9A962]">0{index + 1}</span><h3 className="mt-5 font-[family-name:var(--font-playfair)] text-[27px] font-semibold">{product.title}</h3><p className="mt-5 flex-1 text-[14px] leading-7 text-[#4C5F54]">{product.text}</p><Link href={product.href} className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22]">View product →</Link></article></StaggerItem>)}</div>
    </div></RevealOnScroll></section>

    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]">
      <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Belgian buyer profiles</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.7vw,4.7rem)] font-semibold leading-[1.05]">Supply Planning for<span className="block text-[#A97B22]">Import, Retail and Distribution Channels</span></h2><p className="mx-auto mt-7 max-w-[860px] leading-8 text-[#4C5F54]">Belgium natural-products buyers can review focused supply according to product, channel, quantity and intended market use. City references describe commercial contexts only and do not imply local premises, stockholding or representation.</p></div>
      <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">{buyers.map((buyer) => <article key={buyer.title} className="h-full min-h-[280px] border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[24px] font-semibold leading-tight text-[#173B2A]">{buyer.title}</h3><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">{buyer.text}</p></article>)}</div>
    </div></RevealOnScroll></section>

    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <figure className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#102F23]"><Image src="/images/export/belgium/belgium-packaging-private-label.png" alt="Belgium private-label packaging development for henna, indigo, herbs and natural hair-colour products" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center" /></figure>
      <div><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36]">Packaging & buyer-brand development</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.07]">Formats for Belgian retail,<span className="block text-[#A97B22]">professional and bulk channels</span></h2><p className="mt-7 leading-8 text-[#4C5F54]">Depending on product and quantity, retail packs may include 100 g, 200 g, 500 g and 1 kg formats; bulk options may include 20 kg and 25 kg packs with double-layer vacuum packaging where applicable.</p><p className="mt-5 leading-8 text-[#4C5F54]">Silver or gold metallized pouches, kraft formats, cartons, buyer-brand artwork, label coordination and Private Label presentation can be reviewed subject to material, printing, production and commercial feasibility. The Belgian buyer remains responsible for applicable labelling and market requirements.</p><Link href="/contact" className="mt-8 inline-flex border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23]">Discuss Private Label →</Link></div>
    </div></RevealOnScroll></section>

    <section className="bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878]">India → Belgium coordination</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.35rem,4.5vw,4.5rem)] font-semibold leading-[1.05]">A structured route from<span className="block text-[#E4C878]">enquiry to dispatch</span></h2><p className="mt-7 leading-8 text-white/65">Shipment planning can be coordinated for buyer destinations including Antwerp, Brussels and Ghent, subject to confirmed terms, carrier availability and the buyer’s or nominated freight forwarder’s instructions.</p></div><figure className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/30"><Image src="/images/export/belgium/belgium-export-freight-coordination.png" alt="India to Belgium export and freight coordination for bulk natural products" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover object-center" /></figure></div>
      <aside className="mt-12 border border-[#C9A962]/40 bg-[#F5F0E6] p-7 text-[#173B2A] sm:p-9"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">Documentation and importer responsibility</h3><p className="mt-4 text-[14px] leading-7 text-[#4C5F54]">Available documentation may be reviewed according to product and order requirements. Freight rates, schedules, transit, customs clearance, inspection, registration, regulatory acceptance and delivery dates are not guaranteed. The Belgian importer remains responsible for all applicable import and market obligations.</p></aside>
    </div></RevealOnScroll></section>

    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]">
      <div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36]">Buyer review information</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.6vw,4.6rem)] font-semibold leading-[1.06]">Export Documentation<span className="block text-[#A97B22]">for Belgium Buyers</span></h2><p className="mx-auto mt-7 max-w-[850px] leading-8 text-[#4C5F54]">Documents depend on the selected product, order structure and availability. Available commercial, product, packaging and shipment information can be coordinated for buyer and destination review without implying automatic Belgian or European Union regulatory compliance.</p></div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{documents.map((document, index) => <StaggerItem key={document.title} delay={(index % 4) * 80}><article className="h-full min-h-[260px] border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><div className="flex items-center justify-between"><span className="h-px w-12 bg-[#C9A962]" /><span className="font-[family-name:var(--font-playfair)] text-xl text-[#C9A962]/70">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-7 font-[family-name:var(--font-playfair)] text-[24px] font-semibold leading-tight">{document.title}</h3><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">{document.text}</p></article></StaggerItem>)}</div>
    </div></RevealOnScroll></section>

    <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]">
      <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Six commercial steps</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.7vw,4.7rem)] font-semibold leading-[1.05]">From Belgian Buyer Requirement<span className="block text-[#A97B22]">to Export Coordination</span></h2></div>
      <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="h-full min-h-[220px] border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><div className="flex items-center justify-between"><span className="h-px w-12 bg-[#C9A962]" /><span className="font-[family-name:var(--font-playfair)] text-xl text-[#C9A962]/70">{number}</span></div><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[24px] font-semibold leading-tight">{title}</h3><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div>
    </div></RevealOnScroll></section>

    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1280px]">
      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Major Belgian commercial locations</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.05]">Buyer and Distribution Context<span className="block text-[#A97B22]">Across Belgium</span></h2><p className="mt-7 max-w-[900px] text-[15px] leading-8 text-[#4C5F54]">These locations identify potential commercial and distribution contexts; they do not represent local premises, inventory, employees, agents or guaranteed relationships.</p>
      <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">{locations.map((location) => <article key={location.title} className="h-full min-h-[245px] border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[26px] font-semibold">{location.title}</h3><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">{location.text}</p></article>)}</div>
    </div></RevealOnScroll></section>

    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9F7F36]">Belgium sourcing questions</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.1rem,4.2vw,4.2rem)] font-semibold">Frequently asked questions</h2></div><div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">{faqs.map((faq) => <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3><p className="text-[14px] leading-7 text-[#4C5F54]">{faq.answer}</p></article>)}</div></div></RevealOnScroll></section>

    <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12"><GoldenParticles /><RevealOnScroll><div className="relative mx-auto max-w-[980px]"><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878]">Start a Belgium sourcing discussion</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4.5vw,4.5rem)] font-semibold leading-[1.06]">Plan your natural-product supply from India</h2><p className="mx-auto mt-7 max-w-[760px] leading-8 text-white/65">Share the product, quantity, specification, packaging, buyer-brand requirements and Belgian destination for a commercially focused review.</p><Link href="/contact" className="mt-9 inline-flex border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23]">Request a Belgium quote →</Link></div></RevealOnScroll></section>
    <FooterSection locale="en" /><FloatingContactButtons /><MagneticButtons /><PremiumCursor />
  </main>;
}
