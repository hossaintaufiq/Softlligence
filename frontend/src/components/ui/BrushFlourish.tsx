import { cn } from "@/lib/utils";

type FlourishVariant = "a" | "b" | "c";
type FlourishCorner = "tr" | "tl" | "br" | "bl" | "mr" | "ml";

/** Soft golden calligraphic brush marks — 1 per section, rotated by seed. */
const CORNERS: FlourishCorner[] = ["tr", "bl", "tl", "br", "mr", "ml"];
const VARIANTS: FlourishVariant[] = ["a", "b", "c"];

function BrushMarkA() {
  return (
    <svg viewBox="0 0 280 160" fill="none" aria-hidden="true">
      <path
        d="M18 108C52 58 98 34 148 48c42 12 68 48 74 88 2 14-8 22-20 16-28-14-52-48-78-62-30-16-68-8-98 10-8 5-14-2-8-12 6-10 12-16 22-20Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M108 122C138 96 178 88 214 104c22 10 34 28 30 42-3 10-14 12-22 6-18-12-36-28-56-34-18-6-38 0-54 12-6 4-12-2-8-10 4-8 10-12 16-14Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M196 78C220 62 248 66 262 88c8 12 2 24-10 24-16 0-30-12-40-24-4-5 0-12 6-10 6 2 12 2 18 0Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function BrushMarkB() {
  return (
    <svg viewBox="0 0 260 150" fill="none" aria-hidden="true">
      <path
        d="M22 42C68 22 124 28 168 58c36 24 52 62 40 88-6 14-22 16-32 6-22-22-40-52-70-66-28-14-64-8-92 10-8 5-14-4-8-14 8-12 18-20 30-24Z"
        fill="currentColor"
        opacity="0.88"
      />
      <path
        d="M86 98C118 78 158 76 192 94c20 10 28 28 18 40-7 8-18 6-24-2-14-16-32-28-52-30-16-2-32 6-44 16-5 4-12-2-8-10 5-8 12-12 18-14Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M188 48C212 36 236 42 246 62c6 12-2 22-14 20-14-2-28-14-36-26-3-5 2-12 8-10 6 2 12 4 16 2Z"
        fill="currentColor"
        opacity="0.52"
      />
    </svg>
  );
}

function BrushMarkC() {
  return (
    <svg viewBox="0 0 240 170" fill="none" aria-hidden="true">
      <path
        d="M28 128C48 78 92 42 142 48c44 6 74 42 78 82 2 16-10 26-24 18-26-14-48-46-76-58-28-12-62-2-86 18-7 6-14-2-10-12 6-12 16-22 28-28Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M64 148C92 122 132 112 168 124c22 8 32 26 22 38-7 8-18 6-24-2-16-18-38-28-60-26-14 1-28 10-38 20-5 5-12-1-8-10 4-8 12-14 20-16Z"
        fill="currentColor"
        opacity="0.68"
      />
      <path
        d="M168 58C192 44 218 48 230 68c7 12 0 24-12 22-14-2-28-14-38-26-4-5 2-12 8-10 6 2 12 4 16 4Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

const MARKS = {
  a: BrushMarkA,
  b: BrushMarkB,
  c: BrushMarkC,
} as const;

/**
 * One soft golden brush flourish for a section.
 * Keep density low: typically one per major section.
 */
export function BrushFlourish({
  seed = 0,
  className,
}: {
  seed?: number;
  className?: string;
}) {
  const corner = CORNERS[Math.abs(seed) % CORNERS.length];
  const variant = VARIANTS[Math.abs(seed) % VARIANTS.length];
  const Mark = MARKS[variant];

  return (
    <div
      className={cn("brush-flourish", `brush-flourish--${corner}`, className)}
      aria-hidden="true"
    >
      <Mark />
    </div>
  );
}
