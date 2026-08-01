"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certifications", href: "/certifications" },
  { label: "Export", href: "/export" },
  { label: "Contact Us", href: "/contact" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#10291d]">
      <section className="relative min-h-screen overflow-hidden text-white">
        {/* Full-screen factory background */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/Factory hero.png')",
  }}
/>

{/* Dark overlay for text readability */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        {/* Navbar */}
        <header className="absolute left-0 top-0 z-50 w-full">
          <nav className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Shivesh International Home"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/15 font-serif text-2xl font-semibold backdrop-blur-md">
                SI
              </div>

              <div className="leading-none">
                <p className="font-serif text-xl tracking-[0.12em] sm:text-2xl">
                  SHIVESH
                </p>

                <p className="mt-1 text-[9px] tracking-[0.38em] text-white/75 sm:text-[10px]">
                  INTERNATIONAL
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-7 xl:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/90 transition hover:text-[#e8c66d]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="hidden rounded-md border border-[#d7b45a]/80 bg-[#294c2d]/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] shadow-lg backdrop-blur-md transition hover:bg-[#d7b45a] hover:text-[#173b2a] lg:inline-flex"
            >
              Get In Touch
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-black/20 backdrop-blur-md xl:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </nav>

          {menuOpen && (
            <div className="mx-4 rounded-xl border border-white/15 bg-[#10291d]/95 p-5 shadow-2xl backdrop-blur-xl xl:hidden">
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 px-2 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white/90 last:border-b-0 hover:text-[#e8c66d]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 rounded-md bg-[#d7b45a] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#173b2a]"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero content */}
<div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-16 pt-28 sm:px-10 lg:px-14">
  <div className="max-w-3xl rounded-2xl border border-white/15 bg-black/25 p-6 shadow-2xl backdrop-blur-[2px] sm:p-8 lg:p-10">
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e8c66d] sm:text-sm">
      Manufacturer & Global Exporter from India
    </p>

    <h1 className="font-serif text-4xl leading-[1.06] sm:text-5xl md:text-7xl lg:text-[72px]">
  SHIVESH INTERNATIONAL
</h1>

    <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
      Premium natural henna, indigo, henna-based hair colors, Ayurvedic
      Indian herbs and authentic Indian spices for global private-label and
      bulk buyers.
    </p>

    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
      <Link
        href="/products"
        className="inline-flex min-h-14 items-center justify-center rounded-md bg-[#d7b45a] px-7 text-sm font-bold uppercase tracking-[0.12em] text-[#173b2a] transition hover:-translate-y-0.5 hover:bg-[#ebca72]"
      >
        Explore Products
      </Link>

      <Link
        href="/contact"
        className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/45 bg-white/5 px-7 text-sm font-semibold uppercase tracking-[0.12em] backdrop-blur-md transition hover:bg-white hover:text-[#173b2a]"
      >
        Contact Export Team
      </Link>
    </div>

    <div className="mt-11 grid grid-cols-2 gap-5 border-t border-white/20 pt-7 md:grid-cols-4">
      <div>
        <p className="text-2xl font-semibold text-[#e8c66d]">30+</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">
          Years Experience
        </p>
      </div>

      <div>
        <p className="text-2xl font-semibold text-[#e8c66d]">800+</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">
          Farmer Network
        </p>
      </div>

      <div>
        <p className="text-2xl font-semibold text-[#e8c66d]">50+</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">
          Export Markets
        </p>
      </div>

      <div>
        <p className="text-2xl font-semibold text-[#e8c66d]">100%</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">
          Natural Focus
        </p>
      </div>
    </div>
  </div>
</div>