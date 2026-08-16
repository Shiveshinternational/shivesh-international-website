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
  title: "Natural Products Manufacturing Infrastructure India",
  description:
    "Explore Shivesh International's manufacturing infrastructure in India for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices, with processing, quality control, private-label packing and export dispatch support.",
  keywords: [
    "natural products manufacturing infrastructure India",
    "henna manufacturing facility India",
    "natural henna powder manufacturer India",
    "henna powder processing unit India",
    "henna powder grinding facility",
    "henna powder sieving facility",
    "henna powder blending facility",
    "henna powder packing facility India",
    "henna powder exporter infrastructure",
    "natural indigo powder manufacturer India",
    "indigo powder processing facility",
    "indigo powder grinding and sieving unit",
    "botanical hair color manufacturer India",
    "natural hair color manufacturing facility",
    "henna hair color blending facility",
    "Ayurvedic herbs manufacturer India",
    "Ayurvedic herbs processing facility",
    "herbal powder manufacturing unit India",
    "herbal powder grinding facility",
    "herbal powder exporter India",
    "Indian spices manufacturer India",
    "Indian spices processing facility",
    "spice grinding facility India",
    "spice powder packing unit India",
    "Indian spices exporter infrastructure",
    "natural products private label manufacturer",
    "OEM natural products manufacturer India",
    "private label packing facility India",
    "contract manufacturing natural products India",
    "bulk botanical powder manufacturer",
    "bulk herbal powder supplier India",
    "bulk spice powder supplier India",
    "export grade natural products manufacturer",
    "export ready packaging facility",
    "retail and bulk packing facility",
    "metallic pouch packing facility",
    "jar and box packing facility",
    "quality control natural products",
    "batch wise botanical processing",
    "controlled blending natural powders",
    "precision sieving botanical powders",
    "industrial pulverising natural products",
    "raw material inspection facility",
    "natural raw material cleaning unit",
    "warehouse and export dispatch India",
    "export logistics coordination India",
    "natural products supplier India",
    "natural products exporter India",
    "Shivesh International infrastructure",
  ],
  alternates: { canonical: "/infrastructure" },
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
  openGraph: {
    title: "Natural Products Manufacturing Infrastructure India",
    description:
      "Processing, quality control, private-label packing, warehousing and export-dispatch infrastructure for henna, indigo, herbs, spices and botanical hair colors.",
    url: "https://shiveshinternational.com/infrastructure",
    siteName: "Shivesh International",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/infrastructure/infrastructure-hero-factory-front-final-v2.png",
        alt: "Shivesh International natural products manufacturing infrastructure in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Products Manufacturing Infrastructure India",
    description:
      "Export-oriented processing, quality control, packing, warehousing and dispatch infrastructure for natural products.",
    images: [
      "/images/infrastructure/infrastructure-hero-factory-front-final-v2.png",
    ],
  },
};

const overviewPoints = [
  "Raw Material Receiving",
  "Material Inspection & Segregation",
  "Cleaning & Preparation",
  "Controlled Material Handling",
];

const processingPoints = [
  "Grinding & Pulverising",
  "Precision Sieving",
  "Controlled Blending",
  "Batch-Wise Processing",
];

const qualityPoints = [
  "Quality Review",
  "Product Filling",
  "Professional Sealing",
  "Retail, Bulk & Private-Label Packing",
];

const dispatchPoints = [
  "Finished Goods Organisation",
  "Export Carton Packing",
  "Dispatch Preparation",
  "Logistics Coordination",
];

const infrastructureStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://shiveshinternational.com/infrastructure#webpage",
      url: "https://shiveshinternational.com/infrastructure",
      name: "Natural Products Manufacturing Infrastructure India",
      description:
        "Manufacturing, processing, quality-control, private-label packing, warehousing and export-dispatch infrastructure for henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://shiveshinternational.com/images/infrastructure/infrastructure-hero-factory-front-final-v2.png",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://shiveshinternational.com/infrastructure#breadcrumb",
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
          name: "Manufacturing Infrastructure",
          item: "https://shiveshinternational.com/infrastructure",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://shiveshinternational.com/infrastructure#capabilities",
      name: "Natural Products Manufacturing Capabilities",
      itemListElement: [
        "Raw material inspection, segregation and preparation",
        "Grinding, pulverising, precision sieving and controlled blending",
        "Quality review, filling, sealing and private-label packing",
        "Warehousing, export carton packing and dispatch coordination",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    },
  ],
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(infrastructureStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <Navbar />

      <section
        id="natural-products-manufacturing-infrastructure"
        className="relative isolate min-h-[72vh] overflow-hidden bg-[#071b14]"
      >
        <Image
          src="/images/infrastructure/infrastructure-hero-factory-front-final-v2.png"
          alt="Natural products manufacturing infrastructure for henna indigo herbs spices and botanical hair colors in India"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061711]/60 via-[#071b14]/18 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/14 via-transparent to-black/5" />
        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Manufacturer · Exporter · Private Label
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[660px] text-[clamp(3rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Natural Products
                <span className="block text-[#E4C878]">
                  Manufacturing Infrastructure
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#F5F0E6]/80">
                Explore our export-oriented manufacturing infrastructure in
                India for Natural Henna Powder, Natural Indigo Powder,
                botanical hair colors, Ayurvedic Indian Herbs and Indian
                Spices—from raw-material preparation and precision processing
                to quality control, private-label packing and dispatch.
              </p>
            </StaggerItem>

            <StaggerItem delay={340}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#manufacturing-overview" className="group inline-flex items-center gap-3 bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878]">
                  Explore Facility <span className="transition-transform group-hover:translate-y-1">↓</span>
                </a>
                <Link href="/contact" className="inline-flex items-center border border-white/30 bg-[#071b14]/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]">
                  Discuss Manufacturing
                </Link>
              </div>
            </StaggerItem>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#C9A962]/35" />
      </section>

      <section id="manufacturing-overview" className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
            <StaggerItem delay={0}>
              <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
                <Image src="/images/infrastructure/infrastructure-manufacturing-overview-final-v2.png" alt="Natural henna herbs and spices raw material inspection cleaning and manufacturing preparation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/55 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Controlled Material Preparation</p>
                  <p className="mt-3 max-w-lg font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">A Structured Beginning for Every Production Batch</p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}><div className="mb-6 flex items-center gap-5"><span className="h-[3px] w-16 bg-[#C9A962]" /><span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">Manufacturing Overview</span></div></StaggerItem>
              <StaggerItem delay={220}><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">Natural Raw Material Handling<span className="block text-[#9f7f36]">Inspection, Cleaning & Preparation</span></h2></StaggerItem>
              <StaggerItem delay={320}><p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">Every export-grade natural product begins with organised handling and careful preparation.</p></StaggerItem>
              <StaggerItem delay={420}><p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">Incoming henna leaves, Indigofera tinctoria leaves, Ayurvedic herbs, Indian spices and botanical ingredients are received, identified and organised according to product category and intended commercial use. Materials move through inspection, segregation, cleaning and preparation before entering processing.</p></StaggerItem>
              <StaggerItem delay={500}><p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">This structured material flow supports batch identification, cleaner handling and dependable production planning for bulk, wholesale, OEM and private-label buyer requirements.</p></StaggerItem>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">{overviewPoints.map((point, index) => (<StaggerItem key={point} delay={580 + index * 70}><div className="flex h-full items-start gap-3 border-b border-[#173b2a]/10 pb-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">✓</span><span className="text-[15px] font-medium leading-7">{point}</span></div></StaggerItem>))}</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="precision-processing" className="relative overflow-hidden bg-[#102f23] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-56 top-12 h-[500px] w-[500px] rounded-full bg-[#C9A962]/8 blur-[150px]" />
        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
            <div>
              <StaggerItem delay={0}><div className="mb-6 flex items-center gap-5"><span className="h-[3px] w-16 bg-[#C9A962]" /><span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">Precision Processing</span></div></StaggerItem>
              <StaggerItem delay={120}><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">Grinding, Pulverising & Sieving<span className="block text-[#E4C878]">with Controlled Blending</span></h2></StaggerItem>
              <StaggerItem delay={240}><p className="mt-7 text-xl font-medium italic leading-8 text-[#C9A962]">Product-specific processing for natural powders, botanical hair colors, herbs and spices.</p></StaggerItem>
              <StaggerItem delay={360}><p className="mt-7 max-w-[680px] text-lg leading-9 text-[#F5F0E6]/68">Prepared natural materials move through industrial grinding and pulverising. Suitable precision-sieving systems help refine powder texture and separate larger particles according to the required product grade.</p></StaggerItem>
              <StaggerItem delay={440}><p className="mt-5 max-w-[680px] text-lg leading-9 text-[#F5F0E6]/68">Where botanical formulations or professional hair-color shades require blending, ingredients are mixed batch-wise to support even distribution and consistent preparation for international buyers.</p></StaggerItem>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">{processingPoints.map((point, index) => (<StaggerItem key={point} delay={520 + index * 70}><div className="flex h-full items-center gap-3 rounded-[16px] border border-[#C9A962]/18 bg-white/[0.035] p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 text-[10px] text-[#E4C878]">✓</span><span className="text-[15px] font-medium">{point}</span></div></StaggerItem>))}</div>
            </div>
            <StaggerItem delay={180}><div className="group relative aspect-[3/2] w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"><Image src="/images/infrastructure/infrastructure-precision-processing-final-v2.png" alt="Industrial grinding pulverising precision sieving and controlled blending of natural botanical powders" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" /><div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/68 via-transparent to-black/5" /><div className="absolute bottom-7 left-7 right-7"><p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Product-Specific Processing</p><p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">Precision at Every Processing Stage</p></div></div></StaggerItem>
          </div>
        </RevealOnScroll>
      </section>

      <section id="quality-control-private-label-packing" className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
            <StaggerItem delay={0}><div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]"><Image src="/images/infrastructure/infrastructure-quality-control-packing-final-v3.png" alt="Natural products quality control filling sealing retail bulk OEM and private label packing operations" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" /></div></StaggerItem>
            <div>
              <StaggerItem delay={120}><div className="mb-6 flex items-center gap-5"><span className="h-[3px] w-16 bg-[#C9A962]" /><span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">Quality Control & Packing</span></div></StaggerItem>
              <StaggerItem delay={220}><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">Quality Review & Filling<span className="block text-[#9f7f36]">Retail, Bulk and Private Label Packing</span></h2></StaggerItem>
              <StaggerItem delay={320}><p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">Organised product review connects processing with professional export presentation.</p></StaggerItem>
              <StaggerItem delay={420}><p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">Processed batches are reviewed for relevant physical characteristics, appearance and packing readiness before moving into the confirmed filling and packaging format.</p></StaggerItem>
              <StaggerItem delay={500}><p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">According to buyer requirements, products may be prepared in retail pouches, printed metallic packs, jars, branded boxes or bulk formats. Filling, sealing, label coordination and export-carton packing support OEM and private-label programs.</p></StaggerItem>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">{qualityPoints.map((point, index) => (<StaggerItem key={point} delay={580 + index * 70}><div className="flex h-full items-start gap-3 border-b border-[#173b2a]/10 pb-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">✓</span><span className="text-[15px] font-medium leading-7">{point}</span></div></StaggerItem>))}</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="warehouse-export-dispatch" className="relative overflow-hidden bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
            <div>
              <StaggerItem delay={0}><div className="mb-6 flex items-center gap-5"><span className="h-[3px] w-16 bg-[#C9A962]" /><span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">Warehouse & Export Dispatch</span></div></StaggerItem>
              <StaggerItem delay={120}><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[58px]">Organised Warehousing<span className="block text-[#9f7f36]">Export-Ready Dispatch Support</span></h2></StaggerItem>
              <StaggerItem delay={240}><p className="mt-7 text-xl font-medium italic leading-8 text-[#8B6A1E]">Completed orders are organised for their next international commercial destination.</p></StaggerItem>
              <StaggerItem delay={360}><p className="mt-7 max-w-[680px] text-lg leading-9 text-[#4c5f54]">Finished products, packaging materials and confirmed buyer orders are organised to support inventory movement, carton preparation and dispatch planning.</p></StaggerItem>
              <StaggerItem delay={440}><p className="mt-5 max-w-[680px] text-lg leading-9 text-[#4c5f54]">Completed export cartons may be prepared for transporter collection, palletisation, container loading or movement to a designated logistics location according to buyer and shipment requirements.</p></StaggerItem>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">{dispatchPoints.map((point, index) => (<StaggerItem key={point} delay={520 + index * 70}><div className="flex h-full items-start gap-3 rounded-[16px] border border-[#C9A962]/25 bg-[#f5f0e6]/70 p-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[10px] text-[#E4C878]">✓</span><span className="text-[15px] font-medium leading-7">{point}</span></div></StaggerItem>))}</div>
            </div>
            <StaggerItem delay={180}><div className="group relative aspect-video w-full overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]"><Image src="/images/infrastructure/infrastructure-warehouse-dispatch-final-v2.png" alt="Natural products warehouse export carton packing logistics and dispatch preparation in India" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" /><div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/60 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 right-7"><p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Final Logistics Preparation</p><p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight text-white">From Finished Carton to Dispatch-Ready Order</p></div></div></StaggerItem>
          </div>
        </RevealOnScroll>
      </section>

      <section id="manufacturing-enquiry" className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A962]">Bulk · Wholesale · OEM · Private Label</p>
            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Discuss Your Natural Product<span className="block text-[#E4C878]">Manufacturing Requirement</span></h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">Contact Shivesh International for bulk, wholesale, OEM and private-label manufacturing enquiries for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices. Share your product, quantity, pack size and destination market.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-4 bg-[#C9A962] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_20px_55px_rgba(201,169,98,0.28)]">Request Manufacturing Quote <span className="transition-transform group-hover:translate-x-2">→</span></Link>
              <Link href="/export" className="inline-flex items-center border border-white/30 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]">View Export Services</Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5F0E6]/50">
              <Link href="/products/natural-henna-powder" className="transition-colors hover:text-[#E4C878]">Natural Henna Powder</Link>
              <Link href="/products/natural-indigo-powder" className="transition-colors hover:text-[#E4C878]">Natural Indigo Powder</Link>
              <Link href="/products/ayurvedic-indian-herbs" className="transition-colors hover:text-[#E4C878]">Ayurvedic Herbs</Link>
              <Link href="/products/indian-spices" className="transition-colors hover:text-[#E4C878]">Indian Spices</Link>
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