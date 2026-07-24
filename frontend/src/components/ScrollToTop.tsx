"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function resetScrollPosition() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Always land at the top when changing routes (esp. after mid-page scroll / mobile menu). */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "";
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";

    resetScrollPosition();
    const raf = requestAnimationFrame(resetScrollPosition);

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
