import { cn } from "@/lib/utils";

type SketchMarkType = "circle" | "underline";

export function SketchMark({
  type,
  children,
  className,
}: {
  type: SketchMarkType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("sketch-mark", `sketch-mark--${type}`, className)}>
      <span className="sketch-mark__text">{children}</span>
      <svg
        className="sketch-mark__svg sketch-mark__svg--underline"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sm-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0a5cd6" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <path
          d="M1 5.5C25 2.5 60 2 99 4.2"
          fill="none"
          stroke="url(#sm-grad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

export function SketchHeadline({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={cn("sketch-headline", className)}>
      {children}
    </h2>
  );
}
