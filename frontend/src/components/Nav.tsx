"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
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
  const scrollLockY = useRef(0);
  const skipScrollRestore = useRef(false);

  useEffect(() => {
    // Clear any leftover scroll-lock from HMR / menu (prevents blank/stuck pages)
    const body = document.body;
    body.style.overflow = "";
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
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
      // Only restore mid-page scroll when closing the menu in-place — never after route change
      if (!skipScrollRestore.current) {
        window.scrollTo({ top: scrollLockY.current, left: 0, behavior: "auto" });
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="pointer-events-none sticky top-0 z-[100]">
      <div
        className={cn(
          "pointer-events-auto relative z-[110] mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 pt-4 transition-all duration-300 min-[400px]:px-5 sm:px-7 sm:pt-5",
          scrolled && "pt-3 sm:pt-3.5",
        )}
      >
        {/* Left — logo floats over hero */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 justify-self-start font-display text-[17px] font-semibold tracking-tight text-text sm:text-[18px]"
        >
          <span className="flex shrink-0 text-accent drop-shadow-[0_0_18px_rgba(255,176,32,0.35)]" aria-hidden="true">
            <BrandLogo size={30} />
          </span>
          <span className="truncate max-[420px]:hidden">Softlligence</span>
        </Link>

        {/* Center — compact links pill (desktop) */}
        <nav
          aria-label="Primary"
          className={cn(
            "site-header hidden h-11 items-center gap-1 rounded-full border px-2 min-[980px]:flex",
            scrolled
              ? "site-header--scrolled border-white/14 bg-ink/70 shadow-[0_10px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "border-white/12 bg-ink/45 shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-md",
          )}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] text-text-dim transition-colors hover:text-text",
                  isActive && "bg-white/6 text-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right — CTA (+ theme / mobile toggle) */}
        <div className="flex items-center justify-end gap-2 justify-self-end">
          <ThemeToggle className="max-[979px]:hidden" />
          <Button href="/contact" className="max-[979px]:hidden shadow-[0_0_24px_rgba(255,176,32,0.22)]">
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
              "relative hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors max-[979px]:flex",
              scrolled
                ? "border-white/14 bg-ink/70 backdrop-blur-xl"
                : "border-white/12 bg-ink/45 backdrop-blur-md",
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

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={cn(
          "pointer-events-auto fixed inset-0 z-[105] bg-ink/55 backdrop-blur-[2px] transition-opacity duration-300 max-[979px]:block min-[980px]:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile panel */}
      <nav
        id={menuId}
        aria-label="Mobile"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={cn(
          "mobile-nav-panel pointer-events-auto fixed top-[4.75rem] right-4 left-4 z-[106] mx-auto flex max-h-[calc(100dvh-5.5rem)] w-auto max-w-[22rem] flex-col items-center gap-1 overflow-y-auto overscroll-contain rounded-2xl border border-white/12 bg-ink/92 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 max-[979px]:flex min-[980px]:hidden sm:right-7 sm:left-auto",
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
                "nav-link w-full rounded-xl border border-white/5 px-4 py-3 text-center text-[15px] text-text-dim transition-all hover:border-white/12 hover:bg-panel/60 hover:text-text",
                isActive && "nav-link--active border-accent/30 bg-panel text-text",
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mt-2 flex w-full items-center justify-center gap-3">
          <ThemeToggle />
          <Button href="/contact" block onClick={closeMenu}>
            Book a call
          </Button>
        </div>
      </nav>
    </header>
  );
}
