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
  title:
    "Certifications & Quality Documents | Shivesh International",
  description:
    "Explore the certifications, registrations and technical quality documents available with Shivesh International, including ISO 9001:2015, GMP, USDA Organic, India Organic, CE, HACCP, Halal, Kosher, FSSAI, Udyam/MSME, MSDS, COA, laboratory test reports and technical data sheets.",
};

type CertificationItem = {
  shortName: string;
  logoSrc: string;
  name: string;
  category: string;
  description: string;
  buyerValue: string;
  note?: string;
};

type DocumentItem = {
  shortName: string;
  name: string;
  description: string;
  includes: string[];
};

const certifications: CertificationItem[] = [
  {
    shortName: "ISO",
    logoSrc: "/images/certifications/logos/iso-9001-final-v1.png",
    name: "ISO 9001:2015",
    category: "Quality Management System",
    description:
      "ISO 9001:2015 relates to a structured quality-management approach focused on controlled processes, documented responsibilities, continual improvement and customer-oriented operations.",
    buyerValue:
      "It helps buyers understand that the organisation follows a systematic approach to managing quality-related business processes.",
    note:
      "Certification scope and validity are subject to the details shown on the original certificate.",
  },
  {
    shortName: "GMP",
    logoSrc: "/images/certifications/logos/gmp-final-v1.png",
    name: "Good Manufacturing Practices",
    category: "Manufacturing Practices",
    description:
      "GMP represents manufacturing practices developed around organised production, personnel hygiene, controlled handling, process discipline and suitable operational procedures.",
    buyerValue:
      "It provides buyers with additional confidence in the company’s approach to manufacturing and product-handling practices.",
    note:
      "Applicable scope is determined by the original GMP certificate.",
  },
  {
    shortName: "USDA",
    logoSrc: "/images/certifications/logos/usda-organic-final-v1.png",
    name: "USDA Organic",
    category: "Organic Certification",
    description:
      "USDA Organic certification supports the identification and handling of products covered under the applicable organic certification scope for the United States market.",
    buyerValue:
      "It can support buyers seeking eligible organic products for markets where USDA organic requirements are relevant.",
    note:
      "Organic status applies only to products and activities included within the valid certification scope.",
  },
  {
    shortName: "INDIA",
    logoSrc: "/images/certifications/logos/indian-organic-final-v1.png",
    name: "India Organic",
    category: "Organic Certification",
    description:
      "India Organic certification relates to eligible organic products and operations covered under the applicable Indian organic certification framework.",
    buyerValue:
      "It assists buyers looking for products supplied under a recognised Indian organic certification scope.",
    note:
      "Product eligibility and scope should be confirmed against the current original certificate.",
  },
  {
    shortName: "CE",
    logoSrc: "/images/certifications/logos/ce-final-v1.png",
    name: "CE Certificate",
    category: "Conformity Documentation",
    description:
      "CE-related documentation is maintained for the applicable product or equipment scope identified in the original certificate.",
    buyerValue:
      "It allows relevant buyers to review the conformity documentation associated with the specifically covered scope.",
    note:
      "CE applicability depends on the product, equipment and scope stated in the original document.",
  },
  {
    shortName: "HACCP",
    logoSrc: "/images/certifications/logos/haccp-final-v1.png",
    name: "HACCP",
    category: "Food Safety System",
    description:
      "HACCP is based on identifying, evaluating and managing relevant food-safety hazards through defined control measures and monitoring practices.",
    buyerValue:
      "It is especially relevant for buyers assessing food-safety management practices for applicable herbs, spices or food-related products.",
    note:
      "The certified activities and product scope are defined by the original HACCP certificate.",
  },
  {
    shortName: "HALAL",
    logoSrc: "/images/certifications/logos/halal-final-v1.png",
    name: "Halal Certification",
    category: "Market & Religious Compliance",
    description:
      "Halal certification supports products and processes included within the applicable certified scope for buyers serving Halal-conscious markets.",
    buyerValue:
      "It helps importers, distributors and brands evaluate eligible products for markets where Halal assurance is commercially important.",
    note:
      "Halal status applies only to products and operations included in the valid certificate.",
  },
  {
    shortName: "KOSHER",
    logoSrc: "/images/certifications/logos/kosher-final-v1.png",
    name: "Kosher Certification",
    category: "Market & Religious Compliance",
    description:
      "Kosher certification supports products and processes reviewed within the applicable Kosher certification scope.",
    buyerValue:
      "It can assist buyers serving markets and consumer groups where Kosher compliance is required or preferred.",
    note:
      "Kosher eligibility should be confirmed product-wise against the current certification scope.",
  },
  {
    shortName: "FSSAI",
    logoSrc: "/images/certifications/logos/fssai.png",
    name: "FSSAI",
    category: "Food Business Compliance",
    description:
      "FSSAI licensing or registration relates to regulated food-business activities undertaken within India under the applicable licence category.",
    buyerValue:
      "It provides food-category buyers with relevant information about the company’s Indian food-business compliance status.",
    note:
      "Licence category, address, validity and permitted activities are defined in the original FSSAI document.",
  },
  {
    shortName: "MSME",
    logoSrc: "/images/certifications/logos/msme-final-v1.png",
    name: "MSME / Udyam Registration",
    category: "Business Registration",
    description:
      "MSME or Udyam registration identifies the enterprise within India’s registered micro, small and medium enterprise framework.",
    buyerValue:
      "It supports verification of the company’s formal Indian business registration and enterprise status.",
  },
];

const technicalDocuments: DocumentItem[] = [
  {
    shortName: "MSDS",
    name: "Material Safety Data Sheet",
    description:
      "An MSDS provides structured safety-related information about a product or material, including handling, storage, exposure considerations, first-aid guidance and other relevant precautions.",
    includes: [
      "Product and supplier identification",
      "Composition or ingredient information",
      "Handling and storage guidance",
      "First-aid and safety measures",
      "Physical and chemical information",
      "Transport and disposal guidance",
    ],
  },
  {
    shortName: "COA",
    name: "Certificate of Analysis",
    description:
      "A Certificate of Analysis presents the tested or reviewed parameters associated with a specific product, specification or production batch.",
    includes: [
      "Product identification",
      "Batch or lot reference",
      "Test parameters",
      "Specification limits",
      "Observed results",
      "Approval or review details",
    ],
  },
  {
    shortName: "LAB",
    name: "Laboratory Test Report",
    description:
      "A laboratory test report records analytical results generated for the submitted product sample according to the parameters and methods stated in the report.",
    includes: [
      "Sample identification",
      "Testing laboratory details",
      "Testing methods",
      "Analytical parameters",
      "Measured results",
      "Report date and reference",
    ],
  },
  {
    shortName: "TDS",
    name: "Technical Data Sheet",
    description:
      "A Technical Data Sheet summarises key product information, physical characteristics, intended applications, available forms and recommended storage conditions.",
    includes: [
      "Product description",
      "Physical characteristics",
      "Typical specifications",
      "Application information",
      "Packaging availability",
      "Storage and shelf-life guidance",
    ],
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden bg-[#0a251b]">
        <Image
  src="/images/certifications/certifications-hero-quality-assurance-final-v3.png"
  alt="Certification review and quality assurance at Shivesh International"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

{/* Light localized overlay for readable live text */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071b14]/55 via-[#071b14]/12 to-transparent" />

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-black/5" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Certifications & Quality Documents
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[680px] text-[clamp(3rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Documented Quality.
                <br />

                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Professional Assurance.
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/80">
                Explore the certifications, registrations and technical
                documents maintained by Shivesh International for their
                respective applicable products, operations and business
                activities.
              </p>
            </StaggerItem>

            <StaggerItem delay={360}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#certifications"
                  className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                >
                  View Credentials
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Documents
                </Link>
              </div>
            </StaggerItem>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#C9A962]/35" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="sticky top-32">
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Quality Credentials
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Supporting Buyer Confidence through Verifiable Documentation
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-lg leading-9 text-[#4c5f54]">
                Certifications, registrations and technical records help buyers
                evaluate suppliers according to their product category,
                destination market and internal procurement requirements.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                Shivesh International maintains original documentation covering
                applicable quality-management systems, manufacturing practices,
                organic scopes, food-safety systems, religious-market
                requirements, business registrations and product-related
                technical information.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                The exact applicability of every document depends on its stated
                scope, covered products, issuing organisation, facility,
                validity period and buyer requirement. Current copies can be
                shared with serious buyers where commercially appropriate.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

            {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Certifications & Registrations
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Credentials Supporting Buyer Confidence
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Original copies are maintained for their respective applicable
                products, operations, scopes and validity periods.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {certifications.map((item, index) => (
                <StaggerItem key={item.name} delay={(index % 2) * 100}>
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#C9A962]/22 bg-white/[0.04] p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A962]/65 hover:bg-white/[0.065] hover:shadow-[0_28px_75px_rgba(0,0,0,0.26)] sm:p-7">
                    <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-[1100ms] group-hover:left-[145%]" />

                    <div className="relative grid gap-6 sm:grid-cols-[96px_1fr] sm:items-start">
                      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[#C9A962]/50 bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={item.logoSrc}
                          alt={`${item.name} logo`}
                          fill
                          sizes="96px"
                          className="object-contain p-2"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                            {item.category}
                          </p>

                          <span className="rounded-full border border-[#C9A962]/25 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
                            Original Copy
                          </span>
                        </div>

                        <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold sm:text-3xl">
                          {item.name}
                        </h3>

                        <div className="mt-4 h-px w-16 bg-[#C9A962]" />

                        <p className="mt-4 line-clamp-3 leading-7 text-[#F5F0E6]/66">
                          {item.description}
                        </p>

                        <div className="mt-5 flex items-start gap-3 border-t border-[#C9A962]/15 pt-4">
                          <span className="mt-1 text-[#C9A962]">✓</span>

                          <p className="line-clamp-2 text-sm leading-6 text-[#F5F0E6]/70">
                            {item.buyerValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

            {/* TECHNICAL DOCUMENTS */}
      <section className="bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-5">
                <span className="h-[3px] w-16 bg-[#C9A962]" />

                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                  Technical Documentation
                </span>

                <span className="h-[3px] w-16 bg-[#C9A962]" />
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Technical & Quality Documents
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Clear technical information supporting product review, quality
                evaluation and commercial decision-making.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {technicalDocuments.map((document, index) => (
                <StaggerItem key={document.name} delay={index * 90}>
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962] hover:shadow-[0_28px_70px_rgba(0,0,0,0.16)]">
                    <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[55%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent transition-all duration-[1100ms] group-hover:left-[145%]" />

                    <div className="relative">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A962]/55 bg-[#102f23] font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878] shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-105">
                        {document.shortName}
                      </div>

                      <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#9f7f36]">
                        Quality Document
                      </p>

                      <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight">
                        {document.name}
                      </h3>

                      <div className="mx-auto mt-4 h-px w-14 bg-[#C9A962]" />

                      <p className="mt-5 line-clamp-4 leading-7 text-[#4c5f54]">
                        {document.description}
                      </p>

                      <div className="mt-6 space-y-2 text-left">
                        {document.includes.slice(0, 3).map((entry) => (
                          <div
                            key={entry}
                            className="flex items-start gap-3 border-t border-[#173b2a]/8 pt-2"
                          >
                            <span className="text-[#9f7f36]">✓</span>

                            <span className="text-sm leading-6 text-[#173b2a]">
                              {entry}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
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