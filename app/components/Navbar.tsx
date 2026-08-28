"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LanguageSelector from "@/app/components/LanguageSelector";
import ProductMegaMenu from "@/app/components/ProductMegaMenu";
import SiteSearch from "@/app/components/SiteSearch";

const navigationLinks = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "About Us", href: "/about", sectionId: "about" },
  { label: "Products", href: "/#products", sectionId: "products" },
  {
    label: "Infrastructure",
    href: "/infrastructure",
    sectionId: "infrastructure",
  },
  {
    label: "Certifications",
    href: "/certifications",
    sectionId: "certifications",
  },
  { label: "Export", href: "/export", sectionId: "export" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

const germanNavigationLinks = [
  { label: "Startseite", href: "/", sectionId: "home" },
  { label: "Über uns", href: "/about", sectionId: "about" },
  { label: "Produkte", href: "/#products", sectionId: "products" },
  { label: "Infrastruktur", href: "/infrastructure", sectionId: "infrastructure" },
  { label: "Zertifizierungen", href: "/certifications", sectionId: "certifications" },
  { label: "Export", href: "/export", sectionId: "export" },
  { label: "Kontakt", href: "/contact", sectionId: "contact" },
];

const frenchNavigationLinks = [
  { label: "Accueil", href: "/", sectionId: "home" },
  { label: "À propos", href: "/about", sectionId: "about" },
  { label: "Produits", href: "/#products", sectionId: "products" },
  { label: "Infrastructure", href: "/infrastructure", sectionId: "infrastructure" },
  { label: "Certifications", href: "/certifications", sectionId: "certifications" },
  { label: "Export", href: "/export", sectionId: "export" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];
const spanishNavigationLinks = [
  { label: "Inicio", href: "/", sectionId: "home" }, { label: "Quiénes somos", href: "/about", sectionId: "about" },
  { label: "Productos", href: "/#products", sectionId: "products" }, { label: "Infraestructura", href: "/infrastructure", sectionId: "infrastructure" },
  { label: "Certificaciones", href: "/certifications", sectionId: "certifications" }, { label: "Exportación", href: "/export", sectionId: "export" },
  { label: "Contacto", href: "/contact", sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isGerman = pathname.startsWith("/de/");
  const isFrench = pathname.startsWith("/fr/");
  const isSpanish = pathname.startsWith("/es/");
  const visibleNavigationLinks = isGerman
    ? germanNavigationLinks
    : isFrench
      ? frenchNavigationLinks : isSpanish ? spanishNavigationLinks : navigationLinks;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? Math.min((window.scrollY / documentHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);

      if (pathname !== "/") return;

      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      visibleNavigationLinks.forEach((link) => {
        const section = document.getElementById(link.sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname, visibleNavigationLinks]);

  useEffect(() => {
    const closeMenuTimer = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);

    return () => {
      window.clearTimeout(closeMenuTimer);
    };
  }, [pathname]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isLinkActive = (href: string, sectionId: string) => {
    if (pathname === "/") {
      return activeSection === sectionId;
    }

    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#C9A962]/20 bg-[#102f23]/95 shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl"
          : "bg-[#102f23]/75 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-x-0 top-0 z-[60] h-[3px] overflow-hidden bg-[#f5f0e6]/10">
        {pathname === "/" ? (
          <div
            className="h-full bg-gradient-to-r from-[#9f7f36] via-[#E4C878] to-[#C9A962] shadow-[0_0_14px_rgba(201,169,98,0.9)] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden bg-[#9f7f36]/25">
            <div className="absolute inset-y-0 left-0 w-1/3 animate-[navbarShimmer_2.4s_linear_infinite] bg-gradient-to-r from-transparent via-[#E4C878] to-transparent shadow-[0_0_14px_rgba(228,200,120,0.95)]" />
          </div>
        )}
      </div>

      <nav className="mx-auto flex max-w-[1580px] items-center justify-between gap-5 px-5 py-4 xl:px-7">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-4"
          aria-label={isGerman ? "Shivesh International Startseite" : isFrench ? "Accueil Shivesh International" : "Shivesh International home"}
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
        </Link>

        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {visibleNavigationLinks.map((link) => {
            if (!isGerman && !isFrench && !isSpanish && link.label === "Products") {
              return <ProductMegaMenu key={link.href} />;
            }

            const isActive = isLinkActive(link.href, link.sectionId);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-3 text-[11px] font-semibold uppercase tracking-[0.17em] transition duration-300 2xl:text-xs 2xl:tracking-[0.2em] ${
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
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <SiteSearch />
          <LanguageSelector />

          <Link
            href="/contact"
            className="ml-1 inline-flex items-center justify-center border border-[#C9A962]/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A962] transition duration-300 hover:bg-[#C9A962] hover:text-[#102f23]"
          >
            {isGerman ? "Kontakt aufnehmen" : isFrench ? "Nous contacter" : isSpanish ? "Contactar" : "Get in Touch"}
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <SiteSearch />
          <LanguageSelector />

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center border border-[#C9A962]/40 text-[#f5f0e6] transition hover:border-[#C9A962] hover:text-[#C9A962]"
            aria-label={isGerman ? "Navigationsmenü umschalten" : isFrench ? "Ouvrir ou fermer le menu de navigation" : isSpanish ? "Abrir o cerrar la navegación" : "Toggle navigation menu"}
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
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#C9A962]/15 bg-[#102f23]/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          isMenuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-6 py-5">
          <div className="flex flex-col">
            {visibleNavigationLinks.map((link) => {
              const isActive = isLinkActive(link.href, link.sectionId);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`relative border-b border-[#f5f0e6]/10 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "text-[#C9A962]"
                      : "text-[#f5f0e6]/80 hover:text-[#C9A962]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-3 left-0 h-px w-14 bg-[#C9A962]" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center bg-[#C9A962] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#102f23]"
            >
              {isGerman ? "Kontakt aufnehmen" : isFrench ? "Nous contacter" : isSpanish ? "Contactar" : "Get in Touch"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
