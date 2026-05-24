export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  metrics: { label: string; value: string }[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: "mlb-dashboard",
    title: "MLB Stadium Data Dashboard",
    subtitle: "Data platform for exploring MLB stadium analytics",
    description:
      "Full-stack analytics platform with containerized multi-service deployment, SSL termination via Nginx, and global CDN caching with rate limiting & DDoS protection through Cloudflare.",
    stack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Docker Compose",
      "Nginx",
      "Cloudflare",
      "DigitalOcean",
    ],
    metrics: [
      { label: "MLB Stadiums", value: "30" },
      { label: "API Architecture", value: "REST + TypeScript" },
      { label: "Infrastructure", value: "Containerized" },
    ],
    github: "https://github.com/AddyJaime/mlb-dashboard",
    demo: "https://mlb.addyjaime.dev/",
  },
  {
    id: "talk2me",
    title: "Talk2Me",
    subtitle: "Real-time mobile chat application",
    description:
      "Real-time messaging application where users can add friends, start conversations, and exchange messages instantly.",
    stack: [
      "React Native + TypeScript",
      "Backend: Node.js + Express",
      "Socket.IO",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Zod",
      "Axios",
    ],
    metrics: [
      { label: "Realtime Messaging", value: "WebSockets" },
      { label: "Authentication", value: "JWT" },
      { label: "Database", value: "PostgreSQL" },
    ],
    github: "https://github.com/AddyJaime/talk2me",
    demo: "https://addyjaime.dev",
  },
]

export type Section = "projects" | "contact"
