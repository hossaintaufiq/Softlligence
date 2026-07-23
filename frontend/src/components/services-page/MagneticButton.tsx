"use client";

import {
  useCallback,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    },
    [reduced],
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }, []);

  const classes = cn(
    "sp-btn",
    variant === "primary" && "sp-btn--primary",
    variant === "secondary" && "sp-btn--secondary",
    variant === "ghost" && "sp-btn--ghost",
    className,
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        <span className="sp-btn__label">{children}</span>
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <span className="sp-btn__label">{children}</span>
    </a>
  );
}
