import { Github, Twitter, Linkedin, Globe, Mail } from 'lucide-react';

export const profile = {
  name: "Arjun",
  title: "Full Stack Engineer",
  location: "Banglore",
  age: 21,
  bio: "Full-Stack Web Developer building scalable backends and intuitive frontends. I combine strong UI development skills with robust server-side engineering to deliver complete, production-ready applications.",
  image: "/IMG_20220310_094806_197.jpg",
  socials: [
    { icon: Twitter, link: "https://x.com/Arjun2950618011", label: "Twitter" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/arjunitagi", label: "LinkedIn" },
    { icon: Github, link: "https://github.com/arjunkumar811", label: "GitHub" },
    { icon: Mail, link: "mailto:kumararjun26401@gmail.com", label: "Email" },
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "FlexForce.ai",
    period: "Aug 2024 to May 2025",
    description: "Developed a multi-tenant CMS using Payload CMS (Node.js, MongoDB) with domain-based tenant detection, RBAC, and secure REST API integrations. Built a dynamic Next.js front-end with tenant-specific routing, integrated with headless CMS content and optimized for SEO, performance, and responsiveness. Designed scalable content models (Users, Tenants, Pages) and implemented custom authentication hooks, dynamic CORS, and admin panel customizations. Contributed to a SaaS-ready architecture with clean code, agile collaboration, and CI/CD workflows on Vercel.",
    tags: ["Payload CMS", "Node.js", "Next.js", "TypeScript", "MongoDB", "REST APIs", "Vercel", "Git", "Agile"],
    links: [
      { label: "Website", icon: Globe, url: "https://flexforce.ai" }
    ]
  },
  {
    id: 2,
    role: "Full Stack Web developer",
    company: "TechPioneers",
    period: "Aug 2023 to Aug 2024",
    description: "Built and maintained a scalable event planning web application using React and Node.js. Developed RESTful APIs and integrated third-party services including payment gateways, authentication, and calendar APIs. Collaborated with design and product teams to deliver responsive UI and advanced features like 3D rendering and AI-driven recommendations. Ensured application security, performance, and efficient CI/CD workflows in an agile startup environment. Tech Stack: React, Node.js, REST APIs, SQL/NoSQL databases, Payment Gateways, 3D rendering, AI integration, Agile, CI/CD.",
    tags: ["React", "Node.js", "REST APIs", "SQL/NoSQL", "Payment Gateways", "3D rendering", "AI integration", "Agile", "CI/CD"],
    links: []
  }
];

export const projects = [
  {
    id: 1,
    title: "Code Editor",
    description: "This Online IDE is a powerful, web-based code editor that supports multi-language execution, custom themes, and smart output handling. Built with Next.js 15, Convex, Clerk, and TypeScript.",
    tags: ["Next.js 15", "TypeScript", "Convex", "Clerk", "IDE"],
    link: "https://code-editor-seven-kappa.vercel.app",
    github: "https://github.com/arjunkumar811/Code-Editor"
  },
  {
    id: 2,
    title: "AI Engine",
    description: "A no-code, AI-powered website builder that launches stunning, high-converting sites in minutes. Powered by Anthropic API to generate professional websites instantly without writing code.",
    tags: ["AI", "Anthropic API", "No-Code", "Website Builder"],
    link: "#",
    github: "https://github.com/arjunkumar811/AI_engine"
  },
  {
    id: 3,
    title: "Brainly App",
    description: "Your Digital Brain for Everything Important. A full-stack web application to store, organize, and access important links, tweets, and documents in one place. Share your 'second brain' with others through unique sharable links.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Zod", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/arjunkumar811/Brainly-App"
  },
  {
    id: 4,
    title: "Excalidraw",
    description: "A real-time collaborative whiteboard application built with Next.js, WebSocket, and PostgreSQL. Create, share, and collaborate on diagrams, sketches, and wireframes with your team instantly.",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Real-time", "Collaborative"],
    link: "#",
    github: "https://github.com/arjunkumar811/Excalidraw"
  }
];
