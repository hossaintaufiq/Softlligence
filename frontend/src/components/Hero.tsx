import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function Blueprint() {
  return (
    <svg className="relative z-10 h-auto w-full overflow-visible" viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg">
      <rect className="bp-draw bp-frame" x="40" y="30" width="400" height="260" rx="10" />
      <line className="bp-draw bp-frame" x1="40" y1="66" x2="440" y2="66" />
      <circle className="bp-draw bp-dot" cx="60" cy="48" r="5" />
      <circle className="bp-draw bp-dot" cx="78" cy="48" r="5" />
      <circle className="bp-draw bp-dot" cx="96" cy="48" r="5" />

      <rect className="bp-draw bp-block" x="62" y="90" width="150" height="150" rx="4" />
      <rect className="bp-draw bp-block bp-block--d1" x="228" y="90" width="192" height="70" rx="4" />
      <rect className="bp-draw bp-block bp-block--d2" x="228" y="170" width="90" height="70" rx="4" />
      <rect className="bp-draw bp-block bp-block--d3" x="330" y="170" width="90" height="70" rx="4" />
      <rect className="bp-draw bp-block bp-block--d4" x="62" y="250" width="358" height="20" rx="4" />

      <rect className="bp-draw bp-frame bp-block--d5" x="300" y="240" width="110" height="190" rx="14" />
      <rect className="bp-draw bp-block bp-block--d6" x="314" y="264" width="82" height="60" rx="3" />
      <rect className="bp-draw bp-block bp-block--d6" x="314" y="332" width="82" height="14" rx="3" />
      <rect className="bp-draw bp-block bp-block--d6" x="314" y="352" width="82" height="14" rx="3" />

      <g className="bp-measure">
        <line x1="40" y1="310" x2="440" y2="310" />
        <line x1="40" y1="304" x2="40" y2="316" />
        <line x1="440" y1="304" x2="440" y2="316" />
        <text x="240" y="326" textAnchor="middle">400</text>
      </g>

      <circle className="bp-cursor" r="5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-10 sm:pt-14 sm:pb-12 md:pt-[88px] md:pb-16">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-10 md:gap-14 max-[980px]:grid-cols-1 min-[981px]:grid-cols-[1.1fr_0.9fr]">
        <div className="max-[980px]:order-1">
          <p className="hero-in hero-in--1 mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.08em] text-text-dim uppercase sm:text-[12px]">
            <span className="inline-flex items-center gap-2 rounded border border-white/10 bg-panel/70 px-3 py-1.5 normal-case tracking-normal">
              <span className="status-dot" aria-hidden="true" />
              Available for projects
            </span>
            <span className="text-accent">01</span>
            <span>Software studio</span>
          </p>

          <h1 className="hero-in hero-in--2 mb-5 font-display text-[clamp(32px,5vw,56px)] leading-[1.06] font-semibold tracking-tight">
            Software that organizations{" "}
            <span className="text-gradient">actually run on.</span>
          </h1>

          <p className="hero-in hero-in--3 mb-8 max-w-[520px] text-[15px] leading-relaxed text-text-dim sm:text-lg">
            Softlligence designs, builds and ships websites, web apps and mobile products for
            companies, schools, agencies and nonprofits — custom builds, not stretched templates.
          </p>

          <div className="hero-in hero-in--4 mb-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View work
            </Button>
          </div>

          <dl className="hero-in hero-in--5 grid grid-cols-3 gap-3 border-t border-white/9 pt-6 sm:max-w-[460px] sm:gap-4">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-text-dim uppercase">Focus</dt>
              <dd className="m-0 mt-1 font-display text-[15px] font-semibold text-text sm:text-xl">Full-stack</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-text-dim uppercase">Reply</dt>
              <dd className="m-0 mt-1 font-display text-[15px] font-semibold text-text sm:text-xl">&lt;24h</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-text-dim uppercase">Team</dt>
              <dd className="m-0 mt-1 font-display text-[15px] font-semibold text-text sm:text-xl">Founders</dd>
            </div>
          </dl>
        </div>

        <div
          className="blueprint-wrap hero-in hero-in--3 relative w-full max-[980px]:order-2 max-[980px]:mx-auto max-[980px]:max-w-[360px] sm:max-w-[420px]"
          aria-hidden="true"
        >
          <Blueprint />
        </div>
      </Container>
    </section>
  );
}
