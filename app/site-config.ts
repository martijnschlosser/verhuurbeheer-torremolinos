export const siteConfig = {
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
      "El Bajondillo",
      "Montemar",
      "Playamar",
      "Los Álamos",
      "El Pinillo",
      "Torremolinos Pueblo",
      "Benalmádena",
      "Málaga",
    ],
  },
  domain: "https://verhuurbeheertorremolinos.nl",
  contact: {
    email: "sophie@verhuurbeheerspanje.nl",
    phoneDisplay: "+31 85 212 8105",
    phoneE164: "+31852128105",
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
    title: "Verhuurbeheer Torremolinos | Voor Nederlandse eigenaren",
    description:
      "Fullservice verhuurbeheer in Torremolinos voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
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
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const phoneHref = `tel:${siteConfig.contact.phoneE164}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
