export const services = [
  {
    id: "web",
    index: "01",
    title: "Websites & web apps",
    headline: "Fast, findable systems your team can actually run",
    description:
      "Marketing sites, client portals, internal tools and dashboards — built to be fast, findable and easy for your own team to update.",
    longDescription:
      "From marketing sites to operational portals, we ship web products that load fast, rank cleanly, and stay maintainable after handoff. You get source code, documentation, and an admin path your team can use without calling us for every content change.",
    items: ["Corporate & marketing sites", "Web applications & portals", "E-commerce & booking systems"],
    highlights: [
      "SEO-ready architecture and performance budgets from day one",
      "CMS or admin panels your team can update without calling us",
      "Accessible, responsive layouts tested across devices and browsers",
    ],
    deliverables: ["Production-ready codebase", "Admin / CMS access", "Performance & SEO baseline", "Launch checklist"],
    timeline: "3–12 weeks",
    bestFor: ["Companies replacing template sites", "Teams needing a client portal", "Ops tools that outgrew spreadsheets"],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile apps",
    headline: "One app experience — without rebuilding twice",
    description:
      "Native iOS and Android, or one cross-platform codebase — whichever gets your organization to the app store without rebuilding twice.",
    longDescription:
      "We help you choose native or cross-platform based on your roadmap, not trends. Apps ship with store submission support, shared backends when needed, and the push / offline patterns that make mobile feel useful — not decorative.",
    items: ["iOS & Android apps", "Cross-platform (React Native/Flutter)", "App store launch & upkeep"],
    highlights: [
      "Push notifications, offline modes and deep linking where they matter",
      "App Store and Play Store submission handled end to end",
      "Shared backend with your web platform when you need both",
    ],
    deliverables: ["Store-ready builds", "Backend APIs", "Release playbook", "Crash & analytics setup"],
    timeline: "8–20 weeks",
    bestFor: ["Products that need field / on-the-go access", "Web platforms adding a companion app", "Internal ops tools for staff"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "design",
    index: "03",
    title: "Product design",
    headline: "Clarity before a line of production code",
    description:
      "Wireframes, prototypes and a design system your future screens can reuse, tested with real users before a line of code ships.",
    longDescription:
      "Design isn't decoration — it's how we reduce risk. We map your workflows, prototype the critical paths, and leave you with a reusable system so the fifth screen doesn't take longer than the first.",
    items: ["UX research & wireframing", "UI & design systems", "Clickable prototypes"],
    highlights: [
      "User flows mapped against real workflows, not generic templates",
      "Reusable component libraries for faster future builds",
      "Usability testing before development starts",
    ],
    deliverables: ["User flows & wireframes", "Clickable prototype", "Design system tokens", "Handoff specs"],
    timeline: "2–6 weeks",
    bestFor: ["Teams validating an MVP", "Rebuilds that need alignment first", "Products with complex multi-role UX"],
    technologies: ["Figma", "FigJam", "Maze", "Storybook"],
  },
  {
    id: "integrations",
    index: "04",
    title: "AI integration & SAAS Systems",
    headline: "Connect your systems with AI — for smarter workflows",
    description:
      "Integrate AI tools into your existing workflows — document search, assistants, and automation — to streamline your operations and improve efficiency.",
    longDescription:
      "We help you choose the right AI tools for your needs and integrate them into your existing systems — with access controls, sync rules, and clear ownership when something fails.",
    items: ["AI document search", "AI assistants", "AI automation", "SAAS integration"],
    highlights: [
      "Semantic search across your documents and knowledge base",
      "Assistants trained on your org's data and policies",
      "Automation for repetitive review and classification tasks",
      "Integration with your existing systems",
    ],
    deliverables: ["Use-case discovery", "Pilot feature in production", "Eval & safety checks", "Usage metrics"],
    timeline: "4–12 weeks",
    bestFor: ["Teams with large document libraries", "Support workloads drowning in tickets", "Products that need smart search"],
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "RAG"],
  },
  {
    id: "ai",
    index: "06",
    title: "AI-powered features",
    headline: "Automation where it saves hours — not headlines",
    description:
      "Search, chat, recommendations and automation added where they save your team real time — not bolted on for a press release.",
    longDescription:
      "We add AI where it cuts real work: document search, assistants grounded in your policies, and classification jobs that don't need a human every time. Grounded systems, clear fallbacks, measurable time saved.",
    items: ["Chat & virtual assistants", "Search & recommendations", "Document & data automation"],
    highlights: [
      "Semantic search across your documents and knowledge base",
      "Assistants trained on your org's data and policies",
      "Automation for repetitive review and classification tasks",
    ],
    deliverables: ["Use-case discovery", "Pilot feature in production", "Eval & safety checks", "Usage metrics"],
    timeline: "4–12 weeks",
    bestFor: ["Teams with large document libraries", "Support workloads drowning in tickets", "Products that need smart search"],
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "RAG"],
  },
  {
    id: "cloud",
    index: "05",
    title: "Maintenance & Support",
    headline: "Keep your systems running smoothly — without breaking the bank",
    description:
      "Regular maintenance, updates and support to keep your systems running smoothly — without breaking the bank.",
    longDescription:
      "We offer regular maintenance, updates and support to keep your systems running smoothly — without breaking the bank.",
    items: ["Regular maintenance", "Updates & security patches", "Support & troubleshooting"],
    highlights: [
      "Regular maintenance to keep your systems running smoothly",
      "Updates & security patches to keep your systems secure",
      "Support & troubleshooting to keep your systems running smoothly",
    ],
    deliverables: ["Regular maintenance", "Updates & security patches", "Support & troubleshooting"],
    timeline: "Ongoing",
    bestFor: ["Teams with existing systems", "Products that need regular maintenance", "Systems that need support"],
    technologies: ["AWS", "Docker", "GitHub Actions", "Terraform", "Datadog"],
  },
 
];

export const serviceStats = [
  { value: "6", label: "Core service lines" },
  { value: "12+", label: "Products shipped" },
  { value: "100%", label: "Founder-led delivery" },
];

export const serviceGuarantees = [
  {
    title: "Named team, no handoff roulette",
    description: "The people on your kickoff call are the ones writing code and responding in your channel.",
  },
  {
    title: "Visible progress every two weeks",
    description: "You click a working build at the end of each sprint — not a status slide.",
  },
  {
    title: "Ownership you keep",
    description: "Source code, credentials and documentation are yours. No lock-in after launch.",
  },
];

export const industries = [
  {
    id: "public-sector",
    index: "01",
    tag: "Public sector",
    title: "Government & civic",
    headline: "Digital services citizens actually use",
    description:
      "Citizen-facing portals and back-office systems built to procurement and accessibility standards.",
    longDescription:
      "We help municipalities and public agencies move paper-heavy workflows online — permits, billing, licensing — without sacrificing WCAG accessibility, audit trails, or the security standards procurement requires.",
    painPoints: [
      "Citizens queue in person for tasks that should be self-serve",
      "Departments run on disconnected spreadsheets and legacy tools",
      "Launch delays because vendors don't understand public-sector constraints",
    ],
    outcomes: [
      "Online portals that reduce walk-in volume from day one",
      "Staff dashboards that work offline at service counters",
      "Documentation and access your IT team can maintain after handoff",
    ],
    examples: ["Permit & licensing portals", "Utility billing systems", "Open-data dashboards"],
    capabilities: ["WCAG 2.1 compliance", "Multi-language support", "Audit trails & role-based access"],
    metric: { value: "-70%", label: "Average permit turnaround" },
    clients: ["City governments", "Municipal agencies", "Public utilities"],
  },
  {
    id: "education",
    index: "02",
    tag: "Education",
    title: "Schools & universities",
    headline: "Platforms that survive exam season",
    description:
      "Admissions, student information systems and learning platforms that survive an entire term without a support ticket.",
    longDescription:
      "From admissions to fee payment to grade reporting, we unify fragmented campus workflows into one platform students and staff actually use — with uptime and peak-load handling built in before the first day of term.",
    painPoints: [
      "Students juggle three portals for admissions, grades and fees",
      "Systems crash when registration or results go live",
      "Manual data entry between departments every semester",
    ],
    outcomes: [
      "One login for students across web and mobile",
      "Infrastructure tested for registration-day traffic spikes",
      "Admin tools your registrar team can update without a developer",
    ],
    examples: ["Student information systems", "Admissions portals", "Learning management tools"],
    capabilities: ["Peak-load handling", "Parent & student portals", "Grade & fee workflows"],
    metric: { value: "99.9%", label: "Uptime through exam season" },
    clients: ["Universities", "K–12 school networks", "EdTech startups"],
  },
  {
    id: "finance",
    index: "03",
    tag: "Finance",
    title: "Banks & fintech",
    headline: "Tools held to the security bar finance expects",
    description:
      "Dashboards, reporting and customer-facing tools held to the security bar the sector expects.",
    longDescription:
      "Whether you're a regional bank modernizing branch services or a fintech shipping a new product line, we build with encryption, access controls and transaction logging from sprint one — not as a pre-launch panic.",
    painPoints: [
      "Customers still visit branches for routine account tasks",
      "Compliance reporting pulled manually from multiple systems",
      "Vendor builds that fail security review at the last mile",
    ],
    outcomes: [
      "Self-serve portals for statements, transfers and support",
      "Real-time dashboards for ops and compliance teams",
      "Architecture documentation ready for audit and review",
    ],
    examples: ["Digital banking portals", "Loan origination tools", "Compliance reporting"],
    capabilities: ["Encryption at rest & in transit", "Role-based access", "Transaction logging"],
    metric: { value: "-63%", label: "Branch visits for routine tasks" },
    clients: ["Regional banks", "Credit unions", "FinTech startups"],
  },
  {
    id: "healthcare",
    index: "04",
    tag: "Healthcare",
    title: "Clinics & health orgs",
    headline: "Software shaped around clinical workflows",
    description:
      "Scheduling, patient tools and records systems designed around real clinical workflows.",
    longDescription:
      "We design around how clinics actually operate — front-desk intake, appointment reminders, staff coordination — with privacy-aware architecture and interfaces that don't slow down a busy morning rush.",
    painPoints: [
      "Phone tag for appointment booking and rescheduling",
      "Paper intake forms re-typed into multiple systems",
      "Patient portals that staff recommend patients avoid",
    ],
    outcomes: [
      "Online scheduling with automated reminders",
      "Digital intake that feeds directly into your workflow",
      "Staff tools that work on tablet and desktop",
    ],
    examples: ["Appointment scheduling", "Patient intake forms", "Staff coordination tools"],
    capabilities: ["HIPAA-aware design", "Appointment reminders", "Secure messaging"],
    metric: { value: "40%", label: "Fewer no-show appointments" },
    clients: ["Clinics & hospitals", "Dental & specialty practices", "Health nonprofits"],
  },
  {
    id: "commerce",
    index: "05",
    tag: "Commerce",
    title: "Retail & e-commerce",
    headline: "Storefronts that hold up on your busiest day",
    description:
      "Storefronts, inventory and checkout flows built to hold up on your busiest sales day.",
    longDescription:
      "We connect your online store to real inventory across locations, optimize checkout for conversion, and load-test before your biggest sale — so a holiday spike is a revenue win, not an outage story.",
    painPoints: [
      "Online stock doesn't match what's on the shelf",
      "Checkout abandons spike on mobile during promotions",
      "Previous site slowed or crashed on peak sales days",
    ],
    outcomes: [
      "Real-time inventory sync across locations",
      "Sub-2-second page loads on mobile checkout",
      "Promo and loyalty flows tested under load before launch",
    ],
    examples: ["Multi-location storefronts", "Inventory sync", "Loyalty & checkout flows"],
    capabilities: ["Payment gateway integration", "Real-time stock", "Promo & discount engines"],
    metric: { value: "+220%", label: "Online order volume, year one" },
    clients: ["Retail chains", "D2C brands", "Marketplace operators"],
  },
  {
    id: "nonprofit",
    index: "06",
    tag: "Non-profit",
    title: "NGOs & foundations",
    headline: "Mission-driven tools sized to your budget",
    description:
      "Donor, volunteer and program-management tools sized to the budget of a mission-driven team.",
    longDescription:
      "Nonprofits need software that stretches every dollar — donor CRMs, volunteer scheduling, grant reporting — without the enterprise price tag or the complexity that keeps small teams stuck in spreadsheets.",
    painPoints: [
      "Donor data scattered across spreadsheets and inboxes",
      "Volunteer coordination done over WhatsApp and phone",
      "Grant reporting assembled manually every quarter",
    ],
    outcomes: [
      "One system for donors, campaigns and communications",
      "Volunteer self-signup with shift reminders",
      "Impact dashboards ready for board and funder reviews",
    ],
    examples: ["Donor management", "Volunteer scheduling", "Program impact tracking"],
    capabilities: ["Donation processing", "Grant reporting", "Volunteer onboarding"],
    metric: { value: "3×", label: "Donor re-engagement rate" },
    clients: ["NGOs & foundations", "Charities", "Social enterprises"],
  },
];

export const industryPrinciples = [
  {
    title: "Security by default",
    description: "Role-based access, encrypted data and audit logging from the first sprint — not bolted on before launch.",
  },
  {
    title: "Built for real users",
    description: "We test with the people who'll use it daily — front-desk staff, citizens, students — not just stakeholders in a boardroom.",
  },
  {
    title: "Support after go-live",
    description: "Launch is a milestone, not a goodbye. Monitoring, fixes and a roadmap based on how people actually use the product.",
  },
];

export const industryStats = [
  { value: "6", label: "Sectors we specialize in" },
  { value: "45+", label: "Organizations served" },
  { value: "99.9%", label: "Avg. uptime SLA" },
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
    id: "playpen-school",
    sector: "Education",
    type: "Web platform",
    tag: "Education · Web platform",
    title: "Playpen School Website",
    headline: "School presence with online bookings and payments",
    description:
      "A platform that represents the school and lets parents book school services online — admission, payment, and school activities.",
    challenge:
      "Parents needed a reliable way to handle admissions, payments, and school activities without relying only on in-person office visits.",
    solution:
      "A parent-facing school website with service booking flows, online payments, and activity management built on a modern full-stack stack.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Express.js",
      "Payment Gateway",
      "AWS",
    ],
    timeline: "Ongoing",
    github: "https://github.com/hossaintaufiq/Playpen_Project",
    liveUrl: "",
    stats: [
      { value: "online", label: "Admission & bookings" },
      { value: "Payments", label: "Integrated gateway" },
      { value: "Parents", label: "Self-serve access" },
    ],
  },
  {
    id: "nsu-acm-sc",
    sector: "Education",
    type: "Static site",
    tag: "Education · Chapter website",
    title: "NSU ACM SC Website",
    headline: "Sub-second chapter site on static rendering and CDN",
    description:
      "Official chapter website with sub-second load times via static rendering and aggressive CDN caching, plus a clean TypeScript architecture for long-term maintainability.",
    challenge:
      "The chapter needed a fast, maintainable public website that stayed quick under traffic without a heavy runtime stack.",
    solution:
      "A statically rendered Next.js site with CDN caching and a clear TypeScript structure designed for long-term ownership.",
    stack: ["Next.js", "TypeScript", "Static Rendering", "CDN", "Tailwind CSS"],
    timeline: "Shipped",
    github: "",
    liveUrl: "",
    stats: [
      { value: "<1s", label: "Load-time target" },
      { value: "Static", label: "Rendering model" },
      { value: "CDN", label: "Edge caching" },
    ],
  },
  {
    id: "ai-crm",
    sector: "SaaS",
    type: "Web + mobile + bot",
    tag: "SaaS · AI CRM",
    title: "AI CRM – Web, Mobile & Telegram Bot",
    headline: "One CRM across web, Android, and Telegram AI workflows",
    description:
      "Full-featured CRM with Gemini 2.5 AI automation for intelligent task management, extended to a native Android app (Kotlin) and a Telegram bot for voice and chat-based CRM workflows.",
    challenge:
      "Teams needed CRM access beyond a desktop dashboard — including mobile and chat — with AI help for task management.",
    solution:
      "A Next.js and Express CRM backed by MongoDB, with Gemini 2.5 automation, a Kotlin Android app, and a Telegram bot for voice and chat workflows.",
    stack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Gemini 2.5",
      "Kotlin",
      "Telegram API",
      "Tailwind CSS",
    ],
    timeline: "Shipped",
    github: "",
    liveUrl: "",
    stats: [
      { value: "3", label: "Client surfaces" },
      { value: "Gemini", label: "AI task automation" },
      { value: "Voice", label: "Telegram workflows" },
    ],
  },
  {
    id: "bank-portal",
    sector: "FinTech",
    type: "Web platform",
    tag: "FinTech · Web platform",
    title: "Regional bank digital-banking portal",
    headline: "From branch queues to trusted self-serve",
    description:
      "Replaced a legacy branch-only system with a self-serve web portal for statements, transfers and support tickets.",
    challenge:
      "Customers were visiting branches for routine tasks that should have been self-serve, creating long queues and high operational cost.",
    solution:
      "A secure web portal with account dashboards, transfer flows, statement downloads and integrated support ticketing.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    timeline: "4 months",
    github: "https://github",
    liveUrl: "https://example",
    stats: [
      { value: "-63%", label: "Branch visits for routine tasks" },
      { value: "4 mo", label: "Design to launch" },
      { value: "12k+", label: "Active monthly users" },
    ],
  },
  {
    id: "university-sis",
    sector: "Education",
    type: "Web + mobile",
    tag: "Education · Web + mobile",
    title: "University student-information system",
    headline: "One campus platform that holds up at peak",
    description:
      "Unified admissions, grading and fee payment into one platform with a companion mobile app for students.",
    challenge:
      "Admissions, grades and payments lived in three separate systems, causing confusion for students and staff every term.",
    solution:
      "One unified platform with a student mobile app, admin dashboard and automated fee reminders.",
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "Firebase"],
    timeline: "6 months",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stats: [
      { value: "38k", label: "Students onboarded" },
      { value: "99.9%", label: "Uptime through exam season" },
      { value: "1", label: "Unified student record" },
    ],
  },
  {
    id: "retail-store",
    sector: "Retail",
    type: "E-commerce",
    tag: "Retail · E-commerce",
    title: "Regional retail chain online store",
    headline: "Inventory truth and checkout that survives peak",
    description:
      "Storefront, inventory sync across 40 locations and a checkout that held up through a nationwide holiday sale.",
    challenge:
      "Online orders couldn't reflect real store inventory, leading to cancellations and frustrated customers.",
    solution:
      "Real-time inventory sync across 40 locations, optimized checkout and a CDN-backed storefront.",
    stack: ["Next.js", "Node.js", "Stripe", "Cloudflare", "Redis"],
    timeline: "5 months",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stats: [
      { value: "+220%", label: "Online order volume, year one" },
      { value: "1.8s", label: "Median page load" },
      { value: "40", label: "Locations synced" },
    ],
  },
  {
    id: "municipal-portal",
    sector: "Public sector",
    type: "Civic platform",
    tag: "Public sector · Civic platform",
    title: "Municipal services & permits portal",
    headline: "Permits online — without locking out walk-ins",
    description:
      "Moved permit applications and utility billing online for a city government, with an offline-friendly counter-staff view.",
    challenge:
      "Permit applications required in-person visits and paper forms, creating weeks-long backlogs.",
    solution:
      "Online permit portal with document upload, status tracking and a counter-staff view for walk-in applicants.",
    stack: ["React", "Node.js", "PostgreSQL", "S3", "Docker"],
    timeline: "7 months",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stats: [
      { value: "-70%", label: "Average permit turnaround" },
      { value: "12", label: "Departments integrated" },
      { value: "WCAG", label: "Accessibility target met" },
    ],
  },
];

export const workStats = [
  { value: "12+", label: "Products shipped" },
  { value: "7", label: "Featured case studies" },
  { value: "Founder-led", label: "Delivery model" },
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

/** Full About page content */
export const aboutStory = {
  eyebrow: "ABOUT SOFTLLIGENCE",
  title: "We build software organizations actually run on.",
  lead:
    "Softlligence Technologies is a founder-led software studio. We design, engineer, and ship production systems for companies, schools, agencies, and nonprofits — custom builds, not stretched templates.",
  body: [
    "Most organizations do not need another agency pitch. They need a named team that understands their workflow, writes maintainable code, and stays reachable after launch.",
    "That is the studio we built: compact leadership, clear ownership, and engineers who still write the product. Discovery, architecture, delivery, and support live under one roof — so nothing gets lost between a slide deck and production.",
  ],
};

export const aboutSignal = [
  { label: "Model", value: "Founder-led studio" },
  { label: "Delivery", value: "Design → build → ship" },
  { label: "Focus", value: "Web, mobile & cloud" },
  { label: "Base", value: "Dhaka · Bangladesh" },
];

export const aboutBeliefs = [
  {
    index: "01",
    title: "Clarity before code",
    description:
      "We map workflows, constraints, and success criteria before a production sprint starts. Ambiguity is expensive — we remove it early.",
  },
  {
    index: "02",
    title: "Architecture that ages well",
    description:
      "Clean APIs, sensible data models, and stacks you can hire for later. We optimize for the next two years of change, not demo day.",
  },
  {
    index: "03",
    title: "Visible progress every sprint",
    description:
      "You click a working build at the end of each cycle — not a status slide. Trust grows when the software speaks for itself.",
  },
  {
    index: "04",
    title: "Ownership after launch",
    description:
      "Monitoring, handoff docs, and a real support window. Launch is a milestone, not the end of the relationship.",
  },
];

export const aboutCraft = [
  {
    title: "Product & UX",
    items: ["Workflow mapping", "Prototypes", "Design systems", "Accessibility"],
  },
  {
    title: "Engineering",
    items: ["Next.js / React", "APIs & data", "Mobile apps", "Cloud & DevOps"],
  },
  {
    title: "Delivery",
    items: ["Sprint cadence", "Code review", "QA & release", "Post-launch care"],
  },
];

export const aboutLeadershipStrip = [
  { role: "Team Lead & Full Stack Engineer", focus: "Architecture, standards, delivery" },
  { role: "Full Stack Engineer", focus: "Backend systems and integrations" },
  { role: "Senior Full Stack Engineer", focus: "Frontend and APIs" },
  { role: "Full Stack Engineer", focus: "Mobile and cross-platform" },
];

export const aboutCommitments = [
  {
    title: "You talk to builders",
    description: "Leadership and engineering share the same channel. No telephone game.",
  },
  {
    title: "Scope stays honest",
    description: "Discovery first. If requirements change, the plan and estimate change with them.",
  },
  {
    title: "Security from sprint one",
    description: "Auth, roles, encryption, and audit trails are designed in — not bolted on before go-live.",
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

export const whySoftlligence = [
  {
    title: "Builders you can reach",
    description:
      "You talk to the engineers writing the code — not a rotating account manager who passes notes along.",
  },
  {
    title: "Scope that stays honest",
    description:
      "We price and plan after discovery. If something changes, the estimate changes with it — no silent scope creep.",
  },
  {
    title: "Security from sprint one",
    description:
      "Role-based access, encrypted data and audit logging are built in early, not bolted on the week before launch.",
  },
  {
    title: "Ship, then stay",
    description:
      "Launch includes monitoring and a support window. Most clients stay for roadmap work because the product keeps improving.",
  },
];

export const team = [
  {
    initials: "MH",
    name: "Hossain Ahmmed Taufiq",
    role: "Team Lead & Full Stack Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Full-stack developer focused on scalable web applications and clean API design.",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    initials: "FS",
    name: "Faid Sarowar",
    role: "Full Stack Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Works across backend systems, integrations, and deployment pipelines with a focus on reliable delivery.",
    skills: ["Python", "Docker", "AWS", "Node.js"],
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Senior Full Stack Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Builds performant frontends and reliable APIs with a sharp eye for UX and maintainability.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    initials: "AB",
    name: "Al Mustafiz Bappy",
    role: "Full Stack Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Delivers cross-platform mobile and web experiences with clean, production-ready code.",
    skills: ["React Native", "Flutter", "Firebase", "TypeScript"],
  },
];

export const teamPageStats = [
  { count: 8, suffix: "", label: "Team Members" },
  { count: 12, suffix: "+", label: "Projects Delivered" },
  { count: 4, suffix: "", label: "Leadership" },
  { count: 100, suffix: "%", label: "Hands-on Delivery" },
];

/**
 * Drop portrait files into /public/team/ and set `photo` to the path, e.g. "/team/hossain.jpg"
 * Recommended: square or 4:5 portrait, 800×1000px, JPG/WebP.
 */
export const teamLeadership = [
  {
    initials: "MH",
    name: "Hossain Ahmmed Taufiq",
    role: "Team Lead & Backend AI Engineer",
    bio: "Leads architecture and engineering standards — focused on scalable web applications, clean API design, and systems organizations can rely on.",
    skills: [ "Next.js", "Node.js","Python", "Tensorflow", "Keras", "Scikit-learn", "TypeScript", "PostgreSQL", "AWS"],
    linkedin: "https://www.linkedin.com/in/hossain-ahmmed-129b29253/",
    github: "https://github.com/hossaintaufiq",
    email: "hossainahmmedtaufiq22@gmail.com",
    photo: "/team/leadership/hossain-ahmmed-taufiq.jpeg" as string | null,
    photoTone: "from-accent/25 to-accent-2/10",
  },
  {
    initials: "FS",
    name: "Faid Sarowar",
    role: "Full Stack Engineer",
    bio: "Works across backend systems, integrations, and deployment pipelines with a focus on reliable delivery.",
    skills: ["Python", "Docker", "AWS", "Node.js"],
    linkedin: "https://www.linkedin.com/in/fiad-sarowar-965491422/",
    github: "https://github.com/Fiad-123",
    email: "fiadsarowar93@gmail.com",
    photo: "/team/leadership/faid_sarowar.jpeg" as string | null,
    photoTone: "from-accent/20 to-panel",
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Senior Full Stack Engineer",
    bio: "Builds performant frontends and reliable APIs with a sharp eye for UX and maintainability.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    linkedin: "www.linkedin.com/in/mehedi-simanto-1000641a7",
    github: "https://github.com/simanto4321",
    email: "msimanto46@gmail.com",
    photo: "/team/leadership/mehedi-ashraf-simanto.19.jpeg" as string | null,
    photoTone: "from-accent-2/20 to-panel",
  },
  {
    initials: "AB",
    name: "Al Mustafiz Bappy",
    role: "Full Stack Engineer",
    bio: "Delivers cross-platform mobile and web experiences with clean, production-ready code.",
    skills: ["React Native", "Flutter", "Firebase", "TypeScript"],
    linkedin: "https://www.linkedin.com/in/al-mustafiz-bappy",
    github: "https://github.com/bappy-3/",
    email: "almustafizbappy@gmail.com",
    photo: "/team/leadership/al-mustafiz-bappy.jpeg" as string | null,
    photoTone: "from-accent-2/15 to-ink",
  },
];

export const teamEngineering = [
  {
    initials: "MA",
    name: "Md Al Amin",
    role: "AI Engineer",
    bio: "Focused on API design, Ai Integration, and resilient backend services.",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AI", "OpenAI", "Google Cloud", "Azure", "AWS", "Tensorflow", "PyTorch", "Keras", "Scikit-learn"],
    linkedin: "https://www.linkedin.com/in/mdalamin5/",
    github: "https://github.com/MDalamin5",
    photo: "/team/engineering/md-al-amin.jpg" as string | null,
    photoTone: "from-white/10 to-panel",
  },
  {
    initials: "MS",
    name: "Minhajul Shobuj",
    role: "Full Stack Engineer",
    bio: "Builds backend systems and APIs with a focus on reliability and scalability.",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "MongoDB", "Node.js","Prisma","Express","Redux","React.js"],
    linkedin: "https://www.linkedin.com/in/minhajul-shobuj-0000000000/",
    github: "https://github.com/Minhajul-Shobuj",
    photo: "/team/engineering/minhajul-shobuj.jpeg" as string | null,
    photoTone: "from-accent-2/20 to-ink",
  },
  {
    initials: "AI_S",
    name: "Ashraful Islam Shohan",
    role: "Full Stack Engineer",
    bio: "Just an enthusiastic explorer",
    skills: ["Next.js","Django", "Rust","Python"],
    linkedin: "https://www.linkedin.com/in/ashraful-islam-shohan",
    github: "https://github.com/shohan12727",
    photo: "https://res.cloudinary.com/dpwjt3jxx/image/upload/v1782306822/roman_pic_mine_kq3ilm.jpg",
    photoTone: "",
  },
];

export const teamDesign = [
  {
    initials: "LZ",
    name: "Layla Zaman",
    role: "UI/UX Designer",
    bio: "Crafts clear interfaces and design systems that help products feel intentional, accessible, and easy to ship.",
    skills: ["Figma", "UI Design", "UX Research", "Design Systems", "Brand Identity"],
    linkedin: "#",
    photo: null as string | null,
    photoTone: "from-accent/30 to-accent-2/15",
  },
];

export const teamDelivery = [
  {
    initials: "IR",
    name: "Imran Rahman",
    role: "Project Manager",
    bio: "Keeps timelines honest, stakeholders aligned, and sprints moving — so engineering can focus on shipping.",
    skills: ["Agile", "Scrum", "Sprint Planning", "Client Communication", "Product Planning"],
    linkedin: "#",
    photo: null as string | null,
    photoTone: "from-accent-2/25 to-panel",
  },
];

export const teamExpertise = [
  {
    title: "Frontend Development",
    description: "Fast, accessible interfaces with modern React and Next.js stacks.",
    icon: "frontend",
  },
  {
    title: "Backend Development",
    description: "Secure APIs, services, and business logic built to scale.",
    icon: "backend",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end ownership from UI to database and deploy.",
    icon: "fullstack",
  },
  {
    title: "Mobile Development",
    description: "iOS and Android experiences with shared or native codebases.",
    icon: "mobile",
  },
  {
    title: "AI Solutions",
    description: "Practical automation, search, and assistants grounded in your data.",
    icon: "ai",
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable cloud environments that handle launch-day traffic.",
    icon: "cloud",
  },
  {
    title: "DevOps",
    description: "CI/CD, monitoring, and repeatable release pipelines.",
    icon: "devops",
  },
  {
    title: "UI/UX Design",
    description: "Research-led flows and systems teams can build against.",
    icon: "design",
  },
  {
    title: "Database Architecture",
    description: "Clean schemas, indexing strategies, and durable data layers.",
    icon: "database",
  },
  {
    title: "API Development",
    description: "Well-documented REST and GraphQL contracts partners can trust.",
    icon: "api",
  },
  {
    title: "Project Management",
    description: "Clear milestones, demos, and communication every sprint.",
    icon: "pm",
  },
  {
    title: "Quality Assurance",
    description: "Automated and manual checks before anything hits production.",
    icon: "qa",
  },
];

export const teamWorkflow = [
  "Discovery",
  "Planning",
  "UI/UX Design",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance",
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
    points: ["Written scope & milestones", "Fixed budget before build", "Ideal for defined launches"],
  },
  {
    title: "Dedicated team",
    description: "A monthly team embedded on your product — ideal for ongoing feature work and roadmap delivery.",
    points: ["Same engineers week to week", "Shared backlog & roadmap", "Best for continuous product work"],
  },
  {
    title: "Staff augmentation",
    description: "Our developers join your existing team and workflows for a defined period.",
    points: ["Fits your tools & standups", "Flexible capacity", "Clean knowledge handoff"],
  },
];
