export const siteUrl = "https://shiveshinternational.com";

export const equivalentRoutes = {
  austria: {
    en: "/export/austria",
    de: "/de/export/oesterreich",
    "x-default": "/export/austria",
  },
  germany: {
    en: "/export/germany",
    de: "/de/export/deutschland",
    "x-default": "/export/germany",
  },
} as const;

export type AvailableLocale = "en" | "de";

export const germanyLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.germany.en}`,
  de: `${siteUrl}${equivalentRoutes.germany.de}`,
  "x-default": `${siteUrl}${equivalentRoutes.germany["x-default"]}`,
} as const;

export const austriaLanguageAlternates = {
  en: `${siteUrl}${equivalentRoutes.austria.en}`,
  de: `${siteUrl}${equivalentRoutes.austria.de}`,
  "x-default": `${siteUrl}${equivalentRoutes.austria["x-default"]}`,
} as const;

export function getEquivalentRoute(pathname: string, locale: AvailableLocale) {
  const cluster = Object.values(equivalentRoutes).find((routes) =>
    Object.values(routes).some((route) => route === pathname),
  );

  return cluster?.[locale];
}
