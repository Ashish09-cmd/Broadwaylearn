import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const DataAndAiCourses = () => {
  return (
    <section className='mb-12'>
        <div className="container bg-blue-700 p-8 rounded-2xl">
           <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
               <div className='col-span-3'>
                 <div className='flex flex-col gap-6'>
                    <div>
                         <h2>Data and AI Courses for you.</h2>
                         <p>Discover Data and AI courses that offer practical skills to prepare you for the future of technology.</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link href="">View Data and AI Courses</Link> <span><Icon icon="solar:arrow-right-linear"></Icon></span>
                    </div>
                 </div>
               </div>
               <div className='col-span-9'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>

                  </div>
               </div>
           </div>
        </div>
    </section>
  )
}

export default DataAndAiCourses