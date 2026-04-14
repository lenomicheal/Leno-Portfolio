"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 min-h-screen flex items-center bg-black from-black via-zinc-900 to-gray-950 text-white"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 relative z-10">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start justify-center space-y-6">

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-cyan-500 bg-clip-text text-transparent">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Leno Micheal
            </span>
          </h1>

          {/* Typing */}
          <div className="text-xl md:text-3xl font-semibold text-gray-300">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
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
          <p className="text-gray-400 max-w-lg leading-relaxed">
            I build scalable, high-performance web applications with a strong focus on
            simplicity, user experience, and end-to-end engineering solutions.{" "}
            <Link
              href="https://www.linkedin.com/in/lenomicheal/"
              target="_blank"
              className="underline hover:text-white transition"
            >
              Connect on LinkedIn
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg transition"
            >
              <a href="/Leno Micheal Resume.pdf" download>
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-black px-6 py-2 rounded-xl text-gray-800"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-100 md:h-96 group">
            
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition" />

            <Image
              src="/images/leno-micheal.jpeg"
              alt="Leno Micheal"
              fill
              className="object-cover rounded-2xl shadow-2xl border border-gray-800"
            />
          </div>
        </div>

      </div>
    </section>
  )
}