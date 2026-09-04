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
  title: {
    absolute:
      "Natural Henna Powder Manufacturer & Exporter India | Shivesh International",
  },

  description:
    "Natural henna powder manufacturer and exporter in India supplying 100% pure Lawsonia inermis powder in bulk, OEM and private-label packs. Bulk orders from 100 kg.",

  alternates: {
    canonical: "/products/natural-henna-powder",
  },

  category: "Natural Henna Powder",

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
    type: "website",
    locale: "en_IN",
    url: "/products/natural-henna-powder",
    siteName: "Shivesh International",
    title:
      "Natural Henna Powder Manufacturer & Exporter from India",
    description:
      "Export-grade natural henna powder for bulk importers, wholesalers, salons, cosmetic manufacturers and private-label brands worldwide.",
    images: [
      {
        url: "/images/products/henna-powder/natural-henna-powder-hero-final-v2.png",
        alt: "Natural henna powder manufactured and exported from India by Shivesh International",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Natural Henna Powder Manufacturer & Exporter India",
    description:
      "Bulk, wholesale and private-label natural henna powder supplied from India to professional buyers worldwide.",
    images: [
      "/images/products/henna-powder/natural-henna-powder-hero-final-v2.png",
    ],
  },
};
const naturalHennaPowderStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://shiveshinternational.com/products/natural-henna-powder#product",
      name: "Natural Henna Powder",
      alternateName: [
        "Sojat Henna Powder",
        "Lawsonia inermis Powder",
        "Natural Mehndi Powder",
        "Export-Grade Henna Powder",
      ],
      url:
        "https://shiveshinternational.com/products/natural-henna-powder",
      image:
        "https://shiveshinternational.com/images/products/henna-powder/natural-henna-powder-hero-final-v2.png",
      description:
        "Export-grade Natural Henna Powder manufactured, supplied and exported from India for bulk, wholesale, salon, cosmetic and private-label buyers worldwide.",
      category: "Natural Botanical Hair Colouring Powder",
      material: "Selected Lawsonia inermis Leaves",
      brand: {
        "@type": "Brand",
        name: "Shivesh International",
      },
      manufacturer: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Importers, distributors, wholesalers, salons, cosmetic manufacturers and private-label buyers",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Raw Material Origin",
          value: "Sojat, Rajasthan, India",
        },
        {
          "@type": "PropertyValue",
          name: "Botanical Name",
          value: "Lawsonia inermis",
        },
        {
          "@type": "PropertyValue",
          name: "Composition",
          value: "100% pure Lawsonia inermis henna leaves powder with no added dye, chemical or other ingredient",
        },
        {
          "@type": "PropertyValue",
          name: "Mesh Availability",
          value: "80–120 mesh grades",
        },
        {
          "@type": "PropertyValue",
          name: "Moisture",
          value: "Maximum 5%",
        },
        {
          "@type": "PropertyValue",
          name: "Lawsone Specification",
          value: "Fixed-range specification available according to the agreed product grade",
        },
        {
          "@type": "PropertyValue",
          name: "Minimum Order Quantity",
          value: "Bulk orders can start from 100 kg; private-label MOQ depends on packaging and customization",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value:
            "Retail, professional, bulk, OEM and private-label packaging",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://shiveshinternational.com/products/natural-henna-powder#webpage",
      url: "https://shiveshinternational.com/products/natural-henna-powder",
      name: "Natural Henna Powder Manufacturer and Exporter in India",
      description: "Procurement information for 100% pure Lawsonia inermis henna powder supplied from India in bulk, OEM and private-label formats.",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/products/natural-henna-powder#product" },
      breadcrumb: { "@id": "https://shiveshinternational.com/products/natural-henna-powder#breadcrumb" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/natural-henna-powder#breadcrumb",
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
          name: "Products",
          item: "https://shiveshinternational.com/#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Natural Henna Powder",
          item:
            "https://shiveshinternational.com/products/natural-henna-powder",
        },
      ],
    },
  ],
};
const procurementFaqs = [
  { question: "What is Natural Henna Powder?", answer: "Natural Henna Powder is a fine botanical powder prepared from Lawsonia inermis henna leaves. Shivesh International supplies 100% pure henna leaves powder with no added dye, chemical or other ingredient." },
  { question: "What is the minimum order for bulk Natural Henna Powder?", answer: "Bulk Natural Henna Powder orders can start from 100 kg. Final quantity and commercial terms are confirmed according to the agreed product grade, packaging and order requirements." },
  { question: "What is the private-label minimum order quantity?", answer: "Private-label minimum order quantities are not fixed. They vary according to pack size, packaging format, artwork and design requirements, and customization. Please share your required pack size and quantity for confirmation." },
  { question: "Which mesh sizes are available?", answer: "Natural Henna Powder grades from 80 to 120 mesh are available. The selected mesh and Lawsone specification or fixed range are confirmed according to the agreed product grade and buyer requirements." },
  { question: "What is the moisture specification?", answer: "The confirmed moisture specification is a maximum of 5%. Final batch and product information is documented according to the agreed commercial specification." },
  { question: "Is a Certificate of Analysis supplied?", answer: "Yes. A batch-specific Certificate of Analysis is available with every commercial batch or order." },
  { question: "Are SDS/MSDS and Country of Origin documents available?", answer: "Yes. SDS/MSDS and a Country of Origin Certificate or Statement are available. Applicable commercial and export documents are coordinated for the confirmed order." },
  { question: "Can phytosanitary and fumigation certificates be arranged?", answer: "A phytosanitary certificate can be arranged according to buyer and destination-country requirements. A fumigation certificate can also be arranged when required." },
  { question: "Are free samples available?", answer: "Yes. Free Natural Henna Powder samples are available for prospective buyers. Sample details are confirmed after reviewing the product grade and buyer requirement." },
  { question: "What packaging sizes are available?", answer: "Retail and private-label packs are available in 100 g, 200 g, 500 g and 1 kg sizes. Bulk supply is available in 20 kg and 25 kg double-layer vacuum packing." },
  { question: "Is OEM and private-label supply available?", answer: "Yes. OEM supply can be coordinated according to buyer specification, formulation and branding requirements, subject to commercial and technical confirmation. Buyer logos and artwork can be used for finished retail packs subject to packaging and design feasibility and final approval." },
  { question: "What is the typical order lead time?", answer: "Typical production or order lead time is approximately 10 to 15 days after commercial and order confirmation, subject to the product, quantity, packaging and complete order requirements. Transit or delivery time is not guaranteed." },
  { question: "How can an importer request a quotation?", answer: "Share the required product grade, quantity, mesh, Lawsone requirement if applicable, pack size, bulk, private-label or OEM requirement, destination country or port, required documents, and company contact details through our contact page, email or WhatsApp." },
] as const;
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "@id": "https://shiveshinternational.com/products/natural-henna-powder#faq", mainEntity: procurementFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
export default function NaturalHennaPowderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        naturalHennaPowderStructuredData
      ).replace(/</g, "\\u003c"),
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }}
  />

  <Navbar />

      {/* PRODUCT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/products/henna-powder/natural-henna-powder-hero-final-v2.png"
          alt="Export-grade natural henna powder manufacturer and supplier from India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/68 via-[#102f23]/28 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Manufacturer · Exporter · Supplier
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[680px] font-[family-name:var(--font-playfair)] text-[clamp(2.65rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Natural Henna
                <br />
                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Powder
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/78">
  Shivesh International is a Natural Henna Powder manufacturer,
  exporter and supplier from India, offering Sojat-origin,
  export-grade henna powder for bulk importers, wholesalers,
  salons, cosmetic brands and private-label buyers worldwide.
</p>
            </StaggerItem>

            

            <StaggerItem delay={400}>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#product-overview"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  View Henna Details
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/32 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem delay={480}>
              <div className="mt-7 grid max-w-[680px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                   ["100%", "Natural Henna"],
  ["Sojat", "Rajasthan Origin"],
  ["Bulk", "Export Supply"],
  ["OEM", "Private Label"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-white/12 bg-black/12 px-4 py-3 backdrop-blur-md"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#E4C878]">
                      {value}
                    </p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#F5F0E6]/52">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* ABOUT NATURAL HENNA POWDER */}
<section
  id="product-overview"
  className="relative overflow-hidden bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
>
  <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[140px]" />

  <RevealOnScroll>
    <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-20">

      {/* IMAGE */}

      <StaggerItem delay={0}>
        <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.16)]">

          <Image
  src="/images/products/henna-powder/natural-henna-about-model-holding-box-final-v1.png"
  alt="Natural henna powder supplier from India with private-label retail packaging"
  fill
  sizes="(min-width: 1024px) 50vw, 100vw"
  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/70 via-transparent to-black/10" />

        </div>
      </StaggerItem>

      {/* CONTENT */}

      <div>

        <StaggerItem delay={120}>
          <div className="mb-7 flex items-center gap-5">

            <span className="h-[3px] w-16 bg-[#C9A962]" />

            <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
              Natural Henna Powder from India
            </span>

          </div>
        </StaggerItem>

        <StaggerItem delay={240}>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight">
  Natural Henna Powder
  <br />
  Prepared from
  <span className="text-[#9f7f36]">
    {" "}Lawsonia inermis Leaves
  </span>
</h2>
        </StaggerItem>

        <StaggerItem delay={360}>
          <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
  Export-quality henna powder for importers, wholesalers,
  cosmetic manufacturers, salons and private-label brands.
</p>
        </StaggerItem>

        <StaggerItem delay={480}>
          <div className="mt-8 space-y-6">
  <p className="text-lg leading-9 text-[#4c5f54]">
    Natural Henna Powder is produced from carefully selected,
    dried and finely ground leaves of the henna plant,
    botanically known as
    <strong> Lawsonia inermis.</strong>
    {" "}The product is 100% pure henna leaves powder with no
    added dye, chemical or other ingredient.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    This traditional botanical powder is widely used for natural
    hair colouring, herbal hair care, salon applications, mehndi
    preparations and cosmetic product formulations.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    As a Natural Henna Powder manufacturer, exporter and bulk
    supplier from India, Shivesh International supports
    distributors, wholesalers, cosmetic manufacturers, salon
    brands and OEM private-label buyers with multiple product
    grades and export packaging options.
  </p>
</div>
        </StaggerItem>

      </div>

    </div>
  </RevealOnScroll>

</section>
    
            {/* SOJAT ORIGIN STORY */}
      <section className="relative overflow-hidden bg-[#ede5d7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <StaggerItem delay={0}>
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                    Sojat Henna Powder Origin
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={120}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
  Sojat Henna Powder from
  <span className="text-[#9f7f36]">
    {" "}Rajasthan, India
  </span>
</h2>
              </StaggerItem>

              <StaggerItem delay={240}>
                <p className="mt-7 text-xl font-medium leading-9 text-[#8B6A1E]">
  Selected natural henna leaves sourced from Sojat City and its
  surrounding henna-growing areas in Pali district, Rajasthan,
  India.
</p>
              </StaggerItem>

              <StaggerItem delay={360}>
                <div className="mt-8 space-y-5">
  <p className="text-lg leading-9 text-[#4c5f54]">
    Sojat in Rajasthan is internationally associated with henna
    cultivation, mehndi production and the commercial sourcing of
    natural henna leaves.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    We source selected henna leaves from the Sojat growing region
    and coordinate their cleaning, drying preparation, grinding,
    sieving and packing to produce fine Natural Henna Powder for
    export markets.
  </p>

  <p className="text-lg leading-9 text-[#4c5f54]">
    This traceable regional sourcing supports buyers looking for
    Sojat Henna Powder, Rajasthan Henna Powder, farm-origin raw
    material and dependable bulk henna supply from India.
  </p>
</div>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    "Sojat City, Pali District",
  "Rajasthan Henna Origin",
  "Recognised Henna-Growing Region",
  "Selected Natural Henna Leaves",
  "Farm-Origin Raw Material",
  "Processing for Export Supply",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-4 border border-[#C9A962]/25 bg-[#f5f0e6] p-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C9A962]" />

                      <span className="font-medium leading-7 text-[#173b2a]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>

            <StaggerItem delay={120}>
              <div className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#d8d0bf] shadow-[0_30px_85px_rgba(0,0,0,0.16)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-origin-sojat-rajasthan-final-v1.png"
                  alt="Natural henna leaves for Sojat henna powder sourced from Rajasthan India"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-[#E4C878]">
                    Natural Henna Leaf Origin
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Sojat City, Rajasthan, India
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>
        </RevealOnScroll>
      </section>
            {/* BENEFITS */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* FRESH GREEN HENNA POWDER BOWL */}
            <StaggerItem delay={0}>
              <div className="group relative min-h-[430px] overflow-hidden rounded-[26px] border border-[#C9A962]/30 bg-[#173b2a] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-benefits-healthy-hair-final-v1.png"
                  alt="Fresh green natural henna powder for hair colouring salon and cosmetic applications"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/75 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Export-Quality Henna Powder
                  </p>

                  <p className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white">
                    Fine Green Henna Powder for Professional Buyers
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* BENEFITS CONTENT */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                    Benefits & Applications
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Natural Henna Powder for Hair, Salons and Cosmetic Products
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/65">
  Natural Henna Powder is traditionally used for botanical hair
  colouring, herbal hair care, professional salon services,
  mehndi preparations and private-label cosmetic formulations.
</p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                     "Natural botanical hair-colouring applications",
  "Traditional herbal hair-care preparations",
  "Professional salon and beauty applications",
  "Henna powder for cosmetic formulations",
  "Suitable for retail henna product ranges",
  "OEM and private-label henna products",
  "Traditional mehndi paste preparations",
  "Available for wholesale and bulk export supply",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 border-b border-[#C9A962]/15 pb-3"
                    >
                      <span className="mt-1 text-[#C9A962]">✓</span>

                      <span className="text-sm leading-6 text-[#F5F0E6]/72">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>
                  {/* PRODUCT SPECIFICATIONS */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Natural Henna Powder Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Export-Grade Henna Powder Technical Details
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
  Technical and commercial information for importers,
  distributors, cosmetic manufacturers and bulk Natural Henna
  Powder buyers evaluating product grade, origin, packaging and
  private-label requirements.
</p>
            </div>

            <StaggerItem delay={120}>
              <div className="mt-12 overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] shadow-[0_24px_65px_rgba(0,0,0,0.11)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] bg-[#102f23] px-5 py-4 text-[#F5F0E6] sm:px-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Parameter
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Product Information
                  </p>
                </div>

                {[
                   ["Product Name", "Export-Grade Natural Henna Powder"],
  ["Common Name", "Henna Powder / Mehndi Powder"],
  ["Botanical Name", "Lawsonia inermis"],
  ["Product Category", "Botanical Hair Colouring Powder"],
  ["Country of Origin", "India"],
  ["Raw Material Origin", "Sojat, Rajasthan, India"],
  ["Plant Part Used", "Selected Henna Leaves"],
  ["Form", "Fine Natural Botanical Powder"],
  ["Appearance", "Fresh Vibrant Green Powder"],
  ["Colour", "Natural Green"],
  ["Odour", "Characteristic Herbal"],
  ["Primary Applications", "Hair Colouring, Hair Care, Salon, Mehndi & Cosmetics"],
  ["Ingredient / Composition", "100% Pure Lawsonia inermis Henna Leaves Powder; No Added Dye, Chemical or Other Ingredient"],
  ["Mesh Availability", "80–120 Mesh Grades"],
  ["Moisture", "Maximum 5%"],
  ["Lawsone", "Fixed-Range Specification Available; Confirmed for the Agreed Product Grade"],
  ["Bulk Minimum Order", "Bulk Orders Can Start from 100 kg"],
  ["Private-Label MOQ", "Varies by Pack Size, Packaging, Artwork, Design and Customization"],
  ["Shelf Life", "24 Months under Recommended Storage"],
  ["Storage", "Store Sealed in a Cool, Dry Place"],
  ["Retail / Private-Label Packs", "100 g, 200 g, 500 g and 1 kg"],
  ["Bulk Packaging", "20 kg and 25 kg Double-Layer Vacuum Packing"],
                ].map(([parameter, value], index) => (
                  <div
                    key={parameter}
                    className={`grid grid-cols-[0.9fr_1.1fr] border-t border-[#173b2a]/10 px-5 py-4 transition-colors duration-300 hover:bg-[#C9A962]/8 sm:px-7 ${
                      index % 2 === 0 ? "bg-[#f5f0e6]" : "bg-[#eee6d8]"
                    }`}
                  >
                    <p className="pr-4 text-sm font-bold uppercase tracking-[0.12em] text-[#8B6A1E] sm:text-[15px]">
                      {parameter}
                    </p>

                    <p className="pl-4 leading-7 text-[#173b2a]">{value}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-7 text-[#4c5f54]/72">
  A batch-specific Certificate of Analysis is available with every
  commercial batch or order. Testing can be performed according to
  buyer instructions and requirements. Final specifications are
  confirmed before order processing; no unlisted test limit or
  destination-market approval is implied.
</p>
          </div>
        </RevealOnScroll>
      </section>
            {/* HOW TO USE */}
      <section className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                How to Mix Natural Henna Powder
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                How to Prepare and Apply Natural Henna Powder to Hair
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                This general guide explains how Natural Henna Powder may be
  mixed into a smooth henna paste and applied for traditional
  hair-colouring and professional salon use. Preparation,
  resting and application time may vary by hair type, product
  grade and desired result.
              </p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {[
  {
    step: "01",
    icon: "🌿",
    title: "Measure Henna Powder",
    description:
      "Place the required quantity of Natural Henna Powder in a clean, non-metallic mixing bowl.",
  },
  {
    step: "02",
    icon: "💧",
    title: "Add Mixing Liquid",
    description:
      "Gradually add water or the preferred mixing liquid while stirring the henna powder continuously.",
  },
  {
    step: "03",
    icon: "🥣",
    title: "Prepare Henna Paste",
    description:
      "Mix thoroughly until a smooth, lump-free and easily spreadable natural henna paste is formed.",
  },
  {
    step: "04",
    icon: "⏳",
    title: "Allow Paste to Rest",
    description:
      "Select the resting time according to the henna product grade and preferred application method.",
  },
  {
    step: "05",
    icon: "💇",
    title: "Apply to Hair",
    description:
      "Using gloves and suitable tools, apply the prepared henna paste evenly to clean hair.",
  },
  {
    step: "06",
    icon: "⌛",
    title: "Allow Colour Development",
    description:
      "Leave the natural henna paste on the hair for the time appropriate to the desired result.",
  },
  {
    step: "07",
    icon: "🚿",
    title: "Rinse Thoroughly",
    description:
      "Rinse the hair thoroughly with water and follow the preferred post-application hair-care routine.",
  },
].map((item, index) => (
                <StaggerItem key={item.step} delay={(index % 4) * 80}>
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#C9A962]/28 bg-[#ede5d7] p-5 text-center transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A962] hover:bg-[#f8f4eb] hover:shadow-[0_25px_65px_rgba(0,0,0,0.13)]">
                    <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[60%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/65 to-transparent transition-all duration-[1100ms] group-hover:left-[150%]" />

                    <div className="relative">
                      <p className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#C9A962]/50">
                        {item.step}
                      </p>

                      {/* Temporary small visual.
                          Later this emoji can be replaced with a real image. */}
                      <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-4xl shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-105">
                        {item.icon}
                      </div>

                      <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight">
                        {item.title}
                      </h3>

                      <div className="mx-auto mt-4 h-px w-12 bg-[#C9A962]" />

                      <p className="mt-5 text-sm leading-7 text-[#4c5f54]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            
          </div>
        </RevealOnScroll>
      </section>
            {/* PACKAGING & PRIVATE LABEL */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Henna Powder Packaging & Bulk Supply
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Retail, Wholesale and Bulk Henna Powder Packaging
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Flexible Natural Henna Powder packaging for retail,
  professional, wholesale, bulk export and private-label orders,
  subject to pack size, order quantity, branding requirements and
  commercial feasibility.
              </p>
            </div>

            {/* TWO COMPACT INFORMATION CARDS */}
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <StaggerItem delay={0}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9f7f36]">
                    Retail & Bulk Pack Sizes
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Henna Powder Retail and Bulk Packaging
                  </h3>

                  <p className="mt-5 leading-8 text-[#4c5f54]">
                    Retail Natural Henna Powder can be offered in 100 g, 200 g,
  500 g and 1 kg silver, golden or coloured pouches. Wholesale
  and bulk Henna Powder can be supplied in 20 kg and 25 kg
  double-layer vacuum-sealed export packing to help protect
  product freshness during storage and shipment.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem delay={120}>
                <article className="h-full rounded-[24px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Export Packaging Options
                  </p>

                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    Custom Packaging for International Buyers
                  </h3>

                  <p className="mt-5 leading-8 text-[#F5F0E6]/68">
                    Packaging options include metallic pouches, coloured pouches,
  printed pouches, printed paper boxes, jars, master cartons and
  bulk export cartons. Custom packaging can be coordinated for
  importers, distributors, wholesalers and buyer-owned brands.
                  </p>
                </article>
              </StaggerItem>
            </div>

            {/* PACKAGING IMAGE STRIP */}
            <StaggerItem delay={180}>
              <div className="group relative mt-5 aspect-[1983/793] w-full overflow-hidden rounded-[24px] border border-[#C9A962]/30 bg-[#071b14] shadow-[0_20px_55px_rgba(0,0,0,0.11)]">
                <Image
                  src="/images/products/henna-powder/natural-henna-packaging-options-international-final-v3.png"
                  alt="Natural henna powder retail private-label and bulk export packaging options"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/75 via-[#102f23]/35 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                      Henna Powder Packaging Range
                    </p>

                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                      Retail Packs, Bulk Supply and Export Cartons
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* PRIVATE LABEL SERVICES */}
            <div className="mt-10">
              <div className="text-center">
  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
    OEM & Private Label Henna Powder Services
  </p>

  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#4c5f54]">
    Private-label Natural Henna Powder solutions for importers,
    distributors, salon brands and cosmetic businesses requiring
    custom branding, retail packaging, bulk packing and
    buyer-specific product presentation.
  </p>
</div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
  {
    code: "OEM",
    title: "OEM Henna Powder Manufacturing",
  },
  {
    code: "ODM",
    title: "ODM Henna Product Support",
  },
  {
    code: "BR",
    title: "Custom Henna Brand Packaging",
  },
  {
    code: "BX",
    title: "Private Label Henna Boxes",
  },
  {
    code: "MP",
    title: "Printed Metallic Henna Pouches",
  },
  {
    code: "CT",
    title: "Bulk Henna Export Cartons",
  },
].map((service, index) => (
                  <StaggerItem key={service.title} delay={(index % 3) * 80}>
                    <article className="flex items-center gap-4 rounded-[20px] border border-[#C9A962]/28 bg-[#f5f0e6] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_16px_45px_rgba(0,0,0,0.09)]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-[10px] font-bold tracking-[0.08em] text-[#E4C878]">
                        {service.code}
                      </div>

                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                        {service.title}
                      </h3>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">Who We Supply</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Natural Henna Powder for Professional Buyers</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">Commercial supply for buyers developing bulk, wholesale, salon, cosmetic, herbal, hair-care, OEM and private-label product programmes.</p>
            </div>
            <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Importers", "Bulk sourcing and destination-market supply planning."],
                ["Distributors", "Wholesale and branded product distribution programmes."],
                ["Wholesalers", "Commercial quantities and bulk export packaging."],
                ["Cosmetic Brands", "Henna powder for agreed cosmetic product requirements."],
                ["Hair-Care Brands", "Botanical hair-colour and hair-care product ranges."],
                ["Salons & Salon Suppliers", "Professional henna products and salon supply channels."],
                ["Herbal & Natural Brands", "Pure Lawsonia inermis powder for branded ranges."],
                ["Private-Label Buyers", "Buyer artwork, retail packs and custom presentation."],
                ["OEM Buyers", "Supply according to agreed specification, formulation and branding."],
                ["Bulk Buyers", "Bulk orders starting from 100 kg, subject to confirmation."],
              ].map(([title, text]) => (
                <article key={title} className="h-full border border-[#C9A962]/28 bg-[#ede5d7] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4c5f54]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* DOCUMENTS AND ORDER PLANNING */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">Documents & Export Support</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Commercial Documentation for Henna Powder Buyers</h2>
              <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/68">Documentation is coordinated for the confirmed product, commercial order and destination requirements.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Batch-specific COA with every commercial batch or order","SDS / MSDS available","Country of Origin Certificate or Statement available","Phytosanitary certificate arranged according to buyer or country requirements","Fumigation certificate arranged when required","Testing performed according to buyer instructions or requirements","Applicable commercial and export documentation","Incoterm coordination according to buyer requirements"].map((item) => <div key={item} className="border border-[#C9A962]/20 bg-[#071b14]/45 p-4 text-sm leading-7 text-[#F5F0E6]/72">{item}</div>)}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#F5F0E6]/62">Company certifications and registrations presently include ISO, GMP, Halal, Kosher, HACCP, MSME and FSSAI. Their applicability and scope should be reviewed against the selected product and buyer requirement; this list does not represent automatic product-specific or destination-market approval.</p>
              <p className="mt-7 border border-[#C9A962]/30 bg-[#071b14]/55 p-5 text-sm leading-7 text-[#F5F0E6]/62">The importer or buyer remains responsible for confirming applicable product classification, import, customs, registration, labelling and destination-market regulatory requirements. Documentation support does not imply automatic approval or customs clearance.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">Samples & Order Planning</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Plan Your Bulk, OEM or Private-Label Order</h2>
              <div className="mt-8 space-y-4">
                {[
                  ["Free Samples", "Free samples are available for prospective buyers. Sample details are confirmed after reviewing the required grade and application."],
                  ["Bulk Order Quantity", "Bulk Natural Henna Powder orders can start from 100 kg, subject to product, grade, packaging and commercial confirmation."],
                  ["Private-Label MOQ", "Private-label minimums vary by pack size, packaging format, artwork and design requirements, and customization."],
                  ["Typical Lead Time", "Approximately 10–15 days after commercial and order confirmation, subject to product, quantity, packaging and complete requirements. Transit and delivery times are not guaranteed."],
                  ["Payment & Shipping", "Payment terms are provided on quotation. Shipping and Incoterms can be coordinated according to buyer requirements and instructions."],
                ].map(([title, text]) => <article key={title} className="border border-[#C9A962]/22 bg-[#071b14]/45 p-5"><h3 className="text-xl font-semibold text-[#E4C878]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#F5F0E6]/68">{text}</p></article>)}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23]">Request Quote or Sample →</Link>
                <a href="/catalogues/Shivesh-International-Product-Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#C9A962]/55 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">View / Download Product Catalogue →</a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCUREMENT FAQ */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">Buyer Questions</p><h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">Natural Henna Powder Procurement FAQs</h2></div>
            <div className="mt-12 divide-y divide-[#173b2a]/15 border-y border-[#173b2a]/15">
              {procurementFaqs.map((faq, index) => <details key={faq.question} className="group"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6"><h3 className="text-xl font-semibold leading-snug"><span className="mr-4 text-[#9f7f36]">{String(index + 1).padStart(2, "0")}</span>{faq.question}</h3><span className="text-2xl text-[#9f7f36] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-[940px] pb-7 text-[15px] leading-8 text-[#4c5f54]">{faq.answer}</p></details>)}
            </div>
          </div>
        </RevealOnScroll>
      </section>
            
            {/* FINAL PRODUCT CTA */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Bulk & Private Label Henna Powder Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Looking for a Natural Henna Powder Manufacturer in India?
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#F5F0E6]/65">
              Contact Shivesh International for bulk, wholesale, OEM and
  private-label Natural Henna Powder supply from India. Share the
  product grade, required quantity, mesh requirement, Lawsone
  requirement where applicable, pack size, bulk, private-label or
  OEM scope, destination country or port, required documents and
  your company contact details. Bulk orders can start from 100 kg;
  private-label minimums depend on packaging and customization.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
              >
                Request Henna Powder Quote
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                WhatsApp Export Team
                <span>→</span>
              </a>
              <a
                href="/catalogues/Shivesh-International-Product-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                View Product Catalogue
                <span>→</span>
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[10px] font-bold uppercase tracking-[0.18em]">
  <Link
    href="/export"
    className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
  >
    View Export Services
  </Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link
    href="/infrastructure"
    className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
  >
    View Manufacturing Infrastructure
  </Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link
    href="/products/natural-indigo-powder"
    className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
  >
    Explore Natural Indigo Powder
  </Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/products/natural-henna-hair-colors" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Natural Henna Hair Colors</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/products/henna-based-hair-colors" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Henna-Based Hair Colors</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/certifications" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Certifications</Link>

  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/55 sm:block" />

  <Link href="/resources" className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]">Buyer Resources</Link>
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
