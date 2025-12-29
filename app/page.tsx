import { Hero } from "@/components/Hero";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="h-screen w-full ">
        <h1 className="py-12">This is Home Page</h1>
        <div className="w-100 h-100 rounded-full bg-blue-500 p-20">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
