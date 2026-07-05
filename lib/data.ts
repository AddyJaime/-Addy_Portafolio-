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
    github: "https://github.com/AddyJaime/mlb-dashboard-frontend",
    demo: "https://mlb.addyjaime.dev/",
  },
  {
    id: "the-dugout-shop",
    title: "The Dugout Shop",
    subtitle: "Enterprise-grade e-commerce microservices platform",
    description:
      "An MLB merchandise e-commerce platform built with an enterprise backend architecture — microservices, event-driven communication, and full DevOps pipeline — designed to mirror real production systems.",
    stack: [
      "Microservices architecture with Node.js — 5 independent services (auth, catalog, orders, payments, API gateway)",
      "GraphQL Federation with Apollo Server at the gateway, REST and gRPC for inter-service communication",
      "Database-per-service pattern with PostgreSQL and Prisma ORM",
      "Identity and access management with Keycloak (OAuth2 / OIDC / MFA)",
      "Event-driven communication between services using Kafka",
      "Monorepo managed with Turborepo + pnpm workspaces",
      "Containerized with Docker Compose, orchestrated with Kubernetes (GKE)",
      "Infrastructure as Code with Terraform and Ansible on GCP",
      "CI/CD pipelines with Jenkins Shared Libraries and GitHub Actions",
      "Edge layer with Cloudflare WAF, HAProxy load balancing, and Nginx reverse proxy",
    ],
    metrics: [
      { label: "Architecture", value: "Microservices" },
      { label: "API Layer", value: "GraphQL Federation" },
      { label: "Infrastructure", value: "Kubernetes + Terraform" },
    ],
    github: "https://github.com/AddyJaime/The-Dugout-Shop",
    demo: "https://github.com/AddyJaime/The-Dugout-Shop",
  },
]

export type Section = "projects" | "contact"
