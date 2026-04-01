"use client"

import React from "react"
import { 
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaGitAlt, FaGithub 
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTailwindcss, SiPostman, SiVercel, SiNetlify, SiRailway, 
  SiAnthropic, SiOpenai, SiMysql  
} from "react-icons/si"
import MarqueeRow from "../ui/MarqueeRow"

type Skill = {
  name: string
  icon: React.ReactNode
}

const languages: Skill[] = [
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "SQL", icon: <SiMysql  color="#003B57" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
]

const tools: Skill[] = [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub className="text-slate-800" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "AWS Lambda", icon: <FaAws color="#FF9900" /> },
    { name: "AWS S3", icon: <FaAws color="#FF9900" /> },
    { name: "AWS EC2", icon: <FaAws color="#FF9900" /> },
  { name: "AWS DynamoDB", icon: <FaAws color="#FF9900" /> },
//   { name: "Claude", icon: <SiAnthropic color="#D97757" /> },
//   { name: "OpenAI", icon: <SiOpenai color="#412991" /> },
]


export default function TechStack() {
  return (
    <section className="bg-[#FAFAFB] py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-20 px-6">
        <h3 className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-4">
          Capabilities
        </h3>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
          Tech Skills
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          I specialize in building modern web applications with a focus on performance, scalability, and user experience.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={languages} direction="right" speed={70} />
        <MarqueeRow items={tools} direction="left" speed={70} />
      </div>
    </section>
  )
}

