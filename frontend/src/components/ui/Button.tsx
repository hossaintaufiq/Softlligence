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
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  accent:
    "bg-accent text-accent-ink hover:shadow-[0_8px_28px_rgba(255,176,32,0.35)] active:scale-[0.98]",
  outline:
    "border border-white/12 text-text hover:border-accent-2 hover:bg-white/3 active:scale-[0.98]",
  ghost: "text-text-dim hover:text-text active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-[22px] py-3 text-[14.5px]",
  lg: "px-7 py-3.5 text-[15px]",
};

export function Button({
  variant = "accent",
  size = "default",
  block = false,
  className,
  href,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-px",
    variantClasses[variant],
    sizeClasses[size],
    block && "w-full",
    className,
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
