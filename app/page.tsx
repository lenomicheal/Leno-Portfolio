import { Button } from '@/components/ui/button'
import React from 'react'
import TechStackMarquee from '@/components/sections/TechStackMarquee'
import About from '@/components/sections/About'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'

const page = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <About/>
    <Experience/>
    <TechStackMarquee />
    <Projects />
   </>
  )
}

export default page
