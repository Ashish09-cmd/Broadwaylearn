import { SkillsCoursData } from '@/app/api/skills/Data'
import CoursesCard from '@/components/courses/CoursesCard'
import React from 'react'

const Skills = () => {
  return (
        <section className='bg-white'>
        <div className="container section-padding">
          <div className='flex flex-col gap-4.5'>
            <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-semibold text-text-heading font-geologica line-height-2xl '>Skills that matters the most</h2>
            <p className='text-sm font-regular text-text-subtext '>Empowering minds with skills for tomorrow's AI-driven world</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
               {SkillsCoursData.slice(0,4).map((course)=>(
                <CoursesCard course={course} key={course.id}/>
               ))}
            </div>
          </div>
        </div>
     </section>
  )
}

export default Skills