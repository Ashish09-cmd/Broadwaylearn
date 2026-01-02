"use client";
import { CoursesData } from "@/app/api/courses/data";
import CoursesCard from "@/components/courses/CoursesCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@/components/ui/SlickArrow";

const TrendingCoursesClient = () => {
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
    <>
      <section className="bg-white">
        <div className="container section-padding">
          <div className="flex flex-col gap-4.5">
            <h2 className="text-2xl font-semibold text-text-heading font-geologica line-height-2xl ">
              Trending Courses
            </h2>
              <Slider {...settings}>
              {CoursesData.map((course)=>(
                <CoursesCard course={course} key={course.id}/>
               ))}
              </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCoursesClient;
