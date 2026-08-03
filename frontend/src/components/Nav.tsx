"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const MOBILE_BREAKPOINT = 980;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const scrollLockY = useRef(0);
  const skipScrollRestore = useRef(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "";
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncOffset = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--site-header-offset", `${h}px`);
    };

    syncOffset();
    const ro = new ResizeObserver(syncOffset);
    ro.observe(header);
    window.addEventListener("resize", syncOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncOffset);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    skipScrollRestore.current = true;
    setIsOpen(false);

    const body = document.body;
    body.style.overflow = "";
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    skipScrollRestore.current = false;
    const body = document.body;
    const y = window.scrollY;
    scrollLockY.current = y;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      if (!skipScrollRestore.current) {
        window.scrollTo({ top: scrollLockY.current, left: 0, behavior: "auto" });
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header ref={headerRef} className="pointer-events-none sticky top-0 z-[100]">
      <div
        className={cn(
          "pointer-events-auto relative z-[110] mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] transition-[padding] duration-300 min-[400px]:gap-3 min-[400px]:px-5 sm:px-7 sm:pt-5",
          scrolled && "pt-3 sm:pt-3.5",
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 justify-self-start font-display text-[17px] font-semibold tracking-tight text-text transition-opacity duration-200 hover:opacity-90 sm:text-[18px]"
        >
          <span className="flex shrink-0 text-accent" aria-hidden="true">
            <BrandLogo size={30} />
          </span>
          <span className="truncate max-[420px]:hidden">Softlligence</span>
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "site-header hidden h-11 items-center gap-0.5 rounded-full border px-1.5 min-[980px]:flex",
            scrolled && "site-header--scrolled",
          )}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] transition-colors duration-200",
                  isActive
                    ? "bg-[rgb(12_18_32_/0.06)] font-medium text-text"
                    : "text-text-dim hover:text-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 justify-self-end">
          <Button href="/contact" className="max-[979px]:hidden shadow-[0_8px_24px_rgba(232,160,18,0.28)]">
            Book a call
          </Button>
          <button
            ref={toggleRef}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
            className={cn(
              "site-header relative hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors max-[979px]:flex",
              scrolled && "site-header--scrolled",
            )}
          >
            <span
              className={cn(
                "absolute block h-0.5 w-4 bg-text transition-all duration-300",
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-4 bg-text transition-all duration-300",
                isOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-4 bg-text transition-all duration-300",
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={cn(
          "pointer-events-auto fixed inset-0 z-[105] bg-[rgb(12_18_32_/0.35)] backdrop-blur-[2px] transition-opacity duration-300 max-[979px]:block min-[980px]:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <nav
        id={menuId}
        aria-label="Mobile"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={cn(
          "mobile-nav-panel pointer-events-auto fixed top-[4.75rem] right-4 left-4 z-[106] mx-auto flex max-h-[calc(100dvh-5.5rem)] w-auto max-w-[22rem] flex-col items-center gap-1 overflow-y-auto overscroll-contain rounded-2xl border px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-[opacity,transform,visibility] duration-300 max-[979px]:flex min-[980px]:hidden sm:right-7 sm:left-auto",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              className={cn(
                "nav-link w-full rounded-xl border px-4 py-3 text-center text-[15px] text-text-dim transition-all duration-200 hover:text-text",
                isActive && "nav-link--active text-text",
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mt-2 w-full">
          <Button href="/contact" block onClick={closeMenu}>
            Book a call
          </Button>
        </div>
      </nav>
    </header>
  );
}
