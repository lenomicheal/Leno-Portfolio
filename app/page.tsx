import { Button } from '@/components/ui/button'
import React from 'react'
import TechStackMarquee from '@/components/sections/TechStackMarquee'
import About from '@/components/sections/about'
import Navbar from '@/components/layout/navbar'
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'

const page = () => {
  return (
    // <div className='text-3xl bg-red-700 h-screen w-screen flex justify-center items-center'> 
    //   <Button variant="secondary" size="lg">Fuck You Bitch</Button>
    // </div>
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
