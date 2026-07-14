import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { engagementModels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, mobile apps, product design, integrations, cloud and AI — one team from wireframe to launch.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHAT WE BUILD"
        title="One team, from first wireframe to what's next."
        description="Six core capabilities. Most projects combine three or four before launch — pick where you want to start."
      />
      <Services />

      <section className="border-t border-white/5 bg-panel py-24">
        <Container>
          <h2 className="mb-8 font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight">
            How we engage
          </h2>
          <div className="grid gap-5 max-[720px]:grid-cols-1 min-[721px]:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="rounded-[14px] border border-white/9 bg-panel-2 p-7"
              >
                <h3 className="mb-2 font-display text-lg font-semibold">{model.title}</h3>
                <p className="m-0 text-[14px] text-text-dim">{model.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
