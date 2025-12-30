import { Icon } from '@iconify/react'
import React from 'react'

const EnrollNow = () => {
  return (
       <section className='my-6.5'>
           <div className="max-w-338.5 mx-auto bg-light-blue py-12 rounded-2xl px-10">
               <div className='flex items-center justify-between flex-wrap'>
                  <div className='max-w-266'>
                     <p className='text-xl font-regular text-text-heading line-height-xl'>Start your journey with us today and unlock the essential skills, practical knowledge, and confidence you need to shape a future-ready career.</p>
                  </div>
                  <div className='flex items-center gap-2 px-6 py-4 rounded-lg bg-primary text-white'>
                    <a href="">Enroll Now</a>
                    <span><Icon icon="material-symbols:arrow-right-alt"></Icon></span>
                  </div>
               </div>
           </div>
       </section>
  )
}

export default EnrollNow