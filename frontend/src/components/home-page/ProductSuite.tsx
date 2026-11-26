"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { pageRoutes } from "@/lib/navigation";
import type { SuitePanel } from "@/lib/homeProjects";
import { ProductMock } from "./mocks/ProductMocks";
import { ProjectScreens } from "./ProjectScreens";
import "./suite.css";

/* Matches the side-by-side breakpoint in suite.css. */
const SIDE_BY_SIDE = "(min-width: 1024px)";
/* Long enough that sweeping across the row does not open every panel on the way. */
const HOVER_DELAY = 110;

/**
 * Products as a row of panels: one is open on its screenshots, the rest wait as
 * spines. Side by side, a mouse opens a panel by resting on it (keyboard focus
 * does the same). Touch screens, and the stacked layout below 1024px, open on tap.
 * The last, dashed spine keeps a place for the next project.
 */
export function ProductSuite({ panels }: { panels: SuitePanel[] }) {
  const [open, setOpen] = useState(panels[0]?.id);
  const [near, setNear] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const hover = useRef<{ id: string; timer: number } | null>(null);

  const cancelHover = () => {
    if (hover.current) window.clearTimeout(hover.current.timer);
    hover.current = null;
  };

  /* Driven by pointer movement, so scrolling the page under a still mouse changes nothing. */
  const hoverPanel = (e: React.PointerEvent, id: string) => {
    if (e.pointerType !== "mouse" || hover.current?.id === id) return;
    cancelHover();
    if (id === open || !window.matchMedia(SIDE_BY_SIDE).matches) return;
    hover.current = {
      id,
      timer: window.setTimeout(() => {
        hover.current = null;
        setOpen(id);
      }, HOVER_DELAY),
    };
  };

  useEffect(() => () => window.clearTimeout(hover.current?.timer), []);

  /* Fetch each panel's first screenshot as the row approaches, so none pops in mid-slide. */
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="suite" ref={root}>
      {/* +1 counts the open slot, so the open panel can take exactly the remaining width. */}
      <div className="suite__row" style={{ "--count": panels.length + 1 } as React.CSSProperties}>
        {panels.map((p) => {
          const isOpen = p.id === open;
          const cover = p.screens?.[0];
          return (
            <article
              key={p.id}
              className={isOpen ? "suite__panel is-open" : "suite__panel"}
              style={{ "--stage-from": p.stage.from, "--stage-to": p.stage.to } as React.CSSProperties}
              onPointerMove={(e) => hoverPanel(e, p.id)}
              onPointerLeave={cancelHover}
            >
              <h3 className="suite__head">
                <button
                  type="button"
                  className="suite__spine"
                  aria-expanded={isOpen}
                  aria-controls={`suite-${p.id}`}
                  onClick={() => setOpen(p.id)}
                  onFocus={(e) => {
                    if (e.currentTarget.matches(":focus-visible") && window.matchMedia(SIDE_BY_SIDE).matches) {
                      setOpen(p.id);
                    }
                  }}
                >
                  {cover && <Image src={cover.src} alt="" fill sizes="240px" quality={55} />}
                  <span>{p.shortName}</span>
                </button>
              </h3>

              <div id={`suite-${p.id}`} className="suite__body" role="region" aria-label={p.name} inert={!isOpen}>
                {p.screens ? (
                  <ProjectScreens projectName={p.name} screens={p.screens} preload={near} />
                ) : (
                  p.mock && (
                    <>
                      <div className="suite__mock">
                        <ProductMock slug={p.mock} />
                      </div>
                      <p className="suite__note">Illustrative preview with sample data.</p>
                    </>
                  )
                )}

                <div className="suite__info">
                  <div>
                    <p className="suite__name">{p.name}</p>
                    <p className="suite__summary">{p.summary}</p>
                  </div>
                  <div className="suite__actions">
                    {p.action && (
                      <a href={p.action.href} target="_blank" rel="noopener noreferrer" className="btn btn--light">
                        {p.action.label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                        <span className="sr-only"> for {p.name} (opens in a new tab)</span>
                      </a>
                    )}
                    <Link href={p.details.href} className="suite__more">
                      {p.details.label}
                      <span className="sr-only">: {p.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <Link href={pageRoutes.contact} className="suite__add">
          <Plus size={22} aria-hidden="true" />
          <span>Your project</span>
        </Link>
      </div>
    </div>
  );
}
