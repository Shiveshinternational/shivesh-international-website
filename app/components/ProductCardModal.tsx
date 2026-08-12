"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProductCardModalProps = {
  src: string;
  alt: string;
  category: string;
  description: string;
  children: ReactNode;
};

export default function ProductCardModal({
  src,
  alt,
  category,
  description,
  children,
}: ProductCardModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const modal =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Large product preview for ${alt}`}
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/70 text-3xl text-white transition-all duration-300 hover:rotate-90 hover:border-[#C9A962] hover:text-[#E4C878]"
              aria-label="Close product preview"
            >
              ×
            </button>

            <article
              className="group relative max-h-[92vh] w-full max-w-[760px] overflow-y-auto rounded-[30px] border border-[#C9A962]/40 bg-[#F5F0E6] text-[#173b2a] shadow-[0_45px_140px_rgba(0,0,0,0.72)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#102f23]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 760px, 94vw"
                  className="object-contain p-5"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b14]/20 via-transparent to-black/5" />

                <div className="absolute left-5 top-5 rounded-full border border-[#C9A962]/45 bg-[#102f23]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E4C878] backdrop-blur-md sm:left-6 sm:top-6">
                  Full Product Preview
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9f7f36]">
                  {category}
                </p>

                <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
                  {alt}
                </h2>

                <div className="mt-5 h-[2px] w-16 bg-[#C9A962]" />

                <p className="mt-6 text-lg leading-8 text-[#4c5f54]">
                  {description}
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-3 rounded-full border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#102f23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C878]"
                  >
                    Enquire Product
                    <span>→</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center rounded-full border border-[#173b2a]/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#173b2a] transition-all duration-300 hover:border-[#C9A962]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </article>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block h-full w-full cursor-zoom-in text-left"
        aria-label={`Open full product card for ${alt}`}
      >
        {children}
      </button>

      {modal}
    </>
  );
}