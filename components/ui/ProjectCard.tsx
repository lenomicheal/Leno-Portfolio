"use client"

import React from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  stats?: string
  image?: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  stats,
  image,
}: Project) {
  return (
    <div className="group rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] overflow-hidden glow-card transition-all duration-300">
      
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="p-5 space-y-4">
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tag, i) => (
            <span 
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[var(--text-primary)] group-hover:gradient-text transition-colors duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--accent-surface)] text-[var(--accent-primary)] text-sm font-medium">
            {stats}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white text-sm font-semibold hover:shadow-[0_4px_16px_var(--accent-glow)] hover:scale-[1.02] transition-all duration-300"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm font-semibold hover:bg-[var(--accent-surface)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
            >
              <Github size={15} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}