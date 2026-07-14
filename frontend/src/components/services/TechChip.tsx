import { cn } from "@/lib/utils";

function TechMark({ name }: { name: string }) {
  const n = name.toLowerCase();
  const cls = "h-3.5 w-3.5 shrink-0";

  if (n.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    );
  }
  if (n.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" className="text-text" />
        <path d="M8 16V8h2.2l5.2 7.2V8H18v8h-2.1L10.6 8.7V16H8z" fill="var(--theme-ink)" />
      </svg>
    );
  }
  if (n.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#68A063" opacity="0.9" />
      </svg>
    );
  }
  if (n.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="#2496ED" aria-hidden="true">
        <path d="M4 13h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM7 10h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3.5 2.5c1.5 0 2.5.8 2.5 2H3c0-2.5 2-3.5 4.2-3.8.4-1.5 1.6-2.7 3.3-2.7.4 0 .8.1 1.1.2.6-1.2 1.8-2 3.2-2 .4 1.6.2 3.1-.3 4.1h2z" />
      </svg>
    );
  }
  if (n.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M6 14c2 2.5 5 4 10 3.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M8 8h3v7H8V8zm5 2h3v5h-3v-5z" fill="#FF9900" opacity="0.85" />
      </svg>
    );
  }
  if (n.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <ellipse cx="12" cy="8" rx="7" ry="3" fill="#336791" />
        <path d="M5 8v6c0 1.7 3.1 3 7 3s7-1.3 7-3V8" stroke="#336791" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (n.includes("flutter")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M14 3L4 13l3 3 13-13h-6z" fill="#45D1FD" />
        <path d="M14 14l-3 3 3 3h6l-3-3 3-3h-6z" fill="#01579B" />
      </svg>
    );
  }
  if (n.includes("openai") || n.includes("langchain") || n.includes("pinecone") || n === "rag") {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--theme-accent)" strokeWidth="1.5" fill="none" />
        <path d="M8 12h8M12 8v8" stroke="var(--theme-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (n.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M12 3c-3 0-4 1.5-4 4v2h8V7c0-2.5-1-4-4-4z" fill="#3776AB" />
        <path d="M12 21c3 0 4-1.5 4-4v-2H8v2c0 2.5 1 4 4 4z" fill="#FFD43B" />
      </svg>
    );
  }
  if (n.includes("graphql")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#E10098" strokeWidth="1.4" fill="none" />
        <circle cx="12" cy="12" r="2" fill="#E10098" />
      </svg>
    );
  }
  if (n.includes("stripe")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" fill="#635BFF" />
        <path d="M8 14c0-1.5 1.2-2 2.8-2s2.4.4 2.4 1.2c0 1.6-5.2.8-5.2 3.2 0 1.3 1.2 2.1 3.2 2.1 1.4 0 2.5-.4 3.2-1" stroke="#fff" strokeWidth="1.3" fill="none" />
      </svg>
    );
  }
  if (n.includes("salesforce")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M10 8a3.5 3.5 0 013.2-2 3.2 3.2 0 013 2.1A3.5 3.5 0 0120 12a3.4 3.4 0 01-3.5 3.4h-8A3.6 3.6 0 015 12a3.5 3.5 0 012.4-3.3A3.2 3.2 0 0110 8z" fill="#00A1E0" />
      </svg>
    );
  }
  if (n.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <circle cx="12" cy="7" r="3.2" fill="#F24E1E" />
        <circle cx="12" cy="12" r="3.2" fill="#A259FF" />
        <circle cx="12" cy="17" r="3.2" fill="#0ACF83" />
        <circle cx="7.5" cy="7" r="3.2" fill="#FF7262" />
        <circle cx="16.5" cy="7" r="3.2" fill="#1ABCFE" />
      </svg>
    );
  }
  if (n.includes("firebase")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M5 18l3-12 4 8 3-6 4 10H5z" fill="#FFA000" />
        <path d="M8 6l3 8 2-4 3 8H8V6z" fill="#F57C00" opacity="0.8" />
      </svg>
    );
  }
  if (n.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M12 4l9 16H3L12 4z" fill="currentColor" className="text-text" />
      </svg>
    );
  }
  if (n.includes("typescript") || n === "swift" || n === "kotlin") {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#3178C6" />
        <path d="M7 12h10M12 8v8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-accent/20 font-mono text-[8px] font-bold text-accent">
      {name.slice(0, 1).toUpperCase()}
    </span>
  );
}

export function TechChip({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "group/chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/40 px-3 py-1.5 font-mono text-[11px] text-text-dim backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-text hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <TechMark name={name} />
      {name}
    </span>
  );
}
