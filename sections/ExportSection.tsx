import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

export default function ExportSection() {
  return (
    <section
      id="export"
      className="bg-[#173b2a] px-6 py-24 text-[#f5f0e6]"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-[1500px]">

          <div className="mx-auto max-w-4xl text-center">

            <StaggerItem delay={0}>
              <div className="mb-6 flex items-center justify-center gap-5">
                <div className="h-[4px] w-24 bg-[#C9A962]" />

                <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
                  EXPORT WORLDWIDE
                </span>

                <div className="h-[4px] w-24 bg-[#C9A962]" />
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight md:text-6xl">
                Delivering Nature
                <br />
                Across The Globe
              </h2>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#f5f0e6]/75">
                Trusted by international brands, importers and
                private-label partners across multiple continents.
              </p>
            </StaggerItem>

          </div>

          <StaggerItem delay={360}>
            <div className="mt-20 overflow-hidden rounded-3xl border border-[#C9A962]/25 bg-[#1b4735] shadow-[0_35px_90px_rgba(0,0,0,0.28)]">

              <div className="w-full bg-[#173b2a]">

                <Image
                  src="/images/products/export/export-world-map.png"
                  alt="Global Export Network"
                  width={1600}
                  height={900}
                  priority
                  unoptimized
                  className="w-full h-auto"
                />

              </div>

            </div>
          </StaggerItem>

        </div>
      </RevealOnScroll>
    </section>
  );
}