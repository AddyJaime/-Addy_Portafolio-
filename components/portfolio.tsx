"use client"

import { useRef } from "react"
import { IdentityPanel } from "@/components/identity-panel"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import type { Section } from "@/lib/data"

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (section: Section) => {
    const el = document.getElementById(section)
    if (el && scrollRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="flex h-screen bg-background bg-dot-grid">
      {/* Left sticky identity panel */}
      <aside className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 h-screen sticky top-0">
        <IdentityPanel onNavigate={scrollTo} />
      </aside>

      {/* Right scrollable content */}
      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto custom-scrollbar"
      >
        {/* Mobile identity */}
        <div className="lg:hidden">
          <IdentityPanel onNavigate={scrollTo} />
        </div>

        <div className="flex flex-col">
          <section id="projects" className="min-h-screen px-6 py-16 lg:px-16 lg:py-24">
            <ProjectsSection />
          </section>
          <section id="contact" className="min-h-screen px-6 py-16 lg:px-16 lg:py-24">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  )
}
