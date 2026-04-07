import React from 'react'
import TechStackMarquee from '@/components/sections/TechStackMarquee'
import About from '@/components/sections/About'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

const page = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <About/>
    <Experience/>
    <TechStackMarquee />
    <Projects />
    <Contact/>
   </>
  )
}

export default page
