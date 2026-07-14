"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Always land at the top when changing routes (esp. after mid-page scroll / mobile menu). */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const clearBodyLock = () => {
      const body = document.body;
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
    };

    clearBodyLock();

    // Instant jump — avoid smooth scroll fighting route changes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
