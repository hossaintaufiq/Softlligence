"use client";

import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M18.4 5.6l-1.1 1.1M6.7 17.3l-1.1 1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 14.5A7.5 7.5 0 119.5 4a6 6 0 0010.5 10.5z"
      />
    </svg>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-panel/60 text-text-dim transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent",
        className,
      )}
    >
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <span
          className={cn(
            "absolute transition-all duration-300",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-90 opacity-0",
          )}
        >
          <SunIcon />
        </span>
        <span
          className={cn(
            "absolute transition-all duration-300",
            isDark ? "scale-50 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
          )}
        >
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}
