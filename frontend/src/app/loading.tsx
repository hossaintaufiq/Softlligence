import { BrandLogo } from "@/components/BrandLogo";

export default function Loading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="route-loader text-accent" aria-hidden="true">
        <BrandLogo size={40} />
      </div>
    </div>
  );
}
