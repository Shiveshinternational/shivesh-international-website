import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

export default function CertificationSection() {
  return (
    <section
      id="certifications"
      className="bg-[#f5f0e6] px-6 py-24 text-[#173b2a]"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <StaggerItem delay={0}>
              <div className="mb-6 flex items-center justify-center gap-5">
                <div className="h-[4px] w-24 bg-[#C9A962]" />

                <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
                  OUR CERTIFICATIONS
                </span>

                <div className="h-[4px] w-24 bg-[#C9A962]" />
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight md:text-6xl">
                Certified Quality
                <br />
                Trusted Worldwide
              </h2>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#173b2a]/75">
                Every product is manufactured under internationally recognised
                quality systems to ensure consistency, safety and customer
                confidence.
              </p>
            </StaggerItem>
          </div>

          <StaggerItem delay={360}>
            <div className="mt-4 overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(23,59,42,0.14)]">
              <Image
                src="/images/products/certifications/certifications-overview.png"
                alt="Shivesh International Certifications and Compliance"
                width={1536}
                height={1024}
                className="h-auto w-full"
                unoptimized
              />
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}