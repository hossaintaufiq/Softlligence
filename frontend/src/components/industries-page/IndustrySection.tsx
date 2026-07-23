"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { industries } from "@/lib/content";
import { industryImages } from "@/lib/homeVisuals";
import { industryEnrichment } from "@/lib/industriesPageEnrichment";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Button } from "@/components/ui/Button";
import { ChallengeCards } from "./ChallengeCards";
import { SolutionCards } from "./SolutionCards";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { RelatedServices } from "./RelatedServices";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type Industry = (typeof industries)[number];

export function IndustrySection({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const reduced = usePrefersReducedMotion();
  const enrichment = industryEnrichment[industry.id];
  const layout = index % 3; // 0 | 1 | 2 alternating compositions
  const image =
    industryImages[industry.id] ??
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=70";

  return (
    <section
      id={industry.id}
      className={cn("ip-section", `ip-section--layout-${layout}`, index % 2 === 1 && "ip-section--alt")}
      aria-labelledby={`${industry.id}-title`}
    >
      <div className="ip-container">
        <motion.header
          className="ip-section__hero"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55 }}
        >
          <div className="ip-section__intro">
            <div className="ip-section__meta">
              <IndustryIcon id={industry.id} />
              <div>
                <p className="ip-eyebrow">{industry.tag}</p>
                <p className="ip-section__index">Sector {industry.index}</p>
              </div>
            </div>

            <h2 id={`${industry.id}-title`} className="ip-section__title">
              {industry.title}
            </h2>
            <p className="ip-section__headline">{industry.headline}</p>
            <p className="ip-section__overview">{industry.longDescription}</p>

            <div className="ip-section__metric">
              <strong>{industry.metric.value}</strong>
              <span>{industry.metric.label}</span>
            </div>
          </div>

          <div className="ip-section__visual">
            <div className="ip-section__image">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="ip-section__image-veil" aria-hidden="true" />
            </div>
            <div className="ip-section__float">
              <p className="ip-label">What we build</p>
              <ul>
                {industry.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.header>

        {enrichment ? (
          <>
            <div className="ip-block">
              <div className="ip-block__head">
                <p className="ip-label">Business challenges</p>
                <h3>Where operations slow down.</h3>
              </div>
              <ChallengeCards challenges={enrichment.challenges} />
            </div>

            <div className="ip-block">
              <div className="ip-block__head">
                <p className="ip-label">Our solutions</p>
                <h3>Enterprise software we design and ship.</h3>
              </div>
              <SolutionCards solutions={enrichment.solutions} />
            </div>

            <div className="ip-block ip-block--split">
              <div>
                <div className="ip-block__head">
                  <p className="ip-label">Business benefits</p>
                  <h3>Outcomes leadership can operate on.</h3>
                </div>
                <ul className="ip-benefits">
                  {enrichment.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="ip-block__head">
                  <p className="ip-label">Technology stack</p>
                  <h3>Reliable foundations.</h3>
                </div>
                <div className="ip-tech">
                  {enrichment.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="ip-block__head ip-block__head--spaced">
                  <p className="ip-label">Built-in capabilities</p>
                </div>
                <div className="ip-tech">
                  {industry.capabilities.map((cap) => (
                    <span key={cap}>{cap}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="ip-block">
              <div className="ip-block__head">
                <p className="ip-label">Process visualization</p>
                <h3>How work moves through the system.</h3>
              </div>
              <WorkflowDiagram steps={enrichment.workflow} />
            </div>

            <div className="ip-block">
              <div className="ip-block__head">
                <p className="ip-label">Related services</p>
                <h3>Capabilities that fit this sector.</h3>
              </div>
              <RelatedServices services={enrichment.relatedServices} />
            </div>
          </>
        ) : null}

        <div className="ip-section__cta">
          <div>
            <h3>Ready to discuss your {industry.tag.toLowerCase()} systems?</h3>
            <p>
              Tell us your workflows and constraints—we&apos;ll map a practical first milestone.
            </p>
            <div className="ip-section__clients">
              {industry.clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>
          <Button href="/contact" size="lg" className="max-sm:w-full">
            Discuss your {industry.tag.toLowerCase()} project
          </Button>
        </div>
      </div>
    </section>
  );
}
