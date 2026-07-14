interface BrandLogoProps {
  size?: number;
}

export function BrandLogo({ size = 28 }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size}>
      <rect
        x="2"
        y="2"
        width="24"
        height="24"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 18 L8 10 L14 16 L20 8 L20 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
