"use client"

import React, { useState, MouseEvent } from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink, Github } from "lucide-react"
import { projectsData } from "@/data/projectsData"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
]

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", href)
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full border border-white/20 px-6 py-3 backdrop-blur-xl shadow-2xl bg-transparent">
        
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-white font-bold tracking-tight hover:text-blue-400 transition-colors"
          onClick={(e) => handleSmoothScroll(e, "#home")}
        >
          {"<Leno/>"}
        </Link>

        {/* Static Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Projects Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Projects
              <ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            <div className={cn(
              "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
              isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            )}>
              <div className="w-64 rounded-2xl border border-white/10 bg-zinc-900/95 p-2 shadow-xl backdrop-blur-lg">
                <div className="grid gap-1">
                  {projectsData.map((project) => (
                    <div key={project.title} className="group/item flex flex-col rounded-lg p-2 hover:bg-white/5 transition-colors">
                      <span className="text-xs font-semibold text-white mb-1">{project.title}</span>
                      <div className="flex gap-3">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-blue-400"
                        >
                          <ExternalLink className="w-3 h-3" /> Live
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white"
                        >
                          <Github className="w-3 h-3" /> Code
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-white/5 mt-1 pt-1">
                    <Link 
                      href="#projects" 
                      onClick={(e) => handleSmoothScroll(e, "#projects")}
                      className="block text-center text-[10px] font-bold text-blue-400 hover:text-blue-300 py-1"
                    >
                      View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Button */}
        <Link
          href="/Leno Micheal Resume.pdf"
          download
          className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-blue-500 transition-all active:scale-95"
        >
          Resume
        </Link>
      </div>
    </nav>
  )
}