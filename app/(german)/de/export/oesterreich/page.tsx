import type { Metadata } from "next";
import { existsSync } from "node:fs";
import Image from "next/image";
import Link from "next/link";

import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import GoldenParticles from "@/app/components/GoldenParticles";
import MagneticButtons from "@/app/components/MagneticButtons";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import { austriaLanguageAlternates } from "@/app/lib/i18n";
import FooterSection from "@/sections/FooterSection";

const canonicalUrl = "https://shiveshinternational.com/de/export/oesterreich";
const heroImage = "/images/export/austria/austria-export-hero.png";

const keywords = [
  "Naturprodukte Hersteller Indien für Österreich",
  "Naturprodukte Exporteur Österreich",
  "Naturprodukte Lieferant Österreich",
  "Naturprodukte Großhändler Österreich",
  "Naturprodukte Großhandel Österreich",
  "Naturprodukte Importeur Österreich",
  "Naturprodukte Distributor Österreich",
  "Naturprodukte Händler Österreich",
  "Naturprodukte Einzelhandel Österreich",
  "Naturprodukte B2B Österreich",
  "Naturprodukte für professionelle Einkäufer Österreich",
  "Private Label Naturprodukte Österreich",
  "Eigenmarke Naturprodukte Österreich",
  "OEM Naturprodukte Österreich",
  "Naturprodukte Großgebinde Österreich",
  "Naturprodukte aus Indien nach Österreich",
  "indischer Naturprodukte Exporteur Österreich",
  "Naturprodukte für Kosmetikmarken Österreich",
  "Naturprodukte für Kosmetikunternehmen Österreich",
  "Naturprodukte für Salonbedarf Österreich",
  "Naturprodukte für Friseurbedarf Österreich",
  "Henna Hersteller Indien für Österreich",
  "Henna Exporteur Österreich",
  "Henna Pulver Lieferant Österreich",
  "Henna Großhandel Österreich",
  "Henna Großhändler Österreich",
  "natürliches Henna Pulver Österreich",
  "Henna Pulver Großgebinde Österreich",
  "Henna Private Label Österreich",
  "Henna Eigenmarke Österreich",
  "Henna OEM Hersteller Indien",
  "Henna Lieferant Wien",
  "Henna Pulver Lieferant Graz",
  "Henna Pulver für Kosmetikmarken Österreich",
  "Henna Pulver für Salons Österreich",
  "Indigo Pulver Exporteur Österreich",
  "Indigo Pulver Lieferant Österreich",
  "natürliches Indigo Pulver Österreich",
  "Indigo Pulver Großhandel Österreich",
  "Indigo Pulver Großgebinde Österreich",
  "Indigo Pulver Private Label Österreich",
  "Indigofera tinctoria Pulver Österreich",
  "Indigo Pulver für Kosmetikmarken Österreich",
  "Indigo Pulver für Salons Österreich",
  "pflanzliche Haarfarben Lieferant Österreich",
  "Naturhaarfarben für Salons Österreich",
  "Henna Haarfarben Exporteur Österreich",
  "Henna Haarfarben für Kosmetikmarken Österreich",
  "Henna basierte Haarfarben Österreich",
  "pflanzliche Pulverhaarfarben Österreich",
  "natürliche Haarfarben Private Label Österreich",
  "pflanzliche Haarfarben Eigenmarke Österreich",
  "Haarfarben OEM Hersteller Indien",
  "professionelle Pflanzenhaarfarben Österreich",
  "ayurvedische Kräuter Exporteur Österreich",
  "ayurvedische Kräuter Lieferant Österreich",
  "indische Kräuter Großhandel Österreich",
  "ayurvedische Pulver Großgebinde Österreich",
  "ayurvedische Kräuter Private Label Österreich",
  "indische Pflanzenpulver Lieferant Österreich",
  "Kräuter für Wellnessunternehmen Österreich",
  "Amla Pulver Lieferant Österreich",
  "Shikakai Pulver Exporteur Österreich",
  "indische Gewürze Exporteur Österreich",
  "indische Gewürze Großhandel Österreich",
  "indische Gewürze Lieferant Österreich",
  "indische Gewürze Großhändler Österreich",
  "ganze indische Gewürze Österreich",
  "gemahlene indische Gewürze Österreich",
  "indische Gewürze Großgebinde Österreich",
  "indische Gewürze Private Label Österreich",
  "Gewürze Eigenmarke Österreich",
  "Gewürzhersteller Indien für Österreich",
  "Verpackung für Eigenmarken Österreich",
  "deutschsprachige Etikettenkoordination Österreich",
  "Exportdokumentation Indien Österreich",
  "Großhandelslieferant Indien Österreich",
  "Lieferant für österreichische Importeure",
  "Lieferant für österreichische Distributoren",
  "Shivesh International Österreich",
];

export const metadata: Metadata = {
  title: "Henna, Indigo, Kräuter und Gewürze für Österreich",
  description: "Indischer Exporteur von natürlichem Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und Gewürzen für österreichische Importeure, Großhändler und Eigenmarken.",
  keywords,
  alternates: { canonical: canonicalUrl, languages: austriaLanguageAlternates },
  openGraph: {
    title: "Naturprodukte aus Indien für Österreich",
    description: "Großhandel, Großgebinde und Private Label für österreichische Importeure, Distributoren, Salons und professionelle Einkäufer.",
    url: canonicalUrl,
    type: "website",
    locale: "de_AT",
    siteName: "Shivesh International",
    images: [{ url: heroImage, alt: "Österreichische Einkäufer prüfen indisches Henna, Indigo, Kräuter und Gewürze" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturprodukte aus Indien für Österreich",
    description: "Indische Naturprodukte für österreichische Importeure, Distributoren, Salons und Eigenmarken.",
    images: [heroImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const products = [
  { title: "Natürliches Henna-Pulver", text: "Natürliches Henna-Pulver in sorgfältig verarbeiteter Qualität für österreichische Kosmetikmarken, Salons, Großhändler, Kräuterproduktunternehmen und individuelle Eigenmarkenangebote.", href: "/products/natural-henna-powder" },
  { title: "Natürliches Indigo-Pulver", text: "Natürliches Indigo-Pulver für pflanzliche Haarfarbsysteme, kosmetische Formulierungen, Salonbedarf, Großmengenbeschaffung und Eigenmarkenverpackungen.", href: "/products/natural-indigo-powder" },
  { title: "Natürliche Henna-Haarfarben", text: "Ein breites pflanzliches Farbsortiment für österreichische Importeure, Kosmetikmarken, Naturhaarpflegeunternehmen und Salonvertriebe.", href: "/products/natural-henna-hair-colors" },
  { title: "Henna-basierte Haarfarben", text: "Exportfähige Pulverhaarfarben für österreichische Einkäufer mit Bedarf an Großhandel, OEM, professionellen Formaten oder individuellen Eigenmarken.", href: "/products/henna-based-hair-colors" },
  { title: "Ayurvedische indische Kräuter", text: "Indische Kräuterpulver und Pflanzenstoffe für österreichische Kosmetik-, Körperpflege-, Wellness-, Haarpflege- und Großhandelsanwendungen.", href: "/products/ayurvedic-indian-herbs" },
  { title: "Indische Gewürze", text: "Ganze und gemahlene indische Gewürze für österreichische Importeure, Distributoren, Lebensmittelunternehmen, Fachhändler und Eigenmarken.", href: "/products/indian-spices" },
];

const buyerProfiles = [
  ["Importeure und Distributoren", "Spezifikationen, Handelsmengen und verfügbare Dokumente für österreichische Vertriebsnetze in Wien, Graz und weiteren regionalen Märkten koordinieren."],
  ["Bio- und Naturhandelsmarken", "Henna, Indigo, Kräuter und Gewürze für österreichische Bioläden, Naturfachhändler und Eigenmarkensortimente prüfen, abhängig von produktbezogenen Nachweisen und der Bewertung des Käufers."],
  ["Kosmetik- und Körperpflegeunternehmen", "Pflanzenpulver für käuferseitig entwickelte Kosmetik- und Körperpflegekonzepte mit Prüfung von Verwendungszweck und Spezifikation beziehen."],
  ["Professionelle Salonlieferanten", "Pflanzliche Haarfarbpulver und Kräuterzutaten für die Haarpflege im österreichischen Salon- und Profivertrieb besprechen."],
  ["Kräuter- und Wellnessunternehmen", "Ayurvedische Pulver und ausgewählte Pflanzenstoffe für österreichische Wellness-, Fachhandels- und Eigenmarkenprogramme bewerten."],
  ["Private-Label- und OEM-Einkäufer", "Machbare Beutel, Kartons, Druckdaten, Barcodes und deutschsprachige Etikettenlayouts für Eigenmarkenprojekte koordinieren."],
  ["Lebensmittel- und Gewürzimporteure", "Die Lieferung ganzer und gemahlener Gewürze sowie indischer Lebensmittelzutaten für österreichische Lebensmittelunternehmen und Fachdistributoren planen."],
  ["Großhändler und Fachhändler", "Gezielte Naturproduktsortimente für Großhandel, E-Commerce und Fachhandelskanäle in ganz Österreich aufbauen."],
];

const documentationItems = [
  ["Handelsrechnung", "Angaben zur Handelsrechnung können anhand des bestätigten Käufers, der Produkte, Mengen, Werte und Lieferbedingungen vorbereitet werden."],
  ["Packliste", "Packstückzahlen, Netto- und Bruttogewichte, Kartoninformationen und vereinbarte Versandbezüge können für bestätigte Aufträge koordiniert werden."],
  ["Ursprungszeugnis", "Die Koordination eines Ursprungszeugnisses kann besprochen werden, sofern es für das bestätigte Produkt und die Versandvereinbarung anwendbar ist."],
  ["Spezifikationen und COA", "Produktspezifikationen, gegebenenfalls verfügbare COA, Chargenbezüge und Qualitätsinformationen hängen vom ausgewählten Produkt ab."],
  ["Verpackungsinformationen", "Angaben zu Beuteln, Kartons, Großsäcken, Etiketten und Barcodes können auf das vom Käufer freigegebene Verpackungsprogramm abgestimmt werden."],
  ["Versanddokumente", "Versanddokumente können mit dem vom Käufer beauftragten Spediteur und dem vereinbarten Versandplan koordiniert werden."],
  ["Informationen für die Zielmarktprüfung", "Verfügbare Produkt- und Verpackungsinformationen können die Zoll- und Zielmarktprüfung des österreichischen Käufers unterstützen."],
  ["Verantwortung des Käufers", "Der Importeur muss Klassifizierung, Etiketten, Aussagen, Registrierungen, Zoll, Steuern und anwendbare österreichische und europäische Anforderungen prüfen."],
];

const processSteps = [
  ["Produktanforderung übermitteln", "Nennen Sie Produkt, vorgesehenen geschäftlichen Einsatz, Zielort, ungefähre Menge und gewünschte Verpackung."],
  ["Spezifikation und Menge bestätigen", "Prüfen Sie die angefragte Qualität, verfügbare Spezifikation und die kaufmännische Mindestmenge von 200 kg je Artikel."],
  ["Verpackung und Private Label prüfen", "Stimmen Sie machbare Einzelhandels- oder Großformate, Druckdaten, Etiketten, Barcodes und Eigenmarkenanforderungen ab."],
  ["Dokumente und Versandplan bestätigen", "Besprechen Sie verfügbare Produktdokumente und die Vereinbarung mit dem vom Käufer beauftragten Spediteur."],
  ["Produktion und Versand koordinieren", "Fahren Sie gemäß bestätigten Handelsbedingungen, produktionstechnischer Machbarkeit und vereinbartem Versandplan fort."],
];

const marketLocations = [
  ["Wien", "Importeure, Naturkosmetikunternehmen und Eigenmarkenkäufer im Wiener Markt können die Beschaffung mehrerer Kategorien und Eigenmarkenformate besprechen."],
  ["Graz", "Distributoren und Wellnessunternehmen im Raum Graz können Pflanzenpulver, Salonprodukte und Kräutersortimente für den Einzelhandel prüfen."],
  ["Linz", "Einkäufer von Lebensmittelzutaten, Großhändler und logistikorientierte Unternehmen im Raum Linz können Gewürz- und Pflanzenlieferungen koordinieren."],
  ["Salzburg", "Fachhändler, Salonlieferanten und Premium-Wellnessmarken in Salzburg können ausgewählte Einzelhandels- und Profi-Formate bewerten."],
  ["Innsbruck", "Naturprodukt- und tourismusnahe Handelsunternehmen in Innsbruck können gezielte Pflanzen-, Kräuter- und Gewürzsortimente besprechen."],
  ["Klagenfurt", "Wellnessunternehmen, Fachgeschäfte und regionale Distributoren im Raum Klagenfurt können wirtschaftlich machbare Produktprogramme prüfen."],
  ["Niederösterreich", "Beschaffungsunternehmen und Distributoren in Niederösterreich können Großmengenlieferungen und Eigenmarkenaufmachungen koordinieren."],
  ["Oberösterreich", "Einkäufer in Oberösterreich können Pflanzenzutaten, professionelle Haarpflegeprodukte, Gewürze und Großhandelsverpackungen besprechen."],
];

const faqs = [
  { question: "Exportieren Sie natürliches Henna-Pulver aus Indien nach Österreich?", answer: "Ja. Shivesh International koordiniert die Lieferung von natürlichem Henna-Pulver aus Indien für qualifizierte österreichische Importeure, Distributoren, Großhändler, Salonlieferanten und Eigenmarkenkäufer, vorbehaltlich der Spezifikations- und Handelsbestätigung." },
  { question: "Welche Mindestbestellmenge gilt für österreichische Einkäufer?", answer: "Die Mindestbestellmenge beträgt 200 kg je Artikel. Die endgültigen Mengen hängen vom ausgewählten Produkt, Verpackungsformat und den Eigenmarkenanforderungen ab." },
  { question: "Können österreichische Einkäufer Henna- und Kräuterprodukte als Eigenmarke bestellen?", answer: "Ausgewählte Henna- und Kräuterprodukte können für Private Label besprochen werden, einschließlich Käufermarke, machbarer bedruckter Beutel oder Kartons, Barcode-Angaben und vom Käufer freigegebener Druckdaten." },
  { question: "Welche Einzelhandels- und Großverpackungen sind verfügbar?", answer: "Ausgewählte Produkte können in Beuteln zu 100 g, 200 g, 500 g und 1 kg besprochen werden. Großformate umfassen 20-kg- und 25-kg-Doppelschicht-Vakuumbeutel, vorbehaltlich der Produkt- und Auftragsbestätigung." },
  { question: "Können deutschsprachige Verpackungsdruckdaten koordiniert werden?", answer: "Die Koordination deutschsprachiger Etikettendruckdaten kann zusammen mit mehrsprachigen Verpackungen, vom Käufer bereitgestellten Druckdaten und Unterstützung beim Etikettenlayout besprochen werden. Der österreichische Käufer bleibt für endgültigen Etikettentext, Aussagen und Freigabe verantwortlich." },
  { question: "Welche Dokumente können bei Sendungen nach Österreich bereitgestellt werden?", answer: "Je nach Produkt und Verfügbarkeit kann die Koordination Handelsrechnungen, Packlisten, Ursprungszeugnisse, Spezifikationen, COA, verfügbare Qualitätsinformationen und Versanddokumente umfassen." },
  { question: "Wie können Produkte aus Indien in das Binnenland Österreich versandt werden?", answer: "Vom Käufer gewählte Vereinbarungen können Seefracht über ein europäisches Eingangstor mit anschließendem Straßen- oder Bahntransport oder Luftfracht über Wien beziehungsweise einen anderen vereinbarten Flughafen nutzen. Routen und Laufzeiten werden nicht garantiert." },
  { question: "Werden österreichische und europäische Einfuhranforderungen automatisch erfüllt?", answer: "Nein. Der österreichische Importeur oder Käufer muss Klassifizierung, Kennzeichnung, Aussagen, Registrierungen, Zoll, Steuern und anwendbare österreichische sowie europäische Anforderungen für das gewählte Produkt bestätigen." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, url: canonicalUrl, name: "Henna, Indigo, Kräuter und Gewürze für Österreich", description: "Österreichorientierte Exportbelieferung mit natürlichem Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und indischen Gewürzen aus Indien.", isPartOf: { "@id": "https://shiveshinternational.com/#website" }, about: { "@id": "https://shiveshinternational.com/#organization" }, breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` }, inLanguage: "de" },
    { "@type": "BreadcrumbList", "@id": `${canonicalUrl}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://shiveshinternational.com/" },
      { "@type": "ListItem", position: 2, name: "Export", item: "https://shiveshinternational.com/export" },
      { "@type": "ListItem", position: 3, name: "Europa", item: "https://shiveshinternational.com/export/europe" },
      { "@type": "ListItem", position: 4, name: "Österreich", item: canonicalUrl },
    ] },
  ],
};

const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${canonicalUrl}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

function OptionalImage({ src, alt, priority = false, sizes = "(min-width: 1024px) 55vw, 100vw", className = "object-cover object-center" }: { src: string; alt: string; priority?: boolean; sizes?: string; className?: string }) {
  if (!existsSync(`${process.cwd()}/public${src}`)) return null;
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={className} />;
}

export default function OesterreichExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_42%,#496d58_0%,#173b2a_35%,#071b14_78%)]">
        <OptionalImage src={heroImage} alt="Österreichische Einkäufer prüfen indisches Henna, Indigo, Kräuter und Gewürze für die Exportbelieferung" priority sizes="100vw" className="object-cover object-[58%_50%] sm:object-[55%_50%] lg:object-[50%_50%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/72 via-[#102F23]/40 to-[#071B14]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/[0.04]" />
        <GoldenParticles />
        <div className="relative z-10 flex items-center px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="w-full max-w-[820px] lg:max-w-[860px] xl:max-w-[900px]">
            <StaggerItem delay={0}><div className="flex items-center gap-4"><span className="h-px w-14 bg-[#C9A962]" /><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">Export von Indien nach Österreich</p></div></StaggerItem>
            <StaggerItem delay={100}><h1 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#F5F0E6] sm:text-5xl lg:text-6xl xl:text-[66px] hyphens-auto">Naturprodukte für Österreich<span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">Henna, Indigo, Kräuter und Gewürze</span></h1></StaggerItem>
            <StaggerItem delay={200}><p className="mt-5 max-w-[730px] text-[16px] font-light leading-7 text-[#F5F0E6]/82 sm:text-[17px] sm:leading-8">Shivesh International unterstützt österreichische Importeure, Distributoren, Großhändler, Kosmetikunternehmen, Salonlieferanten, Kräuterproduktunternehmen, Einkäufer im Lebensmittelsektor und Eigenmarken mit exportfähigem natürlichem Henna, Indigo, pflanzlichen Haarfarben, ayurvedischen Kräutern und indischen Gewürzen.</p></StaggerItem>
            <StaggerItem delay={300}><div className="mt-7 flex flex-wrap gap-4"><Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Österreich-Anfrage senden <span>→</span></Link><a href="#produkte" className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all hover:border-[#C9A962] hover:text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Produkte entdecken <span>↓</span></a></div></StaggerItem>
            <StaggerItem delay={400}><div className="mt-10 grid max-w-[740px] grid-cols-2 gap-3 lg:grid-cols-4">{[["200 kg", "MOQ je Artikel"], ["Großgebinde", "Großhandelslieferung"], ["OEM", "Private Label"], ["Österreich", "B2B-Anfragen"]].map(([value, label]) => <div key={label} className="border border-white/15 bg-black/20 px-4 py-4 backdrop-blur-md"><p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">{value}</p><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6]/55">{label}</p></div>)}</div></StaggerItem>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Naturproduktbeschaffung Indien–Österreich</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.2vw,4.2rem)] font-semibold leading-[1.06] hyphens-auto">Ein indischer Exportpartner <span className="block text-[#A97B22]">für österreichische Naturprodukteinkäufer</span></h2><p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">Österreichische Importeure, Distributoren und Großhändler können mehrere Produktkategorien mit einem indischen Exportteam koordinieren. Shivesh International unterstützt Kosmetik- und Körperpflegeunternehmen, Naturhaarpflegemarken, Salonlieferanten, Kräuter- und Wellnessunternehmen, Einkäufer von Lebensmittelzutaten, Gewürzunternehmen, Eigenmarkenanbieter und E-Commerce-Marken bei der strukturierten Beschaffung aus Indien.</p><p className="mt-5 text-[15px] font-light leading-8 text-[#4C5F54]">Handelsanfragen können mit Einkaufs- und Vertriebsaktivitäten in Wien, Graz, Salzburg, Linz und Innsbruck verbunden sein. Produktverfügbarkeit, Spezifikationen, Verpackung, Dokumentation und Versandvorbereitung werden entsprechend der ausgewählten Kategorie und den vereinbarten Auftragsanforderungen geprüft. Marktangaben bezeichnen mögliche Käuferstandorte und bedeuten nicht, dass Shivesh International ein Büro oder Lager in Österreich unterhält.</p></div></RevealOnScroll></section>

      <section id="produkte" className="scroll-mt-24 bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Sechs Produktkategorien für den Handel</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Naturprodukte <span className="block text-[#A97B22]">für österreichische Importeure und Marken</span></h2><p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54]">Ein gezieltes Sortiment für österreichische Kosmetikmarken, professionelle Haarpflegekanäle, Kräuterunternehmen, Großhändler, Lebensmittelunternehmen und Eigenmarkenkäufer.</p></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <StaggerItem key={product.title} delay={(index % 3) * 90}><article className="group flex h-full min-h-[300px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8"><span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/60">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight hyphens-auto">{product.title}</h3><p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">{product.text}</p><Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A97B22]">{product.title} ansehen <span className="transition-transform group-hover:translate-x-2">→</span></Link></article></StaggerItem>)}</div></div></RevealOnScroll></section>

      <section className="bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Österreichische Vertriebskanäle</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Wen wir im österreichischen Markt unterstützen</h2></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">{buyerProfiles.map(([title, text]) => <article key={title} className="h-full border border-[#C9A962]/25 bg-[#071B14]/55 p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878] hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/65">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Informationen für die Käuferprüfung</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,3.9vw,3.9rem)] font-semibold leading-[1.08] hyphens-auto">Exportdokumentation <span className="block text-[#A97B22]">für österreichische Einkäufer</span></h2><p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">Dokumente hängen vom ausgewählten Produkt und ihrer Verfügbarkeit ab. Verfügbare Handels-, Produkt-, Verpackungs- und Versandinformationen können für die Prüfung durch Käufer und Zielmarkt koordiniert werden, ohne eine automatische österreichische oder europäische Konformität zu implizieren.</p></div><div className="grid auto-rows-fr gap-5 sm:grid-cols-2">{documentationItems.map(([title, text]) => <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Formate für Käufermarken</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,3.9vw,3.9rem)] font-semibold leading-[1.08] hyphens-auto">Verpackungs- und Private-Label-Lösungen <span className="block text-[#A97B22]">für österreichische Einkäufer</span></h2><p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">Ausgewählte Programme können individuelle Markennamen, bedruckte Beutel und Kartons, die Koordination käuferseitiger Druckdaten, Barcodes, Unterstützung beim Etikettenlayout, mehrsprachige Verpackungen und deutschsprachige Etikettendruckdaten umfassen. Einzelhandels-, Salon-, Profi- und Großformate einschließlich OEM oder Private Label unterliegen den vereinbarten Anforderungen und der technischen Machbarkeit.</p><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">Einzelhandelsoptionen können Beutel zu 100 g, 200 g, 500 g und 1 kg umfassen. Großformate können 20-kg- und 25-kg-Doppelschicht-Vakuumbeutel umfassen. Endgültige Produktetiketten, Sprachanforderungen, Aussagen, Produktklassifizierung und Zielmarktkonformität unterliegen der Prüfung durch den Käufer und der jeweiligen Produktkategorie.</p></div><div><figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[linear-gradient(135deg,#0b3325,#496d58)] shadow-[0_28px_70px_rgba(20,50,38,0.18)]"><OptionalImage src="/images/export/austria/austria-buyer-partnership.png" alt="Private-Label-Verpackungen und Naturproduktformate für österreichische Einkäufer" className="object-cover object-center" /></figure><div className="mt-5 grid gap-5 sm:grid-cols-2"><article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Einzelhandelsverpackung</h3><p className="mt-4 text-sm leading-7 text-[#4C5F54]">Beutel zu 100 g · 200 g · 500 g · 1 kg</p></article><article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Großverpackung</h3><p className="mt-4 text-sm leading-7 text-[#4C5F54]">Doppelschicht-Vakuumbeutel zu 20 kg und 25 kg</p></article><article className="border border-[#C9A962] bg-[#173B2A] p-7 text-[#F5F0E6] sm:col-span-2"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Mindestbestellmenge</p><p className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold">200 kg je Artikel</p></article></div></div></div></RevealOnScroll></section>

      <section className="bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Unterstützung bei Versand und Dokumenten</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Exportkoordination von Indien nach Österreich</h2><p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">Die Koordination kann Handelsrechnungen, Packlisten, Ursprungszeugnisse, Produktspezifikationen, COA und verfügbare Qualitätsdokumente, Versanddokumente, vom Käufer beauftragte Spediteure, Exportkartons, Paletten und den Austausch von Versandinformationen umfassen.</p><p className="mt-5 text-[15px] font-light leading-8 text-[#F5F0E6]/62">Da Österreich ein Binnenland ist, können vom Käufer gewählte Vereinbarungen Seefracht über europäische Eingangstore wie Hamburg, Bremerhaven, Rotterdam, Koper oder Triest mit anschließendem Straßen- oder Bahntransport nach Österreich nutzen. Eine Luftfrachtkoordination kann für Wien oder eine andere vom Käufer gewählte Vereinbarung besprochen werden. Eingangstor, Route, Laufzeit und Zollabfertigung werden nicht garantiert. Dokumente und Produktinformationen können entsprechend Produktkategorie, Zielort, Käuferanweisungen und vereinbarten Auftragsanforderungen koordiniert werden.</p></div><figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[linear-gradient(135deg,#071b14,#496d58)] shadow-[0_28px_70px_rgba(0,0,0,0.25)]"><OptionalImage src="/images/export/austria/india-to-austria-export-coordination.png" alt="Exportkoordination von Indien nach Österreich für Naturprodukte, Dokumente und Fracht" className="object-cover object-center" /></figure></div><aside className="mt-12 border border-[#C9A962]/35 bg-[#071B14]/60 p-7 text-[14px] font-light leading-7 text-[#F5F0E6]/65">Der österreichische Importeur oder Käufer bleibt dafür verantwortlich, Produktklassifizierung, Kennzeichnung, Registrierung, Zollverfahren, Steuern und anwendbare österreichische sowie europäische Zielmarktanforderungen zu bestätigen. Es wird keine automatische Konformität, Registrierung oder Zollabfertigung zugesichert.</aside></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Fünf Handelsschritte</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Ablauf der Exportbelieferung Österreichs</h2></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{processSteps.map(([title, text]) => <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Standorte österreichischer Einkäufer</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Naturproduktbelieferung für Einkäufer in ganz Österreich</h2><p className="mt-7 text-[15px] leading-7 text-[#4C5F54]">Diese Marktangaben kennzeichnen mögliche Anfrage- und Vertriebsstandorte; sie stehen nicht für örtliche Büros, Lager oder garantiert aktive Lieferbeziehungen von Shivesh International.</p><div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">{marketLocations.map(([location, text]) => <article key={location} className="h-full border border-[#C9A962]/35 bg-[#FBF8F1] p-6"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">{location}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Fragen österreichischer Einkäufer</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Häufige Fragen zur Exportbelieferung Österreichs</h2></div><div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">{faqs.map((faq) => <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3><p className="text-[14px] font-light leading-7 text-[#4C5F54]">{faq.answer}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28"><GoldenParticles /><RevealOnScroll><div className="relative mx-auto max-w-[1000px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Anfragen österreichischer Einkäufer</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Besprechen Sie Ihren Produktbedarf für Österreich</h2><p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">Österreichische Importeure, Distributoren, Großhändler und Eigenmarkenkäufer können unserem Exportteam Produktname, benötigte Menge, Verpackungsformat, Zielort und vorgesehenen geschäftlichen Einsatz mitteilen.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">Österreich-Anfrage senden <span>→</span></Link><Link href="/export/europe" className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6] transition-all hover:border-[#C9A962] hover:text-[#E4C878]">Europäische Märkte entdecken <span>→</span></Link></div><div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/45"><Link href="/export">Internationale Exportinformationen</Link><Link href="/export/france">Exportmarkt Frankreich</Link><Link href="/export/germany">Exportmarkt Deutschland</Link><Link href="/export/italy">Exportmarkt Italien</Link><Link href="/export/spain">Exportmarkt Spanien</Link><Link href="/resources">Informationen für Einkäufer</Link><Link href="/certifications">Zertifizierungen</Link><Link href="/infrastructure">Infrastruktur</Link><Link href="/about">Über Shivesh International</Link><Link href="/de/export/oesterreich">Exportseite Österreich</Link></div></div></RevealOnScroll></section>

      <FooterSection locale="de" /><FloatingContactButtons /><MagneticButtons /><PremiumCursor />
    </main>
  );
}
