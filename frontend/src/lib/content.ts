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

/** Realistic day-to-day operating details shown on the process page. */
export const processWorkingModel = [
  {
    title: "A named channel, not a ticket black hole",
    detail:
      "You get a shared WhatsApp or Slack thread with the engineers on the build. Questions get answered in hours on business days — not buried in a support portal.",
  },
  {
    title: "Weekly sync + sprint demos",
    detail:
      "A short weekly call to unblock decisions. Every two weeks you click a staging build — working software, not a status slide.",
  },
  {
    title: "Scope changes stay visible",
    detail:
      "New ideas are welcome. We log them, estimate impact on timeline and budget, and you approve before they enter the sprint. No silent scope creep.",
  },
  {
    title: "You own the keys",
    detail:
      "Repo access, hosting, domains, and analytics stay under your accounts (or get transferred at handoff). We build on top of what you can keep running.",
  },
];

export const processTypicalWeek = [
  {
    day: "Mon",
    focus: "Plan",
    detail: "Sprint priorities locked with you. Blockers and open decisions listed in the channel.",
  },
  {
    day: "Tue–Thu",
    focus: "Build",
    detail: "Design and engineering ship to staging. You can review WIP anytime — no waiting for the demo.",
  },
  {
    day: "Fri",
    focus: "Review",
    detail: "Async notes or a short call on what moved. Feedback becomes next week’s backlog items.",
  },
  {
    day: "Every 2 weeks",
    focus: "Demo",
    detail: "Formal walkthrough of the sprint goal. Sign-off on what’s done before the next cycle starts.",
  },
];

export const processRealTalk = [
  {
    title: "Discovery is paid for a reason",
    body: "We don’t invent a fixed price from a one-line brief. A short discovery produces the estimate you can actually hold us to.",
  },
  {
    title: "Design before production code",
    body: "Changing a prototype costs hours. Changing a shipped feature mid-sprint costs days. We protect your budget by getting flows right first.",
  },
  {
    title: "Launch is a checklist, not a vibe",
    body: "Staging, backups, DNS, env vars, and a rollback plan get signed off before go-live. Opening day shouldn’t be the first real test.",
  },
  {
    title: "After launch isn’t “goodbye”",
    body: "A support window covers fixes. Most clients stay on a light retainer for monitoring and the next backlog — based on real usage, not guesswork.",
  },
];

export const clientProjects = [
  {
    id: "playpen-school",
    kind: "web-app" as const,
    ongoing: true,
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
      "cloudflare"
    ],
    timeline: "Ongoing",
    github: "https://github.com/hossaintaufiq/Playpen_Project",
    liveUrl: "https://playpen.edu.bd/",
    ourHostedUrl: "https://playpen-project.vercel.app/",
    stats: [
      { value: "Online", label: "Admission & bookings" },
      { value: "Payments", label: "Integrated gateway" },
      { value: "Parents", label: "Self-serve access" },
    ],
  },
  {
    id: "noksha",
    kind: "web-app" as const,
    ongoing: true,
    sector: "Education",
    type: "Web Platform",
    tag: "Education · Planning",
    title: "Noksha",
    headline: "A smarter way to plan academic journeys",
    description:
      "An educational planning platform that helps students organize academic goals, manage learning progress, and stay on track through an intuitive dashboard.",
    challenge:
      "Students often struggle to organize academic plans, monitor progress, and maintain consistency across multiple learning goals.",
    solution:
      "Built a centralized platform with personalized roadmaps, progress tracking, task management, and interactive dashboards for students.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    timeline: "Ongoing",
    github: "https://github.com/bappy-3/Noksha",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "100%", label: "Digital study planning" },
      { value: "Real-time", label: "Progress tracking" },
      { value: "Modern", label: "Responsive experience" },
    ],
  },
  {
    id: "career-craft-ai",
    kind: "web-app" as const,
    ongoing: true,
    sector: "HR Tech",
    type: "AI Web Application",
    tag: "Career · AI",
    title: "Career Craft AI Chatbot",
    headline: "AI career guidance, available 24/7",
    description:
      "An AI-powered career assistant that helps users explore career paths, improve resumes, prepare for interviews, and receive personalized career guidance.",
    challenge:
      "Students and job seekers often lack instant access to personalized career advice and interview preparation resources.",
    solution:
      "Created an AI chatbot capable of answering career-related questions, providing resume suggestions, interview tips, and customized learning recommendations.",
    stack: ["Next.js", "OpenAI API", "Node.js", "Tailwind CSS", "Vercel"],
    timeline: "Ongoing",
    github: "https://github.com/bappy-3/career-craft-ai-chatbot",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "24/7", label: "AI career assistant" },
      { value: "Instant", label: "Personalized guidance" },
      { value: "AI", label: "Resume & interview support" },
    ],
  },
  {
    id: "shorborno",
    kind: "web-app" as const,
    sector: "Education Technology",
    type: "Cloud Platform",
    tag: "EdTech · SaaS",
    title: "Shorborno Cloud",
    headline: "Modern cloud platform for educational institutions — built with Zerodevs",
    description:
      "A comprehensive cloud-based platform that streamlines academic management, communication, and administrative workflows for schools and educational organizations. Softlligence collaborated with the Zerodevs team to ship the product.",
    challenge:
      "Educational institutions rely on fragmented systems for academic records, communication, and administration, reducing operational efficiency.",
    solution:
      "In partnership with Zerodevs, we delivered a centralized cloud platform with student management, academic administration, communication tools, and secure access for teachers, students, and administrators.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    timeline: "6 months",
    github: "",
    liveUrl: "https://shorborno.cloud/",
    ourHostedUrl: "",
    stats: [
      { value: "Cloud", label: "Education platform" },
      { value: "All-in-one", label: "Academic management" },
      { value: "24/7", label: "Online accessibility" },
    ],
  },
  {
    id: "mango-ev",
    kind: "web-app" as const,
    sector: "Automotive",
    type: "Full stack · Custom server",
    tag: "Automotive · Homegrown EV",
    title: "Mango Electric Vehicle Website",
    headline: "Bangladesh's first homegrown EV — Surge Z and the full MEV lineup",
    description:
      "Official brand site for Mango Electric Vehicles (MEV Auto) — Bangladesh's first homegrown EV manufacturer. Showcases the flagship Surge Z premium electric SUV (402 km CLTC / 350 km WLTC), the full vehicle range from SUVs to heavy-duty trucks, charging and service ecosystem, and a reserve / inquiry flow.",
    challenge:
      "MEV needed a launch-ready digital presence that could tell the Surge Z story, publish engineering specs, present the commercial lineup, and collect reservations without a showroom-only funnel.",
    solution:
      "Full stack development with custom server settings — a multi-section marketing site covering vehicles, specs, range lineup (Surge Z, Surge H, Atlas, Delta, Current), ecosystem (charging, service, OTA, owner app), and reservation / contact, with corporate and factory details for Gulshan and Feni Economic Zone.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Full Stack",
      "Custom Server",
      "Node.js",
    ],
    timeline: "Shipped",
    github: "",
    liveUrl: "https://www.mevauto.com/",
    ourHostedUrl: "",
    stats: [
      { value: "402 km", label: "Surge Z CLTC range" },
      { value: "150 kW", label: "Max power · 7.9s 0–100" },
      { value: "6+", label: "Vehicles in lineup" },
    ],
  },
  {
    id: "acumens-media",
    kind: "web-app" as const,
    sector: "Marketing",
    type: "AI platform",
    tag: "Marketing · AI automation",
    title: "Acumens Media Inc.",
    headline: "AI-powered social, SEO, and ad performance — elevate beyond limits",
    description:
      "Acumens Media Inc. delivers AI-powered solutions for seamless social media, SEO automation, and AI-driven ad performance.",
    challenge:
      "Marketing teams needed one system to run social, SEO, and ads without juggling disconnected tools and manual campaigns.",
    solution:
      "An AI-driven media platform that automates social workflows, SEO tasks, and ad performance optimization under one brand experience.",
    stack: [
      "React.js",
      "JavaScript",
      "React",
      "Tailwind CSS",
        "AI / ML",
        "SEO automation",
        "Social media",
        "Ad performance",
        "AI / ML",
      "SEO automation",
      "Social media",
      "Ad performance",
    ],
    timeline: "Shipped",
    github: "https://github.com/hossaintaufiq/AcuMens-Media-Inc",
    liveUrl: "https://www.acumensinc.com",
    ourHostedUrl: "https://66923e66b61ecdb8aaf3c3f9--eclectic-syrniki-4de217.netlify.app/",
    stats: [
      { value: "Social", label: "Media automation" },
      { value: "SEO", label: "AI-driven growth" },
      { value: "Ads", label: "Performance AI" },
    ],
  },

  {
    id: "nsu-acm-sc",
    kind: "web-app" as const,
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
    github: "https://github.com/hossaintaufiq/ACM-Website2025",
    liveUrl: "https://nsusc.acm.org/",
    ourHostedUrl: "https://acm-website2025.vercel.app/",
    stats: [
      { value: "<1s", label: "Load-time target" },
      { value: "Static", label: "Rendering model" },
      { value: "CDN", label: "Edge caching" },
    ],
  },
 
];

export const aiMlProjects = [
  {
    id: "lucy",
    kind: "ai-ml" as const,
    ongoing: true,
    sector: "Personal AI",
    type: "Local LLM · Voice",
    tag: "AI / ML · Local assistant",
    title: "LUCY — Local-First Personal AI Assistant",
    headline: "J.A.R.V.I.S.-style companion that runs entirely on your PC — no cloud for everyday use",
    description:
      "A full-stack productization of OpenJarvis: React/Vite UI, FastAPI backend, Ollama (Qwen3 0.6B), Whisper STT, and Kokoro TTS — chat, live voice, and markdown memory (persona / USER / SOUL) with one-click Windows install and CPU-only inference.",
    challenge:
      "Cloud assistants trade privacy for convenience. The open question: can a useful personal AI run privately on a normal laptop with no GPU?",
    solution:
      "Local-first stack — chats, memory, and models stay on-device. Browser UI streams chat over FastAPI/SSE; Live Voice loops mic → Whisper → LLM → TTS; Windows INSTALL.bat / START.bat package the whole experience for non-dev users.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Ollama",
      "Qwen3 0.6B",
      "faster-whisper",
      "Kokoro TTS",
      "SQLite",
      "OpenJarvis",
    ],
    timeline: "Ongoing",
    github: "https://github.com/hossaintaufiq/Autonomous_Ai_Agents",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "Local", label: "On-device LLM" },
      { value: "Voice", label: "STT + TTS + live" },
      { value: "CPU", label: "No GPU required" },
    ],
  },
  {
    id: "ai-crm",
    kind: "ai-ml" as const,
    ongoing: true,
    sector: "SaaS",
    type: "Web + mobile + bot",
    tag: "AI / ML · CRM",
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
    timeline: "Ongoing",
    github: "https://github.com/hossaintaufiq/CSE327_Project",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "3", label: "Client surfaces" },
      { value: "Gemini", label: "AI task automation" },
      { value: "Voice", label: "Telegram workflows" },
    ],
  },
  {
    id: "ml-buddy",
    kind: "ai-ml" as const,
    ongoing: true,
    sector: "Developer Tools",
    type: "AI Learning Platform",
    tag: "Machine Learning · Education",
    title: "ML Buddy",
    headline: "Your AI companion for learning machine learning",
    description:
      "An interactive learning assistant designed to simplify machine learning concepts, answer technical questions, and help learners understand algorithms through AI-powered conversations.",
    challenge:
      "Machine learning beginners often struggle to understand complex concepts without personalized explanations and interactive guidance.",
    solution:
      "Developed an AI-powered educational assistant that explains ML concepts, provides coding guidance, and supports learners through conversational interactions.",
    stack: ["Python", "Streamlit", "OpenAI API", "Scikit-learn", "LangChain"],
    timeline: "Ongoing",
    github: "https://github.com/bappy-3/ml-buddy",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "AI", label: "Interactive tutor" },
      { value: "ML", label: "Concept explanations" },
      { value: "Hands-on", label: "Learning support" },
    ],
  },
  {
    id: "diabetiq",
    kind: "ai-ml" as const,
    sector: "Healthcare AI",
    type: "Web Application",
    tag: "Healthcare · AI",
    title: "DiabetIQ",
    headline: "AI-powered diabetes risk assessment platform",
    description:
      "An intelligent healthcare platform that helps users assess diabetes risk, monitor health indicators, and receive AI-assisted insights for better preventive care.",
    challenge:
      "Many people lack access to quick preliminary diabetes risk assessments and personalized health insights before consulting healthcare professionals.",
    solution:
      "Developed an AI-powered web application that analyzes user health information, estimates diabetes risk, visualizes health data, and provides personalized recommendations.",
    stack: ["Next.js", "Python", "Machine Learning", "FastAPI", "PostgreSQL"],
    timeline: "3 months",
    github: "https://github.com/nipunsaif/DiabetIQ",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "AI", label: "Risk prediction engine" },
      { value: "100%", label: "Digital health assessment" },
      { value: "Real-time", label: "Health insights" },
    ],
  },
  {
    id: "handtrack",
    kind: "ai-ml" as const,
    sector: "Computer vision",
    type: "MediaPipe · Gestures",
    tag: "AI / ML · Hand tracking",
    title: "HandTrack — Webcam Hand Tracking & Gesture Pen",
    headline: "Draw with your fingertip using MediaPipe landmarks and gesture controls",
    description:
      "A Python webcam app that overlays a colored MediaPipe hand skeleton and turns your index fingertip into a gesture pen — double-pinch to start/stop, then draw live on the display.",
    challenge:
      "Need a lightweight, real-time hand-interaction demo that goes beyond landmark overlay — with clear gesture controls for drawing, clearing, pausing, and saving without a mouse.",
    solution:
      "MediaPipe hand landmarks drive a live skeleton view; double-pinch toggles the pen, index tip draws, pinch-hold lifts the stroke, and gestures map to clear (open palm), next color (victory), pause (fist), and save PNG (thumbs up / S), with H for help and Q to quit.",
    stack: ["Python", "MediaPipe", "OpenCV", "NumPy", "Webcam"],
    timeline: "Shipped",
    github: "https://github.com/hossaintaufiq/Hand_Tracking",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "Live", label: "Hand skeleton" },
      { value: "Pen", label: "Index fingertip" },
      { value: "6+", label: "Gesture controls" },
    ],
  },
  {
    id: "stock-price-prediction",
    kind: "ai-ml" as const,
    sector: "FinTech",
    type: "Forecasting · NLP",
    tag: "AI / ML · Stock forecasting",
    title: "Stock Price Prediction Using Market Data and News Sentiment",
    headline: "Forecast stock movement with Yahoo Finance data and Indian news sentiment",
    description:
      "End-to-end Jupyter workflow that combines historical BSE market data from Yahoo Finance with sentiment analysis of Indian news headlines (polarity and subjectivity), then trains and compares ARIMA, LSTM, and tree-based models for stock price forecasting.",
    challenge:
      "Price-only models miss market narrative. Teams needed a reproducible pipeline that merges financial time series with news sentiment and fairly evaluates multiple forecasting approaches.",
    solution:
      "Collect and preprocess stock + news data, run EDA and stationarity checks, extract TextBlob sentiment by date, merge features, then train ARIMA, LSTM seq2seq, Random Forest, AdaBoost, Decision Tree, LightGBM, and XGBoost — with Random Forest selected as the best regression model on MAE/RMSE for the current feature set.",
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "yfinance",
      "TextBlob",
      "statsmodels",
      "scikit-learn",
      "TensorFlow / Keras",
      "LightGBM",
      "XGBoost",
      "Jupyter",
    ],
    timeline: "Research",
    github: "https://github.com/hossaintaufiq/StockPricePrediction",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "RF", label: "Best model · lowest MAE" },
      { value: "News", label: "Sentiment + prices" },
      { value: "7+", label: "Models compared" },
    ],
  },
];

export const toolsProjects = [
  {
    id: "dhaka-road-network",
    kind: "tools" as const,
    ongoing: true,
    sector: "Logistics",
    type: "Shortest path · Graph",
    tag: "Tools · Routing",
    title: "DhakaRoadNetwork",
    headline: "Shortest-path routing for Dhaka delivery and ride fleets",
    description:
      "A road-network shortest-path tool built to help logistics and mobility platforms — Foodpanda, Pathao, Uber, and similar rider apps — choose the fastest route from rider to customer across Dhaka's road graph.",
    challenge:
      "Riders and dispatch systems need reliable shortest-path decisions on a dense city network; generic maps alone don't always model local routing constraints for delivery and ride-hailing workflows.",
    solution:
      "Model Dhaka roads as a graph and compute shortest paths so companies can route riders to users efficiently — reducing ETA, fuel, and idle time for food delivery and ride platforms.",
    stack: ["Python", "Graph algorithms", "Shortest path", "Dijkstra / A*", "Network analysis"],
    timeline: "Ongoing",
    github: "https://github.com/hossaintaufiq/DhakaRoadNetwork",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "Path", label: "Shortest route" },
      { value: "Dhaka", label: "City road graph" },
      { value: "Fleet", label: "Delivery · ride apps" },
    ],
  },
  {
    id: "banking-system-backend",
    kind: "tools" as const,
    sector: "FinTech",
    type: "Banking backend · API",
    tag: "Tools · Banking system",
    title: "Banking System Backend",
    headline: "Production banking backend tool powering a live bank's API layer",
    description:
      "A TypeScript Express banking backend we built for a bank client — accounts, auth, payments, and integrations. The bank continues to run their operations on this backend; public metrics aren't shared, so we don't claim unverified stats.",
    challenge:
      "The bank needed a custom backend they could own — secure APIs, payment rails, and operational workflows — instead of bolting onto a rigid off-the-shelf core alone.",
    solution:
      "Node.js / Express / TypeScript API with MongoDB (Mongoose), JWT auth, Stripe and Twilio integrations, Socket.io for real-time events, file uploads, and Zod validation — deployed as the bank's production backend service.",
    stack: [
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Twilio",
      "Socket.io",
      "Zod",
    ],
    timeline: "In production",
    github: "https://github.com/Minhajul-Shobuj/bancking-system-backend",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "Live", label: "Bank in production" },
      { value: "API", label: "Core banking backend" },
      { value: "Secure", label: "JWT · payments" },
    ],
  },
  {
    id: "focusflow",
    kind: "tools" as const,
    sector: "Productivity",
    type: "Desktop OS · Offline-first",
    tag: "Tools · Personal productivity",
    title: "FocusFlow — Personal Productivity OS",
    headline: "Offline-first desktop OS for tasks, habits, Pomodoro, notes, and analytics",
    description:
      "A full-featured Windows productivity app built from scratch in Python and PySide6 (~7,200+ lines across 56 modules). Replaces a stack of task managers, habit trackers, Pomodoro timers, notes, and dashboards — 100% local JSON, no cloud, no accounts.",
    challenge:
      "Separate tools for tasks, habits, focus timers, and notes fragment attention. Recruiters also rarely see portfolio work that owns domain models, persistence, and native desktop polish end to end.",
    solution:
      "Layered Models → Services → UI with AppContext DI and an AppSignals bus. Atomic JSON saves with backup/restore, crash recovery, Windows startup/notifications, Pomodoro linked to task budgets, habits with streaks/heatmaps, Markdown notes, Matplotlib stats, and gamification — scoped page refresh for performance.",
    stack: [
      "Python",
      "PySide6",
      "Qt 6",
      "Matplotlib",
      "Plyer",
      "Markdown",
      "JSON storage",
      "Windows 10/11",
    ],
    timeline: "v1.0.0",
    github: "https://github.com/hossaintaufiq/FocusFlow",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "7.2k+", label: "Lines of Python" },
      { value: "56", label: "Modules" },
      { value: "100%", label: "Local · offline" },
    ],
  },
  {
    id: "nsu-iupc-dashboard",
    kind: "tools" as const,
    sector: "Education",
    type: "Live dashboard · WebSocket",
    tag: "Tools · Contest platform",
    title: "NSU IUPC Live Dashboard Platform",
    headline: "Real-time standings layer on top of VJudge for university contests",
    description:
      "A real-time contest monitoring platform for NSU IUPC — live leaderboard, projector-ready visualization, and admin-friendly control. Built as a mirror and enhancement layer on VJudge (not a replacement), with a custom Node.js backend polling the VJudge ranklist and a Next.js dashboard receiving Socket.io updates.",
    challenge:
      "VJudge hosts judging well but lacks university-level UX: projector modes, custom freeze logic, richer analytics, and tighter control over how standings are shown during IUPC.",
    solution:
      "Participants submit on VJudge; the Express/TypeScript backend polls the ranklist API on a configurable interval, processes results, and broadcasts over Socket.io so the Next.js frontend updates live standings without refresh — scalable toward 100+ teams and ready for freeze, first-blood, and admin features.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Axios",
      "Tailwind CSS",
      "VJudge API",
    ],
    timeline: "Shipped",
    github: "https://github.com/hossaintaufiq/vjudge_pannel_integration",
    liveUrl: "",
    ourHostedUrl: "",
    stats: [
      { value: "Live", label: "WebSocket standings" },
      { value: "VJudge", label: "Judging mirror" },
      { value: "100+", label: "Teams ready" },
    ],
  },
  
  
];

export const templateProjects = [
  {
    id: "amani-holdings",
    kind: "template" as const,
    sector: "Real estate",
    type: "Marketing site · Next.js",
    tag: "Real estate · Template",
    title: "Amani Holdings — Premium Real Estate",
    headline: "Modern Next.js template for luxury property and investment brands",
    description:
      "Industry template for real-estate firms — featured listings, investment storytelling, services, and consultation CTAs. Demo site for Amani Holdings Ltd., premium real estate in Dhaka (Gulshan, Banani, Baridhara).",
    challenge:
      "Property brands need a polished digital presence that showcases listings, ROI narratives, and trust without looking like a generic brochure site.",
    solution:
      "A modern Next.js / TypeScript marketing template with properties, investment opportunities, client perspectives, and book-consultation flows — ready to rebrand for other real-estate companies.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    timeline: "Template",
    github: "https://github.com/hossaintaufiq/amani-holdings",
    liveUrl: "",
    ourHostedUrl: "https://amani-holdings.vercel.app/",
    stats: [
      { value: "Listings", label: "Featured properties" },
      { value: "Invest", label: "ROI storytelling" },
      { value: "Dhaka", label: "Luxury RE ready" },
    ],
  },
  {
    id: "biker-zone",
    kind: "template" as const,
    sector: "Automotive retail",
    type: "Marketing site · HTML / CSS / JS",
    tag: "Automotive · Template",
    title: "Biker Zone — Ride-on Motorcycle Storefront",
    headline: "Raw HTML, CSS & JS template for bike brands and dealerships",
    description:
      "A lightweight motorcycle retail template featuring product hero slides (e.g. Ride-on R15 V4), shop navigation, and a latest-news section for models like Ducati XDiavel. Built as a pure HTML, CSS, and JavaScript starter — no framework required.",
    challenge:
      "Bike shops and powersports brands often need a fast marketing site that looks product-forward without committing to a full React or CMS stack.",
    solution:
      "A raw HTML / Tailwind CSS / JS storefront with hero carousel, shop and news blocks, and purchase CTAs — easy to rebrand, host on GitHub Pages, and extend into a full client build.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    timeline: "Template",
    github: "https://github.com/hossaintaufiq/Biker-Zone",
    liveUrl: "",
    ourHostedUrl: "https://hossaintaufiq.github.io/Biker-Zone/",
    stats: [
      { value: "Raw", label: "HTML · CSS · JS" },
      { value: "Hero", label: "Product carousel" },
      { value: "News", label: "Model highlights" },
    ],
  },
  {
    id: "fruit-burst",
    kind: "template" as const,
    sector: "Food & grocery",
    type: "Marketing site · HTML / CSS / JS",
    tag: "Organic retail · Template",
    title: "Fruit Burst — Organic Fruit Storefront",
    headline: "Vanilla HTML, CSS & JS template for organic produce brands",
    description:
      "A colorful organic fruit e-commerce style template with hero slides (“Exotic tastes at your doorstep”), fruit category chips, deal-of-the-day countdown, product cards (Apples, Orange, Red Dragon, Banana), team experts, and why-choose-us blocks. Pure HTML, CSS, and JavaScript — no framework.",
    challenge:
      "Grocery and organic brands need a bright, product-led marketing site that can launch quickly without a heavy frontend stack.",
    solution:
      "A raw HTML / Tailwind CSS / JS storefront with shop navigation, deal countdown, product details modals, team section, and trust pillars — ready to rebrand and host on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    timeline: "Template",
    github: "https://github.com/hossaintaufiq/Fruit-Brust",
    liveUrl: "",
    ourHostedUrl: "https://hossaintaufiq.github.io/Fruit-Brust/",
    stats: [
      { value: "Raw", label: "HTML · CSS · JS" },
      { value: "Deal", label: "Countdown offers" },
      { value: "Shop", label: "Product cards" },
    ],
  },
  {
    id: "summer-sale",
    kind: "template" as const,
    sector: "E-commerce",
    type: "Promo shop · HTML / CSS / JS",
    tag: "Retail · Template",
    title: "Summer Sale — Interactive Promo Storefront",
    headline: "Vanilla HTML, CSS & JS sale page with cart and coupon logic",
    description:
      "A sale-fever shopping template with kitchenware and sportswear product grids, cart totals, and a SELL200 promo flow (TK 200+ for 20% off). Built with pure HTML, CSS, and vanilla JavaScript — no framework.",
    challenge:
      "Campaign landing pages need working cart math and coupon rules without standing up a full e-commerce stack.",
    solution:
      "A raw HTML / Tailwind CSS / JS promo storefront with category sections, coupon apply, live price/discount totals, and purchase confirmation — easy to rebrand for seasonal sales.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    timeline: "Template",
    github: "https://github.com/hossaintaufiq/Summer-Sale",
    liveUrl: "",
    ourHostedUrl: "https://hossaintaufiq.github.io/Summer-Sale/",
    stats: [
      { value: "Raw", label: "HTML · CSS · JS" },
      { value: "20%", label: "Coupon discount" },
      { value: "Cart", label: "Live totals" },
    ],
  },
];

/** All portfolio items. */
export const projects = [
  ...clientProjects,
  ...aiMlProjects,
  ...toolsProjects,
  ...templateProjects,
];

export const workStats = [
  { value: String(clientProjects.length), label: "Web & App" },
  { value: String(aiMlProjects.length) + "+", label: "AI / ML" },
  { value: String(toolsProjects.length) + "+", label: "Tools" },
  { value: String(templateProjects.length) + "+", label: "Templates" },
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
  { role: "Team Lead & Backend AI Engineer", focus: "Architecture, standards, delivery" },
  { role: "Frontend & UI/UX Designer", focus: "Interfaces, design systems, frontend" },
  { role: "Frontend Engineer", focus: "Performant UI and component architecture" },
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
    role: "Team Lead & Senior Backend Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Full-stack developer focused on scalable web applications and clean API design.",
    skills: ["React", "Node.js", "PostgreSQL", "Python", "Docker", "AWS", "Node.js"],
  },
  {
    initials: "FS",
    name: "Faid Sarowar",
    role: "Frontend & UI/UX Designer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Works across frontend and UI/UX design with a focus on reliable delivery.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design", "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Frontend Engineer",
    school: "BSc in CSE, North South University, Bangladesh",
    bio: "Builds performant, accessible frontends with a sharp eye for UX and maintainable component architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
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
    role: "Frontend & UI/UX Designer",
    bio: "Designs and builds polished interfaces — from Figma systems to production React and Next.js frontends.",
    skills: ["UI/UX Design", "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS", "Adobe XD", "Adobe Photoshop"],
    linkedin: "https://www.linkedin.com/in/fiad-sarowar-965491422/",
    github: "https://github.com/Fiad-123",
    email: "fiadsarowar93@gmail.com",
    photo: "/team/leadership/faid_sarowar.jpeg" as string | null,
    photoTone: "from-accent/20 to-panel",
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Frontend Engineer",
    bio: "Builds performant, accessible frontends with a sharp eye for UX and maintainable component architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
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
