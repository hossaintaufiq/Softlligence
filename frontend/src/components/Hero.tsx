import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function Blueprint() {
  return (
    <svg className="h-auto w-full overflow-visible" viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg">
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
        <text x="240" y="326" textAnchor="middle">
          400
        </text>
      </g>

      <circle className="bp-cursor" r="5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="py-[90px] pb-[60px]">
      <Container className="grid items-center gap-12 max-[980px]:grid-cols-1 min-[981px]:grid-cols-[1.05fr_0.95fr]">
        <div className="max-[980px]:order-2">
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.06em] text-text-dim">
            <span className="text-accent">⟨ 01 ⟩</span> BUILD PARTNER FOR BUSINESSES &amp; ORGANIZATIONS
          </p>
          <h1 className="mb-5.5 font-display text-[clamp(34px,4.6vw,58px)] leading-[1.08] font-semibold tracking-tight">
            We turn a whiteboard sketch into a website or app your organization actually runs on.
          </h1>
          <p className="mb-8 max-w-[520px] text-[17.5px] text-text-dim">
            Softlligence Technologies designs, builds and ships digital products for companies,
            nonprofits, schools and public agencies — custom software, not templates stretched to
            fit.
          </p>

          <div className="mb-11 flex flex-wrap gap-3.5">
            <Button href="#contact" size="lg">
              Start a project
            </Button>
            <Button href="#work" variant="outline" size="lg">
              See our work
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-5 border-t border-white/9 pt-6">
            <div className="flex items-center gap-2.5 text-[13.5px] text-text-dim">
              <div className="tracking-[2px] text-accent" aria-hidden="true">
                ★★★★★
              </div>
              <div>
                <strong className="block font-display text-[17px] text-text">4.9/5</strong>
                <span>Client rating</span>
              </div>
            </div>
            <div className="h-7 w-px bg-white/9" />
            <div className="text-[13.5px] text-text-dim">
              <strong className="block font-display text-[17px] text-text">120+</strong>
              <span>Products shipped</span>
            </div>
            <div className="h-7 w-px bg-white/9" />
            <div className="text-[13.5px] text-text-dim">
              <strong className="block font-display text-[17px] text-text">8 yrs</strong>
              <span>Building software</span>
            </div>
          </div>
        </div>

        <div className="relative max-[980px]:order-1 max-[980px]:mx-auto max-[980px]:max-w-[420px]" aria-hidden="true">
          <Blueprint />
        </div>
      </Container>
    </section>
  );
}
