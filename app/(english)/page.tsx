"use client";

import { useEffect, useState } from "react";
import {
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import Image from "next/image";

import AboutSection from "@/sections/AboutSection";
import CertificationSection from "@/sections/CertificationSection";
import CountryShowcaseSection from "@/sections/CountryShowcaseSection";
import ExportSection from "@/sections/ExportSection";
import FooterSection from "@/sections/FooterSection";
import InfrastructureSection from "@/sections/InfrastructureSection";
import ProductsSection from "@/sections/ProductsSection";
import TrustSection from "@/sections/TrustSection";


import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import GoldenParticles from "@/app/components/GoldenParticles";
import HeroParallax from "@/app/components/HeroParallax";
import MagneticButtons from "@/app/components/MagneticButtons";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";

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

const heroSlides = [
  {
    src: "/images/homepage/hero/hero-slide-01-natural-henna-powder-branded-box-final-v1.png",
    alt: "Natural henna powder for international wholesale and private-label buyers",
  },
  {
    src: "/images/homepage/hero/hero-slide-02-natural-henna-hair-colors-four-models-forest-final-v3.png",
    alt: "Natural henna hair colors supplied to salons, distributors and beauty brands worldwide",
  },
  {
    src: "/images/homepage/hero/hero-slide-03-natural-indigo-powder-branded-box-final-v1.png",
    alt: "Natural indigo powder for bulk export and private-label packaging",
  },
  {
    src: "/images/homepage/hero/hero-slide-04-henna-based-hair-colors-five-models-forest-final-v5.png",
    alt: "Henna-based botanical hair colors for professional international buyers",
  },
  {
    src: "/images/homepage/hero/hero-slide-05-ayurvedic-indian-herbs-branded-boxes-crop-safe-final-v2.png",
    alt: "Ayurvedic Indian herbs in export and private-label packaging",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselFocused, setIsCarouselFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isCarouselFocused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide(
        (previousSlide) =>
          (previousSlide + 1) % heroSlides.length
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isCarouselFocused, prefersReducedMotion]);

  return (
    <main
      className={`${playfair.variable} ${cormorant.variable} relative min-h-screen overflow-x-hidden bg-[#07140f]`}
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          HOMEPAGE HERO
      ===================================================== */}
      <section
  id="home"
  onFocusCapture={() => setIsCarouselFocused(true)}
  onBlurCapture={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsCarouselFocused(false);
    }
  }}
  className="relative isolate h-screen overflow-hidden bg-[#07140f]"
>
  {/* ===================================================
      HERO IMAGE SLIDER
      Navbar = 68px
      Image starts BELOW navbar
  =================================================== */}
  <div className="absolute inset-x-0 bottom-0 top-[68px] -z-30 overflow-hidden">
    {heroSlides.map((slide, index) => (
  <div
    key={slide.src}
    className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
      index === currentSlide
        ? "opacity-100"
        : "pointer-events-none opacity-0"
    }`}
  >
    <Image
      src={slide.src}
      alt={slide.alt}
      fill
      priority={index === 0}
      sizes="100vw"
      className="object-cover object-top"
    />
  </div>
))}
      </div>
   

  {/* Readability overlays — also below navbar */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[68px] -z-20 bg-gradient-to-r from-black/32 via-black/8 to-transparent" />

  <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[68px] -z-20 bg-gradient-to-t from-black/18 via-transparent to-transparent" />

  <HeroParallax />
  <GoldenParticles />

  {/* ===================================================
      HERO CONTENT
  =================================================== */}
  <div className="relative z-10 flex h-full w-full flex-col px-4 pt-[68px] sm:px-6 lg:px-8 xl:px-10">
    <div className="flex flex-1 items-center py-10">
      <div className="relative ml-0 w-full max-w-[590px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-5 -inset-y-6 rounded-[24px] bg-gradient-to-r from-black/42 via-black/14 to-transparent"
        />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A962]/30 bg-[#0c291e]/34 px-4 py-2 backdrop-blur-sm">
            <span className="h-px w-8 bg-[#C9A962]/85" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#F5F0E6]/75">
              Manufacturer · Exporter · Supplier
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,4.4vw,4.35rem)] font-medium leading-[1.01] tracking-[-0.03em] text-[#F7F1E7] drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
  Natural Henna & Indigo

  <span className="mt-2 block bg-gradient-to-r from-[#F7F1E7] via-[#E7CE84] to-[#C9A962] bg-clip-text text-transparent">
    Exporter from India
  </span>
</h1>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px w-14 bg-[#C9A962]/80" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#C9A962]/80" />
          </div>

          <p className="max-w-[535px] text-[16px] font-light leading-[1.75] tracking-[0.01em] text-[#F5F0E6]/88 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-[17px]">
            Indian manufacturer, exporter and supplier of Natural Henna
  Powder, Indigo Powder, botanical hair colors, Ayurvedic Herbs
  and Indian Spices for importers, distributors, salons and
  private-label buyers worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-3 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#102f23] shadow-[0_14px_38px_rgba(201,169,98,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
            >
              Explore Products
              <span>→</span>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-3 border border-[#F5F0E6]/30 bg-[#102f23]/34 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F5F0E6]/95 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962]/65 hover:text-[#E4C878]"
            >
              Our Heritage
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</section>

      {/* =====================================================
          HOMEPAGE SECTIONS
      ===================================================== */}
      <TrustSection />
      <AboutSection />
      <ProductsSection />
      <InfrastructureSection />
      <CertificationSection />
      <ExportSection />
      <CountryShowcaseSection />
      <FooterSection />

      {/* =====================================================
          GLOBAL INTERACTIONS
      ===================================================== */}
      <PremiumCursor />
      <MagneticButtons />
      <FloatingContactButtons />
    </main>
  );
}
