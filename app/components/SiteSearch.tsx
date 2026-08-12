"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type SearchItem = {
  label: string;
  category: string;
  href: string;
};

const searchItems: SearchItem[] = [
  { label: "Natural Henna Powder", category: "Product", href: "/products/natural-henna-powder" },
  { label: "Natural Indigo Powder", category: "Product", href: "/products/natural-indigo-powder" },
  { label: "Natural Henna Hair Colors", category: "Product Category", href: "/products/natural-henna-hair-colors" },
  { label: "Henna-Based Hair Colors", category: "Product Category", href: "/products/henna-based-hair-colors" },
  { label: "Ayurvedic Indian Herbs", category: "Product Category", href: "/products/ayurvedic-indian-herbs" },
  { label: "Indian Spices", category: "Product Category", href: "/products/indian-spices" },
  { label: "Infrastructure", category: "Company", href: "/infrastructure" },
  { label: "Certifications", category: "Company", href: "/certifications" },
  { label: "Export", category: "Company", href: "/export" },
  { label: "Contact", category: "Company", href: "/contact" },

  ...[
    "Natural Black Henna Hair Color",
    "Natural Dark Brown Henna Hair Color",
    "Natural Medium Brown Henna Hair Color",
    "Natural Brown Henna Hair Color",
    "Natural Light Brown Henna Hair Color",
    "Natural Golden Brown Henna Hair Color",
    "Natural Copper Brown Henna Hair Color",
    "Natural Chestnut Henna Hair Color",
    "Natural Mahogany Henna Hair Color",
    "Natural Burgundy Henna Hair Color",
    "Natural Wine Red Henna Hair Color",
    "Natural Red Henna Hair Color",
    "Natural Auburn Henna Hair Color",
    "Natural Orange Henna Hair Color",
    "Natural Blonde Henna Hair Color",
    "Natural Ginger Blonde Henna Hair Color",
    "Natural Strawberry Blonde Henna Hair Color",
    "Natural Henna Hair Treatment",
  ].map((label) => ({
    label,
    category: "Natural Henna Hair Color",
    href: "/products/natural-henna-hair-colors#shade-collection",
  })),

  ...[
    "Black Henna",
    "Dark Brown Henna",
    "Medium Brown Henna",
    "Brown Henna",
    "Light Brown Henna",
    "Golden Brown Henna",
    "Copper Brown Henna",
    "Chestnut Henna",
    "Mahogany Henna",
    "Burgundy Henna",
    "Wine Red Henna",
    "Red Henna",
    "Auburn Henna",
    "Orange Henna",
    "Blonde Henna",
    "Ginger Blonde Henna",
  ].map((label) => ({
    label,
    category: "Henna-Based Hair Color",
    href: "/products/henna-based-hair-colors#shade-collection",
  })),

  ...[
    "Amla Powder",
    "Ashwagandha Powder",
    "Brahmi Powder",
    "Bhringraj Powder",
    "Hibiscus Powder",
    "Moringa Powder",
    "Neem Leaves Powder",
    "Shikakai Powder",
    "Soapnut Powder",
    "Tulsi Leaf Powder",
    "Turmeric Powder",
    "Wheatgrass Powder",
  ].map((label) => ({
    label,
    category: "Ayurvedic Indian Herb",
    href: "/products/ayurvedic-indian-herbs#herbs-collection",
  })),

  ...[
    "Black Pepper Powder",
    "Cardamom Powder",
    "Cinnamon Powder",
    "Clove Powder",
    "Coriander Seeds Powder",
    "Cumin Seeds Powder",
    "Red Chilli Powder",
    "Turmeric Powder",
    "Whole Black Pepper",
    "Whole Cardamom",
    "Whole Red Chilli",
    "Cinnamon Stick",
  ].map((label) => ({
    label,
    category: "Indian Spice",
    href: "/products/indian-spices#spices-collection",
  })),
];

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchItems.slice(0, 8);
    }

    return searchItems
      .filter((item) =>
        `${item.label} ${item.category}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 12);
  }, [query]);

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A962]/35 bg-[#173b2a]/65 text-[#F5F0E6] transition-all duration-300 hover:border-[#C9A962] hover:text-[#C9A962]"
        aria-label="Search website"
        aria-expanded={isOpen}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4.5 w-4.5"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+14px)] z-[120] w-[min(420px,calc(100vw-32px))] origin-top-right transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[24px] border border-[#C9A962]/25 bg-[#0b241a]/98 shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
          <div className="border-b border-[#C9A962]/15 p-4">
            <div className="flex items-center gap-3 rounded-[16px] border border-[#C9A962]/22 bg-[#102f23] px-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4.5 w-4.5 text-[#C9A962]"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products, shades, herbs or spices..."
                className="h-12 w-full bg-transparent text-sm text-[#F5F0E6] outline-none placeholder:text-[#F5F0E6]/35"
              />
            </div>
          </div>

          <div className="max-h-[420px] overflow-y-auto p-3 [scrollbar-color:#C9A962_#173b2a] [scrollbar-width:thin]">
            {results.length > 0 ? (
              results.map((item, index) => (
                <Link
                  key={`${item.label}-${index}`}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="group flex items-center justify-between gap-4 rounded-[15px] border border-transparent px-4 py-3 transition-all duration-300 hover:border-[#C9A962]/20 hover:bg-white/[0.04]"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#F5F0E6]/80 transition-colors group-hover:text-[#F5F0E6]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
                      {item.category}
                    </p>
                  </div>

                  <span className="text-[#C9A962] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))
            ) : (
              <div className="px-4 py-10 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F5F0E6]">
                  No matching product found
                </p>
                <p className="mt-2 text-sm leading-6 text-[#F5F0E6]/50">
                  Try another product, shade, herb or spice name.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}