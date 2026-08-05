"use client";

import { useEffect } from "react";

const SIGNUP_PATH = "/woning-aanmelden/";

function isCommercialContactLink(link: HTMLAnchorElement) {
  const text = link.textContent?.replace(/\s+/g, " ").trim().toLowerCase() ?? "";
  const href = link.getAttribute("href") ?? "";
  const pointsToContact =
    href === "/contact/" ||
    href === "/contact" ||
    href.startsWith("/contact/#");

  const isPlainContactLink = text === "contact";
  const isCommercialLabel =
    text.includes("woning aanmelden") ||
    text.includes("meld uw woning") ||
    text.includes("bespreek uw woning") ||
    text.includes("vrijblijvend kennismaken") ||
    text.includes("vraag een kennismaking") ||
    text.includes("aanmelden");

  return !isPlainContactLink && (pointsToContact || isCommercialLabel);
}

function rewriteCommercialLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
    if (isCommercialContactLink(link)) {
      link.setAttribute("href", SIGNUP_PATH);
    }
  });
}

export default function ContactFormLinks() {
  useEffect(() => {
    rewriteCommercialLinks();

    const observer = new MutationObserver(() => rewriteCommercialLinks());
    observer.observe(document.body, { childList: true, subtree: true });

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      if (!link || !isCommercialContactLink(link)) return;

      event.preventDefault();
      window.location.assign(SIGNUP_PATH);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
