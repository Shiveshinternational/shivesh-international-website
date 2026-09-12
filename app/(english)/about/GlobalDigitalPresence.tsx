import Image from "next/image";

// Original platform assets and their sources: public/images/marketplaces/SOURCES.md.
const marketplaces = [
  {
    platform: "ExportersIndia",
    logo: "/images/marketplaces/exportersindia-logo.svg",
    company: "Shivesh International",
    href: "https://www.exportersindia.com/shivesh-international/",
  },
  {
    platform: "ExportersIndia",
    logo: "/images/marketplaces/exportersindia-logo.svg",
    company: "Shymaa Naturals",
    href: "https://www.exportersindia.com/shymaa-naturals/",
  },
  {
    platform: "IndiaMART",
    logo: "/images/marketplaces/indiamart-logo.png",
    company: "Shivesh International",
    href: "https://www.indiamart.com/shiveshinternational/",
  },
  {
    platform: "TradeIndia",
    logo: "/images/marketplaces/tradeindia-logo.png",
    company: "Shivesh International",
    href: "https://www.tradeindia.com/shivesh-international-6624788/",
  },
] as const;

const socialProfiles = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/shivesh-international/" },
  { platform: "Facebook", href: "https://www.facebook.com/shiveshinternational" },
  { platform: "Instagram", href: "https://www.instagram.com/shiveshinternational/" },
] as const;

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0">
      <path d="M14 4h6v6M20 4 10 14M10 4H4v16h16v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: (typeof socialProfiles)[number]["platform"] }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor">
      {platform === "LinkedIn" && <path d="M5.2 7.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.4 9H7v12H3.4V9Zm5.8 0h3.5v1.6h.1c.5-1 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2V9Z" />}
      {platform === "Facebook" && <path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8v2.4H7V13h3.2v9H14Z" />}
      {platform === "Instagram" && <g fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></g>}
    </svg>
  );
}

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173b2a] motion-safe:transition-colors motion-safe:duration-200";

export default function GlobalDigitalPresence() {
  return (
    <section aria-labelledby="global-digital-presence-title" className="bg-[#f5f0e6] px-6 py-24 text-[#173b2a] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div aria-hidden="true" className="mb-7 h-[3px] w-16 bg-[#C9A962]" />
        <h2 id="global-digital-presence-title" className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
          Global Digital Presence
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
          Connect with Shivesh International across trusted B2B marketplaces, business directories and official social media channels.
        </p>

        <section aria-labelledby="digital-marketplaces-title" className="mt-12 rounded-[28px] border border-[#C9A962]/30 bg-[#102f23] p-6 text-[#F5F0E6] sm:p-8 lg:p-10">
          <h3 id="digital-marketplaces-title" className="text-xs font-bold uppercase leading-6 tracking-[0.24em] text-[#E4C878]">B2B Marketplaces</h3>
          <ul className="mt-7 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {marketplaces.map(({ platform, company, href, logo }) => (
              <li key={href} className="min-w-0">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${platform} — ${company} (opens in a new tab)`} className="group flex h-full flex-col rounded-xl border border-[#C9A962]/30 bg-white/[0.035] p-6 hover:border-[#C9A962] hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C878] motion-safe:transition-colors motion-safe:duration-200">
                  <span className="mb-6 flex h-24 shrink-0 items-center justify-center rounded-lg border border-[#C9A962]/30 bg-[#fffdf7] p-4">
                    <span className="relative block h-full w-full max-w-44">
                      <Image src={logo} alt={`${platform} logo`} fill unoptimized className="object-contain" />
                    </span>
                  </span>
                  <span className="text-xl font-semibold tracking-tight">{platform}</span>
                  <span className="mt-3 text-sm leading-6 text-[#F5F0E6]/80">{company}</span>
                  <span className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-medium text-[#E4C878]">
                    View profile <ExternalLinkIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <section aria-labelledby="digital-directory-title" className="min-w-0 border-t border-[#173b2a]/20 pt-7">
            <h3 id="digital-directory-title" className="text-xs font-bold uppercase leading-6 tracking-[0.24em]">Business Directory</h3>
            {/* Awaiting the verified public Justdial profile URL. Do not use a search or placeholder URL. */}
            <div className="mt-5 flex min-h-[70px] items-center rounded-xl border border-[#173b2a]/15 bg-[#ede5d7]/50 px-5 py-3">
              <p className="text-lg font-semibold">Justdial <span className="font-normal">— Shivesh International</span></p>
            </div>
          </section>

          <section aria-labelledby="digital-social-title" className="min-w-0 border-t border-[#173b2a]/20 pt-7">
            <h3 id="digital-social-title" className="text-xs font-bold uppercase leading-6 tracking-[0.24em]">Social Media</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {socialProfiles.map(({ platform, href }) => (
                <li key={platform} className="min-w-0">
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${platform} — Shivesh International (opens in a new tab)`} className={`flex h-full min-h-16 items-center gap-2 rounded-xl border border-[#173b2a]/20 px-3 py-4 hover:border-[#9f7f36] hover:bg-[#ede5d7] ${focusStyles}`}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C9A962]/40 bg-[#C9A962]/10">
                      <SocialIcon platform={platform} />
                    </span>
                    <span className="flex-1 text-sm font-semibold">{platform}</span>
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
