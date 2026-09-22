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
    stack: ["TypeScript", "React", "Node.js", "Postgres", "Redis"],
    // metric: "↓ 42% latency",
    // metricLabel: "p95 write latency",
    live: "https://atsup.vercel.app/",
    github: "https://github.com/Mohosin999/atsup-full-stack-app",
  },
  {
    name: "chatbot",
    description:
      "A full-stack AI chatbot platform with real-time streaming, message editing & re-streaming with branch history, agentic function calling, token-aware context management (128k budget allocation, pruning & compression), conversation summarization, and multimodal image/PDF input. Supports structured JSON output and prompt-engineered generation controls.",
    stack: ["TypeScript", "React", "Node.js", "MongoDB"],
    // metric: "12min → 3min",
    // metricLabel: "median deploy time",
    live: "https://chatbot-client-theta.vercel.app/",
    github: "https://github.com/Mohosin999/chatbot-full-stack-mern-app",
  },
  {
    name: "clean-youtube",
    description:
      "Clean YouTube is a distraction-free YouTube experience for focused learning. Save any playlist or single video and watch it in a clean, ad-free player, no shorts, no recommendations, no clutter. Your library (playlists + videos) lives locally in the browser, with separate pages for Playlists and Videos, plus Favorites and Recents.",
    stack: ["JavaScript", "React", "MUI"],
    // metric: "↓ 78% auth overhead",
    // metricLabel: "p50 request time",
    live: "https://clean-youtube-app.vercel.app/",
    github: "https://github.com/Mohosin999/clean-youtube-app",
  },
];

export const jobs: Job[] = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    duration: "Feb 2024 — Dec 2024",
    location: "Remote",
    bullets: [
      "Built an invite-only user management system with Next.js & Strapi, serving 50+ users.",
      "Developed a Strapi-based admin dashboard for secure user creation and management.",
      "Designed and developed 12 fully responsive pages using Next.js & Tailwind CSS.",
    ],
    stack: ["Next.js", "TypeScript", "Strapi.js"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Redux-Toolkit / Zustand",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "Postgres",
      "Prisma ORM",
      "Redis",
      "REST",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    title: "Tools",
    items: ["Git", "Linux", "Notion"],
  },
] as const;

export const aboutParagraphs = [
  "When I get a new project idea, I think before coding. I define the Product Requirements Document, design the database and API architecture, choose the tech stack, then use AI agents to build it module by module. I review, test edge cases, refactor, secure, and deploy. AI writes the code, but I own the thinking and the product.",
  "With over 3 years of hands-on experience as a full-stack engineer, I build scalable, high-performance, AI-powered products that deliver real value. My skills include TypeScript, React, Node.js, MongoDB, and PostgreSQL. I have deep knowledge of designing RESTful APIs and implementing real-time features using WebSockets.",
  "I built ATSUp, an AI-powered tool that helps job seekers make their resumes ATS-friendly. Users can upload their resume and job description to get an instant ATS score along with clear feedback on what’s missing, what’s strong, and what needs improvement. It also includes a dedicated ATS-friendly Resume Builder and a separate AI Resume Rewriter that rewrites the resume according to the Job Description. Currently offering 7 free credits daily.",
  "I’m looking for opportunities where I can keep building useful products and work with people who value both speed and good engineering judgment.",
];
