"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  // change to add available to work
  const [availableForHire, setAvailableForHire] = useState(false)
  return (
    <section
      id="home"
      className="relative scroll-mt-24 min-h-screen flex items-center bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_70%)] animate-glow-pulse" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--accent-primary) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 relative z-10">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start justify-center space-y-6 animate-fade-in-up">

          {/* Badge */}
          {availableForHire && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--accent-surface)] text-xs font-medium text-[var(--accent-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              </span>
              Available for hire
            </div>
          )
          }

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="gradient-text">
              Leno Micheal
            </span>
          </h1>

          {/* Typing */}
          <div className="text-xl md:text-3xl font-semibold text-[var(--text-secondary)]">
            <TypeAnimation
              sequence={[
                "Junior Web Developer",
                2000,
                "Associate Software Engineer",
                2000,
                "Building Scalable Apps",
                2000,
                "Clean & Performant Code",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-[var(--text-muted)] max-w-lg leading-relaxed text-base">
            I build scalable, high-performance web applications with a strong focus on
            simplicity, user experience, and end-to-end engineering solutions.{" "}
            <Link
              href="https://www.linkedin.com/in/lenomicheal/"
              target="_blank"
              className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] underline underline-offset-4 decoration-[var(--accent-primary)]/30 hover:decoration-[var(--accent-hover)] transition-colors"
            >
              Connect on LinkedIn
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white px-6 py-2.5 rounded-xl shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_8px_32px_var(--accent-glow)] hover:scale-105 transition-all duration-300 font-semibold border-0"
            >
              <a href="/Leno Micheal Resume.pdf" download className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[var(--glass-border)] text-[var(--text-secondary)] hover:bg-[var(--accent-surface)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] px-6 py-2.5 rounded-xl transition-all duration-300 font-semibold"
            >
              <a href="#projects" className="flex items-center gap-2">
                <ArrowDown className="w-4 h-4" />
                View Projects
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center animate-fade-in-up delay-200" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-72 h-72 md:w-[400px] md:h-96 group">

            {/* Glow ring */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <Image
              src="/images/leno-micheal.jpeg"
              alt="Leno Micheal"
              fill
              sizes="(max-width: 768px) 15rem, 25rem"
              priority
              className="object-cover rounded-2xl shadow-2xl border border-[var(--glass-border)]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}