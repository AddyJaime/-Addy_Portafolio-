"use client";

import { projects } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-12">
      {/* Section header */}
      <div>
        <p className="text-[16px] font-mono uppercase tracking-[0.2em] text-primary animate-slide-up opacity-0">
          Projects
        </p>
        <p className="mt-2 max-w-lg text-lg leading-relaxed text-sidebar-foreground animate-slide-up opacity-0 stagger-2">
          Production systems and infrastructure I have designed, built, and
          scaled.
        </p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`group relative rounded-lg border border-border/60 bg-card/50 p-6 lg:p-8 transition-all duration-300 glow-border-hover animate-slide-up opacity-0 stagger-${i + 2}`}
          >
            {/* Top row: title + links */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-card-foreground tracking-tight font-mono group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label={`${project.title} live demo`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Metrics row */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col rounded-md border border-border/60 bg-secondary/50 px-4 py-2.5"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </span>
                  <span className="mt-0.5 text-sm font-semibold font-mono text-primary">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stack pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[11px] font-mono font-medium text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Subtle corner accent */}
            <div className="pointer-events-none absolute top-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute top-0 right-0 h-px w-8 bg-primary/30" />
              <div className="absolute top-0 right-0 h-8 w-px bg-primary/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
