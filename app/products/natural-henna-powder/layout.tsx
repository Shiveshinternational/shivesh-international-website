import type { ReactNode } from "react";

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id":
    "https://shiveshinternational.com/products/natural-henna-powder#product",
  name: "Natural Henna Powder",
  description:
    "Natural henna powder supplied by Shivesh International for international buyers, bulk requirements and private-label enquiries.",
  url: "https://shiveshinternational.com/products/natural-henna-powder",
  category: "Natural Henna Powder",
  brand: {
    "@type": "Brand",
    name: "Shivesh International",
  },
  manufacturer: {
    "@type": "Organization",
    "@id": "https://shiveshinternational.com/#organization",
    name: "Shivesh International",
    url: "https://shiveshinternational.com",
  },
};

export default function NaturalHennaPowderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {children}
    </>
  );
}