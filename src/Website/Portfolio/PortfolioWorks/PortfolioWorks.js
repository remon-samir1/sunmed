import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./PortfolioWorks.css";
import ResponsiveWorks from "./ResponsiveWorks";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const PortfolioWorks = () => {
  console.log(window.location.pathname.split('/').slice(-1)[0]);
  const [resize, setResize] = useState(window.innerWidth);
 
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
  
    const dropdownMap = {
      media: [
        "renting-studios",
        "post-production",
        "photography",
        "videography",
      ],
      education: [
        "tranning-platforms",
        "tranning-bags",
        "electronic-marketing",
        "tranning-content",
        "project-management",
        "virtual-project",
      ],
      web: ["web-design", "development"],
      marketing: [
        "social-media",
        "media-buying",
        "infleuncer-marketing",
        "seo-services",
      ],
      event: ["implementation", "conference"],
    };
  
    const lastSegment = path.split("/").filter(Boolean).pop();
  
    for (const [dropdownName, children] of Object.entries(dropdownMap)) {
      if (children.includes(lastSegment)) {
        setOpenDropdown(dropdownName);
      sectionRef.current.scrollIntoView()
        break;
      }
    }
  }, []);
  
  

  useEffect(() => {
    const resizeWidth = () => setResize(window.innerWidth);
    window.addEventListener("resize", resizeWidth);
    return () => window.removeEventListener("resize", resizeWidth);
  }, []);

  const [openDropdown, setOpenDropdown] = useState(null);
  const sectionRef = useRef(null);
  const dropdownsRef = useRef(null);
  const [filter, setFilter] = useState(false);
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownsRef.current &&
        !dropdownsRef.current.contains(event.target)
      ) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useGSAP(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  const pathSegments = window.location.pathname.split("/");
  const lastSegment = pathSegments.filter(Boolean).pop();
  const cleanName = lastSegment.replace(/-/g, " ");
  const viewRef = useRef()
  return (
    <div 

      id="#works"
      ref={sectionRef}
      className="z-50 PortfolioWorks py-[4vh] md:py-[10vh]"
    >
      {resize < 700 ? (
        <div className="flex items-center justify-between px-[3vw]">
          <p className="py-3 px-5 font-semibold text-white bg-[#cbb434] rounded min-w-[20vw] text-center capitalize">
            {cleanName}
          </p>

          <div
            onClick={() => setFilter((prev) => !prev)}
            className="cursor-pointer flex items-center gap-4 px-5 py-2 rounded border border-[#d0d1d5]"
          >
            <Icon icon="tabler:filter-2" width="25" height="25" />
            <span>Filter</span>
          </div>
        </div>
      ) : (
        <div
          className={`categories ${
            openDropdown === "education" ||
            openDropdown === "media" ||
            openDropdown === "web" ||
            openDropdown === "marketing" ||
            openDropdown === "event"
              ? "h-[140px]"
              : "h-[70px]"
          } !duration-500 md:px-[7vw] fade-in z-[999]`}
          ref={dropdownsRef}
        >
          <NavLink to="all" onClick={closeAllDropdowns}>
            All
          </NavLink>

          {/* Media Production */}
          <div className="flex flex-col items-center relative z-50">
            <button
              className={`${openDropdown === "media" && "active"}`}
              onClick={() => toggleDropdown("media")}
            >
              Media Production
            </button>
            <div
              className={`list flex overflow-hidden mt-4 duration-500 ${
                openDropdown === "media" ? "open" : "h-0"
              } absolute top-[100%] left-0 z-[9999]`}
            >
              <NavLink
                to="renting-studios"
                className="child"
                onClick={closeAllDropdowns}
              >
                Renting Company Studios
              </NavLink>
              <NavLink
                to="post-production"
                className="child"
                onClick={closeAllDropdowns}
              >
                Post Production
              </NavLink>
              <NavLink
                className="child"
                to="Photography"
                onClick={closeAllDropdowns}
              >
                Photography
              </NavLink>
              <NavLink
                className="child"
                to="videography"
                onClick={closeAllDropdowns}
              >
                Videography
              </NavLink>
            </div>
          </div>

          {/* Education Services */}
          <div className="flex flex-col items-center relative z-50">
            <button
              className={`${openDropdown === "education" && "active"}`}
              onClick={() => toggleDropdown("education")}
            >
              Education Services
            </button>
            <div
              className={`list education z-50 flex ${
                resize > 768 ? "flex-row left-[-190%]" : "flex-col left-0"
              } overflow-hidden mt-4 duration-500 ${
                openDropdown === "education" ? "h-[450px] md:h-[70px]" : "h-0"
              } absolute top-[100%] z-50`}
            >
              <NavLink
                to="tranning-platforms"
                className="child"
                onClick={closeAllDropdowns}
              >
                Management of training platforms
              </NavLink>
              <NavLink
                to="tranning-bags"
                className="child"
                onClick={closeAllDropdowns}
              >
                Preparing training bags
              </NavLink>
              <NavLink
                className="child"
                to="electronic-marketing"
                onClick={closeAllDropdowns}
              >
                Electronic marketing
              </NavLink>
              <NavLink
                className="child"
                to="tranning-content"
                onClick={closeAllDropdowns}
              >
                Register training content
              </NavLink>
              <NavLink
                className="child"
                to="project-management"
                onClick={closeAllDropdowns}
              >
                Project management
              </NavLink>
              <NavLink
                className="child"
                to="virtual-project"
                onClick={closeAllDropdowns}
              >
                Virtual projects
              </NavLink>
            </div>
          </div>

          {/* Web Solution */}
          <div className="flex flex-col items-center relative">
            <button
              className={`${openDropdown === "web" && "active"}`}
              onClick={() => toggleDropdown("web")}
            >
              Web Solution
            </button>
            <div
              className={`list flex overflow-hidden mt-4 duration-500 ${
                openDropdown === "web" ? "h-14" : "h-0"
              } absolute top-[100%] left-0 z-50`}
            >
              <NavLink
                to="web-design"
                className="child"
                onClick={closeAllDropdowns}
              >
                Web Design
              </NavLink>
              <NavLink
                to="development"
                className="child"
                onClick={closeAllDropdowns}
              >
                Web Development
              </NavLink>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="flex flex-col items-center relative">
            <button
              className={`${openDropdown === "marketing" && "active"}`}
              onClick={() => toggleDropdown("marketing")}
            >
              Digital Marketing
            </button>
            <div
              className={`list flex overflow-hidden mt-4 duration-500 ${
                openDropdown === "marketing" ? "h-14" : "h-0"
              } absolute top-[100%] z-50`}
            >
              <NavLink
                className="child"
                to="social-media"
                onClick={closeAllDropdowns}
              >
                Social media
              </NavLink>
              <NavLink
                className="child"
                to="media-buying"
                onClick={closeAllDropdowns}
              >
                Media buying
              </NavLink>
              <NavLink
                className="child"
                to="infleuncer-marketing"
                onClick={closeAllDropdowns}
              >
                Influencer Marketing
              </NavLink>
              <NavLink
                className="child"
                to="seo-services"
                onClick={closeAllDropdowns}
              >
                SEO
              </NavLink>
            </div>
          </div>

          {/* Event Management */}
          <div className="flex flex-col items-center relative">
            <button
              className={`${openDropdown === "event" && "active"}`}
              onClick={() => toggleDropdown("event")}
            >
              Event Management
            </button>
            <div
              className={`list flex overflow-hidden mt-4 duration-500 ${
                openDropdown === "event" ? "h-14" : "h-0"
              } absolute top-[100%] right-0 z-50`}
            >
              <NavLink
                to="Implementation"
                className="child"
                onClick={closeAllDropdowns}
              >
                Implementation of conference-related work
              </NavLink>
              <NavLink
                to="Conference"
                className="child"
                onClick={closeAllDropdowns}
              >
                Conference management and organization
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="data px-[2vw] md:px-[7vw] py-5 fade-in -z-[100]">
        {filter ? <ResponsiveWorks setFilter={setFilter} /> : <Outlet />}
      </div>
    </div>
  );
};

export default PortfolioWorks;
