import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Torremolinos",
    short_name: "VBE Torremolinos",
    description: "Fullservice verhuurbeheer en vastgoedbeheer voor woningeigenaren in Torremolinos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/verhuurbeheer-torremolinos-logo.png?v=torremolinos-20260805", sizes: "1254x1254", type: "image/png" }],
  };
}
