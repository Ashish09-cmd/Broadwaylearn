import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export interface ICourseCard{
    id:number;
    title:string;
    slug:string;
    images:string;
    duration:string;
    description:string;
    course_type:string;
    rated:string;
    instructor_name:string;
    price:string;
}

export default function CoursesCard({
    course
}: Readonly<{course : ICourseCard}>){
   return (
    <>
      <Link  href={'/'} className='p-4 rounded-lg bg-white border cursor-pointer border-light-border '>
        <div>
            <div className='flex flex-col gap-3'>
                 <div className='relative overflow-hidden h-38 rounded-md'>
                    <div className='card-overlay rounded-md '>
                    </div>
                    {/* <div className='absolute z-2 flex items-center justify-center h-full w-full'>
                      <h6 className='text-white'>Quick view</h6>
                    </div> */}
                    <img src={course.images} className='h-full w-full object-cover' alt="" loading='lazy'/>
                    <p className='flex items-center gap-1 text-vxs z-1 text-blue-50 absolute left-2 bottom-2'><Icon icon="material-symbols:nest-clock-farsight-analog-outline"></Icon><time>{course.duration}</time></p>
                    <div className='flex items-center gap-1 text-vxs font-medium  z-1 text-blue-50 absolute right-2 bottom-2'><Icon icon="streamline-block:other-ui-graph-2"></Icon><span>{course.course_type}</span></div>
                 </div>
                 <div>
                      <h3 className='mb-1 text-lg font-semibold text-text-heading line-height-lg line-clamp-3 font-geologica'>{course.title}</h3>
                      <h4 className='mb-2 text-vxs font-regular text-[#343A40A3]'>{course.instructor_name}</h4>
                      <div className='mb-4 inline-block px-1.5 rounded-sm py-0.5 bg-batch-fill text-[10px] text-primary font-regular'><span>{course.rated}</span></div>
                      <p className='text-md font-semibold text-text-subtext '>{course.price}</p>
                 </div>
            </div>
        </div>
    </Link>
    </>
   )
}
