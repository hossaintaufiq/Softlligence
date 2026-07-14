/** Inline SVG service illustrations — brand-aligned, no remote assets */

const common = {
  className: "h-full w-full",
  viewBox: "0 0 420 320",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export function HeroTeamIllustration() {
  return (
    <svg viewBox="0 0 520 420" className="h-auto w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ht-a" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="var(--theme-accent-2)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--theme-accent)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="ht-b" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop stopColor="var(--theme-panel-2)" />
          <stop offset="1" stopColor="var(--theme-panel)" />
        </linearGradient>
      </defs>
      <ellipse cx="260" cy="360" rx="180" ry="28" fill="var(--theme-text)" opacity="0.06" />
      <rect x="90" y="70" width="340" height="220" rx="18" fill="url(#ht-b)" stroke="var(--card-border)" strokeWidth="1.5" />
      <rect x="90" y="70" width="340" height="40" rx="18" fill="var(--theme-panel-2)" />
      <circle cx="114" cy="90" r="5" fill="var(--theme-danger)" opacity="0.7" />
      <circle cx="132" cy="90" r="5" fill="var(--theme-accent)" opacity="0.7" />
      <circle cx="150" cy="90" r="5" fill="#22c55e" opacity="0.7" />
      <rect x="118" y="140" width="120" height="80" rx="8" fill="url(#ht-a)" stroke="var(--theme-accent-2)" strokeWidth="1.2" opacity="0.9" />
      <rect x="252" y="140" width="150" height="36" rx="6" fill="var(--theme-ink)" stroke="var(--card-border)" />
      <rect x="252" y="188" width="150" height="36" rx="6" fill="var(--theme-ink)" stroke="var(--card-border)" />
      <rect x="252" y="236" width="90" height="28" rx="6" fill="var(--theme-accent)" opacity="0.85" />
      {/* people */}
      <circle cx="160" cy="300" r="22" fill="var(--theme-accent-2)" opacity="0.35" />
      <rect x="142" y="318" width="36" height="44" rx="12" fill="var(--theme-accent-2)" opacity="0.45" />
      <circle cx="230" cy="295" r="24" fill="var(--theme-accent)" opacity="0.35" />
      <rect x="210" y="315" width="40" height="48" rx="12" fill="var(--theme-accent)" opacity="0.45" />
      <circle cx="300" cy="300" r="22" fill="var(--theme-accent-2)" opacity="0.28" />
      <rect x="282" y="318" width="36" height="44" rx="12" fill="var(--theme-panel-2)" stroke="var(--card-border)" />
      <path d="M70 200c40-60 90-40 120-10" stroke="var(--theme-accent-2)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
      <path d="M430 160c-50 20-70 70-40 110" stroke="var(--theme-accent)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.35" />
      <circle cx="60" cy="120" r="28" fill="var(--theme-accent-2)" opacity="0.12" className="svc-float" />
      <circle cx="460" cy="280" r="36" fill="var(--theme-accent)" opacity="0.12" className="svc-float svc-float--delay" />
    </svg>
  );
}

export function ServiceIllustration({ type }: { type: string }) {
  switch (type) {
    case "web":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="48" y="48" width="324" height="210" rx="14" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <rect x="48" y="48" width="324" height="36" rx="14" fill="var(--theme-panel-2)" />
          <circle cx="70" cy="66" r="4" fill="var(--theme-danger)" opacity="0.6" />
          <circle cx="86" cy="66" r="4" fill="var(--theme-accent)" opacity="0.6" />
          <circle cx="102" cy="66" r="4" fill="#22c55e" opacity="0.6" />
          <rect x="68" y="108" width="100" height="120" rx="8" fill="color-mix(in srgb, var(--theme-accent-2) 18%, transparent)" stroke="var(--theme-accent-2)" strokeWidth="1.2" />
          <rect x="184" y="108" width="160" height="36" rx="6" fill="var(--theme-ink)" stroke="var(--card-border)" />
          <rect x="184" y="156" width="160" height="36" rx="6" fill="var(--theme-ink)" stroke="var(--card-border)" />
          <rect x="184" y="204" width="100" height="24" rx="6" fill="var(--theme-accent)" opacity="0.8" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="150" y="28" width="120" height="250" rx="22" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <rect x="162" y="52" width="96" height="170" rx="6" fill="color-mix(in srgb, var(--theme-accent-2) 15%, var(--theme-ink))" />
          <rect x="162" y="60" width="96" height="28" rx="4" fill="var(--theme-accent)" opacity="0.35" />
          <rect x="170" y="100" width="80" height="12" rx="3" fill="var(--theme-text)" opacity="0.15" />
          <rect x="170" y="120" width="60" height="12" rx="3" fill="var(--theme-text)" opacity="0.1" />
          <rect x="170" y="148" width="80" height="36" rx="6" fill="var(--theme-accent)" opacity="0.7" />
          <circle cx="210" cy="250" r="8" fill="var(--theme-text)" opacity="0.2" />
          <circle cx="80" cy="100" r="40" fill="var(--theme-accent-2)" opacity="0.08" />
          <circle cx="340" cy="200" r="48" fill="var(--theme-accent)" opacity="0.08" />
        </svg>
      );
    case "design":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="60" y="60" width="200" height="160" rx="12" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" transform="rotate(-6 160 140)" />
          <rect x="120" y="80" width="200" height="160" rx="12" fill="var(--theme-panel-2)" stroke="var(--theme-accent)" strokeWidth="1.5" />
          <circle cx="160" cy="140" r="28" fill="none" stroke="var(--theme-accent-2)" strokeWidth="2" />
          <circle cx="160" cy="140" r="10" fill="var(--theme-accent)" />
          <rect x="210" y="120" width="80" height="10" rx="3" fill="var(--theme-text)" opacity="0.15" />
          <rect x="210" y="142" width="60" height="10" rx="3" fill="var(--theme-text)" opacity="0.1" />
          <rect x="210" y="170" width="70" height="28" rx="6" fill="var(--theme-accent-2)" opacity="0.35" />
        </svg>
      );
    case "integrations":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="210" cy="160" r="36" fill="color-mix(in srgb, var(--theme-accent) 25%, transparent)" stroke="var(--theme-accent)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="28" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <circle cx="320" cy="100" r="28" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <circle cx="100" cy="220" r="28" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <circle cx="320" cy="220" r="28" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <path d="M126 112l58 28M294 112l-58 28M126 208l58-28M294 208l-58-28" stroke="var(--theme-accent-2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
          <circle cx="210" cy="160" r="12" fill="var(--theme-accent-2)" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M140 200c0-40 32-70 72-70 8-28 36-48 68-48 40 0 72 32 72 72 28 4 48 28 48 56 0 32-26 58-58 58H148c-32 0-58-26-58-58 0-28 20-52 50-56z"
            fill="color-mix(in srgb, var(--theme-accent-2) 18%, var(--theme-panel))"
            stroke="var(--theme-accent-2)"
            strokeWidth="1.5"
          />
          <rect x="180" y="175" width="16" height="40" rx="3" fill="var(--theme-accent)" opacity="0.7" />
          <rect x="206" y="160" width="16" height="55" rx="3" fill="var(--theme-accent)" opacity="0.55" />
          <rect x="232" y="148" width="16" height="67" rx="3" fill="var(--theme-accent-2)" opacity="0.7" />
          <rect x="258" y="168" width="16" height="47" rx="3" fill="var(--theme-accent)" opacity="0.5" />
        </svg>
      );
    case "ai":
    default:
      return (
        <svg {...common} aria-hidden="true">
          <rect x="110" y="70" width="200" height="160" rx="16" fill="var(--theme-panel)" stroke="var(--card-border)" strokeWidth="1.5" />
          <circle cx="175" cy="130" r="14" fill="var(--theme-accent-2)" opacity="0.5" />
          <circle cx="245" cy="130" r="14" fill="var(--theme-accent)" opacity="0.5" />
          <path d="M155 175h110" stroke="var(--theme-text)" strokeWidth="3" strokeLinecap="round" opacity="0.15" />
          <path d="M170 195h80" stroke="var(--theme-text)" strokeWidth="3" strokeLinecap="round" opacity="0.1" />
          <path d="M210 50v20M210 230v20M90 150h20M310 150h20" stroke="var(--theme-accent-2)" strokeWidth="1.5" opacity="0.4" />
          <circle cx="210" cy="40" r="6" fill="var(--theme-accent)" opacity="0.6" />
          <circle cx="210" cy="260" r="6" fill="var(--theme-accent-2)" opacity="0.6" />
        </svg>
      );
  }
}
