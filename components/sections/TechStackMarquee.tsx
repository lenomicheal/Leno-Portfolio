import React from "react"
import {
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaGitAlt, FaGithub
} from "react-icons/fa"
import {
  SiNextdotjs, SiTailwindcss, SiPostman, SiVercel, SiNetlify, SiRailway,
  SiAnthropic, SiOpenai, SiMysql
} from "react-icons/si"
import MarqueeRow from "../ui/MarqueeRow"
import { MotionContainer, MotionItem } from "@/components/ui/scroll-motion"

type Skill = {
  name: string
  icon: React.ReactNode
}

const languages: Skill[] = [
  { name: "Next.js", icon: <SiNextdotjs className="text-[var(--text-primary)]" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "SQL", icon: <SiMysql color="#003B57" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
]

const tools: Skill[] = [
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub className="text-[var(--text-primary)]" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Vercel", icon: <SiVercel className="text-[var(--text-primary)]" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "AWS Lambda", icon: <FaAws color="#FF9900" /> },
  { name: "AWS S3", icon: <FaAws color="#FF9900" /> },
  { name: "AWS EC2", icon: <FaAws color="#FF9900" /> },
  { name: "AWS DynamoDB", icon: <FaAws color="#FF9900" /> },
]


export default function TechStack() {
  return (
    <MotionContainer
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-24 bg-[var(--bg-primary)]"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      <MotionItem className="max-w-4xl mx-auto text-center mb-20 px-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] font-mono mb-2">
          Technologies I use
        </p>
        <h2 className="text-4xl md:text-5xl font-black gradient-text tracking-tight mb-6">
          Tech Skills
        </h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
          On the way to building modern web applications with a focus on performance, scalability, and user experience.
        </p>
      </MotionItem>

      <MotionItem className="flex flex-col gap-5">
        <MarqueeRow items={languages} direction="right" speed={70} />
        <MarqueeRow items={tools} direction="left" speed={70} />
      </MotionItem>
    </MotionContainer>
  )
}
