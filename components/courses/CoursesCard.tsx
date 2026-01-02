import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from '../ui/Modal'

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

   return (
    <>
      <div className='p-4 rounded-lg  border cursor-pointer border-light-border h-91.5'>
            <div className='flex flex-col gap-3'>
                 <button className='relative border-none outline-none overflow-hidden h-38 rounded-md' onClick={handleImageClick}>
                    <div className='card-overlay rounded-md '>
                    </div>
                    <img src={course.images} className='h-full w-full object-cover' alt="" loading='lazy'/>
                    <p className='flex items-center gap-1 text-vxs z-1 text-blue-50 absolute left-2 bottom-2'><Icon icon="material-symbols:nest-clock-farsight-analog-outline"></Icon><time>{course.duration}</time></p>
                    <div className='flex items-center gap-1 text-vxs font-medium  z-1 text-blue-50 absolute right-2 bottom-2'><Icon icon="streamline-block:other-ui-graph-2"></Icon><span>{course.course_type}</span></div>
                 </button>
                 <div>
                      <h3 className='mb-1 text-lg font-semibold text-text-heading line-height-lg line-clamp-3 font-geologica'>{course.title}</h3>
                      <h4 className='mb-2 text-vxs font-regular text-[#343A40A3]'>{course.instructor_name}</h4>
                      <div className='mb-4 inline-block px-1.5 rounded-sm py-0.5 bg-batch-fill text-[10px] text-primary font-regular'><span>{course.rated}</span></div>
                      <p className='text-md font-semibold text-text-subtext '>{course.price}</p>
                 </div>
            </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
            <p className="text-lg mb-2"><strong>Instructor:</strong> {course.instructor_name}</p>
            <p className="text-lg mb-2"><strong>Rated:</strong> {course.rated}</p>
            <p className="text-lg mb-2"><strong>Description:</strong> {course.description}</p>
            <p className="text-lg mb-2"><strong>Price:</strong> {course.price}</p>
            <p className="text-lg mb-4"><strong>Learn Skills:</strong> {/* Add skills here if available */}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add To Cart</button>
        </div>
    </Modal>
    </>
   )
}
