"use client";

import { useEffect, useMemo, useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Section";
import { homeTechStack } from "@/lib/homePageContent";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

type Tech = (typeof homeTechStack)[number];

/** Counts for an inverted triangle (wide → point) that sum to `total`. */
function taperCounts(start: number, total: number): number[] {
  const counts: number[] = [];
  for (let c = start; c >= 1; c--) counts.push(c);
  let sum = (start * (start + 1)) / 2;
  while (sum > total && counts.length) {
    const last = counts[counts.length - 1]!;
    const excess = sum - total;
    if (last <= excess) {
      sum -= last;
      counts.pop();
    } else {
      counts[counts.length - 1] = last - excess;
      sum = total;
    }
  }
  return counts;
}

function buildInvertedRows(items: readonly Tech[], maxCols: number): Tech[][] {
  const n = items.length;
  if (n === 0) return [];

  let start = 1;
  while ((start * (start + 1)) / 2 < n) start++;

  const counts: number[] = [];
  if (start <= maxCols) {
    counts.push(...taperCounts(start, n));
  } else {
    const taperSum = (maxCols * (maxCols + 1)) / 2;
    let remaining = n;
    while (remaining > taperSum) {
      counts.push(maxCols);
      remaining -= maxCols;
    }
    counts.push(...taperCounts(maxCols, remaining));
  }

  const rows: Tech[][] = [];
  let i = 0;
  for (const count of counts) {
    rows.push(items.slice(i, i + count) as Tech[]);
    i += count;
  }
  return rows;
}

function useMaxTechCols() {
  const [maxCols, setMaxCols] = useState(13);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 420) setMaxCols(5);
      else if (w < 640) setMaxCols(7);
      else if (w < 900) setMaxCols(10);
      else if (w < 1100) setMaxCols(12);
      else setMaxCols(14);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return maxCols;
}

export function HomeTech() {
  const maxCols = useMaxTechCols();
  const rows = useMemo(() => buildInvertedRows(homeTechStack, maxCols), [maxCols]);

  return (
    <section className="hp-section hp-tech" aria-labelledby="hp-tech-title">
      <Container>
        <Eyebrow number="09">TECHNOLOGIES</Eyebrow>
        <SketchHeadline id="hp-tech-title">
          The <SketchMark type="circle">stack</SketchMark> behind enterprise delivery.
        </SketchHeadline>
        <p className="hp-lead">
          Modern, maintainable tools chosen for performance, security, and longevity — including
          PHP/Laravel backends and AI/ML systems that plug into real business workflows.
        </p>

        <div className="hp-tech__pyramid" role="list">
          {rows.map((row, rowIndex) => (
            <ul key={rowIndex} className="hp-tech__row" role="presentation">
              {row.map((tech) => (
                <li key={tech.name} className="hp-tech__item" title={tech.name} role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="hp-tech__logo"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </section>
  );
}
