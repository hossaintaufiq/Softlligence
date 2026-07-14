import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export function SectionLink({
  href,
  children = "View all",
  className,
}: SectionLinkProps) {
  return (
    <Link href={href} className={cn("section-link", className)}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-panel">
      <div className="hero-grid hero-grid--page pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-7 sm:py-14 md:py-[72px]">
        <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-text-dim uppercase sm:mb-4 sm:text-[12px]">
          <span className="text-accent">/</span> {eyebrow}
        </p>
        <h1 className="mb-3 max-w-[820px] font-display text-[clamp(26px,7vw,48px)] leading-[1.08] font-semibold tracking-tight sm:mb-4">
          {title}
        </h1>
        {description && (
          <p className="max-w-[560px] text-[14.5px] leading-relaxed text-text-dim sm:text-[15px] md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
