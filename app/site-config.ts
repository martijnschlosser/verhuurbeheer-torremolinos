export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "torremolinos",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheertorremolinos.nl",
  },
  brand: {
    name: "Verhuurbeheer Torremolinos",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Torremolinos",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: [
      "Torremolinos Centro",
      "La Carihuela",
      "Playamar",
      "Los Álamos",
      "Montemar",
      "El Bajondillo",
      "El Pinillo",
      "La Colina",
      "El Calvario",
      "Cortijo de Maza",
    ],
  },
  assets: {
    logo: "/verhuurbeheer-torremolinos-logo.png?v=torremolinos-20260805",
    hero: "/torremolinos-hero.webp",
    social: "/luxe-woning-torremolinos-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-torremolinos.webp",
  },
  domain: "https://verhuurbeheertorremolinos.nl",
  contact: {
    email: "contact@verhuurbeheerspanje.nl",
    whatsapp: "31852128105",
  },
  pricing: {
    holidayRental: "Vanaf 18%",
    midterm: "Eenmalig 1 maand huur",
    longterm: "Eenmalig 1 maand huur",
  },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Torremolinos | Fullservice woningverhuur",
    description:
      "Fullservice verhuurbeheer in Torremolinos voor Nederlandse eigenaren. Airbnb, Booking.com, gastenservice, schoonmaak, onderhoud en woningcontroles.",
    primaryKeywords: [
      "verhuurbeheer Torremolinos",
      "vakantieverhuurbeheer Torremolinos",
      "vastgoedbeheer Torremolinos",
      "woningbeheer Torremolinos",
      "vakantiewoning verhuren Torremolinos",
      "Airbnb beheer Torremolinos",
      "verhuurlicentie Torremolinos",
      "appartement verhuren Torremolinos",
      "villa verhuren Torremolinos",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Torremolinos",
      "vakantiewoning professioneel laten verhuren in Torremolinos",
      "Airbnb en Booking beheer voor appartement in Torremolinos",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Torremolinos",
      "villa verhuren met beheer in Torremolinos",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-VFMM3S2E9K",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "arcC4o1H36iumgfVkmJV_usywr0f1IjD_tYmbkzteW4",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") =>
  `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
