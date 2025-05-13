import React, { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./PortfolioWorks.css";

gsap.registerPlugin(ScrollTrigger);

const PortfolioWorks = () => {
  
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  const [openMediaProducation, setOpenMediaProducation] = useState(false);
  const [openEduaction, setOpenEducation] = useState(false);
  const [openWebSolution, setOpenWebSolution] = useState(false);
  const [openEventManage, setOpenEventManage] = useState(false);
  const sectionRef = useRef(null);

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

  const toggleWebDropdown = () => {
    setOpenWeb((prev) => !prev);
    setOpenDigitalMarketing(false);
    setOpenMediaProducation(false);
    setOpenEducation(false)
    setOpenWebSolution(false)
    setOpenEventManage(false)

  };

  const toggleDigitalMarketingDropdown = () => {
    setOpenDigitalMarketing((prev) => !prev);
    setOpenWeb(false);
    setOpenMediaProducation(false);
    setOpenEducation(false)
    setOpenWebSolution(false)
    setOpenEventManage(false)


  };
  const toggleMediaProducationDropdown = () => {
    setOpenMediaProducation((prev) => !prev);
    setOpenWeb(false);
    setOpenDigitalMarketing(false);
    setOpenEducation(false)
    setOpenWebSolution(false)
    setOpenEventManage(false)

  };
  const toggleEducationDropdown = () => {
    setOpenEducation(prev=>!prev)
    setOpenMediaProducation(false);
    setOpenWeb(false);
    setOpenDigitalMarketing(false);
    setOpenWebSolution(false)
    setOpenEventManage(false)

  };
  const toggleWebSolutionDropdown = () => {
    setOpenWebSolution(prev=>!prev)
    setOpenEducation(false)
    setOpenMediaProducation(false);
    setOpenWeb(false);
    setOpenDigitalMarketing(false);
    setOpenEventManage(false)

  };
  const toggleEventManagementDropdown = () => {
    setOpenEventManage(prev=>!prev)
    setOpenWebSolution(false)
    setOpenEducation(false)
    setOpenMediaProducation(false);
    setOpenWeb(false);
    setOpenDigitalMarketing(false);
  };

  return (
    <div ref={sectionRef} className="PortfolioWorks py-[4vh] md:py-[10vh]">
      <div
        className={`categories ${
          openWeb || openDigitalMarketing||openEventManage ||openWebSolution ||openMediaProducation || openEduaction
            ? "h-[140px]"
            : "h-[100px]"
        } !duration-500 md:px-[7vw] fade-in`}
      >
        <NavLink to="all">All</NavLink>

        <div className="flex flex-col items-center relative">
          <button
            className={`${openMediaProducation && "active"}`}
            onClick={toggleMediaProducationDropdown}
          >
            Media Production
          </button>
          
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openMediaProducation ? "open" : "h-0"
            } absolute top-[100%] left-0 z-50`}
          >
            <NavLink to="renting-studios" className="child">
              Renting Company Sudios
            </NavLink>
            <NavLink to="post-production" className="child">
              Post Production
            </NavLink>
            <NavLink className="child" to="Photography">
              Photography 
            </NavLink>
            <NavLink className="child" to="videography">
              Videography
            </NavLink>
          </div>
        </div>




      
        <div className="flex flex-col items-center relative">
          <button
            className={`${openEduaction && "active"}`}
            onClick={toggleEducationDropdown}
          >
            Education Services
          </button>
          <div
            className={`list education flex  overflow-hidden mt-4 duration-500 ${
              openEduaction ? "h-[69px] " : "h-0"
            } absolute top-[100%] left-[-180%] z-50`}
          >
        <NavLink to="tranning-platforms" className="child">
          Management of tranning platforms
            </NavLink>
            <NavLink to="tranning-bags" className="child">
            Preparing training bags
            </NavLink>
            <NavLink className="child" to="electronic-marketing">
            Electronic marketing
            </NavLink>
            <NavLink className="child" to="tranning-content">
            Register training content
            </NavLink>
            <NavLink className="child" to="project-management">
            Project management
            </NavLink>
            <NavLink className="child" to="virtual-project">
            Virtual projects
            </NavLink>
          </div>
        </div>




        <div className="flex flex-col items-center relative">
          <button
            className={`${openWebSolution && "active"}`}
            onClick={toggleWebSolutionDropdown}
          >
            Web Solution
          </button>
          
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openWebSolution ? "h-14" : "h-0"
            } absolute top-[100%] left-0 z-50`}
          >
            <NavLink to="web-design" className="child">
              Wen Design
            </NavLink>
            <NavLink to="development" className="child">
              Web Development
            </NavLink>
            <NavLink className="child" to="development-testing">
            Development Testing
            </NavLink>
      
          </div>
        </div>



  
  


        <div className="flex flex-col items-center relative">
          <button onClick={toggleDigitalMarketingDropdown}>
            Digital Marketing
          </button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openDigitalMarketing ? "h-14" : "h-0"
            } absolute top-[100%] z-50`}
          >
            <NavLink className="child" to="social-media">
              Social media
            </NavLink>
            <NavLink className="child" to="media-buying">
              Media buying
            </NavLink>
            <NavLink className="child" to="infleuncer-marketing">
            Influencer Marketing
            </NavLink>
            <NavLink className="child" to="seo-services">
            Seo
            </NavLink>
          </div>
        </div>

      
      



        <div className="flex flex-col items-center relative">
          <button
            className={`${openEventManage && "active"}`}
            onClick={toggleEventManagementDropdown}
          >
          Event Management
          </button>
          
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openEventManage ? "h-14" : "h-0"
            } absolute top-[100%] right-0 z-50`}
          >
            <NavLink to="Implementation" className="child">
            Implementation of conference-related work
            </NavLink>
            <NavLink to="Conference" className="child">
            Conference management and organization
            </NavLink>
        
      
          </div>
        </div>









      </div>

      <div className="data px-[2vw] md:px-[7vw] py-5 fade-in -z-50">
        <Outlet />
      </div>
    </div>
  );
};

export default PortfolioWorks;

