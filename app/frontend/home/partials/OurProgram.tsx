import { Icon } from "@iconify/react";
import React from "react";

const ProgramDataList = [
  {
    id: 1,
    title: "Get unlimited access to 4,000+ of our top courses",
  },
  {
    id: 2,
    title: "Explore a variety of fresh topics",
  },
  {
    id: 3,
    title: "Find the right instructor for you",
  },
];

const OurProgram = () => {
  return (
    <>
      <section className="bg-light-blue">
        <div className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6  items-center">
            <div className="col-span-7">
              <div>
                <h2 className="text-2xl font-semibold text-text-heading font-geologica line-height-2xl mb-4">
                  Get Certified, Get Ahead with Our Programs
                </h2>
                <p className="text-sm font-regular text-text-subtext mb-8">
                  Unlock new career opportunities by gaining in-demand skills
                  through our expert-led certification programs designed to help
                  you grow, stay competitive, and achieve your professional
                  goals.
                </p>
                <ul className="flex flex-col gap-4 mb-8">
                  {ProgramDataList.map((list) => (
                    <li className="flex items-center gap-2 text-sm font-regular text-text-subtext" key={list.id}>
                      <div>
                        <Icon
                          icon="qlementine-icons:check-tick-16"
                          className="text-lg text-text-subtext"
                        ></Icon>
                      </div>
                       {list.title}
                     </li>
                  ))}
                </ul>
                <div className="px-6 py-4 inline-block rounded-lg bg-primary cursor-pointer ">
                  <a href="" className="text-sm font-medium text-white">
                    View courses
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <img src="./assets/home/ourProgram.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProgram;
