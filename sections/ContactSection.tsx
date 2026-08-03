import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#f5f0e6] px-6 pb-12 pt-24 text-[#173b2a]"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-[1500px]">

          <div className="mx-auto max-w-4xl text-center">

            <StaggerItem delay={0}>
              <div className="mb-6 flex items-center justify-center gap-5">
                <div className="h-[4px] w-24 bg-[#C9A962]" />

                <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
                  CONTACT US
                </span>

                <div className="h-[4px] w-24 bg-[#C9A962]" />
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight md:text-6xl">
                Let's Build Long-Term
                <br />
                Business Partnerships
              </h2>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#173b2a]/75">
                We welcome importers, distributors, wholesalers,
                retailers and private-label brands from around the world.
              </p>
            </StaggerItem>

          </div>

          <StaggerItem delay={360}>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-[0_35px_90px_rgba(23,59,42,0.22)]">

              <Image
                src="/images/products/contact/contact-information-panel.png"
                alt="Shivesh International Contact Information"
                width={1600}
                height={900}
                priority
                unoptimized
                className="w-full h-auto"
              />

            </div>
          </StaggerItem>

        </div>
      </RevealOnScroll>
    </section>
  );
}