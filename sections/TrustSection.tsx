import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const trustItems = [
  {
    value: "30+",
    eyebrow: "Legacy",
    title: "Years of Experience",
    text: "Long-standing expertise in henna powder manufacturing, botanical sourcing and international exports.",
  },
  {
    value: "800+",
    eyebrow: "Sourcing",
    title: "Farmer Network",
    text: "A broad network of growers and sourcing partners supporting dependable bulk raw-material supply.",
  },
  {
    value: "50+",
    eyebrow: "Global",
    title: "Export Countries",
    text: "Serving importers, distributors, wholesalers and professional buyers across international markets.",
  },
  {
    value: "OEM",
    eyebrow: "Private Label",
    title: "Buyer-Focused Support",
    text: "OEM branding, custom packaging and private-label manufacturing support for global product brands.",
  },
  {
    value: "QC",
    eyebrow: "Quality",
    title: "Quality Assurance",
    text: "Controlled processing, inspection and documentation focused on consistent export-quality products.",
  },
  {
    value: "EX",
    eyebrow: "Export",
    title: "Documentation Support",
    text: "Professional support for export documentation, international shipments and buyer-specific requirements.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#0B3325] px-5 py-16 text-[#F5F0E6] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-[#C9A962]/[0.045] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/35 to-transparent"
      />

      <RevealOnScroll>
        <div className="relative mx-auto max-w-[1500px]">
          {/* =================================================
              SECTION HEADER
          ================================================= */}
          <div className="mx-auto max-w-[850px] text-center">
            <StaggerItem delay={0}>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A962]/70" />

                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A962]">
                  Why Global Buyers Choose Us
                </p>

                <span className="h-px w-10 bg-[#C9A962]/70" />
              </div>
            </StaggerItem>

            <StaggerItem delay={100}>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-[clamp(2.1rem,4vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.025em] text-[#F7F1E7]">
                Experience, Reliability
                <span className="block bg-gradient-to-r from-[#F7F1E7] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  and Export Confidence
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={150}>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#F5F0E6]/58 sm:text-[15px]">
  Dependable sourcing, export-quality processing and professional
  support for bulk, wholesale and private-label buyers worldwide.
</p>
            </StaggerItem>
          </div>

          {/* =================================================
              TRUST CARDS
          ================================================= */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#C9A962]/16 bg-[#C9A962]/14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {trustItems.map((item, index) => (
              <StaggerItem
                key={item.title}
                delay={220 + index * 65}
              >
                <article className="group relative h-full min-h-[245px] overflow-hidden bg-[#0D3828] px-5 py-7 text-left transition-all duration-500 hover:bg-[#123F2E]">
                  {/* Gold hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#C9A962]/0 blur-3xl transition-all duration-500 group-hover:bg-[#C9A962]/10"
                  />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C9A962]/68">
                      {item.eyebrow}
                    </span>

                    <span className="font-[family-name:var(--font-playfair)] text-[28px] font-semibold leading-none text-[#E4C878] transition-transform duration-500 group-hover:-translate-y-1">
                      {item.value}
                    </span>
                  </div>

                  {/* Gold line */}
                  <div className="relative mt-7 flex items-center gap-2">
                    <span className="h-px w-8 bg-[#C9A962]/75" />
                    <span className="h-1 w-1 rotate-45 bg-[#C9A962]/70" />
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 font-[family-name:var(--font-playfair)] text-[19px] font-medium leading-tight text-[#F7F1E7]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-[12px] font-light leading-[1.75] text-[#F5F0E6]/50 transition-colors duration-500 group-hover:text-[#F5F0E6]/68">
                    {item.text}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </StaggerItem>
            ))}
          </div>

          {/* =================================================
              BOTTOM MICRO STATEMENT
          ================================================= */}
          <StaggerItem delay={650}>
            <div className="mt-8 flex items-center justify-center gap-4 text-center">
              <span className="hidden h-px w-16 bg-[#C9A962]/25 sm:block" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F5F0E6]/38">
                Bulk Supply · OEM Private Label · Worldwide Export Support
              </p>

              <span className="hidden h-px w-16 bg-[#C9A962]/25 sm:block" />
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}