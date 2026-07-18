import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Instant wrapper — no scroll-wait. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
