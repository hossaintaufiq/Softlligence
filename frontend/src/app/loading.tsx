export default function Loading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="route-loader" aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-[0.14em] text-text-dim uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
