import type { Metadata } from "next";

import SiteRoot from "@/app/components/SiteRoot";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shiveshinternational.com"),
  title: { default: "شيفيش إنترناشيونال | مُصدّر المنتجات الطبيعية", template: "%s | Shivesh International" },
};

export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteRoot lang="ar">{children}</SiteRoot>;
}
