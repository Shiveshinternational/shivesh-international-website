import type { Metadata } from "next";

import SiteRoot from "@/app/components/SiteRoot";

import "../globals.css";

export const metadata: Metadata = {
  other: { "p:domain_verify": "1121f429a5f8891f7f0e327c94508a60" },
  metadataBase: new URL("https://shiveshinternational.com"),
  title: { default: "شيفيش إنترناشيونال | مُصدّر المنتجات الطبيعية", template: "%s | Shivesh International" },
};

export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteRoot lang="ar">{children}</SiteRoot>;
}
