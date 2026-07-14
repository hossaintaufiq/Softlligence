export const services = [
  {
    index: "01",
    title: "Websites & web apps",
    description:
      "Marketing sites, client portals, internal tools and dashboards — built to be fast, findable and easy for your own team to update.",
    items: ["Corporate & marketing sites", "Web applications & portals", "E-commerce & booking systems"],
    highlights: [
      "SEO-ready architecture and performance budgets from day one",
      "CMS or admin panels your team can update without calling us",
      "Accessible, responsive layouts tested across devices and browsers",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    index: "02",
    title: "Mobile apps",
    description:
      "Native iOS and Android, or one cross-platform codebase — whichever gets your organization to the app store without rebuilding twice.",
    items: ["iOS & Android apps", "Cross-platform (React Native/Flutter)", "App store launch & upkeep"],
    highlights: [
      "Push notifications, offline modes and deep linking where they matter",
      "App Store and Play Store submission handled end to end",
      "Shared backend with your web platform when you need both",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    index: "03",
    title: "Product design",
    description:
      "Wireframes, prototypes and a design system your future screens can reuse, tested with real users before a line of code ships.",
    items: ["UX research & wireframing", "UI & design systems", "Clickable prototypes"],
    highlights: [
      "User flows mapped against real workflows, not generic templates",
      "Reusable component libraries for faster future builds",
      "Usability testing before development starts",
    ],
    technologies: ["Figma", "FigJam", "Maze", "Storybook"],
  },
  {
    index: "04",
    title: "Systems & integration",
    description:
      "Connect the tools your organization already runs on — payments, CRMs, HR systems, government or partner APIs — into one workflow.",
    items: ["Custom software & ERPs", "API & third-party integration", "Workflow automation"],
    highlights: [
      "Single sign-on and role-based access across connected systems",
      "Reliable sync between legacy tools and new platforms",
      "Automated workflows that cut manual data entry",
    ],
    technologies: ["REST", "GraphQL", "Stripe", "Salesforce", "Zapier"],
  },
  {
    index: "05",
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with a launch day traffic spike and stays quiet the other 364 days of the year.",
    items: ["Cloud architecture & migration", "CI/CD & automated deploys", "Monitoring & on-call support"],
    highlights: [
      "Infrastructure as code for reproducible environments",
      "Automated testing and deploy pipelines on every merge",
      "Uptime monitoring and incident response playbooks",
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Terraform", "Datadog"],
  },
  {
    index: "06",
    title: "AI-powered features",
    description:
      "Search, chat, recommendations and automation added where they save your team real time — not bolted on for a press release.",
    items: ["Chat & virtual assistants", "Search & recommendations", "Document & data automation"],
    highlights: [
      "Semantic search across your documents and knowledge base",
      "Assistants trained on your org's data and policies",
      "Automation for repetitive review and classification tasks",
    ],
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "RAG"],
  },
];

export const industries = [
  {
    tag: "Public sector",
    title: "Government & civic",
    description:
      "Citizen-facing portals and back-office systems built to procurement and accessibility standards.",
    examples: ["Permit & licensing portals", "Utility billing systems", "Open-data dashboards"],
    capabilities: ["WCAG compliance", "Multi-language support", "Audit trails"],
  },
  {
    tag: "Education",
    title: "Schools & universities",
    description:
      "Admissions, student information systems and learning platforms that survive an entire term without a support ticket.",
    examples: ["Student information systems", "Admissions portals", "Learning management tools"],
    capabilities: ["Peak-load handling", "Parent & student portals", "Grade & fee workflows"],
  },
  {
    tag: "Finance",
    title: "Banks & fintech",
    description:
      "Dashboards, reporting and customer-facing tools held to the security bar the sector expects.",
    examples: ["Digital banking portals", "Loan origination tools", "Compliance reporting"],
    capabilities: ["Encryption at rest & in transit", "Role-based access", "Transaction logging"],
  },
  {
    tag: "Healthcare",
    title: "Clinics & health orgs",
    description:
      "Scheduling, patient tools and records systems designed around real clinical workflows.",
    examples: ["Appointment scheduling", "Patient intake forms", "Staff coordination tools"],
    capabilities: ["HIPAA-aware design", "Appointment reminders", "Secure messaging"],
  },
  {
    tag: "Commerce",
    title: "Retail & e-commerce",
    description:
      "Storefronts, inventory and checkout flows built to hold up on your busiest sales day.",
    examples: ["Multi-location storefronts", "Inventory sync", "Loyalty & checkout flows"],
    capabilities: ["Payment gateway integration", "Real-time stock", "Promo & discount engines"],
  },
  {
    tag: "Non-profit",
    title: "NGOs & foundations",
    description:
      "Donor, volunteer and program-management tools sized to the budget of a mission-driven team.",
    examples: ["Donor management", "Volunteer scheduling", "Program impact tracking"],
    capabilities: ["Donation processing", "Grant reporting", "Volunteer onboarding"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We map your users, your workflow and your constraints — budget, timeline, existing systems — before proposing anything.",
    deliverables: ["Stakeholder interviews", "Requirements document", "Project roadmap & estimate"],
    duration: "1–2 weeks",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Wireframes and clickable prototypes you can react to and change, before any production code is written.",
    deliverables: ["User flows & wireframes", "Visual design system", "Interactive prototype"],
    duration: "2–4 weeks",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Development in two-week cycles, with a working build you can click through at the end of each one.",
    deliverables: ["Sprint demos every 2 weeks", "Staging environment", "Automated test suite"],
    duration: "Varies by scope",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Staged rollout, load testing and a launch-day checklist, so opening day isn't the first real test.",
    deliverables: ["Load testing report", "Launch checklist", "Production deployment"],
    duration: "1–2 weeks",
  },
  {
    num: "05",
    title: "Grow",
    description:
      "Monitoring, support and a backlog of what to build next, based on how people actually use it.",
    deliverables: ["Analytics dashboard", "Support SLA", "Quarterly roadmap review"],
    duration: "Ongoing",
  },
];

export const projects = [
  {
    tag: "FinTech · Web platform",
    title: "Regional bank digital-banking portal",
    description:
      "Replaced a legacy branch-only system with a self-serve web portal for statements, transfers and support tickets.",
    challenge:
      "Customers were visiting branches for routine tasks that should have been self-serve, creating long queues and high operational cost.",
    solution:
      "A secure web portal with account dashboards, transfer flows, statement downloads and integrated support ticketing.",
    stats: [
      { value: "-63%", label: "Branch visits for routine tasks" },
      { value: "4 mo", label: "Design to launch" },
    ],
  },
  {
    tag: "Education · Web + mobile",
    title: "University student-information system",
    description:
      "Unified admissions, grading and fee payment into one platform with a companion mobile app for students.",
    challenge:
      "Admissions, grades and payments lived in three separate systems, causing confusion for students and staff every term.",
    solution:
      "One unified platform with a student mobile app, admin dashboard and automated fee reminders.",
    stats: [
      { value: "38k", label: "Students onboarded" },
      { value: "99.9%", label: "Uptime through exam season" },
    ],
  },
  {
    tag: "Retail · E-commerce",
    title: "Regional retail chain online store",
    description:
      "Storefront, inventory sync across 40 locations and a checkout that held up through a nationwide holiday sale.",
    challenge:
      "Online orders couldn't reflect real store inventory, leading to cancellations and frustrated customers.",
    solution:
      "Real-time inventory sync across 40 locations, optimized checkout and a CDN-backed storefront.",
    stats: [
      { value: "+220%", label: "Online order volume, year one" },
      { value: "1.8s", label: "Median page load" },
    ],
  },
  {
    tag: "Public sector · Civic platform",
    title: "Municipal services & permits portal",
    description:
      "Moved permit applications and utility billing online for a city government, with an offline-friendly counter-staff view.",
    challenge:
      "Permit applications required in-person visits and paper forms, creating weeks-long backlogs.",
    solution:
      "Online permit portal with document upload, status tracking and a counter-staff view for walk-in applicants.",
    stats: [
      { value: "-70%", label: "Average permit turnaround" },
      { value: "12", label: "Departments integrated" },
    ],
  },
];

export const aboutPoints = [
  {
    title: "Fixed team, not a rotating bench",
    description: "The designer and engineers on your kickoff call are the ones who ship it.",
  },
  {
    title: "Engagement models that fit",
    description:
      "Fixed-price for defined scope, dedicated team for ongoing product work, or staff augmentation alongside your own developers.",
  },
  {
    title: "Security taken seriously",
    description:
      "Role-based access, encrypted data and audit logging built in from the first sprint, not bolted on before launch.",
  },
];

export const values = [
  {
    title: "Ship real software",
    description: "We build systems people rely on daily — not demos that look good in a pitch deck.",
  },
  {
    title: "Talk to the builders",
    description: "No account-manager telephone game. You work directly with the people writing the code.",
  },
  {
    title: "Honest timelines",
    description: "We tell you what's realistic upfront and flag risks early, not after the deadline passes.",
  },
];

export const comparison = {
  them: [
    "Same theme resold to every client",
    "One person handling five accounts",
    "Scope grows, quote doesn't move",
    "Site goes quiet after handoff",
  ],
  us: [
    "Interface designed around your workflow",
    "A named team you can actually reach",
    "Fixed-price or dedicated team — your call",
    "Support & roadmap after launch",
  ],
};

export const team = [
  {
    initials: "MH",
    name: "Md Hossain Ahmed Taufiq",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Full-stack developer focused on scalable web applications and clean API design.",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Builds responsive frontends and mobile-friendly interfaces with attention to performance.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    initials: "FS",
    name: "Fiad Sarowar",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Works across backend systems, integrations and deployment pipelines.",
    skills: ["Python", "Docker", "AWS"],
  },
  {
    initials: "AB",
    name: "Al Mustafiz Bappy",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Specializes in mobile development and cross-platform app delivery.",
    skills: ["React Native", "Flutter", "Firebase"],
  },
];

export const faqs = [
  {
    question: "How long does a typical website or app project take?",
    answer:
      "A marketing site usually ships in 3–5 weeks. A web application or mobile app with real user accounts and integrations typically runs 3–6 months, split into two-week cycles so you see working software throughout, not just at the end.",
    category: "Timeline",
  },
  {
    question: "Do you work with organizations that already have an internal IT team?",
    answer:
      "Often. We can run the build end to end, or slot in as staff augmentation alongside your own developers — handing off documentation and access so your team can maintain it after we're done.",
    category: "Engagement",
  },
  {
    question: "Can you build both the website and a companion mobile app?",
    answer:
      "Yes — most of our larger projects pair a web platform with an iOS/Android app sharing the same backend, so your data and login stay consistent across both.",
    category: "Services",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a support window after launch for fixes. Past that, most clients move to a monthly retainer for monitoring, small updates and a running backlog of what to build next.",
    category: "Support",
  },
  {
    question: "How is a project priced?",
    answer:
      "Fixed-price for clearly scoped work, or monthly for a dedicated team on longer product builds. You'll get a written estimate after the discovery stage — before we ask you to commit to anything.",
    category: "Pricing",
  },
  {
    question: "Do you sign NDAs and handle sensitive data?",
    answer:
      "Yes. We sign NDAs before discovery calls when needed, and build with encryption, access controls and audit logging appropriate to your sector.",
    category: "Security",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We pick the stack based on your project — commonly React, Next.js, Node.js, React Native and PostgreSQL — but we're not tied to one framework if something else fits better.",
    category: "Technical",
  },
];

export const engagementModels = [
  {
    title: "Fixed-price project",
    description: "Best for clearly scoped websites, MVPs or one-off builds with a defined launch date.",
  },
  {
    title: "Dedicated team",
    description: "A monthly team embedded on your product — ideal for ongoing feature work and roadmap delivery.",
  },
  {
    title: "Staff augmentation",
    description: "Our developers join your existing team and workflows for a defined period.",
  },
];
