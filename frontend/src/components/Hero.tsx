import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

/**
 * Premium tech visual — system architecture + live build telemetry.
 * Pure SVG / CSS motion (respects prefers-reduced-motion via globals).
 */
export function HeroSystemVisual() {
  return (
    <div className="hero-sys relative w-full">
      <div className="hero-sys__glow" aria-hidden="true" />
      <div className="hero-sys__scan" aria-hidden="true" />

      <svg
        className="hero-sys__svg relative z-10 h-auto w-full overflow-visible"
        viewBox="0 0 480 460"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated system architecture diagram"
      >
        <defs>
          <linearGradient id="hs-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--theme-panel)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--theme-ink)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hs-accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="var(--theme-accent-2)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0.15" />
          </linearGradient>
          <filter id="hs-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer chassis */}
        <rect
          className="hs-draw hs-frame"
          x="28"
          y="24"
          width="424"
          height="412"
          rx="18"
          fill="url(#hs-panel)"
        />
        {/* Corner brackets */}
        <path className="hs-draw hs-bracket" d="M44 48h28M44 48v28" />
        <path className="hs-draw hs-bracket" d="M436 48h-28M436 48v28" />
        <path className="hs-draw hs-bracket" d="M44 412h28M44 412v-28" />
        <path className="hs-draw hs-bracket" d="M436 412h-28M436 412v-28" />

        {/* Title bar */}
        <rect className="hs-draw hs-bar" x="48" y="44" width="384" height="36" rx="8" />
        <circle className="hs-dot hs-dot--r" cx="68" cy="62" r="4" />
        <circle className="hs-dot hs-dot--a" cx="84" cy="62" r="4" />
        <circle className="hs-dot hs-dot--g" cx="100" cy="62" r="4" />
        <text className="hs-label" x="120" y="66">
          softlligence · runtime
        </text>
        <text className="hs-label hs-label--accent" x="400" y="66" textAnchor="end">
          LIVE
        </text>

        {/* Architecture nodes */}
        <g className="hs-nodes">
          {/* Design */}
          <rect className="hs-draw hs-node hs-node--1" x="56" y="110" width="108" height="72" rx="10" />
          <text className="hs-node-title" x="110" y="140" textAnchor="middle">
            Design
          </text>
          <text className="hs-node-sub" x="110" y="158" textAnchor="middle">
            flows · UI
          </text>

          {/* API */}
          <rect className="hs-draw hs-node hs-node--2" x="186" y="110" width="108" height="72" rx="10" />
          <text className="hs-node-title" x="240" y="140" textAnchor="middle">
            API
          </text>
          <text className="hs-node-sub" x="240" y="158" textAnchor="middle">
            services
          </text>

          {/* Cloud */}
          <rect className="hs-draw hs-node hs-node--3" x="316" y="110" width="108" height="72" rx="10" />
          <text className="hs-node-title" x="370" y="140" textAnchor="middle">
            Cloud
          </text>
          <text className="hs-node-sub" x="370" y="158" textAnchor="middle">
            ship · scale
          </text>
        </g>

        {/* Connection paths + pulse packets */}
        <path
          className="hs-draw hs-link"
          d="M164 146 H186"
          fill="none"
        />
        <path
          className="hs-draw hs-link"
          d="M294 146 H316"
          fill="none"
        />
        <circle className="hs-packet hs-packet--1" r="3.5" filter="url(#hs-soft)">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M164 146 H186" />
        </circle>
        <circle className="hs-packet hs-packet--2" r="3.5" filter="url(#hs-soft)">
          <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite" path="M294 146 H316" />
        </circle>

        {/* Main canvas block */}
        <rect className="hs-draw hs-canvas" x="56" y="204" width="238" height="150" rx="12" />
        <rect className="hs-fill hs-fill--1" x="72" y="222" width="96" height="10" rx="3" />
        <rect className="hs-fill hs-fill--2" x="72" y="242" width="160" height="8" rx="3" />
        <rect className="hs-fill hs-fill--3" x="72" y="258" width="140" height="8" rx="3" />
        <rect className="hs-draw hs-chart" x="72" y="280" width="206" height="54" rx="6" />
        {/* Chart bars */}
        <rect className="hs-bar-col hs-bar-col--1" x="86" y="308" width="18" height="18" rx="2" />
        <rect className="hs-bar-col hs-bar-col--2" x="116" y="296" width="18" height="30" rx="2" />
        <rect className="hs-bar-col hs-bar-col--3" x="146" y="288" width="18" height="38" rx="2" />
        <rect className="hs-bar-col hs-bar-col--4" x="176" y="300" width="18" height="26" rx="2" />
        <rect className="hs-bar-col hs-bar-col--5" x="206" y="284" width="18" height="42" rx="2" />
        <rect className="hs-bar-col hs-bar-col--6" x="236" y="292" width="18" height="34" rx="2" />

        {/* Device / mobile */}
        <rect className="hs-draw hs-device" x="312" y="204" width="112" height="150" rx="16" />
        <rect className="hs-draw hs-device-screen" x="324" y="220" width="88" height="100" rx="6" />
        <rect className="hs-fill hs-fill--dev" x="336" y="232" width="64" height="28" rx="4" />
        <rect className="hs-fill hs-fill--dev2" x="336" y="270" width="48" height="8" rx="2" />
        <rect className="hs-fill hs-fill--dev3" x="336" y="286" width="56" height="8" rx="2" />
        <circle className="hs-dot hs-dot--home" cx="368" cy="338" r="6" />

        {/* Terminal strip */}
        <rect className="hs-draw hs-term" x="56" y="372" width="368" height="44" rx="10" />
        <text className="hs-term-text" x="72" y="392">
          <tspan className="hs-term-prompt">›</tspan> build · ship · monitor
        </text>
        <text className="hs-term-text hs-term-text--dim" x="72" y="408">
          sprint demo ready · staging synced
        </text>
        <g className="hs-meter">
          <rect className="hs-meter-track" x="300" y="386" width="108" height="8" rx="4" />
          <rect className="hs-meter-fill" x="300" y="386" width="108" height="8" rx="4" />
        </g>

        {/* Floating ring accents */}
        <circle className="hs-orbit hs-orbit--a" cx="240" cy="230" r="118" fill="none" />
        <circle className="hs-orbit hs-orbit--b" cx="240" cy="230" r="148" fill="none" />
      </svg>
    </div>
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

          <div className="hero-in hero-in--4 mb-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Start a project
            </Button>
            <Button href="/work" variant="outline" size="lg" className="max-sm:w-full">
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
          className="hero-in hero-in--3 relative w-full max-[980px]:order-2 max-[980px]:mx-auto max-[980px]:max-w-[380px] sm:max-w-[440px]"
          aria-hidden="true"
        >
          <HeroSystemVisual />
        </div>
      </Container>
    </section>
  );
}
