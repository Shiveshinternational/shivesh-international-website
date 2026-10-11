import type { Metadata } from "next";
import Link from "next/link";

import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import MagneticButtons from "@/app/components/MagneticButtons";
import Navbar from "@/app/components/Navbar";
import PremiumCursor from "@/app/components/PremiumCursor";
import FooterSection from "@/sections/FooterSection";

const canonicalUrl =
  "https://shiveshinternational.com/resources/how-to-choose-henna-powder-supplier-india";
const articleTitle =
  "How to Choose a Reliable Henna Powder Supplier in India";
const articleDescription =
  "A practical sourcing guide for international buyers evaluating henna supplier credibility, specifications, batch testing, packaging and export readiness.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/resources/how-to-choose-henna-powder-supplier-india",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: canonicalUrl,
    siteName: "Shivesh International",
    title: articleTitle,
    description: articleDescription,
  },
  twitter: {
    card: "summary",
    title: articleTitle,
    description: articleDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${canonicalUrl}#article`,
  headline: articleTitle,
  description: articleDescription,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Shivesh International",
    url: "https://shiveshinternational.com/",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shiveshinternational.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Buyer Resources",
      item: "https://shiveshinternational.com/resources",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Buyer Guide",
      item: canonicalUrl,
    },
  ],
};

const contents = [
  { id: "define-the-requirement", label: "Start with the intended product and use" },
  { id: "verify-supplier", label: "Check supplier identity and traceability" },
  { id: "agree-specifications", label: "Agree on specifications before comparing" },
  { id: "review-testing", label: "Review the COA and testing evidence" },
  { id: "evaluate-sample", label: "Evaluate samples against the agreed brief" },
  { id: "plan-packaging", label: "Confirm packaging, storage and quantity" },
  { id: "confirm-export", label: "Plan documents and export responsibilities" },
  { id: "buyer-checklist", label: "Buyer due-diligence checklist" },
];

const checklist = [
  "Confirm the supplier’s legal identity, address and commercial contact details.",
  "Describe the intended application, market, buyer specification and order format.",
  "Agree the henna grade, mesh requirement, Lawsone basis and test methods in writing.",
  "Ask for a batch-linked COA and clarify which tests and limits apply to the order.",
  "Set out packaging material, pack size, lot identification, storage and shelf-life requirements.",
  "Confirm the order quantity, any private-label minimums, artwork steps and commercial terms.",
  "Identify destination-market import, classification, labelling and document requirements with qualified advisers.",
  "Record the approved sample or reference, agreed specification, responsibilities and next steps before ordering.",
];

export default function HennaSupplierBuyerGuidePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E6] text-[#173B2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <header className="relative overflow-hidden bg-[#071B14] px-6 pb-16 pt-32 text-[#F5F0E6] sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-[1120px]">
          <nav aria-label="Breadcrumb" className="text-sm text-[#F5F0E6]/65">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <li>
                <Link className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]" href="/resources">
                  Buyer Resources
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#E4C878]">Buyer Guide</li>
            </ol>
          </nav>

          <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-[#E4C878]">
            International Buyer Guide · Henna Sourcing
          </p>
          <h1 className="mt-5 max-w-[950px] font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5.3vw,5rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
            {articleTitle}
          </h1>
          <p className="mt-7 max-w-[800px] text-base font-light leading-8 text-[#F5F0E6]/72 sm:text-lg">
            A practical framework for importers, distributors, wholesalers,
            cosmetic brands and bulk buyers to assess a supplier, agree a
            product brief and prepare a clear commercial enquiry.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F0E6]/48">
            A buyer checklist · Product, quality and export planning
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:py-20">
        <aside className="h-fit border border-[#173B2A]/12 bg-[#FBF8F1] p-6 lg:sticky lg:top-28">
          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
            In this guide
          </h2>
          <nav aria-label="Article contents" className="mt-5">
            <ol className="space-y-3">
              {contents.map((item, index) => (
                <li key={item.id}>
                  <a
                    className="flex gap-3 text-sm leading-6 text-[#4C5F54] underline decoration-[#C9A962]/55 underline-offset-4 hover:text-[#173B2A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6A1E]"
                    href={`#${item.id}`}
                  >
                    <span aria-hidden="true" className="font-semibold text-[#8B6A1E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <p className="border-l-2 border-[#C9A962] pl-5 text-lg leading-8 text-[#334D40] sm:text-xl">
            A reliable sourcing decision starts with a written product brief
            and verifiable answers. Compare suppliers on the same intended
            use, grade, test basis, packaging and destination requirements—not
            on a broad quality claim or a price alone.
          </p>

          <section aria-labelledby="define-the-requirement" className="mt-12 scroll-mt-28">
            <h2 id="define-the-requirement" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Start with the intended product and use
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Explain whether the powder is intended for hair colouring, salon
              use, mehndi preparation, a cosmetic formulation, resale or
              another application. The use affects the buyer’s requirements
              for grade, documentation, packaging, labelling and destination
              review. It also helps the supplier respond to a specific
              commercial brief rather than make assumptions.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              If you are developing a retail or private-label product, identify
              the pack format, target customer, artwork status and expected
              order scale. For bulk material, state the intended process and
              how the powder will be received, stored and handled.
            </p>
          </section>

          <section aria-labelledby="verify-supplier" className="mt-12 scroll-mt-28">
            <h2 id="verify-supplier" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Check supplier identity and traceability
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Confirm the contracting entity, registered or business address,
              responsible contact and the entity that will issue the quotation
              and commercial documents. Ask how product identity and lot
              references are maintained from the agreed supply arrangement
              through packing and dispatch. Where sourcing, processing or
              manufacturing claims matter to your procurement decision, ask
              for evidence that is relevant to that specific claim.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Shivesh International operates as a merchant exporter. Discuss
              the specific sourcing, processing, packing and documentation
              arrangements for your enquiry; do not infer factory ownership,
              exclusive sourcing or a particular production model from the
              exporter relationship alone.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Notice how the supplier handles questions: are answers specific
              to your brief, are unknowns identified clearly, and are changes
              to specifications or commercial terms confirmed in writing?
              Keep a named contact and a dated record of agreed decisions.
            </p>
          </section>

          <section aria-labelledby="agree-specifications" className="mt-12 scroll-mt-28">
            <h2 id="agree-specifications" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Agree on specifications before comparing
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Put the intended grade and acceptance criteria in writing.
              Specify the product identity, the required mesh range and how it
              will be measured, the applicable Lawsone requirement, moisture
              limits where relevant, and any buyer-specific tests. Ask each
              supplier to identify the method, units, sampling basis and lot
              covered by the information provided. A number cannot be fairly
              compared if the test method or basis differs.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="border border-[#C9A962]/35 bg-[#FBF8F1] p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                  Lawsone specification
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4C5F54]">
                  State the required value or range, test method and reporting
                  basis in the purchase specification. Confirm that the
                  agreed grade and the batch documentation will use that same
                  basis. Do not assume all henna grades have identical
                  Lawsone values.
                </p>
              </div>
              <div className="border border-[#C9A962]/35 bg-[#FBF8F1] p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                  Mesh and intended use
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4C5F54]">
                  Define the required mesh range and the sieve or measurement
                  method used for acceptance. Mesh is one part of a product
                  brief; it does not, by itself, establish application
                  performance or overall product quality.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-[#4C5F54]">
              The current Natural Henna Powder page lists 80–120 mesh grades
              and a fixed-range Lawsone specification confirmed for the agreed
              grade. Treat these as published product information, not a
              guarantee that every grade or batch has the same result. Review
              the proposed grade and order documents directly with the
              supplier. See the{" "}
              <Link className="font-semibold text-[#8B6A1E] underline decoration-[#C9A962] underline-offset-4 hover:text-[#173B2A]" href="/products/natural-henna-powder">
                Natural Henna Powder product details
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="review-testing" className="mt-12 scroll-mt-28">
            <h2 id="review-testing" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Review the COA and testing evidence
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Request a Certificate of Analysis (COA) that can be linked to the
              commercial batch or lot. Check that the document identifies the
              product and lot, states the sampling or test date, lists the
              parameters and methods, reports units and results, and shows the
              agreed acceptance criteria. Resolve missing or inconsistent
              fields before relying on the document for a purchase decision.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Discuss moisture, microbiological parameters and any other
              quality tests that matter for your product and market. Specify
              the required limits and test methods first, then confirm which
              results will be provided and whether they apply to the sample,
              a batch or another defined scope. Do not treat an unrequested
              test, a general company certificate or a sample report as proof
              that every lot meets a destination-market rule.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              The product page states that a batch-specific COA is available
              with each commercial batch or order and that testing can be
              performed according to buyer instructions and requirements.
              Confirm the exact scope and documentation for your own agreed
              order.
            </p>
          </section>

          <section aria-labelledby="evaluate-sample" className="mt-12 scroll-mt-28">
            <h2 id="evaluate-sample" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Evaluate samples against the agreed brief
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              If a sample is part of your qualification process, record its
              supplier, product description, lot or reference, date received
              and the conditions under which it was evaluated. Compare it
              against the written specification and intended application.
              Ask how a production order will be tied to the approved grade or
              sample, and what happens if a delivered lot does not meet the
              agreed criteria.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              A sample can help assess suitability, but it does not replace
              batch-specific documentation, commercial terms or the buyer’s
              own quality and regulatory review.
            </p>
          </section>

          <section aria-labelledby="plan-packaging" className="mt-12 scroll-mt-28">
            <h2 id="plan-packaging" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Confirm packaging, storage and quantity
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Confirm the pack size, packaging material, sealing and lot
              identification, outer-carton details, storage conditions and any buyer
              labelling or artwork requirements. Ask for the proposed packing
              configuration and confirm it is suitable for your handling,
              warehouse and distribution plan. Agree who approves artwork and
              labels before production or packing begins.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Current product information lists retail and private-label packs
              in 100 g, 200 g, 500 g and 1 kg sizes, and bulk packing in 20 kg
              and 25 kg double-layer vacuum packs. Treat these as listed
              options and confirm the selected format and order details in the
              quotation. Agree storage conditions and shelf-life requirements
              for the chosen package and destination.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Separate bulk order quantities from private-label minimums. The
              product information currently says bulk orders can start from
              100 kg per item, subject to product, grade, packaging and
              commercial confirmation; private-label minimums vary with pack
              size, format, artwork and customization. Confirm the actual
              quantity, pack count and quote for your order.
            </p>
          </section>

          <section aria-labelledby="confirm-export" className="mt-12 scroll-mt-28">
            <h2 id="confirm-export" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Plan documents and export responsibilities
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Before placing an order, identify the destination country and
              port, product classification, importer responsibilities,
              labelling rules and any required product or shipment documents.
              Confirm which documents the supplier can provide for the actual
              product and shipment, who arranges them, and when they will be
              issued. Discuss the Incoterm, freight responsibilities, booking
              assumptions and the commercial documents required by both
              parties.
            </p>
            <p className="mt-4 leading-8 text-[#4C5F54]">
              Document availability and import rules depend on the product,
              shipment and destination. A supplier’s document support does
              not mean that the goods are automatically approved, registered
              or cleared for import. The importer should confirm requirements
              with the appropriate destination-market authorities and
              qualified advisers.
            </p>
          </section>

          <section aria-labelledby="buyer-checklist" className="mt-12 scroll-mt-28">
            <h2 id="buyer-checklist" className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Buyer due-diligence checklist
            </h2>
            <p className="mt-5 leading-8 text-[#4C5F54]">
              Use this list to prepare a comparable supplier enquiry and keep
              the response tied to your requirements.
            </p>
            <ul className="mt-6 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[#173B2A]/10 pb-4 leading-7 text-[#4C5F54]">
                  <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-[#C9A962] text-xs font-bold text-[#8B6A1E]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border border-[#C9A962]/35 bg-[#102F23] p-7 text-[#F5F0E6] sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
              Prepare your enquiry
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
              Request an Export Quotation
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#F5F0E6]/72">
              Share the product and intended use, grade, mesh and Lawsone
              requirements where applicable, expected quantity, pack format,
              destination country or port, required documents and company
              contact details. Specifications, availability and commercial
              terms are confirmed for each enquiry.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102F23] transition-colors hover:bg-[#E4C878] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]"
              >
                Request Export Quotation <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/products/natural-henna-powder"
                className="inline-flex items-center border border-[#F5F0E6]/35 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F0E6] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878]"
              >
                Review product information
              </Link>
            </div>
          </section>

          <p className="mt-8 text-sm leading-7 text-[#4C5F54]">
            <Link className="font-semibold text-[#8B6A1E] underline decoration-[#C9A962] underline-offset-4 hover:text-[#173B2A]" href="/resources">
              Return to Buyer Resources
            </Link>
          </p>
        </article>
      </div>

      <FooterSection />
      <FloatingContactButtons />
      <MagneticButtons />
      <PremiumCursor />
    </main>
  );
}
