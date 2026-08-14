import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy of Shivesh International explaining essential preference storage, Google Analytics cookies and visitor consent choices.",
  alternates: {
    canonical: "/cookie-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
            This policy explains how Shivesh International uses browser storage
            and optional analytics cookies on its website.
          </p>

          <p className="mt-5 text-sm text-[#e4c878]">
            Effective date: 14 August 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[28px] border border-[#c9a962]/30 bg-white/70 p-6 shadow-[0_25px_70px_rgba(23,59,42,0.10)] sm:p-10 lg:p-14">
            <div className="space-y-12 text-[15px] leading-8 text-[#4c5f54]">
              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  1. What Are Cookies?
                </h2>

                <p className="mt-5">
                  Cookies are small text files that a website may place on your
                  device. Similar technologies, including local browser
                  storage, may remember preferences or help website owners
                  understand how their sites are used.
                </p>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  2. How We Use These Technologies
                </h2>

                <p className="mt-5">
                  We use browser storage to remember your cookie-consent choice.
                  If you select “Accept,” we also permit Google Analytics to use
                  analytics storage to measure website traffic and engagement.
                </p>

                <p className="mt-4">
                  Advertising storage, advertising user data and advertising
                  personalisation remain denied. The website does not require
                  acceptance of analytics cookies for visitors to browse pages
                  or submit business enquiries.
                </p>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  3. Technologies Used
                </h2>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#082f24] text-white">
                        <th className="border border-[#c9a962]/25 px-5 py-4">
                          Name
                        </th>
                        <th className="border border-[#c9a962]/25 px-5 py-4">
                          Provider
                        </th>
                        <th className="border border-[#c9a962]/25 px-5 py-4">
                          Purpose
                        </th>
                        <th className="border border-[#c9a962]/25 px-5 py-4">
                          Typical Duration
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-[#173b2a]/15 px-5 py-4 font-semibold text-[#173b2a]">
                          shivesh-cookie-consent
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Shivesh International
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Remembers whether the visitor accepted or rejected
                          optional analytics storage.
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Until browser site data is cleared
                        </td>
                      </tr>

                      <tr className="bg-[#f5f0e6]/70">
                        <td className="border border-[#173b2a]/15 px-5 py-4 font-semibold text-[#173b2a]">
                          _ga
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Google Analytics
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Helps distinguish website visitors and measure usage
                          after analytics consent is granted.
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Up to 2 years
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-[#173b2a]/15 px-5 py-4 font-semibold text-[#173b2a]">
                          _ga_*
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Google Analytics
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Maintains and measures an analytics session after
                          consent is granted.
                        </td>
                        <td className="border border-[#173b2a]/15 px-5 py-4">
                          Up to 2 years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-5">
                  Actual cookie duration may vary according to browser settings,
                  Google Analytics configuration and future service updates.
                </p>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  4. Google Analytics
                </h2>

                <p className="mt-5">
                  Google Analytics 4 helps us understand information such as
                  pages viewed, approximate geographic region, device category,
                  browser type, website engagement and traffic source.
                </p>

                <p className="mt-4">
                  We do not intentionally send business enquiry names, email
                  addresses, phone numbers, WhatsApp numbers or complete
                  enquiry messages to Google Analytics.
                </p>

                <p className="mt-4">
                  You can learn more from{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#9f7f36] underline underline-offset-4"
                  >
                    Google’s Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  5. Your Choices
                </h2>

                <p className="mt-5">
                  When you first visit the website, you may select “Accept” or
                  “Reject.” Rejecting optional analytics cookies does not
                  prevent access to the website or business enquiry form.
                </p>

                <p className="mt-4">
                  You may change your choice through the Cookie Settings option
                  in the website footer. You may also remove stored cookies and
                  site data through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  6. Updates to This Policy
                </h2>

                <p className="mt-5">
                  We may update this Cookie Policy when our technologies,
                  service providers or legal obligations change. The effective
                  date shown on this page identifies the latest version.
                </p>
              </section>

              <section className="border-t border-[#c9a962]/30 pt-10">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a] sm:text-3xl">
                  7. Contact Us
                </h2>

                <div className="mt-5 space-y-2">
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

                <p className="mt-6">
                  For broader information about our handling of personal data,
                  read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-[#9f7f36] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}