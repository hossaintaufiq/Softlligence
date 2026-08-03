"use client";

import { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { SectionBubbles } from "@/components/ui/SectionBubbles";

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const items = faqs.slice(0, 5);

  return (
    <section className="hp-section hp-faq hp-section--center has-section-bubbles" id="faq" aria-labelledby="hp-faq-title">
      <SectionBubbles seed={9} />
      <Container>
        <div className="hp-section__head">
          <Eyebrow number="10">FAQ</Eyebrow>
          <SketchHeadline id="hp-faq-title">
            Answers before you have to <SketchMark type="underline">ask</SketchMark>.
          </SketchHeadline>
          <p className="hp-lead">Clear expectations on timeline, engagement, and how we ship.</p>
        </div>

        <div className="hp-faq__list">
          {items.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className={`hp-faq__item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="hp-faq__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="hp-faq__icon" aria-hidden="true" />
                </button>
                {isOpen ? (
                  <div className="hp-faq__panel">
                    <p>{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="hp-section__action">
          <Button href={pageRoutes.faq} variant="outline">
            Read all FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
