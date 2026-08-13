import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import BrandProtection from "@/app/components/BrandProtection";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiveshinternational.com"),
  title: {
    default:
      "Shivesh International | Natural Henna, Indigo, Herbs & Spices Exporter",
    template: "%s | Shivesh International",
  },
  description:
    "Shivesh International supplies Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices for global buyers.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Shivesh International",
  authors: [{ name: "Shivesh International" }],
  creator: "Shivesh International",
  publisher: "Shivesh International",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shiveshinternational.com",
    siteName: "Shivesh International",
    title:
      "Shivesh International | Natural Henna, Indigo, Herbs & Spices Exporter",
    description:
      "Premium Indian natural products supplied to importers, distributors, salons, wellness brands and private-label buyers worldwide.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shiveshinternational.com/#organization",
      name: "Shivesh International",
      url: "https://shiveshinternational.com/",
      email: "export@shiveshinternational.com",
      telephone: "+91-9999774950",
      foundingDate: "1999",
      description:
        "Indian exporter and supplier of natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for international buyers.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "361-C, BG-6, Paschim Vihar",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110063",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "export sales",
          telephone: "+91-9999774950",
          email: "export@shiveshinternational.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales enquiries",
          email: "sales@shiveshinternational.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "general enquiries",
          email: "info@shiveshinternational.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shiveshinternational.com/#website",
      url: "https://shiveshinternational.com/",
      name: "Shivesh International",
      alternateName: "Shivesh International India",
      description:
        "Official website of Shivesh International, an Indian exporter of natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
      publisher: {
        "@id": "https://shiveshinternational.com/#organization",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}
        <BrandProtection />
      </body>
    </html>
  );
}