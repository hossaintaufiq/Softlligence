"use client";

import { useEffect } from "react";

/**
 * Mount once per page. Elements marked data-reveal that start below the fold are
 * hidden and eased in as they arrive. Everything stays visible without JS, for
 * reduced-motion users, and for elements already on screen at load.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const pending = targets.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    pending.forEach((el) => el.classList.add("rv-hide"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("rv-hide");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
