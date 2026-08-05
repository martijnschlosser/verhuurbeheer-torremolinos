import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Torremolinos",
    short_name: "VBE Torremolinos",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Torremolinos, Casares en Manilva.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/verhuurbeheer-torremolinos-logo.png", sizes: "1254x1254", type: "image/png" }],
  };
}
