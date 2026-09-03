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

const canonicalUrl = "https://shiveshinternational.com/it/export/austria";
const heroImage = "/images/export/austria/austria-export-hero.png";

const keywords = [
  "esportatore di prodotti naturali in Austria", "fornitore indiano di prodotti naturali Austria", "prodotti naturali dall’India all’Austria", "produttore di prodotti naturali India Austria", "prodotti naturali all’ingrosso Austria", "fornitura B2B di prodotti naturali Austria", "prodotti naturali Private Label Austria", "prodotti naturali OEM Austria", "ingredienti botanici per importatori austriaci", "fornitore per distributori austriaci", "fornitore per grossisti austriaci", "prodotti naturali per marchi austriaci",
  "henné naturale in polvere Austria", "esportatore di henné in Austria", "fornitore di henné naturale Austria", "henné all’ingrosso Austria", "henné sfuso Austria", "henné Private Label Austria", "produttore di henné India per Austria", "henné per marchi cosmetici austriaci", "henné per saloni austriaci", "fornitore di henné Vienna", "fornitore di henné Graz",
  "indigo naturale in polvere Austria", "esportatore di indigo in Austria", "fornitore di indigo naturale Austria", "indigo all’ingrosso Austria", "indigo sfuso Austria", "indigo Private Label Austria", "Indigofera tinctoria Austria", "indigo per colorazioni botaniche Austria",
  "colorazioni naturali per capelli Austria", "colorazioni vegetali per capelli Austria", "colorazioni all’henné Austria", "colorazioni botaniche Private Label Austria", "fornitore per saloni professionali Austria",
  "erbe ayurvediche in Austria", "esportatore di erbe ayurvediche Austria", "fornitore di erbe indiane Austria", "polveri ayurvediche sfuse Austria", "erbe ayurvediche Private Label Austria", "ingredienti erboristici per aziende austriache", "fornitore di amla Austria", "esportatore di shikakai Austria",
  "spezie indiane in Austria", "esportatore di spezie indiane Austria", "fornitore di spezie indiane Austria", "spezie indiane all’ingrosso Austria", "spezie intere e macinate Austria", "spezie sfuse Austria", "spezie Private Label Austria",
  "confezionamento a marchio proprio Austria", "coordinamento etichette in tedesco Austria", "documentazione export India Austria", "spedizione prodotti naturali India Austria", "MOQ 200 kg prodotti naturali Austria", "Shivesh International Austria",
];

export const metadata: Metadata = {
  title: "Esportatore di henné, indigo, erbe e spezie in Austria",
  description: "Esportatore indiano di henné naturale, indigo, colorazioni botaniche per capelli, erbe ayurvediche e spezie per importatori, grossisti e acquirenti Private Label in Austria.",
  keywords,
  alternates: { canonical: canonicalUrl, languages: austriaLanguageAlternates },
  openGraph: {
    title: "Prodotti naturali dall’India per l’Austria",
    description: "Fornitura all’ingrosso, sfusa e Private Label per importatori, distributori, saloni e acquirenti professionali in Austria.",
    url: canonicalUrl,
    type: "website",
    locale: "it_IT",
    siteName: "Shivesh International",
    images: [{ url: heroImage, alt: "Acquirenti austriaci valutano henné, indigo, erbe e spezie indiane" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodotti naturali dall’India per l’Austria",
    description: "Prodotti naturali indiani per importatori, distributori, saloni e marchi Private Label austriaci.",
    images: [heroImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const products = [
  { title: "Henné naturale in polvere", text: "Henné naturale in polvere per marchi cosmetici austriaci, saloni, grossisti, aziende erboristiche e forniture retail personalizzate in Private Label.", href: "/products/natural-henna-powder" },
  { title: "Indigo naturale in polvere", text: "Indigo naturale per colorazioni botaniche, formulazioni cosmetiche, forniture per saloni, approvvigionamento sfuso e confezionamento Private Label.", href: "/products/natural-indigo-powder" },
  { title: "Colorazioni naturali per capelli all’henné", text: "Un’ampia collezione botanica per importatori, marchi di bellezza, aziende di cura naturale dei capelli e distributori per saloni in Austria.", href: "/products/natural-henna-hair-colors" },
  { title: "Colorazioni per capelli a base di henné", text: "Colorazioni in polvere pronte per l’esportazione in formati all’ingrosso, OEM, professionali o Private Label personalizzati.", href: "/products/henna-based-hair-colors" },
  { title: "Erbe ayurvediche indiane", text: "Polveri erboristiche e botaniche indiane per cosmetica, cura personale, benessere, cura dei capelli e vendita all’ingrosso in Austria.", href: "/products/ayurvedic-indian-herbs" },
  { title: "Spezie indiane", text: "Spezie indiane intere e macinate per importatori, distributori, aziende alimentari, rivenditori specializzati e marchi Private Label austriaci.", href: "/products/indian-spices" },
];

const buyerProfiles = [
  ["Importatori e distributori", "Coordiniamo specifiche, quantità commerciali e documentazione disponibile per reti distributive che servono Vienna, Graz e altri mercati austriaci."],
  ["Marchi retail biologici e naturali", "Valutiamo henné, indigo, erbe e spezie per negozi biologici, rivenditori naturali e gamme a marchio proprio, in base alle evidenze disponibili e alla valutazione dell’acquirente."],
  ["Aziende di cosmetica e cura personale", "Forniamo polveri botaniche per progetti cosmetici e di cura personale sviluppati dall’acquirente, con verifica dell’uso previsto e delle specifiche."],
  ["Fornitori per saloni professionali", "Esaminiamo colorazioni botaniche e ingredienti erboristici per la cura dei capelli destinati ai canali professionali e ai saloni austriaci."],
  ["Aziende erboristiche e del benessere", "Valutiamo polveri ayurvediche e prodotti botanici selezionati per programmi dedicati al benessere, al retail specializzato e al marchio proprio."],
  ["Acquirenti Private Label e OEM", "Coordiniamo buste, scatole, grafiche, codici a barre ed etichette in tedesco tecnicamente realizzabili per progetti a marchio dell’acquirente."],
  ["Importatori di alimenti e spezie", "Pianifichiamo spezie intere e macinate e ingredienti alimentari indiani per aziende alimentari e distributori specializzati austriaci."],
  ["Grossisti e rivenditori specializzati", "Creiamo assortimenti mirati per i canali all’ingrosso, e-commerce e retail specializzato in tutta l’Austria."],
];

const documentationItems = [
  ["Fattura commerciale", "I dati possono essere predisposti in base all’acquirente, ai prodotti, alle quantità, ai valori e alle condizioni di spedizione confermati."],
  ["Packing List", "Numero dei colli, pesi netti e lordi, informazioni sui cartoni e riferimenti concordati possono essere coordinati per gli ordini confermati."],
  ["Certificato di origine", "Il coordinamento può essere esaminato quando applicabile al prodotto e all’accordo di spedizione confermati."],
  ["Specifiche e COA", "Specifiche, COA ove disponibile, riferimenti di lotto e informazioni sulla qualità dipendono dal prodotto selezionato."],
  ["Informazioni sul confezionamento", "Buste, scatole, sacchi sfusi, etichette e codici a barre possono essere allineati al programma approvato dall’acquirente."],
  ["Documenti di spedizione", "Possono essere coordinati con lo spedizioniere incaricato dall’acquirente e il piano di partenza concordato."],
  ["Informazioni per la verifica della destinazione", "Le informazioni disponibili possono supportare la verifica doganale e del mercato di destinazione da parte dell’acquirente austriaco."],
  ["Responsabilità dell’acquirente", "L’importatore deve verificare classificazione, etichette, dichiarazioni, registrazioni, dogana, imposte e requisiti austriaci ed europei applicabili."],
];

const processSteps = [
  ["Condividete i requisiti del prodotto", "Indicate prodotto, uso commerciale previsto, destinazione, quantità approssimativa e confezionamento preferito."],
  ["Confermate specifiche e quantità", "Verificate qualità richiesta, specifiche disponibili e quantità minima commerciale di 200 kg per prodotto."],
  ["Verificate confezionamento e Private Label", "Allineate formati retail o sfusi realizzabili, grafiche, etichette, codici a barre e requisiti del marchio."],
  ["Confermate documenti e piano di spedizione", "Esaminate i documenti disponibili e l’accordo con lo spedizioniere incaricato dall’acquirente."],
  ["Coordinamento di produzione e spedizione", "Procedete secondo condizioni commerciali confermate, fattibilità produttiva e piano di spedizione concordato."],
];

const marketLocations = [
  ["Vienna", "Importatori, aziende di cosmetica naturale e acquirenti Private Label possono valutare approvvigionamento multicategoria e formati a marchio proprio."],
  ["Graz", "Distributori e aziende del benessere possono valutare polveri botaniche, prodotti per saloni e gamme erboristiche retail."],
  ["Linz", "Acquirenti di ingredienti alimentari, grossisti e aziende logistiche possono coordinare richieste di spezie e prodotti botanici."],
  ["Salisburgo", "Rivenditori specializzati, fornitori per saloni e marchi premium del benessere possono valutare formati retail e professionali."],
  ["Innsbruck", "Aziende di prodotti naturali e attività retail legate al turismo possono valutare collezioni mirate di prodotti botanici, erbe e spezie."],
  ["Klagenfurt", "Aziende del benessere, negozi specializzati e distributori regionali possono valutare programmi commercialmente realizzabili."],
  ["Bassa Austria", "Aziende di approvvigionamento retail e distributori possono coordinare fornitura sfusa e presentazioni Private Label."],
  ["Alta Austria", "Gli acquirenti possono valutare ingredienti botanici, prodotti professionali per capelli, spezie e confezioni all’ingrosso."],
];

const faqs = [
  { question: "Esportate henné naturale in polvere dall’India all’Austria?", answer: "Sì. Shivesh International coordina la fornitura per importatori, distributori, grossisti, fornitori per saloni e acquirenti Private Label qualificati, previa conferma delle specifiche e delle condizioni commerciali." },
  { question: "Qual è la quantità minima d’ordine per gli acquirenti austriaci?", answer: "La quantità minima d’ordine è di 200 kg per prodotto. Le quantità finali dipendono dal prodotto, dal confezionamento e dai requisiti Private Label." },
  { question: "Gli acquirenti austriaci possono ordinare henné e prodotti erboristici in Private Label?", answer: "Per alcuni prodotti è possibile valutare la fornitura Private Label, compresi marchio, buste o scatole stampate, codici a barre e grafiche approvate dall’acquirente." },
  { question: "Quali formati retail e sfusi sono disponibili?", answer: "È possibile valutare buste da 100 g, 200 g, 500 g e 1 kg. Le opzioni sfuse includono sacchi sottovuoto a doppio strato da 20 kg e 25 kg, previa conferma." },
  { question: "Potete coordinare grafiche di confezionamento in tedesco?", answer: "Sì, insieme a confezioni multilingue, grafiche fornite dall’acquirente e supporto al layout. L’acquirente resta responsabile del testo finale, delle dichiarazioni e dell’approvazione." },
  { question: "Quali documenti possono accompagnare le spedizioni destinate all’Austria?", answer: "In base al prodotto e alla disponibilità: fatture commerciali, Packing List, certificati di origine, specifiche, COA, informazioni sulla qualità e documenti di spedizione." },
  { question: "Come possono essere spediti i prodotti dall’India all’Austria?", answer: "Gli accordi possono prevedere trasporto marittimo attraverso un porto europeo seguito da trasporto stradale o ferroviario, oppure trasporto aereo via Vienna. Rotte e tempi non sono garantiti." },
  { question: "I requisiti austriaci ed europei vengono gestiti automaticamente?", answer: "No. L’importatore deve confermare classificazione, etichettatura, dichiarazioni, registrazioni, dogana, imposte e requisiti applicabili al prodotto selezionato." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, url: canonicalUrl, name: "Esportatore di henné, indigo, erbe e spezie in Austria", description: "Fornitura export dall’India di henné naturale, indigo, colorazioni botaniche per capelli, erbe ayurvediche e spezie indiane per l’Austria.", isPartOf: { "@id": "https://shiveshinternational.com/#website" }, about: { "@id": "https://shiveshinternational.com/#organization" }, breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` }, inLanguage: "it" },
    { "@type": "BreadcrumbList", "@id": `${canonicalUrl}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shiveshinternational.com/" },
      { "@type": "ListItem", position: 2, name: "Export", item: "https://shiveshinternational.com/export" },
      { "@type": "ListItem", position: 3, name: "Europa", item: "https://shiveshinternational.com/export/europe" },
      { "@type": "ListItem", position: 4, name: "Austria", item: canonicalUrl },
    ] },
  ],
};

const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${canonicalUrl}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

function OptionalImage({ src, alt, priority = false, sizes = "(min-width: 1024px) 55vw, 100vw", className = "object-cover object-center" }: { src: string; alt: string; priority?: boolean; sizes?: string; className?: string }) {
  if (!existsSync(`${process.cwd()}/public${src}`)) return null;
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={className} />;
}

export default function AustriaExportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_42%,#496d58_0%,#173b2a_35%,#071b14_78%)]">
        <OptionalImage src={heroImage} alt="Acquirenti austriaci valutano henné, indigo, erbe e spezie indiane per la fornitura export" priority sizes="100vw" className="object-cover object-[58%_50%] sm:object-[55%_50%] lg:object-[50%_50%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/72 via-[#102F23]/40 to-[#071B14]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/[0.04]" />
        <GoldenParticles />
        <div className="relative z-10 flex items-center px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="w-full max-w-[820px] lg:max-w-[860px] xl:max-w-[900px]">
            <StaggerItem delay={0}><div className="flex items-center gap-4"><span className="h-px w-14 bg-[#C9A962]" /><p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E4C878] sm:text-xs">Esportazione dall’India all’Austria</p></div></StaggerItem>
            <StaggerItem delay={100}><h1 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#F5F0E6] sm:text-5xl lg:text-6xl xl:text-[66px] hyphens-auto">Prodotti naturali per l’Austria<span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">Henné, indigo, erbe e spezie</span></h1></StaggerItem>
            <StaggerItem delay={200}><p className="mt-5 max-w-[730px] text-[16px] font-light leading-7 text-[#F5F0E6]/82 sm:text-[17px] sm:leading-8">Shivesh International supporta importatori, distributori, grossisti, aziende cosmetiche, fornitori per saloni, aziende erboristiche, acquirenti del settore alimentare e marchi Private Label austriaci con henné naturale, indigo, colorazioni botaniche per capelli, erbe ayurvediche e spezie indiane pronte per l’esportazione.</p></StaggerItem>
            <StaggerItem delay={300}><div className="mt-7 flex flex-wrap gap-4"><Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Invia una richiesta per l’Austria <span>→</span></Link><a href="#prodotti" className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 bg-[#102F23]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all hover:border-[#C9A962] hover:text-[#E4C878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]">Scopri i prodotti <span>↓</span></a></div></StaggerItem>
            <StaggerItem delay={400}><div className="mt-10 grid max-w-[740px] grid-cols-2 gap-3 lg:grid-cols-4">{[["200 kg", "MOQ per prodotto"], ["Sfuso", "Fornitura all’ingrosso"], ["OEM", "Private Label"], ["Austria", "Richieste B2B"]].map(([value, label]) => <div key={label} className="border border-white/15 bg-black/20 px-4 py-4 backdrop-blur-md"><p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">{value}</p><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6]/55">{label}</p></div>)}</div></StaggerItem>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Approvvigionamento di prodotti naturali India–Austria</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.2vw,4.2rem)] font-semibold leading-[1.06] hyphens-auto">Un partner indiano per l’esportazione <span className="block text-[#A97B22]">per gli acquirenti austriaci di prodotti naturali</span></h2><p className="mt-7 text-[16px] font-light leading-8 text-[#4C5F54]">Importatori, distributori e grossisti austriaci possono coordinare più categorie con un unico team export indiano. Shivesh International supporta aziende cosmetiche e di cura personale, marchi di cura naturale dei capelli, fornitori per saloni, aziende erboristiche e del benessere, acquirenti di ingredienti alimentari, aziende di spezie, operatori Private Label e marchi e-commerce nell’approvvigionamento strutturato dall’India.</p><p className="mt-5 text-[15px] font-light leading-8 text-[#4C5F54]">Le richieste commerciali possono riguardare Vienna, Graz, Salisburgo, Linz e Innsbruck. Disponibilità, specifiche, confezionamento, documentazione e preparazione della spedizione vengono verificate in base alla categoria selezionata e ai requisiti concordati. Le località indicate sono mercati potenziali e non implicano la presenza di uffici o magazzini di Shivesh International in Austria.</p></div></RevealOnScroll></section>

      <section id="prodotti" className="scroll-mt-24 bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Sei categorie commerciali</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Prodotti naturali <span className="block text-[#A97B22]">per importatori e marchi austriaci</span></h2><p className="mx-auto mt-7 max-w-[820px] text-[16px] font-light leading-8 text-[#4C5F54]">Un assortimento mirato per marchi cosmetici, canali professionali per la cura dei capelli, aziende erboristiche, grossisti, aziende alimentari e acquirenti Private Label austriaci.</p></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <StaggerItem key={product.title} delay={(index % 3) * 90}><article className="group flex h-full min-h-[300px] flex-col border border-[#173B2A]/12 bg-[#FBF8F1] p-7 shadow-[0_18px_45px_rgba(20,50,38,0.07)] transition-all hover:-translate-y-2 hover:border-[#C9A962]/70 sm:p-8"><span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]/60">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[27px] font-semibold leading-tight hyphens-auto">{product.title}</h3><p className="mt-5 flex-1 text-[14px] font-light leading-7 text-[#4C5F54]">{product.text}</p><Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A97B22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A97B22]">{product.title} · scopri <span className="transition-transform group-hover:translate-x-2">→</span></Link></article></StaggerItem>)}</div></div></RevealOnScroll></section>

      <section className="bg-[#0B3325] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Canali commerciali austriaci</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Chi supportiamo nel mercato austriaco</h2></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">{buyerProfiles.map(([title, text]) => <article key={title} className="h-full border border-[#C9A962]/25 bg-[#071B14]/55 p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#E4C878] hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#F5F0E6]/65">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Informazioni per la verifica dell’acquirente</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,3.9vw,3.9rem)] font-semibold leading-[1.08] hyphens-auto">Documentazione export <span className="block text-[#A97B22]">per gli acquirenti austriaci</span></h2><p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">I documenti dipendono dal prodotto e dalla disponibilità. Le informazioni commerciali, di prodotto, confezionamento e spedizione disponibili possono essere coordinate per la verifica dell’acquirente e del mercato di destinazione, senza implicare conformità automatica ai requisiti austriaci o europei.</p></div><div className="grid auto-rows-fr gap-5 sm:grid-cols-2">{documentationItems.map(([title, text]) => <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Formati per il marchio dell’acquirente</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,3.9vw,3.9rem)] font-semibold leading-[1.08] hyphens-auto">Soluzioni di confezionamento e Private Label <span className="block text-[#A97B22]">per gli acquirenti austriaci</span></h2><p className="mt-7 text-[15px] font-light leading-8 text-[#4C5F54]">I programmi selezionati possono comprendere marchi personalizzati, buste e scatole stampate, coordinamento delle grafiche, codici a barre, supporto alle etichette, confezioni multilingue ed etichette in tedesco. I formati retail, per saloni, professionali e sfusi, inclusi OEM o Private Label, sono soggetti ai requisiti concordati e alla fattibilità tecnica.</p><p className="mt-5 text-[14px] font-light leading-7 text-[#4C5F54]">Le opzioni retail possono comprendere buste da 100 g, 200 g, 500 g e 1 kg. I formati sfusi possono comprendere sacchi sottovuoto a doppio strato da 20 kg e 25 kg. Etichette finali, requisiti linguistici, dichiarazioni, classificazione e conformità al mercato sono soggetti alla verifica dell’acquirente e alla categoria di prodotto.</p></div><div><figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[linear-gradient(135deg,#0b3325,#496d58)] shadow-[0_28px_70px_rgba(20,50,38,0.18)]"><OptionalImage src="/images/export/austria/austria-buyer-partnership.png" alt="Confezioni Private Label e formati di prodotti naturali per acquirenti austriaci" className="object-cover object-center" /></figure><div className="mt-5 grid gap-5 sm:grid-cols-2"><article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Confezioni retail</h3><p className="mt-4 text-sm leading-7 text-[#4C5F54]">Buste da 100 g · 200 g · 500 g · 1 kg</p></article><article className="border border-[#C9A962]/35 bg-[#FBF8F1] p-7"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Confezioni sfuse</h3><p className="mt-4 text-sm leading-7 text-[#4C5F54]">Sacchi sottovuoto a doppio strato da 20 kg e 25 kg</p></article><article className="border border-[#C9A962] bg-[#173B2A] p-7 text-[#F5F0E6] sm:col-span-2"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C878]">Quantità minima d’ordine</p><p className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold">200 kg per prodotto</p></article></div></div></div></RevealOnScroll></section>

      <section className="bg-[#09271D] px-6 py-24 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Supporto per spedizione e documenti</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Coordinamento dell’esportazione dall’India all’Austria</h2><p className="mt-7 text-[16px] font-light leading-8 text-[#F5F0E6]/68">Il coordinamento può comprendere fatture commerciali, Packing List, certificati di origine, specifiche, COA e documenti di qualità disponibili, documenti di spedizione, spedizionieri incaricati dall’acquirente, cartoni export, pallet e informazioni sulla spedizione.</p><p className="mt-5 text-[15px] font-light leading-8 text-[#F5F0E6]/62">Poiché l’Austria non ha sbocco sul mare, gli accordi scelti dall’acquirente possono prevedere trasporto marittimo attraverso porti europei come Amburgo, Bremerhaven, Rotterdam, Capodistria o Trieste, seguito da trasporto stradale o ferroviario. Il trasporto aereo può essere coordinato via Vienna o secondo un altro accordo. Porto d’ingresso, rotta, tempi e sdoganamento non sono garantiti. Documenti e informazioni possono essere coordinati in base a categoria, destinazione, istruzioni dell’acquirente e requisiti concordati.</p></div><figure className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#C9A962]/35 bg-[linear-gradient(135deg,#071b14,#496d58)] shadow-[0_28px_70px_rgba(0,0,0,0.25)]"><OptionalImage src="/images/export/austria/india-to-austria-export-coordination.png" alt="Coordinamento dell’esportazione dall’India all’Austria per prodotti naturali, documenti e trasporto" className="object-cover object-center" /></figure></div><aside className="mt-12 border border-[#C9A962]/35 bg-[#071B14]/60 p-7 text-[14px] font-light leading-7 text-[#F5F0E6]/65">L’importatore o acquirente austriaco resta responsabile di classificazione, etichettatura, registrazione, procedure doganali, imposte e requisiti austriaci ed europei applicabili. Non viene garantita alcuna conformità, registrazione o procedura di sdoganamento automatica.</aside></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1500px]"><div className="mx-auto max-w-[920px] text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Cinque fasi commerciali</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.3rem,4.3vw,4.3rem)] font-semibold leading-[1.06] hyphens-auto">Processo di fornitura export per l’Austria</h2></div><div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{processSteps.map(([title, text]) => <article key={title} className="h-full border border-[#173B2A]/12 bg-[#FBF8F1] p-7 sm:p-8"><span className="block h-px w-12 bg-[#C9A962]" /><h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold hyphens-auto">{title}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Località degli acquirenti austriaci</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Fornitura di prodotti naturali per acquirenti in tutta l’Austria</h2><p className="mt-7 text-[15px] leading-7 text-[#4C5F54]">Queste indicazioni identificano possibili località di richiesta e distribuzione; non rappresentano uffici o magazzini locali né rapporti di fornitura attivi garantiti.</p><div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">{marketLocations.map(([location, text]) => <article key={location} className="h-full border border-[#C9A962]/35 bg-[#FBF8F1] p-6"><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#A97B22]">{location}</h3><p className="mt-4 text-[14px] font-light leading-7 text-[#4C5F54]">{text}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="bg-[#EDE5D7] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"><RevealOnScroll><div className="mx-auto max-w-[1120px]"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9F7F36]">Domande degli acquirenti austriaci</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Domande frequenti sulla fornitura export in Austria</h2></div><div className="mt-12 divide-y divide-[#173B2A]/15 border-y border-[#173B2A]/15">{faqs.map((faq) => <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">{faq.question}</h3><p className="text-[14px] font-light leading-7 text-[#4C5F54]">{faq.answer}</p></article>)}</div></div></RevealOnScroll></section>

      <section className="relative overflow-hidden bg-[#071B14] px-6 py-24 text-center text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-28"><GoldenParticles /><RevealOnScroll><div className="relative mx-auto max-w-[1000px]"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">Richieste degli acquirenti austriaci</p><h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08] hyphens-auto">Parlateci delle vostre esigenze di prodotto per l’Austria</h2><p className="mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-8 text-[#F5F0E6]/65">Importatori, distributori, grossisti e acquirenti Private Label austriaci possono comunicare al nostro team export il prodotto, la quantità, il confezionamento, la destinazione e l’uso commerciale previsto.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link href="/contact" className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#102F23] transition-all hover:-translate-y-1 hover:bg-[#E4C878]">Invia una richiesta per l’Austria <span>→</span></Link><Link href="/export/europe" className="inline-flex items-center gap-4 border border-[#F5F0E6]/30 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5F0E6] transition-all hover:border-[#C9A962] hover:text-[#E4C878]">Scopri i mercati europei <span>→</span></Link></div><div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F0E6]/45"><Link href="/export">Informazioni sulle esportazioni internazionali</Link><Link href="/export/france">Mercato export Francia</Link><Link href="/export/germany">Mercato export Germania</Link><Link href="/export/italy">Mercato export Italia</Link><Link href="/export/spain">Mercato export Spagna</Link><Link href="/resources">Informazioni per gli acquirenti</Link><Link href="/certifications">Certificazioni</Link><Link href="/infrastructure">Infrastruttura</Link><Link href="/about">Chi è Shivesh International</Link><Link href="/de/export/oesterreich">Pagina export Austria</Link></div></div></RevealOnScroll></section>

      <FooterSection locale="it" /><FloatingContactButtons /><MagneticButtons /><PremiumCursor />
    </main>
  );
}
