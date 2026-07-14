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
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm text-accent-2 transition-colors hover:text-accent",
        className,
      )}
    >
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
    <section className="border-b border-white/5 bg-panel py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-7">
        <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.06em] text-text-dim">
          <span className="text-accent">⟨</span>
          {eyebrow}
          <span className="text-accent">⟩</span>
        </p>
        <h1 className="mb-4 max-w-[820px] font-display text-[clamp(32px,4vw,48px)] leading-[1.1] font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="max-w-[640px] text-base text-text-dim md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
