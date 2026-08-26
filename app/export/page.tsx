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
  title: "Natural Products Exporter India | Henna, Indigo, Herbs & Spices",
  description:
    "Indian exporter and supplier of natural henna, indigo powder, botanical hair colors, Ayurvedic herbs and spices for bulk, wholesale, OEM and private-label buyers.",
  keywords: [
    "natural products exporter India",
    "natural products manufacturer India",
    "natural products supplier India",
    "Indian natural products exporter",
    "Indian botanical products exporter",
    "bulk natural products supplier",
    "wholesale natural products exporter",
    "private label natural products India",
    "OEM natural products manufacturer India",
    "natural products export company India",
    "natural henna exporter India",
    "henna powder exporter India",
    "natural henna powder manufacturer India",
    "natural henna powder supplier India",
    "Sojat henna exporter",
    "bulk henna powder supplier",
    "wholesale henna powder exporter",
    "private label henna powder manufacturer",
    "indigo powder exporter India",
    "natural indigo powder manufacturer India",
    "natural indigo powder supplier India",
    "bulk indigo powder exporter",
    "private label indigo powder India",
    "botanical hair color exporter",
    "natural henna hair colors exporter",
    "henna hair color manufacturer India",
    "private label botanical hair colors",
    "professional henna hair colors supplier",
    "Ayurvedic herbs exporter India",
    "Ayurvedic herbs manufacturer India",
    "Ayurvedic herbs supplier India",
    "bulk herbal powders exporter India",
    "private label Ayurvedic herbs",
    "Indian spices exporter India",
    "Indian spices manufacturer India",
    "Indian spices supplier India",
    "bulk spices exporter India",
    "wholesale Indian spices supplier",
    "private label spices India",
    "exporter for importers and distributors",
    "natural products wholesale supplier",
    "natural products private label manufacturer",
    "retail packaging natural products",
    "bulk packaging natural products",
    "export documentation support India",
    "international shipment coordination India",
    "FCL natural products exporter",
    "LCL natural products exporter",
    "natural products exporter USA",
    "natural products exporter Canada",
    "natural products exporter UK",
    "natural products exporter Europe",
    "natural products exporter UAE",
    "natural products exporter Middle East",
    "natural products exporter Asia Pacific",
    "natural products exporter Australia",
    "Indian exporter for cosmetic brands",
    "Indian exporter for salon brands",
    "Indian exporter for wellness brands",
    "natural product contract manufacturing India",
    "custom branded natural products India",
    "buyer brand packaging exporter India",
    "herbal products exporter India",
    "botanical powders exporter India",
    "international natural products supplier",
    "India export supplier for distributors",
    "India export supplier for wholesalers",
    "Shivesh International exporter",
  ],
  alternates: {
    canonical: "/export",
  },
  openGraph: {
    title: "Natural Products Exporter India | Shivesh International",
    description:
      "Bulk, wholesale, OEM and private-label export support for Indian henna, indigo, botanical hair colors, Ayurvedic herbs and spices.",
    url: "https://shiveshinternational.com/export",
    type: "website",
    locale: "en_IN",
    siteName: "Shivesh International",
    images: [
      {
        url: "/images/export/export-hero-global-network-final-v3.png",
        width: 1536,
        height: 1024,
        alt: "Shivesh International natural products exporter from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Products Exporter India | Shivesh International",
    description:
      "Indian supplier of henna, indigo, botanical hair colors, Ayurvedic herbs and spices for global B2B buyers.",
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

const exportPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://shiveshinternational.com/export#webpage",
      url: "https://shiveshinternational.com/export",
      name: "Natural Products Exporter India",
      description:
        "Export services for natural henna, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for international B2B buyers.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://shiveshinternational.com/export#breadcrumb",
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
      ],
    },
    {
      "@type": "ItemList",
      name: "Natural Products Export Portfolio",
      itemListElement: [
        ["Natural Henna Powder", "/products/natural-henna-powder"],
        ["Natural Indigo Powder", "/products/natural-indigo-powder"],
        ["Natural Henna Hair Colors", "/products/natural-henna-hair-colors"],
        ["Ayurvedic Indian Herbs", "/products/ayurvedic-indian-herbs"],
        ["Indian Spices", "/products/indian-spices"],
      ].map(([name, path], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: `https://shiveshinternational.com${path}`,
      })),
    },
  ],
};

const buyerCategories = [
  {
    number: "01",
    title: "Importers",
    description:
      "Support for businesses sourcing Indian natural products for distribution, wholesale supply or further commercial development in their market.",
  },
  {
    number: "02",
    title: "Distributors",
    description:
      "Product and packing solutions for distributors building regional networks across beauty, wellness, herbal and food-related categories.",
  },
  {
    number: "03",
    title: "Wholesalers",
    description:
      "Bulk and wholesale-oriented options for buyers requiring commercially practical quantities and suitable packing formats.",
  },
  {
    number: "04",
    title: "Retail & Supermarket Buyers",
    description:
      "Retail-ready product support for buyers seeking selected natural products in suitable consumer packaging and presentation.",
  },
  {
    number: "05",
    title: "Cosmetic Brands",
    description:
      "Natural henna, indigo and botanical hair-color solutions for cosmetic businesses developing or expanding their product portfolio.",
  },
  {
    number: "06",
    title: "Salon Brands",
    description:
      "Professional product support for salon groups and hair-care brands seeking botanical powders and natural color categories.",
  },
  {
    number: "07",
    title: "Wellness Companies",
    description:
      "Ayurvedic herbs, botanical ingredients and natural-product options for wellness, herbal and personal-care businesses.",
  },
  {
    number: "08",
    title: "Private-Label Businesses",
    description:
      "Buyer-brand support covering selected products, packaging formats, label coordination and export-oriented presentation.",
  },
];

const marketRegions = [
  {
    number: "01",
    region: "North America",
    description:
      "Business enquiries from the United States, Canada, Mexico and neighbouring markets seeking botanical, cosmetic, wellness and food-related products.",
  },
  {
    number: "02",
    region: "Europe",
    description:
      "Support for importers, distributors and private-label brands across European markets with product and packaging requirements.",
  },
  {
    number: "03",
    region: "Middle East",
    description:
      "Natural-product supply support for regional distributors, salons, cosmetic businesses, retailers and wholesale buyers.",
  },
  {
    number: "04",
    region: "Asia-Pacific",
    description:
      "Buyer-oriented solutions for beauty, wellness, herbal and food businesses across selected Asia-Pacific markets.",
  },
  {
    number: "05",
    region: "Latin America",
    description:
      "Product and private-label enquiry support for importers and distributors developing natural-product categories.",
  },
  {
    number: "06",
    region: "Africa",
    description:
      "Commercial support for selected buyers sourcing Indian botanical powders, hair-care products, herbs and spices.",
  },
];

const privateLabelCapabilities = [
  {
    title: "Buyer Brand Identity",
    description:
      "Selected products can be prepared under the buyer’s own brand name, subject to order quantity, product category and packaging feasibility.",
  },
  {
    title: "Custom Label Coordination",
    description:
      "Support for coordinating buyer-supplied artwork, product names, shade names, pack details and commercially required label information.",
  },
  {
    title: "Pouch & Box Presentation",
    description:
      "Selected products may be prepared in metallic pouches, printed pouches, retail boxes, jars or other suitable formats.",
  },
  {
    title: "Product Range Development",
    description:
      "Buyers can discuss a focused collection across henna, indigo, botanical hair colors, herbs and spices.",
  },
  {
    title: "Export Carton Preparation",
    description:
      "Finished retail or wholesale packs can be organised into suitably identified cartons for commercial dispatch.",
  },
  {
    title: "Long-Term Supply Planning",
    description:
      "Repeat-order and distribution requirements can be discussed according to product availability and commercial feasibility.",
  },
];

const packagingOptions = [
  {
    size: "100 g",
    type: "Retail Pack",
    description:
      "Suitable for selected consumer-facing henna, indigo, botanical hair-color, herb and spice products.",
  },
  {
    size: "200–250 g",
    type: "Retail Pack",
    description:
      "A practical format for personal-care, salon, herbal and selected food-category products.",
  },
  {
    size: "500 g",
    type: "Retail / Professional",
    description:
      "Suitable for larger consumer packs, salons, professional users and selected wholesale applications.",
  },
  {
    size: "1 kg",
    type: "Professional Pack",
    description:
      "Designed for salons, professional users, small wholesalers and businesses requiring larger quantities.",
  },
  {
    size: "5 kg",
    type: "Wholesale Pack",
    description:
      "A commercially practical option for distributors, salons, repackers and wholesale buyers.",
  },
  {
    size: "20–25 kg",
    type: "Bulk Pack",
    description:
      "Bulk packing support for eligible product categories and commercial ingredient requirements.",
  },
  {
    size: "Custom",
    type: "Buyer Requirement",
    description:
      "Alternative pack sizes may be reviewed according to product category, quantity and packaging feasibility.",
  },
  {
    size: "Private Label",
    type: "Buyer Branding",
    description:
      "Selected packaging formats can be coordinated for qualified buyer-brand and market requirements.",
  },
];

function ExportSectionImage({
  src,
  alt,
  dark = false,
}: {
  src: string;
  alt: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`group relative mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-[30px] border p-2 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:p-3 ${
        dark
          ? "border-[#C9A962]/35 bg-white/[0.045]"
          : "border-[#C9A962]/35 bg-[#f5f0e6]"
      }`}
    >
      <div className="relative overflow-hidden rounded-[22px] bg-[#0b261c]">
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          sizes="(min-width: 1280px) 1180px, (min-width: 768px) 90vw, 94vw"
          className="h-auto w-full object-contain transition-transform duration-1000 group-hover:scale-[1.015]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b14]/16 via-transparent to-transparent" />
      </div>
    </div>
  );
}

export default function ExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(exportPageStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      {/* HERO */}
      <section id="natural-products-exporter-india" className="relative isolate min-h-[72vh] overflow-hidden bg-[#071b14]">
        <Image
          src="/images/export/export-hero-global-network-final-v3.png"
          alt="Natural products exporter from India supplying henna indigo herbs and spices worldwide"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/62 via-[#102f23]/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />

        <div aria-hidden="true" className="absolute inset-0 opacity-20">
          <div className="absolute left-[12%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#E4C878] shadow-[0_0_20px_rgba(228,200,120,0.95)]" />
          <div className="absolute left-[39%] top-[29%] h-2 w-2 rounded-full bg-[#E4C878] shadow-[0_0_18px_rgba(228,200,120,0.85)]" />
          <div className="absolute right-[24%] top-[42%] h-2.5 w-2.5 rounded-full bg-[#E4C878] shadow-[0_0_20px_rgba(228,200,120,0.95)]" />
          <div className="absolute bottom-[28%] right-[13%] h-2 w-2 rounded-full bg-[#E4C878] shadow-[0_0_18px_rgba(228,200,120,0.85)]" />
        </div>

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Manufacturer · Exporter · Supplier from India
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[680px] font-[family-name:var(--font-playfair)] text-[clamp(3rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Natural Products Exporter
                <br />

                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  from India to the World
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Shivesh International manufactures, supplies and exports
                natural henna powder, indigo powder, botanical hair colors,
                Ayurvedic herbs and Indian spices for importers, distributors,
                wholesalers and private-label buyers worldwide.
              </p>
            </StaggerItem>

            <StaggerItem delay={360}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#export-introduction"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  Explore Export Support
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/32 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Send Export Enquiry
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-9 grid max-w-[660px] gap-3 sm:grid-cols-3">
                {[
                  ["Bulk", "Supply Support"],
                  ["Private Label", "Buyer Branding"],
                  ["Global", "Business Enquiries"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="border border-white/12 bg-black/12 px-4 py-4 backdrop-blur-md"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">
                      {value}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#F5F0E6]/48">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* EXPORT INTRODUCTION */}
      <section
        id="export-introduction"
        className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="sticky top-32">
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Our Export Philosophy
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Export Is More Than Moving Products across Borders
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-lg leading-9 text-[#4c5f54]">
                International business requires more than a product catalogue
                and a quotation. It requires clear communication, practical
                planning, suitable documentation and an understanding of the
                buyer&apos;s commercial objectives.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                At Shivesh International, we approach export enquiries as the
                beginning of a potential long-term business relationship.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                We support selected natural product categories including
                natural henna powder, natural indigo powder, botanical hair
                colors, Ayurvedic Indian herbs and Indian spices.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* EXPORT PRINCIPLES */}
      <section id="export-business-process" className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand the Requirement",
                description:
                  "We review the required product, quantity, packaging, destination and buyer expectations.",
              },
              {
                number: "02",
                title: "Plan a Suitable Solution",
                description:
                  "Product and packing options are discussed according to the commercial enquiry.",
              },
              {
                number: "03",
                title: "Communicate Clearly",
                description:
                  "We aim to keep specifications, documentation and commercial expectations clear.",
              },
              {
                number: "04",
                title: "Build for the Long Term",
                description:
                  "Our focus is on dependable relationships rather than isolated transactions.",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title} delay={index * 100}>
                <article className="group relative h-full overflow-hidden border border-[#C9A962]/25 bg-[#f5f0e6] p-7 transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_25px_65px_rgba(0,0,0,0.13)] sm:p-8">
                  <p className="font-[family-name:var(--font-playfair)] text-5xl font-semibold text-[#C9A962]/35">
                    {item.number}
                  </p>

                  <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-px w-14 bg-[#C9A962]" />

                  <p className="mt-5 leading-7 text-[#4c5f54]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* BUYER CATEGORIES */}
      <section id="export-buyers" className="bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Who We Support
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Export Solutions for Different Business Models
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {buyerCategories.map((buyer, index) => (
                <StaggerItem key={buyer.title} delay={(index % 4) * 100}>
                  <article className="group relative h-full min-h-[315px] overflow-hidden rounded-[26px] border border-[#C9A962]/20 bg-white/[0.035] p-7 transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962]/65 hover:bg-white/[0.06]">
                    <p className="font-[family-name:var(--font-playfair)] text-6xl font-semibold text-[#C9A962]/20">
                      {buyer.number}
                    </p>

                    <h3 className="mt-7 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                      {buyer.title}
                    </h3>

                    <div className="mt-5 h-px w-14 bg-[#C9A962]" />

                    <p className="mt-6 leading-8 text-[#F5F0E6]/64">
                      {buyer.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* GLOBAL MARKET REGIONS */}
      <section id="global-export-markets" className="relative overflow-hidden bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C9A962]/10 blur-[140px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                  Global Market Support
                </p>

                <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Supporting Enquiries across International Regions
                </h2>

                <p className="mt-7 text-lg leading-9 text-[#4c5f54]">
                  We welcome business enquiries from different regions and
                  review every opportunity according to the product,
                  destination market, packing requirement and commercial
                  feasibility.
                </p>

                <p className="mt-5 text-lg leading-9 text-[#4c5f54]">
                  The regions shown represent the markets from which relevant
                  export enquiries may be supported; they should not be
                  interpreted as a claim that every country is currently served.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/export/europe"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Europe
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/asia-pacific"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Asia-Pacific
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/china"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to China
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/taiwan"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Taiwan
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/south-korea"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to South Korea
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/thailand"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Thailand
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/vietnam"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Vietnam
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/singapore"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Singapore
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/italy"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Italy
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/spain"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Spain
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/austria"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Austria
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/finland"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Finland
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/netherlands"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Netherlands
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/poland"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Poland
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/norway"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Norway
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/brazil"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Brazil
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/argentina"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Argentina
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/usa"
                    className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
                  >
                    Explore Export to USA
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/uk"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to UK
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/uae"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to UAE
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/germany"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Germany
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/france"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to France
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/australia"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Australia
                    <span>→</span>
                  </Link>
                  <Link
                    href="/export/japan"
                    className="inline-flex items-center gap-4 border border-[#173B2A]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173B2A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#A97B22]"
                  >
                    Explore Export to Japan
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {marketRegions.map((market, index) => (
                  <StaggerItem
                    key={market.region}
                    delay={(index % 2) * 100}
                  >
                    <article className="group h-full border border-[#C9A962]/25 bg-[#ede5d7] p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]">
                      <p className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/45">
                        {market.number}
                      </p>

                      <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                        {market.region}
                      </h3>

                      <p className="mt-4 leading-7 text-[#4c5f54]">
                        {market.description}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PRIVATE LABEL EXPORT */}
      <section id="private-label-export" className="bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Private-Label Export
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Helping Buyers Build Products under Their Own Brand
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Selected products can be coordinated for buyer-brand packaging,
                subject to product category, quantity, pack format, artwork and
                commercial feasibility.
              </p>
            </div>

            <ExportSectionImage
              src="/images/export/export-private-label-packaging-final-v1.png"
              alt="Private label natural products packaging for international importers and distributors"
              dark
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {privateLabelCapabilities.map((item, index) => (
                <StaggerItem key={item.title} delay={(index % 3) * 100}>
                  <article className="group relative h-full overflow-hidden rounded-[25px] border border-[#C9A962]/20 bg-white/[0.04] p-7 transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962]/65 hover:bg-white/[0.065]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A962]/50 text-xl text-[#C9A962]">
                      ✓
                    </div>

                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                      {item.title}
                    </h3>

                    <div className="mt-5 h-px w-14 bg-[#C9A962]" />

                    <p className="mt-6 leading-8 text-[#F5F0E6]/64">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PACKAGING OPTIONS */}
      <section id="export-packaging" className="bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Export Packaging Options
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Packaging Formats for Retail, Professional and Bulk Buyers
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Final availability depends on the product, order quantity,
                packaging material and private-label requirement.
              </p>
            </div>

            <ExportSectionImage
              src="/images/export/export-packaging-options-final-v1.png"
              alt="Retail wholesale and bulk packaging formats for natural products export from India"
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {packagingOptions.map((option, index) => (
                <StaggerItem key={option.size} delay={(index % 4) * 80}>
                  <article className="group h-full rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-6 text-center transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962] hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
                    <p className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#9f7f36]">
                      {option.size}
                    </p>

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9f7f36]">
                      {option.type}
                    </p>

                    <div className="mx-auto mt-5 h-px w-14 bg-[#C9A962]" />

                    <p className="mt-5 leading-7 text-[#4c5f54]">
                      {option.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

            {/* EXPORT DOCUMENTATION */}
      <section id="export-documentation" className="bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Export Documentation
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Documents Supporting International Shipments
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Documentation requirements vary according to the product,
                shipment method, destination country and buyer instructions.
                Relevant documents are reviewed for each commercial order.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  shortName: "INV",
                  title: "Commercial Invoice",
                  description:
                    "Commercial details covering the exporter, buyer, products, quantities, values, currency and agreed transaction terms.",
                },
                {
                  shortName: "PL",
                  title: "Packing List",
                  description:
                    "Shipment packing information including carton count, pack configuration, net weight, gross weight and dimensions where applicable.",
                },
                {
                  shortName: "COO",
                  title: "Certificate of Origin",
                  description:
                    "Origin documentation may be arranged where required and applicable to the shipment or destination market.",
                },
                {
                  shortName: "COA",
                  title: "Certificate of Analysis",
                  description:
                    "Product or batch-related analytical information can be provided according to the relevant product and agreed specification.",
                },
                {
                  shortName: "MSDS",
                  title: "Material Safety Data Sheet",
                  description:
                    "Safety, handling, storage and transport-related information for applicable products and commercial requirements.",
                },
                {
                  shortName: "TDS",
                  title: "Technical Data Sheet",
                  description:
                    "A structured summary of product characteristics, typical specifications, applications, packaging and storage guidance.",
                },
                {
                  shortName: "LAB",
                  title: "Laboratory Test Report",
                  description:
                    "Relevant analytical reports may be shared according to the product, tested parameters, buyer requirement and commercial relevance.",
                },
                {
                  shortName: "PHYTO",
                  title: "Phytosanitary Certificate",
                  description:
                    "May be arranged for applicable agricultural products where required by the destination country and competent authority.",
                },
                {
                  shortName: "BL/AWB",
                  title: "Transport Document",
                  description:
                    "Bill of Lading, Air Waybill or the relevant carrier document is generated according to the selected shipment method.",
                },
              ].map((document, index) => (
                <StaggerItem
                  key={document.title}
                  delay={(index % 3) * 90}
                >
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#C9A962]/20 bg-white/[0.04] p-6 transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962]/65 hover:bg-white/[0.065] hover:shadow-[0_30px_80px_rgba(0,0,0,0.26)]">
                    <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[50%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-[1100ms] group-hover:left-[145%]" />

                    <div className="relative">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#173b2a] px-2 text-center font-[family-name:var(--font-playfair)] text-base font-semibold text-[#E4C878]">
                        {document.shortName}
                      </div>

                      <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                        {document.title}
                      </h3>

                      <div className="mt-5 h-px w-14 bg-[#C9A962]" />

                      <p className="mt-5 leading-7 text-[#F5F0E6]/65">
                        {document.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#F5F0E6]/45">
              Document availability and applicability must be confirmed for the
              relevant product, order, destination country, certification scope
              and shipment requirement.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* SHIPPING OPTIONS */}
      <section id="international-shipping" className="bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Shipment Coordination
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Flexible Shipment Methods for Different Order Requirements
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                The most suitable shipment method depends on order volume,
                destination, urgency, cost expectations and the nature of the
                products being supplied.
              </p>
            </div>

            <ExportSectionImage
              src="/images/export/export-shipment-coordination-final-v1.png"
              alt="Natural product export cartons coordinated for FCL LCL air freight and international shipment"
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Sea Freight — FCL",
                  description:
                    "Full-container shipment planning for larger commercial orders where product quantity supports dedicated container movement.",
                },
                {
                  number: "02",
                  title: "Sea Freight — LCL",
                  description:
                    "Less-than-container shipment coordination for eligible commercial orders that do not require a complete container.",
                },
                {
                  number: "03",
                  title: "Air Freight",
                  description:
                    "Faster shipment support for eligible orders where delivery time is more important than sea-freight economics.",
                },
                {
                  number: "04",
                  title: "International Courier",
                  description:
                    "Courier options may be considered for samples, documents and eligible small consignments, subject to carrier acceptance.",
                },
                {
                  number: "05",
                  title: "Buyer-Nominated Forwarder",
                  description:
                    "Orders may be coordinated with the buyer’s nominated freight forwarder according to agreed responsibilities and instructions.",
                },
                {
                  number: "06",
                  title: "Transport to Logistics Point",
                  description:
                    "Commercial cartons may be transferred to the designated warehouse, cargo terminal, port-linked facility or forwarding location.",
                },
              ].map((option, index) => (
                <StaggerItem key={option.title} delay={(index % 3) * 100}>
                  <article className="group h-full rounded-[25px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962] hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
                    <p className="font-[family-name:var(--font-playfair)] text-5xl font-semibold text-[#C9A962]/40">
                      {option.number}
                    </p>

                    <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {option.title}
                    </h3>

                    <div className="mt-5 h-px w-14 bg-[#C9A962]" />

                    <p className="mt-5 leading-7 text-[#4c5f54]">
                      {option.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* EXPORT ENQUIRY WORKFLOW */}
      <section id="export-enquiry-process" className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <div className="sticky top-32">
                  <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                    Export Enquiry Process
                  </p>

                  <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                    From Initial Enquiry to Shipment Preparation
                  </h2>

                  <p className="mt-7 text-lg leading-9 text-[#4c5f54]">
                    A complete enquiry helps us review product suitability,
                    packing feasibility, documentation requirements and
                    commercial expectations more efficiently.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    number: "01",
                    title: "Share Your Requirement",
                    description:
                      "Provide the product name, quantity, pack size, destination country, branding needs and any required technical documents.",
                  },
                  {
                    number: "02",
                    title: "Product & Feasibility Review",
                    description:
                      "Our team reviews the product category, availability, packaging, order quantity and relevant destination requirements.",
                  },
                  {
                    number: "03",
                    title: "Quotation & Commercial Discussion",
                    description:
                      "Pricing, packing, estimated production planning, payment terms and delivery responsibilities are discussed.",
                  },
                  {
                    number: "04",
                    title: "Sample or Pre-Production Review",
                    description:
                      "Where commercially suitable, product samples, artwork or packaging details may be reviewed before bulk production.",
                  },
                  {
                    number: "05",
                    title: "Order Confirmation",
                    description:
                      "Production proceeds after specifications, commercial terms, artwork and relevant order details are confirmed.",
                  },
                  {
                    number: "06",
                    title: "Production & Packing",
                    description:
                      "Products are processed and packed according to the confirmed order, selected format and production plan.",
                  },
                  {
                    number: "07",
                    title: "Documentation & Dispatch",
                    description:
                      "Applicable commercial and technical documents are prepared before shipment coordination and dispatch.",
                  },
                ].map((step, index) => (
                  <StaggerItem key={step.title} delay={(index % 3) * 80}>
                    <article className="group grid gap-5 border border-[#C9A962]/25 bg-[#ede5d7] p-6 transition-all duration-700 hover:translate-x-2 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)] sm:grid-cols-[80px_1fr] sm:items-start">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A962]/55 bg-[#102f23] font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                          {step.title}
                        </h3>

                        <p className="mt-3 leading-7 text-[#4c5f54]">
                          {step.description}
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

      {/* EXPORT SUPPORT */}
      <section id="export-buyer-support" className="bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Buyer Support
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Professional Support throughout the Export Process
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Product Guidance",
                  description:
                    "Support in identifying suitable products and packing formats for the intended business model.",
                },
                {
                  title: "Private-Label Coordination",
                  description:
                    "Communication relating to branding, artwork, pack sizes and selected buyer-specific requirements.",
                },
                {
                  title: "Document Review",
                  description:
                    "Relevant commercial and technical-document requirements are reviewed according to the order.",
                },
                {
                  title: "Shipment Coordination",
                  description:
                    "Communication with the buyer, transporter or freight forwarder during dispatch preparation.",
                },
              ].map((support, index) => (
                <StaggerItem key={support.title} delay={index * 90}>
                  <article className="group h-full border border-[#C9A962]/20 bg-white/[0.04] p-7 text-center transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962]/65 hover:bg-white/[0.065]">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A962]/55 text-xl text-[#C9A962]">
                      ✓
                    </div>

                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {support.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#F5F0E6]/64">
                      {support.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* FINAL EXPORT CTA */}
      <section id="export-enquiry" className="relative overflow-hidden bg-[#071b14] px-6 py-28 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              International Business Enquiries
            </p>

            <h2 className="mt-7 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Your Natural Products Business Together
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#F5F0E6]/65">
              Share your required products, destination country, pack sizes,
              branding requirements, expected quantity and document needs.
              Minimum order quantity is generally 200 kg per item. Our export
              team will review your enquiry and advise the next practical steps.
            </p>

            <Link
              href="/contact"
              className="mt-11 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_20px_55px_rgba(201,169,98,0.3)]"
            >
              Send Your Export Enquiry
              <span className="text-lg">→</span>
            </Link>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/55">
              <Link href="/products/natural-henna-powder" className="transition-colors hover:text-[#C9A962]">Natural Henna Powder</Link>
              <Link href="/products/natural-indigo-powder" className="transition-colors hover:text-[#C9A962]">Natural Indigo Powder</Link>
              <Link href="/products/ayurvedic-indian-herbs" className="transition-colors hover:text-[#C9A962]">Ayurvedic Herbs</Link>
              <Link href="/products/indian-spices" className="transition-colors hover:text-[#C9A962]">Indian Spices</Link>
              <Link href="/infrastructure" className="transition-colors hover:text-[#C9A962]">Infrastructure</Link>
              <Link href="/certifications" className="transition-colors hover:text-[#C9A962]">Certifications</Link>
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
