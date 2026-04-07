"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg">
            Passionate about building scalable web applications using modern technologies.
          </p>

          {/* Paragraphs */}
          <p className="text-gray-300 leading-relaxed">
            Hi, I&apos;m <span className="text-white font-semibold">Leno Micheal</span>, a Full Stack Developer
            with hands-on experience in building modern web applications using React.js and Next.js.
            I enjoy creating scalable and efficient systems with a strong focus on performance.
          </p>

          <p className="text-gray-300 leading-relaxed">
            During my internship, I worked on real-world projects like admin dashboards,
            payment validation systems, and cloud-based lab platforms using AWS services.
            I love solving complex problems and building impactful solutions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I’m always exploring new technologies and improving my skills to build
            better and more efficient applications.
          </p>

        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div className="space-y-6">

          {/* Education Card 1 */}
          <Card className="bg-white/5 border border-white/10 backdrop-blur-lg">
            <CardContent className="p-6 space-y-3">

              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <h3 className="text-white text-lg font-semibold">
                  Bachelor of Computer Applications
                </h3>
              </div>

              <p className="text-cyan-400">The American College</p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Aug 2022 - May 2025
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Madurai, India
                </span>
              </div>

            </CardContent>
          </Card>

          {/* Education Card 2 */}
          <Card className="bg-white/5 border border-white/10 backdrop-blur-lg">
            <CardContent className="p-6 space-y-3">

              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <h3 className="text-white text-lg font-semibold">
                  Full Stack Development (MERN)
                </h3>
              </div>

              <p className="text-cyan-400">NxtWave Technologies</p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Oct 2023 - Dec 2025
                </span>
              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
