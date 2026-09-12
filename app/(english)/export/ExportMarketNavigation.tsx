"use client";

import Link from "next/link";
import { useState } from "react";

const markets = [
  {
    id: "europe",
    name: "Europe",
    href: "/export/europe",
    countries: [
      { name: "Germany", href: "/export/germany" },
      { name: "Italy", href: "/export/italy" },
      { name: "Spain", href: "/export/spain" },
      { name: "France", href: "/export/france" },
      { name: "Austria", href: "/export/austria" },
      { name: "Finland", href: "/export/finland" },
      { name: "Netherlands", href: "/export/netherlands" },
      { name: "Belgium", href: "/export/belgium" },
      { name: "Poland", href: "/export/poland" },
      { name: "Norway", href: "/export/norway" },
    ],
  },
  {
    id: "asia-pacific",
    name: "Asia-Pacific",
    href: "/export/asia-pacific",
    countries: [
      { name: "China", href: "/export/china" },
      { name: "Taiwan", href: "/export/taiwan" },
      { name: "South Korea", href: "/export/south-korea" },
      { name: "Thailand", href: "/export/thailand" },
      { name: "Vietnam", href: "/export/vietnam" },
      { name: "Singapore", href: "/export/singapore" },
      { name: "Australia", href: "/export/australia" },
      { name: "Japan", href: "/export/japan" },
      { name: "New Zealand", href: "/export/new-zealand" },
    ],
  },
  { name: "USA", href: "/export/usa" },
  {
    id: "latin-america",
    name: "Latin America",
    href: null,
    countries: [
      { name: "Brazil", href: "/export/brazil" },
      { name: "Argentina", href: "/export/argentina" },
    ],
  },
  { name: "UK", href: "/export/uk" },
  { name: "UAE", href: "/export/uae" },
] as const;

const primaryClassName = "inline-flex min-h-14 w-full items-center justify-between gap-4 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-left text-[10px] font-bold uppercase tracking-[0.2em] text-[#102F23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D8BB68] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102F23] max-[399px]:min-h-16 motion-reduce:transition-none";
const focusClassName = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102F23]";

export default function ExportMarketNavigation() {
  const [openRegion, setOpenRegion] = useState<Extract<(typeof markets)[number], { id: string }>["id"] | null>(null);

  return (
    <nav aria-label="Explore export markets" className="mt-8 grid gap-4">
      {markets.map((region) => {
        if (!("countries" in region)) {
          return (
            <Link key={region.href} href={region.href} className={primaryClassName}>
              <span>Explore Export to {region.name}</span>
              <span aria-hidden="true" className="shrink-0">→</span>
            </Link>
          );
        }

        const isOpen = openRegion === region.id;
        const buttonId = `export-${region.id}-toggle`;
        const panelId = `export-${region.id}-countries`;

        return (
          <div key={region.id} className="min-w-0">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenRegion(isOpen ? null : region.id)}
              className={`${primaryClassName} cursor-pointer`}
            >
              <span>Explore Export to {region.name}</span>
              <span aria-hidden="true" className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-90" : "rotate-0"}`}>→</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="mt-3 border border-[#C9A962]/35 bg-[#ede5d7]/60 p-4 sm:p-5">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {region.countries.map((country) => (
                      <li key={country.href} className="min-w-0">
                        <Link href={country.href} className={`flex min-h-11 h-full items-center justify-between gap-3 border border-[#173B2A]/20 bg-[#f5f0e6] px-4 py-3 text-xs font-semibold text-[#173B2A] transition-colors hover:border-[#9f7f36] hover:bg-[#fffdf7] motion-reduce:transition-none ${focusClassName}`}>
                          <span>{country.name}</span>
                          <span aria-hidden="true" className="shrink-0 text-[#9f7f36]">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {region.href && <Link href={region.href} className={`mt-4 flex min-h-11 items-center justify-between gap-3 border-t border-[#173B2A]/15 pt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#173B2A] hover:underline ${focusClassName}`}>
                    <span>View {region.name} Overview</span>
                    <span aria-hidden="true" className="shrink-0">→</span>
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
