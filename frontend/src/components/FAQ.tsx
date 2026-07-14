"use client";

import { useState } from "react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical website or app project take?",
    answer:
      "A marketing site usually ships in 3–5 weeks. A web application or mobile app with real user accounts and integrations typically runs 3–6 months, split into two-week cycles so you see working software throughout, not just at the end.",
  },
  {
    question: "Do you work with organizations that already have an internal IT team?",
    answer:
      "Often. We can run the build end to end, or slot in as staff augmentation alongside your own developers — handing off documentation and access so your team can maintain it after we're done.",
  },
  {
    question: "Can you build both the website and a companion mobile app?",
    answer:
      "Yes — most of our larger projects pair a web platform with an iOS/Android app sharing the same backend, so your data and login stay consistent across both.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a support window after launch for fixes. Past that, most clients move to a monthly retainer for monitoring, small updates and a running backlog of what to build next.",
  },
  {
    question: "How is a project priced?",
    answer:
      "Fixed-price for clearly scoped work, or monthly for a dedicated team on longer product builds. You'll get a written estimate after the discovery stage — before we ask you to commit to anything.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-panel py-24" id="faq">
      <Container>
        <Eyebrow number="09">QUESTIONS</Eyebrow>
        <SectionTitle>Answers before you have to ask.</SectionTitle>

        <div className="max-w-[760px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "border-t border-white/9",
                  index === faqs.length - 1 && "border-b",
                )}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent py-5.5 text-left font-display text-[16.5px] font-medium text-text"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
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
      </Container>
    </section>
  );
}
