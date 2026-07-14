"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { cn } from "@/lib/utils";

interface FAQProps {
  summary?: boolean;
  limit?: number;
}

export function FAQ({ summary = false, limit = 3 }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = summary ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section-perf bg-panel py-20 md:py-24" id="faq">
      <Container>
        <Eyebrow number="09">QUESTIONS</Eyebrow>
        <SectionTitle>Answers before you have to ask.</SectionTitle>

        <div className="max-w-[760px]">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "border-t border-white/9 transition-colors duration-200",
                  isOpen && "bg-white/2",
                  index === items.length - 1 && "border-b",
                )}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent px-1 py-5 text-left font-display text-base font-medium text-text sm:py-5.5 sm:text-[16.5px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="flex flex-col gap-1">
                    {!summary && (
                      <span className="font-mono text-[11px] tracking-[0.04em] text-accent-2">
                        {faq.category}
                      </span>
                    )}
                    {faq.question}
                  </span>
                  <span className="relative min-h-[18px] min-w-[18px] shrink-0">
                    <span className="absolute top-2 left-0 h-0.5 w-[18px] bg-accent" />
                    <span
                      className={cn(
                        "absolute top-0 left-2 h-[18px] w-0.5 bg-accent transition-transform duration-250",
                        isOpen && "rotate-90",
                      )}
                    />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <p className="m-0 mb-5.5 max-w-[660px] text-[14.5px] leading-relaxed text-text-dim">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {summary && (
          <div className="mt-8">
            <SectionLink href={pageRoutes.faq}>Read all FAQs</SectionLink>
          </div>
        )}
      </Container>
    </section>
  );
}
