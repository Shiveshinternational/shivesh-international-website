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
    "Ayurvedic Indian Herbs | Premium Herbal Products | Shivesh International",
  description:
    "Explore premium Ayurvedic Indian Herbs and herbal powders supplied in raw, whole, cut, dried and powder forms for international buyers, wholesalers, wellness brands and private-label markets.",
};

const herbs = [
  { name: 'Adusa Powder', image: 'Adusa Powder.png' },
  { name: 'Aloe Vera Powder', image: 'Aloe Vera Powder.png' },
  { name: 'Amba Haldi Powder', image: 'Amba Haldi Powder.png' },
  { name: 'Amla Powder', image: 'Amla Powder.png' },
  { name: 'Arjuna Bark Powder', image: 'Arjuna Bark Powder.png' },
  { name: 'Ashoka Bark Powder', image: 'AshoKa Bark Powder.png' },
  { name: 'Ashwagandha Powder', image: 'Ashwagandha Powder.png' },
  { name: 'Babool Seed Powder', image: 'Babool Seed Powder.png' },
  { name: 'Baheda Powder', image: 'Baheda Powder.png' },
  { name: 'Barley Grass Powder', image: 'Barley Grass Powder.png' },
  { name: 'Basil Seeds Powder', image: 'Basil Seeds Powder.png' },
  { name: 'Bay Leaf Powder', image: 'Bay Leaf Powder.png' },
  { name: 'Beetroot Powder', image: 'Beetroot Powder.png' },
  { name: 'Baelgiri Powder', image: 'Belgiri Powder.png' },
  { name: 'Bhringraj Powder', image: 'Bhringraj Powder.png' },
  { name: 'Bhumi Amla Powder', image: 'Bhumi Amla Powder.png' },
  { name: 'Bitter Gourd Powder', image: 'Bitter Gourd Powder.png' },
  { name: 'Bottle Gourd Powder', image: 'Bottle Gourd Powder.png' },
  { name: 'Brahmi Powder', image: 'Brahmi Powder.png' },
  { name: 'Chia Seeds Powder', image: 'Chia Seeds Powder.png' },
  { name: 'Cinnamon Powder', image: 'Cinnamon Powder.png' },
  { name: 'Curry Leaf Powder', image: 'Curry Leaf Powder.png' },
  { name: 'Fenugreek Seed Powder', image: 'Fenugreek Seed Powder.png' },
  { name: 'Flaxseeds Powder', image: 'Flaxseeds Powder.png' },
  { name: 'Ginger Powder', image: 'Ginger Powder.png' },
  { name: 'Ginseng Powder', image: 'Ginseng Powder.png' },
  { name: 'Gokhru Powder', image: 'Gokhru Powder.png' },
  { name: 'Gond Katira Powder', image: 'Gond Katira Powder.png' },
  { name: 'Guava Leaf Powder', image: 'Guava Leaf Powder.png' },
  { name: 'Gudmar Powder', image: 'Gudmar Powder.png' },
  { name: 'Harad Powder', image: 'Harad Powder.png' },
  { name: 'Hibiscus Powder', image: 'Hibiscus Powder.png' },
  { name: 'Jamun Powder', image: 'Jamun Powder.png' },
  { name: 'Jatamansi Powder', image: 'Jatamansi Powder.png' },
  { name: 'Kalmegh Powder', image: 'Kalmegh Powder.png' },
  { name: 'Kalonji Powder', image: 'Kalonji Powder.png' },
  { name: 'Kapur Kachri Powder', image: 'Kapur Kachri Powder.png' },
  { name: 'Kapur Sugandhi Powder', image: 'Kapur Sugandhi Powder.png' },
  { name: 'Kasturi Manjal Powder', image: 'Kasturi Munjal Powder.png' },
  { name: 'Khas Powder', image: 'Khas Powder.png' },
  { name: 'Lemon Peel Powder', image: 'Lemon Peel Powder.png' },
  { name: 'Licorice Powder', image: 'Licorice Powder.png' },
  { name: 'Lodhra Powder', image: 'Lodhra Powder.png' },
  { name: 'Lotus Powder', image: 'Lotus Powder.png' },
  { name: 'Mango Kernel Powder', image: 'Mangi Kernel Powder.png' },
  { name: 'Manjistha Powder', image: 'Manjistha Powder.png' },
  { name: 'Methi Seeds Powder', image: 'Methi Seeds Powder.png' },
  { name: 'Mint Leaf Powder', image: 'Mint Leaf Powder.png' },
  { name: 'Moringa Powder', image: 'Moringa Powder.png' },
  { name: 'Multani Mitti Powder', image: 'Multani Mitti Powder.png' },
  { name: 'Nagarmotha Powder', image: 'Nagarmotha Powder.png' },
  { name: 'Neem Giloy Powder', image: 'Neem Giloy Powder.png' },
  { name: 'Neem Leaves Powder', image: 'Neem Leaves Powder.png' },
  { name: 'Orange Peel Powder', image: 'Orange Peel Powder.png' },
  { name: 'Papaya Leaf Powder', image: 'Papaya Leaf Powder.png' },
  { name: 'Pomegranate Peel Powder', image: 'Pomegranate Plee Powder.png' },
  { name: 'Pomegranate Powder', image: 'Pomegrante Powder.png' },
  { name: 'Punarnava Powder', image: 'Punarnava Powder.png' },
  { name: 'Ratanjot Powder', image: 'Ratanjot Powder.png' },
  { name: 'Rose Petal Powder', image: 'Rose Petal Powder.png' },
  { name: 'Shankhpushpi Powder', image: 'Shankpushpi Powder.png' },
  { name: 'Shatavari Powder', image: 'Shatavari Powder.png' },
  { name: 'Shikakai Powder', image: 'Shikakai Powder.png' },
  { name: 'Soapnut Powder', image: 'Soapnut Powder.png' },
  { name: 'Soapnut Shell Powder', image: 'Soapnut Shell Powder.png' },
  { name: 'Spirulina Powder', image: 'Spirulina Powder.png' },
  { name: 'Stevia Powder', image: 'Stevia Powder.png' },
  { name: 'Triphala Powder', image: 'Triphala Powder.png' },
  { name: 'Tulsi Leaf Powder', image: 'Tulsi Leaf Powder.png' },
  { name: 'Turmeric Powder', image: 'Turmeric Powder.png' },
  { name: 'Wheatgrass Powder', image: 'Wheat grass Powder.png' },
  { name: 'Katha Powder', image: 'katha powder.png' },
  
];

export default function AyurvedicIndianHerbsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#173b2a]">
      <Navbar />

      <ProductHero
       compact
        eyebrow="Premium Ayurvedic Herbal Collection"
        title="Ayurvedic Indian Herbs"
        subtitle="Traditional Herbal Products. Prepared for Global Markets."
        description="Explore our premium collection of Ayurvedic Indian Herbs available in raw, whole, cut, dried and powder forms for importers, distributors, wholesalers, wellness brands, cosmetic companies and private-label buyers."
        heroImage="/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-hero-final-v1.png"
        heroImageAlt="Premium Ayurvedic Indian Herbs collection"
        primaryButtonLabel="Explore Herb Collection"
        primaryButtonHref="#herbs-collection"
        secondaryButtonLabel="Request Quotation"
        secondaryButtonHref="/contact"
        highlights={[
          { value: "Wide", label: "Herb Range" },
          { value: "Multiple", label: "Product Grades" },
          { value: "Raw", label: "& Powder" },
          { value: "OEM", label: "Private Label" },
        ]}
      />

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
              <div className="group relative aspect-[3/2] overflow-hidden rounded-[30px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_30px_85px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-about-final-v1.png"
                  alt="Ayurvedic Indian Herbs and herbal powders"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b14]/75 via-transparent to-black/10" />
                <div className="pointer-events-none absolute -left-[110%] top-0 h-full w-[52%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[1300ms] group-hover:left-[150%]" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E4C878]">
                    Traditional Herbal Product Portfolio
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Ayurvedic Indian Herbs in Multiple Forms
                  </p>
                </div>
              </div>
            </StaggerItem>

            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    About Ayurvedic Indian Herbs
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-[58px]">
                  Premium Ayurvedic Herbal Products
                  <span className="block text-[#9f7f36]">for Professional Markets</span>
                </h2>
              </StaggerItem>

              <StaggerItem delay={340}>
                <p className="mt-8 text-xl font-medium leading-9 text-[#8B6A1E]">
                  A broad portfolio of traditional herbs and herbal powders supplied as standalone commercial products for multiple international market segments.
                </p>
              </StaggerItem>

              <StaggerItem delay={460}>
                <div className="mt-7 space-y-5">
                  <p className="text-lg leading-8 text-[#4c5f54]">Shivesh International supplies a broad range of Ayurvedic Indian Herbs and herbal powders prepared for commercial, professional and export-oriented requirements.</p>
                  <p className="text-lg leading-8 text-[#4c5f54]">Our portfolio includes widely traded herbal products such as Amla, Shikakai, Reetha, Brahmi, Bhringraj, Neem, Ashwagandha, Hibiscus, Tulsi, Multani Mitti and many other traditional Ayurvedic herbs.</p>
                  <p className="text-lg leading-8 text-[#4c5f54]">Depending on the selected product, herbs may be supplied in raw, whole, cut, dried or powder form. Food-grade, health-grade, cosmetic-grade and other buyer-specific product grades may be discussed according to the herb, intended market and agreed specification.</p>
                  <p className="text-lg leading-8 text-[#4c5f54]">We serve importers, distributors, wholesalers, herbal-product companies, wellness brands, cosmetic businesses and qualified private-label buyers across international markets.</p>
                </div>
              </StaggerItem>

              <StaggerItem delay={580}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#herbs-collection" className="inline-flex items-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878]">View Complete Collection <span>→</span></Link>
                  <Link href="/contact" className="inline-flex items-center gap-3 border border-[#173b2a]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.19em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#102f23] hover:text-[#F5F0E6]">Discuss Bulk Supply <span>→</span></Link>
                </div>
              </StaggerItem>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="herbs-collection" className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-[#F5F0E6] sm:px-8 lg:px-12 lg:py-24">
        <div aria-hidden="true" className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A962]/10 blur-[145px]" />
        <RevealOnScroll>
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A962]">Complete Herbs Collection</p>
              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Explore Our Ayurvedic Indian Herbs</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">Discover our extensive herbal product range supplied in powder and selected raw forms for importers, distributors, wholesalers, wellness brands, cosmetic businesses and private-label buyers.</p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {herbs.map((herb, index) => (
                <StaggerItem key={herb.name} delay={(index % 6) * 35}>
                  <ProductCardModal
                    src={`/images/products/ayurvedic-herbs/${herb.image}`}
                    alt={herb.name}
                    category="Ayurvedic Herbal Product"
                    description="A premium Ayurvedic herbal product available in commercial, bulk export and selected private-label formats according to buyer requirements."
                  >
                    <article className="group relative h-full overflow-hidden rounded-[20px] border border-[#C9A962]/22 bg-[#F5F0E6] text-[#173b2a] shadow-[0_12px_34px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_22px_52px_rgba(0,0,0,0.25)]">
                      <div className="relative flex h-[155px] items-center justify-center overflow-hidden bg-[#f3ecdf] p-4">
                        <Image
                          src={`/images/products/ayurvedic-herbs/${herb.image}`}
                          alt={herb.name}
                          width={240}
                          height={240}
                          className="max-h-[125px] w-auto rounded-[14px] bg-white/90 p-2 object-contain shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173b2a]/8 via-transparent to-white/20" />

                        <div className="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102f23] px-2 text-[8px] font-bold text-[#E4C878]">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/45 bg-[#102f23]/90 text-sm text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                          ⛶
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9f7f36]">
                          Ayurvedic Herbal Product
                        </p>

                        <h3 className="mt-2 min-h-[48px] font-[family-name:var(--font-playfair)] text-[16px] font-semibold leading-[1.35] text-[#173b2a]">
                          {herb.name}
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
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C9A962]/25 bg-white/[0.04] px-6 py-5 text-center">
              <p className="text-sm leading-7 text-[#F5F0E6]/65">Product form, grade, processing, packaging and availability may vary according to the selected herb, order quantity, intended market and agreed buyer specification.</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
            {/* WHY CHOOSE OUR AYURVEDIC INDIAN HERBS */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* IMAGE */}
            <StaggerItem delay={0}>
              <div className="group relative aspect-[3/2] overflow-hidden rounded-[28px] border border-[#C9A962]/30 bg-[#e8dfcf] shadow-[0_28px_75px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/products/ayurvedic-herbs/ayurvedic-herbs-quality-inspection-final-v1.png"
                  alt="Premium Ayurvedic Indian Herbs collection"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061711]/80 via-transparent to-black/10" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E4C878]">
                    Premium Herbal Product Range
                  </p>

                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white">
                    Quality-Focused Ayurvedic Herbs for Global Markets
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* CONTENT */}
            <div>
              <StaggerItem delay={120}>
                <div className="mb-6 flex items-center gap-5">
                  <span className="h-[3px] w-14 bg-[#C9A962]" />

                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#9f7f36]">
                    Why Choose Our Herbs
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={240}>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  Reliable Herbal Products for Professional and Export Markets
                </h2>
              </StaggerItem>

              <StaggerItem delay={360}>
                <p className="mt-6 text-lg leading-8 text-[#4c5f54]">
                  Our Ayurvedic Indian Herbs are supplied with a strong focus on
                  product quality, processing consistency, commercial
                  flexibility and buyer-oriented packaging.
                </p>
              </StaggerItem>

              <StaggerItem delay={480}>
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Extensive Herbal Range",
                      text: "A broad selection of traditional Ayurvedic herbs and herbal powders available for diverse international markets.",
                    },
                    {
                      title: "Multiple Product Forms",
                      text: "Selected herbs may be supplied in raw, whole, cut, dried or powder form according to product suitability.",
                    },
                    {
                      title: "Buyer-Specific Grades",
                      text: "Food-grade, health-grade, cosmetic-grade and other agreed product grades may be discussed.",
                    },
                    {
                      title: "Quality-Focused Processing",
                      text: "Products are handled and processed with attention to cleanliness, consistency and commercial requirements.",
                    },
                    {
                      title: "Retail and Bulk Supply",
                      text: "Suitable packaging formats are available for wholesalers, distributors, brands and professional buyers.",
                    },
                    {
                      title: "Private-Label Support",
                      text: "OEM, custom branding, printed packaging and buyer-oriented product presentation are available.",
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
                A general commercial overview of our Ayurvedic Indian Herbs and
                herbal powders. Exact values may differ according to the
                selected product, grade, form and buyer specification.
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
                  ["Product Category", "Ayurvedic Indian Herbs"],
                  [
                    "Available Forms",
                    "Raw, Whole, Cut, Dried and Powder Forms",
                  ],
                  [
                    "Available Grades",
                    "Food Grade, Health Grade, Cosmetic Grade and Buyer-Specific Grades",
                  ],
                  [
                    "Product Appearance",
                    "Characteristic to the Selected Herb",
                  ],
                  [
                    "Colour",
                    "Natural and Characteristic to the Selected Product",
                  ],
                  [
                    "Odour",
                    "Characteristic Herbal Odour",
                  ],
                  [
                    "Texture",
                    "Whole, Cut, Coarse or Fine Powder according to Product Form",
                  ],
                  [
                    "Mesh Size",
                    "Available according to Product and Buyer Requirement",
                  ],
                  ["Country of Origin", "India"],
                  [
                    "Moisture",
                    "As per Selected Product and Agreed Specification",
                  ],
                  [
                    "Purity",
                    "Commercial or Buyer-Specified Grade",
                  ],
                  [
                    "Shelf Life",
                    "Product-Specific under Recommended Storage Conditions",
                  ],
                  [
                    "Storage",
                    "Store in a Cool, Dry Place Away from Direct Sunlight and Moisture",
                  ],
                  [
                    "Packaging",
                    "Retail, Professional, Bulk and Private-Label Formats",
                  ],
                  [
                    "Private Label",
                    "OEM, Custom Branding and Printed Packaging Available",
                  ],
                  [
                    "Technical Documents",
                    "COA, MSDS and Product-Specific Technical Data Support",
                  ],
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

                    <p className="pl-4 leading-7 text-[#173b2a]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <div className="mx-auto mt-7 max-w-4xl rounded-[20px] border border-[#C9A962]/25 bg-[#102f23] px-6 py-5 text-center text-[#F5F0E6]">
              <p className="text-sm leading-7 text-[#F5F0E6]/68">
                Product specifications are not identical across the complete
                herbal range. Final parameters should always be confirmed for
                the selected herb, form, grade, batch and destination-market
                requirement.
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

Flexible Packaging for Global Herbal Markets

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F5F0E6]/65">

Our Ayurvedic Indian Herbs are available in multiple commercial
packing formats for wholesalers, importers, herbal brands,
manufacturers and private-label buyers.

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

100 g

250 g

500 g

1 kg

5 kg

20 kg

25 kg

Custom Packing

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

Food Grade Bags

Health Grade Bags

Cosmetic Grade Bags

Metallic Pouches

Printed Pouches

Designer Boxes

Bulk Export Cartons

Private Label Packaging

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
].map((item)=>(

<div
key={item}
className="rounded-[20px] border border-[#C9A962]/25 bg-white/[0.05] p-5 text-center font-semibold">

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

Premium Herbal Products

</p>

<h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl lg:text-6xl">

Ready to Source

Premium Ayurvedic

Indian Herbs?

</h2>

<p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#F5F0E6]/68">

Whether you require raw herbs, herbal powders,
bulk supply or complete private-label solutions,
our team is ready to support your business with
international-quality herbal products.

</p>

<div className="mt-12 flex flex-wrap justify-center gap-5">

<Link

href="/contact"

className="rounded-full bg-[#C9A962] px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-[#102f23]">

Request Quotation →

</Link>

<a

href="https://wa.me/919999774950"

target="_blank"

rel="noopener noreferrer"

className="rounded-full border border-[#F5F0E6]/30 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em]">

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