"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* left side*/}
        <div className="flex flex-col items-center md:items-start justify-center space-y-6">

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Leno Micheal 
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Full Stack Developer crafting scalable web applications with a focus on simplicity,
            performance, and end-to-end solutions.{" "}
            <Link
              href="https://www.linkedin.com/in/lenomicheal/"
              target="_blank"
              className="underline hover:text-foreground"
            >
              Let&apos;s connect on LinkedIn
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button asChild>
              <a href="/Leno Micheal Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

        </div>

        {/* right side*/}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-100 md:h-96">
            <Image
              src="/images/leno-micheal.jpeg"
              alt="Leno Micheal"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
