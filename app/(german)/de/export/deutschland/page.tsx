import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import GoldenParticles from "@/app/components/GoldenParticles";
import MagneticButtons from "@/app/components/MagneticButtons";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import { germanyLanguageAlternates } from "@/app/lib/i18n";
import FooterSection from "@/sections/FooterSection";

const pageUrl = "https://shiveshinternational.com/de/export/deutschland";
const heroImage = "https://shiveshinternational.com/images/export/germany/germany-natural-products-export-hero-premium-v1.png";

const keywords = [
  "Naturprodukte Hersteller Indien für Deutschland",
  "Naturprodukte Exporteur Deutschland",
  "Naturprodukte Lieferant Deutschland",
  "Naturprodukte Großhändler Deutschland",
  "Naturprodukte Großhandel Deutschland",
  "Naturprodukte Importeur Deutschland",
  "Naturprodukte Distributor Deutschland",
  "Naturprodukte Händler Deutschland",
  "Naturprodukte Einzelhandel Deutschland",
  "Naturprodukte B2B Deutschland",
  "Naturprodukte für professionelle Einkäufer Deutschland",
  "Private Label Naturprodukte Deutschland",
  "Eigenmarke Naturprodukte Deutschland",
  "OEM Naturprodukte Deutschland",
  "Naturprodukte Großgebinde Deutschland",
  "Naturprodukte aus Indien nach Deutschland",
  "indischer Naturprodukte Exporteur Deutschland",
  "Naturprodukte Lieferant für Kosmetikmarken Deutschland",
  "Naturprodukte Lieferant für Kosmetikunternehmen Deutschland",
  "Naturprodukte für Salonbedarf Deutschland",
  "Naturprodukte für Friseurbedarf Deutschland",
  "Henna Hersteller Indien für Deutschland",
  "Henna Exporteur Deutschland",
  "Henna Pulver Lieferant Deutschland",
  "Henna Großhandel Deutschland",
  "Henna Großhändler Deutschland",
  "Henna Importeur Deutschland",
  "Henna Distributor Deutschland",
  "natürliches Henna Pulver Deutschland",
  "Henna Pulver Großgebinde Deutschland",
  "Henna Private Label Deutschland",
  "Henna Eigenmarke Deutschland",
  "Henna OEM Hersteller Indien",
  "Sojat Henna Lieferant Deutschland",
  "Henna Pulver für Kosmetikmarken Deutschland",
  "Henna Pulver für Salons Deutschland",
  "Indigo Pulver Exporteur Deutschland",
  "Indigo Pulver Lieferant Deutschland",
  "natürliches Indigo Pulver Deutschland",
  "Indigo Pulver Großhandel Deutschland",
  "Indigo Pulver Großgebinde Deutschland",
  "Indigo Pulver Private Label Deutschland",
  "Indigofera tinctoria Pulver Lieferant",
  "Indigo Pulver aus Indien Deutschland",
  "natürliche Haarfarben Lieferant Deutschland",
  "pflanzliche Haarfarben Großhandel Deutschland",
  "Henna Haarfarben Exporteur Deutschland",
  "Henna Haarfarben für Kosmetikmarken Deutschland",
  "Henna Haarfarben für Salons Deutschland",
  "Henna basierte Haarfarben Deutschland",
  "pflanzliche Pulverhaarfarben Deutschland",
  "natürliche Haarfarben Private Label Deutschland",
  "pflanzliche Haarfarben Eigenmarke Deutschland",
  "Haarfarben OEM Hersteller Indien",
  "professionelle Pflanzenhaarfarben Lieferant",
  "ayurvedische Kräuter Exporteur Deutschland",
  "ayurvedische Kräuter Lieferant Deutschland",
  "indische Kräuter Großhandel Deutschland",
  "ayurvedische Pulver Großgebinde Deutschland",
  "ayurvedische Kräuter Private Label Deutschland",
  "ayurvedische Kräuter Eigenmarke Deutschland",
  "indische Pflanzenpulver Lieferant Deutschland",
  "Kräuter Lieferant für Wellnessunternehmen",
  "indische Gewürze Exporteur Deutschland",
  "indische Gewürze Großhandel Deutschland",
  "indische Gewürze Lieferant Deutschland",
  "indische Gewürze Großhändler Deutschland",
  "ganze indische Gewürze Deutschland",
  "gemahlene indische Gewürze Deutschland",
  "indische Gewürze Großgebinde Deutschland",
  "indische Gewürze Private Label Deutschland",
  "Gewürze Eigenmarke Deutschland",
  "Gewürzhersteller Indien für Deutschland",
  "B2B Export Indien Deutschland",
  "Verpackung für Eigenmarken Deutschland",
  "Exportdokumentation Indien Deutschland",
  "Großhandelslieferant Indien Deutschland",
  "Lieferant für deutsche Importeure",
  "Lieferant für deutsche Distributoren",
  "Shivesh International Deutschland",
];

export const metadata: Metadata = {
  title: "Naturprodukte aus Indien für Deutschland",
  description: "Indischer Hersteller und Exporteur von Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und Gewürzen für deutsche B2B-Einkäufer. MOQ: 200 kg je Artikel.",
  keywords,
  alternates: { canonical: pageUrl, languages: germanyLanguageAlternates },
  openGraph: {
    title: "Naturprodukte aus Indien für Deutschland",
    description: "Großhandel, Großgebinde, OEM und Private Label für deutsche Importeure, Distributoren, Marken und professionelle Einkäufer.",
    url: pageUrl,
    type: "website",
    locale: "de_DE",
    siteName: "Shivesh International",
    images: [{ url: "/images/export/germany/germany-natural-products-export-hero-premium-v1.png", width: 1942, height: 809, alt: "Deutsche Einkäufer und ein indischer Exporteur bei der Koordination von Naturprodukten mit Blick auf den Hamburger Hafen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturprodukte aus Indien für Deutschland",
    description: "Henna, Indigo, pflanzliche Haarfarben, Kräuter und Gewürze für deutsche B2B-Einkäufer und Eigenmarken.",
    images: ["/images/export/germany/germany-natural-products-export-hero-premium-v1.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const products = [
  { number: "01", title: "Natürliches Henna-Pulver", description: "Fein verarbeitetes Henna-Pulver für deutsche Naturkosmetikmarken, den professionellen Salonbedarf und Eigenmarken in abgestimmten Handelsformaten.", href: "/products/natural-henna-powder" },
  { number: "02", title: "Natürliches Indigo-Pulver", description: "Natürliches Indigo-Pulver für pflanzliche Haarfarbsortimente, geliefert nach abgestimmten Spezifikationen in Großgebinden oder geeigneter Markenverpackung.", href: "/products/natural-indigo-powder" },
  { number: "03", title: "Natürliche Henna-Haarfarben", description: "Pflanzliche Pulverhaarfarben für deutsche Distributoren, Naturkosmetikmarken und professionelle Lieferanten mit sorgfältig geplanten Farbpaletten.", href: "/products/natural-henna-hair-colors" },
  { number: "04", title: "Henna-basierte Haarfarben", description: "Henna-basierte Haarfarben für professionelle und Einzelhandelskanäle; Rezeptur-, Verpackungs- und Druckdatenanforderungen werden auf Machbarkeit geprüft.", href: "/products/henna-based-hair-colors" },
  { number: "05", title: "Ayurvedische indische Kräuter", description: "Ausgewählte ayurvedische Kräuter und Pflanzenpulver für deutsche Wellness-, Körperpflege-, Rohstoff- und Eigenmarkenprogramme.", href: "/products/ayurvedic-indian-herbs" },
  { number: "06", title: "Indische Gewürze", description: "Ausgewählte ganze und gemahlene indische Gewürze für deutsche Importeure, Großhändler, Lebensmittelunternehmen und geeignete Eigenmarkenkonzepte.", href: "/products/indian-spices" },
];

const buyerTypes = ["Importeure", "Distributoren", "Großhändler", "Naturkosmetikmarken", "Marken für pflanzliche Haarpflege", "Salon- und Friseurbedarf", "Ayurveda-Unternehmen", "Einzelhandelsketten", "Wellnessunternehmen", "OEM-Einkäufer", "Großabnehmer", "Eigenmarken-Einkäufer"];

const supplyServices = [
  { title: "Großgebinde und Großhandel", text: "Handelsmengen für deutsche Importeure und Großhändler können in geeigneten Groß-, Profi- oder ausgewählten Einzelhandelsformaten vorbereitet werden. Die MOQ beträgt 200 kg je Artikel." },
  { title: "OEM und Private Label", text: "Deutsche Marken können für ausgewählte Produkte eine OEM- oder Eigenmarkenfertigung anfragen. Maßgeblich sind Produkt, Sortiment, Bestellmenge und produktionstechnische Machbarkeit." },
  { title: "Individuelle Verpackung", text: "Einzelhandelspackungen, Großgebinde, Beutel, Kartons und Dosen können nach Machbarkeit koordiniert werden. Vom Käufer bereitgestellte Druckdaten werden technisch geprüft." },
  { title: "Spezifikationen und Dokumente", text: "Verfügbare Spezifikationen und relevante Handelsdokumente werden für Produkt, Verwendungszweck, Sendung und Käuferanforderung abgestimmt." },
];

const process = [
  { step: "01", title: "Prüfung von Produkt und Menge", text: "Wir prüfen Produkt, Qualität, vorgesehenen Einsatz, Handelsmenge und Mindestbestellmenge." },
  { step: "02", title: "Abstimmung von Spezifikation und Muster", text: "Verfügbare Spezifikationen, Muster, Verpackungsformate und käuferspezifische Anforderungen werden vor der kaufmännischen Bestätigung besprochen." },
  { step: "03", title: "Angebot und Handelsbedingungen", text: "Preis, Produktionsumfang, Zahlungsbedingungen, Verpackungsdetails und anwendbare Lieferbedingungen werden mit dem Käufer abgestimmt." },
  { step: "04", title: "Verpackungs- und Druckdatenkoordination", text: "Groß-, Handels-, Profi- oder Eigenmarkenaufmachungen werden nach Machbarkeit und anhand der bereitgestellten Druckdaten koordiniert." },
  { step: "05", title: "Produktion und Qualitätsprüfung", text: "Bestätigte Produkte werden gemäß vereinbarter Spezifikation und Bestellanforderungen verarbeitet, verpackt und geprüft." },
  { step: "06", title: "Exportdokumente und Versandkoordination", text: "Handelsdokumente, Packangaben und Versand werden entsprechend der bestätigten Bestellung und den vereinbarten Lieferbedingungen vorbereitet." },
];

const faqs = [
  { question: "Welche indischen Naturprodukte sind für deutsche Einkäufer verfügbar?", answer: "Das Handelssortiment umfasst natürliches Henna-Pulver, natürliches Indigo-Pulver, zwei Kategorien pflanzlicher Haarfarben, ayurvedische indische Kräuter und ausgewählte indische Gewürze. Die Verfügbarkeit wird für jede Anfrage geprüft." },
  { question: "Welche MOQ gilt für Großhandelsbestellungen nach Deutschland?", answer: "Die Mindestbestellmenge beträgt 200 kg je Artikel. Die praktikable Menge und Verpackungskonfiguration können zusätzlich vom gewählten Produkt und dem Eigenmarkenbriefing abhängen." },
  { question: "Welche deutschen Unternehmen können eine Belieferung anfragen?", answer: "Willkommen sind passende Anfragen von Importeuren, Distributoren, Großhändlern, Naturkosmetik- und Pflanzenhaarfarbenmarken, Salonlieferanten, Wellnessunternehmen, Einzelhandelsketten und Eigenmarkenunternehmen." },
  { question: "Können deutsche Marken OEM- und Private-Label-Verpackungen anfragen?", answer: "Ja, für ausgewählte Produkte und wirtschaftlich geeignete Aufträge. Einzelhandelspackungen, Profi- und Großformate sowie Eigenmarkenaufmachungen werden hinsichtlich Produktion, Material und Druck geprüft." },
  { question: "Können kundenseitige Druckdaten und metallisierte Beutel geprüft werden?", answer: "Druckdaten des Käufers können für geeignete Verpackungen geprüft werden, darunter gegebenenfalls gold- oder silberfarbene metallisierte Beutel. Stanzkonturen, Kennzeichnung, Materialien, Farben und Druckmengen erfordern eine technische Prüfung." },
  { question: "Können Spezifikationen und Muster vor der Bestellung besprochen werden?", answer: "Verfügbare Spezifikationen, Qualitäten, Verpackungsformate und wirtschaftlich geeignete Muster können vor der Auftragsbestätigung besprochen werden. Die Möglichkeiten hängen vom Produkt und Verwendungszweck ab." },
  { question: "Welche Exportdokumente können für Deutschland koordiniert werden?", answer: "Relevante Handels- und Versanddokumente, Packangaben und verfügbare Produktinformationen werden für das bestätigte Geschäft koordiniert. Die Anwendbarkeit hängt vom Produkt und der vereinbarten Sendung ab." },
  { question: "Wer bestätigt die deutschen und europäischen Einfuhr- und Compliance-Anforderungen?", answer: "Der deutsche Importeur oder Käufer bleibt für Produktklassifizierung, Einfuhranforderungen, Zollabfertigung, Kennzeichnung, Produktaussagen, Registrierung sowie sämtliche anwendbaren deutschen und europäischen Anforderungen verantwortlich." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: "Naturprodukte aus Indien für Deutschland", description: "Deutschlandorientierte Lieferung von Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und indischen Gewürzen in Großmengen, für den Großhandel und als Eigenmarke.", isPartOf: { "@id": "https://shiveshinternational.com/#website" }, about: { "@id": "https://shiveshinternational.com/#organization" }, breadcrumb: { "@id": `${pageUrl}#breadcrumb` }, primaryImageOfPage: { "@type": "ImageObject", url: heroImage, width: 1536, height: 1024 }, inLanguage: "de" },
    { "@type": "Service", "@id": `${pageUrl}#service`, name: "Exportlieferung von Naturprodukten nach Deutschland", serviceType: "Naturprodukte in Großmengen, für den Großhandel, als OEM und Private Label", description: "Exportorientierte Lieferung indischer Naturprodukte für Importeure, Distributoren, Großhändler, Salonlieferanten und Marken in Deutschland.", url: pageUrl, provider: { "@id": "https://shiveshinternational.com/#organization" }, areaServed: { "@type": "Country", name: "Deutschland", sameAs: "https://www.wikidata.org/wiki/Q183" }, audience: { "@type": "BusinessAudience", audienceType: buyerTypes.join(", ") }, category: products.map((product) => product.title), termsOfService: "Die Mindestbestellmenge beträgt 200 kg je Artikel. Produkt, Verpackung, Dokumentation und Handelsbedingungen werden für jede Käuferanforderung bestätigt." },
    { "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: "https://shiveshinternational.com/" }, { "@type": "ListItem", position: 2, name: "Export", item: "https://shiveshinternational.com/export" }, { "@type": "ListItem", position: 3, name: "Export nach Deutschland", item: pageUrl }] },
    { "@type": "ItemList", "@id": `${pageUrl}#products`, name: "Naturprodukte für deutsche Einkäufer", numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: `https://shiveshinternational.com${product.href}` })) },
  ],
};

const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

export default function DeutschlandExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[#071B14]">
        <Image src="/images/export/germany/germany-natural-products-export-hero-premium-v1.png" alt="Deutsche Einkäufer und ein indischer Exporteur bei der Koordination von Naturprodukten mit Blick auf den Hamburger Hafen" fill priority sizes="100vw" className="object-cover object-[62%_center] sm:object-[56%_center] lg:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/38 via-[#102F23]/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/[0.06]" />
        <GoldenParticles />
        <div className="relative z-10 flex min-h-[760px] items-center px-6 pb-24 pt-28 sm:min-h-[800px] sm:px-8 sm:pb-28 lg:min-h-[820px] lg:px-12 lg:pb-32">
          <div className="w-full max-w-[790px]">
            <StaggerItem delay={0}><div className="flex items-center gap-4"><span className="h-px w-14 bg-[#C9A962]" /><span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">Von Indien nach Deutschland</span></div></StaggerItem>
            <StaggerItem delay={100}><h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E6]">Hersteller und Exporteur von Naturprodukten<span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">aus Indien für Deutschland</span></h1></StaggerItem>
            <StaggerItem delay={200}><p className="mt-7 max-w-[700px] text-[16px] font-light leading-8 text-[#F5F0E6]/80 sm:text-[18px]">Shivesh International beliefert deutsche Importeure, Distributoren, Großhändler, Naturkosmetikmarken und Anbieter für Salonbedarf mit indischem Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und Gewürzen für Großmengen, OEM und Private Label.</p></StaggerItem>
            <StaggerItem delay={300}><div className="mt-9 flex flex-wrap gap-4"><a href="#deutschland-produktsortiment" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]">Sortiment entdecken <span>↓</span></a><Link href="/contact" className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#E4C878]">Angebot für Deutschland anfragen</Link></div></StaggerItem>
            <StaggerItem delay={400}><div className="mt-10 grid max-w-[740px] gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["200 kg", "MOQ je Artikel"], ["Großgebinde", "Großhandelslieferung"], ["OEM", "Private Label"], ["Deutschland", "B2B-Anfragen"]].map(([value, label]) => <div key={label} className="border border-white/15 bg-black/20 px-4 py-4 backdrop-blur-md"><p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">{value}</p><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6]/55">{label}</p></div>)}</div></StaggerItem>
          </div>
        </div>
      </section>

      <section id="deutschland-produktsortiment" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Sechs Produktkategorien für den Handel</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">Indische Naturprodukte<span className="mt-1 block text-[#A97B22]">für den deutschen Markt</span></h2><p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54] sm:text-[17px]">Ein Sortiment aus sechs Kategorien für professionelle Einkäufer, die Naturkosmetik-, Pflanzenhaarfarben-, Salon-, Wellness-, Lebensmittel- und Eigenmarkensortimente für Deutschland entwickeln.</p></div><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <StaggerItem key={product.title} delay={(index % 3) * 90}><article className="group flex h-full min-h-[300px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8"><span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/60">{product.number}</span><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight">{product.title}</h3><p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">{product.description}</p><Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22]">Produkt ansehen <span className="transition-transform group-hover:translate-x-2">→</span></Link></article></StaggerItem>)}</div></div></RevealOnScroll></section>

      <section className="relative overflow-hidden bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Für den professionellen Einkauf konzipiert</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04]">Strukturierte Belieferung für<span className="block text-[#E4C878]">deutsche Vertriebskanäle</span></h2><p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">Anfragen aus Berlin, Hamburg, München, Frankfurt, Düsseldorf und weiteren deutschen Märkten werden anhand von Verwendungszweck, Menge, Spezifikation, Verpackung und Versandplanung geprüft.</p><div className="mt-8 flex flex-wrap gap-2">{buyerTypes.map((buyer) => <span key={buyer} className="border border-[#C9A962]/30 bg-white/[0.04] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6]/75">{buyer}</span>)}</div></div><div className="grid gap-5 sm:grid-cols-2">{supplyServices.map((service) => <article key={service.title} className="border border-[#C9A962]/25 bg-[#071B14]/55 p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878]">{service.title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/65">{service.text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Fragen deutscher Einkäufer</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,4.4vw,4.4rem)] font-semibold">Häufige Fragen zur Exportbelieferung Deutschlands</h2></div><div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">{faqs.map((faq) => <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3><p className="text-[14px] font-light leading-7 text-[#4C5F54]">{faq.answer}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#102F23] shadow-[0_28px_70px_rgba(20,50,38,0.18)]"><Image src="/images/export/germany/germany-packaging-engineering-lab-premium-v1.png" alt="Verpackungsentwicklung für deutsche Eigenmarken mit Naturprodukten" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-[#071B14]/60 to-transparent" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Entwicklung von Käufermarken</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.15rem,3.25vw,3.45rem)] font-semibold leading-[1.08] hyphens-auto">Verpackungen für<span className="block text-[#A97B22]">deutsche Eigenmarkenanforderungen</span></h2><p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">Deutsche Einkäufer können Einzelhandels- und Großpackungen, gegebenenfalls gold- oder silberfarbene metallisierte Beutel, Kartons, Dosen und koordinierte Eigenmarkenaufmachungen für wirtschaftlich geeignete Aufträge anfragen.</p><p className="mt-5 text-[14px] leading-7 text-[#4C5F54]">Vom Käufer bereitgestellte Druckdaten unterliegen einer technischen Material- und Druckprüfung. Der Importeur ist für deutsche und europäische Kennzeichnungs-, Aussage-, Registrierungs- und Marktanforderungen verantwortlich.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#D8BB68]">Private Label besprechen <span>→</span></Link></div></div></RevealOnScroll></section>

      <section className="relative overflow-hidden bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="relative mx-auto max-w-[1500px]"><div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20"><div><div className="flex items-center gap-4"><span className="h-px w-12 bg-[#C9A962]" /><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Von Indien nach Deutschland</p></div><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Strukturierte Exportkoordination<span className="mt-1 block text-[#E4C878]">für deutsche Einkäufer</span></h2><p className="mt-7 max-w-[720px] text-[16px] font-light leading-8 text-[#F5F0E6]/68 sm:text-[17px]">Jede Deutschland-Anfrage wird vor der kaufmännischen Bestätigung und Versandplanung anhand von Produkt, Handelsmenge, Spezifikation, Verpackungsformat, Zielort und Dokumentationsanforderungen geprüft.</p></div><figure className="relative aspect-[4/3] overflow-hidden border border-[#C9A962]/35 bg-[#071B14] shadow-[0_28px_75px_rgba(0,0,0,0.28)]"><Image src="/images/export/germany/germany-botanical-traceability-coordination-premium-v1.png" alt="Rückverfolgbarkeits- und Wareneingangskoordination für pflanzliche Lieferungen nach Deutschland" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061711]/70 via-transparent to-transparent" /><figcaption className="absolute bottom-5 left-5 border border-white/15 bg-[#071B14]/80 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878] backdrop-blur-md sm:bottom-6 sm:left-6">Exportkoordination Indien–Deutschland</figcaption></figure></div><div className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">{process.map((item) => <article key={item.step} className="group relative h-full border border-[#C9A962]/22 bg-[#071B14]/65 p-7 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-500 hover:border-[#C9A962]/55 sm:p-8"><div className="flex items-start gap-5"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#C9A962]/10 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">{item.step}</span><div><h3 className="font-[family-name:var(--font-playfair)] text-[23px] font-semibold leading-tight text-[#F5F0E6] sm:text-[26px]">{item.title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/62">{item.text}</p></div></div></article>)}</div><aside className="mx-auto mt-20 max-w-[1120px] border border-[#C9A962]/45 bg-[#F5F0E6] p-7 text-[#173B2A] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-9 lg:p-10"><div className="flex flex-col gap-6 sm:flex-row sm:items-start"><span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173B2A] text-lg text-[#E4C878]">i</span><div><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">Verantwortung des deutschen und europäischen Importeurs</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54] sm:text-[15px]">Shivesh International koordiniert Handels- und Exportdokumente für den bestätigten Auftrag. Der deutsche Importeur oder Käufer bleibt für Produktklassifizierung, Einfuhranforderungen, Zollabfertigung, Kennzeichnung, Produktaussagen, Registrierung und alle anwendbaren deutschen und europäischen Anforderungen verantwortlich.</p></div></div></aside><div className="mt-10 text-center"><Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]">Exportangebot für Deutschland anfragen <span>→</span></Link><p className="mx-auto mt-5 max-w-[720px] text-[9px] font-semibold uppercase tracking-[0.24em] text-[#F5F0E6]/38">Produkt · Menge · Spezifikation · Verpackung · Dokumentation</p></div></div></RevealOnScroll></section>

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12"><GoldenParticles /><RevealOnScroll><div className="relative mx-auto max-w-[1000px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Lieferprojekt für Deutschland starten</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[1.04]">Naturproduktbelieferung für Deutschland planen</h2><p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">Teilen Sie uns Produkt, Menge, Packungsgröße, Markenbriefing, Zielort und benötigte Informationen mit. Unser Team prüft Ihre Anfrage und antwortet mit den nächsten wirtschaftlich sinnvollen Schritten.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">Exportangebot für Deutschland anfragen <span>→</span></Link></div></RevealOnScroll></section>

      <FooterSection locale="de" />
      <FloatingContactButtons />
      <MagneticButtons />
      <PremiumCursor />
    </main>
  );
}
