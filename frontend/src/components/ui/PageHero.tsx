import Image from "next/image";
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

export interface PageHeroMeta {
  label: string;
  value?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional full-bleed atmosphere image */
  backgroundImage?: string;
  /** Small professional chips under the description */
  meta?: PageHeroMeta[];
  /** Optional CTA row */
  actions?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  meta,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "page-hero relative isolate overflow-hidden border-b border-white/8 bg-panel",
        className,
      )}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-ink via-ink/88 to-ink/55"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/40"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="hero-grid hero-grid--page pointer-events-none absolute inset-0" aria-hidden="true" />
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 50% at 90% 20%, color-mix(in srgb, var(--theme-accent) 16%, transparent), transparent), radial-gradient(ellipse 40% 45% at 10% 80%, color-mix(in srgb, var(--theme-accent-2) 12%, transparent), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 pt-12 pb-10 min-[400px]:px-5 sm:px-7 sm:pt-16 sm:pb-14 md:pt-[88px] md:pb-[76px]">
        <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-text-dim uppercase sm:mb-4 sm:text-[12px]">
          <span className="text-accent">/</span> {eyebrow}
        </p>
        <h1 className="mb-3 max-w-[18ch] font-display text-[clamp(28px,7.2vw,52px)] leading-[1.06] font-semibold tracking-tight sm:mb-4 sm:max-w-[820px]">
          {title}
        </h1>
        {description && (
          <p className="max-w-[34rem] text-[14px] leading-relaxed text-text-dim sm:text-[15px] md:text-base">
            {description}
          </p>
        )}

        {meta && meta.length > 0 && (
          <ul className="mt-7 flex list-none flex-wrap gap-2 p-0 sm:mt-8 sm:gap-2.5">
            {meta.map((item) => (
              <li
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-ink/45 px-3 py-1.5 backdrop-blur-md sm:px-3.5 sm:py-2"
              >
                {item.value ? (
                  <>
                    <span className="font-mono text-[11px] font-semibold text-accent sm:text-[12px]">
                      {item.value}
                    </span>
                    <span className="text-[11px] text-text-dim sm:text-[12px]">{item.label}</span>
                  </>
                ) : (
                  <span className="font-mono text-[11px] tracking-wide text-text-dim sm:text-[12px]">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {actions && <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">{actions}</div>}
      </div>
    </section>
  );
}
