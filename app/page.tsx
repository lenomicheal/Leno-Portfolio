import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/navbar'
import Hero from '@/components/sections/hero'
import React from 'react'
import About from '@/components/sections/about'
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
   </>
  )
}

export default page
