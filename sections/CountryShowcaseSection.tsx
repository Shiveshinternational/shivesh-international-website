import Link from "next/link";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const countries = [
  { name: "United States", flag: "🇺🇸", region: "North America" },
  { name: "Canada", flag: "🇨🇦", region: "North America" },
  { name: "Mexico", flag: "🇲🇽", region: "North America" },
  { name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { name: "Germany", flag: "🇩🇪", region: "Europe" },
  { name: "France", flag: "🇫🇷", region: "Europe" },
  { name: "Spain", flag: "🇪🇸", region: "Europe" },
  { name: "United Arab Emirates", flag: "🇦🇪", region: "Middle East" },
  { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { name: "Japan", flag: "🇯🇵", region: "Asia" },
  { name: "Singapore", flag: "🇸🇬", region: "Asia" },
  { name: "Australia", flag: "🇦🇺", region: "Oceania" },
];

export default function CountryShowcaseSection() {
  return (
    <section
      id="global-markets"
      className="relative overflow-hidden bg-[#F3EEE4] px-5 py-20 text-[#173B2A] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* =================================================
          BACKGROUND ATMOSPHERE
      ================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[420px] w-[420px] rounded-full bg-[#C9A962]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-[#173B2A]/[0.04] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/28 to-transparent"
      />

      <RevealOnScroll>
        <div className="relative mx-auto max-w-[1500px]">
          {/* =================================================
              SECTION HEADER
          ================================================= */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <StaggerItem delay={0}>
                <div className="flex items-center gap-4">
                  <span className="h-px w-16 bg-[#C9A962]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#B68B32]">
                    Global Market Presence
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={100}>
                <h2 className="mt-7 max-w-[900px] font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,4.8vw,4.9rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#12382A]">
                  Natural Products for
<span className="mt-1 block text-[#A97B22]">
  International Export Markets.
</span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={200}>
                <p className="mt-6 max-w-[780px] text-[16px] font-light leading-[1.9] text-[#4C5F54] sm:text-[17px]">
  We connect Natural Henna Powder, Natural Indigo Powder,
  botanical hair colours, Ayurvedic Indian Herbs and Indian
  Spices with importers, distributors, wholesalers, salons and
  private-label buyers across North America, Europe, the Middle
  East and Asia Pacific.
</p>
              </StaggerItem>

              <StaggerItem delay={250}>
                <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#173B2A]/45">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    North America
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    Europe
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    Middle East
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A962]" />
                    Asia Pacific
                  </span>
                </div>
              </StaggerItem>
            </div>

            <StaggerItem delay={280}>
              <Link
                href="/export"
                className="group inline-flex shrink-0 items-center justify-center gap-4 border border-[#C9A962] bg-[#C9A962] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#12382A] shadow-[0_14px_35px_rgba(201,169,98,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68]"
              >
                Explore Export Markets

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </StaggerItem>
          </div>

          {/* =================================================
              GLOBAL MARKET GRID
          ================================================= */}
          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#C9A962]/22 bg-[#D8CDBB]/35">
            <div className="grid auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {countries.map((country, index) => (
                <StaggerItem
                  key={country.name}
                  delay={340 + (index % 6) * 55}
                >
                  <article className="group relative flex h-full min-h-[185px] flex-col justify-between border-b border-r border-[#173B2A]/8 bg-[#F5F0E6]/78 p-5 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:bg-[#FBF8F1] hover:shadow-[0_18px_45px_rgba(20,50,38,0.10)]">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[34px] leading-none transition-transform duration-500 group-hover:scale-110">
                        {country.flag}
                      </span>

                      <span className="text-[9px] font-bold tracking-[0.18em] text-[#A97B22]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div className="mt-8">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-7 bg-[#C9A962]/75" />
                        <span className="h-1 w-1 rotate-45 bg-[#C9A962]" />
                      </div>

                      <h3 className="font-[family-name:var(--font-playfair)] text-[20px] font-semibold leading-tight text-[#173B2A]">
                        {country.name}
                      </h3>

                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.21em] text-[#4C5F54]/48">
                        {country.region}
                      </p>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}
          <StaggerItem delay={760}>
            <div className="mt-10 grid items-center gap-6 border-t border-[#173B2A]/10 pt-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A97B22]">
                  International Business Reach
                </p>

                <p className="mt-3 max-w-[900px] text-[13px] font-light leading-7 text-[#4C5F54]/70">
  The countries shown represent key export markets and buyer
  destinations for our natural product portfolio. Actual supply
  destinations may vary according to product category, buyer
  arrangements and commercial requirements.
</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden h-px w-12 bg-[#C9A962]/35 md:block" />

                <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.28em] text-[#173B2A]/40">
                  Natural Products from India
                </span>
              </div>
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}