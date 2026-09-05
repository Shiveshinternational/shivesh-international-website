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
      "Ayurvedic Indian Herbs Manufacturer, Exporter & Supplier | Shivesh International",
  },
  description:
    "Ayurvedic Indian Herbs manufacturer, exporter and supplier in India offering 72 herbal products for bulk, wholesale, OEM, ODM and private-label buyers.",
  alternates: {
    canonical: "/products/ayurvedic-indian-herbs",
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
    url: "https://shiveshinternational.com/products/ayurvedic-indian-herbs",
    siteName: "Shivesh International",
    title:
      "Ayurvedic Indian Herbs Manufacturer, Exporter & Supplier India",
    description:
      "Explore 72 Ayurvedic herbs, botanical powders and product-specific forms for importers, distributors, brands, OEM, ODM and private-label buyers.",
    images: [
      {
        url: "/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Indian Herbs manufacturer exporter and supplier from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ayurvedic Indian Herbs Manufacturer, Exporter & Supplier India",
    description:
      "72 Ayurvedic herbal products for bulk, wholesale, OEM, ODM and private-label buyers worldwide.",
    images: [
      "/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png",
    ],
  },
};

const procurementFaqs = [
  {
    question: "How many Ayurvedic herbal products are available?",
    answer:
      "The current portfolio contains exactly 72 Ayurvedic Indian Herbs and related herbal products. Availability, form, grade and specifications are confirmed for the selected product and buyer requirement.",
  },
  {
    question: "Which product forms are available?",
    answer:
      "Depending on the herb or product and buyer requirement, availability may include Whole, Raw, Cut, Dried, Coarse, Powder and Extract forms. Not every product is available in every form, so the required form must be confirmed for the selected item.",
  },
  {
    question: "How are product grades and specifications confirmed?",
    answer:
      "Product-specific grades and specifications are available according to the selected herb, intended application, buyer requirements and destination-market requirements, subject to confirmation.",
  },
  {
    question: "Where are the products manufactured and sourced?",
    answer:
      "The products are manufactured and supplied from India, and the raw materials are sourced in India.",
  },
  {
    question: "What is the bulk minimum order quantity?",
    answer:
      "Bulk orders can start from 100 kg per herb or item, subject to commercial and product confirmation.",
  },
  {
    question: "What is the private-label MOQ?",
    answer:
      "Private-label minimums vary by pack size, packaging, artwork, design, customization and commercial feasibility.",
  },
  {
    question: "Which retail and bulk packaging sizes are available?",
    answer:
      "Retail and private-label packs are available in 100 g, 200 g, 500 g and 1 kg. Bulk packaging is available in 20 kg and 25 kg double-layer vacuum packing.",
  },
  {
    question: "Are OEM, ODM and private-label services available?",
    answer:
      "Yes. OEM, ODM and private-label services are available, including buyer logo, artwork and custom branding, subject to product, packaging, technical and commercial feasibility.",
  },
  {
    question: "How are the herbs and herbal products quality tested?",
    answer:
      "Quality testing is coordinated according to buyer instructions or requirements and the requirements of the selected product. Specifications and testing parameters are product-specific and can be supplied according to confirmed buyer requirements.",
  },
  {
    question: "Are COA and SDS/MSDS documents available?",
    answer:
      "Yes. A COA is available with the commercial batch or order, and SDS/MSDS documentation is available.",
  },
  {
    question: "Is Country of Origin documentation available?",
    answer:
      "Yes. A Country of Origin Certificate or Statement is available for commercial orders.",
  },
  {
    question: "Can phytosanitary and fumigation certificates be arranged?",
    answer:
      "A Phytosanitary Certificate and Fumigation Certificate are available on requirement for the confirmed order or destination.",
  },
  {
    question: "Are free samples available?",
    answer:
      "Yes. Free samples are available for prospective buyers, subject to product and requirement review.",
  },
  {
    question: "What is the shelf life?",
    answer:
      "Shelf life varies by herb or product. The applicable shelf life and storage information are confirmed for the selected item and agreed specification.",
  },
  {
    question: "What is the typical lead time?",
    answer:
      "Typical lead time is approximately 10–15 days after commercial and order confirmation, subject to complete order requirements. Transit and delivery times are not guaranteed.",
  },
  {
    question: "How are Incoterms coordinated?",
    answer:
      "Incoterms are coordinated according to buyer requirement and the quotation.",
  },
  {
    question: "How can a buyer request product-specific specifications?",
    answer:
      "Share the selected herb or product, required form, grade or intended application and required testing or documentation. Specifications and testing parameters are product-specific and can be supplied according to confirmed buyer requirements.",
  },
  {
    question: "What should an importer include in an RFQ?",
    answer:
      "Include the selected herb or products, required form, required grade or intended application, quantity, pack size, destination country or port, private-label, OEM or ODM requirements, artwork or logo needs, required documents, Incoterm requirement and company contact details.",
  },
];

const herbs = [
  { name: 'Adusa Powder', image: 'Adusa Powder.png' },
  { name: 'Aloe Vera Powder', image: 'Aloe Vera Powder.png' },
  { name: 'Amba Haldi Powder', image: 'Amba Haldi Powder.png' },
  { name: 'Amla Powder', image: 'Amla Powder.png' },
  { name: 'Arjuna Bark Powder', image: 'Arjuna Bark Powder.png' },
  { name: 'Ashoka Bark Powder', image: 'AshoKa Bark Powder.png' },
  { name: 'Ashwagandha Powder', image: 'Ashwagandha Powder.png' },
  { name: 'Babool Seed Powder', image: 'Babool Seed Powder.png' },
  { name: 'Baheda Powder', image: 'Baheda Powder.png' },
  { name: 'Barley Grass Powder', image: 'Barley Grass Powder.png' },
  { name: 'Basil Seeds Powder', image: 'Basil Seeds Powder.png' },
  { name: 'Bay Leaf Powder', image: 'Bay Leaf Powder.png' },
  { name: 'Beetroot Powder', image: 'Beetroot Powder.png' },
  { name: 'Baelgiri Powder', image: 'Belgiri Powder.png' },
  { name: 'Bhringraj Powder', image: 'Bhringraj Powder.png' },
  { name: 'Bhumi Amla Powder', image: 'Bhumi Amla Powder.png' },
  { name: 'Bitter Gourd Powder', image: 'Bitter Gourd Powder.png' },
  { name: 'Bottle Gourd Powder', image: 'Bottle Gourd Powder.png' },
  { name: 'Brahmi Powder', image: 'Brahmi Powder.png' },
  { name: 'Chia Seeds Powder', image: 'Chia Seeds Powder.png' },
  { name: 'Cinnamon Powder', image: 'Cinnamon Powder.png' },
  { name: 'Curry Leaf Powder', image: 'Curry Leaf Powder.png' },
  { name: 'Fenugreek Seed Powder', image: 'Fenugreek Seed Powder.png' },
  { name: 'Flaxseeds Powder', image: 'Flaxseeds Powder.png' },
  { name: 'Ginger Powder', image: 'Ginger Powder.png' },
  { name: 'Ginseng Powder', image: 'Ginseng Powder.png' },
  { name: 'Gokhru Powder', image: 'Gokhru Powder.png' },
  { name: 'Gond Katira Powder', image: 'Gond Katira Powder.png' },
  { name: 'Guava Leaf Powder', image: 'Guava Leaf Powder.png' },
  { name: 'Gudmar Powder', image: 'Gudmar Powder.png' },
  { name: 'Harad Powder', image: 'Harad Powder.png' },
  { name: 'Hibiscus Powder', image: 'Hibiscus Powder.png' },
  { name: 'Jamun Powder', image: 'Jamun Powder.png' },
  { name: 'Jatamansi Powder', image: 'Jatamansi Powder.png' },
  { name: 'Kalmegh Powder', image: 'Kalmegh Powder.png' },
  { name: 'Kalonji Powder', image: 'Kalonji Powder.png' },
  { name: 'Kapur Kachri Powder', image: 'Kapur Kachri Powder.png' },
  { name: 'Kapur Sugandhi Powder', image: 'Kapur Sugandhi Powder.png' },
  { name: 'Kasturi Manjal Powder', image: 'Kasturi Munjal Powder.png' },
  { name: 'Khas Powder', image: 'Khas Powder.png' },
  { name: 'Lemon Peel Powder', image: 'Lemon Peel Powder.png' },
  { name: 'Licorice Powder', image: 'Licorice Powder.png' },
  { name: 'Lodhra Powder', image: 'Lodhra Powder.png' },
  { name: 'Lotus Powder', image: 'Lotus Powder.png' },
  { name: 'Mango Kernel Powder', image: 'Mangi Kernel Powder.png' },
  { name: 'Manjistha Powder', image: 'Manjistha Powder.png' },
  { name: 'Methi Seeds Powder', image: 'Methi Seeds Powder.png' },
  { name: 'Mint Leaf Powder', image: 'Mint Leaf Powder.png' },
  { name: 'Moringa Powder', image: 'Moringa Powder.png' },
  { name: 'Multani Mitti Powder', image: 'Multani Mitti Powder.png' },
  { name: 'Nagarmotha Powder', image: 'Nagarmotha Powder.png' },
  { name: 'Neem Giloy Powder', image: 'Neem Giloy Powder.png' },
  { name: 'Neem Leaves Powder', image: 'Neem Leaves Powder.png' },
  { name: 'Orange Peel Powder', image: 'Orange Peel Powder.png' },
  { name: 'Papaya Leaf Powder', image: 'Papaya Leaf Powder.png' },
  { name: 'Pomegranate Peel Powder', image: 'Pomegranate Plee Powder.png' },
  { name: 'Pomegranate Powder', image: 'Pomegrante Powder.png' },
  { name: 'Punarnava Powder', image: 'Punarnava Powder.png' },
  { name: 'Ratanjot Powder', image: 'Ratanjot Powder.png' },
  { name: 'Rose Petal Powder', image: 'Rose Petal Powder.png' },
  { name: 'Shankhpushpi Powder', image: 'Shankpushpi Powder.png' },
  { name: 'Shatavari Powder', image: 'Shatavari Powder.png' },
  { name: 'Shikakai Powder', image: 'Shikakai Powder.png' },
  { name: 'Soapnut Powder', image: 'Soapnut Powder.png' },
  { name: 'Soapnut Shell Powder', image: 'Soapnut Shell Powder.png' },
  { name: 'Spirulina Powder', image: 'Spirulina Powder.png' },
  { name: 'Stevia Powder', image: 'Stevia Powder.png' },
  { name: 'Triphala Powder', image: 'Triphala Powder.png' },
  { name: 'Tulsi Leaf Powder', image: 'Tulsi Leaf Powder.png' },
  { name: 'Turmeric Powder', image: 'Turmeric Powder.png' },
  { name: 'Wheatgrass Powder', image: 'Wheat grass Powder.png' },
  { name: 'Katha Powder', image: 'katha powder.png' },
  
];
const ayurvedicHerbsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://shiveshinternational.com/products/ayurvedic-indian-herbs#product",
      name: "Ayurvedic Indian Herbs",
      alternateName: [
        "Ayurvedic Herbal Powders",
        "Bulk Indian Herbs",
        "Private Label Herbal Products",
      ],
      url:
        "https://shiveshinternational.com/products/ayurvedic-indian-herbs",
      image:
        "https://shiveshinternational.com/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png",
      description:
        "A portfolio of 72 Ayurvedic Indian Herbs and related herbal products manufactured, supplied and exported from India for importers, distributors, wholesalers, brands, OEM, ODM and private-label buyers.",
      category: "Ayurvedic Indian Herbs and Herbal Powders",
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
          "Importers, distributors, wholesalers, retailers, herbal brands, Ayurvedic brands, cosmetic brands, hair-care brands, wellness brands, sourcing companies, bulk buyers, OEM, ODM and private-label buyers",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Portfolio Size",
          value: "72 Ayurvedic Herbs and Related Herbal Products",
        },
        {
          "@type": "PropertyValue",
          name: "Available Forms",
          value:
            "Product-Specific Whole, Raw, Cut, Dried, Coarse, Powder and Extract Forms, Subject to Confirmation",
        },
        {
          "@type": "PropertyValue",
          name: "Available Grades",
          value:
            "Product-Specific Grades and Specifications Are Available according to the Selected Herb, Intended Application, Buyer Requirements and Destination-Market Requirements, Subject to Confirmation",
        },
        {
          "@type": "PropertyValue",
          name: "Raw-Material Origin",
          value: "India",
        },
        {
          "@type": "PropertyValue",
          name: "Bulk Minimum Order",
          value:
            "Orders Can Start from 100 kg per Herb or Item, Subject to Commercial and Product Confirmation",
        },
        {
          "@type": "PropertyValue",
          name: "Private-Label MOQ",
          value:
            "Varies by Pack Size, Packaging, Artwork, Design, Customization and Commercial Feasibility",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value:
            "100 g, 200 g, 500 g and 1 kg retail or private-label packs; 20 kg and 25 kg double-layer vacuum bulk packing",
        },
        {
          "@type": "PropertyValue",
          name: "Supply Services",
          value: "OEM, ODM, Buyer Logo, Artwork and Custom Branding Available",
        },
        {
          "@type": "PropertyValue",
          name: "Quality Testing",
          value:
            "According to Buyer Instructions or Requirements and Selected Product Requirements",
        },
        {
          "@type": "PropertyValue",
          name: "Shelf Life",
          value: "Varies by Herb or Product",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://shiveshinternational.com/products/ayurvedic-indian-herbs#webpage",
      url: "https://shiveshinternational.com/products/ayurvedic-indian-herbs",
      name: "Ayurvedic Indian Herbs Manufacturer, Exporter and Supplier India",
      description:
        "Commercial product and procurement information for 72 Ayurvedic Indian Herbs and related herbal products manufactured, supplied and exported from India.",
      isPartOf: {
        "@id": "https://shiveshinternational.com/#website",
      },
      about: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      breadcrumb: {
        "@id":
          "https://shiveshinternational.com/products/ayurvedic-indian-herbs#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shiveshinternational.com/products/ayurvedic-indian-herbs#breadcrumb",
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
          name: "Ayurvedic Indian Herbs",
          item:
            "https://shiveshinternational.com/products/ayurvedic-indian-herbs",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://shiveshinternational.com/products/ayurvedic-indian-herbs#faq",
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
export default function AyurvedicIndianHerbsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        ...ayurvedicHerbsStructuredData,
        "@graph": ayurvedicHerbsStructuredData["@graph"].slice(1),
      }).replace(
        /</g,
        "\\u003c"
      ),
    }}
  />
      <Navbar />

      <ProductHero
       compact
        eyebrow="Manufacturer · Exporter · Supplier"
title="Ayurvedic Indian Herbs"
subtitle="72 Herbal Products for Global B2B Buyers"
description="Shivesh International is an Ayurvedic Indian Herbs manufacturer, exporter and supplier from India, offering bulk herbs, botanical powders and product-specific forms for importers, distributors, brands, sourcing companies, OEM, ODM and private-label buyers worldwide."
heroImage="/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png"
heroImageAlt="Ayurvedic Indian Herbs manufacturer exporter and bulk herbal powder supplier from India"
primaryButtonLabel="Explore Herbal Products"
primaryButtonHref="#herbs-collection"
secondaryButtonLabel="Request Bulk Quote"
secondaryButtonHref="/contact"
        highlights={[
          { value: "72", label: "Herbal Products" },
          { value: "Multiple", label: "Product Grades" },
          { value: "Multiple", label: "Product Forms" },
          { value: "OEM · ODM", label: "Private Label" },
        ]}
      />

      <section
        id="about-ayurvedic-indian-herbs"
        className="relative overflow-hidden bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative aspect-[3/2] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-about-final-v1.png"
                  alt="Bulk Ayurvedic Indian Herbs and herbal powders manufacturer supplier from India"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />
                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Traditional Herbal Product Portfolio
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Ayurvedic Indian Herbs in Multiple Forms
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    About Ayurvedic Indian Herbs
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Ayurvedic Indian Herbs Manufacturer
<span className="block text-[#9f7f36]">Exporter and Bulk Supplier from India</span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={340}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  Bulk Ayurvedic Indian Herbs and herbal powders manufactured and supplied for international wholesale, cosmetic, wellness and private-label markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={460}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">
  Shivesh International is an Ayurvedic Indian Herbs manufacturer,
  exporter, supplier and wholesaler from India serving professional
  buyers across global markets.
</p>

<p className="text-lg leading-8 text-[#4c5f54]">
  Our herbal product range includes Amla, Shikakai, Soapnut, Brahmi,
  Bhringraj, Neem, Ashwagandha, Hibiscus, Tulsi, Moringa, Shatavari,
  Triphala, Multani Mitti and many other traditional Indian herbs.
</p>

<p className="text-lg leading-8 text-[#4c5f54]">
  Raw materials are sourced in India. Depending on the selected herb or
  product and buyer requirement, availability may include Whole, Raw,
  Cut, Dried, Coarse, Powder and Extract forms. Not every product is
  available in every form, and availability is subject to confirmation.
</p>

<p className="text-lg leading-8 text-[#4c5f54]">
  We support importers, distributors, herbal-product companies,
  retailers, herbal and Ayurvedic brands, cosmetic and hair-care brands,
  wellness brands, sourcing companies and OEM, ODM or private-label
  buyers with export packaging and international supply coordination.
</p>
                </div>
              </StaggerItem>

              <StaggerItem delay={580}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#herbs-collection" className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]">View Complete Collection <span>→</span></Link>
                  <Link href="/contact" className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]">Discuss Bulk Supply <span>→</span></Link>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="herbs-collection" className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <div aria-hidden="true" className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[145px]" />
        <div>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
  Bulk Herbal Products from India
</p>

<h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
  Complete Ayurvedic Indian Herbs Collection
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
  Explore exactly 72 Ayurvedic herbs and related herbal products
  manufactured, exported and supplied from India for importers,
  distributors, wholesalers, brands and private-label buyers worldwide.
</p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {herbs.map((herb, index) => (
                <StaggerItem key={herb.name} delay={(index % 6) * 35}>
                  <ProductCardModal
                    src={`/images/products/ayurvedic-herbs/${herb.image}`}
                    alt={`${herb.name} manufacturer exporter supplier from India`}
                    category="Ayurvedic Herb Manufacturer & Exporter"
description={`${herb.name} available for bulk supply, wholesale export and selected OEM private-label requirements from India.`}
                  >
                    <article className="group relative h-full overflow-hidden rounded-[20px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_12px_34px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_52px_rgba(0,0,0,0.25)]">
                      <div className="relative flex h-[155px] items-center justify-center overflow-hidden bg-[#f3ecdf] p-4">
                        <Image
                          src={`/images/products/ayurvedic-herbs/${herb.image}`}
                          alt={`${herb.name} bulk wholesale and private-label herbal powder`}
                          width={1024}
                          height={1536}
                          className="h-[125px] w-[88.667px] rounded-[14px] bg-white/90 p-2 object-contain shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/8 via-transparent to-white/20" />

                        <div className="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] px-2 text-[8px] font-bold text-[#E4C878]">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/45 bg-[#102f23]/90 text-sm text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                          ⛶
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                          Bulk Herbal Powder
                        </p>

                        <h3 className="mt-2 min-h-[48px] font-[family-name:var(--font-playfair)] text-[16px] font-semibold leading-[1.35] text-[#173b2a]">
                          {herb.name}
                        </h3>

                        <div className="mt-3 h-px w-9 bg-[#C9A962]" />

                        <p className="mt-3 text-[11px] leading-5 text-[#4c5f54]">
                          Available for bulk export, wholesale supply and private-label requirements.
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8B6A1E] transition-all duration-300 group-hover:gap-3 group-hover:text-[#173b2a]">
                          View Herb Details
                          <span>→</span>
                        </span>
                      </div>
                    </article>
                  </ProductCardModal>
                </StaggerItem>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-5 text-center">
              <p className="text-sm leading-7 text-[#F5F0E6]/65">Product form, grade, processing, packaging and availability may vary according to the selected herb, order quantity, intended market and agreed buyer specification.</p>
            </div>
          </div>
        </div>
      </section>
            {/* WHY CHOOSE OUR AYURVEDIC INDIAN HERBS */}
      <section
  id="why-choose-our-ayurvedic-herbs"
  className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* IMAGE */}
            <StaggerItem delay={0}>
              <div className="group relative aspect-[3/2] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_28px_75px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/ayurvedic-herbs/ayurvedic-herbs-quality-inspection-final-v1.png"
                  alt="Quality inspection of Ayurvedic Indian Herbs for bulk export supply"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Premium Herbal Product Range
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Quality-Focused Ayurvedic Herbs for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* CONTENT */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Why Choose Our Herbs
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Why Global Buyers Choose Our Ayurvedic Indian Herbs
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#4c5f54]">
                  Our Ayurvedic herbs and herbal powders are prepared for importers,
wholesalers, cosmetic manufacturers, wellness companies and
private-label brands requiring reliable bulk export supply from India.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Extensive Herbal Range",
                      text: "A broad selection of traditional Ayurvedic herbs and herbal powders available for diverse international markets.",
                    },
                    {
                      title: "Multiple Product Forms",
                      text: "Selected products may be available in Whole, Raw, Cut, Dried, Coarse, Powder or Extract form. Form availability is product-specific and subject to confirmation.",
                    },
                    {
                      title: "Buyer-Specific Grades",
                      text: "Product-specific grades and specifications are available according to the selected herb, intended application, buyer requirements and destination-market requirements, subject to confirmation.",
                    },
                    {
                      title: "Quality-Focused Processing",
                      text: "Products are handled and processed with attention to cleanliness, consistency and commercial requirements.",
                    },
                    {
                      title: "Retail and Bulk Supply",
                      text: "Suitable packaging formats are available for wholesalers, distributors, brands and professional buyers.",
                    },
                    {
                      title: "Private-Label Support",
                      text: "OEM, ODM, buyer logo, artwork, custom branding and private-label packaging are available subject to feasibility.",
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
        id="professional-buyers"
        className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-[1400px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
                International B2B Supply
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Ayurvedic Herbs and Herbal Powders for Professional Buyers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/68">
                Commercial supply from India for businesses sourcing Ayurvedic
                herbs, Indian botanical powders, raw herbs and selected herbal
                extracts in product-specific forms and grades.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Importers", "Product, documentation and destination-based export coordination."],
                ["Distributors & Wholesalers", "A broad 72-product portfolio for regional wholesale and distribution channels."],
                ["Retailers", "Retail and private-label pack planning for approved products and markets."],
                ["Herbal & Ayurvedic Brands", "Product-specific forms and grades for established or developing herbal ranges."],
                ["Cosmetic & Hair-Care Brands", "Selected herbs and powders for commercially suitable cosmetic and hair-care applications."],
                ["Wellness Brands", "Product and grade selection according to the intended application and market."],
                ["OEM, ODM & Private Label", "Buyer logo, artwork, custom branding and finished-pack support subject to feasibility."],
                ["Sourcing Companies & Bulk Buyers", "Multi-product enquiry, specification and export-order coordination."],
              ].map(([title, text], index) => (
                <StaggerItem key={title} delay={(index % 4) * 60}>
                  <article className="h-full border border-[#C9A962]/22 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-white/[0.07]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A962]">
                      B2B {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#F5F0E6]/65">
                      {text}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23]"
              >
                Discuss Your Herb Requirement →
              </Link>
              <Link
                href="/export"
                className="inline-flex border border-[#C9A962]/55 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
              >
                Review Export Support →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section
  id="ayurvedic-herbs-product-specifications"
  className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Product Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Ayurvedic Indian Herbs Product Specifications
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Review general commercial specifications for our bulk Ayurvedic
Indian Herbs and herbal powders. Final parameters depend on the
selected herb, product form, grade and buyer requirements.
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
                  ["Product Category", "Ayurvedic Indian Herbs and Related Herbal Products"],
                  ["Portfolio Size", "Exactly 72 Products"],
                  ["Manufacturing Origin", "India"],
                  ["Raw-Material Origin", "India"],
                  [
                    "Available Forms",
                    "Product-Specific Whole, Raw, Cut, Dried, Coarse, Powder and Extract Forms, Subject to Confirmation",
                  ],
                  [
                    "Available Grades",
                    "Product-Specific Grades and Specifications Are Available according to the Selected Herb, Intended Application, Buyer Requirements and Destination-Market Requirements, Subject to Confirmation",
                  ],
                  ["Quality Testing", "According to Buyer Instructions or Requirements and Selected Product Requirements"],
                  ["Bulk Minimum Order", "Orders Can Start from 100 kg per Herb or Item, Subject to Commercial and Product Confirmation"],
                  ["Private-Label MOQ", "Varies by Pack Size, Packaging, Artwork, Design, Customization and Commercial Feasibility"],
                  ["Retail / Private-Label Packs", "100 g, 200 g, 500 g and 1 kg"],
                  ["Bulk Packaging", "20 kg and 25 kg Double-Layer Vacuum Packing"],
                  ["OEM", "Available"],
                  ["ODM", "Available"],
                  ["Private Label", "Buyer Logo, Artwork and Custom Branding Available"],
                  [
                    "Shelf Life",
                    "Varies by Herb or Product and Is Confirmed for the Selected Item",
                  ],
                  [
                    "Storage",
                    "Store in a Cool, Dry Place Away from Direct Sunlight and Moisture",
                  ],
                  [
                    "Technical Documents",
                    "COA with Commercial Batch or Order; SDS/MSDS and Country of Origin Certificate or Statement Available",
                  ],
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

                    <p className="leading-7 text-[#173b2a] sm:pl-4">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <div className="mx-auto mt-7 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6]">
              <p className="text-sm leading-7 text-[#F5F0E6]/68">
                Specifications and testing parameters are product-specific and
                can be supplied according to confirmed buyer requirements.
                Final parameters must be confirmed for the selected herb,
                form, grade, batch and destination-market requirement.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* PACKAGING & PRIVATE LABEL */}
<section
  id="ayurvedic-herbs-packaging-private-label"
  className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
>

<RevealOnScroll>

<div className="mx-auto max-w-[1320px]">

<div className="mx-auto max-w-4xl text-center">

<p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">

Packaging & Private Label

</p>

<h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl">

Ayurvedic Herbs Bulk Packaging & Private Label

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">

Our Ayurvedic Indian Herbs and herbal products are available in clearly
defined retail, private-label and bulk export formats for importers,
wholesalers, brands and OEM or ODM buyers.

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

100 g · 200 g · 500 g · 1 kg

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

20 kg and 25 kg double-layer vacuum packing for confirmed bulk orders.

</p>

</article>

</div>

<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

{[
"OEM Ayurvedic Herbs Manufacturing",
"ODM Herbal Product Support",
"Private Label Herbal Products",
"Buyer Logo & Artwork",
"Custom Branding",
"Retail & Bulk Packaging",
].map((item)=>(

<div
key={item}
className="rounded-[20px] border border-[#C9A962]/25 bg-white/[0.05] p-5 text-center font-semibold">

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
          Herb-Specific Specifications and Export Documentation
        </h2>
        <p className="mt-6 text-lg leading-8 text-[#F5F0E6]/68">
          Specifications, testing parameters and documentation are coordinated
          for the selected herb or product, confirmed commercial order and
          buyer or destination requirements.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "COA Available with Commercial Batch or Order",
            "SDS / MSDS Available",
            "Country of Origin Certificate or Statement Available",
            "Phytosanitary Certificate Available on Requirement",
            "Fumigation Certificate Available on Requirement",
            "Quality Testing according to Buyer and Selected Product Requirements",
            "Incoterms according to Buyer Requirement and Quotation",
            "Export and Shipping Coordination for Confirmed Orders",
          ].map((item) => (
            <div
              key={item}
              className="border border-[#C9A962]/20 bg-[#071b14]/45 p-4 text-sm leading-7 text-[#F5F0E6]/72"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-7 border border-[#C9A962]/30 bg-[#071b14]/55 p-5 text-sm leading-7 text-[#F5F0E6]/62">
          The buyer or importer remains responsible for confirming applicable
          product classification, intended use, registration, labelling,
          customs and destination-market requirements. Documentation support
          does not guarantee regulatory approval or customs clearance.
        </p>
        <p className="mt-6 text-sm leading-7 text-[#F5F0E6]/62">
          Company certifications and registrations that may be referenced
          include ISO, GMP, Halal, Kosher, HACCP, MSME and FSSAI. These should
          not be interpreted as independently certifying every individual herb.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/certifications"
            className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
          >
            Review Company Certifications →
          </Link>
          <Link
            href="/resources"
            className="inline-flex border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
          >
            Buyer Resources →
          </Link>
        </div>
      </article>

      <article className="border border-[#C9A962]/30 bg-[#f5f0e6] p-7 text-[#173b2a] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
          Samples & Order Planning
        </p>
        <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
          Plan a Bulk, OEM, ODM or Private-Label Herb Order
        </h2>
        <div className="mt-8 space-y-3">
          {[
            ["Free Samples", "Available for prospective buyers, subject to product and requirement review."],
            ["Bulk Minimum Order", "Orders can start from 100 kg per herb or item, subject to commercial and product confirmation."],
            ["Private-Label MOQ", "Varies by pack size, packaging, artwork, design, customization and commercial feasibility."],
            ["Typical Lead Time", "Approximately 10–15 days after commercial and order confirmation, subject to complete order requirements."],
            ["Incoterms", "Coordinated according to buyer requirement and the quotation."],
            ["Shelf Life", "Varies by herb or product and is confirmed for the selected item."],
          ].map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-[#173b2a]/12 pb-4 sm:grid-cols-[145px_1fr]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                {label}
              </p>
              <p className="text-sm leading-7 text-[#4c5f54]">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-[#C9A962]/35 bg-[#ede5d7] p-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
            What to Include in Your RFQ
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#4c5f54]">
            Share the selected herb or products, required form, required grade
            or intended application, quantity, pack size, destination country
            or port, private-label, OEM or ODM scope, artwork or logo needs,
            required documentation, Incoterm requirement and company details.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex bg-[#102f23] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]"
          >
            Request Quote or Free Sample →
          </Link>
          <a
            href="/catalogues/Shivesh-International-Product-Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-[#173b2a]/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173b2a]"
          >
            View / Download Product Catalogue →
          </a>
        </div>
      </article>
    </div>
  </RevealOnScroll>
</section>

{/* PROCUREMENT FAQ */}
<section
  id="procurement-faq"
  className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
>
  <RevealOnScroll>
    <div className="mx-auto max-w-[1100px]">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7f36]">
          Buyer Questions
        </p>
        <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
          Ayurvedic Indian Herbs Procurement FAQs
        </h2>
      </div>
      <div className="mt-12 divide-y divide-[#173b2a]/15 border-y border-[#173b2a]/15">
        {procurementFaqs.map((faq, index) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
              <h3 className="text-xl font-semibold leading-snug">
                <span className="mr-4 text-[#9f7f36]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {faq.question}
              </h3>
              <span className="text-2xl text-[#9f7f36] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[940px] pb-7 text-[15px] leading-8 text-[#4c5f54]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </RevealOnScroll>
</section>
{/* FINAL CTA */}

<section
  id="ayurvedic-herbs-buyer-enquiry"
  className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6]"
>

<div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[160px]" />

<RevealOnScroll>

<div className="relative mx-auto max-w-5xl">

<p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">

Premium Herbal Products

</p>

<h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl lg:text-6xl">

Looking for an Ayurvedic Herbs

Manufacturer, Exporter

and Supplier from India?

</h2>

<p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">

Contact Shivesh International for bulk Ayurvedic Indian Herbs,
herbal powders, wholesale export supply, OEM, ODM and private-label
packaging. Orders can start from 100 kg per herb or item, subject to
commercial and product confirmation.

</p>

<div className="mt-12 flex flex-wrap justify-center gap-5">

<Link

href="/contact"

className="rounded-full bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23]">

Request Bulk Herbs Quote →

</Link>

<a

href="https://wa.me/919999774950"

target="_blank"

rel="noopener noreferrer"

className="rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em]">

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
    href="/products/indian-spices"
    className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
  >
    Explore Indian Spices
  </Link>

  <Link
    href="/products/natural-henna-powder"
    className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
  >
    Natural Henna Powder
  </Link>

  <Link
    href="/products/natural-indigo-powder"
    className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
  >
    Natural Indigo Powder
  </Link>

  <Link
    href="/products/natural-henna-hair-colors"
    className="text-[#F5F0E6]/55 transition-colors hover:text-[#C9A962]"
  >
    Natural Henna Hair Colors
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
