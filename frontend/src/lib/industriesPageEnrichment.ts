/** UI enrichment for /industries — does not alter `industries` in content.ts */

export type IndustryChallenge = {
  title: string;
  detail: string;
  icon: "manual" | "disconnect" | "slow" | "inventory" | "compliance" | "visibility" | "legacy" | "paper";
};

export type IndustrySolution = {
  title: string;
  detail: string;
};

export type IndustryWorkflowStep = {
  label: string;
};

export type IndustryRelatedService = {
  label: string;
  href: string;
};

export type IndustryEnrichment = {
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  benefits: string[];
  techStack: string[];
  workflow: IndustryWorkflowStep[];
  relatedServices: IndustryRelatedService[];
  /** Existing project ids from content.ts `projects` */
  relatedProjectIds: string[];
};

export const industryEnrichment: Record<string, IndustryEnrichment> = {
  "public-sector": {
    challenges: [
      { title: "Paper-based workflows", detail: "Permits and billing still start at a counter.", icon: "paper" },
      { title: "Disconnected systems", detail: "Departments run on separate tools and spreadsheets.", icon: "disconnect" },
      { title: "Slow reporting", detail: "Leadership waits on manual consolidations.", icon: "slow" },
      { title: "Compliance pressure", detail: "Accessibility and audit trails are non-negotiable.", icon: "compliance" },
    ],
    solutions: [
      { title: "Citizen portals", detail: "Self-serve permits, billing, and licensing online." },
      { title: "Staff dashboards", detail: "Counter-ready tools with offline-tolerant workflows." },
      { title: "Open-data views", detail: "Transparent reporting for residents and leadership." },
      { title: "Role-based access", detail: "Least-privilege access with full audit trails." },
    ],
    benefits: [
      "Real-time operational visibility",
      "Fewer in-person queues",
      "Centralized case handling",
      "Audit-ready documentation",
      "Accessible WCAG-aware UX",
      "Systems your IT team can own",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "AWS", "Role-based auth"],
    workflow: [
      { label: "Citizen" },
      { label: "Request" },
      { label: "Review" },
      { label: "Approval" },
      { label: "Fulfillment" },
      { label: "Analytics" },
    ],
    relatedServices: [
      { label: "Custom Enterprise Software", href: "/services#enterprise" },
      { label: "Client Portals", href: "/services#digital-products" },
      { label: "Business Intelligence", href: "/services#enterprise" },
      { label: "Long-term Support", href: "/services#support" },
    ],
    relatedProjectIds: ["nsu-acm-sc", "nsu-iupc-dashboard", "dhaka-road-network"],
  },
  education: {
    challenges: [
      { title: "Fragmented portals", detail: "Admissions, grades, and fees live in different apps.", icon: "disconnect" },
      { title: "Peak-load failures", detail: "Registration and results days overwhelm systems.", icon: "slow" },
      { title: "Manual data entry", detail: "Departments re-key the same records every term.", icon: "manual" },
      { title: "Poor visibility", detail: "Leadership lacks a single academic operations view.", icon: "visibility" },
    ],
    solutions: [
      { title: "Student information systems", detail: "One platform for records, grades, and fees." },
      { title: "Admissions portals", detail: "Guided applications with status tracking." },
      { title: "Learning tools", detail: "Course and activity workflows students actually use." },
      { title: "Parent access", detail: "Secure views for fees, attendance, and updates." },
    ],
    benefits: [
      "One login across web and mobile",
      "Peak-load resilience",
      "Faster fee and grade workflows",
      "Reduced registrar busywork",
      "Clear parent communication",
      "Admin tools without developer waits",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Payment gateways"],
    workflow: [
      { label: "Applicant" },
      { label: "Admission" },
      { label: "Enrollment" },
      { label: "Learning" },
      { label: "Assessment" },
      { label: "Reporting" },
    ],
    relatedServices: [
      { label: "Web Applications", href: "/services#digital-products" },
      { label: "Client Portals", href: "/services#digital-products" },
      { label: "Mobile Apps", href: "/services#mobile" },
      { label: "AI Assistants", href: "/services#ai" },
    ],
    relatedProjectIds: ["playpen-school", "noksha", "shorborno"],
  },
  finance: {
    challenges: [
      { title: "Branch dependency", detail: "Routine tasks still push customers into branches.", icon: "manual" },
      { title: "Compliance drag", detail: "Reporting is assembled manually across systems.", icon: "compliance" },
      { title: "Security gaps", detail: "Late-stage reviews fail builds that skipped controls.", icon: "legacy" },
      { title: "Disconnected ops", detail: "Ops and support lack a shared customer timeline.", icon: "disconnect" },
    ],
    solutions: [
      { title: "Digital banking portals", detail: "Statements, transfers, and support self-serve." },
      { title: "Loan origination", detail: "Structured pipelines with audit-friendly steps." },
      { title: "Compliance dashboards", detail: "Live views for ops and risk teams." },
      { title: "Secure CRM layers", detail: "Role-aware customer workflows with logging." },
    ],
    benefits: [
      "Fewer routine branch visits",
      "Encrypted data paths",
      "Transaction logging by default",
      "Faster compliance reporting",
      "Audit-ready architecture docs",
      "Scalable cloud deployment",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Encryption", "AWS"],
    workflow: [
      { label: "Customer" },
      { label: "Onboarding" },
      { label: "Transaction" },
      { label: "Verification" },
      { label: "Support" },
      { label: "Compliance" },
    ],
    relatedServices: [
      { label: "CRM", href: "/services#enterprise" },
      { label: "Business Intelligence", href: "/services#enterprise" },
      { label: "Security Updates", href: "/services#support" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    ],
    relatedProjectIds: ["banking-system-backend", "stock-price-prediction", "ai-crm"],
  },
  healthcare: {
    challenges: [
      { title: "Phone-tag scheduling", detail: "Booking and rescheduling consume staff time.", icon: "manual" },
      { title: "Paper intake", detail: "Forms are retyped into multiple systems.", icon: "paper" },
      { title: "Untrusted portals", detail: "Patients avoid tools staff don't recommend.", icon: "visibility" },
      { title: "Privacy risk", detail: "Clinical data needs careful access boundaries.", icon: "compliance" },
    ],
    solutions: [
      { title: "Appointment systems", detail: "Online booking with automated reminders." },
      { title: "Digital intake", detail: "Forms that feed the clinical workflow directly." },
      { title: "Staff coordination", detail: "Tablet-friendly tools for busy floors." },
      { title: "Patient portals", detail: "Clear, secure self-serve experiences." },
    ],
    benefits: [
      "Fewer no-shows",
      "Faster front-desk intake",
      "HIPAA-aware design patterns",
      "Better staff collaboration",
      "Secure messaging paths",
      "Devices that match clinic reality",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Secure auth", "AWS", "Audit logs"],
    workflow: [
      { label: "Patient" },
      { label: "Appointment" },
      { label: "Intake" },
      { label: "Treatment" },
      { label: "Billing" },
      { label: "Reports" },
    ],
    relatedServices: [
      { label: "Web Applications", href: "/services#digital-products" },
      { label: "AI Assistants", href: "/services#ai" },
      { label: "Document Intelligence", href: "/services#ai" },
      { label: "Long-term Support", href: "/services#support" },
    ],
    relatedProjectIds: ["diabetiq", "career-craft-ai", "lucy"],
  },
  commerce: {
    challenges: [
      { title: "Inventory drift", detail: "Online stock doesn't match shelf reality.", icon: "inventory" },
      { title: "Checkout friction", detail: "Mobile abandons spike during promotions.", icon: "slow" },
      { title: "Peak outages", detail: "Holiday traffic becomes an availability incident.", icon: "legacy" },
      { title: "Disconnected channels", detail: "Store, warehouse, and web ops don't sync.", icon: "disconnect" },
    ],
    solutions: [
      { title: "Multi-location storefronts", detail: "Commerce UX built for conversion and clarity." },
      { title: "Inventory sync", detail: "Real-time stock across locations and channels." },
      { title: "Checkout & loyalty", detail: "Promo flows tested under load before launch." },
      { title: "Ops dashboards", detail: "Fulfillment and performance in one view." },
    ],
    benefits: [
      "Real-time stock accuracy",
      "Faster mobile checkout",
      "Peak-day resilience",
      "Centralized order visibility",
      "Promo-ready architecture",
      "Scalable cloud commerce stack",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Payment gateways", "CDN"],
    workflow: [
      { label: "Customer" },
      { label: "Order" },
      { label: "Inventory" },
      { label: "Fulfillment" },
      { label: "Delivery" },
      { label: "Analytics" },
    ],
    relatedServices: [
      { label: "Websites", href: "/services#digital-products" },
      { label: "Inventory Management", href: "/services#enterprise" },
      { label: "CRM", href: "/services#enterprise" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    ],
    relatedProjectIds: ["mango-ev", "summer-sale", "fruit-burst"],
  },
  nonprofit: {
    challenges: [
      { title: "Scattered donor data", detail: "Contacts live in spreadsheets and inboxes.", icon: "disconnect" },
      { title: "Manual coordination", detail: "Volunteers are managed over chat and phone.", icon: "manual" },
      { title: "Grant reporting drag", detail: "Impact packs are assembled every quarter by hand.", icon: "slow" },
      { title: "Budget constraints", detail: "Enterprise tools cost more than the mission can spare.", icon: "legacy" },
    ],
    solutions: [
      { title: "Donor management", detail: "Campaigns, gifts, and communications in one system." },
      { title: "Volunteer scheduling", detail: "Self-signup with reminders and shift clarity." },
      { title: "Impact tracking", detail: "Program metrics ready for boards and funders." },
      { title: "Lightweight CRM", detail: "Mission-sized tools without enterprise bloat." },
    ],
    benefits: [
      "Centralized donor history",
      "Higher re-engagement",
      "Faster grant reporting",
      "Clear volunteer ops",
      "Board-ready dashboards",
      "Budget-conscious ownership",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Email tooling", "AWS", "Analytics"],
    workflow: [
      { label: "Donor" },
      { label: "Campaign" },
      { label: "Contribution" },
      { label: "Program" },
      { label: "Volunteer" },
      { label: "Impact" },
    ],
    relatedServices: [
      { label: "CRM", href: "/services#enterprise" },
      { label: "Client Portals", href: "/services#digital-products" },
      { label: "Business Intelligence", href: "/services#enterprise" },
      { label: "Maintenance", href: "/services#support" },
    ],
    relatedProjectIds: ["amani-holdings", "acumens-media", "focusflow"],
  },
};
