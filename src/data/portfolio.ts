export type Project = {
  name: string;
  description: string;
  stack: string[];
  // metric: string;
  // metricLabel: string;
  live?: string;
  github?: string;
};

export type Job = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const profile = {
  name: "Mohosin Hasan Akash",
  role: "Full-Stack Engineer",
  tagline: "I engineer scalable systems from backend to polished interfaces.",
  status: "Open to opportunities • Remote",
  email: "mohosin.hasan.akash@gmail.com",
  github: "https://github.com/Mohosin999",
  linkedin: "https://www.linkedin.com/in/mohosinh99/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: Project[] = [
  {
    name: "atsup",
    description:
      "ATSUp is an AI resume optimizer that provides accurate ATS scores by evaluating resumes against job descriptions for searchability, skills, formatting, and recruiter criteria, with actionable feedback from real content. The platform manually builds standardized ATS-friendly resumes and rewrites resumes to tailor to specific jobs without inventing or hallucinating information.",
    stack: ["TypeScript", "React", "Node.js", "Prisma ORM", "Postgres", "Redis"],
    // metric: "↓ 42% latency",
    // metricLabel: "p95 write latency",
    live: "https://atsup.vercel.app/",
    github: "https://github.com/Mohosin999/atsup-full-stack-app",
  },
  {
    name: "chatbot",
    description:
      "A full-stack AI chatbot platform with real-time streaming, agentic function calling, conversation summarization, and multimodal image/PDF input. Supports structured JSON output, prompt-engineered generation controls, and secure JWT authentication with persistent user chat history and summaries.",
    stack: ["TypeScript", "React", "Node.js", "MongoDB"],
    // metric: "12min → 3min",
    // metricLabel: "median deploy time",
    live: "https://chatbot-client-theta.vercel.app/",
    github: "https://github.com/Mohosin999/chatbot-full-stack-mern-app",
  },
  {
    name: "mindSafe",
    description:
      "MindSafe is a full-stack mental health platform designed for anxiety and panic support. It provides guided assessments, real-time panic relief tools, a structured 40-day wellness program with progress tracking, an anonymous peer community, and role-based dashboards. Built with Next.js, Prisma, PostgreSQL, and NextAuth, it enables secure, scalable, and personalized recovery journeys.",
    stack: ["Next.js", "Prisma ORM", "Postgres", "Tailwind"],
    // metric: "80k users",
    // metricLabel: "scaled, no downtime",
    live: "#",
    github: "#",
  },
  {
    name: "clean-youtube",
    description:
      "Problem: auth added 400ms per request at the edge. Solution: moved session verification to middleware with JWKS caching and short-lived rotated keys.",
    stack: ["Next.js", "Edge", "Redis", "OAuth2"],
    // metric: "↓ 78% auth overhead",
    // metricLabel: "p50 request time",
    live: "#",
    github: "#",
  },
];

export const jobs: Job[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Aug 2026 - Sep 2026",
    location: "Remote",
    bullets: [
      "Built a full-stack mental health platform using Next.js, Prisma, PostgreSQL.",
      "Developed guided assessments, panic relief tools, and a 40-day wellness program with progress tracking.",
      "Implemented anonymous peer community with privacy-focused user interactions.",
      "Built role-based dashboards and secure authentication/authorization for scalable platform management.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma ORM", "Postgres"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Apr 2025 — Jun 2025",
    location: "Remote",
    bullets: [
      "Developed a secure invite-only authentication system with custom OTP verification using Next.js and Strapi, serving 50+ users.",
      "Built an admin dashboard for efficient user management and platform administration.",
      "Developed dynamic profile pages with personalized, user-specific data.",
    ],
    stack: ["Next.js", "TypeScript", "Strapi.js",],
  },
  // {
  //   company: "Freelance",
  //   role: "Software Engineer",
  //   duration: "2019 — 2021",
  //   location: "Remote",
  //   bullets: [
  //     "Delivered 15+ production apps for startups; 3 reached profitability on v1 infrastructure I designed.",
  //   ],
  //   stack: ["TypeScript", "Postgres", "Vercel", "Stripe"],
  // },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Go", "Postgres", "Redis", "GraphQL / REST"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Docker", "CI/CD", "Terraform", "Observability"],
  },
  {
    title: "Tools",
    items: ["Git", "Linux", "Vim", "Figma", "Notion"],
  },
] as const;

export const aboutParagraphs = [
  "When I get a new project idea, I think before coding. I define the Product Requirements Document, design the database and API architecture, choose the tech stack, then use AI agents to build it module by module. I review, test edge cases, refactor, secure, and deploy. AI writes the code, but I own the thinking and the product.",
  "With over 3 years of hands-on experience as a full-stack engineer, I build scalable, high-performance, AI-powered products that deliver real value. My skills include TypeScript, React, Node.js, MongoDB, and PostgreSQL. I have deep knowledge of designing RESTful APIs and implementing real-time features using WebSockets.",
  "I built ATSUp, an AI-powered tool that helps job seekers make their resumes ATS-friendly. Users can upload their resume and job description to get an instant ATS score along with clear feedback on what’s missing, what’s strong, and what needs improvement. It also includes a dedicated ATS-friendly Resume Builder and a separate AI Resume Rewriter that rewrites the resume according to the Job Description. Currently offering 7 free credits daily.",
  "I’m looking for opportunities where I can keep building useful products and work with people who value both speed and good engineering judgment.",
];
