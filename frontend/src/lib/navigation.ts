export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
] as const;

export const pageRoutes = {
  services: "/services",
  work: "/work",
  industries: "/industries",
  process: "/process",
  about: "/about",
  team: "/team",
  faq: "/faq",
  contact: "/contact",
} as const;
