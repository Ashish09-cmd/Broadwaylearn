"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  return (
    <>
      <header
        className={`hidden lg:block ${
          isSticky ? "sticky-header" : ""
        } border-b border-[#0000001A] `}
      >
        <div className={`container ${isSticky ? "py-5" : "py-5"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <Link href={"/"} className="logo cursor-pointer">
                  <img src="./logo.png" alt=""/>
                </Link>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="relative dropdown-menu ">
                      <button
                        onClick={toggleCoursesDropdown}
                        className="flex items-center gap-1 px-4 py-3 text-sm font-medium font-googleSansFlex text-text-subtext cursor-pointer"
                      >
                        Explore
                        <Icon
                          icon="meteor-icons:angle-down"
                          className="text-text-subtext"
                        ></Icon>
                      </button>
                      <div className="p-6 dropdowpn-megamenu invisible bg-white shadow-xl border border-gray-border absolute top-20 w-200 z-30 -left-40">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                          <div>
                            <h5 className="text-md font-semibold text-gray-text-title mb-2 font-poppins">
                              Popular Courses
                            </h5>
                            <ul className="flex flex-col gap-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Dale Carnegie Course
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Develop you leadership
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  High Impact Presentations
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Winning with realtionship
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-md font-semibold text-gray-text-title mb-2 font-poppins">
                              Course Topics
                            </h5>
                            <ul className="flex flex-col gap-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Leadership
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Presentation & Public Speaking
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  People Skills
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Sales
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  customer Services
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Organizational Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Youth & Teen
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-md font-semibold text-gray-text-title mb-2 font-poppins">
                              Course Types
                            </h5>
                            <ul className="flex flex-col gap-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  In Person
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Live Online
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  Online Subscription
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm font-regular text-gray-text-body"
                                >
                                  On Demand
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      action="#"
                      method="GET"
                      className="flex items-center relative rounded-[38px] border-1 border-[#DADADC] px-4 py-3 justify-between"
                    >
                      <input
                        type="text"
                        placeholder="Search for the courses"
                        id="searchInput"
                        className="text-sm border-none  outline-0 w-full"
                      />
                      <div className="searchIcon" id="search-icon"></div>
                      <Icon
                        icon="ri:search-line"
                        className="absolute right-4 text-gray-400 text-lg cursor-pointer"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-sm font-regular font-googleSansFlex text-text-subtext">Teach With Us </p>
              <Link href={'/login'} className="cursor-pointer py-2 px-4 rounded-lg border text-sm font-regular font-googleSansFlex border-primary text-primary ">
                Log In
              </Link>
              <Link href={'/signup'} className="cursor-pointer py-2 px-4 rounded-lg text-sm font-regular font-googleSansFlex bg-primary text-white ">Sign Up</Link >
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`lg:hidden bg-white border-b border-[#DADADC] py-4 px-4 ${
          isSticky ? "sticky-header" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <img src="./logo.png" alt="Logo" className="h-8.5  w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={toggleCoursesDropdown}
                className="flex items-center text-vxs md:text-xs gap-2 px-3 py-2  font-medium bg-blue-500 text-white "
              >
                EXPLORE COURSES
                <Icon icon="flowbite:angle-down-outline"></Icon>
              </button>
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-64">
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Course Categories
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={toggleSubDropdown}
                          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
                        >
                          <span>Technology</span>
                          <Icon
                            icon="flowbite:angle-down-outline"
                            className={`transform transition-transform ${
                              isSubDropdownOpen ? "rotate-180" : ""
                            }`}
                          ></Icon>
                        </button>
                        {isSubDropdownOpen && (
                          <ul className="mt-2 ml-4 space-y-1">
                            <li>
                              <Link
                                href="/courses/web-development"
                                className="block text-sm text-gray-600 hover:text-blue-600"
                              >
                                Web Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/courses/mobile-development"
                                className="block text-sm text-gray-600 hover:text-blue-600"
                              >
                                Mobile Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/courses/data-science"
                                className="block text-sm text-gray-600 hover:text-blue-600"
                              >
                                Data Science
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link
                          href="/courses/design"
                          className="block text-gray-700 hover:text-blue-600"
                        >
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/courses/business"
                          className="block text-gray-700 hover:text-blue-600"
                        >
                          Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <button>
              <Icon
                icon="uil:search"
                className="text-lg text-gray-text-body"
              ></Icon>
            </button>
            <button onClick={toggleMenu}>
              <Icon
                icon="ic:baseline-menu"
                className="text-xl text-gray-text-body"
              ></Icon>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-4/5 md:w-2/5 `}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="mb-4 text-end w-full flex justify-end"
          >
            <Icon
              icon="uil:multiply"
              className="text-xl text-gray-text-body "
            ></Icon>
          </button>
          <ul className="space-y-4">
            <li>
              <Link
                href="/upcoming-classes"
                className="text-gray-700 font-medium"
              >
                UPCOMING CLASSES
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 font-medium">
                EVENTS & NOTICES
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 font-medium">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-80 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
