import ProductCard from "@/app/components/ProductCard";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

const products = [
  {
    title: "Natural Henna Powder",
    subtitle: "Pure & Natural",
    description:
      "Premium-quality Natural Henna Powder carefully processed for international brands, salons and private-label requirements.",
    image: "/images/products/henna-powder/natural-henna-powder-premium-box-v2.png",
    href: "/products/natural-henna-powder",
    code: "01",
  },
  {
    title: "Natural Indigo Powder",
    subtitle: "Premium Botanical Powder",
    description:
      "Premium-quality Natural Indigo Powder for professional black and dark-brown hair-colour applications.",
    image:
  "/images/products/natural-indigo-powder/natural-indigo-powder-premium-box-v2.png",
    href: "/products/natural-indigo-powder",
    code: "02",
  },
  {
    title: "Natural Henna Hair Colors",
    subtitle: "18 Botanical Shades",
    description:
      "A premium collection of Natural Henna Hair Colors developed for salons, brands and private-label markets.",
    image:
  "/images/products/henna-hair-colors/natural-henna-hair-colors-premium-boxes-v2.png",
    href: "/products/natural-henna-hair-colors",
    code: "03",
  },
  {
    title: "Henna-Based Hair Colors",
    subtitle: "16 Professional Shades",
    description:
      "A performance-focused range of Henna-Based Hair Colors developed for professional and international markets.",
    image:
  "/images/products/henna-based-hair-colors/henna-based-hair-colors-premium-boxes-v2.png",
    href: "/products/henna-based-hair-colors",
    code: "04",
  },
  {
    title: "Ayurvedic Indian Herbs",
    subtitle: "Traditional Herbal Range",
    description:
      "Authentic Ayurvedic Indian Herbs and herbal powders supplied for wellness, cosmetic and private-label markets.",
    image:
  "/images/products/ayurvedic-herbs/ayurvedic-indian-herbs-premium-boxes-v2.png",
    href: "/products/ayurvedic-indian-herbs",
    code: "05",
  },
  {
    title: "Indian Spices",
    subtitle: "Whole & Powder Spices",
    description:
      "Premium Indian Spices selected for quality, aroma and international retail, bulk and private-label requirements.",
    image:
  "/images/products/indian-spices/indian-spices-premium-boxes-v2.png",
    href: "/products/indian-spices",
    code: "06",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#103D2C] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* ===============================================
          BACKGROUND PREMIUM GLOW
      =============================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-32 h-[460px] w-[460px] rounded-full bg-[#C9A962]/[0.045] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-20 h-[480px] w-[480px] rounded-full bg-[#C9A962]/[0.06] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(201,169,98,0.022)_35%,transparent_70%)]"
      />

      <RevealOnScroll>
        <div className="relative mx-auto max-w-[1500px]">
          {/* ===============================================
              SECTION HEADER
          =============================================== */}
          <div className="mx-auto max-w-5xl text-center">
            <StaggerItem delay={0}>
              <div className="mb-7 flex items-center justify-center gap-4 sm:gap-5">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A962] sm:w-20" />

                <span className="text-xs font-bold uppercase tracking-[0.48em] text-[#C9A962] sm:text-sm">
                  Our Products
                </span>

                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A962] sm:w-20" />
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
                Discover Our Premium

                <span className="mt-2 block bg-gradient-to-r from-[#F5F0E6] via-[#E4C878] to-[#C9A962] bg-clip-text text-transparent">
                  Natural Product Range
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#F5F0E6]/68 sm:text-lg lg:text-xl lg:leading-9">
                Carefully selected natural products, professional hair-colour
                ranges, Ayurvedic Indian Herbs and Indian Spices prepared for
                global buyers.
              </p>
            </StaggerItem>

            <StaggerItem delay={300}>
              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E6]/42">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A962]" />
                  Export-Oriented Supply
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A962]" />
                  Retail & Bulk
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A962]" />
                  Private Label
                </span>
              </div>
            </StaggerItem>
          </div>

          {/* ===============================================
              PRODUCT GRID
              IMPORTANT:
              auto-rows-fr + h-full forces every card
              to exactly the same row height.
          =============================================== */}
          <div className="mt-16 grid auto-rows-fr items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {products.map((product, index) => (
              <StaggerItem
                key={product.title}
                delay={360 + (index % 3) * 90}
              >
                <div className="group relative h-full min-h-[650px]">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-[30px] bg-gradient-to-br from-[#C9A962]/0 via-[#C9A962]/0 to-[#C9A962]/0 opacity-0 blur-lg transition-all duration-700 group-hover:from-[#C9A962]/16 group-hover:via-[#C9A962]/5 group-hover:to-transparent group-hover:opacity-100" />

                  {/* Equal-height card wrapper */}
                  <div className="relative h-full transition-all duration-700 group-hover:-translate-y-2">
                    {/* Card number */}
                    <div className="pointer-events-none absolute left-5 top-5 z-20 flex h-9 min-w-9 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#102F23]/90 px-2 text-[9px] font-bold tracking-[0.16em] text-[#E4C878] shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                      {product.code}
                    </div>

                    {/* Forces ProductCard root to full height */}
                    <div className="h-full [&>*]:h-full">
                      <ProductCard
                        title={product.title}
                        subtitle={product.subtitle}
                        description={product.description}
                        image={product.image}
                        href={product.href}
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* ===============================================
              BOTTOM EXPORT SUPPORT STRIP
          =============================================== */}
          <StaggerItem delay={650}>
            <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[26px] border border-[#C9A962]/22 bg-[#102F23]/55 px-6 py-6 text-center shadow-[0_20px_55px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:flex-row sm:px-8 sm:text-left">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9A962]">
                  Complete Export Product Portfolio
                </p>

                <p className="mt-2 text-sm leading-7 text-[#F5F0E6]/60">
                  Retail, professional, bulk and private-label solutions are
                  available according to product and buyer requirements.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#C9A962]/55 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E4C878] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#102F23]"
              >
                Discuss Your Requirement
                <span>→</span>
              </a>
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}