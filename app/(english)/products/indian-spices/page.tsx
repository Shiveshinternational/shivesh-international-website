import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import ProductHero from "@/app/components/ProductHero";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import ProductCardModal from "@/app/components/ProductCardModal";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Indian Spices Manufacturer, Exporter & Supplier India | Shivesh International",
  },
  description:
    "Indian spices manufacturer, exporter and supplier from India offering 24 whole and powder spices for bulk, wholesale, OEM, ODM and private-label buyers.",
  alternates: {
    canonical: "/products/indian-spices",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shiveshinternational.com/products/indian-spices",
    siteName: "Shivesh International",
    title:
      "Indian Spices Manufacturer, Exporter & Supplier India",
    description:
      "Explore 24 whole and powder Indian spices for importers, distributors, food-service companies, OEM, ODM and private-label buyers.",
    images: [
      {
        url: "/images/products/indian-spices/indian-spices-hero-final-v1.png",
        width: 1200,
        height: 630,
        alt: "Indian Spices manufacturer exporter and bulk supplier from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Indian Spices Manufacturer, Exporter & Supplier India",
    description:
      "24 whole and powder spices for bulk, wholesale, OEM, ODM and private-label buyers worldwide.",
    images: [
      "/images/products/indian-spices/indian-spices-hero-final-v1.png",
    ],
  },
};

const procurementFaqs = [
  {
    question: "How many Indian spice products are available?",
    answer:
      "The approved portfolio contains exactly 24 Indian spice products: 12 powder spices and 12 whole spices. Blended spices can also be supplied according to buyer instructions or requirements, subject to confirmation.",
  },
  {
    question: "Where are the spices manufactured and sourced?",
    answer:
      "All 24 listed products are manufactured in India, their raw materials are sourced in India and their country of origin is India.",
  },
  {
    question: "What is the bulk minimum order quantity?",
    answer:
      "Orders can start from 100 kg per spice or item, subject to commercial and product confirmation.",
  },
  {
    question: "What is the private-label MOQ?",
    answer:
      "Private-label minimums vary according to pack size, packaging, artwork, design, customization and commercial feasibility.",
  },
  {
    question: "Which retail and bulk packaging sizes are available?",
    answer:
      "Retail and private-label packs are available in 100 g, 200 g, 500 g and 1 kg. Bulk packaging is available in 20 kg and 25 kg double-layer vacuum packing.",
  },
  {
    question: "Are OEM, ODM and private-label services available?",
    answer:
      "Yes. OEM, ODM and private-label services are available with buyer logo, buyer artwork, custom branding and printed packaging, subject to commercial and technical feasibility.",
  },
  {
    question: "Which spice quality tests can be coordinated?",
    answer:
      "Testing can be coordinated according to buyer and product requirements, including where applicable microbiological, heavy metals, pesticide residue, aflatoxin, adulteration, foreign matter, moisture, mesh or particle size and other agreed product-specific parameters, subject to confirmation.",
  },
  {
    question: "Which commercial and export documents are available?",
    answer:
      "A COA is available with every commercial batch or order. SDS or MSDS and a Country of Origin Certificate or Statement are available. Phytosanitary and Fumigation Certificates are available on requirement.",
  },
  {
    question: "Are free samples available?",
    answer:
      "Yes. Free samples are available for prospective buyers, subject to product and requirement review.",
  },
  {
    question: "What is the shelf life of the spices?",
    answer:
      "Shelf life varies by spice or product. The applicable shelf life and storage information are confirmed for the selected item and agreed specification.",
  },
  {
    question: "What is the typical lead time?",
    answer:
      "Typical lead time is approximately 10–15 days after commercial and order confirmation, subject to complete order requirements.",
  },
  {
    question: "How are Incoterms coordinated?",
    answer:
      "Incoterms are coordinated according to buyer requirement and the quotation.",
  },
  {
    question: "What should a buyer include in an Indian spices RFQ?",
    answer:
      "Include the selected spice products, whole, powder or buyer-instructed blend requirement, quantity, pack size, destination country or port, OEM, ODM or private-label scope, artwork or logo needs, required testing and documents, Incoterm requirement and company contact details.",
  },
];

const powderSpices = [
  { name: "Black Pepper Powder", image: "Black Pepper Powder.png", botanical: "Piper nigrum", application: "Seasonings, spice blends, sauces and packaged foods" },
  { name: "Cardamom Powder", image: "Cardamom Powder.png", botanical: "Elettaria cardamomum", application: "Beverages, bakery, confectionery and seasoning blends" },
  { name: "Cinnamon Powder", image: "Cinnamon Powder.png", botanical: "Cinnamomum species", application: "Bakery, beverages, sauces and seasoning blends" },
  { name: "Clove Powder", image: "Clove Powder.png", botanical: "Syzygium aromaticum", application: "Seasonings, bakery, beverages and prepared foods" },
  { name: "Coriander Seeds Powder", image: "Coriander Seeds Powder.png", botanical: "Coriandrum sativum", application: "Curries, seasoning blends, sauces and packaged foods" },
  { name: "Cumin Seeds Powder", image: "Cumin Seeds Powder.png", botanical: "Cuminum cyminum", application: "Curries, seasonings, sauces and ready-to-eat foods" },
  { name: "Dry Garlic Powder", image: "Dry Garlic Powder.png", botanical: "Allium sativum", application: "Sauces, snacks, seasonings and processed foods" },
  { name: "Dry Ginger Powder", image: "Dry Ginger Powder.png", botanical: "Zingiber officinale", application: "Beverages, bakery, sauces and seasoning blends" },
  { name: "Fennel Seeds Powder", image: "Fennel Seeds Powder.png", botanical: "Foeniculum vulgare", application: "Seasonings, bakery, beverages and food-service recipes" },
  { name: "Fenugreek Seeds Powder", image: "Fenugreek Seeds Powder.png", botanical: "Trigonella foenum-graecum", application: "Curries, seasoning blends and packaged foods" },
  { name: "Red Chilli Powder", image: "Red Chilli Powder.png", botanical: "Capsicum species", application: "Seasonings, sauces, snacks and ready-to-eat foods" },
  { name: "Turmeric Powder", image: "Turmeric Powder.png", botanical: "Curcuma longa", application: "Curries, seasoning blends, sauces and packaged foods" },
];

const wholeSpices = [
  { name: "Turmeric Finger", image: "Turmeric Finger.png", botanical: "Curcuma longa", application: "Food-service preparation, milling and spice processing" },
  { name: "Whole Black Pepper", image: "Whole Black Pepper.png", botanical: "Piper nigrum", application: "Food service, milling, seasoning blends and packaged foods" },
  { name: "Whole Cardamom", image: "Whole Cardamon.png", botanical: "Elettaria cardamomum", application: "Beverages, bakery, food service and seasoning blends" },
  { name: "Whole Clove", image: "Whole Clove.png", botanical: "Syzygium aromaticum", application: "Food service, beverages, bakery and spice blends" },
  { name: "Whole Coriander Seeds", image: "Whole Coriander Seeds.png", botanical: "Coriandrum sativum", application: "Milling, curries, seasoning blends and food service" },
  { name: "Whole Cumin Seeds", image: "Whole Cumin Seeds.png", botanical: "Cuminum cyminum", application: "Food service, milling, curries and seasoning blends" },
  { name: "Whole Dry Garlic", image: "Whole Dry Garlic.png", botanical: "Allium sativum", application: "Food processing, sauces, seasonings and prepared foods" },
  { name: "Whole Dry Ginger", image: "Whole Dry Ginger.png", botanical: "Zingiber officinale", application: "Food processing, beverages, bakery and seasonings" },
  { name: "Whole Fennel Seeds", image: "Whole Fennel Seeds.png", botanical: "Foeniculum vulgare", application: "Food service, bakery, beverages and seasoning blends" },
  { name: "Whole Fenugreek Seeds", image: "Whole Fenugreek Seeds.png", botanical: "Trigonella foenum-graecum", application: "Food service, curries, pickling and seasoning blends" },
  { name: "Whole Red Chilli", image: "Whole Red Chilli.png", botanical: "Capsicum species", application: "Food service, sauces, seasoning blends and processing" },
  { name: "Cinnamon Stick", image: "Cinnamon Stick.png", botanical: "Cinnamomum species", application: "Food service, beverages, bakery and spice blends" },
];

const spiceImageDimensions: Record<string, { width: number; height: number }> = {
  "Black Pepper Powder.png": { width: 1149, height: 1369 },
  "Cardamom Powder.png": { width: 1149, height: 1369 },
  "Cinnamon Powder.png": { width: 1122, height: 1402 },
  "Clove Powder.png": { width: 1149, height: 1369 },
  "Coriander Seeds Powder.png": { width: 1149, height: 1369 },
  "Cumin Seeds Powder.png": { width: 1149, height: 1369 },
  "Dry Garlic Powder.png": { width: 1149, height: 1369 },
  "Dry Ginger Powder.png": { width: 1122, height: 1402 },
  "Fennel Seeds Powder.png": { width: 1122, height: 1402 },
  "Fenugreek Seeds Powder.png": { width: 1150, height: 1367 },
  "Red Chilli Powder.png": { width: 1122, height: 1402 },
  "Turmeric Powder.png": { width: 1122, height: 1402 },
  "Turmeric Finger.png": { width: 1149, height: 1369 },
  "Whole Black Pepper.png": { width: 1149, height: 1369 },
  "Whole Cardamon.png": { width: 1086, height: 1448 },
  "Whole Clove.png": { width: 1086, height: 1448 },
  "Whole Coriander Seeds.png": { width: 1086, height: 1448 },
  "Whole Cumin Seeds.png": { width: 1122, height: 1402 },
  "Whole Dry Garlic.png": { width: 1122, height: 1402 },
  "Whole Dry Ginger.png": { width: 1086, height: 1448 },
  "Whole Fennel Seeds.png": { width: 1122, height: 1402 },
  "Whole Fenugreek Seeds.png": { width: 1055, height: 1491 },
  "Whole Red Chilli.png": { width: 1122, height: 1402 },
  "Cinnamon Stick.png": { width: 1183, height: 1329 },
};

const indianSpicesStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://shiveshinternational.com/products/indian-spices#product",
      name: "Indian Spices",
      alternateName: [
        "Whole Indian Spices",
        "Indian Spice Powders",
        "Bulk Indian Spices",
        "Private Label Spices",
      ],
      url: "https://shiveshinternational.com/products/indian-spices",
      image:
        "https://shiveshinternational.com/images/products/indian-spices/indian-spices-hero-final-v1.png",
      description:
        "A portfolio of 24 whole and powder Indian spices manufactured, supplied and exported from India for importers, distributors, food-service companies, OEM, ODM and private-label buyers.",
      category: "Whole Spices and Spice Powders",
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
          "Importers, distributors, wholesalers, retailers, hotels, caterers, food-service companies, packaged-food manufacturers, sauce and seasoning manufacturers, sourcing companies, OEM, ODM, private-label and bulk buyers",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Portfolio Size",
          value: "24 Products: 12 Powder Spices and 12 Whole Spices",
        },
        {
          "@type": "PropertyValue",
          name: "Available Forms",
          value: "Whole and Powder Spices; Blended Spices according to Buyer Instructions or Requirements",
        },
        {
          "@type": "PropertyValue",
          name: "Manufacturing and Raw-Material Origin",
          value: "India",
        },
        {
          "@type": "PropertyValue",
          name: "Bulk Minimum Order",
          value: "Orders Can Start from 100 kg per Spice or Item, Subject to Commercial and Product Confirmation",
        },
        {
          "@type": "PropertyValue",
          name: "Private-Label MOQ",
          value: "Varies by Pack Size, Packaging, Artwork, Design, Customization and Commercial Feasibility",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value: "100 g, 200 g, 500 g and 1 kg Retail or Private-Label Packs; 20 kg and 25 kg Double-Layer Vacuum Bulk Packing",
        },
        {
          "@type": "PropertyValue",
          name: "Supply Services",
          value: "OEM, ODM, Buyer Logo, Artwork, Custom Branding and Printed Packaging Available",
        },
        {
          "@type": "PropertyValue",
          name: "Quality Testing",
          value: "According to Buyer and Product Requirements, Subject to Confirmation",
        },
        {
          "@type": "PropertyValue",
          name: "Shelf Life",
          value: "Varies by Spice or Product",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://shiveshinternational.com/products/indian-spices#webpage",
      url: "https://shiveshinternational.com/products/indian-spices",
      name: "Indian Spices Manufacturer, Exporter and Supplier India",
      description:
        "Commercial product and procurement information for 24 whole and powder Indian spices manufactured, supplied and exported from India.",
      isPartOf: {
        "@id": "https://shiveshinternational.com/#website",
      },
      about: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      breadcrumb: {
        "@id": "https://shiveshinternational.com/products/indian-spices#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/indian-spices#breadcrumb",
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
          name: "Indian Spices",
          item: "https://shiveshinternational.com/products/indian-spices",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://shiveshinternational.com/products/indian-spices#faq",
      mainEntity: procurementFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

type SpiceCardProps = {
  name: string;
  image: string;
  botanical: string;
  application: string;
  index: number;
  category: string;
};

function SpiceCard({ name, image, botanical, application, index, category }: SpiceCardProps) {
  const imagePath = `/images/products/indian-spices/${image}`;
  const imageDimensions = spiceImageDimensions[image];
  const renderedImageHeight = 125;
  const renderedImagePadding = 16;
  const renderedImageWidth =
    renderedImagePadding +
    ((renderedImageHeight - renderedImagePadding) * imageDimensions.width) /
      imageDimensions.height;

  return (
    <StaggerItem delay={(index % 6) * 40}>
      <ProductCardModal
        src={imagePath}
        alt={`${name} manufacturer exporter and bulk supplier from India`}
        category={category}
        description={`${name} (${botanical}) for ${application.toLowerCase()}. Available for bulk export, food-service, OEM, ODM and private-label requirements from India.`}
      >
        <article className="group relative h-full overflow-hidden rounded-[20px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_12px_34px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_52px_rgba(0,0,0,0.25)]">
          <div className="relative flex h-[155px] items-center justify-center overflow-hidden bg-[#f3ecdf] p-4">
            <Image
              src={imagePath}
              alt={`${name} bulk wholesale and private-label Indian spice product`}
              width={imageDimensions.width}
              height={imageDimensions.height}
              style={{ height: renderedImageHeight, width: renderedImageWidth }}
              className="rounded-[14px] bg-white/90 p-2 object-contain shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/8 via-transparent to-white/20" />

            <div className="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] px-2 text-[8px] font-bold text-[#E4C878]">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="p-4">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
              {category}
            </p>

            <h3 className="mt-2 min-h-[48px] font-[family-name:var(--font-playfair)] text-[16px] font-semibold leading-[1.35] text-[#173b2a]">
              {name}
            </h3>

            <div className="mt-3 h-px w-9 bg-[#C9A962]" />

            <p className="mt-3 text-[11px] leading-5 text-[#4c5f54]">
              Available for bulk export, wholesale supply and private-label requirements.
            </p>

            <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8B6A1E] transition-all duration-300 group-hover:gap-3 group-hover:text-[#173b2a]">
              View Spice Details
              <span>→</span>
            </span>
          </div>
        </article>
      </ProductCardModal>
    </StaggerItem>
  );
}

export default function IndianSpicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...indianSpicesStructuredData,
            "@graph": indianSpicesStructuredData["@graph"].slice(1),
          }).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Navbar />

      {/* HERO */}
      <ProductHero
        compact
        eyebrow="Manufacturer · Exporter · Supplier"
        title="Indian Spices"
        subtitle="24 Whole & Powder Spices for Global B2B Buyers"
        description="Shivesh International is an Indian spices manufacturer, exporter and supplier from India, offering 12 powder spices and 12 whole spices for importers, distributors, wholesalers, retailers, food-service companies, OEM, ODM and private-label buyers worldwide."
        heroImage="/images/products/indian-spices/indian-spices-hero-final-v1.png"
        heroImageAlt="Indian Spices manufacturer exporter and bulk spice supplier from India"
        primaryButtonLabel="Explore Indian Spices"
        primaryButtonHref="#spices-collection"
        secondaryButtonLabel="Request Bulk Quote"
        secondaryButtonHref="/contact"
        highlights={[
          { value: "24", label: "Spice Products" },
          { value: "Whole", label: "& Powder" },
          { value: "Indian", label: "Origin" },
          { value: "OEM · ODM", label: "Private Label" },
        ]}
      />

      {/* ABOUT INDIAN SPICES */}
      <section
        id="about-indian-spices"
        className="relative overflow-hidden bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[520px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/indian-spices/indian-spices-about-final-v2.png"
                  alt="Whole Indian spices and spice powders manufacturer supplier from India"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />

                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Authentic Indian Spice Portfolio
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Whole and Powder Spices for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    About Indian Spices
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Indian Spices Manufacturer
                  <span className="block text-[#9f7f36]">
                    Exporter and Bulk Supplier from India
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={340}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Authentic whole Indian spices and spice powders prepared for
                  commercial, wholesale, food-service and export markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={460}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Shivesh International is an Indian Spices manufacturer,
                    exporter, supplier and wholesaler serving professional
                    buyers across international food and retail markets.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Our range includes widely traded products such as Black
                    Pepper, Cardamom, Cinnamon, Clove, Coriander, Cumin, Dry
                    Garlic, Dry Ginger, Fennel, Fenugreek, Red Chilli and
                    Turmeric.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    All 24 listed products are manufactured in India from raw
                    materials sourced in India. Products are supplied as whole
                    spices and spice powders, while blended spices can be
                    supplied according to buyer instructions or requirements.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    We support importers, distributors, wholesalers, retailers,
                    hotels, caterers, food-service companies, packaged-food
                    manufacturers, sauce and seasoning manufacturers, sourcing
                    companies and private-label brands with bulk spice supply,
                    OEM, ODM and export-order coordination.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={580}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#spices-collection"
                    className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    View Complete Collection
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]"
                  >
                    Discuss Bulk Supply
                    <span>→</span>
                  </Link>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMPLETE SPICES COLLECTION */}
      <section
        id="spices-collection"
        className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <div>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Bulk Spice Products from India
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Complete Whole & Powder Indian Spices Collection
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Explore whole Indian spices and spice powders manufactured,
                exported and supplied for importers, wholesalers, food brands,
                retailers and private-label buyers worldwide.
              </p>
            </div>

            <div className="mt-14">
              <div className="flex items-center justify-center gap-5">
                <span className="h-[2px] w-16 bg-[#C9A962]" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                  Powder Spices
                </p>
                <span className="h-[2px] w-16 bg-[#C9A962]" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {powderSpices.map((spice, index) => (
                  <SpiceCard
                    key={spice.name}
                    {...spice}
                    index={index}
                    category="Indian Spice Powder Manufacturer & Exporter"
                  />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <div className="flex items-center justify-center gap-5">
                <span className="h-[2px] w-16 bg-[#C9A962]" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                  Whole Spices
                </p>
                <span className="h-[2px] w-16 bg-[#C9A962]" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {wholeSpices.map((spice, index) => (
                  <SpiceCard
                    key={spice.name}
                    {...spice}
                    index={index}
                    category="Whole Indian Spice Manufacturer & Exporter"
                  />
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-5 text-center">
              <p className="text-sm leading-7 text-[#F5F0E6]/65">
                Product form, grade, mesh size, processing, packaging and
                availability may vary according to the selected spice, order
                quantity, destination market and agreed buyer specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR INDIAN SPICES */}
      <section
        id="why-choose-our-indian-spices"
        className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[440px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_28px_75px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/indian-spices/indian-spices-quality-inspection-final-v1.png"
                  alt="Quality inspection of Indian spices for bulk export supply"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Premium Indian Spice Range
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Quality-Focused Spices for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Why Choose Our Spices
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Why Global Buyers Choose Our Indian Spices
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#4c5f54]">
                  Our whole spices and spice powders are prepared for importers,
                  wholesalers, food manufacturers, retail companies and
                  private-label brands requiring bulk export supply from India.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Authentic Indian Origin",
                      text: "All 24 listed whole and powder spices are manufactured in India from raw materials sourced in India.",
                    },
                    {
                      title: "Whole and Powder Forms",
                      text: "A coordinated range of whole spices and spice powders for varied buyer requirements.",
                    },
                    {
                      title: "Quality-Focused Processing",
                      text: "Processing and testing are coordinated according to the selected spice, buyer requirements and agreed specification.",
                    },
                    {
                      title: "Buyer-Specific Specifications",
                      text: "Food-grade positioning, product parameters and testing requirements are confirmed for the selected spice and order.",
                    },
                    {
                      title: "Retail and Bulk Supply",
                      text: "Suitable formats are available for importers, wholesalers, retailers and food businesses.",
                    },
                    {
                      title: "Private-Label Support",
                      text: "OEM, ODM, buyer logo, artwork, custom branding and printed packaging are available subject to feasibility.",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="border-b border-[#C9A962]/22 pb-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[11px] text-[#E4C878]">
                          ✓
                        </span>

                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#173b2a]">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#4c5f54]">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROFESSIONAL BUYERS */}
      <section
        id="professional-spice-buyers"
        className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1400px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
                International Food & B2B Supply
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Indian Spices for Professional Food Buyers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Commercial whole spices, ground spice powders and buyer-instructed blends from India for procurement, distribution, food service, manufacturing and private-label programmes.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Importers", "Product, documentation and destination-based export coordination."],
                ["Distributors & Wholesalers", "A 24-product portfolio for regional wholesale and distribution channels."],
                ["Retailers & Spice Brands", "Retail and private-label pack planning with custom branding support."],
                ["Hotels & Caterers", "Whole and powder spices for professional kitchen and catering requirements."],
                ["Food-Service Companies", "Commercial spice supply for multi-location and institutional food operations."],
                ["Packaged-Food Manufacturers", "Spices for ready-to-eat foods, snacks, sauces and processed-food applications."],
                ["Sauce & Seasoning Manufacturers", "Powders, whole spices and buyer-instructed blends for commercial formulations."],
                ["Sourcing, OEM, ODM & Bulk Buyers", "Multi-product RFQ, branding, specification and export-order coordination."],
              ].map(([title, text], index) => (
                <StaggerItem key={title} delay={(index % 4) * 60}>
                  <article className="h-full border border-[#C9A962]/22 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-white/[0.07]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A962]">
                      Buyer {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">{text}</p>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23]">
                Discuss Your Spice Requirement →
              </Link>
              <Link href="/export" className="inline-flex border border-[#C9A962]/55 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">
                Review Export Support →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section
        id="indian-spices-product-specifications"
        className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Product Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Indian Spices Product Specifications
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Review general commercial specifications for our bulk whole
                Indian spices and spice powders. Final parameters depend on
                the selected spice, form, grade and buyer requirements.
              </p>
            </div>

            <StaggerItem delay={120}>
              <div className="mt-12 overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] shadow-[0_24px_65px_rgba(0,0,0,0.11)]">
                <div className="hidden grid-cols-[0.9fr_1.1fr] bg-[#102f23] px-5 py-4 text-[#F5F0E6] sm:grid sm:px-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Parameter
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Product Information
                  </p>
                </div>

                {[
                  ["Product Category", "Indian Spices"],
                  ["Portfolio Size", "Exactly 24 Products: 12 Powder Spices and 12 Whole Spices"],
                  ["Manufacturing Origin", "India"],
                  ["Raw-Material Origin", "India"],
                  ["Country of Origin", "India for All 24 Listed Products"],
                  ["Available Forms", "Whole and Powder Spices; Blended Spices according to Buyer Instructions or Requirements"],
                  ["Commercial Positioning", "Food-Grade Indian Spices for Professional Food and B2B Requirements"],
                  ["Quality Testing", "According to Buyer and Product Requirements, Subject to Confirmation"],
                  ["Bulk Minimum Order", "Orders Can Start from 100 kg per Spice or Item, Subject to Commercial and Product Confirmation"],
                  ["Private-Label MOQ", "Varies by Pack Size, Packaging, Artwork, Design, Customization and Commercial Feasibility"],
                  ["Retail / Private-Label Packs", "100 g, 200 g, 500 g and 1 kg"],
                  ["Bulk Packaging", "20 kg and 25 kg Double-Layer Vacuum Packing"],
                  ["OEM / ODM", "Available"],
                  ["Private Label", "Buyer Logo, Artwork, Custom Branding and Printed Packaging Available, Subject to Feasibility"],
                  ["Shelf Life", "Varies by Spice or Product and Is Confirmed for the Selected Item"],
                  ["Storage", "Store in a Cool, Dry Place Away from Direct Sunlight and Moisture"],
                  ["Technical Documents", "COA with Every Commercial Batch or Order; SDS/MSDS and Country of Origin Certificate or Statement Available"],
                ].map(([parameter, value], index) => (
                  <div
                    key={parameter}
                    className={`grid gap-2 border-t border-[#173b2a]/10 px-5 py-4 transition-colors duration-300 hover:bg-[#C9A962]/8 sm:grid-cols-[0.9fr_1.1fr] sm:gap-0 sm:px-7 ${
                      index % 2 === 0 ? "bg-[#f5f0e6]" : "bg-[#eee6d8]"
                    }`}
                  >
                    <p className="pr-4 text-sm font-bold uppercase tracking-[0.12em] text-[#8B6A1E] sm:text-[15px]">
                      {parameter}
                    </p>
                    <p className="leading-7 text-[#173b2a] sm:pl-4">{value}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <div className="mx-auto mt-7 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6]">
              <p className="text-sm leading-7 text-[#F5F0E6]/68">
                Detailed purity, moisture, mesh, microbiological, heavy-metal,
                pesticide-residue, aflatoxin and other laboratory parameters
                are supplied directly according to the selected spice and
                confirmed buyer requirements. No fixed numerical limits apply
                across the complete portfolio.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PACKAGING & PRIVATE LABEL */}
      <section
        id="indian-spices-packaging-private-label"
        className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Packaging & Private Label
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl">
                Indian Spices Bulk Packaging & Private Label
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Our food-grade whole Indian spices and spice powders are
                available in defined retail, private-label and bulk export
                formats for importers, food businesses, OEM and ODM buyers.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[24px] border border-[#C9A962]/30 bg-white/[0.05] p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#C9A962]">
                  Available Pack Sizes
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Retail & Private-Label Packs
                </h3>

                <p className="mt-5 leading-8 text-[#F5F0E6]/70">
                  Retail and private-label packs: 100 g, 200 g, 500 g and 1 kg.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 text-[#173b2a]">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#9f7f36]">
                  Packaging Formats
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Bulk Export Packaging
                </h3>

                <p className="mt-5 leading-8">
                  20 kg and 25 kg double-layer vacuum packing for confirmed
                  bulk orders.
                </p>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "OEM Indian Spices Manufacturing",
                "ODM Spice Product Support",
                "Private Label Spice Products",
                "Buyer Logo & Artwork",
                "Custom Branding",
                "Printed Packaging",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[#C9A962]/25 bg-white/[0.05] p-5 text-center font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMMERCIAL DOCUMENTATION AND ORDER PLANNING */}
      <section
        id="commercial-documentation"
        className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-2">
            <article className="border border-[#C9A962]/30 bg-[#102f23] p-7 text-[#F5F0E6] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
                Commercial Documentation
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Spice Testing and Export Documentation
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/68">
                Product testing and documentation are coordinated for the selected whole spice, powder or buyer-instructed blend, confirmed order and destination requirements.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "COA with Every Commercial Batch or Order",
                  "SDS / MSDS Available",
                  "Country of Origin Certificate or Statement Available",
                  "Phytosanitary Certificate Available on Requirement",
                  "Fumigation Certificate Available on Requirement",
                  "Microbiological Testing Where Applicable",
                  "Heavy Metals, Pesticide Residue and Aflatoxin Testing Where Applicable",
                  "Adulteration, Foreign Matter, Moisture and Particle-Size Testing Where Applicable",
                ].map((item) => (
                  <div key={item} className="border border-[#C9A962]/20 bg-[#071b14]/45 p-4 text-sm leading-7 text-[#F5F0E6]/72">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border border-[#C9A962]/30 bg-[#071b14]/55 p-5 text-sm leading-7 text-[#F5F0E6]/62">
                Testing is coordinated according to buyer and product requirements, subject to confirmation. Numerical limits and final specifications are product-specific and are not represented as universal across the range.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#F5F0E6]/62">
                Company certifications and registrations that may be referenced where applicable include ISO, GMP, Halal, Kosher, HACCP, MSME and FSSAI. These do not imply that every individual spice independently carries every certification.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#F5F0E6]/62">
                The buyer or importer remains responsible for confirming product classification, import requirements, registration, labeling, customs and destination-market regulatory requirements. Documentation support does not guarantee regulatory approval or customs clearance.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/certifications" className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">
                  Review Company Certifications →
                </Link>
                <Link href="/resources" className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">
                  Buyer Resources →
                </Link>
              </div>
            </article>

            <article className="border border-[#C9A962]/30 bg-[#f5f0e6] p-7 text-[#173b2a] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
                Samples & Order Planning
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Plan a Bulk, OEM, ODM or Private-Label Spice Order
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  ["Free Samples", "Available for prospective buyers, subject to product and requirement review."],
                  ["Bulk Minimum Order", "Orders can start from 100 kg per spice or item, subject to commercial and product confirmation."],
                  ["Private-Label MOQ", "Varies by pack size, packaging, artwork, design, customization and commercial feasibility."],
                  ["Typical Lead Time", "Approximately 10–15 days after commercial and order confirmation, subject to complete order requirements."],
                  ["Incoterms", "According to buyer requirement and quotation."],
                  ["Shelf Life", "Varies by spice or product and is confirmed for the selected item."],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-2 border-b border-[#173b2a]/12 pb-4 sm:grid-cols-[145px_1fr]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">{label}</p>
                    <p className="text-sm leading-7 text-[#4c5f54]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-[#C9A962]/35 bg-[#ede5d7] p-5">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">What to Include in Your RFQ</h3>
                <p className="mt-4 text-sm leading-7 text-[#4c5f54]">
                  Share the selected spice products, whole, powder or buyer-instructed blend requirement, quantity, pack size, destination country or port, OEM, ODM or private-label scope, artwork or logo needs, required testing and documents, Incoterm requirement and company details.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex bg-[#102f23] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]">
                  Request Quote or Free Sample →
                </Link>
                <a href="/catalogues/Shivesh-International-Product-Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#173b2a]/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173b2a]">
                  View / Download Product Catalogue →
                </a>
              </div>
            </article>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCUREMENT FAQ */}
      <section id="procurement-faq" className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">Buyer Questions</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Indian Spices Procurement FAQs
              </h2>
            </div>
            <div className="mt-12 divide-y divide-[#173b2a]/15 border-y border-[#173b2a]/15">
              {procurementFaqs.map((faq, index) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
                    <h3 className="text-xl font-semibold leading-snug">
                      <span className="mr-4 text-[#9f7f36]">{String(index + 1).padStart(2, "0")}</span>
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#9f7f36] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-[940px] pb-7 text-[15px] leading-8 text-[#4c5f54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* FINAL CTA */}
      <section
        id="indian-spices-buyer-enquiry"
        className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6]"
      >
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[160px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Premium Indian Spice Products
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Looking for an Indian Spices Manufacturer, Exporter and Supplier?
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">
              Contact Shivesh International for bulk whole spices, spice
              powders, buyer-instructed blends, wholesale export supply, OEM,
              ODM and private-label packaging. Orders can start from 100 kg per
              spice or item, subject to commercial and product confirmation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23]"
              >
                Request Bulk Spices Quote →
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em]"
              >
                WhatsApp Export Team →
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.18em]">
              <Link
                href="/export"
                className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
              >
                View Export Services
              </Link>

              <Link
                href="/infrastructure"
                className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
              >
                View Manufacturing Infrastructure
              </Link>

              <Link
                href="/products/ayurvedic-indian-herbs"
                className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
              >
                Explore Ayurvedic Indian Herbs
              </Link>

              <Link href="/products/natural-henna-powder" className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]">
                Natural Henna Powder
              </Link>

              <Link href="/products/natural-indigo-powder" className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]">
                Natural Indigo Powder
              </Link>

              <Link href="/products/natural-henna-hair-colors" className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]">
                Natural Henna Hair Colors
              </Link>

              <Link href="/products/henna-based-hair-colors" className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]">
                Henna-Based Hair Colors
              </Link>
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
