import ProductCard from "@/app/components/ProductCard";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
export default function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-[#173b2a] px-6 pt-36 pb-24 text-[#f5f0e6]"
    >
      <RevealOnScroll>
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">

  <StaggerItem delay={0}>
  <div className="mb-6 flex items-center justify-center gap-5">
    <div className="h-[4px] w-24 bg-[#C9A962]"></div>

    <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
      OUR PRODUCTS
    </span>

    <div className="h-[4px] w-24 bg-[#C9A962]"></div>
  </div>
</StaggerItem>

<StaggerItem delay={120}>
  <h2 className="font-[family-name:var(--font-playfair)] text-6xl font-semibold leading-tight">
    Discover Our Premium
    <br />
    Natural Product Range
  </h2>
</StaggerItem>

<StaggerItem delay={240}>
  <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#f5f0e6]/80">
    Crafted with Nature. Trusted Across the Globe.
  </p>
</StaggerItem>

</div>
<StaggerItem delay={360}>
  <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
   <ProductCard
  title="Natural Henna Powder"
  subtitle="Pure & Natural"
  description="Premium-quality henna powder carefully processed for international brands, salons and private-label requirements."
  image="/images/products/henna-powder/natural-henna-powder.png"
/>

<ProductCard
  title="Natural Indigo Powder"
  subtitle="Pure & Natural"
  description="Premium-quality indigo powder for natural black and dark brown hair colour applications."
  image="/images/products/natural-indigo-powder/natural-indigo-powder.png"
/>
<ProductCard
  title="Natural Henna Hair Colors"
  subtitle="Botanical Hair Colour"
  description="A premium range of natural henna hair colours developed for salons, brands and private-label markets."
  image="/images/products/henna-hair-colors/natural-henna-hair-colors.png"
/>

<ProductCard
  title="Henna-Based Hair Colors"
  subtitle="Professional Colour Range"
  description="Carefully blended henna-based hair colours available in multiple shades for international buyers."
  image="/images/products/henna-based-hair-colors/henna-based-hair-colors.png"
/>

<ProductCard
  title="Ayurvedic Indian Herbs"
  subtitle="Traditional Wellness"
  description="Authentic Ayurvedic herbs and herbal powders sourced and processed for global wellness brands."
  image="/images/products/ayurvedic-herbs/ayurvedic-indian-herbs.png"
/>

<ProductCard
  title="Indian Spices"
  subtitle="Pure Indian Origin"
  description="Premium whole and ground Indian spices selected for quality, aroma and international export requirements."
  image="/images/products/indian-spices/indian-spices.png"
/>
</div>
</StaggerItem>
      </div>
      </RevealOnScroll>
    </section>
  );
}