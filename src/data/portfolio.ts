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
      "Clean YouTube is a user-friendly web app that provides a clean, distraction-free YouTube experience. It removes ads and cluttered layouts, helping users focus on their videos while managing playlists, accessing recently viewed playlists, and saving favorites seamlessly.",
    stack: ["JavaScript", "React", "MUI"],
    // metric: "↓ 78% auth overhead",
    // metricLabel: "p50 request time",
    live: "https://clean-youtube-app.vercel.app/",
    github: "https://github.com/Mohosin999/clean-youtube-app",
  },
  // {
  //   name: "clean-youtube",
  //   description:
  //     "Real-Time Chat App is a full-stack messaging platform built with React, Node.js, and Socket.IO, delivering seamless one-on-one and group conversations with instant message delivery. Users can share images, reply to specific messages, see typing indicators, and view online presence in real time. The app features secure JWT authentication, dark/light theme, optimistic UI updates, and soft message deletion.",
  //   stack: ["Next.js", "Edge", "Redis", "OAuth2"],
  //   // metric: "↓ 78% auth overhead",
  //   // metricLabel: "p50 request time",
  //   live: "#",
  //   github: "#",
  // },
];

export const jobs: Job[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Feb 2024 — Jun 2025",
    location: "Remote",
    bullets: [
      "Architected a secure invite-only authentication system with custom OTP verification using Next.js and Strapi, serving 50+ users.",
      "Built an admin dashboard for efficient user management and platform administration.",
      "Developed dynamic profile pages with personalized, user-specific data.",
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
