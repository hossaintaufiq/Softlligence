"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Premium sticky industry navigation — same #ids and scroll-spy behavior. */
export function IndustryNav() {
  const [active, setActive] = useState(industries[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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

  useEffect(() => {
    const el = itemRefs.current[active];
    const indicator = indicatorRef.current;
    const nav = navRef.current;
    if (!el || !indicator || !nav) return;

    const navRect = nav.querySelector(".ip-nav__track")?.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    if (!navRect) return;

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
  }, [active]);

  return (
    <nav
      ref={navRef}
      id="industry-nav"
      className="ip-nav"
      aria-label="Industry sectors"
    >
      <div className="ip-container">
        <div className="ip-nav__track">
          <span ref={indicatorRef} className="ip-nav__indicator" aria-hidden="true" />
          {industries.map((industry) => {
            const isActive = active === industry.id;
            return (
              <Link
                key={industry.id}
                ref={(node) => {
                  itemRefs.current[industry.id] = node;
                }}
                href={`#${industry.id}`}
                className={cn("ip-nav__item", isActive && "ip-nav__item--active")}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="ip-nav__index">{industry.index}</span>
                <span className="ip-nav__label">{industry.tag}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
