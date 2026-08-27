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

export const metadata: Metadata = {
  title: "Buyer Resources | Export Catalogues & Product Guides",
  description:
    "Access Shivesh International buyer resources, export catalogues, product guides, packaging information and private-label support for henna, indigo, herbal products and Indian spices.",
  keywords: [
    "henna powder catalogue",
    "indigo powder catalogue",
    "natural hair color catalogue",
    "Ayurvedic herbs catalogue",
    "Indian spices catalogue",
    "natural products export catalogue",
    "private label product catalogue",
    "bulk henna supplier catalogue",
    "export buyer resources",
    "henna product specifications",
    "indigo product specifications",
    "natural products packaging guide",
    "private label packaging guide",
    "Indian exporter product catalogue",
    "Shivesh International catalogue",
  ],
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Buyer Resources | Shivesh International",
    description:
      "Export catalogues, product guides, packaging details and buyer resources for international importers, distributors and private-label brands.",
    url: "https://shiveshinternational.com/resources",
    type: "website",
    locale: "en_IN",
    siteName: "Shivesh International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Resources | Shivesh International",
    description:
      "Product catalogues, export information and private-label resources for professional international buyers.",
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
const buyerResources = [
  {
    code: "01",
    category: "Product Guide",
    title: "Natural Henna Powder",
    description:
      "Explore Natural Henna Powder specifications, Sojat origin, applications, bulk packaging and private-label supply information.",
    href: "/products/natural-henna-powder",
    cta: "View Henna Guide",
    external: false,
  },
  {
    code: "02",
    category: "Product Guide",
    title: "Natural Indigo Powder",
    description:
      "Explore Natural Indigo Powder specifications, hair-colour applications, bulk packaging and OEM supply information.",
    href: "/products/natural-indigo-powder",
    cta: "View Indigo Guide",
    external: false,
  },
  {
    code: "03",
    category: "Shade Portfolio",
    title: "Natural Henna Hair Colors",
    description:
      "Review the complete botanical hair-colour portfolio, shade selection guidance and professional buyer information.",
    href: "/products/natural-henna-hair-colors",
    cta: "Explore Hair Colors",
    external: false,
  },
  {
    code: "04",
    category: "Product Range",
    title: "Henna-Based Hair Colors",
    description:
      "Explore our professional Henna-Based Hair Colors range, commercial shade options, bulk formats and private-label supply support.",
    href: "/products/henna-based-hair-colors",
    cta: "Explore Hair Colors",
    external: false,
  },
  {
    code: "05",
    category: "Product Range",
    title: "Ayurvedic Indian Herbs",
    description:
      "Explore Ayurvedic Indian herbs and botanical powders available for wellness, cosmetic, bulk and private-label buyers.",
    href: "/products/ayurvedic-indian-herbs",
    cta: "View Herbal Range",
    external: false,
  },
  {
    code: "06",
    category: "Product Range",
    title: "Indian Spices",
    description:
      "Review Indian whole and powdered spices offered for importers, distributors, food businesses and private-label brands.",
    href: "/products/indian-spices",
    cta: "View Spice Range",
    external: false,
  },
  {
    code: "CAT",
    category: "Product Catalogue",
    title: "Shivesh International Product Catalogue",
    description:
      "Explore our Natural Henna Powder, Natural Indigo Powder, botanical hair colours, Ayurvedic Indian Herbs and Indian Spices portfolio.",
    href: "/catalogues/Shivesh-International-Product-Catalogue.pdf",
    cta: "View Catalogue",
    external: true,
  },
  
  {
    code: "07",
    category: "Buyer Support",
    title: "OEM & Private Label",
    description:
      "Discuss custom packaging, buyer-supplied artwork, retail packs, professional formats and bulk export requirements.",
    href: "/contact",
    cta: "Request Buyer Support",
    external: false,
  },
  {
    code: "USA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to the USA",
    description:
      "Explore USA-focused bulk, wholesale, OEM, private-label, packaging and India-to-USA export coordination information for professional buyers.",
    href: "/export/usa",
    cta: "View USA Export Guide",
    external: false,
  },
  {
    code: "EUROPE",
    category: "Export Regional Hub",
    title: "Natural Products Export Supply Across Europe",
    description:
      "Explore Europe-focused supply information for natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices, including bulk, wholesale, OEM, private-label packaging and India-to-Europe export coordination for professional buyers.",
    href: "/export/europe",
    cta: "View Europe Export Hub",
    external: false,
  },
  {
    code: "ASIA-PACIFIC",
    category: "Export Regional Hub",
    title: "Natural Products Export Supply Across Asia-Pacific",
    description:
      "Explore Asia-Pacific-focused supply information for natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices, including bulk and private-label export coordination from India.",
    href: "/export/asia-pacific",
    cta: "View Asia-Pacific Export Hub",
    external: false,
  },
  {
    code: "CHINA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to China",
    description:
      "Explore China-focused bulk, wholesale and private-label supply information for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/china",
    cta: "View China Export Guide",
    external: false,
  },
  {
    code: "TAIWAN",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Taiwan",
    description:
      "Explore Taiwan-focused bulk, wholesale and private-label supply information for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/taiwan",
    cta: "View Taiwan Export Guide",
    external: false,
  },
  {
    code: "SOUTH KOREA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to South Korea",
    description:
      "Explore South Korea-focused bulk, wholesale and private-label supply information for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/south-korea",
    cta: "View South Korea Export Guide",
    external: false,
  },
  {
    code: "THAILAND",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Thailand",
    description:
      "Explore Thailand-focused bulk, wholesale, OEM and private-label supply for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/thailand",
    cta: "View Thailand Export Guide",
    external: false,
  },
  {
    code: "VIETNAM",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Vietnam",
    description:
      "Explore Vietnam-focused bulk, wholesale, OEM and private-label supply for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/vietnam",
    cta: "View Vietnam Export Guide",
    external: false,
  },
  {
    code: "SINGAPORE",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Singapore",
    description:
      "Explore Singapore-focused bulk, wholesale, OEM and private-label supply for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/singapore",
    cta: "View Singapore Export Guide",
    external: false,
  },
  {
    code: "NEW ZEALAND",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to New Zealand",
    description:
      "Explore New Zealand-focused bulk, wholesale, OEM and private-label supply for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/new-zealand",
    cta: "View New Zealand Export Guide",
    external: false,
  },
  {
    code: "RUSSIA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Russia",
    description:
      "Explore Russia-focused bulk, wholesale, OEM and private-label enquiry information for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices, subject to case-specific trade review.",
    href: "/export/russia",
    cta: "View Russia Export Guide",
    external: false,
  },
  {
    code: "ITALY",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Italy",
    description:
      "Explore Italy-focused bulk, wholesale, OEM, private-label packaging and India-to-Italy export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/italy",
    cta: "View Italy Export Guide",
    external: false,
  },
  {
    code: "SPAIN",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Spain",
    description:
      "Explore Spain-focused bulk, wholesale, OEM, private-label packaging and India-to-Spain export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/spain",
    cta: "View Spain Export Guide",
    external: false,
  },
  {
    code: "AUSTRIA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Austria",
    description:
      "Explore Austria-focused bulk, wholesale, OEM, private-label, packaging and India-to-Austria export coordination information for professional buyers.",
    href: "/export/austria",
    cta: "View Austria Export Guide",
    external: false,
  },
  {
    code: "FINLAND",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Finland",
    description:
      "Explore Finland-focused bulk, wholesale, OEM, private-label packaging and India-to-Finland export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/finland",
    cta: "View Finland Export Guide",
    external: false,
  },
  {
    code: "NETHERLANDS",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to the Netherlands",
    description:
      "Explore Netherlands-focused bulk, wholesale, OEM, private-label packaging and India-to-Netherlands export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/netherlands",
    cta: "View Netherlands Export Guide",
    external: false,
  },
  {
    code: "POLAND",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Poland",
    description:
      "Explore Poland-focused bulk, wholesale, OEM, private-label packaging and India-to-Poland export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/poland",
    cta: "View Poland Export Guide",
    external: false,
  },
  {
    code: "NORWAY",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Norway",
    description:
      "Explore Norway-focused bulk, wholesale, OEM, private-label packaging and India-to-Norway export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/norway",
    cta: "View Norway Export Guide",
    external: false,
  },
  {
    code: "BRAZIL",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Brazil",
    description:
      "Explore Brazil-focused bulk, wholesale, OEM, private-label packaging and India-to-Brazil export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/brazil",
    cta: "View Brazil Export Guide",
    external: false,
  },
  {
    code: "ARGENTINA",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Argentina",
    description:
      "Explore Argentina-focused bulk, wholesale, private-label packaging and India-to-Argentina export coordination for professional buyers sourcing henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    href: "/export/argentina",
    cta: "View Argentina Export Guide",
    external: false,
  },
  {
    code: "UK",
    category: "Export Market Guide",
    title: "Export Supply to the United Kingdom",
    description:
      "Review UK-focused bulk, wholesale, OEM, private-label, packaging and export coordination information for professional buyers.",
    href: "/export/uk",
    cta: "View UK Export Guide",
    external: false,
  },
  {
    code: "UAE",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to the UAE",
    description:
      "Explore UAE-focused bulk, wholesale, OEM, private-label, packaging and India-to-UAE export coordination information for professional buyers.",
    href: "/export/uae",
    cta: "View UAE Export Guide",
    external: false,
  },
  {
    code: "GERMANY",
    category: "Export Market Guide",
    title: "Natural Products Export Supply to Germany",
    description:
      "Explore Germany-focused bulk, wholesale, OEM, private-label, packaging and India-to-Germany export coordination information for professional buyers.",
    href: "/export/germany",
    cta: "View Germany Export Guide",
    external: false,
  },
  {
    code: "FRANCE",
    category: "Export Market Guide",
    title: "Botanical and Natural Product Supply for France",
    description:
      "Explore France-focused bulk and wholesale supply, OEM, private label, custom packaging and structured India-to-France export coordination for professional buyers.",
    href: "/export/france",
    cta: "View France Export Guide",
    external: false,
  },
  {
    code: "AUSTRALIA",
    category: "Export Market Guide",
    title: "Botanical and Natural Product Supply for Australia",
    description:
      "Explore Australia-focused bulk and wholesale supply, OEM, private label, packaging and structured India-to-Australia export coordination for professional buyers.",
    href: "/export/australia",
    cta: "View Australia Export Guide",
    external: false,
  },
  {
    code: "JAPAN",
    category: "Export Market Guide",
    title: "Botanical and Natural Product Supply for Japan",
    description:
      "Explore Japan-focused bulk and wholesale supply, OEM, private label, packaging and structured India-to-Japan export coordination for professional buyers.",
    href: "/export/japan",
    cta: "View Japan Export Guide",
    external: false,
  },
];
export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <Navbar />

      {/* =====================================================
          BUYER RESOURCES HERO
      ===================================================== */}
      <section
        id="buyer-resources"
        className="relative isolate overflow-hidden bg-[#071B14] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-[#C9A962]/10 blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#C9A962]/[0.07] blur-[160px]"
        />

        <GoldenParticles />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div>
              <StaggerItem delay={0}>
                <div className="flex items-center gap-4">
                  <span className="h-px w-14 bg-[#C9A962]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878]">
                    International Buyer Support
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={100}>
                <h1 className="mt-7 max-w-[720px] font-[family-name:var(--font-playfair)] text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#F7F1E7]">
                  Buyer Resources
                  <span className="mt-2 block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                    for Global Business.
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem delay={200}>
                <p className="mt-7 max-w-[670px] text-[16px] font-light leading-[1.9] text-[#F5F0E6]/70 sm:text-[17px]">
                  Access product information, export catalogues, technical
                  guides, packaging options and private-label resources for
                  Natural Henna Powder, Natural Indigo Powder, botanical hair
                  colours, Ayurvedic Indian Herbs and Indian Spices.
                </p>
              </StaggerItem>

              <StaggerItem delay={300}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="#resource-library"
                    className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    Explore Resources
                    <span>↓</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 border border-[#F5F0E6]/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    Request Buyer Support
                    <span>→</span>
                  </Link>
                </div>
              </StaggerItem>

              <StaggerItem delay={380}>
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#F5F0E6]/45">
                  <span>Product Catalogues</span>
                  <span>Technical Guides</span>
                  <span>Private Label</span>
                  <span>Export Support</span>
                </div>
              </StaggerItem>
            </div>

            {/* RIGHT IMAGE — 1536 × 1024 = EXACT 3:2 FRAME */}
            <StaggerItem delay={180}>
              <div className="relative">
                <div className="absolute -inset-5 rounded-[32px] border border-[#C9A962]/18" />

                <div className="relative aspect-[3/2] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#102F23] shadow-[0_30px_80px_rgba(0,0,0,0.30)]">
                  <Image
                    src="/images/export/export-hero-global-network-final-v3.png"
                    alt="International buyer resources and natural products export support from Shivesh International"
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="max-w-[520px] border border-white/15 bg-[#0D2F22]/78 p-5 backdrop-blur-md">
                      <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#E4C878]">
                        Shivesh International
                      </p>

                      <p className="mt-3 font-[family-name:var(--font-playfair)] text-[24px] font-medium leading-tight text-[#F7F1E7] sm:text-[28px]">
                        Product Knowledge and Export Support for Professional
                        Buyers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>

      {/* BUYER RESOURCE LIBRARY */}
<section
  id="resource-library"
  className="relative overflow-hidden bg-[#F5F0E6] px-6 py-20 text-[#173B2A] sm:px-8 lg:px-12 lg:py-28"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-40 top-16 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
  />

  <RevealOnScroll>
    <div className="relative mx-auto max-w-[1500px]">
      {/* SECTION HEADING */}
      <div className="mx-auto max-w-[900px] text-center">
        <StaggerItem delay={0}>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#C9A962]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A97B22]">
              International Buyer Resources
            </p>

            <span className="h-px w-14 bg-[#C9A962]" />
          </div>
        </StaggerItem>

        <StaggerItem delay={100}>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Product Information
            <span className="mt-1 block text-[#A97B22]">
              for Professional Buyers
            </span>
          </h2>
        </StaggerItem>

        <StaggerItem delay={180}>
          <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">
            Explore product specifications, applications, bulk supply,
            packaging and private-label information prepared for importers,
            distributors, wholesalers and international brands.
          </p>
        </StaggerItem>
      </div>

      {/* RESOURCE CARDS */}
      <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
        {buyerResources.map((resource, index) => (
          <StaggerItem
            key={resource.title}
            delay={260 + (index % 3) * 90}
            className={
              index === buyerResources.length - 1 &&
              buyerResources.length % 3 === 1
                ? "xl:col-start-2"
                : ""
            }
          >
            <article className="group flex h-full min-h-[330px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/65 hover:shadow-[0_26px_60px_rgba(20,50,38,0.13)] sm:p-8">
              {/* CARD TOP */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A97B22]">
                    {resource.category}
                  </p>

                  <span className="mt-4 block h-px w-12 bg-[#C9A962]" />
                </div>

                <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/55">
                  {resource.code}
                </span>
              </div>

              {/* CARD CONTENT */}
              <h3 className="mt-8 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight text-[#173B2A]">
                {resource.title}
              </h3>

              <p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">
                {resource.description}
              </p>

              {/* CARD LINKS */}
<div className="mt-8 flex flex-wrap items-center gap-5">
  <a
    href={resource.href}
    target={resource.external ? "_blank" : undefined}
    rel={resource.external ? "noopener noreferrer" : undefined}
    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22] transition-colors duration-300 group-hover:text-[#173B2A]"
  >
    {resource.cta}
    <span className="transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </a>

  {resource.code === "CAT" && (
    <a
      href="/catalogues/Shivesh-International-Product-Catalogue.pdf"
      download
      className="inline-flex items-center gap-2 border-l border-[#C9A962]/40 pl-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A87416] transition-colors duration-300 hover:text-[#173B2A]"
    >
      Download PDF
      <span aria-hidden="true">↓</span>
    </a>
  )}
</div>

              <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          </StaggerItem>
        ))}
      </div>
    </div>
  </RevealOnScroll>
</section>
      {/* BUYER CATALOGUE AND EXPORT SUPPORT */}
      <section
        id="buyer-catalogue-support"
        className="relative overflow-hidden bg-[#0B3325] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1180px] text-center">
            <StaggerItem delay={0}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">
                Buyer Catalogue & Export Assistance
              </p>
            </StaggerItem>

            <StaggerItem delay={100}>
              <h2 className="mx-auto mt-5 max-w-[1100px] font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3.6vw,3.9rem)] font-semibold leading-[1.05]">
                <span className="block lg:whitespace-nowrap">
                  Need Product Information
                </span>
                <span className="mt-2 block text-[#E4C878] lg:whitespace-nowrap">
                  for Your Import Requirement?
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={180}>
              <p className="mx-auto mt-7 max-w-[780px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">
                Contact our export team for product specifications, available
                packaging, minimum order quantities, private-label support and
                buyer-specific commercial information.
              </p>
            </StaggerItem>

            <StaggerItem delay={260}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  Request Buyer Information
                  <span>→</span>
                </Link>

                <Link
                  href="/export"
                  className="inline-flex items-center justify-center gap-4 border border-[#F5F0E6]/30 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                >
                  View Export Services
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={340}>
              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F5F0E6]/40">
                Product Details · MOQ · Packaging · OEM · Private Label · Export
                Support
              </p>
            </StaggerItem>
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
