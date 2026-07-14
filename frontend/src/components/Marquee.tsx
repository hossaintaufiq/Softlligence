/** Premium sector wordmark strip — geometric marks + uppercase labels */
const sectors = [
  {
    name: "Public Sector",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M9 23V13l7-4 7 4v10M13 23v-5h6v5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Education",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M16 9L8 13l8 4 8-4-8-4zM8 13v6l8 4 8-4v-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "FinTech",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M16 10v12M20 12h-6a2 2 0 000 4h4a2 2 0 010 4h-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M16 11v10M11 16h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "E-Commerce",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M9 11h14l-1 8H10L9 11zM12 23a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Logistics",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M7 14h11v6H7zM18 14l4 2v4h-4v-6zM10 20a1.2 1.2 0 102.4 0M20.5 20a1.2 1.2 0 102.4 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Nonprofits",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M16 22s-4.5-3-4.5-6.5a2.5 2.5 0 014.5-1.4 2.5 2.5 0 014.5 1.4c0 3.5-4.5 6.5-4.5 6.5z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Telecom",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        <path d="M10 15a6 6 0 0112 0M12.5 17.5a3.5 3.5 0 017 0M16 20.5h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Marquee() {
  const track = [...sectors, ...sectors];

  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#0d1524]">
      <div className="flex min-h-[72px] items-stretch md:min-h-[80px]">
        {/* Static label rail */}
        <div className="relative z-20 hidden w-[140px] shrink-0 items-center border-r border-white/8 bg-ink px-5 md:flex lg:w-[160px] lg:px-7">
          <p className="font-mono text-[10px] leading-tight tracking-[0.16em] text-text-dim uppercase">
            Built
            <br />
            for
          </p>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-5 md:py-0 md:flex md:items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#0d1524] to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#0d1524] to-transparent md:w-16" />

          <div
            className="group w-full overflow-hidden"
            aria-label="Sectors we build for"
          >
            <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
              {track.map((sector, i) => (
                <div
                  key={`${sector.name}-${i}`}
                  className="flex items-center px-6 md:px-10"
                >
                  <div className="flex items-center gap-3.5 text-[#6b7589] transition-colors duration-300 hover:text-[#c8d0e0]">
                    <span className="text-accent">{sector.mark}</span>
                    <span className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase md:text-[13px]">
                      {sector.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
