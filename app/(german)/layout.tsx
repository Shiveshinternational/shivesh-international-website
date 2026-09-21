import type { Metadata } from "next";

import SiteRoot from "@/app/components/SiteRoot";

import "../globals.css";

export const metadata: Metadata = {
  other: { "p:domain_verify": "1121f429a5f8891f7f0e327c94508a60" },
  metadataBase: new URL("https://shiveshinternational.com"),
  applicationName: "Shivesh International",
  authors: [{ name: "Shivesh International", url: "https://shiveshinternational.com/" }],
  creator: "Shivesh International",
  publisher: "Shivesh International",
  category: "Export natürlicher Produkte",
};

export default function GermanRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteRoot lang="de">{children}</SiteRoot>;
}
