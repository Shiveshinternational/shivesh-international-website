"use client";

import Link from "next/link";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certifications", href: "/certifications" },
  { label: "Export", href: "/export" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  {
    label: "Natural Henna Powder",
    href: "/products/natural-henna-powder",
  },
  {
    label: "Natural Indigo Powder",
    href: "/products/natural-indigo-powder",
  },
  {
    label: "Natural Henna Hair Colors",
    href: "/products/natural-henna-hair-colors",
  },
  {
    label: "Henna-Based Hair Colors",
    href: "/products/henna-based-hair-colors",
  },
  {
    label: "Ayurvedic Indian Herbs",
    href: "/products/ayurvedic-indian-herbs",
  },
  {
    label: "Indian Spices",
    href: "/products/indian-spices",
  },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 text-sm text-[#F5F0E6]/58 transition-all duration-300 hover:translate-x-1 hover:text-[#E4C878]"
    >
      <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]/65 transition-transform duration-300 group-hover:scale-125" />
      <span>{children}</span>
    </Link>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#061811] text-[#F5F0E6]">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-20 h-[440px] w-[440px] rounded-full bg-[#C9A962]/[0.07] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-16 h-[500px] w-[500px] rounded-full bg-[#C9A962]/[0.05] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(201,169,98,0.022)_38%,transparent_75%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent"
      />

      <RevealOnScroll>
        <div className="relative mx-auto max-w-[1500px] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          {/* =================================================
              TOP EXPORT CTA
          ================================================= */}
          <StaggerItem delay={0}>
            <div className="relative overflow-hidden border border-[#C9A962]/22 bg-[#0D2F22]/82 px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-8 lg:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C9A962]/8 blur-[90px]"
              />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-[900px]">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-[#C9A962]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A962]">
                      Global Export Partnership
                    </p>
                  </div>

                  <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.5vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#F7F1E7]">
                    Ready to Build Your
                    <span className="ml-2 text-[#E4C878]">
                      Natural Product Line?
                    </span>
                  </h2>

                  <p className="mt-4 max-w-3xl text-[14px] font-light leading-7 text-[#F5F0E6]/58 sm:text-[15px]">
                    Connect with our export team for product selection,
                    private-label development, packaging coordination and
                    international supply support.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    Contact Export Team
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <a
                    href="https://wa.me/919999774950"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-3 border border-[#F5F0E6]/18 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#F5F0E6] hover:text-[#102F23]"
                  >
                    WhatsApp
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* =================================================
              MAIN FOOTER GRID
          ================================================= */}
          <div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.72fr_0.95fr_1.13fr] xl:gap-12">
            {/* ===============================================
                BRAND
            =============================================== */}
            <StaggerItem delay={100}>
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#C9A962]/45 bg-[#173B2A] font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F5F0E6] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                    SI
                  </div>

                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold uppercase tracking-[0.15em] text-[#F7F1E7]">
                      Shivesh
                    </p>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C9A962]">
                      International
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-md text-[15px] font-light leading-8 text-[#F5F0E6]/58">
                  Premium exporter of Natural Henna Powder, Natural Indigo
                  Powder, Natural Henna Hair Colors, Henna-Based Hair Colors,
                  Ayurvedic Indian Herbs and Indian Spices.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["Nature", "Quality", "Trust"].map((item) => (
                    <span
                      key={item}
                      className="border border-[#C9A962]/22 bg-white/[0.025] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E4C878]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Contact shortcuts */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:shiveshinternational@gmail.com"
                    className="group inline-flex items-center gap-2 border border-[#C9A962]/22 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    <span className="text-[#C9A962]">@</span>
                    Email
                  </a>

                  <a
                    href="https://wa.me/919999774950"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border border-[#C9A962]/22 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    <span className="text-[#C9A962]">◉</span>
                    WhatsApp
                  </a>

                  <a
                    href="https://www.henna-manufacturer.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border border-[#C9A962]/22 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    <span className="text-[#C9A962]">↗</span>
                    Website
                  </a>
                </div>
              </div>
            </StaggerItem>

            {/* ===============================================
                QUICK LINKS
            =============================================== */}
            <StaggerItem delay={180}>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                  Navigation
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F7F1E7]">
                  Quick Links
                </h3>

                <div className="mt-6 flex flex-col gap-3.5">
                  {quickLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* ===============================================
                PRODUCTS
            =============================================== */}
            <StaggerItem delay={260}>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                  Product Portfolio
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F7F1E7]">
                  Our Products
                </h3>

                <div className="mt-6 flex flex-col gap-3.5">
                  {productLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* ===============================================
                CONTACT
            =============================================== */}
            <StaggerItem delay={340}>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                  Contact Details
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F7F1E7]">
                  Connect With Us
                </h3>

                <div className="mt-6 border border-[#C9A962]/18 bg-[#0D2F22]/62 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
                  <div className="space-y-5 text-sm leading-7 text-[#F5F0E6]/58">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        Registered Office
                      </p>

                      <p className="mt-2">
                        361-C, BG-6, Paschim Vihar,
                        <br />
                        New Delhi – 110063, India
                      </p>
                    </div>

                    <div className="h-px bg-[#C9A962]/10" />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        Phone
                      </p>

                      <div className="mt-2 flex flex-col">
                        <a
                          href="tel:+919999774950"
                          className="transition hover:text-[#E4C878]"
                        >
                          +91-9999774950
                        </a>

                        <a
                          href="tel:+919873077187"
                          className="transition hover:text-[#E4C878]"
                        >
                          +91-9873077187
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-[#C9A962]/10" />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        Email
                      </p>

                      <a
                        href="mailto:shiveshinternational@gmail.com"
                        className="mt-2 block break-all transition hover:text-[#E4C878]"
                      >
                        shiveshinternational@gmail.com
                      </a>
                    </div>

                    <div className="h-px bg-[#C9A962]/10" />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        Website
                      </p>

                      <a
                        href="https://www.henna-manufacturer.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block break-all transition hover:text-[#E4C878]"
                      >
                        www.henna-manufacturer.com
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919999774950"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#C9A962] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102F23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    WhatsApp Our Team
                    <span>→</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}
          <StaggerItem delay={460}>
            <div className="mt-16 border-t border-[#C9A962]/16 pt-7">
              <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <p className="text-xs text-[#F5F0E6]/38">
                  © 2026 Shivesh International. All Rights Reserved.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
                  <span>Designed for Global Trade</span>

                  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/50 sm:block" />

                  <span>India Origin</span>

                  <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/50 sm:block" />

                  <span>Premium Export Products</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </footer>
  );
}