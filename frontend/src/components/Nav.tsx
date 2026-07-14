"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/5 bg-ink/72 backdrop-blur-[14px]">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-[19px] font-semibold">
          <span className="flex text-accent" aria-hidden="true">
            <BrandLogo />
          </span>
          Softlligence Technologies
        </Link>

        <nav
          className={cn(
            "max-[720px]:fixed max-[720px]:top-[72px] max-[720px]:right-0 max-[720px]:left-0 max-[720px]:flex max-[720px]:flex-col max-[720px]:gap-0 max-[720px]:border-b max-[720px]:border-white/9 max-[720px]:bg-ink max-[720px]:px-7 max-[720px]:pt-3.5 max-[720px]:pb-6.5 max-[720px]:transition-all max-[720px]:duration-200",
            "min-[721px]:flex min-[721px]:gap-[30px]",
            isOpen
              ? "max-[720px]:pointer-events-auto max-[720px]:translate-y-0 max-[720px]:opacity-100"
              : "max-[720px]:pointer-events-none max-[720px]:-translate-y-2 max-[720px]:opacity-0",
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[14.5px] text-text-dim transition-colors hover:text-text max-[720px]:border-b max-[720px]:border-white/5 max-[720px]:py-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button href="/contact" variant="ghost" className="max-[720px]:hidden min-[721px]:max-[980px]:hidden">
            Contact
          </Button>
          <Button href="/contact" className="max-[720px]:hidden">
            Book a call
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="hidden cursor-pointer flex-col gap-1 border-none bg-transparent p-2 max-[720px]:flex"
          >
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
          </button>
        </div>
      </Container>
    </header>
  );
}
