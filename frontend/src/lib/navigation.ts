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

/** Public company contact details */
export const companyContact = {
  email: "softlligence@gmail.com",
  phoneDisplay: "+880 1728-360834",
  phoneTel: "+8801728360834",
  mailto: "mailto:softlligence@gmail.com",
  tel: "tel:+8801728360834",
} as const;
