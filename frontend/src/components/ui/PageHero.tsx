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
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(180deg, black, transparent 90%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-7 md:py-[72px]">
        <p className="mb-4 font-mono text-[12px] tracking-[0.14em] text-text-dim uppercase">
          <span className="text-accent">/</span> {eyebrow}
        </p>
        <h1 className="mb-4 max-w-[820px] font-display text-[clamp(28px,4vw,48px)] leading-[1.08] font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="max-w-[560px] text-[15px] leading-relaxed text-text-dim md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
