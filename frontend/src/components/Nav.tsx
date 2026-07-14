"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-ink/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-white/5 bg-ink/72 backdrop-blur-[14px]",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[17px] font-semibold min-[721px]:text-[19px]"
        >
          <span className="flex text-accent transition-transform duration-300 hover:scale-105" aria-hidden="true">
            <BrandLogo />
          </span>
          <span className="max-[480px]:hidden">Softlligence Technologies</span>
          <span className="hidden max-[480px]:inline">Softlligence</span>
        </Link>

        <nav
          className={cn(
            "max-[720px]:fixed max-[720px]:top-[72px] max-[720px]:right-0 max-[720px]:left-0 max-[720px]:bottom-0 max-[720px]:flex max-[720px]:flex-col max-[720px]:gap-1 max-[720px]:overflow-y-auto max-[720px]:border-b max-[720px]:border-white/9 max-[720px]:bg-ink/98 max-[720px]:px-7 max-[720px]:py-6 max-[720px]:backdrop-blur-xl max-[720px]:transition-all max-[720px]:duration-300",
            "min-[721px]:flex min-[721px]:items-center min-[721px]:gap-[28px]",
            isOpen
              ? "max-[720px]:pointer-events-auto max-[720px]:translate-y-0 max-[720px]:opacity-100"
              : "max-[720px]:pointer-events-none max-[720px]:-translate-y-3 max-[720px]:opacity-0",
          )}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "nav-link text-[14.5px] text-text-dim hover:text-text max-[720px]:rounded-lg max-[720px]:border max-[720px]:border-white/5 max-[720px]:px-4 max-[720px]:py-3.5 max-[720px]:transition-all",
                  isActive && "nav-link--active text-text max-[720px]:border-accent/30 max-[720px]:bg-panel",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" className="mt-2 min-[721px]:hidden" block>
            Book a call
          </Button>
        </nav>

        <div className="flex items-center gap-2.5">
          <Button href="/contact" className="max-[720px]:hidden">
            Book a call
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
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
    </header>
  );
}
