"use client";

import RevealOnScroll from "@/app/components/RevealOnScroll";
import StaggerItem from "@/app/components/StaggerItem";

export default function FooterSection() {
  return (
    <footer className="bg-[#0f2f22] text-[#f5f0e6]">
      <RevealOnScroll>
        <div className="mx-auto max-w-[1500px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <StaggerItem delay={0}>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#C9A962]">
                  Shivesh International
                </h3>
                <p className="mt-4 leading-8 text-[#f5f0e6]/70">
                  Premium exporter of Natural Henna Powder, Natural Indigo Powder,
                  Henna Hair Colors, Ayurvedic Herbs and Indian Spices, serving
                  international buyers with quality, consistency and trust.
                </p>
                <p className="mt-6 font-medium text-[#C9A962]">
                  Nature • Quality • Trust
                </p>
              </div>
            </StaggerItem>

            <StaggerItem delay={120}>
              <div>
                <h4 className="text-xl font-semibold text-[#C9A962]">Quick Links</h4>
                <ul className="mt-6 space-y-3 text-[#f5f0e6]/70">
                  <li><a href="#home" className="transition hover:text-[#C9A962]">Home</a></li>
                  <li><a href="#about" className="transition hover:text-[#C9A962]">About Us</a></li>
                  <li><a href="#products" className="transition hover:text-[#C9A962]">Products</a></li>
                  <li><a href="#infrastructure" className="transition hover:text-[#C9A962]">Infrastructure</a></li>
                  <li><a href="#certifications" className="transition hover:text-[#C9A962]">Certifications</a></li>
                  <li><a href="#export" className="transition hover:text-[#C9A962]">Export</a></li>
                  <li><a href="#contact" className="transition hover:text-[#C9A962]">Contact</a></li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem delay={240}>
              <div>
                <h4 className="text-xl font-semibold text-[#C9A962]">Our Products</h4>
                <ul className="mt-6 space-y-3 text-[#f5f0e6]/70">
                  <li>Natural Henna Powder</li>
                  <li>Natural Indigo Powder</li>
                  <li>Natural Henna Hair Colors</li>
                  <li>Henna-Based Hair Colors</li>
                  <li>Ayurvedic Indian Herbs</li>
                  <li>Indian Spices</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem delay={360}>
              <div>
                <h4 className="text-xl font-semibold text-[#C9A962]">Contact</h4>
                <div className="mt-6 space-y-4 text-[#f5f0e6]/70">
                  <p className="leading-7">
                    361-C, BG-6, Paschim Vihar,
                    <br />
                    New Delhi – 110063, India
                  </p>
                  <p><a href="tel:+919999774950" className="transition hover:text-[#C9A962]">+91-9999774950</a></p>
                  <p><a href="tel:+919873077187" className="transition hover:text-[#C9A962]">+91-9873077187</a></p>
                  <p className="break-all">
                    <a href="mailto:shiveshinternational@gmail.com" className="transition hover:text-[#C9A962]">
                      shiveshinternational@gmail.com
                    </a>
                  </p>
                  <p className="break-all">
                    <a href="https://www.henna-manufacturer.com" target="_blank" rel="noreferrer" className="transition hover:text-[#C9A962]">
                      www.henna-manufacturer.com
                    </a>
                  </p>
                  <p>
                    <a href="https://wa.me/919999774950" target="_blank" rel="noreferrer" className="font-medium text-[#C9A962] transition hover:text-[#f5f0e6]">
                      WhatsApp: +91-9999774950
                    </a>
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>

          <StaggerItem delay={480}>
            <div className="mt-16 border-t border-[#C9A962]/20 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm text-[#f5f0e6]/60">
                  © 2026 Shivesh International. All Rights Reserved.
                </p>
                <p className="text-sm text-[#C9A962]">Designed for Global Trade</p>
              </div>
            </div>
          </StaggerItem>
        </div>
      </RevealOnScroll>
    </footer>
  );
}