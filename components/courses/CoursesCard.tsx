import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'



const CoursesCard = () => {
  return (
    <Link  href={'/'}>
        <div className='p-4 rounded-lg bg-white border border-light-border '>
            <div className='flex flex-col gap-3'>
                 <div className='relative overflow-hidden h-38 rounded-md'>
                    <div className='card-overlay rounded-md '></div>
                    <img src="https://broadwayinfosys.com/uploads/courses/68281733727891.jpg" className='h-full w-full object-cover' alt="" loading='lazy'/>
                    <p className='flex items-center gap-1 text-vxs z-1 text-blue-50 absolute left-2 bottom-2'><Icon icon="material-symbols:nest-clock-farsight-analog-outline"></Icon><time>2 hr</time></p>
                    <div className='flex items-center gap-1 text-vxs font-medium  z-1 text-blue-50 absolute right-2 bottom-2'><Icon icon="streamline-block:other-ui-graph-2"></Icon><span>Advanced</span></div>
                 </div>
                 <div>
                      <h4 className='mb-1 text-lg font-semibold text-text-heading line-height-lg line-clamp-3 font-geologica'>Computer Networking Fundamentals </h4>
                      <h6 className='mb-2 text-vxs font-regular text-[#343A40A3]'>By Prajana Joshi</h6>
                      <div className='mb-4 inline-block px-1.5 rounded-sm py-0.5 bg-batch-fill text-[10px] text-primary font-regular'><span>Highly Rated</span></div>
                      <p className='text-md font-semibold text-text-subtext '>NPR 2,5000</p>
                 </div>
            </div>
        </div>
    </Link>
  )
}

export default CoursesCard