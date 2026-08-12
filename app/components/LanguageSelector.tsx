"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "ES", label: "Spanish", flag: "🇪🇸" },
  { code: "FR", label: "French", flag: "🇫🇷" },
  { code: "DE", label: "German", flag: "🇩🇪" },
  { code: "AR", label: "Arabic", flag: "🇦🇪" },
  { code: "JA", label: "Japanese", flag: "🇯🇵" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("EN");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const timer = window.setTimeout(() => {
    const savedLanguage = window.localStorage.getItem(
      "shivesh-preferred-language",
    );

    if (savedLanguage) {
      setSelectedCode(savedLanguage);
    }
  }, 0);

  return () => window.clearTimeout(timer);
}, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectedLanguage =
    languages.find((language) => language.code === selectedCode) ??
    languages[0];

  const selectLanguage = (code: string) => {
    setSelectedCode(code);
    setIsOpen(false);
    window.localStorage.setItem("shivesh-preferred-language", code);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[#C9A962]/35 bg-[#173b2a]/65 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F0E6] transition-all duration-300 hover:border-[#C9A962] hover:text-[#C9A962]"
        aria-label="Select display language"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{selectedLanguage.flag}</span>
        <span>{selectedLanguage.code}</span>
        <span
          className={`text-[8px] text-[#C9A962] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+14px)] z-[120] w-[210px] origin-top-right transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[20px] border border-[#C9A962]/25 bg-[#0b241a]/98 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.40)] backdrop-blur-2xl">
          <p className="px-3 pb-2 pt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A962]">
            Display Language
          </p>

          {languages.map((language) => {
            const isSelected = language.code === selectedCode;

            return (
              <button
                key={language.code}
                type="button"
                onClick={() => selectLanguage(language.code)}
                className={`flex w-full items-center justify-between rounded-[14px] px-3 py-2.5 text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-[#173b2a] text-[#E4C878]"
                    : "text-[#F5F0E6]/70 hover:bg-white/[0.04] hover:text-[#F5F0E6]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span>{language.flag}</span>
                  <span className="text-sm">{language.label}</span>
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                  {language.code}
                </span>
              </button>
            );
          })}

          <div className="mx-2 mt-2 border-t border-[#C9A962]/12 px-2 py-3">
            <p className="text-[10px] leading-5 text-[#F5F0E6]/38">
              Visual selector only. Website content remains in English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}