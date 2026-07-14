import { Container } from "@/components/ui/Section";

const items = [
  "E-Gov & Public Sector",
  "Education & EdTech",
  "Finance & FinTech",
  "Healthcare",
  "Retail & E-commerce",
  "Logistics & Maritime",
  "Nonprofits",
  "Media & Telecom",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/5 py-[34px]">
      <Container className="mb-4 font-mono text-xs tracking-[0.06em] text-text-dim">
        Built for teams across
      </Container>
      <div
        className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-3.5 whitespace-nowrap font-display text-[22px] text-text-dim">
          {track.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-3.5">
              <span>{item}</span>
              <span className="text-sm text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
