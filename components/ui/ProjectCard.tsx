"use client"

import React from "react"
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
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      
      {/* Image */}
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5 space-y-4">
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tag, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1 rounded-md bg-gray-700 text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm">
            {stats}
          </div>
        )}

        

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium hover:opacity-90"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}