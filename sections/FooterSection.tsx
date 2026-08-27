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
  { label: "Buyer Resources", href: "/resources" },
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

const germanQuickLinks = [
  { label: "Startseite", href: "/#home" },
  { label: "Über uns", href: "/about" },
  { label: "Produkte", href: "/#products" },
  { label: "Infrastruktur", href: "/infrastructure" },
  { label: "Zertifizierungen", href: "/certifications" },
  { label: "Export", href: "/export" },
  { label: "Informationen für Einkäufer", href: "/resources" },
  { label: "Kontakt", href: "/contact" },
];

const germanProductLinks = [
  { label: "Natürliches Henna-Pulver", href: "/products/natural-henna-powder" },
  { label: "Natürliches Indigo-Pulver", href: "/products/natural-indigo-powder" },
  { label: "Natürliche Henna-Haarfarben", href: "/products/natural-henna-hair-colors" },
  { label: "Henna-basierte Haarfarben", href: "/products/henna-based-hair-colors" },
  { label: "Ayurvedische indische Kräuter", href: "/products/ayurvedic-indian-herbs" },
  { label: "Indische Gewürze", href: "/products/indian-spices" },
];

const frenchQuickLinks = [
  { label: "Accueil", href: "/#home" },
  { label: "À propos", href: "/about" },
  { label: "Produits", href: "/#products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certifications", href: "/certifications" },
  { label: "Export", href: "/export" },
  { label: "Ressources acheteurs", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const frenchProductLinks = [
  { label: "Poudre de henné naturel", href: "/products/natural-henna-powder" },
  { label: "Poudre d’indigo naturel", href: "/products/natural-indigo-powder" },
  { label: "Colorations capillaires naturelles au henné", href: "/products/natural-henna-hair-colors" },
  { label: "Colorations capillaires à base de henné", href: "/products/henna-based-hair-colors" },
  { label: "Plantes ayurvédiques indiennes", href: "/products/ayurvedic-indian-herbs" },
  { label: "Épices indiennes", href: "/products/indian-spices" },
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

export default function FooterSection({ locale = "en" }: { locale?: "en" | "de" | "fr" }) {
  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const localize = (english: string, german: string, french: string) =>
    isGerman ? german : isFrench ? french : english;
  const visibleQuickLinks = isGerman ? germanQuickLinks : isFrench ? frenchQuickLinks : quickLinks;
  const visibleProductLinks = isGerman ? germanProductLinks : isFrench ? frenchProductLinks : productLinks;
  const openCookieSettings = () => {
  localStorage.removeItem("shivesh-cookie-consent");

  window.dispatchEvent(
    new Event("shivesh-open-cookie-settings"),
  );
};
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
                      {localize("Global Export Partnership", "Internationale Exportpartnerschaft", "Partenariat d’exportation international")}
                    </p>
                  </div>

                  <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.5vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#F7F1E7]">
                    {localize("Ready to Build Your", "Bereit für Ihr", "Prêt à développer votre")}
                    <span className="ml-2 text-[#E4C878]">
                      {localize("Natural Product Line?", "Naturproduktsortiment?", "gamme de produits naturels ?")}
                    </span>
                  </h2>

                  <p className="mt-4 max-w-3xl text-[14px] font-light leading-7 text-[#F5F0E6]/58 sm:text-[15px]">
                    {localize(
                      "Connect with our export team for product selection, private-label development, packaging coordination and international supply support.",
                      "Sprechen Sie mit unserem Exportteam über Produktauswahl, Eigenmarkenentwicklung, Verpackungskoordination und internationale Belieferung.",
                      "Contactez notre équipe export pour la sélection des produits, le développement Private Label, la coordination des emballages et l’accompagnement de votre approvisionnement international.",
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    {localize("Contact Export Team", "Exportteam kontaktieren", "Contacter l’équipe export")}
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
                  {localize(
                    "Premium exporter of Natural Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors, Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices.",
                    "Premium-Exporteur von natürlichem Henna-Pulver, natürlichem Indigo-Pulver, pflanzlichen Haarfarben, ayurvedischen indischen Kräutern und indischen Gewürzen.",
                    "Exportateur premium de poudre de henné naturel, d’indigo naturel, de colorations capillaires au henné, de plantes ayurvédiques indiennes et d’épices indiennes.",
                  )}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {(isGerman ? ["Natur", "Qualität", "Vertrauen"] : isFrench ? ["Nature", "Qualité", "Confiance"] : ["Nature", "Quality", "Trust"]).map((item) => (
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=export@shiveshinternational.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border border-[#C9A962]/22 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    <span className="text-[#C9A962]">@</span>
                    {localize("Email", "E-Mail", "E-mail")}
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
                    href="https://www.shiveshinternational.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border border-[#C9A962]/22 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962] hover:text-[#E4C878]"
                  >
                    <span className="text-[#C9A962]">↗</span>
                    {localize("Website", "Webseite", "Site web")}
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
                  {localize("Quick Links", "Direktlinks", "Liens rapides")}
                </h3>

                <div className="mt-6 flex flex-col gap-3.5">
                  {visibleQuickLinks.map((link) => (
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
                  {localize("Product Portfolio", "Produktsortiment", "Gamme de produits")}
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F7F1E7]">
                  {localize("Our Products", "Unsere Produkte", "Nos produits")}
                </h3>

                <div className="mt-6 flex flex-col gap-3.5">
                  {visibleProductLinks.map((link) => (
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
                  {localize("Contact Details", "Kontaktdaten", "Coordonnées")}
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F7F1E7]">
                  {localize("Connect With Us", "Kontaktieren Sie uns", "Contactez-nous")}
                </h3>

                <div className="mt-6 border border-[#C9A962]/18 bg-[#0D2F22]/62 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
                  <div className="space-y-5 text-sm leading-7 text-[#F5F0E6]/58">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        {localize("Registered Office", "Eingetragener Firmensitz", "Siège social")}
                      </p>

                      <p className="mt-2">
                        361-C, BG-6, Paschim Vihar,
                        <br />
                        {localize("New Delhi – 110063, India", "Neu-Delhi – 110063, Indien", "New Delhi – 110063, Inde")}
                      </p>
                    </div>

                    <div className="h-px bg-[#C9A962]/10" />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        {localize("Phone", "Telefon", "Téléphone")}
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
                        {localize("Email", "E-Mail", "E-mail")}
                      </p>

                      <div className="mt-2 space-y-1">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=export@shiveshinternational.com"
target="_blank"
rel="noopener noreferrer"
    className="block break-all transition hover:text-[#E4C878]"
  >
    export@shiveshinternational.com
  </a>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@shiveshinternational.com"
target="_blank"
rel="noopener noreferrer"
    className="block break-all transition hover:text-[#E4C878]"
  >
    sales@shiveshinternational.com
  </a>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@shiveshinternational.com"
target="_blank"
rel="noopener noreferrer"
    className="block break-all transition hover:text-[#E4C878]"
  >
    info@shiveshinternational.com
  </a>
</div>
                    </div>

                    <div className="h-px bg-[#C9A962]/10" />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
                        {localize("Website", "Webseite", "Site web")}
                      </p>

                      <a
                        href="https://shiveshinternational.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block break-all transition hover:text-[#E4C878]"
                      >
                        www.shiveshinternational.com
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919999774950"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#C9A962] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102F23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    {localize("WhatsApp Our Team", "Unser Team per WhatsApp", "Contacter notre équipe sur WhatsApp")}
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
    <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
      <div className="flex flex-col items-center gap-3 md:items-start">
        <p className="text-xs text-[#F5F0E6]/38">
          © 2026 Shivesh International. {localize("All Rights Reserved.", "Alle Rechte vorbehalten.", "Tous droits réservés.")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A962] md:justify-start">
          <Link
            href="/privacy-policy"
            className="transition-colors duration-300 hover:text-[#E4C878]"
          >
            {localize("Privacy Policy", "Datenschutzerklärung", "Politique de confidentialité")}
          </Link>

          <Link
            href="/cookie-policy"
            className="transition-colors duration-300 hover:text-[#E4C878]"
          >
            {localize("Cookie Policy", "Cookie-Richtlinie", "Politique relative aux cookies")}
          </Link>

          <button
            type="button"
            onClick={openCookieSettings}
            className="cursor-pointer transition-colors duration-300 hover:text-[#E4C878]"
          >
            {localize("Cookie Settings", "Cookie-Einstellungen", "Paramètres des cookies")}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
        <span>{localize("Designed for Global Trade", "Für den Welthandel entwickelt", "Conçu pour le commerce international")}</span>

        <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/50 sm:block" />

        <span>{localize("India Origin", "Ursprung Indien", "Origine Inde")}</span>

        <span className="hidden h-1 w-1 rotate-45 bg-[#C9A962]/50 sm:block" />

        <span>{localize("Premium Export Products", "Premium-Exportprodukte", "Produits d’exportation premium")}</span>
      </div>
    </div>
  </div>
</StaggerItem>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
