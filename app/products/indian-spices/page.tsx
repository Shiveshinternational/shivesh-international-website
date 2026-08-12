import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import ProductHero from "@/app/components/ProductHero";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
import ProductCardModal from "@/app/components/ProductCardModal";
import FloatingContactButtons from "@/app/components/FloatingContactButtons";
import PremiumCursor from "@/app/components/PremiumCursor";
import MagneticButtons from "@/app/components/MagneticButtons";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title:
    "Indian Spices | Whole & Powder Spices Exporter | Shivesh International",
  description:
    "Explore premium Indian Spices available in whole and powder forms for importers, distributors, wholesalers, food brands, retail markets and private-label buyers.",
};

const powderSpices = [
  { name: "Black Pepper Powder", image: "Black Pepper Powder.png" },
  { name: "Cardamom Powder", image: "Cardamom Powder.png" },
  { name: "Cinnamon Powder", image: "Cinnamon Powder.png" },
  { name: "Clove Powder", image: "Clove Powder.png" },
  { name: "Coriander Seeds Powder", image: "Coriander Seeds Powder.png" },
  { name: "Cumin Seeds Powder", image: "Cumin Seeds Powder.png" },
  { name: "Dry Garlic Powder", image: "Dry Garlic Powder.png" },
  { name: "Dry Ginger Powder", image: "Dry Ginger Powder.png" },
  { name: "Fennel Seeds Powder", image: "Fennel Seeds Powder.png" },
  { name: "Fenugreek Seeds Powder", image: "Fenugreek Seeds Powder.png" },
  { name: "Red Chilli Powder", image: "Red Chilli Powder.png" },
  { name: "Turmeric Powder", image: "Turmeric Powder.png" },
];

const wholeSpices = [
  { name: "Turmeric Finger", image: "Turmeric Finger.png" },
  { name: "Whole Black Pepper", image: "Whole Black Pepper.png" },
  { name: "Whole Cardamom", image: "Whole Cardamon.png" },
  { name: "Whole Clove", image: "Whole Clove.png" },
  { name: "Whole Coriander Seeds", image: "Whole Coriander Seeds.png" },
  { name: "Whole Cumin Seeds", image: "Whole Cumin Seeds.png" },
  { name: "Whole Dry Garlic", image: "Whole Dry Garlic.png" },
  { name: "Whole Dry Ginger", image: "Whole Dry Ginger.png" },
  { name: "Whole Fennel Seeds", image: "Whole Fennel Seeds.png" },
  { name: "Whole Fenugreek Seeds", image: "Whole Fenugreek Seeds.png" },
  { name: "Whole Red Chilli", image: "Whole Red Chilli.png" },
  { name: "Cinnamon Stick", image: "Cinnamon Stick.png" },
];

type SpiceCardProps = {
  name: string;
  image: string;
  index: number;
  category: string;
};

function SpiceCard({ name, image, index, category }: SpiceCardProps) {
  const imagePath = `/images/products/indian-spices/${image}`;

  return (
    <StaggerItem delay={(index % 6) * 40}>
      <ProductCardModal
        src={imagePath}
        alt={name}
        category={category}
        description="A premium Indian spice product available in commercial, bulk export and selected private-label formats."
      >
        <article className="group relative h-full overflow-hidden rounded-[20px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_12px_34px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_52px_rgba(0,0,0,0.25)]">
          <div className="relative flex h-[155px] items-center justify-center overflow-hidden bg-[#f3ecdf] p-4">
            <Image
              src={imagePath}
              alt={name}
              width={240}
              height={240}
              className="max-h-[125px] w-auto rounded-[14px] bg-white/90 p-2 object-contain shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/8 via-transparent to-white/20" />

            <div className="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] px-2 text-[8px] font-bold text-[#E4C878]">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="p-4">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
              {category}
            </p>

            <h3 className="mt-2 min-h-[48px] font-[family-name:var(--font-playfair)] text-[16px] font-semibold leading-[1.35] text-[#173b2a]">
              {name}
            </h3>

            <div className="mt-3 h-px w-9 bg-[#C9A962]" />

            <p className="mt-3 text-[11px] leading-5 text-[#4c5f54]">
              Available in commercial, bulk and selected private-label formats.
            </p>

            <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8B6A1E] transition-all duration-300 group-hover:gap-3 group-hover:text-[#173b2a]">
              Click to View
              <span>→</span>
            </span>
          </div>
        </article>
      </ProductCardModal>
    </StaggerItem>
  );
}

export default function IndianSpicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      {/* HERO */}
      <ProductHero
      compact
        eyebrow="Premium Indian Spice Collection"
        title="Indian Spices"
        subtitle="Authentic Indian Spice Products. Prepared for Global Markets."
        description="Explore our premium collection of Indian Spices available in whole and powder forms for importers, distributors, wholesalers, food brands, retail markets and private-label buyers."
        heroImage="/images/products/indian-spices/indian-spices-hero-final-v1.png"
        heroImageAlt="Premium Indian Spices collection"
        primaryButtonLabel="Explore Spice Collection"
        primaryButtonHref="#spices-collection"
        secondaryButtonLabel="Request Quotation"
        secondaryButtonHref="/contact"
        highlights={[
          { value: "24", label: "Spice Products" },
          { value: "Whole", label: "& Powder" },
          { value: "Indian", label: "Origin" },
          { value: "OEM", label: "Private Label" },
        ]}
      />

      {/* ABOUT INDIAN SPICES */}
      <section
        id="product-overview"
        className="relative overflow-hidden bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[520px] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/indian-spices/indian-spices-about-final-v2.png"
                  alt="Indian Spices in whole and powder forms"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />

                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Authentic Indian Spice Portfolio
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Whole and Powder Spices for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    About Indian Spices
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Premium Indian Spice Products
                  <span className="block text-[#9f7f36]">
                    for Professional Markets
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={340}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  A focused range of whole and powder spices selected for
                  commercial, retail, food-service and export-oriented markets.
                </p>
              </StaggerItem>

              <StaggerItem delay={460}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Shivesh International supplies premium Indian Spices in
                    whole and powder forms for importers, distributors,
                    wholesalers, retail brands, food companies and qualified
                    private-label buyers.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Our range includes widely traded products such as Black
                    Pepper, Cardamom, Cinnamon, Clove, Coriander, Cumin, Dry
                    Garlic, Dry Ginger, Fennel, Fenugreek, Red Chilli and
                    Turmeric.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    Products may be supplied as whole spices, spice powders or
                    selected buyer-specific formats according to product
                    suitability, target market, order quantity and agreed
                    specification.
                  </p>

                  <p className="text-lg leading-8 text-[#4c5f54]">
                    We support commercial buyers with export-oriented supply,
                    flexible packaging, bulk coordination and private-label
                    presentation for international spice markets.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem delay={580}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#spices-collection"
                    className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    View Complete Collection
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]"
                  >
                    Discuss Bulk Supply
                    <span>→</span>
                  </Link>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMPLETE SPICES COLLECTION */}
      <section
        id="spices-collection"
        className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[145px]"
        />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Complete Spices Collection
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Explore Our Indian Spices
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                A focused export-oriented portfolio of Indian spice powders and
                whole spices for commercial, retail and private-label markets.
              </p>
            </div>

            <div className="mt-14">
              <div className="flex items-center justify-center gap-5">
                <span className="h-[2px] w-16 bg-[#C9A962]" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                  Powder Spices
                </p>
                <span className="h-[2px] w-16 bg-[#C9A962]" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {powderSpices.map((spice, index) => (
                  <SpiceCard
                    key={spice.name}
                    {...spice}
                    index={index}
                    category="Indian Spice Powder"
                  />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <div className="flex items-center justify-center gap-5">
                <span className="h-[2px] w-16 bg-[#C9A962]" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#C9A962]">
                  Whole Spices
                </p>
                <span className="h-[2px] w-16 bg-[#C9A962]" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {wholeSpices.map((spice, index) => (
                  <SpiceCard
                    key={spice.name}
                    {...spice}
                    index={index}
                    category="Whole Indian Spice"
                  />
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-5 text-center">
              <p className="text-sm leading-7 text-[#F5F0E6]/65">
                Product form, grade, mesh size, processing, packaging and
                availability may vary according to the selected spice, order
                quantity, destination market and agreed buyer specification.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* WHY CHOOSE OUR INDIAN SPICES */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <StaggerItem delay={0}>
              <div className="group relative min-h-[440px] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_28px_75px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/indian-spices/indian-spices-quality-inspection-final-v1.png"
                  alt="Premium Indian Spices collection"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Premium Indian Spice Range
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Quality-Focused Spices for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Why Choose Our Spices
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Reliable Indian Spice Products for Professional and Export Markets
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#4c5f54]">
                  Our Indian Spices are supplied with a strong focus on product
                  quality, commercial consistency, flexible packaging and
                  buyer-oriented export support.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Authentic Indian Origin",
                      text: "Selected Indian spice products prepared for domestic and international commercial markets.",
                    },
                    {
                      title: "Whole and Powder Forms",
                      text: "A coordinated range of whole spices and spice powders for varied buyer requirements.",
                    },
                    {
                      title: "Quality-Focused Processing",
                      text: "Products are handled with attention to cleanliness, consistency, aroma and commercial presentation.",
                    },
                    {
                      title: "Buyer-Specific Specifications",
                      text: "Product grade, mesh size and packing can be discussed according to spice and market requirements.",
                    },
                    {
                      title: "Retail and Bulk Supply",
                      text: "Suitable formats are available for importers, wholesalers, retailers and food businesses.",
                    },
                    {
                      title: "Private-Label Support",
                      text: "OEM, custom branding, printed packaging and buyer-oriented presentation are available.",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="border-b border-[#C9A962]/22 pb-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#102f23] text-[11px] text-[#E4C878]">
                          ✓
                        </span>

                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#173b2a]">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#4c5f54]">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section className="bg-[#ede5d7] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#9f7f36]">
                Product Specification
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                General Product Information
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f54]">
                A general commercial overview of our Indian Spices. Exact
                values may differ according to the selected product, grade,
                form and buyer specification.
              </p>
            </div>

            <StaggerItem delay={120}>
              <div className="mt-12 overflow-hidden rounded-[26px] border border-[#C9A962]/35 bg-[#f5f0e6] shadow-[0_24px_65px_rgba(0,0,0,0.11)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] bg-[#102f23] px-5 py-4 text-[#F5F0E6] sm:px-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Parameter
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
                    Product Information
                  </p>
                </div>

                {[
                  ["Product Category", "Indian Spices"],
                  ["Available Forms", "Whole and Powder Forms"],
                  ["Product Appearance", "Characteristic to the Selected Spice"],
                  ["Colour", "Natural and Characteristic to the Selected Product"],
                  ["Aroma", "Characteristic Spice Aroma"],
                  ["Texture", "Whole, Coarse or Fine Powder according to Product Form"],
                  ["Mesh Size", "Available according to Product and Buyer Requirement"],
                  ["Country of Origin", "India"],
                  ["Moisture", "As per Selected Product and Agreed Specification"],
                  ["Purity", "Commercial or Buyer-Specified Grade"],
                  ["Shelf Life", "Product-Specific under Recommended Storage Conditions"],
                  ["Storage", "Store in a Cool, Dry Place Away from Direct Sunlight and Moisture"],
                  ["Packaging", "Retail, Professional, Bulk and Private-Label Formats"],
                  ["Private Label", "OEM, Custom Branding and Printed Packaging Available"],
                  ["Technical Documents", "COA, MSDS and Product-Specific Technical Data Support"],
                ].map(([parameter, value], index) => (
                  <div
                    key={parameter}
                    className={`grid grid-cols-[0.9fr_1.1fr] border-t border-[#173b2a]/10 px-5 py-4 transition-colors duration-300 hover:bg-[#C9A962]/8 sm:px-7 ${
                      index % 2 === 0 ? "bg-[#f5f0e6]" : "bg-[#eee6d8]"
                    }`}
                  >
                    <p className="pr-4 text-sm font-bold uppercase tracking-[0.12em] text-[#8B6A1E] sm:text-[15px]">
                      {parameter}
                    </p>
                    <p className="pl-4 leading-7 text-[#173b2a]">{value}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <div className="mx-auto mt-7 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6]">
              <p className="text-sm leading-7 text-[#F5F0E6]/68">
                Final parameters should always be confirmed for the selected
                spice, form, grade, batch and destination-market requirement.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* PACKAGING & PRIVATE LABEL */}
      <section className="bg-[#102f23] px-6 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
                Packaging & Private Label
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl">
                Flexible Packaging for Global Spice Markets
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">
                Our Indian Spices are available in multiple commercial packing
                formats for wholesalers, importers, food brands, retailers and
                private-label buyers.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[24px] border border-[#C9A962]/30 bg-white/[0.05] p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#C9A962]">
                  Available Pack Sizes
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Retail & Bulk Supply
                </h3>

                <p className="mt-5 leading-8 text-[#F5F0E6]/70">
                  100 g, 200 g, 250 g, 500 g, 1 kg, 5 kg, 20 kg, 25 kg and
                  custom packing formats according to product and order
                  requirements.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#C9A962]/30 bg-[#f5f0e6] p-7 text-[#173b2a]">
                <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-[#9f7f36]">
                  Packaging Formats
                </p>

                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                  Commercial Packing Solutions
                </h3>

                <p className="mt-5 leading-8">
                  Food-grade pouches, metallic pouches, printed pouches,
                  designer boxes, retail cartons, bulk export bags, bulk
                  cartons and private-label packaging.
                </p>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "OEM Manufacturing",
                "Private Label",
                "Custom Branding",
                "Printed Pouches",
                "Designer Boxes",
                "Bulk Export Cartons",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[#C9A962]/25 bg-white/[0.05] p-5 text-center font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#071b14] px-6 py-24 text-center text-[#F5F0E6]">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[160px]" />

        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">
              Premium Indian Spice Products
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Ready to Source Premium Indian Spices?
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">
              Whether you require whole spices, spice powders, bulk supply or
              complete private-label solutions, our team is ready to support
              your business with export-oriented Indian spice products.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23]"
              >
                Request Quotation →
              </Link>

              <a
                href="https://wa.me/919999774950"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em]"
              >
                WhatsApp Our Team →
              </a>
            </div>
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