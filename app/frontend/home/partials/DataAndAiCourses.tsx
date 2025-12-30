import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const DataandAiData=[
    {
      id:1, 
      title:"Machine Learning",
      description:"Understand key algorithms and learn how computers use data to make smart predictions",
      image:"./assets/home/DataandAI1.png",
    },
    {
      id:2, 
      title:"Big Data",
      description:"Learn tools and methods to manage, process, and analyze very large datasets effectively.",
      image:"./assets/home/DataandAI2.png",
    },
    {
      id:3, 
      title:"Deep Learning",
      description:"Explore neural networks and learn how deep models power modern AI applications.",
      image:"./assets/home/DataandAI3.png",
    }
]

const DataAndAiCourses = () => {
  return (
    <section>
        <div className="container bg-blue-700 p-8 rounded-2xl">
           <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
               <div className='col-span-3'>
                 <div className='flex flex-col gap-6'>
                    <div>
                         <h2 className='text-2xl font-bold text-white font-geologica line-height-2xl mb-2'>Data and AI Courses for you.</h2>
                         <p className='text-sm font-regular text-white line-height-sm '>Discover Data and AI courses that offer practical skills to prepare you for the future of technology.</p>
                    </div>
                    <div className='flex items-center gap-1 text-sm text-white '>
                        <Link href="" className='text-sm font-semibold text-white '>View Data and AI Courses</Link> <span><Icon icon="mingcute:arrow-right-line"></Icon></span>
                    </div>
                 </div>
               </div>
               <div className='col-span-9'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {DataandAiData.map((item)=>(
                     <div className='bg-white p-6 rounded-2xl flex flex-col gap-6' key={item.id}>
                         <div>
                            <div className='h-10 mb-2 relative'>
                              <img src={item.image} className='h-full w-auto'/>
                            </div>
                            <h3 className='mb-2 text-lg font-bold text-card-title font-geologica'>{item.title}</h3>
                            <p className='text-xs font-regular text-text-alternate  line-height-xs'>{item.description}</p>
                         </div>
                         <div>
                             <Link href="" className='text-xs font-regular text-primary'>Explore the course</Link>
                         </div>
                       </div>
                    ))}
                  </div>
               </div>
           </div>
        </div>
    </section>
  )
}

export default DataAndAiCourses