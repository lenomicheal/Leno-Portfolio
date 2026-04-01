"use client"

import React from "react"
import { 
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaGitAlt, FaGithub 
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTailwindcss, SiPostman, SiVercel, SiNetlify, SiRailway, 
  SiAnthropic, SiOpenai, SiMysql  
} from "react-icons/si"

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

function MarqueeRow({ items, direction, speed }: { items: Skill[], direction: "left" | "right", speed: number }) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="marquee-row-wrapper group relative flex overflow-hidden py-4">
      {/* Edge Fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[15%] bg-gradient-to-r from-[#FAFAFB] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[15%] bg-gradient-to-l from-[#FAFAFB] to-transparent" />

      <div
        className="marquee-container flex shrink-0 items-center gap-10 whitespace-nowrap px-10"
        style={{ 
          animation: `${animationName} ${speed}s linear infinite` 
        }}
      >
        {/* Render 4 times for a truly infinite loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="skill-card-transition group/card flex items-center gap-5 bg-white px-8 py-5 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-400/40 active:scale-95"
          >
            <div className="text-4xl flex items-center justify-center transition-transform group-hover/card:scale-110 duration-500">
              {item.icon}
            </div>
            <div className="flex flex-col">
              {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                Skill
              </span> */}
              <span className="text-lg font-bold text-slate-800 leading-none tracking-tight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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

