"use client";

import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import AboutSection from "../sections/AboutSection";
import ProductsSection from "@/sections/ProductsSection";
import InfrastructureSection from "@/sections/InfrastructureSection";
import CertificationSection from "@/sections/CertificationSection";
import ExportSection from "@/sections/ExportSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";
import AnimatedStats from "@/app/components/AnimatedStats";
import HeroParallax from "@/app/components/HeroParallax";
import LuxuryPageLoader from "@/app/components/LuxuryPageLoader";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Certifications", href: "#certifications" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "30+", label: "Years" },
  { value: "800+", label: "Farmers" },
  { value: "50+", label: "Countries" },
  { value: "100%", label: "Natural" },
];

function BotanicalLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3C8 7 5 10 5 14c0 2.5 1.5 4.5 3.5 5.5-.5-2 .5-4 2-5.5 1 1.5 2.5 2.5 4.5 2.5 1.5 0 3-.5 4-1.5-1.5 1-3.5 1.5-5.5 0-4-3-7-7-11z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M12 20v-8"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SILogo() {
  return (
    <a
  href="#home"
  className="group flex shrink-0 items-center gap-5 whitespace-nowrap"
>
      <div className="relative shrink-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-full-[#C9A962]/60 bg-[#1B3D2F]/80 shadow-[0_0_20px_rgba(27,61,47,0.4)] backdrop-blur-sm transition-all duration-500 group-hover:border-[#C9A962] group-hover:shadow-[0_0_28px_rgba(201,169,98,0.2)] sm:h-12 sm:w-12">
          <span className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-[0.06em] text-[#F5F0E6] sm:text-[15px]">
            SI
          </span>
        </div>
        <BotanicalLeaf className="absolute -right-1 -top-1 h-3.5 w-3.5 text-[#C9A962]/90 sm:h-4 sm:w-4" />
      </div>
      <div className="leading-none">
        <p className="font-[family-name:var(--font-playfair)] text-[15px] font-medium uppercase tracking-[0.18em] text-[#F5F0E6] sm:text-[13px]">
          SHIVESH
        </p>
        <p className="mt-1.5 font-[family-name:var(--font-playfair)] text-[10px] font-light uppercase tracking-[0.42em] text-[#C9A962] sm:text-[9px]">
          INTERNATIONAL
        </p>
      </div>
    </a>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${cormorant.variable} relative min-h-screen overflow-x-hidden font-[family-name:var(--font-cormorant)]`}
    >
      <LuxuryPageLoader />
      <div className="absolute inset-x-0 top-0 h-screen">
        <Image
          src="/Factory hero.png"
          alt="Shivesh International manufacturing facility"
          fill
          priority
          className="object-cover object-[45%_center] lg:object-[65%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 top-0 h-screen bg-linear-to-r from-black/65 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-screen bg-linear-to-t from-black/40 via-transparent to-black/15" />
        <div className="absolute inset-x-0 top-0 h-screen bg-[radial-gradient(ellipse_at_80%_40%,transparent_0%,transparent_55%,rgba(0,0,0,0.08)_100%)]" />
      </div>

      <Navbar />

      <section
        id="home"
        className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-44 pt-24 sm:px-8 sm:pb-48 sm:pt-28 lg:px-12 lg:pb-52"
      >
        <HeroParallax />
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-8 bg-linear-to-r from-black/50 via-black/25 to-transparent sm:-inset-x-8 sm:-inset-y-10"
            />

            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]/70" />
                <span className="font-[family-name:var(--font-cormorant)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#F5F0E6]/55">
                  Global Export Excellence
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-medium leading-[1.14] tracking-[-0.01em] text-[#F5F0E6] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                Rooted in Purity.
                <br />
                <span className="mt-1 inline-block bg-linear-to-r from-[#F5F0E6] via-[#C9A962] to-[#C9A962] bg-clip-text text-transparent">
                  Delivered Globally.
                </span>
              </h1>

              <div className="my-7 h-px w-10 bg-[#C9A962]/50" />

              <p className="text-[15px] font-light leading-[1.8] tracking-[0.02em] text-[#F5F0E6]/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-base">
                Premium Natural Henna, Henna Hair Colors, Indigo Powder,
                Ayurvedic Herbs and Indian Spices exported worldwide.
              </p>

              <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 border border-[#C9A962]/80 bg-[#C9A962] px-7 py-3 font-[family-name:var(--font-cormorant)] text-[11px] font-medium uppercase tracking-[0.26em] text-[#1B3D2F] transition-all duration-500 hover:bg-[#D4B872] hover:shadow-[0_8px_32px_rgba(201,169,98,0.35)]"
                >
                  Explore Products
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center border border-[#F5F0E6]/25 bg-[#1B3D2F]/30 px-7 py-3 font-[family-name:var(--font-cormorant)] text-[11px] font-medium uppercase tracking-[0.26em] text-[#F5F0E6]/85 backdrop-blur-sm transition-all duration-500 hover:border-[#C9A962]/50 hover:text-[#C9A962]"
                >
                  Our Heritage
                </a>
              </div>
            </div>
          </div>
        </div>
            <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedStats />
                
        </div>
      </div>
      </section>
      <AboutSection /> 
      <ProductsSection />
      <InfrastructureSection />
      <CertificationSection />
      <ExportSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
      <PremiumCursor />

    </main>
  );
}