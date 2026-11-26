/** Display-only enrichment for the homepage — does not alter shared content.ts records. */

export const homeTrustStats = [
  { count: 12, suffix: "+", label: "Projects Delivered" },
  { count: 6, suffix: "+", label: "Industries Served" },
  { count: 10, suffix: "+", label: "Enterprise Solutions" },
  { count: 7, suffix: "+", label: "Engineers" },
  { count: 3, suffix: "+", label: "Years of Experience" },
  { count: 8, suffix: "+", label: "Supported Platforms" },
];

export const homeWhatWeBuild = [
  {
    id: "erp",
    title: "Enterprise ERP",
    description: "Unified finance, inventory, procurement, and operations in one system of record.",
  },
  {
    id: "crm",
    title: "CRM Platforms",
    description: "Pipeline, customer history, and service workflows built around how your team sells.",
  },
  {
    id: "mes",
    title: "MES Systems",
    description: "Shop-floor visibility — production orders, machine status, and quality checkpoints.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Real-time stock, warehouses, and transfer flows that replace spreadsheet guesswork.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing Software",
    description: "Planning, BOM, and production tracking tailored to your plant—not generic templates.",
  },
  {
    id: "hrms",
    title: "HRMS",
    description: "People ops: attendance, payroll inputs, leave, and employee self-service portals.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Document intelligence, classification, and workflow automation grounded in your data.",
  },
  {
    id: "bi",
    title: "Business Intelligence",
    description: "Live dashboards and reporting so leadership sees the business as it moves.",
  },
  {
    id: "web",
    title: "Web Applications",
    description: "Portals, SaaS products, and operational tools built for performance and maintainability.",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "iOS and Android experiences connected to the same enterprise backends.",
  },
];

export const homeProblems = [
  { title: "Manual paperwork", detail: "Forms, approvals, and records stuck in trays and inboxes." },
  { title: "Disconnected systems", detail: "Finance, ops, and sales tools that never talk to each other." },
  { title: "Excel dependency", detail: "Critical operations living in fragile shared spreadsheets." },
  { title: "Poor reporting", detail: "Decisions delayed waiting for someone to assemble last month’s numbers." },
  { title: "Inventory mistakes", detail: "Stockouts, overstock, and no single source of truth." },
  { title: "No automation", detail: "Teams repeating the same tasks every day by hand." },
  { title: "No real-time visibility", detail: "Leaders flying blind between weekly status meetings." },
  { title: "Legacy software", detail: "Aging systems that can’t scale, integrate, or stay secure." },
];

export const homeExtraIndustries = [
  { id: "manufacturing", title: "Manufacturing", tag: "Operations" },
  { id: "garments", title: "Garments", tag: "Production" },
  { id: "steel", title: "Steel", tag: "Heavy industry" },
  { id: "logistics", title: "Logistics", tag: "Supply chain" },
  { id: "construction", title: "Construction", tag: "Projects" },
];

export const homeProcessSteps = [
  "Discovery",
  "Business Analysis",
  "System Design",
  "UI/UX",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

/** Reasons on the home page: the promise, how we keep it, and what the client gets. */
export const homeWhyPoints = [
  {
    title: "Builders you can reach",
    description:
      "You talk to the engineers writing the code, not a rotating account manager who passes notes along.",
    proof: "A shared WhatsApp or Slack thread with your engineers",
  },
  {
    title: "Progress you can click",
    description: "We build in two-week cycles and walk you through working software at the end of each one.",
    proof: "A staging build to review, not a status slide",
  },
  {
    title: "Scope that stays honest",
    description:
      "We plan and estimate after discovery. New ideas are logged with their effect on timeline and budget, and you approve them first.",
    proof: "A written estimate and roadmap you can hold us to",
  },
  {
    title: "Ownership you keep",
    description: "What we build for you is yours to run, with no lock-in after launch.",
    proof: "Source code, credentials and documentation",
  },
  {
    title: "Security from sprint one",
    description:
      "Role-based access, encrypted data and audit logging are built in early, not bolted on the week before launch.",
    proof: "An NDA before discovery calls when you need one",
  },
  {
    title: "Ship, then stay",
    description: "Launch is a milestone. We follow it with monitoring, fixes and a backlog based on real usage.",
    proof: "A support window after every launch",
  },
];

/** One line per step of `processSteps`, short enough for the home page timeline. */
export const homeProcessSummaries: Record<string, string> = {
  Discover: "Requirements, roadmap and estimate",
  Design: "Clickable prototype before production code",
  Build: "A working demo every two weeks",
  Launch: "Load testing and a launch checklist",
  Grow: "Monitoring, support and what to build next",
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

export const homeTechStack = [
  // Full-stack web
  { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: "Vue.js", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
  { name: "Angular", icon: `${DEVICON}/angular/angular-original.svg` },
  { name: "Astro", icon: `${SI}/astro.svg` },
  { name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg` },
  { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Sass", icon: `${DEVICON}/sass/sass-original.svg` },
  { name: "Redux", icon: `${DEVICON}/redux/redux-original.svg` },
  { name: "Three.js", icon: `${DEVICON}/threejs/threejs-original.svg` },
  { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
  { name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
  { name: "tRPC", icon: `${SI}/trpc.svg` },
  { name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
  { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
  { name: "Laravel", icon: `${DEVICON}/laravel/laravel-original.svg` },
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
  { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
  { name: "Flask", icon: `${DEVICON}/flask/flask-original.svg` },
  { name: "Go", icon: `${DEVICON}/go/go-original.svg` },
  { name: ".NET", icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
  { name: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg` },
  { name: "Socket.IO", icon: `${DEVICON}/socketio/socketio-original.svg` },
  { name: "Nginx", icon: `${DEVICON}/nginx/nginx-original.svg` },
  { name: "Vercel", icon: `${DEVICON}/vercel/vercel-original.svg` },

  // Apps
  { name: "React Native", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
  { name: "Expo", icon: `${SI}/expo.svg` },
  { name: "Ionic", icon: `${DEVICON}/ionic/ionic-original.svg` },
  { name: "Swift", icon: `${DEVICON}/swift/swift-original.svg` },
  { name: "Kotlin", icon: `${DEVICON}/kotlin/kotlin-original.svg` },
  { name: "Android", icon: `${DEVICON}/android/android-original.svg` },
  { name: "Electron", icon: `${DEVICON}/electron/electron-original.svg` },

  // AI / ML / Agents / API integrations
  { name: "OpenAI", icon: `${SI}/openai.svg` },
  { name: "Anthropic", icon: `${SI}/anthropic.svg` },
  { name: "LangChain", icon: `${SI}/langchain.svg` },
  { name: "Hugging Face", icon: `${SI}/huggingface.svg` },
  { name: "Ollama", icon: `${SI}/ollama.svg` },
  { name: "Replicate", icon: `${SI}/replicate.svg` },
  { name: "Dialogflow", icon: `${SI}/dialogflow.svg` },
  { name: "TensorFlow", icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
  { name: "Keras", icon: `${SI}/keras.svg` },
  { name: "scikit-learn", icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
  { name: "OpenCV", icon: `${DEVICON}/opencv/opencv-original.svg` },
  { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg` },
  { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
  { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
  { name: "Streamlit", icon: `${SI}/streamlit.svg` },
  { name: "MLflow", icon: `${SI}/mlflow.svg` },
  { name: "n8n", icon: `${SI}/n8n.svg` },
  { name: "Make", icon: `${SI}/make.svg` },
  { name: "Zapier", icon: `${SI}/zapier.svg` },
  { name: "Twilio", icon: `${SI}/twilio.svg` },
  { name: "Stripe", icon: `${SI}/stripe.svg` },
  { name: "Deepgram", icon: `${SI}/deepgram.svg` },

  // Data / cloud / DevOps
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
  { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
  { name: "Elasticsearch", icon: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
  { name: "Firebase", icon: `${DEVICON}/firebase/firebase-plain.svg` },
  { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
  { name: "Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },
  { name: "RabbitMQ", icon: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
  { name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  {
    name: "AWS",
    icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  { name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
  { name: "Google Cloud", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  { name: "Cloudflare", icon: `${SI}/cloudflare.svg` },
  { name: "Terraform", icon: `${SI}/terraform.svg` },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
  { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
  { name: "GitLab", icon: `${DEVICON}/gitlab/gitlab-original.svg` },
  { name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
  { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
  { name: "OpenAPI", icon: `${SI}/openapiinitiative.svg` },
  { name: "Auth0", icon: `${SI}/auth0.svg` },
  { name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
  { name: "Jest", icon: `${DEVICON}/jest/jest-plain.svg` },
  { name: "Cypress", icon: `${DEVICON}/cypressio/cypressio-original.svg` },
  { name: "Sentry", icon: `${SI}/sentry.svg` },
] as const;

export const homeFeaturedProjectIds = [
  "playpen-school",
  "mango-ev",
  "acumens-media",
  "career-craft-ai",
  "noksha",
] as const;
