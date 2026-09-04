"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ProductCategoryKey =
  | "henna"
  | "indigo"
  | "natural-colors"
  | "henna-based-colors"
  | "herbs"
  | "spices";

type MenuItem = {
  label: string;
  href: string;
  image?: string;
};

type ProductCategory = {
  key: ProductCategoryKey;
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  countLabel: string;
  bannerImage: string;
  featuredItems: MenuItem[];
  items: MenuItem[];
};

const naturalHennaHairColors: MenuItem[] = [
  ["Natural Black Henna Hair Color", "01-natural-black-henna-hair-color-final.png"],
  ["Natural Dark Brown Henna Hair Color", "02-natural-dark-brown-henna-hair-color-final.png"],
  ["Natural Medium Brown Henna Hair Color", "03-natural-medium-brown-henna-hair-color-final.png"],
  ["Natural Brown Henna Hair Color", "04-natural-brown-henna-hair-color-final.png"],
  ["Natural Light Brown Henna Hair Color", "05-natural-light-brown-henna-hair-color-final.png"],
  ["Natural Golden Brown Henna Hair Color", "06-natural-golden-brown-henna-hair-color-final.png"],
  ["Natural Copper Brown Henna Hair Color", "07-natural-copper-brown-henna-hair-color-final.png"],
  ["Natural Chestnut Henna Hair Color", "08-natural-chestnut-henna-hair-color-final.png"],
  ["Natural Mahogany Henna Hair Color", "09-natural-mahogany-henna-hair-color-final.png"],
  ["Natural Burgundy Henna Hair Color", "10-natural-burgundy-henna-hair-color-final.png"],
  ["Natural Wine Red Henna Hair Color", "11-natural-wine-red-henna-hair-color-final.png"],
  ["Natural Red Henna Hair Color", "12-natural-red-henna-hair-color-final.png"],
  ["Natural Auburn Henna Hair Color", "13-natural-auburn-henna-hair-color-final.png"],
  ["Natural Orange Henna Hair Color", "14-natural-orange-henna-hair-color-final.png"],
  ["Natural Blonde Henna Hair Color", "15-natural-blonde-henna-hair-color-final.png"],
  ["Natural Ginger Blonde Henna Hair Color", "16-natural-ginger-blonde-henna-hair-color-final.png"],
  ["Natural Strawberry Blonde Henna Hair Color", "17-natural-strawberry-blonde-henna-hair-color-final.png"],
  ["Natural Henna Hair Treatment", "18-natural-henna-hair-treatment-final.png"],
].map(([label, fileName]) => ({
  label,
  href: "/products/natural-henna-hair-colors#shade-collection",
  image: `/images/products/henna-hair-colors/${fileName}`,
}));

const hennaBasedHairColors: MenuItem[] = [
  ["Black Henna", "black-henna-final-v1.png"],
  ["Dark Brown Henna", "dark-brown-henna-final-v1.png"],
  ["Medium Brown Henna", "medium-brown-henna-final-v1.png"],
  ["Brown Henna", "brown-henna-final-v1.png"],
  ["Light Brown Henna", "light-brown-henna-final-v1.png"],
  ["Golden Brown Henna", "golden-brown-henna-final-v1.png"],
  ["Copper Brown Henna", "copper-brown-henna-final-v1.png"],
  ["Chestnut Henna", "chestnut-henna-final-v1.png"],
  ["Mahogany Henna", "mahogany-henna-final-v1.png"],
  ["Burgundy Henna", "burgundy-henna-final-v1.png"],
  ["Wine Red Henna", "wine-red-henna-final-v1.png"],
  ["Red Henna", "red-henna-final-v1.png"],
  ["Auburn Henna", "auburn-henna-final-v1.png"],
  ["Orange Henna", "orange-henna-final-v1.png"],
  ["Blonde Henna", "blonde-henna-final-v1.png"],
  ["Ginger Blonde Henna", "ginger-blonde-henna-final-v1.png"],
].map(([label, fileName]) => ({
  label,
  href: "/products/henna-based-hair-colors#shade-collection",
  image: `/images/products/henna-based-hair-colors/${fileName}`,
}));

const herbNames = [
  "Adusa Powder",
  "Aloe Vera Powder",
  "Amba Haldi Powder",
  "Amla Powder",
  "Arjuna Bark Powder",
  "Ashoka Bark Powder",
  "Ashwagandha Powder",
  "Babool Seed Powder",
  "Baheda Powder",
  "Barley Grass Powder",
  "Basil Seeds Powder",
  "Bay Leaf Powder",
  "Beetroot Powder",
  "Baelgiri Powder",
  "Bhringraj Powder",
  "Bhumi Amla Powder",
  "Bitter Gourd Powder",
  "Bottle Gourd Powder",
  "Brahmi Powder",
  "Chia Seeds Powder",
  "Cinnamon Powder",
  "Curry Leaf Powder",
  "Fenugreek Seed Powder",
  "Flaxseeds Powder",
  "Ginger Powder",
  "Ginseng Powder",
  "Gokhru Powder",
  "Gond Katira Powder",
  "Guava Leaf Powder",
  "Gudmar Powder",
  "Harad Powder",
  "Hibiscus Powder",
  "Jamun Powder",
  "Jatamansi Powder",
  "Kalmegh Powder",
  "Kalonji Powder",
  "Kapur Kachri Powder",
  "Kapur Sugandhi Powder",
  "Kasturi Manjal Powder",
  "Khas Powder",
  "Lemon Peel Powder",
  "Licorice Powder",
  "Lodhra Powder",
  "Lotus Powder",
  "Mango Kernel Powder",
  "Manjistha Powder",
  "Methi Seeds Powder",
  "Mint Leaf Powder",
  "Moringa Powder",
  "Multani Mitti Powder",
  "Nagarmotha Powder",
  "Neem Giloy Powder",
  "Neem Leaves Powder",
  "Orange Peel Powder",
  "Papaya Leaf Powder",
  "Pomegranate Peel Powder",
  "Pomegranate Powder",
  "Punarnava Powder",
  "Ratanjot Powder",
  "Rose Petal Powder",
  "Shankhpushpi Powder",
  "Shatavari Powder",
  "Shikakai Powder",
  "Soapnut Powder",
  "Soapnut Shell Powder",
  "Spirulina Powder",
  "Stevia Powder",
  "Triphala Powder",
  "Tulsi Leaf Powder",
  "Turmeric Powder",
  "Wheatgrass Powder",
  "Katha Powder",
];

const herbImageMap: Record<string, string> = {
  "Ashoka Bark Powder": "AshoKa Bark Powder.png",
  "Baelgiri Powder": "Belgiri Powder.png",
  "Kasturi Manjal Powder": "Kasturi Munjal Powder.png",
  "Mango Kernel Powder": "Mangi Kernel Powder.png",
  "Pomegranate Peel Powder": "Pomegranate Plee Powder.png",
  "Pomegranate Powder": "Pomegrante Powder.png",
  "Shankhpushpi Powder": "Shankpushpi Powder.png",
  "Wheatgrass Powder": "Wheat grass Powder.png",
  "Katha Powder": "katha powder.png",
};

const ayurvedicHerbs: MenuItem[] = herbNames.map((label) => ({
  label,
  href: "/products/ayurvedic-indian-herbs#herbs-collection",
  image: `/images/products/ayurvedic-herbs/${
    herbImageMap[label] ?? `${label}.png`
  }`,
}));

const spiceNames = [
  "Black Pepper Powder",
  "Cardamom Powder",
  "Cinnamon Powder",
  "Clove Powder",
  "Coriander Seeds Powder",
  "Cumin Seeds Powder",
  "Dry Garlic Powder",
  "Dry Ginger Powder",
  "Fennel Seeds Powder",
  "Fenugreek Seeds Powder",
  "Red Chilli Powder",
  "Turmeric Powder",
  "Turmeric Finger",
  "Whole Black Pepper",
  "Whole Cardamom",
  "Whole Clove",
  "Whole Coriander Seeds",
  "Whole Cumin Seeds",
  "Whole Dry Garlic",
  "Whole Dry Ginger",
  "Whole Fennel Seeds",
  "Whole Fenugreek Seeds",
  "Whole Red Chilli",
  "Cinnamon Stick",
];

const spiceImageMap: Record<string, string> = {
  "Whole Cardamom": "Whole Cardamon.png",
};

const indianSpices: MenuItem[] = spiceNames.map((label) => ({
  label,
  href: "/products/indian-spices#spices-collection",
  image: `/images/products/indian-spices/${
    spiceImageMap[label] ?? `${label}.png`
  }`,
}));

const productCategories: ProductCategory[] = [
  {
    key: "henna",
    label: "Natural Henna Powder",
    href: "/products/natural-henna-powder",
    eyebrow: "Single Flagship Product",
    countLabel: "1 Product",
    bannerImage: "/images/products/henna-powder/natural-henna-powder-premium-box-v2.png",
    description:
      "Premium triple-sifted Natural Henna Powder prepared for professional, retail and private-label markets.",
    featuredItems: [],
    items: [],
  },
  {
    key: "indigo",
    label: "Natural Indigo Powder",
    href: "/products/natural-indigo-powder",
    eyebrow: "Single Flagship Product",
    countLabel: "1 Product",
    bannerImage: "/images/products/natural-indigo-powder/natural-indigo-powder-premium-box-v2.png",
    description:
      "Premium Natural Indigo Powder prepared from Indigofera tinctoria for international hair-colour markets.",
    featuredItems: [],
    items: [],
  },
  {
    key: "natural-colors",
    label: "Natural Henna Hair Colors",
    href: "/products/natural-henna-hair-colors",
    eyebrow: "Premium Botanical Collection",
    countLabel: "18 Shades",
    bannerImage:
      "/images/products/henna-hair-colors/natural-henna-hair-colors-hero-final-v1.png",
    description:
      "A coordinated botanical hair-colour collection for professional salons, retail brands and private-label buyers.",
    featuredItems: [
      naturalHennaHairColors[0],
      naturalHennaHairColors[1],
      naturalHennaHairColors[5],
      naturalHennaHairColors[9],
      naturalHennaHairColors[14],
      naturalHennaHairColors[16],
    ],
    items: naturalHennaHairColors,
  },
  {
    key: "henna-based-colors",
    label: "Henna-Based Hair Colors",
    href: "/products/henna-based-hair-colors",
    eyebrow: "Professional Hair Dye Collection",
    countLabel: "16 Shades",
    bannerImage:
      "/images/products/henna-based-hair-colors/henna-based-hair-colors-hero-final-v2.png",
    description:
      "Performance-focused Henna-Based Hair Colors developed for grey coverage, salon use and commercial retail markets.",
    featuredItems: [
      hennaBasedHairColors[0],
      hennaBasedHairColors[1],
      hennaBasedHairColors[5],
      hennaBasedHairColors[9],
      hennaBasedHairColors[12],
      hennaBasedHairColors[15],
    ],
    items: hennaBasedHairColors,
  },
  {
    key: "herbs",
    label: "Ayurvedic Indian Herbs",
    href: "/products/ayurvedic-indian-herbs",
    eyebrow: "Traditional Herbal Product Portfolio",
    countLabel: `${ayurvedicHerbs.length} Products`,
    bannerImage:
      "/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png",
    description:
      "A broad portfolio of Ayurvedic Indian Herbs and herbal powders for commercial and international markets.",
    featuredItems: [
      ayurvedicHerbs.find((item) => item.label === "Amla Powder")!,
      ayurvedicHerbs.find((item) => item.label === "Ashwagandha Powder")!,
      ayurvedicHerbs.find((item) => item.label === "Brahmi Powder")!,
      ayurvedicHerbs.find((item) => item.label === "Hibiscus Powder")!,
      ayurvedicHerbs.find((item) => item.label === "Moringa Powder")!,
      ayurvedicHerbs.find((item) => item.label === "Shikakai Powder")!,
    ],
    items: ayurvedicHerbs,
  },
  {
    key: "spices",
    label: "Indian Spices Range",
    href: "/products/indian-spices",
    eyebrow: "Whole & Powder Spice Portfolio",
    countLabel: `${indianSpices.length} Products`,
    bannerImage: "/images/products/indian-spices/indian-spices-hero-final-v1.png",
    description:
      "A premium Indian spice portfolio supplied in powder and whole forms for global buyers.",
    featuredItems: [
      indianSpices.find((item) => item.label === "Red Chilli Powder")!,
      indianSpices.find((item) => item.label === "Turmeric Powder")!,
      indianSpices.find((item) => item.label === "Black Pepper Powder")!,
      indianSpices.find((item) => item.label === "Cardamom Powder")!,
      indianSpices.find((item) => item.label === "Whole Black Pepper")!,
      indianSpices.find((item) => item.label === "Whole Cardamom")!,
    ],
    items: indianSpices,
  },
];

export default function ProductMegaMenu() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategoryKey>("natural-colors");

  const activeProduct = useMemo(
    () =>
      productCategories.find((category) => category.key === activeCategory) ??
      productCategories[0],
    [activeCategory],
  );

  const columnsClass =
    activeProduct.key === "herbs" || activeProduct.key === "spices"
      ? "grid-cols-3"
      : "grid-cols-2";

  return (
    <div className="group/mega relative">
      <Link
        href="/#products"
        className="relative inline-flex items-center gap-2 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f0e6]/80 transition duration-300 hover:text-[#f5f0e6]"
      >
        Products

        <span className="text-[10px] text-[#C9A962] transition-transform duration-300 group-hover/mega:rotate-180">
          ▾
        </span>

        <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#C9A962] transition-transform duration-300 group-hover/mega:scale-x-100" />
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full z-[80] w-[min(1280px,calc(100vw-40px))] -translate-x-1/2 translate-y-5 scale-[0.985] opacity-0 transition-all duration-300 ease-out group-hover/mega:pointer-events-auto group-hover/mega:translate-y-0 group-hover/mega:scale-100 group-hover/mega:opacity-100">
        <div className="pt-4">
          <div className="overflow-hidden rounded-[30px] border border-[#C9A962]/28 bg-[#0b241a]/98 shadow-[0_35px_120px_rgba(0,0,0,0.52)] backdrop-blur-2xl">
            <div className="grid min-h-[650px] grid-cols-[330px_1fr]">
              {/* LEFT CATEGORY PANEL */}
              <div className="border-r border-[#C9A962]/15 bg-[#102f23] p-5">
                <div className="mb-5 px-4 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A962]">
                    Product Categories
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#F5F0E6]/55">
                    Hover over a category to explore its product portfolio.
                  </p>
                </div>

                <div className="space-y-2">
                  {productCategories.map((category) => {
                    const isActive = category.key === activeProduct.key;

                    return (
                      <div
                        key={category.key}
                        onMouseEnter={() => setActiveCategory(category.key)}
                        className={`relative overflow-hidden rounded-[18px] border transition-all duration-300 ${
                          isActive
                            ? "border-[#C9A962]/55 bg-[#173b2a] shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
                            : "border-transparent hover:border-[#C9A962]/25 hover:bg-white/[0.04]"
                        }`}
                      >
                        <Link
                          href={category.href}
                          className="flex items-center justify-between gap-4 px-4 py-4"
                        >
                          <div>
                            <p
                              className={`text-sm font-semibold transition-colors ${
                                isActive
                                  ? "text-[#F5F0E6]"
                                  : "text-[#F5F0E6]/75"
                              }`}
                            >
                              {category.label}
                            </p>

                            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A962]">
                              {category.countLabel}
                            </p>
                          </div>

                          <span
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "translate-x-1 text-[#E4C878]"
                                : "text-[#F5F0E6]/25"
                            }`}
                          >
                            →
                          </span>
                        </Link>

                        {isActive && (
                          <span className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-[#C9A962]" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[20px] border border-[#C9A962]/18 bg-white/[0.035] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A962]">
                    Buyer Support
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#F5F0E6]/50">
                    Retail, bulk export, OEM, ODM and private-label solutions.
                  </p>
                </div>
              </div>

              {/* RIGHT LUXURY PANEL */}
              <div className="relative overflow-hidden bg-[#0b241a] p-7">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C9A962]/9 blur-[110px]" />
                <div className="absolute -bottom-36 left-1/4 h-72 w-72 rounded-full bg-[#C9A962]/5 blur-[110px]" />

                <div className="relative grid grid-cols-[1.15fr_0.85fr] gap-6">
                  {/* CATEGORY INTRO */}
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A962]">
                          {activeProduct.eyebrow}
                        </p>

                        <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#F5F0E6]">
                          {activeProduct.label}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#F5F0E6]/58">
                          {activeProduct.description}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full border border-[#C9A962]/35 bg-[#173b2a] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E4C878]">
                        {activeProduct.countLabel}
                      </span>
                    </div>

                    <Link
                      href={activeProduct.href}
                      className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#C9A962]/45 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E4C878] transition-all duration-300 hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#102f23]"
                    >
                      View Complete Collection
                      <span>→</span>
                    </Link>
                  </div>

                  {/* CATEGORY BANNER */}
                  <Link
                    href={activeProduct.href}
                    className="group/banner relative min-h-[185px] overflow-hidden rounded-[24px] border border-[#C9A962]/24 bg-[#173b2a]"
                  >
                    <Image
                      src={activeProduct.bannerImage}
                      alt={activeProduct.label}
                      fill
                      sizes="380px"
                      className="object-cover object-center transition-transform duration-1000 group-hover/banner:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/88 via-[#061711]/20 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C878]">
                        Premium Product Portfolio
                      </p>

                      <p className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
                        Explore {activeProduct.label}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* FEATURED PRODUCTS */}
                {activeProduct.featuredItems.length > 0 && (
                  <div className="relative mt-6">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                        Featured Products
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.16em] text-[#F5F0E6]/35">
                        Quick Preview
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-6 gap-3">
                      {activeProduct.featuredItems.map((item, index) => (
                        <Link
                          key={`${activeProduct.key}-featured-${item.label}-${index}`}
                          href={item.href}
                          className="group/feature overflow-hidden rounded-[16px] border border-[#C9A962]/18 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962]/45 hover:bg-white/[0.06]"
                        >
                          <div className="relative h-[84px] overflow-hidden bg-[#f3ecdf]">
                            {item.image && (
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                sizes="130px"
                                className="object-contain scale-[1.5] transition-transform duration-700 group-hover/feature:scale-[1.6]"
                              />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/15 via-transparent to-white/10" />
                          </div>

                          <div className="p-3">
                            <p className="line-clamp-2 min-h-[34px] text-[10px] leading-[17px] text-[#F5F0E6]/70 transition-colors group-hover/feature:text-[#F5F0E6]">
                              {item.label}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* COMPLETE SUBCATEGORY LIST */}
                {activeProduct.items.length > 0 ? (
                  <div className="relative mt-6 border-t border-[#C9A962]/15 pt-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A962]">
                        Complete Product List
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.16em] text-[#F5F0E6]/35">
                        Scroll to Explore
                      </p>
                    </div>

                    <div className="mt-3 max-h-[210px] overflow-y-auto pr-2 [scrollbar-color:#C9A962_#173b2a] [scrollbar-width:thin]">
                      <div className={`grid gap-x-5 gap-y-1 ${columnsClass}`}>
                        {activeProduct.items.map((item, index) => (
                          <Link
                            key={`${activeProduct.key}-${item.label}-${index}`}
                            href={item.href}
                            className="group/item flex items-start gap-3 rounded-[13px] border border-transparent px-3 py-2 transition-all duration-300 hover:border-[#C9A962]/20 hover:bg-white/[0.04]"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A962]/65 transition-transform duration-300 group-hover/item:scale-125" />

                            <span className="text-[11px] leading-5 text-[#F5F0E6]/64 transition-colors duration-300 group-hover/item:text-[#F5F0E6]">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative mt-6 flex min-h-[230px] items-center justify-center rounded-[24px] border border-[#C9A962]/18 bg-white/[0.03] p-8 text-center">
                    <div>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A962]/35 bg-[#173b2a] text-2xl text-[#E4C878]">
                        {activeProduct.key === "henna" ? "H" : "I"}
                      </div>

                      <h4 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#F5F0E6]">
                        Explore Complete Product Page
                      </h4>

                      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#F5F0E6]/55">
                        This category contains one flagship product. Open the
                        complete page to view specifications, packaging and
                        private-label options.
                      </p>

                      <Link
                        href={activeProduct.href}
                        className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#C9A962] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23] transition-transform duration-300 hover:-translate-y-1"
                      >
                        Open Product Page
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}

                <div className="relative mt-6 flex items-center justify-between border-t border-[#C9A962]/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#F5F0E6]/35">
                    Shivesh International · Premium Export Products
                  </p>

                  <Link
                    href="/#products"
                    className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A962] transition-colors hover:text-[#E4C878]"
                  >
                    View All Product Categories →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}