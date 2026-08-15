import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import BrandProtection from "@/app/components/BrandProtection";
import CookieConsent from "@/app/components/CookieConsent";

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
      "Henna Powder & Indigo Exporter from India | Shivesh International",
    template: "%s | Shivesh International",
  },

  description:
    "Indian exporter and supplier of natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for bulk, wholesale and private-label buyers worldwide.",

  applicationName: "Shivesh International",

  authors: [
    {
      name: "Shivesh International",
      url: "https://shiveshinternational.com/",
    },
  ],

  creator: "Shivesh International",
  publisher: "Shivesh International",

  alternates: {
    canonical: "/",
  },

  category: "Natural Products Export",

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
    url: "https://shiveshinternational.com/",
    siteName: "Shivesh International",
    title:
      "Henna Powder & Indigo Exporter from India | Shivesh International",
    description:
      "Natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs and Indian spices for global wholesale and private-label buyers.",
    images: [
      {
        url: "/images/homepage/hero/hero-slide-01-natural-henna-powder-branded-box-final-v1.png",
        alt: "Shivesh International natural henna powder for global buyers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Henna Powder & Indigo Exporter from India | Shivesh International",
    description:
      "Natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices supplied to professional buyers worldwide.",
    images: [
      "/images/homepage/hero/hero-slide-01-natural-henna-powder-branded-box-final-v1.png",
    ],
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
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            var savedConsent = null;

            try {
              savedConsent = localStorage.getItem(
                'shivesh-cookie-consent'
              );
            } catch (error) {
              savedConsent = null;
            }

            var consentValue =
              savedConsent === 'granted' ? 'granted' : 'denied';

            gtag('consent', 'default', {
              analytics_storage: consentValue,
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2B6CDF6BRB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2B6CDF6BRB');
          `}
        </Script>

        {children}
        <BrandProtection />
        <CookieConsent />
      </body>
    </html>
  );
}