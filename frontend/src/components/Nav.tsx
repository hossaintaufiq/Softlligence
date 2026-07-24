"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const MOBILE_BREAKPOINT = 721;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrollLockY = useRef(0);
  const skipScrollRestore = useRef(false);

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
    <header className="sticky top-0 z-[100]">
      {/* Blur lives on the bar only so the fixed mobile panel is not trapped */}
      <div
        className={cn(
          "site-header relative z-[110] border-b transition-all duration-300",
          scrolled
            ? "site-header--scrolled border-white/10 bg-ink/90 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-white/5 bg-ink/85",
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2 font-display text-[17px] font-semibold min-[721px]:text-[19px]"
          >
            <span className="flex shrink-0 text-accent transition-transform duration-300 hover:scale-105" aria-hidden="true">
              <BrandLogo />
            </span>
            <span className="truncate max-[480px]:hidden">Softlligence Technologies</span>
            <span className="hidden max-[480px]:inline">Softlligence</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-[28px] min-[721px]:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link text-[14.5px] text-text-dim hover:text-text",
                    isActive && "nav-link--active text-text",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <ThemeToggle className="max-[720px]:hidden" />
            <Button href="/contact" className="max-[720px]:hidden">
              Book a call
            </Button>
            <button
              ref={toggleRef}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={toggleMenu}
              className="relative hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/9 bg-panel/50 max-[720px]:flex"
            >
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-text transition-all duration-300",
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-text transition-all duration-300",
                  isOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-text transition-all duration-300",
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                )}
              />
            </button>
          </div>
        </Container>
      </div>

      {/* Backdrop — outside blurred bar so fixed positioning works */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-[105] bg-ink/60 backdrop-blur-[2px] transition-opacity duration-300 max-[720px]:block min-[721px]:hidden",
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
          "mobile-nav-panel fixed top-[72px] right-0 left-0 z-[106] flex max-h-[calc(100dvh-72px)] flex-col items-center gap-1 overflow-y-auto overscroll-contain border-b border-white/9 bg-ink/98 px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_24px_48px_rgba(0,0,0,0.35)] transition-[opacity,transform,visibility] duration-300 max-[720px]:flex min-[721px]:hidden sm:px-7",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0",
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
                "nav-link w-full max-w-[320px] rounded-lg border border-white/5 px-4 py-3.5 text-center text-[15px] text-text-dim transition-all hover:border-white/12 hover:bg-panel/60 hover:text-text",
                isActive && "nav-link--active border-accent/30 bg-panel text-text",
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mt-3 flex w-full max-w-[320px] items-center justify-center gap-3">
          <ThemeToggle />
          <Button href="/contact" block onClick={closeMenu}>
            Book a call
          </Button>
        </div>
      </nav>
    </header>
  );
}
