import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "accent" | "outline" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  accent:
    "border-accent bg-accent text-accent-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-[color-mix(in_srgb,var(--theme-accent)_90%,white)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--theme-accent)_22%,transparent)]",
  outline:
    "border-white/14 bg-transparent text-text hover:border-white/28 hover:bg-white/5",
  ghost: "border-transparent text-text-dim hover:bg-white/5 hover:text-text",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-11 px-5 py-2.5 text-[13.5px]",
  lg: "min-h-12 px-6 py-3 text-[14.5px]",
};

export function Button({
  variant = "accent",
  size = "default",
  block = false,
  className,
  href,
  onClick,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border font-medium tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow] duration-200 max-sm:whitespace-normal sm:whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    block && "w-full",
    className,
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  );
}
