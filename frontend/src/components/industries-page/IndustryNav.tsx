"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";

function readHeaderOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--site-header-offset");
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 72;
}

/** Sticky industry navigation with scroll-spy + smooth section jumps. */
export function IndustryNav() {
  const [active, setActive] = useState(industries[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const clickingRef = useRef(false);

  const getScrollOffset = useCallback(() => {
    const navHeight = navRef.current?.offsetHeight ?? 56;
    return readHeaderOffset() + navHeight + 12;
  }, []);

  const syncIndicator = useCallback((id: string) => {
    const el = itemRefs.current[id];
    const indicator = indicatorRef.current;
    const track = trackRef.current;
    if (!el || !indicator || !track) return;

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.transform = `translateX(${el.offsetLeft - track.scrollLeft}px)`;

    const left = el.offsetLeft;
    const right = left + el.offsetWidth;
    const viewLeft = track.scrollLeft;
    const viewRight = viewLeft + track.clientWidth;
    if (left < viewLeft + 24) {
      track.scrollTo({ left: Math.max(0, left - 40), behavior: "smooth" });
    } else if (right > viewRight - 24) {
      track.scrollTo({ left: right - track.clientWidth + 40, behavior: "smooth" });
    }
  }, []);

  const scrollToIndustry = useCallback(
    (id: string) => {
      const section = document.getElementById(id);
      if (!section) return;

      clickingRef.current = true;
      setActive(id);
      syncIndicator(id);

      const top = section.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

      window.setTimeout(() => {
        clickingRef.current = false;
      }, 700);
    },
    [getScrollOffset, syncIndicator],
  );

  useEffect(() => {
    const sections = industries
      .map((industry) => document.getElementById(industry.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const applyMargins = () => {
      const offset = getScrollOffset();
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${offset}px`;
      });
    };

    const updateActiveFromScroll = () => {
      if (clickingRef.current) return;

      const offset = getScrollOffset();
      const probe = offset + 8;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top - probe <= 0) current = section.id;
        else break;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    applyMargins();
    updateActiveFromScroll();

    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", applyMargins);
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", applyMargins);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [getScrollOffset]);

  useEffect(() => {
    syncIndicator(active);
  }, [active, syncIndicator]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onTrackScroll = () => syncIndicator(active);
    track.addEventListener("scroll", onTrackScroll, { passive: true });
    return () => track.removeEventListener("scroll", onTrackScroll);
  }, [active, syncIndicator]);

  return (
    <nav
      ref={navRef}
      id="industry-nav"
      className="ip-nav"
      aria-label="Industry sectors"
    >
      <div className="ip-container">
        <div ref={trackRef} className="ip-nav__track">
          <span ref={indicatorRef} className="ip-nav__indicator" aria-hidden="true" />
          {industries.map((industry) => {
            const isActive = active === industry.id;
            return (
              <button
                key={industry.id}
                type="button"
                ref={(node) => {
                  itemRefs.current[industry.id] = node;
                }}
                className={cn("ip-nav__item", isActive && "ip-nav__item--active")}
                aria-current={isActive ? "true" : undefined}
                onClick={() => scrollToIndustry(industry.id)}
              >
                <span className="ip-nav__index">{industry.index}</span>
                <span className="ip-nav__label">{industry.tag}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
