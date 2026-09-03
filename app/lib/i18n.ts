export const siteUrl = "https://shiveshinternational.com";

export const equivalentRoutes = {
  italy: { en: "/export/italy", it: "/it/export/italia", "x-default": "/export/italy" },
  spain: { en: "/export/spain", es: "/es/export/espana", it: "/it/export/spagna", "x-default": "/export/spain" },
  belgium: {
    en: "/export/belgium",
    fr: "/fr/export/belgique",
    es: "/es/export/belgica",
    it: "/it/export/belgio",
    "x-default": "/export/belgium",
  },
  austria: {
    en: "/export/austria",
    de: "/de/export/oesterreich",
    it: "/it/export/austria",
    "x-default": "/export/austria",
  },
  netherlands: {
    en: "/export/netherlands",
    it: "/it/export/paesi-bassi",
    "x-default": "/export/netherlands",
  },
  germany: {
    en: "/export/germany",
    de: "/de/export/deutschland",
    fr: "/fr/export/allemagne",
    es: "/es/export/alemania",
    it: "/it/export/germania",
    "x-default": "/export/germany",
  },
  france: {
    en: "/export/france",
    fr: "/fr/export/france",
    es: "/es/export/francia",
    it: "/it/export/francia",
    "x-default": "/export/france",
  },
} as const;

export type AvailableLocale = "en" | "de" | "fr" | "es" | "it";

export const italyLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.italy.en}`,
  it: `${siteUrl}${equivalentRoutes.italy.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.italy["x-default"]}`,
} as const;

export const spainLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.spain.en}`,
  es: `${siteUrl}${equivalentRoutes.spain.es}`,
  it: `${siteUrl}${equivalentRoutes.spain.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.spain["x-default"]}`,
} as const;

export const germanyLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.germany.en}`,
  de: `${siteUrl}${equivalentRoutes.germany.de}`,
  fr: `${siteUrl}${equivalentRoutes.germany.fr}`,
  es: `${siteUrl}${equivalentRoutes.germany.es}`,
  it: `${siteUrl}${equivalentRoutes.germany.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.germany["x-default"]}`,
} as const;

export const austriaLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.austria.en}`,
  de: `${siteUrl}${equivalentRoutes.austria.de}`,
  it: `${siteUrl}${equivalentRoutes.austria.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.austria["x-default"]}`,
} as const;

export const netherlandsLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.netherlands.en}`,
  it: `${siteUrl}${equivalentRoutes.netherlands.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.netherlands["x-default"]}`,
} as const;

export const franceLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.france.en}`,
  fr: `${siteUrl}${equivalentRoutes.france.fr}`,
  es: `${siteUrl}${equivalentRoutes.france.es}`,
  it: `${siteUrl}${equivalentRoutes.france.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.france["x-default"]}`,
} as const;

export const belgiumLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.belgium.en}`,
  fr: `${siteUrl}${equivalentRoutes.belgium.fr}`,
  es: `${siteUrl}${equivalentRoutes.belgium.es}`,
  it: `${siteUrl}${equivalentRoutes.belgium.it}`,
  "x-default": `${siteUrl}${equivalentRoutes.belgium["x-default"]}`,
} as const;

export function getEquivalentRoute(pathname: string, locale: AvailableLocale) {
  const cluster = Object.values(equivalentRoutes).find((routes) =>
    Object.values(routes).some((route) => route === pathname),
  );

  if (!cluster) return undefined;
  if (locale === "en") return cluster.en;
  if (locale === "de") return "de" in cluster ? cluster.de : undefined;
  if (locale === "fr") return "fr" in cluster ? cluster.fr : undefined;
  if (locale === "es") return "es" in cluster ? cluster.es : undefined;
  return "it" in cluster ? cluster.it : undefined;
}
