import type { Metadata } from "next";
import "@fontsource-variable/nunito";
import "./globals.css";
import "./regions.css";
import "./blog-lead.css";
import "./article.css";
import "./mobile-menu.css";
import "./navigation.css";
import "./utilities.css";
import "./cookies.css";
import "./design-upgrade.css";
import CookieConsent from "./CookieConsent";
import Analytics from "./Analytics";
import ContactFormLinks from "./ContactFormLinks";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    ...siteConfig.seo.primaryKeywords,
    ...siteConfig.seo.longTailKeywords,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Verhuurbeheer Torremolinos",
    description:
      "Lokaal fullservice verhuurbeheer voor Nederlandse woningeigenaren in Torremolinos, Benalmádena en Málaga.",
    url: "/",
    siteName: "Verhuurbeheer Torremolinos",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/luxe-woning-torremolinos-zeezicht.webp",
        width: 1800,
        height: 1200,
        alt: "Luxe vakantiewoning met zeezicht in Torremolinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verhuurbeheer Torremolinos",
    description:
      "Fullservice verhuur- en vastgoedbeheer in Torremolinos, Benalmádena en Málaga.",
    images: ["/luxe-woning-torremolinos-zeezicht.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  category: "vastgoedbeheer",
  verification: siteConfig.analytics.searchConsoleVerification
    ? { google: siteConfig.analytics.searchConsoleVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        <link
          rel="preload"
          href="/luxe-woning-torremolinos-zeezicht.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body>
        {children}
        <ContactFormLinks />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
