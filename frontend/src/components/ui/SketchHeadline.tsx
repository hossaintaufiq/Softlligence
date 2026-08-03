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
      {type === "circle" ? (
        <svg
          className="sketch-mark__svg sketch-mark__svg--circle"
          viewBox="0 0 120 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M14 26c2-12 28-20 52-19 28 1 48 10 50 22 2 12-18 18-48 18S10 38 14 26Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : (
        <svg
          className="sketch-mark__svg sketch-mark__svg--underline"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M2 7c18-3 36 3 52 0s28-4 44 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
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
