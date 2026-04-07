"use client"

import { useState } from "react"
import { projectsData } from "@/data/projectsData"
import ProjectCard from "../ui/ProjectCard"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 3)

  return (
    <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* View More Button (ONLY if > 3 projects) */}
      {projectsData.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            {showAll ? "Show Less" : "View More Projects"}
          </button>
        </div>
      )}
    </section>
  )
}
