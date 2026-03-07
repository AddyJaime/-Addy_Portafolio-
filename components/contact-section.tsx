"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, ArrowUpRight, Check, Copy } from "lucide-react"

const emailParts = ["addyjaime", "gmail.com"]
const email = `${emailParts[0]}@${emailParts[1]}`

const links = [
  {
    label: "GitHub",
    href: "https://github.com/AddyJaime",
    handle: "@addyjaime",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/addyjaime",
    handle: "/in/addyjaime",
    icon: Linkedin,
  },
] as const

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2500)
    } catch (error) {
      console.error("Failed to copy email", error)
    }
  }

  return (
    <div className="flex flex-col gap-12">

      {/* Section header */}
      <div>
        <p className="text-[16px] font-mono uppercase tracking-[0.2em] text-primary">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Get In Touch
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Available for backend, DevOps, and infrastructure roles.
        </p>
      </div>

      {/* Contact cards */}
      <div className="flex flex-col gap-4 max-w-lg">

        {/* Email card */}
        <div className="group rounded-lg border border-border/60 bg-card/50 p-5 transition-all duration-300 glow-border-hover">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </p>

              <p className="text-sm font-mono text-card-foreground">
                {email.replace("@", " [at] ")}
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>

          </div>

        </div>

        {/* Social links */}
        {links.map(({ label, href, handle, icon: Icon }) => (

          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`Visit ${label}`}
            className="group rounded-lg border border-border/60 bg-card/50 p-5 transition-all duration-300 glow-border-hover"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>

                <p className="text-sm font-mono text-card-foreground group-hover:text-primary transition-colors">
                  {handle}
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            </div>

          </a>

        ))}

      </div>

    </div>
  )
}