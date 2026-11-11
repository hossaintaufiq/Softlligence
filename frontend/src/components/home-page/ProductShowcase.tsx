"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CrmMock, ErpMock, InventoryMock, MisMock } from "./mocks/ProductMocks";

export interface ShowcaseItem {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  detailsHref: string;
  launchUrl: string;
  hasLiveDemo: boolean;
}

const mocks: Record<string, React.ReactNode> = {
  erp: <ErpMock />,
  crm: <CrmMock />,
  mis: <MisMock />,
  inventory: <InventoryMock />,
};

/** Tabs on the left choose which product interface previews on the right. */
export function ProductShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    const next = (i + items.length) % items.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      select(i + 1, true);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      select(i - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      select(items.length - 1, true);
    }
  };

  const current = items[active];

  return (
    <div className="showcase">
      <div className="showcase__tabs" role="tablist" aria-label="Softlligence products" aria-orientation="vertical">
        {items.map((item, i) => (
          <button
            key={item.slug}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            className="showcase__tab"
            onClick={() => select(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <span className="showcase__tabname">{item.name}</span>
            <span className="showcase__tabtag">{item.tagline}</span>
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="showcase__panel"
      >
        <div key={current.slug} className="showcase__stage">
          {mocks[current.slug]}
        </div>
        <div className="showcase__meta">
          <p>{current.summary}</p>
          <div className="showcase__actions">
            <a
              href={current.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {current.hasLiveDemo ? "Open live demo" : "Start 7-day trial"}
              <ArrowRight size={17} className="btn__arrow" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href={current.detailsHref} className="link-arrow">
              Product details
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
