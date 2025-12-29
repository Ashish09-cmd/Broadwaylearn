import React from "react";
import { Hero } from "./frontend/home/partials/Hero";
import TrendingCourses from "./frontend/home/partials/TrendingCourses";
import DataAndAiCourses from "./frontend/home/partials/DataAndAiCourses";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingCourses />
      <DataAndAiCourses/>
    </>
  );
};

export default HomePage;
