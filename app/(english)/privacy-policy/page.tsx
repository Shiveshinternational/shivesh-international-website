import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Shivesh International explaining how business enquiry information, website analytics data and privacy choices are handled.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Who We Are",
    content: (
      <>
        <p>
          Shivesh International is an Indian exporter and supplier of Natural
          Henna Powder, Natural Indigo Powder, Natural Henna Hair Colors,
          Henna-Based Hair Colors, Ayurvedic Indian Herbs and Indian Spices.
        </p>

        <p className="mt-4">
          For the purposes of this Privacy Policy, Shivesh International is
          responsible for determining how personal information submitted
          through this website is handled.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          When you submit a business enquiry, request a quotation or contact
          our export team, we may collect information such as:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your name and company name</li>
          <li>Country and business email address</li>
          <li>Phone and WhatsApp number, when provided</li>
          <li>Products, packaging and quantities of interest</li>
          <li>Private-label, distribution or export requirements</li>
          <li>Messages and other information you voluntarily provide</li>
        </ul>

        <p className="mt-4">
          We may also collect limited technical and usage information through
          Google Analytics when you consent to optional analytics cookies.
          This may include page views, approximate geographic region, browser
          type, device category, traffic source and website interactions.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Information",
    content: (
      <>
        <p>We use information for legitimate business purposes, including:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Responding to product and export enquiries</li>
          <li>Preparing quotations and commercial information</li>
          <li>Understanding packaging and private-label requirements</li>
          <li>Coordinating samples, documents and potential orders</li>
          <li>Improving website performance and buyer experience</li>
          <li>Protecting the website against misuse and security threats</li>
          <li>Meeting applicable legal and regulatory obligations</li>
        </ul>

        <p className="mt-4">
          We do not send names, email addresses, phone numbers, WhatsApp
          numbers or complete enquiry messages to Google Analytics.
        </p>
      </>
    ),
  },
  {
    title: "4. Legal Bases",
    content: (
      <>
        <p>
          Depending on the applicable law and the nature of your interaction,
          we may process information because you have provided consent, because
          processing is necessary to respond to your request or take steps
          before entering a business relationship, because we have legitimate
          business interests, or because we must comply with legal obligations.
        </p>

        <p className="mt-4">
          Optional analytics cookies are used only according to the consent
          choice recorded through our cookie banner.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and Analytics",
    content: (
      <>
        <p>
          This website uses Google Analytics 4 to help us understand website
          traffic and engagement. Analytics storage and advertising-related
          storage are denied by default and are updated only when a visitor
          selects “Accept” on the cookie banner.
        </p>

        <p className="mt-4">
          Visitors may select “Reject” and continue using the website. Your
          cookie preference is stored in your browser so that the website can
          remember your choice.
        </p>

        <p className="mt-4">
          More information is available in our{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold text-[#9f7f36] underline underline-offset-4"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "6. Service Providers",
    content: (
      <>
        <p>
          We may use trusted service providers to operate our website and
          process communications, including website hosting, email delivery,
          analytics and security providers. These may include Vercel, Resend
          and Google Analytics.
        </p>

        <p className="mt-4">
          Service providers may process information only as necessary to
          provide their services and according to their contractual and legal
          obligations.
        </p>
      </>
    ),
  },
  {
    title: "7. International Data Transfers",
    content: (
      <p>
        Because we operate an international export business and use global
        technology providers, information may be processed in countries other
        than your own. Where required, appropriate safeguards are used in
        accordance with applicable data-protection laws.
      </p>
    ),
  },
  {
    title: "8. Data Retention",
    content: (
      <p>
        We retain business enquiry information only for as long as reasonably
        necessary to respond, follow up on potential export business, maintain
        appropriate business records, resolve disputes and comply with legal,
        tax or regulatory requirements. Analytics information is retained
        according to the retention settings applicable to our Google Analytics
        property.
      </p>
    ),
  },
  {
    title: "9. Your Privacy Rights",
    content: (
      <>
        <p>
          Subject to the laws applicable to you, you may have rights to request
          access, correction, deletion, restriction, portability or objection
          concerning your personal information. You may also withdraw consent
          where processing is based on consent.
        </p>

        <p className="mt-4">
          You may contact us to exercise an applicable right. We may need to
          verify your identity before completing a request.
        </p>
      </>
    ),
  },
  {
    title: "10. Data Security",
    content: (
      <p>
        We use reasonable administrative, technical and organisational
        safeguards designed to protect information. However, no internet
        transmission or electronic storage method can be guaranteed to be
        completely secure.
      </p>
    ),
  },
  {
    title: "11. Children’s Privacy",
    content: (
      <p>
        This website is intended for business buyers and commercial users. It
        is not directed to children, and we do not knowingly collect personal
        information from children through the business enquiry form.
      </p>
    ),
  },
  {
    title: "12. Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy to reflect changes in our website,
        services, technology or legal obligations. The current effective date
        will be displayed on this page.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#082f24] px-6 pb-20 pt-32 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,98,0.18),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#c9a962]">
            Legal & Privacy
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
            This policy explains how Shivesh International handles personal
            information submitted by international buyers and website visitors.
          </p>

          <p className="mt-5 text-sm text-[#e4c878]">
            Effective date: 14 August 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[28px] border border-[#c9a962]/30 bg-white/70 p-6 shadow-[0_25px_70px_rgba(23,59,42,0.10)] sm:p-10 lg:p-14">
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 text-[15px] leading-8 text-[#4c5f54]">
                    {section.content}
                  </div>
                </section>
              ))}

              <section className="border-t border-[#c9a962]/30 pt-10">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  13. Contact Us
                </h2>

                <div className="mt-5 space-y-2 text-[15px] leading-8 text-[#4c5f54]">
                  <p className="font-semibold text-[#173b2a]">
                    Shivesh International
                  </p>

                  <p>
                    361-C, BG-6, Paschim Vihar,
                    <br />
                    New Delhi – 110063, India
                  </p>

                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@shiveshinternational.com"
                      className="font-semibold text-[#9f7f36] underline underline-offset-4"
                    >
                      info@shiveshinternational.com
                    </a>
                  </p>

                  <p>Phone: +91-9999774950</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}