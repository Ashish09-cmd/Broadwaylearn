import { Icon } from '@iconify/react'
import React from 'react'

const CallForTeacher = () => {
  return (
       <section className='bg-white'>
         <div className="container section-padding">
            <div className='max-w-279 h-78 mx-auto'>
               <div className='relative'>
                     <div className='absolute left-0 top-0 flex flex-col gap-2'>
                         <div className='w-26 h-29  rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1752406639.png" alt="" className='h-full w-full object-cover' />
                         </div>
                         <div className='w-26 h-[139px] rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750420936.jpg" alt="" className='h-full object-cover' />
                         </div>
                     </div>
                     <div className='absolute left-[113px]  flex flex-col gap-2'>
                         <div className='h-[76px] w-[87.71px] rounded-lg  relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750761005.jpg" alt="" className='w-full w-full object-cover' />
                         </div>
                         <div className='w-[87.71px] h-[118px] rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750420994.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                     <div className='absolute left-[210px]  flex flex-col gap-2'>
                         <div className='h-[82.72px] w-[94.54px]  rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750750022.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                    <div className='absolute left-[314px]  flex flex-col gap-2'>
                         <div className='h-[112.62px] w-[128.71px]  rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1752146958.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                    <div className='absolute left-[453px]  flex flex-col gap-2'>
                         <div className='h-[89.7px] w-[102.51px]  rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1752406590.png" alt="" className='h-full w-full object-cover' />
                         </div>
                    </div>

                     <div className='absolute right-[210px]  flex flex-col gap-2'>
                         <div className='h-[82.72px] w-[94.54px]  overflow-hidden rounded-lg relative'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1752144669.png" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                    <div className='absolute right-[314px]  flex flex-col gap-2'>
                         <div className='h-[112.62px] w-[128.71px] overflow-hidden relative  rounded-lg'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1752228119.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                    <div className='absolute right-[453px]  flex flex-col gap-2'>
                         <div className='h-[82.72px] w-[94.51px]  rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750420964.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                    </div>

                    <div className='absolute right-[113px]  flex flex-col gap-2'>
                         <div className='h-[76px] w-[87.71px] rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1751958690.png" alt="" className='h-full w-full object-cover' />
                         </div>
                         <div className='w-[87.71px] h-[118px] rounded-lg overflow-hidden relative'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1751958659.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>

                   <div className='absolute right-0 top-0 flex flex-col gap-2'>
                         <div className='w-26 h-29  rounded-lg overflow-hidden relative'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1751958570.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                         <div className='w-26 h-[139px] rounded-lg relative overflow-hidden'>
                            <img src="https://broadwayinfosys.com/uploads/team-members/1750421019.jpg" alt="" className='h-full w-full object-cover' />
                         </div>
                     </div>
                </div>
               <div className='flex flex-row items-end pt-36 justify-center text-center'>
                 
                   <div className='max-w-170 mx-auto'>
                       <h2 className='text-2xl font-semibold text-text-heading font-geologica mb-4'>Join the Mission to Elevate Learning</h2>
                       <p className='text-sm font-regular text-text-subtext font-googleSansFlex mb-4'>Become part of a supportive network of educators committed to helping students grow, succeed, and discover their full potential.</p>
                       <div className='px-6 py-4 rounded-lg bg-primary cursor-pointer inline-block'>
                          <a href="#" className='text-white text-sm font-medium flex items-center gap-2'>Start Teaching With Us <Icon icon="material-symbols:arrow-right-alt" className='text-lg'></Icon></a>
                       </div>
                   </div>
               </div>
            </div>
         </div>
       </section>
  )
}

export default CallForTeacher