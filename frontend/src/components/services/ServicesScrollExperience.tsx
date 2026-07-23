"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "@/lib/content";
import { serviceImages } from "@/lib/homeVisuals";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/services/TechChip";
import { cn } from "@/lib/utils";

const COUNT = services.length;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function ServiceCopy({
  service,
  className,
}: {
  service: (typeof services)[number];
  className?: string;
}) {
  return (
    <div className={cn("svc3d-copy", className)}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[13px] text-accent">{service.index}</span>
        <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
          {service.timeline}
        </span>
      </div>
      <h3 className="mb-2 font-display text-[clamp(26px,3.2vw,40px)] font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mb-3 text-[15px] font-medium text-text/90">{service.headline}</p>
      <p className="mb-6 max-w-[34rem] text-[14.5px] leading-relaxed text-text-dim">
        {service.longDescription || service.description}
      </p>

      <ul className="mb-6 space-y-2.5">
        {service.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[14px] text-text-dim">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-7 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <TechChip key={tech} name={tech} />
        ))}
      </div>

      <Button href="/contact" variant="outline">
        Inquire about {service.title.split(" ")[0]}
      </Button>
    </div>
  );
}

function FlatFallback() {
  return (
    <div className="flex flex-col gap-14 md:gap-20">
      {services.map((service) => (
        <article
          key={service.id}
          id={service.id}
          className="grid items-center gap-8 overflow-hidden rounded-2xl border border-white/10 bg-panel/50 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-white/8 bg-ink/40">
            <Image
              src={
                serviceImages[service.id] ??
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75"
              }
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-transparent"
              aria-hidden="true"
            />
          </div>
          <ServiceCopy service={service} />
        </article>
      ))}
    </div>
  );
}

export function ServicesScrollExperience() {
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const rafRef = useRef(0);

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const total = track.offsetHeight - window.innerHeight;
    if (total <= 0) {
      setProgress(0);
      return;
    }
    const scrolled = clamp(-rect.top, 0, total);
    setProgress(scrolled / total);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    setReady(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Deep-link support: /services#web etc.
    const hash = window.location.hash.slice(1);
    const idx = services.findIndex((s) => s.id === hash);
    if (idx >= 0 && trackRef.current) {
      const track = trackRef.current;
      const total = Math.max(track.offsetHeight - window.innerHeight, 0);
      const top =
        track.getBoundingClientRect().top +
        window.scrollY +
        (idx / Math.max(COUNT - 1, 1)) * total;
      window.scrollTo({ top, behavior: "auto" });
      requestAnimationFrame(updateProgress);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, updateProgress]);

  const activeIndex = clamp(Math.round(progress * (COUNT - 1)), 0, COUNT - 1);
  const active = services[activeIndex];
  const continuous = progress * (COUNT - 1);

  const jumpTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const total = track.offsetHeight - window.innerHeight;
    const top =
      track.getBoundingClientRect().top +
      window.scrollY +
      (index / Math.max(COUNT - 1, 1)) * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (reducedMotion) {
    return <FlatFallback />;
  }

  return (
    <div
      ref={trackRef}
      className="svc3d-track relative"
      style={{ height: `${COUNT * 100}vh` }}
    >
      {/* Hash targets for accessibility / crawlers */}
      {services.map((service, i) => (
        <div
          key={service.id}
          id={service.id}
          className="pointer-events-none absolute left-0 w-full"
          style={{
            top: `${(i / COUNT) * 100}%`,
            height: `${100 / COUNT}%`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="svc3d-sticky sticky top-[72px] flex h-[calc(100dvh-72px)] items-center overflow-hidden">
        <div className="svc3d-atmosphere" aria-hidden="true" />
        <div className="svc3d-grid" aria-hidden="true" />

        <div className="relative mx-auto grid h-full w-full max-w-[1180px] items-center gap-8 px-5 py-20 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
          {/* 3D stage */}
          <div className="svc3d-stage relative mx-auto hidden h-[min(58vh,520px)] w-full max-w-[560px] lg:block">
            <div className="svc3d-world" data-ready={ready ? "true" : "false"}>
              {services.map((service, i) => {
                const delta = i - continuous;
                const abs = Math.abs(delta);
                const z = -delta * 280;
                const y = delta * 18;
                const rotateY = delta * -28;
                const rotateX = delta * 6;
                const scale = clamp(1 - abs * 0.12, 0.72, 1);
                const opacity = clamp(1 - abs * 0.42, 0, 1);
                const blur = abs > 1.2 ? Math.min((abs - 1.2) * 4, 8) : 0;
                const isActive = i === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    className={cn("svc3d-card", isActive && "svc3d-card--active")}
                    style={{
                      transform: `translate3d(-50%, calc(-50% + ${y}px), ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      filter: blur ? `blur(${blur}px)` : undefined,
                      zIndex: Math.round(100 - abs * 10),
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    onClick={() => jumpTo(i)}
                    aria-label={`Jump to ${service.title}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <div className="svc3d-card__media">
                      <Image
                        src={
                          serviceImages[service.id] ??
                          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75"
                        }
                        alt=""
                        fill
                        sizes="520px"
                        className="object-cover"
                        priority={i < 2}
                      />
                      <div className="svc3d-card__shade" aria-hidden="true" />
                    </div>
                    <div className="svc3d-card__meta">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                        {service.index}
                      </span>
                      <span className="font-display text-[17px] font-semibold leading-snug">
                        {service.title}
                      </span>
                    </div>
                  </button>
                );
              })}

              <div className="svc3d-floor" aria-hidden="true" />
            </div>
          </div>

          {/* Mobile 3D strip */}
          <div className="svc3d-mobile-strip lg:hidden">
            <div className="svc3d-mobile-rail">
              {services.map((service, i) => {
                const delta = i - continuous;
                const abs = Math.abs(delta);
                const x = delta * 72;
                const scale = clamp(1 - abs * 0.14, 0.78, 1);
                const opacity = clamp(1 - abs * 0.35, 0.25, 1);
                return (
                  <button
                    key={service.id}
                    type="button"
                    className="svc3d-mobile-card"
                    style={{
                      transform: `translate3d(calc(-50% + ${x}%), -50%, 0) scale(${scale}) rotateY(${delta * -18}deg)`,
                      opacity,
                      zIndex: Math.round(40 - abs * 5),
                    }}
                    onClick={() => jumpTo(i)}
                    aria-label={service.title}
                  >
                    <Image
                      src={
                        serviceImages[service.id] ??
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75"
                      }
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                    <span className="svc3d-mobile-card__label">{service.index}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Copy panel */}
          <div className="relative min-h-[320px] self-center">
            <div className="mb-6 flex items-center justify-between gap-4 lg:mb-8">
              <p className="font-mono text-[11px] tracking-[0.16em] text-text-dim uppercase">
                Capability {active.index} / {String(COUNT).padStart(2, "0")}
              </p>
              <div className="svc3d-progress" aria-hidden="true">
                <span style={{ width: `${((activeIndex + 1) / COUNT) * 100}%` }} />
              </div>
            </div>

            <div key={active.id} className="svc3d-copy-panel">
              <ServiceCopy service={active} />
            </div>

            <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to capability">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => jumpTo(i)}
                  className={cn(
                    "rounded-md border px-2.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors",
                    i === activeIndex
                      ? "border-accent/45 bg-accent/15 text-accent"
                      : "border-white/10 text-text-dim hover:border-white/20 hover:text-text",
                  )}
                  aria-current={i === activeIndex ? "true" : undefined}
                >
                  {service.index}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
