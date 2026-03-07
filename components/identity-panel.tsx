"use client";

import { useState, useEffect } from "react";
import type { Section } from "@/lib/data";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const emailParts = ["addyjaime", "gmail.com"];
const email = `${emailParts[0]}@${emailParts[1]}`;

const socials = [
  {
    href: "https://github.com/AddyJaime",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/addyjaime",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: `mailto:${email}`,
    icon: Mail,
    label: "Email",
  },
];

interface IdentityPanelProps {
  onNavigate: (section: Section) => void;
}

export function IdentityPanel({ onNavigate }: IdentityPanelProps) {
  const [active, setActive] = useState<Section>("projects");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.id as Section);
        }
      },
      { threshold: 0.5 },
    );

    const elements: HTMLElement[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNav = (section: Section) => {
    setActive(section);
    onNavigate(section);
  };

  return (
    <div className="flex h-full flex-col justify-between border-r border-border/50 px-8 py-12 lg:px-12 lg:py-16">
      {/* Top: Identity */}
      <div>
        <div className="space-y-8">
          {/* STATUS */}
          <div className="flex items-center gap-2 text-xs tracking-widest text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for opportunities
          </div>

          {/* NAME */}
          <h1 className="text-5xl font-bold tracking-tight text-sidebar-foreground text-glow">
            Addy Jaime
          </h1>

          {/* ROLE */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">
              DevOps Engineer
            </h2>

            <p className="text-lg text-primary/80">Backend & Infrastructure</p>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Backend and DevOps engineer focused on building scalable systems,
            automating infrastructure, and making applications run smoothly in
            production.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? "page" : undefined}
                className="group flex items-center gap-3 py-2 text-left"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground/40 group-hover:w-12 group-hover:bg-muted-foreground"
                  }`}
                />

                <span
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social + version */}
      <div className="flex flex-col gap-6">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={
                label !== "Email" ? "noopener noreferrer external" : undefined
              }
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
