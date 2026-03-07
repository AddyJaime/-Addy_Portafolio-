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
    id: "nexus",
    title: "Nexus Gateway",
    subtitle: "High-throughput API gateway with intelligent routing",
    description:
      "Production API gateway handling 50k+ req/sec with load balancing, circuit breakers, rate limiting, and distributed tracing via OpenTelemetry. Zero-downtime deployments across multi-AZ.",
    stack: ["Go", "Docker", "K8s", "Redis", "Prometheus", "Grafana"],
    metrics: [
      { label: "Throughput", value: "50k rps" },
      { label: "Latency p99", value: "12ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "terrastack",
    title: "TerraStack",
    subtitle: "Infrastructure-as-Code pipeline automation",
    description:
      "Automated IaC pipeline managing 200+ resources across AWS and GCP. Features drift detection, cost estimation, approval workflows, and state locking with versioned backends.",
    stack: ["Terraform", "AWS", "GCP", "Python", "GitHub Actions"],
    metrics: [
      { label: "Resources", value: "200+" },
      { label: "Deploy Time", value: "4min" },
      { label: "Cost Saved", value: "38%" },
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "streamcore",
    title: "StreamCore",
    subtitle: "Real-time distributed event processing engine",
    description:
      "Kafka-based event processing handling millions of events/day with exactly-once semantics, dead letter queues, schema evolution, and sub-100ms latency for analytics and fraud detection.",
    stack: ["Node.js", "Kafka", "PostgreSQL", "Elasticsearch", "Docker"],
    metrics: [
      { label: "Events/day", value: "5M+" },
      { label: "Latency", value: "<100ms" },
      { label: "Consumers", value: "24" },
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export type Section = "projects" | "contact"
