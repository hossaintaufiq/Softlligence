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
    <section className="relative overflow-hidden py-16 md:py-[90px] md:pb-[60px]">
      <Container className="grid items-center gap-10 md:gap-12 max-[980px]:grid-cols-1 min-[981px]:grid-cols-[1.05fr_0.95fr]">
        <div className="max-[980px]:order-2">
          <p className="hero-in hero-in--1 mb-4 flex flex-wrap items-center gap-2.5 font-mono text-[11px] tracking-[0.06em] text-text-dim sm:text-[12.5px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/9 bg-panel/60 px-3 py-1">
              <span className="status-dot" aria-hidden="true" />
              Available for new projects
            </span>
            <span className="text-accent">⟨ 01 ⟩</span>
            <span>BUILD PARTNER</span>
          </p>

          <h1 className="hero-in hero-in--2 mb-5 font-display text-[clamp(30px,4.6vw,58px)] leading-[1.08] font-semibold tracking-tight">
            We turn a whiteboard sketch into{" "}
            <span className="text-gradient">software your organization runs on.</span>
          </h1>

          <p className="hero-in hero-in--3 mb-8 max-w-[520px] text-base text-text-dim sm:text-[17.5px]">
            Softlligence Technologies designs, builds and ships digital products for companies,
            nonprofits, schools and public agencies — custom software, not templates stretched to fit.
          </p>

          <div className="hero-in hero-in--4 mb-10 flex flex-wrap gap-3 sm:mb-11">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="outline" size="lg">
              See our work
            </Button>
          </div>

          <div className="hero-in hero-in--5 flex flex-wrap items-center gap-4 border-t border-white/9 pt-6 sm:gap-5">
            <div className="flex items-center gap-2.5 text-[13px] text-text-dim sm:text-[13.5px]">
              <div className="tracking-[2px] text-accent" aria-hidden="true">★★★★★</div>
              <div>
                <strong className="block font-display text-base text-text sm:text-[17px]">4.9/5</strong>
                <span>Client rating</span>
              </div>
            </div>
            <div className="hidden h-7 w-px bg-white/9 sm:block" />
            <div className="text-[13px] text-text-dim sm:text-[13.5px]">
              <strong className="block font-display text-base text-text sm:text-[17px]">120+</strong>
              <span>Products shipped</span>
            </div>
            <div className="hidden h-7 w-px bg-white/9 sm:block" />
            <div className="text-[13px] text-text-dim sm:text-[13.5px]">
              <strong className="block font-display text-base text-text sm:text-[17px]">8 yrs</strong>
              <span>Building software</span>
            </div>
          </div>
        </div>

        <div
          className="blueprint-wrap hero-in hero-in--3 relative max-[980px]:order-1 max-[980px]:mx-auto max-[980px]:max-w-[380px] sm:max-w-[420px]"
          aria-hidden="true"
        >
          <Blueprint />
        </div>
      </Container>
    </section>
  );
}
