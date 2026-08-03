import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";
export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="bg-[#f5f0e6] px-6 pb-24 pt-40 text-[#173b2a]"
    >
      <RevealOnScroll>
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <StaggerItem delay={0}>
  <div className="mb-6 flex items-center justify-center gap-5">
    <div className="h-[4px] w-24 bg-[#C9A962]" />

    <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
      Our Infrastructure
    </span>

    <div className="h-[4px] w-24 bg-[#C9A962]" />
  </div>
</StaggerItem>

<StaggerItem delay={120}>
  <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight md:text-6xl">
    Advanced Manufacturing
    <br />
    Built for Global Standards
  </h2>
</StaggerItem>

<StaggerItem delay={240}>
  <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#173b2a]/75">
    From carefully selected raw materials to precision processing,
    quality control and export-ready packing, every stage is managed
    with consistency and care.
  </p>
</StaggerItem>
        </div>
        <StaggerItem delay={360}>
  <div className="mt-20 overflow-hidden rounded-3xl border border-[#C9A962]/35 bg-[#173b2a] shadow-[0_35px_90px_rgba(0,0,0,0.22)]">

    <div className="relative aspect-[16/9] w-full">

  <Image
    src="/images/products/factory/factory-hero-wide.png"
    alt="Shivesh International Factory"
    fill
    priority
    sizes="100vw"
    className="object-cover scale-[1.04]"
  />

 

</div>

</div>
</StaggerItem>
      </div>
      </RevealOnScroll>
    </section>
  );
}