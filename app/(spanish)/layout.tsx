import type { Metadata } from "next";
import SiteRoot from "@/app/components/SiteRoot";
import "../globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://shiveshinternational.com"), title: { default: "Shivesh International | Exportador de productos naturales", template: "%s | Shivesh International" } };
export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <SiteRoot lang="es">{children}</SiteRoot>; }
