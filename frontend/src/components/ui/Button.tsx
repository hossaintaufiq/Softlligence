import { cn } from "@/lib/utils";

type ButtonVariant = "accent" | "outline" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  accent:
    "bg-accent text-accent-ink hover:shadow-[0_8px_24px_rgba(255,176,32,0.28)]",
  outline: "border border-white/9 text-text hover:border-accent-2",
  ghost: "text-text-dim hover:text-text",
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
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold whitespace-nowrap transition-all duration-150 hover:-translate-y-px",
        variantClasses[variant],
        sizeClasses[size],
        block && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
