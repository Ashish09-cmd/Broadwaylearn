import { CoursesData } from '@/app/api/courses/data'
import CoursesCard from '@/components/courses/CoursesCard'
import React from 'react'

const TrendingCourses = () => {
  return (
    <>
     <section className='bg-white'>
        <div className="container section-padding">
          <div className='flex flex-col gap-4.5'>
            <h2 className='text-2xl font-semibold text-text-heading font-geologica line-height-2xl '>Trending Courses</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
               {CoursesData.slice(0,4).map((course)=>(
                <CoursesCard course={course} key={course.id}/>
               ))}
            </div>
          </div>
        </div>
     </section>
    </>
  )
}   

export default TrendingCourses