"use client";

import { useEffect, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Us", href: "#about", sectionId: "about" },
  { label: "Products", href: "#products", sectionId: "products" },
  {
    label: "Infrastructure",
    href: "#infrastructure",
    sectionId: "infrastructure",
  },
  {
    label: "Certifications",
    href: "#certifications",
    sectionId: "certifications",
  },
  { label: "Export", href: "#export", sectionId: "export" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      navigationLinks.forEach((link) => {
        const section = document.getElementById(link.sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#C9A962]/20 bg-[#102f23]/95 shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl"
          : "bg-[#102f23]/75 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-4"
          aria-label="Shivesh International home"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-[#C9A962]/45 bg-[#173b2a] font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#f5f0e6] transition duration-300 group-hover:border-[#C9A962] group-hover:text-[#C9A962]">
            SI
          </div>

          <div className="leading-none">
            <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold uppercase tracking-[0.18em] text-[#f5f0e6]">
              Shivesh
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#C9A962]">
              International
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative py-3 text-xs font-semibold uppercase tracking-[0.20em] transition duration-300 ${
                  isActive
                    ? "text-[#C9A962]"
                    : "text-[#f5f0e6]/80 hover:text-[#f5f0e6]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute inset-x-0 bottom-1 h-px origin-left bg-[#C9A962] transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-[#C9A962]/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A962] transition duration-300 hover:bg-[#C9A962] hover:text-[#102f23]"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border border-[#C9A962]/40 text-[#f5f0e6] transition hover:border-[#C9A962] hover:text-[#C9A962] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] h-px w-6 bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[10px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#C9A962]/15 bg-[#102f23]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-6 py-5">
          <div className="flex flex-col">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-[#f5f0e6]/10 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "text-[#C9A962]"
                      : "text-[#f5f0e6]/80 hover:text-[#C9A962]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center bg-[#C9A962] px-6 py-4 text-sm font-semibold uppercase tracking-[0.20em] text-[#102f23]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}