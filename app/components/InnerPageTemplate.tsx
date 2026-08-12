import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import GoldenParticles from "@/app/components/GoldenParticles";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

type Highlight = {
  value?: string;
  title: string;
  description: string;
};

type ContentSection = {
  eyebrow?: string;
  title: string;
  description: string[];
  image?: string;
  imageAlt?: string;
  points?: string[];
  imagePosition?: "left" | "right";
};

type InnerPageTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  introductionTitle: string;
  introduction: string[];
  highlights?: Highlight[];
  sections?: ContentSection[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
};

export default function InnerPageTemplate({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  introductionTitle,
  introduction,
  highlights = [],
  sections = [],
  ctaTitle = "Let’s Build a Long-Term Business Partnership",
  ctaDescription =
    "Connect with Shivesh International for bulk supply, private-label manufacturing and export enquiries.",
  ctaButtonLabel = "Contact Our Export Team",
  ctaButtonHref = "/contact",
}: InnerPageTemplateProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate min-h-[72vh] overflow-hidden bg-[#071b14]">
        {/* HERO IMAGE */}
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* =================================================
            VERY LIGHT GLOBAL OVERLAYS
            Keep image bright and detailed
        ================================================= */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071b14]/32 via-[#071b14]/6 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-black/5" />

        {/* =================================================
            LEFT READABILITY ZONE ONLY
        ================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[54%] bg-gradient-to-r from-[#071b14]/48 via-[#071b14]/22 to-transparent lg:w-[48%]"
        />

        {/* Premium particles */}
        <GoldenParticles />

        {/* =================================================
            HERO CONTENT
        ================================================= */}
        <div className="relative z-10 flex min-h-[72vh] w-full items-center pb-20 pt-36">
          <div className="ml-5 w-full max-w-[660px] sm:ml-8 lg:ml-10 xl:ml-12 2xl:ml-14">
            {/* Very subtle local text support */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-5 -inset-y-7 -z-10 bg-gradient-to-r from-black/18 via-black/[0.06] to-transparent"
              />

              {/* Eyebrow */}
              <StaggerItem delay={0}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#C9A962]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#E4C878] sm:text-[11px]">
                    {eyebrow}
                  </span>
                </div>
              </StaggerItem>

              {/* Main Heading */}
              <StaggerItem delay={120}>
                <h1 className="max-w-[650px] font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,4.5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.035em] text-[#F7F1E7] drop-shadow-[0_3px_18px_rgba(0,0,0,0.42)]">
                  {title}
                </h1>
              </StaggerItem>

              {/* Gold divider */}
              <StaggerItem delay={190}>
                <div className="my-6 flex items-center gap-4">
                  <span className="h-px w-14 bg-[#C9A962]/85" />

                  <span className="h-1.5 w-1.5 rotate-45 border border-[#C9A962]/85" />
                </div>
              </StaggerItem>

              {/* Subtitle */}
              <StaggerItem delay={240}>
                <p className="max-w-[575px] text-[15px] font-light leading-[1.8] text-[#F5F0E6]/82 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-[16px] lg:text-[17px]">
                  {subtitle}
                </p>
              </StaggerItem>

              {/* Breadcrumb */}
              <StaggerItem delay={360}>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em]">
                  <Link
                    href="/"
                    className="text-[#F5F0E6]/55 transition-colors duration-300 hover:text-[#C9A962]"
                  >
                    Home
                  </Link>

                  <span className="text-[#C9A962]/65">/</span>

                  <span className="text-[#C9A962]">{eyebrow}</span>
                </div>
              </StaggerItem>
            </div>
          </div>
        </div>

        {/* =================================================
            SOFT TRANSITION TO NEXT SECTION
        ================================================= */}
        {/* Sharp premium bottom boundary */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#C9A962]/35" />
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="sticky top-32">
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.40em] text-[#9f7f36]">
                    Introduction
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  {introductionTitle}
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              {introduction.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-9 text-[#4c5f54]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}
      {highlights.length > 0 && (
        <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="mx-auto max-w-[1500px]">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((highlight, index) => (
                  <StaggerItem key={highlight.title} delay={index * 120}>
                    <article className="group relative h-full overflow-hidden border border-[#C9A962]/20 bg-white/[0.035] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/65 hover:bg-white/[0.06] hover:shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
                      <div className="pointer-events-none absolute -left-[90%] top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                      {highlight.value && (
                        <p className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]">
                          {highlight.value}
                        </p>
                      )}

                      <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                        {highlight.title}
                      </h3>

                      <div className="mt-5 h-px w-12 bg-[#C9A962]" />

                      <p className="mt-5 leading-7 text-[#F5F0E6]/65">
                        {highlight.description}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* =====================================================
          DETAILED SECTIONS
      ===================================================== */}
      {sections.map((section, sectionIndex) => {
        const imageOnLeft = section.imagePosition === "left";

        return (
          <section
            key={`${section.title}-${sectionIndex}`}
            className={`px-6 py-24 sm:px-8 lg:px-12 lg:py-32 ${
              sectionIndex % 2 === 1 ? "bg-[#ede5d7]" : "bg-[#f5f0e6]"
            }`}
          >
            <RevealOnScroll>
              <div
                className={`mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
                  imageOnLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {section.image && section.imageAlt && (
                  <div className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#ded5c5] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/35 via-transparent to-transparent" />

                    <div className="pointer-events-none absolute -left-[90%] top-0 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[145%]" />
                  </div>
                )}

                <div>
                  {section.eyebrow && (
                    <div className="mb-6 flex items-center gap-5">
                      <span className="h-[3px] w-14 bg-[#C9A962]" />

                      <span className="text-xs font-bold uppercase tracking-[0.38em] text-[#9f7f36]">
                        {section.eyebrow}
                      </span>
                    </div>
                  )}

                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                    {section.title}
                  </h2>

                  <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-[#9f7f36] to-[#E4C878]" />

                  <div className="mt-8 space-y-6">
                    {section.description.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-lg leading-9 text-[#4c5f54]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.points && section.points.length > 0 && (
                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-4 border-b border-[#173b2a]/10 pb-4"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C9A962]" />

                          <span className="font-medium leading-7 text-[#173b2a]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          </section>
        );
      })}

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#0d2b20] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[130px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C9A962]">
              Global Business Enquiries
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
              {ctaTitle}
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
              {ctaDescription}
            </p>

            <Link
              href={ctaButtonHref}
              className="mt-10 inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-sm font-bold uppercase tracking-[0.20em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_20px_50px_rgba(201,169,98,0.28)]"
            >
              {ctaButtonLabel}

              <span className="text-lg">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <FooterSection />
      <FloatingContactButtons />
      <PremiumCursor />
      <MagneticButtons />
    </main>
  );
}