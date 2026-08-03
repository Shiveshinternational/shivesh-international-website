import Image from "next/image";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f5f0e6] px-6 py-20 text-[#173b2a]"
    >
      <RevealOnScroll>
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2">
          <div>
            <StaggerItem delay={0}>
              <div className="mb-10 flex items-center gap-6">
                <div className="h-[4px] w-24 bg-[#C9A962]" />

                <span className="text-base font-bold uppercase tracking-[0.65em] text-[#C9A962]">
                  About Us
                </span>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight md:text-5xl">
                About Shivesh International
              </h2>
            </StaggerItem>

            <StaggerItem delay={240}>
              <p className="mt-4 text-xl font-medium italic text-[#8B6A1E]">
                Trusted Worldwide for Premium Natural Products.
              </p>
            </StaggerItem>

            <StaggerItem delay={360}>
              <p className="mt-8 max-w-[650px] text-lg leading-8 text-[#4c5f54]">
                Shivesh International is a trusted Indian manufacturer and
                global exporter of premium natural henna, natural henna hair
                colors, indigo powder, Ayurvedic herbs and Indian spices. We
                partner with international brands through consistent quality,
                sustainable sourcing and private-label manufacturing.
              </p>
            </StaggerItem>

            <div className="mt-10 space-y-4">
              <StaggerItem delay={480}>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C9A962]" />

                  <span className="text-[17px] font-medium text-[#173b2a]">
                    Certified Manufacturing Unit
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={600}>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C9A962]" />

                  <span className="text-[17px] font-medium text-[#173b2a]">
                    30+ Years of Industry Experience
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={720}>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C9A962]" />

                  <span className="text-[17px] font-medium text-[#173b2a]">
                    Empowered by 800+ Farmers
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem delay={840}>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C9A962]" />

                  <span className="text-[17px] font-medium text-[#173b2a]">
                    Private Label Manufacturing
                  </span>
                </div>
              </StaggerItem>
            </div>

            <StaggerItem delay={960}>
              <div className="mt-10">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 rounded-sm bg-[#C9A962] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#173b2a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4B872] hover:shadow-xl"
                >
                  Explore Our Company

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </StaggerItem>
          </div>

          <StaggerItem delay={360}>
            <div className="group relative min-h-[520px] overflow-hidden rounded-xl border-2 border-[#C9A962]/40 bg-[#e8dfcf] shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/about-office-fullscreen.png"
                alt="Shivesh International Corporate Office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </section>
  );
}