import type { Metadata } from "next";

import InnerPageTemplate from "@/app/components/InnerPageTemplate";

export const metadata: Metadata = {
  title: "Indian Natural Products Exporter Since 1999",
  description:
    "Learn about Shivesh International, an Indian exporter of natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for global buyers.",
  keywords: [
    "Indian natural products exporter",
    "henna powder exporter India",
    "indigo powder supplier India",
    "botanical hair color manufacturer",
    "Ayurvedic herbs exporter",
    "Indian spices exporter",
    "Shivesh International",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Shivesh International | Indian Natural Products Exporter",
    description:
      "Discover our experience, values, product expertise and commitment to serving international buyers of Indian natural products.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <InnerPageTemplate
      eyebrow="About Shivesh International"
      title="Rooted in Indian Heritage. Built on Trust."
      subtitle="Since 1999, Shivesh International has been building meaningful business relationships through authentic Indian natural products, responsible service and a long-term commitment to its buyers."
      heroImage="/images/about/about-hero-global-buyers-meeting-final-v4.png"
      heroImageAlt="Shivesh International corporate office and professional team"
      introductionTitle="More Than a Supplier — A Long-Term Business Partner"
      introduction={[
        "Shivesh International is an Indian natural products company established in 1999. From our head office in New Delhi and our business operations in Faridabad, Haryana, we support buyers seeking authentic products, dependable communication and a professional long-term partnership.",
        "Our portfolio includes Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices.",
        "For us, business is not limited to completing an order. We believe in understanding the buyer, respecting market requirements and building relationships based on clarity, consistency and mutual growth.",
      ]}
      highlights={[
        {
          value: "1999",
          title: "Our Beginning",
          description:
            "A business journey built through experience, product knowledge and long-term buyer relationships.",
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
            "Connected with agricultural communities and sourcing partners supporting our natural product journey.",
        },
        {
          value: "Global",
          title: "Business Perspective",
          description:
            "An export-oriented approach focused on dependable communication, presentation and long-term partnerships.",
        },
      ]}
      sections={[
        {
          eyebrow: "Our Story",
          title: "A Journey That Started in 1999",
          description: [
            "The journey of Shivesh International began in 1999 with a simple but meaningful purpose: to connect the richness of Indian natural products with businesses looking for authenticity and dependable support.",
            "During the early years, our focus was on developing product knowledge, understanding customer expectations and building trusted business relationships.",
            "As the company evolved, our product portfolio expanded to include natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices. Through this growth, one principle remained unchanged — sustainable business is built through trust, patience and consistent service.",
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
            "Our mission is to connect international and domestic businesses with carefully selected Indian natural products while providing clear communication and reliable commercial support.",
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
            "Buyers choose Shivesh International because they value an approachable, experienced and professionally responsive business partner.",
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
      ctaTitle="Let’s Build a Meaningful Business Relationship"
      ctaDescription="Share your business plans, required product categories and market objectives with us. We would be pleased to understand your requirements and explore the possibility of a long-term partnership."
      ctaButtonLabel="Connect with Our Team"
      ctaButtonHref="/contact"
    />
  );
}