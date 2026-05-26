import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { MotionContainer, MotionItem } from "@/components/ui/scroll-motion"

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 bg-[var(--bg-primary)]">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      <MotionContainer className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <MotionItem  className="space-y-6">

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] font-mono">
              Get to know me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              About Me
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[var(--text-muted)] text-lg">
            Passionate about building scalable web applications using modern technologies.
          </p>

          {/* Paragraphs */}
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Hi, I&apos;m <span className="text-[var(--text-primary)] font-semibold">Leno Micheal</span>, a Full Stack Developer
            with hands-on experience in building modern web applications using React.js and Next.js.
            I enjoy creating scalable and efficient systems with a strong focus on performance.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            During my internship, I worked on real-world projects like admin dashboards,
            payment validation systems, and cloud-based lab platforms using AWS services.
            I love solving complex problems and building impactful solutions.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            I'm always exploring new technologies and improving my skills to build
            better and more efficient applications.
          </p>

        </MotionItem >

        {/* RIGHT SIDE (CARDS) */}
        <MotionItem  className="space-y-6">

          {/* Education Card 1 */}
          <Card className="glow-card accent-border-left bg-[var(--bg-secondary)] border border-[var(--glass-border)] backdrop-blur-lg rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-surface)]">
                  <GraduationCap className="text-[var(--accent-primary)] w-5 h-5" />
                </div>
                <h3 className="text-[var(--text-primary)] text-lg font-semibold">
                  Bachelor of Computer Applications
                </h3>
              </div>

              <p className="text-[var(--accent-hover)] font-medium">The American College</p>

              <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[var(--accent-primary)]" /> Aug 2022 - May 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[var(--accent-primary)]" /> Madurai, India
                </span>
              </div>

            </CardContent>
          </Card>

          {/* Education Card 2 */}
          <Card className="glow-card accent-border-left bg-[var(--bg-secondary)] border border-[var(--glass-border)] backdrop-blur-lg rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-surface)]">
                  <GraduationCap className="text-[var(--accent-primary)] w-5 h-5" />
                </div>
                <h3 className="text-[var(--text-primary)] text-lg font-semibold">
                  Full Stack Development (MERN)
                </h3>
              </div>

              <p className="text-[var(--accent-hover)] font-medium">NxtWave Technologies</p>

              <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[var(--accent-primary)]" /> Oct 2023 - Dec 2025
                </span>
              </div>

            </CardContent>
          </Card>

        </MotionItem>
    </MotionContainer>
    </section>
  )
}
