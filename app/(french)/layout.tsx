import type { Metadata } from "next";

import SiteRoot from "@/app/components/SiteRoot";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shiveshinternational.com"),
  applicationName: "Shivesh International",
  authors: [{ name: "Shivesh International", url: "https://shiveshinternational.com/" }],
  creator: "Shivesh International",
  publisher: "Shivesh International",
  category: "Exportation de produits naturels",
};

export default function FrenchRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteRoot lang="fr">{children}</SiteRoot>;
}
