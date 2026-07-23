"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V23h-4V8.5z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isPlaceholder = !href || href === "#";
  if (isPlaceholder) return null;

  // Preserve stored href; only add protocol when missing so www.* links resolve.
  const resolved = href.startsWith("www.") ? `https://${href}` : href;
  const isExternal = resolved.startsWith("http");

  return (
    <a
      href={resolved}
      aria-label={label}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="tp-social"
    >
      {children}
    </a>
  );
}

export function MemberPhoto({
  name,
  initials,
  tone,
  photo,
  variant = "card",
}: {
  name: string;
  initials: string;
  tone: string;
  photo?: string | null;
  variant?: "leadership" | "card";
}) {
  return (
    <div
      className={cn(
        "tp-photo",
        variant === "leadership" ? "tp-photo--leadership" : "tp-photo--card",
        tone && `bg-linear-to-br ${tone}`,
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          quality={70}
          className="object-cover object-top"
          sizes={variant === "leadership" ? "(max-width: 768px) 100vw, 360px" : "(max-width: 768px) 100vw, 280px"}
        />
      ) : (
        <div className="tp-photo__fallback">
          <span>{initials}</span>
          <em>Portrait</em>
        </div>
      )}
      <div className="tp-photo__veil" aria-hidden="true" />
    </div>
  );
}
