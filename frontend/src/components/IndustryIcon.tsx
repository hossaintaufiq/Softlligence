import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  "public-sector": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 3L2 8l10 5 10-5-10-5zM2 8v8l10 5 10-5V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 6v12M6 12h12" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  ),
  commerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M6 6h15l-1.5 9h-12L6 6zM6 6L5 3H2M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  nonprofit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function IndustryIcon({ id }: { id: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent sm:h-12 sm:w-12">
      {icons[id] ?? icons["public-sector"]}
    </span>
  );
}
