"use client"

import React from "react"
import {
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaGitAlt, FaGithub
} from "react-icons/fa"
import {
  SiNextdotjs, SiTailwindcss, SiPostman, SiVercel, SiNetlify, SiRailway,
  SiAnthropic, SiOpenai, SiSqlite,
} from "react-icons/si"
type Skill = {
  name: string
  icon: React.ReactNode
}
const languages: Skill[] = [
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "SQL", icon: <SiSqlite color="#003B57" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
]

const tools: Skill[] = [
  { name: "AWS Lambda", icon: <FaAws color="#FF9900" /> },
  { name: "DynamoDB", icon: <FaAws color="#FF9900" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "Claude", icon: <SiAnthropic color="#D97757" /> },
  { name: "OpenAI", icon: <SiOpenai color="#412991" /> },
]
