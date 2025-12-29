import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="bg-text-heading ">
          <div className="container section-padding border-b border-darker-border">
            <div className="flex flex-col gap-6">
              <a href="/">
                <img src="./flogo.png" alt="broadwaylearn footer logo" className="h-13.5" loading="eager"/>
              </a>
              <nav>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                <div className="md:col-span-5 ">
                  <p className="text-sm font-regular mb-4 text-gray-300 line-height-sm">
                    IT training company dedicated to delivering practical,
                    industry-focused technology education to build job-ready
                    professionals.
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a
                        href=""
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="social-icon">
                          <Icon icon="typcn:location"></Icon>
                        </div>
                        Shree Ganesh Marg, Subidhanagar, Tinkune, Kathmandu
                        44600, Nepal
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>
                        <Icon
                          icon="entypo:old-phone"
                          className="text-white"
                        ></Icon>
                      </div>
                      <div className="text-sm font-regular text-gray-300 ">
                        <a
                          href="tel:+977-1-4111849"
                          className="text-sm font-regular text-gray-300"
                        >
                          +977-1-4111849
                        </a>
                        <span> / </span>
                        <a
                          href="tel:+4117578"
                          className="text-sm font-regular text-gray-300"
                        >
                          4117578
                        </a>
                        <span> / </span>
                        <a
                          href="tel:+4111583"
                          className="text-sm font-regular text-gray-300"
                        >
                          4111583
                        </a>
                        <span> / </span>
                        <a
                          href="tel:+5912405"
                          className="text-sm font-regular text-gray-300"
                        >
                          5912405
                        </a>
                      </div>
                    </li>
                    <li>
                        <a
                          href="mailto:info@broadwaylearn.com"
                          className="text-sm text-gray-300 font-regular flex items-center gap-2"
                        >
                          <Icon icon="ic:round-email"></Icon>
                          info@broadwaylearn.com
                        </a>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col gap-2">
                      <h6 className="font-geologica text-md font-bold text-white line-height-md">
                        Company
                      </h6>
                      <ul className="flex flex-col gap-2 ">
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Our Services
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Career
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h6 className="font-geologica text-md font-bold text-white line-height-md">
                        For Students
                      </h6>
                      <ul className="flex flex-col gap-2 ">
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Enroll Now
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Offers
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Students Testimonials
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Certificate Verifications
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h6 className="font-geologica text-md font-bold text-white line-height-md">
                        Resources
                      </h6>
                      <ul className="flex flex-col gap-2 ">
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-white font-regular text-sm"
                          >
                            Sitemap
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </nav>
            </div>
          </div>
          <div className="sub-footer">
            <div className="container py-6">
                <p className="text-center text-sm font-regular text-gray-500 ">A product of Broadway Infosys. © 2025 Broadway Learn. All rights reserved.</p>
            </div>
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
