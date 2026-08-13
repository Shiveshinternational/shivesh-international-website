import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import ContactEnquiryForm from "@/app/components/ContactEnquiryForm";
import GoldenParticles from "@/app/components/GoldenParticles";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: "Contact Natural Products Exporter | Shivesh International",
  description:
    "Contact Shivesh International for bulk natural henna powder, indigo powder, botanical hair colors, Ayurvedic herbs, Indian spices, private-label and export enquiries.",
  keywords: [
    "contact henna exporter India",
    "natural henna supplier contact",
    "indigo powder exporter enquiry",
    "botanical hair color manufacturer contact",
    "Ayurvedic herbs exporter enquiry",
    "Indian spices exporter contact",
    "private label henna enquiry",
    "bulk natural products supplier India",
    "Shivesh International contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Natural Products Exporter | Shivesh International",
    description:
      "Send bulk export and private-label enquiries for natural henna, indigo, botanical hair colors, Ayurvedic herbs and Indian spices.",
    url: "/contact",
    type: "website",
  },
};

const directContacts = [
  {
    shortName: "CALL",
    label: "Phone",
    value: "+91-9999774950",
    secondaryValue: "+91-9873077187",
    href: "tel:+919999774950",
    external: false,
  },
  {
    shortName: "WA",
    label: "WhatsApp",
    value: "+91-9999774950",
    secondaryValue: "Business Enquiries",
    href: "https://wa.me/919999774950",
    external: true,
  },
  {
  shortName: "MAIL",
  label: "Email",
  value: "export@shiveshinternational.com",
  secondaryValue: "sales@shiveshinternational.com • info@shiveshinternational.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=export@shiveshinternational.com",
  external: true,
},
  {
    shortName: "WEB",
    label: "Website",
    value: "www.shiveshinternational.com",
    secondaryValue: "Official Website",
    href: "https://shiveshinternational.com",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* CONTACT HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-[#C9A962]/25 bg-[#071b14]">
        <Image
          src="/images/contact/contact-hero-global-business-support-final-v1.png"
          alt="Shivesh International business and export enquiry office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061711]/62 via-[#102f23]/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />

        <GoldenParticles />

        <div className="relative z-10 flex min-h-[72vh] w-full items-center px-6 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-[680px]">
            <StaggerItem delay={0}>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-[#C9A962]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#E4C878] sm:text-xs">
                  Global Business Contact Centre
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h1 className="max-w-[680px] font-[family-name:var(--font-playfair)] text-[clamp(2.65rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F0E6]">
                Let&apos;s Start a
                <br />

                <span className="bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Business Conversation
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#F5F0E6]/78">
                Contact Shivesh International for product enquiries, bulk
                supply, private-label development, technical documentation and
                international export requirements.
              </p>
            </StaggerItem>

            <StaggerItem delay={360}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-details"
                  className="inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
                >
                  View Contact Details

                  <span className="text-lg">↓</span>
                </a>

                <a
                  href="https://wa.me/919999774950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-[#F5F0E6]/30 bg-[#102f23]/32 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6] backdrop-blur-lg transition-all duration-500 hover:border-[#C9A962] hover:text-[#C9A962]"
                >
                  WhatsApp Our Team
                </a>
              </div>
            </StaggerItem>
          </div>
        </div>

      </section>

      {/* CONTACT INTRODUCTION */}
      <section
        id="contact-details"
        className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="sticky top-32">
                <div className="mb-7 flex items-center gap-5">
                  <span className="h-[3px] w-16 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Connect with Our Team
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Clear Communication Begins with a Complete Enquiry
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-lg leading-9 text-[#4c5f54]">
                To help us understand your requirement, please share the product
                name, expected quantity, pack size, destination country and
                whether you require bulk or private-label supply.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                For branded products, it is helpful to mention the required
                packaging format, artwork status, number of variants and
                approximate launch schedule.
              </p>

              <p className="text-lg leading-9 text-[#4c5f54]">
                For technical or regulatory enquiries, please clearly mention
                the required document, product category and destination market
                so that our team can review the request properly.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMPACT LOCATION AND DIRECT CONTACT HUB */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Contact Information
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                Our Locations and Direct Contact Details
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                Reach our corporate office, manufacturing operations or
                business team using the details below.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* CARD 1 — LOCATIONS */}
              <StaggerItem delay={0}>
                <article className="group relative h-full overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.10)] transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_30px_75px_rgba(0,0,0,0.15)] sm:p-8">
                  <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-[1100ms] group-hover:left-[145%]" />

                  <div className="relative">
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/55 bg-[#102f23] font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#E4C878]">
                        01
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#9f7f36]">
                          Our Locations
                        </p>

                        <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                          Corporate & Manufacturing
                        </h3>
                      </div>
                    </div>

                    <div className="mt-7 h-px bg-[#C9A962]/35" />

                    {/* REGISTERED OFFICE */}
                    <div className="mt-7 grid gap-5 sm:grid-cols-[70px_1fr]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#ede5d7] text-xl text-[#9f7f36]">
                        ⌂
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9f7f36]">
                          Registered Office
                        </p>

                        <h4 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                          New Delhi, India
                        </h4>

                        <address className="mt-3 not-italic leading-7 text-[#4c5f54]">
                          361-C, BG-6, Paschim Vihar,
                          <br />
                          New Delhi – 110063, India
                        </address>
                      </div>
                    </div>

                    <div className="my-7 h-px bg-[#173b2a]/10" />

                    {/* MANUFACTURING UNIT */}
                    <div className="grid gap-5 sm:grid-cols-[70px_1fr]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] text-xl text-[#E4C878]">
                        ⚙
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9f7f36]">
                          Manufacturing Unit
                        </p>

                        <h4 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                          Faridabad, Haryana, India
                        </h4>

                        <p className="mt-3 leading-7 text-[#4c5f54]">
                          Manufacturing, processing, packing, storage and
                          production operations.
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[#4c5f54]/65">
                          Complete facility address may be shared with verified
                          buyers and approved business visitors.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>

              {/* CARD 2 — DIRECT CONTACT */}
              <StaggerItem delay={120}>
                <article className="group relative h-full overflow-hidden rounded-[26px] border border-[#C9A962]/25 bg-[#102f23] p-7 text-[#F5F0E6] shadow-[0_22px_60px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_30px_75px_rgba(0,0,0,0.25)] sm:p-8">
                  <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-[1100ms] group-hover:left-[145%]" />

                  <div className="relative">
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/55 bg-white/[0.04] font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#E4C878]">
                        02
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A962]">
                          Direct Contact
                        </p>

                        <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold">
                          Reach Our Business Team
                        </h3>
                      </div>
                    </div>

                    <div className="mt-7 h-px bg-[#C9A962]/25" />

                    <div className="mt-5 divide-y divide-[#C9A962]/15">
                      {directContacts.map((contact) => {
  const cardContent = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A962]/40 bg-white/[0.04] px-2 text-center text-[10px] font-bold text-[#C9A962]">
        {contact.shortName}
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C9A962]">
          {contact.label}
        </p>

        {contact.shortName === "MAIL" ? (
          <div className="mt-1 space-y-1">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=export@shiveshinternational.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block break-words font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F5F0E6] transition hover:text-[#C9A962]"
            >
              export@shiveshinternational.com
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@shiveshinternational.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block break-words text-sm text-[#F5F0E6]/45 transition hover:text-[#C9A962]"
            >
              sales@shiveshinternational.com
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@shiveshinternational.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block break-words text-sm text-[#F5F0E6]/45 transition hover:text-[#C9A962]"
            >
              info@shiveshinternational.com
            </a>
          </div>
        ) : (
          <>
            <p className="mt-1 break-words font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F5F0E6]">
              {contact.value}
            </p>

            <p className="mt-1 text-sm text-[#F5F0E6]/45">
              {contact.secondaryValue}
            </p>
          </>
        )}
      </div>

      <span className="text-lg text-[#C9A962] transition-transform duration-300 group-hover/contact:translate-x-2">
        →
      </span>
    </>
  );

  return contact.shortName === "MAIL" ? (
    <div
      key={contact.label}
      className="group/contact grid gap-4 py-4 transition-all duration-300 sm:grid-cols-[58px_1fr_auto] sm:items-center"
    >
      {cardContent}
    </div>
  ) : (
    <a
      key={contact.label}
      href={contact.href}
      target={contact.external ? "_blank" : undefined}
      rel={contact.external ? "noopener noreferrer" : undefined}
      className="group/contact grid gap-4 py-4 transition-all duration-300 sm:grid-cols-[58px_1fr_auto] sm:items-center"
    >
      {cardContent}
    </a>
  );
})}
                    </div>

                
                  </div>
                </article>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PREMIUM BUSINESS ENQUIRY FORM */}
      <section className="bg-[#f5f0e6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-14 xl:grid-cols-[0.65fr_1.35fr] xl:gap-20">
              <div>
                <div className="xl:sticky xl:top-32">
                  <div className="mb-7 flex items-center gap-5">
                    <span className="h-[3px] w-16 bg-[#C9A962]" />

                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                      Submit Your Requirement
                    </span>
                  </div>

                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                    A Better Enquiry Leads to a Better Business Discussion
                  </h2>

                  <p className="mt-7 text-lg leading-9 text-[#4c5f54]">
                    Share clear information about your product, market,
                    quantity, packaging and branding requirements so that our
                    team can review your enquiry more effectively.
                  </p>

                  <div className="mt-9 space-y-4">
                    {[
                      "Mention the exact product or category",
                      "Include destination country",
                      "Share expected order quantity",
                      "Explain packaging and branding needs",
                      "Mention required technical documents",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-4 border-b border-[#173b2a]/10 pb-4"
                      >
                        <span className="mt-1 text-[#9f7f36]">✓</span>

                        <span className="leading-7 text-[#173b2a]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ContactEnquiryForm />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* FINAL CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-28 text-center text-[#F5F0E6] sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[150px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Shivesh International
            </p>

            <h2 className="mt-7 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something Natural Together
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#F5F0E6]/65">
              Whether you require bulk ingredients, retail-ready products,
              private-label packaging or export support, begin by sharing a
              complete and genuine business enquiry.
            </p>

            <a
              href="https://wa.me/919999774950"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-11 inline-flex items-center gap-4 border border-[#C9A962] bg-[#C9A962] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_20px_55px_rgba(201,169,98,0.3)]"
            >
              Start a WhatsApp Conversation

              <span className="text-lg">→</span>
            </a>
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