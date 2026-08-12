"use client";

import { useEffect, useState } from "react";

export default function BrandProtection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);

    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      show();
    };

    const onDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === "IMG" || target?.closest("img")) {
        event.preventDefault();
        show();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const blocked =
        key === "f12" ||
        (event.ctrlKey && key === "u") ||
        (event.ctrlKey && key === "s") ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        (event.metaKey && event.altKey && ["i", "j", "c"].includes(key));

      if (blocked) {
        event.preventDefault();
        show();
      }

      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/65 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-protection-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[520px] overflow-hidden rounded-[28px] border border-[#C9A962]/40 bg-[#102f23] p-7 text-center text-[#F5F0E6] shadow-[0_35px_110px_rgba(0,0,0,0.62)] sm:p-9"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-2xl text-white transition hover:border-[#C9A962] hover:text-[#C9A962]"
          aria-label="Close copyright notice"
        >
          ×
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#173b2a] font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#E4C878]">
          SI
        </div>

        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A962]">
          Protected Brand Content
        </p>

        <h2
          id="brand-protection-title"
          className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold"
        >
          © Shivesh International
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#F5F0E6]/65">
          Images, product designs and website content are protected. For
          catalogues, marketing material, media usage or product information,
          please contact our team.
        </p>

        <div className="mt-6 rounded-[20px] border border-[#C9A962]/20 bg-white/[0.04] p-5">
          <a
            href="mailto:shiveshinternational@gmail.com"
            className="block break-all text-sm text-[#E4C878] transition hover:text-white"
          >
            shiveshinternational@gmail.com
          </a>
          <a
            href="tel:+919999774950"
            className="mt-2 block text-sm text-[#F5F0E6]/70 transition hover:text-[#E4C878]"
          >
            +91-9999774950
          </a>
          <a
            href="https://www.henna-manufacturer.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-sm text-[#F5F0E6]/70 transition hover:text-[#E4C878]"
          >
            www.henna-manufacturer.com
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[#C9A962] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f23] transition hover:bg-[#E4C878]"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
}