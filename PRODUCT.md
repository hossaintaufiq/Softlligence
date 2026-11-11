# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Operations and IT leaders at mid-size and enterprise organizations. They are evaluating a studio to build or replace internal systems, and they are deciding whether to trust a software partner with real operations.

## Product Purpose

Softlligence is a software company that sells packaged products (ERP, CRM, MIS, Inventory) and also builds custom software. Its marketing site (Next.js, in `frontend/`) presents services, industries, products, work, team, process, FAQ and contact. Success means a qualified buyer understands what the studio builds, trusts it, and gets in touch.

## Positioning

Updated by owner: products first, custom services second. The homepage sells the four packaged products (ERP, CRM, MIS, Inventory); custom builds are the secondary path.

The studio ships its own products alongside bespoke client builds. A shop that only does client work could not truthfully claim this. Current site tagline: "Custom software organizations actually run on." (hero copy: "Enterprise software organizations actually run on.").

## Operating Context

Visitors compare vendors and read for credibility: services, industry fit, delivery process, past work, and the team. Content is organized as routes: `/services`, `/industries`, `/products` (with `[slug]` detail pages), `/work`, `/process`, `/team`, `/about`, `/faq`, `/contact`.

## Capabilities and Constraints

- Frontend: Next.js 16, React 19, Tailwind 4, framer-motion, gsap, lenis, lucide-react, Vercel Analytics.
- The `backend/` directory is currently empty; the site is front-end only.
- Manufacturing is a named client industry on the site; the full industry list lives in `src/components/industries-page`.

## Brand Commitments

- Name: Softlligence, with the existing logo (`frontend/public/logo.svg`, `BrandLogo` component).
- Existing tagline as above. No other voice or visual commitments were stated.

## Evidence on Hand

Real case studies exist on `/work` (confirmed by the owner), and the team is shown on `/team` (photos in `public/team`). Reuse these as given. Do not invent clients, metrics, testimonials, pricing or certifications beyond what the repo already contains.

## Product Principles

- Lead with what the studio has actually built and shipped (own products and client work), not generic capability claims.
- Write for a skeptical operations or IT buyer: concrete, specific, no hype.
- Credibility comes from real evidence; never fabricate proof.
- Keep every route a clear step toward contacting the studio.

## Accessibility & Inclusion

No product-specific standard was stated. Existing code honors `prefers-reduced-motion`; keep that.
