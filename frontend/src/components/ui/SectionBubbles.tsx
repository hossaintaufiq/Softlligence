import { cn } from "@/lib/utils";

type BubbleSpot = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  opacity?: number;
};

/** Deterministic layouts — scattered (not right-only). seed picks which. */
const LAYOUTS: BubbleSpot[][] = [
  [
    { top: "6%", left: "-4%", size: 190, opacity: 0.48 },
    { bottom: "10%", right: "18%", size: 120, opacity: 0.4 },
  ],
  [{ top: "18%", right: "-6%", size: 210, opacity: 0.46 }],
  [
    { bottom: "4%", left: "22%", size: 160, opacity: 0.44 },
    { top: "8%", left: "58%", size: 110, opacity: 0.38 },
  ],
  [{ top: "35%", left: "-8%", size: 200, opacity: 0.45 }],
  [
    { top: "4%", right: "8%", size: 140, opacity: 0.42 },
    { bottom: "12%", left: "-3%", size: 180, opacity: 0.48 },
  ],
  [{ bottom: "16%", right: "-5%", size: 170, opacity: 0.44 }],
  [
    { top: "22%", left: "12%", size: 130, opacity: 0.4 },
    { bottom: "6%", right: "28%", size: 155, opacity: 0.42 },
  ],
  [{ top: "48%", right: "35%", size: 125, opacity: 0.36 }],
  [
    { top: "2%", left: "35%", size: 150, opacity: 0.4 },
    { bottom: "18%", left: "-6%", size: 175, opacity: 0.46 },
  ],
  [{ bottom: "8%", left: "48%", size: 195, opacity: 0.43 }],
];

/** Soft gold orbs for selected sections (1–2). Layout varies by seed. */
export function SectionBubbles({
  seed = 0,
  className,
}: {
  seed?: number;
  className?: string;
}) {
  const layout = LAYOUTS[Math.abs(seed) % LAYOUTS.length];

  return (
    <div className={cn("section-bubbles", className)} aria-hidden="true">
      {layout.map((spot, i) => (
        <span
          key={i}
          className={cn("section-bubble", i === 0 ? "section-bubble--a" : "section-bubble--b")}
          style={{
            top: spot.top,
            left: spot.left,
            right: spot.right,
            bottom: spot.bottom,
            width: spot.size,
            height: spot.size,
            opacity: spot.opacity,
          }}
        />
      ))}
    </div>
  );
}
