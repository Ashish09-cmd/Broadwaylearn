"use client"
import { SkillsCoursData } from '@/app/api/skills/Data'
import CoursesCard from '@/components/courses/CoursesCard'
import { NextArrow, PrevArrow } from '@/components/ui/SlickArrow';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsClient = () => {
 
    const settings = {
      dots: false,
      arrow: true,
      infinite: false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      accessibility: true,
      pauseOnFocus: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
  

  return (
     <section className='bg-white'>
        <div className="container section-padding">
          <div className='flex flex-col gap-4.5'>
            <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-semibold text-text-heading font-geologica line-height-2xl '>Skills that matters the most</h2>
            <p className='text-sm font-regular text-text-subtext '>Empowering minds with skills for tomorrow's AI-driven world</p>
            </div>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'> */}
              <Slider {...settings}>
               {SkillsCoursData.map((course)=>(
                <CoursesCard course={course} key={course.id}/>
               ))}
               </Slider>
            {/* </div> */}
          </div>
        </div>
     </section>
  )
}

export default SkillsClient