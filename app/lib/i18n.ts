export const siteUrl = "https://shiveshinternational.com";

export const equivalentRoutes = {
  belgium: {
    en: "/export/belgium",
    "x-default": "/export/belgium",
  },
  austria: {
    en: "/export/austria",
    de: "/de/export/oesterreich",
    "x-default": "/export/austria",
  },
  germany: {
    en: "/export/germany",
    de: "/de/export/deutschland",
    fr: "/fr/export/allemagne",
    "x-default": "/export/germany",
  },
  france: {
    en: "/export/france",
    fr: "/fr/export/france",
    "x-default": "/export/france",
  },
} as const;

export type AvailableLocale = "en" | "de" | "fr";

export const germanyLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.germany.en}`,
  de: `${siteUrl}${equivalentRoutes.germany.de}`,
  fr: `${siteUrl}${equivalentRoutes.germany.fr}`,
  "x-default": `${siteUrl}${equivalentRoutes.germany["x-default"]}`,
} as const;

export const austriaLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.austria.en}`,
  de: `${siteUrl}${equivalentRoutes.austria.de}`,
  "x-default": `${siteUrl}${equivalentRoutes.austria["x-default"]}`,
} as const;

export const franceLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.france.en}`,
  fr: `${siteUrl}${equivalentRoutes.france.fr}`,
  "x-default": `${siteUrl}${equivalentRoutes.france["x-default"]}`,
} as const;

export const belgiumLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.belgium.en}`,
  "x-default": `${siteUrl}${equivalentRoutes.belgium["x-default"]}`,
} as const;

export function getEquivalentRoute(pathname: string, locale: AvailableLocale) {
  const cluster = Object.values(equivalentRoutes).find((routes) =>
    Object.values(routes).some((route) => route === pathname),
  );

  if (!cluster) return undefined;
  if (locale === "en") return cluster.en;
  if (locale === "de") return "de" in cluster ? cluster.de : undefined;
  return "fr" in cluster ? cluster.fr : undefined;
}
