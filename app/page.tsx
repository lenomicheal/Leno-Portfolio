import { Button } from '@/components/ui/button'
import React from 'react'
import TechStackMarquee from '@/components/sections/TechStackMarquee'
import About from '@/components/sections/About'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'

const page = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <About/>
    <Experience/>
    <TechStackMarquee />
   </>
  )
}

export default page
