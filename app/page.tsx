import React from "react";
import { Hero } from "./frontend/home/partials/Hero";
import TrendingCourses from "./frontend/home/partials/TrendingCourses";
import DataAndAiCourses from "./frontend/home/partials/DataAndAiCourses";
import Skills from "./frontend/home/partials/Skills";
import OurProgram from "./frontend/home/partials/OurProgram";
import CallForTeacher from "./frontend/home/partials/CallForTeacher";
import EnrollNow from "./frontend/home/partials/EnrollNow";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingCourses />
      <DataAndAiCourses/>
      <Skills/>
      <OurProgram/>
      <CallForTeacher/>
      <EnrollNow/>
    </>
  );
};

export default HomePage;
