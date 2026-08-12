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
  metadataBase: new URL("https://www.henna-manufacturer.com"),
  title: {
    default:
      "Shivesh International | Natural Henna, Indigo, Herbs & Spices Exporter",
    template: "%s | Shivesh International",
  },
  description:
    "Shivesh International supplies Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices for global buyers.",
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
    url: "https://www.henna-manufacturer.com",
    siteName: "Shivesh International",
    title:
      "Shivesh International | Natural Henna, Indigo, Herbs & Spices Exporter",
    description:
      "Premium Indian natural products supplied to importers, distributors, salons, wellness brands and private-label buyers worldwide.",
  },
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
        {children}
        <BrandProtection />
      </body>
    </html>
  );
}