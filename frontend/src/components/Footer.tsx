import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/ui/Section";

const serviceLinks = [
  "Websites & web apps",
  "Mobile apps",
  "Product design",
  "Systems & integration",
  "Cloud & DevOps",
];

const industryLinks = ["Public sector", "Education", "Finance", "Healthcare", "Retail"];

const companyLinks = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-[70px] pb-[26px]">
      <Container className="grid gap-10 border-b border-white/9 pb-11 max-[980px]:grid-cols-2 min-[981px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-[19px] font-semibold">
            <span className="flex text-accent" aria-hidden="true">
              <BrandLogo />
            </span>
            Softlligence Technologies
          </a>
          <p className="mt-3.5 mb-4.5 max-w-[280px] text-sm text-text-dim">
            Websites and apps for businesses and organizations — from first sketch to shipped
            product.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: "LinkedIn", text: "in" },
              { label: "X / Twitter", text: "X" },
              { label: "Dribbble", text: "Dr" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/9 text-xs text-text-dim hover:border-accent hover:text-accent"
              >
                {social.text}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-mono text-[13px] tracking-[0.05em] text-text-dim">Services</h5>
          {serviceLinks.map((link) => (
            <a
              key={link}
              href="#services"
              className="mb-2.5 block text-sm text-text-dim hover:text-text"
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <h5 className="mb-4 font-mono text-[13px] tracking-[0.05em] text-text-dim">Industries</h5>
          {industryLinks.map((link) => (
            <a
              key={link}
              href="#industries"
              className="mb-2.5 block text-sm text-text-dim hover:text-text"
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <h5 className="mb-4 font-mono text-[13px] tracking-[0.05em] text-text-dim">Company</h5>
          {companyLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mb-2.5 block text-sm text-text-dim hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>

      <Container className="flex items-center justify-between pt-5.5 text-[13px] text-text-dim max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-3">
        <span>© {year} Softlligence Technologies. All rights reserved.</span>
        <span className="flex gap-4.5">
          <a href="#" className="hover:text-text">
            Privacy
          </a>
          <a href="#" className="hover:text-text">
            Terms
          </a>
        </span>
      </Container>
    </footer>
  );
}
