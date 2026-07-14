interface EyebrowProps {
  number: string;
  children: React.ReactNode;
}

export function Eyebrow({ number, children }: EyebrowProps) {
  return (
    <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.06em] text-text-dim">
      <span className="text-accent">⟨ {number} ⟩</span>
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-3.5 max-w-[820px] font-display text-[clamp(28px,3.4vw,42px)] leading-[1.12] font-semibold tracking-tight ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}

export function SectionSub({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mb-11 max-w-[600px] text-base text-text-dim ${className ?? ""}`}>
      {children}
    </p>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-7 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function CardCorner() {
  return (
    <span
      className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-accent opacity-70"
      aria-hidden="true"
    />
  );
}

export function CardCornerCyan() {
  return (
    <span
      className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-accent-2 opacity-70"
      aria-hidden="true"
    />
  );
}
