"use client"

import { useState } from "react"
import { projectsData } from "@/data/projectsData"
import ProjectCard from "../ui/ProjectCard"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 3)

  return (
    <section id="projects" className="relative scroll-mt-24 max-w-6xl mx-auto px-4 py-24">
      {/* Heading */}
      <div className="text-center mb-12 space-y-2">
        <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] font-mono">
          What I&apos;ve built
        </p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          My Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* View More Button (ONLY if > 3 projects) */}
      {projectsData.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-medium hover:bg-[var(--accent-surface)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 cursor-pointer"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View More Projects <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
