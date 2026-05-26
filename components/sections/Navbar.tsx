"use client"

import React, { useState, MouseEvent } from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink, Github, Menu, X } from "lucide-react"
import { projectsData } from "@/data/projectsData"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ui/ThemeToggle"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
]

const getProjectSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 96

      if (prefersReducedMotion) {
        window.scrollTo({ top: targetTop })
      } else {
        const startTop = window.scrollY
        const distance = targetTop - startTop
        const duration = 750
        const startTime = performance.now()

        const easeInOutCubic = (progress: number) =>
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2

        const scrollStep = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          window.scrollTo(0, startTop + distance * easeInOutCubic(progress))

          if (progress < 1) {
            window.requestAnimationFrame(scrollStep)
          }
        }

        window.requestAnimationFrame(scrollStep)
      }

      window.history.replaceState(null, "", href)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 md:gap-6 rounded-full border border-[var(--nav-border)] px-4 md:px-6 py-2.5 backdrop-blur-xl shadow-lg bg-[var(--nav-bg)] transition-colors duration-300">

        {/* Logo */}
        <Link
          href="#home"
          className="font-mono text-base font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity"
          onClick={(e) => handleSmoothScroll(e, "#home")}
        >
          {"<Leno/>"}
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="relative text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full"
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
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
            >
              Projects
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </a>

            {/* Dropdown Menu */}
            <div className={cn(
              "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
              isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            )}>
              <div className="w-64 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] p-2 shadow-xl backdrop-blur-lg">
                <div className="grid gap-1">
                  {projectsData.map((project) => (
                    <div key={project.title} className="group/item flex flex-col rounded-lg p-2.5 hover:bg-[var(--accent-surface)] transition-colors duration-200">
                      <a
                        href={`#${getProjectSlug(project.title)}`}
                        onClick={(e) => {
                          handleSmoothScroll(e, `#${getProjectSlug(project.title)}`)
                          setIsDropdownOpen(false)
                        }}
                        className="text-xs font-semibold text-[var(--text-primary)] mb-1 hover:text-[var(--accent-primary)] transition-colors"
                      >
                        {project.title}
                      </a>
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" /> Live
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          <Github className="w-3 h-3" /> Code
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-[var(--glass-border)] mt-1 pt-1">
                    <Link
                      href="#projects"
                      onClick={(e) => handleSmoothScroll(e, "#projects")}
                      className="block text-center text-[10px] font-bold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] py-1 transition-colors"
                    >
                      View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Theme Toggle + Resume + Mobile Menu */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <ThemeToggle />

          {/* Resume Button - Desktop */}
          <Link
            href="https://drive.google.com/file/d/1auFC-5fqXNfOKUc1Ul27KR_Rz4fc4Dyd/view?usp=sharing"
            target="_blank"
            className="hidden md:inline-flex rounded-full bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] px-5 py-1.5 text-xs font-bold text-white shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_6px_24px_var(--accent-glow)] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Resume
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] p-4 shadow-xl backdrop-blur-lg transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
      )}>
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-surface)] px-3 py-2 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-surface)] px-3 py-2 rounded-lg transition-colors"
          >
            Projects
          </Link>
          <hr className="border-[var(--glass-border)]" />
          <Link
            href="/Leno Micheal Resume.pdf"
            download
            className="text-center rounded-xl bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] px-5 py-2 text-sm font-bold text-white"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
