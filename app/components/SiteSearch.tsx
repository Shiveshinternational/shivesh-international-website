"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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

const frenchSearchLabels: Record<string, string> = {
  "Natural Henna Powder": "Poudre de henné naturel",
  "Natural Indigo Powder": "Poudre d’indigo naturel",
  "Natural Henna Hair Colors": "Colorations capillaires naturelles au henné",
  "Henna-Based Hair Colors": "Colorations capillaires à base de henné",
  "Ayurvedic Indian Herbs": "Plantes ayurvédiques indiennes",
  "Indian Spices": "Épices indiennes",
  Infrastructure: "Infrastructure",
  Certifications: "Certifications",
  Export: "Export",
  Contact: "Contact",
  "Amla Powder": "Poudre d’amla",
  "Ashwagandha Powder": "Poudre d’ashwagandha",
  "Brahmi Powder": "Poudre de brahmi",
  "Bhringraj Powder": "Poudre de bhringraj",
  "Hibiscus Powder": "Poudre d’hibiscus",
  "Moringa Powder": "Poudre de moringa",
  "Neem Leaves Powder": "Poudre de feuilles de neem",
  "Shikakai Powder": "Poudre de shikakai",
  "Soapnut Powder": "Poudre de noix de lavage",
  "Tulsi Leaf Powder": "Poudre de feuilles de tulsi",
  "Turmeric Powder": "Poudre de curcuma",
  "Wheatgrass Powder": "Poudre d’herbe de blé",
  "Black Pepper Powder": "Poivre noir moulu",
  "Cardamom Powder": "Cardamome moulue",
  "Cinnamon Powder": "Cannelle moulue",
  "Clove Powder": "Clou de girofle moulu",
  "Coriander Seeds Powder": "Graines de coriandre moulues",
  "Cumin Seeds Powder": "Graines de cumin moulues",
  "Red Chilli Powder": "Piment rouge moulu",
  "Whole Black Pepper": "Poivre noir entier",
  "Whole Cardamom": "Cardamome entière",
  "Whole Red Chilli": "Piment rouge entier",
  "Cinnamon Stick": "Bâton de cannelle",
};

const frenchShadeNames: Record<string, string> = {
  Black: "noir", "Dark Brown": "brun foncé", "Medium Brown": "brun moyen",
  Brown: "brun", "Light Brown": "brun clair", "Golden Brown": "brun doré",
  "Copper Brown": "brun cuivré", Chestnut: "châtain", Mahogany: "acajou",
  Burgundy: "bordeaux", "Wine Red": "rouge vin", Red: "rouge", Auburn: "auburn",
  Orange: "orange", Blonde: "blond", "Ginger Blonde": "blond vénitien",
  "Strawberry Blonde": "blond fraise",
};

const frenchCategories: Record<string, string> = {
  Product: "Produit",
  "Product Category": "Catégorie de produits",
  Company: "Entreprise",
  "Natural Henna Hair Color": "Coloration capillaire naturelle au henné",
  "Henna-Based Hair Color": "Coloration capillaire à base de henné",
  "Ayurvedic Indian Herb": "Plante ayurvédique indienne",
  "Indian Spice": "Épice indienne",
};

function localizeSearchItem(item: SearchItem, isFrench: boolean): SearchItem {
  if (!isFrench) return item;

  let label = frenchSearchLabels[item.label] ?? item.label;
  const naturalShade = item.label.match(/^Natural (.+) Henna Hair Color$/);
  const hennaShade = item.label.match(/^(.+) Henna$/);

  if (naturalShade) {
    label = `Coloration capillaire naturelle au henné ${frenchShadeNames[naturalShade[1]] ?? naturalShade[1]}`;
  } else if (hennaShade) {
    label = `Henné ${frenchShadeNames[hennaShade[1]] ?? hennaShade[1]}`;
  } else if (item.label === "Natural Henna Hair Treatment") {
    label = "Soin capillaire naturel au henné";
  }

  return { ...item, label, category: frenchCategories[item.category] ?? item.category };
}

export default function SiteSearch() {
  const generatedId = useId();
  const inputId = `site-search-${generatedId}`;
  const pathname = usePathname();
  const isGerman = pathname.startsWith("/de/");
  const isFrench = pathname.startsWith("/fr/");
  const isSpanish = pathname.startsWith("/es/");
  const isItalian = pathname.startsWith("/it/");
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
    const localizedItems = searchItems.map((item) =>
      localizeSearchItem(item, isFrench),
    );

    if (!normalizedQuery) {
      return localizedItems.slice(0, 8);
    }

    return localizedItems
      .filter((item) =>
        `${item.label} ${item.category}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 12);
  }, [isFrench, query]);

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A962]/35 bg-[#173b2a]/65 text-[#F5F0E6] transition-all duration-300 hover:border-[#C9A962] hover:text-[#C9A962]"
        aria-label={isGerman ? "Website durchsuchen" : isFrench ? "Rechercher sur le site" : isSpanish ? "Buscar en el sitio" : isItalian ? "Cerca nel sito" : "Search website"}
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
                id={inputId}
                name="site-search"
                aria-label={isGerman ? "Website durchsuchen" : isFrench ? "Rechercher sur le site" : isSpanish ? "Buscar en el sitio" : isItalian ? "Cerca nel sito" : "Search website"}
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={isGerman ? "Produkte, Farbtöne, Kräuter oder Gewürze suchen …" : isFrench ? "Rechercher des produits, teintes, plantes ou épices…" : isSpanish ? "Buscar productos, tonos, plantas o especias…" : isItalian ? "Cerca prodotti, tonalità, erbe o spezie…" : "Search products, shades, herbs or spices..."}
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
                  {isGerman ? "Kein passendes Produkt gefunden" : isFrench ? "Aucun produit correspondant" : isSpanish ? "No se encontró ningún producto" : isItalian ? "Nessun prodotto corrispondente" : "No matching product found"}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#F5F0E6]/50">
                  {isGerman ? "Versuchen Sie einen anderen Produkt-, Farbton-, Kräuter- oder Gewürznamen." : isFrench ? "Essayez un autre nom de produit, de teinte, de plante ou d’épice." : isSpanish ? "Pruebe otro nombre de producto, tono, planta o especia." : isItalian ? "Provate un altro nome di prodotto, tonalità, erba o spezia." : "Try another product, shade, herb or spice name."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
