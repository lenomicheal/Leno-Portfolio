import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import React from 'react'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import TechStackMarquee from '@/components/sections/TechStackMarquee'

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
