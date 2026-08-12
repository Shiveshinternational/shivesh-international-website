"use client";

import { useEffect, useState } from "react";

export default function FloatingContactButtons() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowTooltip(true);
    }, 1800);

    const hideTimer = window.setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* PREMIUM TOOLTIP */}
      <div
        className={`pointer-events-none origin-bottom-right transition-all duration-500 ${
          showTooltip
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="relative w-[235px] rounded-[20px] border border-white/15 bg-[#102f23]/95 p-4 text-[#F5F0E6] shadow-[0_20px_55px_rgba(0,0,0,0.30)] backdrop-blur-xl">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#C9A962]">
            Need Assistance?
          </p>

          <p className="mt-2 font-[family-name:var(--font-playfair)] text-lg font-semibold leading-tight">
            Chat with our Export Team
          </p>

          <p className="mt-2 text-xs leading-5 text-[#F5F0E6]/58">
            Product enquiries, quotations, bulk orders and private-label support.
          </p>

          <span className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 border-b border-r border-white/15 bg-[#102f23]" />
        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999774950"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shivesh International on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_45px_rgba(37,211,102,0.36)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_60px_rgba(37,211,102,0.48)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:h-[68px] sm:w-[68px]"
      >
        {/* PULSE RINGS */}
        <span className="absolute inset-0 rounded-full border border-[#25D366]/55 animate-[whatsAppPulse_3.6s_ease-out_infinite]" />
        <span className="absolute inset-0 rounded-full border border-[#25D366]/35 animate-[whatsAppPulse_3.6s_ease-out_1.1s_infinite]" />

        {/* INNER GLASS RING */}
        <span className="absolute inset-[4px] rounded-full border border-white/28 bg-white/[0.04]" />

        {/* ORIGINAL-STYLE WHATSAPP ICON */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="relative z-10 h-9 w-9 fill-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-110 sm:h-10 sm:w-10"
        >
          <path d="M19.11 17.37c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2 3.05 4.84 4.28.68.29 1.2.47 1.61.6.68.22 1.29.19 1.78.12.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z" />
          <path d="M16.03 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.32L3.15 28.8l6.86-1.79a12.85 12.85 0 0 0 6.01 1.5h.01c7.04 0 12.77-5.66 12.77-12.62 0-3.37-1.33-6.54-3.75-8.92A12.78 12.78 0 0 0 16.03 3.2Zm0 22.98h-.01a10.56 10.56 0 0 1-5.37-1.46l-.39-.23-4.07 1.06 1.09-3.92-.25-.4a10.2 10.2 0 0 1-1.59-5.48c0-5.66 4.67-10.27 10.41-10.27 2.78 0 5.39 1.07 7.35 3.01a10.14 10.14 0 0 1 3.05 7.26c0 5.66-4.67 10.27-10.42 10.27Z" />
        </svg>

        {/* HOVER LABEL */}
        <span className="pointer-events-none absolute right-[78px] hidden whitespace-nowrap rounded-full border border-[#25D366]/30 bg-[#102f23]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 xl:block">
          WhatsApp Us
        </span>

        <style jsx>{`
          @keyframes whatsAppPulse {
            0% {
              transform: scale(1);
              opacity: 0.65;
            }
            70% {
              transform: scale(1.42);
              opacity: 0;
            }
            100% {
              transform: scale(1.42);
              opacity: 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            span {
              animation: none !important;
            }
          }
        `}</style>
      </a>
    </div>
  );
}