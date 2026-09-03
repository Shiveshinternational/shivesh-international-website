"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getEquivalentRoute } from "@/app/lib/i18n";

const languages = [
  { code: "EN", label: "English", flag: "🇬🇧", locale: "en" as const },
  { code: "ES", label: "Spanish", flag: "🇪🇸", locale: "es" as const },
  { code: "FR", label: "Français", flag: "🇫🇷", locale: "fr" as const },
  { code: "DE", label: "Deutsch", flag: "🇩🇪", locale: "de" as const },
  { code: "IT", label: "Italiano", flag: "🇮🇹", locale: "it" as const },
  { code: "AR", label: "Arabic", flag: "🇦🇪", locale: null },
  { code: "JA", label: "Japanese", flag: "🇯🇵", locale: null },
];

const frenchLanguageLabels: Record<string, string> = {
  EN: "Anglais",
  ES: "Espagnol",
  FR: "Français",
  DE: "Allemand",
  AR: "Arabe",
  JA: "Japonais",
};
const spanishLanguageLabels: Record<string, string> = { EN: "Inglés", ES: "Español", FR: "Francés", DE: "Alemán", AR: "Árabe", JA: "Japonés" };
const italianLanguageLabels: Record<string, string> = { EN: "Inglese", ES: "Spagnolo", FR: "Francese", DE: "Tedesco", IT: "Italiano", AR: "Arabo", JA: "Giapponese" };

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const selectedCode = pathname.startsWith("/de/")
    ? "DE"
    : pathname.startsWith("/fr/")
      ? "FR"
      : pathname.startsWith("/es/") ? "ES" : pathname.startsWith("/it/") ? "IT" : "EN";

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

  const selectLanguage = (locale: "en" | "de" | "fr" | "es" | "it") => {
    const destination = getEquivalentRoute(pathname, locale);
    setIsOpen(false);
    if (destination && destination !== pathname) router.push(destination);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[#C9A962]/35 bg-[#173b2a]/65 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F0E6] transition-all duration-300 hover:border-[#C9A962] hover:text-[#C9A962]"
        aria-label={selectedCode === "DE" ? "Sprache auswählen" : selectedCode === "FR" ? "Choisir la langue" : selectedCode === "ES" ? "Seleccionar idioma" : selectedCode === "IT" ? "Seleziona la lingua" : "Select display language"}
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
            {selectedCode === "DE" ? "Sprache" : selectedCode === "FR" ? "Langue" : selectedCode === "ES" ? "Idioma" : selectedCode === "IT" ? "Lingua" : "Display Language"}
          </p>

          {languages.map((language) => {
            const isSelected = language.code === selectedCode;
            const destination = language.locale
              ? getEquivalentRoute(pathname, language.locale)
              : undefined;
            const isAvailable = Boolean(destination);

            return (
              <button
                key={language.code}
                type="button"
                onClick={() => language.locale && selectLanguage(language.locale)}
                disabled={!isAvailable}
                aria-disabled={!isAvailable}
                className={`flex w-full items-center justify-between rounded-[14px] px-3 py-2.5 text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-[#173b2a] text-[#E4C878]"
                    : isAvailable
                      ? "text-[#F5F0E6]/70 hover:bg-white/[0.04] hover:text-[#F5F0E6]"
                      : "cursor-not-allowed text-[#F5F0E6]/25"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span>{language.flag}</span>
                  <span className="text-sm">
                    {selectedCode === "FR"
                      ? frenchLanguageLabels[language.code]
                      : selectedCode === "ES" ? spanishLanguageLabels[language.code]
                      : selectedCode === "IT" ? italianLanguageLabels[language.code]
                      : language.label}
                  </span>
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                  {language.code}
                </span>
              </button>
            );
          })}

          <div className="mx-2 mt-2 border-t border-[#C9A962]/12 px-2 py-3">
            <p className="text-[10px] leading-5 text-[#F5F0E6]/38">
              {selectedCode === "DE"
                ? "Englisch und Deutsch sind für diese Seite verfügbar."
                : selectedCode === "FR"
                  ? pathname === "/fr/export/france"
                    ? "Le français, l’anglais, l’espagnol et l’italien sont disponibles pour cette page."
                    : pathname === "/fr/export/belgique"
                      ? "Le français, l’anglais, l’espagnol et l’italien sont disponibles pour cette page."
                    : "Le français et l’anglais sont disponibles pour cette page."
                  : selectedCode === "ES"
                    ? pathname === "/es/export/alemania"
                      ? "Español, inglés, alemán y francés están disponibles para esta página."
                      : pathname === "/es/export/francia"
                        ? "Español, inglés, francés e italiano están disponibles para esta página."
                        : pathname === "/es/export/belgica"
                          ? "Español, inglés, francés e italiano están disponibles para esta página."
                          : pathname === "/es/export/espana"
                            ? "Español, inglés e italiano están disponibles para esta página."
                      : "El español y el inglés están disponibles para esta página."
                  : selectedCode === "IT"
                    ? pathname === "/it/export/germania"
                      ? "Italiano, inglese, tedesco, francese e spagnolo sono disponibili per questa pagina."
                      : pathname === "/it/export/francia"
                        ? "Italiano, inglese, francese e spagnolo sono disponibili per questa pagina."
                        : pathname === "/it/export/belgio"
                          ? "Italiano, inglese, francese e spagnolo sono disponibili per questa pagina."
                          : pathname === "/it/export/spagna"
                            ? "Italiano, inglese e spagnolo sono disponibili per questa pagina."
                      : "Italiano e inglese sono disponibili per questa pagina."
                  : pathname === "/export/italy"
                    ? "Italian is available for the Italy page."
                  : pathname === "/export/germany"
                    ? "German, French, Spanish and Italian are available for the Germany page."
                  : pathname === "/export/spain"
                    ? "Spanish and Italian are available for the Spain page."
                  : pathname === "/export/france"
                    ? "French, Spanish and Italian are available for the France page."
                    : pathname === "/export/belgium"
                      ? "French, Spanish and Italian are available for the Belgium page."
                    : "German is currently available for the Germany and Austria pages."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
