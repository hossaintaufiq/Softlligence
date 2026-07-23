"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/servicesPageContent";
import { ServiceCard } from "./ServiceCard";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function ServiceCatalog() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="sp-catalog" id="service-catalog" aria-labelledby="sp-catalog-title">
      <div className="sp-container">
        <motion.header
          className="sp-section-head"
          initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="sp-eyebrow">Service catalog</p>
          <h2 id="sp-catalog-title" className="sp-section-title">
            Capabilities organized
            <br />
            <span className="sp-text-gradient">for enterprise delivery.</span>
          </h2>
          <p className="sp-section-sub">
            Six practice areas—from ERP and MES to AI, cloud, and long-term support—scoped with
            clear features, stacks, and timelines.
          </p>
        </motion.header>

        <div className="sp-category-nav" role="navigation" aria-label="Service categories">
          {serviceCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="sp-category-chip">
              <span>{cat.index}</span>
              {cat.title}
            </a>
          ))}
        </div>

        <div className="sp-categories">
          {serviceCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="sp-category"
              data-sp-category={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              {category.id === "digital-products" && (
                <>
                  <span id="web" className="sp-anchor" aria-hidden="true" />
                  <span id="design" className="sp-anchor" aria-hidden="true" />
                </>
              )}
              {category.id === "ai" && (
                <span id="integrations" className="sp-anchor" aria-hidden="true" />
              )}
              {category.id === "cloud-devops" && (
                <span id="cloud" className="sp-anchor" aria-hidden="true" />
              )}

              <motion.div
                className="sp-category__intro"
                initial={reduced ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.65 }}
              >
                <span className="sp-category__index">{category.index}</span>
                <h3 id={`${category.id}-title`} className="sp-category__title">
                  {category.title}
                </h3>
                <p className="sp-category__summary">{category.summary}</p>
              </motion.div>

              <div className="sp-category__grid">
                {category.services.map((service, i) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={i}
                    accent={category.accent}
                    categoryId={category.id}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
