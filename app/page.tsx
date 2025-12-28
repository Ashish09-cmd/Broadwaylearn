import { Hero } from '@/components/Hero'
import React from 'react'

const HomePage = () => {
  return (
    <>
     <Hero/>
     <section className='h-screen w-full bg-emerald-600'>
       <h1 className="py-12">
        This is Home Page
       </h1>
     </section>
    </>
  )
}

export default HomePage