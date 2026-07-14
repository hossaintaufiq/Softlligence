"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { industries } from "@/lib/content";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function IndustrySubnav() {
  const [active, setActive] = useState(industries[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = industries
      .map((industry) => document.getElementById(industry.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const updateObserver = () => {
      const navHeight = navRef.current?.offsetHeight ?? 56;
      const headerHeight = 72;
      const offset = headerHeight + navHeight + 12;

      sections.forEach((section) => {
        section.style.scrollMarginTop = `${offset}px`;
      });

      return new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target.id) setActive(visible.target.id);
        },
        {
          rootMargin: `-${offset}px 0px -45% 0px`,
          threshold: [0.05, 0.15, 0.3],
        },
      );
    };

    let observer = updateObserver();
    sections.forEach((section) => observer.observe(section));

    const onResize = () => {
      observer.disconnect();
      observer = updateObserver();
      sections.forEach((section) => observer.observe(section));
    };

    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-[72px] z-50 border-b border-white/8 bg-ink/94 backdrop-blur-xl"
      aria-label="Industry sectors"
    >
      <Container className="py-2.5 sm:py-3">
        {/* Compact 2-col touch grid on phones, wrap row from tablet up */}
        <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 min-[520px]:flex min-[520px]:flex-wrap">
          {industries.map((industry) => {
            const isActive = active === industry.id;
            return (
              <li key={industry.id} className="min-w-0 min-[520px]:w-auto">
                <Link
                  href={`#${industry.id}`}
                  className={cn(
                    "flex h-full min-h-10 items-center justify-center rounded-xl border px-2.5 py-2.5 text-center font-mono text-[11px] leading-tight tracking-wide transition-all min-[520px]:inline-flex min-[520px]:min-h-0 min-[520px]:rounded-full min-[520px]:px-3.5 min-[520px]:py-2 sm:px-4 sm:text-xs",
                    isActive
                      ? "border-accent/45 bg-accent/15 text-accent shadow-[0_0_20px_color-mix(in_srgb,var(--theme-accent)_12%,transparent)]"
                      : "border-white/10 bg-panel/40 text-text-dim active:bg-panel hover:border-white/20 hover:bg-panel hover:text-text",
                  )}
                >
                  <span className="truncate">{industry.tag}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
