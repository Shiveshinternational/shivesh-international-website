import type { Metadata } from "next";

import InnerPageTemplate from "@/app/components/InnerPageTemplate";

export const metadata: Metadata = {
  title: "About Indian Natural Products Manufacturer & Exporter Since 1999",
  description:
    "Learn about Shivesh International, an Indian manufacturer, exporter and supplier of henna, indigo, hair colors, Ayurvedic herbs and spices since 1999.",
  keywords: [
    "Indian natural products exporter",
    "Indian natural products manufacturer",
    "Indian natural products supplier",
    "natural products company India",
    "natural products exporter since 1999",
    "natural products manufacturer New Delhi",
    "natural products manufacturing Faridabad",
    "henna powder exporter India",
    "natural henna powder manufacturer India",
    "natural henna powder supplier India",
    "indigo powder supplier India",
    "natural indigo powder manufacturer India",
    "natural indigo powder exporter India",
    "botanical hair color manufacturer",
    "natural henna hair colors manufacturer",
    "henna based hair colors exporter",
    "Ayurvedic herbs exporter",
    "Ayurvedic herbs manufacturer India",
    "Ayurvedic herbs supplier India",
    "Indian spices exporter",
    "Indian spices manufacturer India",
    "Indian spices wholesale supplier",
    "bulk natural products India",
    "wholesale natural products exporter",
    "OEM natural products manufacturer",
    "private label natural products India",
    "private label henna manufacturer",
    "private label herbal products supplier",
    "private label spices exporter",
    "export grade botanical powders",
    "natural products for importers",
    "natural products for distributors",
    "natural products for salons",
    "natural products for cosmetic brands",
    "natural products for wellness brands",
    "natural products supplier USA",
    "natural products exporter UK",
    "natural products supplier UAE",
    "natural products exporter Europe",
    "natural products supplier Australia",
    "Indian botanical products exporter",
    "bulk order natural products 200 kg MOQ",
    "Shivesh International",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Shivesh International | Indian Natural Products Exporter",
    description:
      "Discover our experience, values, product expertise and commitment to serving international buyers of Indian natural products.",
    url: "https://shiveshinternational.com/about",
    type: "website",
    siteName: "Shivesh International",
    locale: "en_IN",
    images: [
      {
        url: "/images/about/about-hero-global-buyers-meeting-final-v4.png",
        width: 1200,
        height: 630,
        alt: "Shivesh International Indian natural products manufacturer and exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Indian Natural Products Exporter | Shivesh International",
    description:
      "Discover our experience in henna, indigo, botanical hair colors, Ayurvedic herbs, Indian spices, bulk supply and private-label manufacturing.",
    images: ["/images/about/about-hero-global-buyers-meeting-final-v4.png"],
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

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://shiveshinternational.com/about#aboutpage",
      url: "https://shiveshinternational.com/about",
      name: "About Shivesh International",
      description:
        "About Shivesh International, an Indian manufacturer, exporter and supplier of natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
      inLanguage: "en",
      isPartOf: { "@id": "https://shiveshinternational.com/#website" },
      about: { "@id": "https://shiveshinternational.com/#organization" },
      mainEntity: { "@id": "https://shiveshinternational.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://shiveshinternational.com/#organization",
      name: "Shivesh International",
      url: "https://shiveshinternational.com/",
      foundingDate: "1999",
      description:
        "Indian manufacturer, exporter and supplier of natural henna powder, natural indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for global buyers.",
      email: "export@shiveshinternational.com",
      telephone: "+91-9999774950",
      address: {
        "@type": "PostalAddress",
        streetAddress: "361-C, BG-6, Paschim Vihar",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110063",
        addressCountry: "IN",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Natural Henna Powder",
        "Natural Indigo Powder",
        "Natural Henna Hair Colors",
        "Henna-Based Hair Colors",
        "Ayurvedic Indian Herbs",
        "Indian Spices",
        "Bulk Export Supply",
        "OEM and Private Label Manufacturing",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://shiveshinternational.com/about#breadcrumb",
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
          name: "About Us",
          item: "https://shiveshinternational.com/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    <InnerPageTemplate
      eyebrow="Indian Manufacturer · Exporter · Supplier"
      title="Indian Natural Products Manufacturer & Exporter Since 1999"
      subtitle="Shivesh International supplies Natural Henna Powder, Indigo Powder, botanical hair colors, Ayurvedic Indian Herbs and Indian Spices to importers, distributors, wholesalers, salons, wellness brands and private-label buyers worldwide."
      heroImage="/images/about/about-hero-global-buyers-meeting-final-v4.png"
      heroImageAlt="Shivesh International Indian natural products manufacturer exporter and global buyer team"
      introductionTitle="Natural Products Manufacturing, Export and Private-Label Support"
      introduction={[
        "Shivesh International is an Indian natural products manufacturer, exporter and supplier established in 1999. From our head office in New Delhi and manufacturing operations in Faridabad, Haryana, we support global buyers seeking dependable sourcing, processing, packing and export coordination.",
        "Our portfolio includes Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices for bulk, wholesale, retail-ready, OEM and private-label requirements.",
        "We work with importers, distributors, salons, cosmetic companies, wellness brands and buyer-owned labels worldwide. Our general minimum order quantity is 200 kg per item, subject to product and packaging requirements.",
      ]}
      highlights={[
        {
          value: "1999",
          title: "Our Beginning",
          description:
            "An export business journey built through natural product knowledge, manufacturing experience and long-term buyer relationships.",
        },
        {
          value: "25+",
          title: "Years of Commitment",
          description:
            "Long-standing experience in natural products, market understanding and professional business support.",
        },
        {
          value: "800+",
          title: "Farmer Network",
          description:
            "Connected with agricultural communities and sourcing partners supporting dependable natural raw-material supply.",
        },
        {
          value: "Global",
          title: "Business Perspective",
          description:
            "An export-oriented approach supporting buyers across the USA, UK, UAE, Europe, Asia and Australia.",
        },
      ]}
      sections={[
        {
          eyebrow: "Our Story",
          title: "A Journey That Started in 1999",
          description: [
            "The journey of Shivesh International began in 1999 with a simple but meaningful purpose: to connect the richness of Indian natural products with businesses looking for authenticity and dependable support.",
            "During the early years, our focus was on developing product knowledge, understanding customer expectations and building trusted business relationships.",
            "As the company evolved, our product portfolio expanded to include natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices for bulk export and private-label supply. Through this growth, one principle remained unchanged — sustainable business is built through trust, patience and consistent service.",
            "Today, Shivesh International continues to move forward with the same values while adapting to modern international business expectations.",
          ],
          image: "/images/about/about-our-story-journey-final-v2.png",
          imageAlt:
            "Shivesh International company journey and business development",
          imagePosition: "left",
          points: [
            "Established in 1999",
            "Built through experience",
            "Expanded natural product portfolio",
            "Long-term buyer commitment",
          ],
        },

        {
          eyebrow: "Founder’s Message",
          title: "Business Built on Trust, Respect and Responsibility",
          description: [
            "At Shivesh International, we believe that every successful business relationship begins with honest communication and mutual respect.",
            "A buyer does not simply require a product. A buyer requires confidence — confidence in the people, communication, commitments and support behind that product.",
            "Our objective has always been to understand what our business partners genuinely need and to guide them with practical, transparent and responsible support.",
            "We value every serious enquiry and every opportunity to build a meaningful long-term partnership.",
            "— Mr. Shallabh Kushik, Director",
          ],
          image: "/images/about/about-founders-message-shallabh-kushik-final-v2.png",
          imageAlt:
            "Shivesh International leadership and company vision",
          imagePosition: "right",
          points: [
            "Honest communication",
            "Respect for every buyer",
            "Responsible commitments",
            "Long-term relationships",
          ],
        },

        {
          eyebrow: "Our Mission",
          title:
            "Creating Value Through Authentic Products and Dependable Service",
          description: [
            "Our mission is to connect international and domestic businesses with carefully selected Indian natural products while providing manufacturing, bulk supply, private-label packaging, export documentation and reliable commercial support.",
            "We aim to understand each buyer’s expectations, offer practical solutions and maintain a professional approach throughout the business relationship.",
            "We continuously improve our knowledge, presentation and service so that every partner can work with Shivesh International with confidence.",
          ],
          image:
            "/images/about/about-our-mission-natural-sustainable-final-v2.png",
          imageAlt:
            "Premium natural product identity of Shivesh International",
          imagePosition: "left",
          points: [
            "Authentic natural products",
            "Clear business communication",
            "Practical buyer support",
            "Continuous improvement",
          ],
        },

        {
          eyebrow: "Our Vision",
          title:
            "Building a Respected Indian Natural Products Brand for Global Markets",
          description: [
            "Our vision is to create a globally respected business identity that represents the authenticity, richness and commercial potential of Indian natural products.",
            "We aspire to build partnerships that are not defined by a single transaction, but by shared growth, consistent support and long-term confidence.",
            "As markets evolve, we aim to grow responsibly while preserving the values that have guided us since the beginning.",
          ],
          image:
            "/images/about/about-our-vision-global-markets-final-v2.png",
          imageAlt:
            "Global business vision of Shivesh International",
          imagePosition: "right",
          points: [
            "Strong global identity",
            "Responsible business growth",
            "Meaningful partnerships",
            "Long-term brand reputation",
          ],
        },

        {
          eyebrow: "Our Values",
          title: "The Principles That Define Shivesh International",
          description: [
            "Our values influence every conversation, commitment and relationship associated with Shivesh International.",
            "We believe quality must be supported by responsibility, trust must be supported by transparency and growth must be supported by consistency.",
            "We combine business experience with personal attention because every buyer, brand and market has different expectations.",
            "Our approach is to listen carefully, communicate clearly and provide realistic support that helps create meaningful long-term business confidence.",
          ],
          image: "/images/about/about-our-values-trust-quality-final-v2.png",
          imageAlt:
            "Shivesh International professional business values and culture",
          imagePosition: "left",
          points: [
            "Trust",
            "Transparency",
            "Consistency",
            "Responsibility",
            "Respect",
            "Buyer Commitment",
          ],
        },

        {
          eyebrow: "Why Buyers Choose Us",
          title: "Experience, Understanding and Personal Attention",
          description: [
            "Importers, distributors, wholesalers, salons, cosmetic companies and private-label brands choose Shivesh International because they value an approachable, experienced and professionally responsive manufacturing and export partner.",
            "Our understanding of Indian natural products, willingness to listen and focus on practical business solutions help us support buyers across different product categories and markets.",
            "Most importantly, we believe expectations should be discussed openly and commitments should be realistic, transparent and professionally managed.",
          ],
          image:
            "/images/about/about-why-buyers-choose-us-global-partnership-final-v2.png",
          imageAlt:
            "International buyer communication and support by Shivesh International",
          imagePosition: "right",
          points: [
            "Established company identity",
            "Direct communication",
            "Natural product knowledge",
            "Professional support",
            "Transparent approach",
            "Partnership mindset",
          ],
        },
      ]}
      ctaTitle="Discuss Your Bulk, OEM or Private-Label Requirement"
      ctaDescription="Share the required product, quantity, packaging, branding and destination market with our export team. We support serious global buyer enquiries for bulk supply and long-term private-label partnerships."
      ctaButtonLabel="Contact Our Export Team"
      ctaButtonHref="/contact"
    />
    </>
  );
}