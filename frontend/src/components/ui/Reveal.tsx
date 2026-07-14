import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Kept for call-site compatibility — unused (instant render). */
  delay?: number;
}

/**
 * Instant wrapper for static pages — no scroll-wait, no opacity hide.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
