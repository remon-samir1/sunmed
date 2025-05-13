

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AllWorks from "../../Portfolio/PortfolioWorks/Works/AllWorks/AllWorks";
import SocialMediaPage from "../../Portfolio/PortfolioWorks/Works/SocialMediaServices/SocialMediaTab";
import Development from "../../Portfolio/PortfolioWorks/Works/Development/WebDevelopmentServices/Development";
import RentingStudios from "../../Portfolio/PortfolioWorks/Works/MediaWorks/RentingStudios/RentingStudios";
import PostProduction from "../../Portfolio/PortfolioWorks/Works/MediaWorks/PostProduction/PostProduction";
import Photography from "../../Portfolio/PortfolioWorks/Works/MediaWorks/Photography/Photography";
import Videography from "../../Portfolio/PortfolioWorks/Works/MediaWorks/Videography/Videography";
import TranningPlatforms from "../../Portfolio/PortfolioWorks/Works/EducationWorks/TranningPlatforms/TranningPlatforms";
import TranningContent from "../../Portfolio/PortfolioWorks/Works/EducationWorks/TranningContent/TranningContent";
import TranningBags from "../../Portfolio/PortfolioWorks/Works/EducationWorks/TranningBags/TranningBags";
import ElectronicMarketing from "../../Portfolio/PortfolioWorks/Works/EducationWorks/ElectronicMarketing/ElectronicMarketing";
import VirtualProject from "../../Portfolio/PortfolioWorks/Works/EducationWorks/VirtualProject/VirtualProject";
import ProjectManagement from "../../Portfolio/PortfolioWorks/Works/EducationWorks/ProjectManagement/ProjectManagement";
import WebDesgin from "../../Portfolio/PortfolioWorks/Works/Development/WebDesgin/WebDesgin";
import Implementation from "../../Portfolio/PortfolioWorks/Works/EventManagementWorks/Implementation/Implementation";
import Conference from "../../Portfolio/PortfolioWorks/Works/EventManagementWorks/Conference/Conference";
import MediaBuyingWorks from "../../Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/MediaBuying/MediaBuyingWorks";
import InfluencerMarketing from "../../Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/InfluencerMarketing/InfluencerMarketing";
import SeoServices from "../../Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/SeoServices/SeoServices";


const LandingPortfolioPart = () => {
  const [showData, setShowData] = useState("all");
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  const [openMediaProducation, setOpenMediaProducation] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
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
    <div ref={sectionRef} className="PortfolioWorks py-[4vh] md:py-[0vh]">
      <h3 className="md:pl-[7vw] py-[5vh] pl-[1rem] text-[1.8rem] text-[#cbb434] font-semibold uppercase" style={{ letterSpacing: '1px' }}>Best projects</h3>
      <div className={`categories ${openWeb || openDigitalMarketing || openMediaProducation || openEducation || openWebSolution || openEventManage ? "h-[140px]" : "h-[80px]"} !duration-500 md:px-[7vw] fade-in`}>
        <button onClick={() => setShowData("all")}>All</button>

        <div className="flex flex-col items-center relative">
          <button className={`${openMediaProducation && "active"}`} onClick={toggleMediaProducationDropdown}>Media Production</button>
          <div className={`list flex overflow-hidden mt-4 duration-500 ${openMediaProducation ? "open" : "h-0"} absolute top-[100%] left-0 z-50`}>
            <button onClick={()=>setShowData("renting")} className="child">Renting Company Studios</button>
            <button onClick={()=>setShowData("postProduction")} className="child">Post Production</button>
            <button onClick={()=>setShowData("photography")} className="child">Photography</button>
            <button onClick={()=>setShowData("videography")} className="child">Videography</button>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <button className={`${openEducation && "active"}`} onClick={toggleEducationDropdown}>Education Services</button>
          <div className={`list flex overflow-hidden mt-4 duration-500 ${openEducation ? "h-[69px]" : "h-0"} absolute top-[100%] left-[-180%] z-50`}>
            <button onClick={()=>setShowData('platforms')} className="child">Training Platforms</button>
            <button onClick={()=>setShowData('bags')} className="child">Training Bags</button>
            <button onClick={()=>setShowData('electronic')} className="child">Electronic Marketing</button>
            <button onClick={()=>setShowData('trainingContent')} className="child">Training Content</button>
            <button onClick={()=>setShowData('Pm')} className="child">Project Management</button>
            <button onClick={()=>setShowData('virtial')} className="child">Virtual Projects</button>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <button className={`${openWebSolution && "active"}`} onClick={toggleWebSolutionDropdown}>Web Solution</button>
          <div className={`list flex overflow-hidden mt-4 duration-500 ${openWebSolution ? "h-14" : "h-0"} absolute top-[100%] left-0 z-50`}>
            <button onClick={() => setShowData("webDesign")} className="child">Web Design</button>
            <button onClick={() => setShowData("development")} className="child">Web Development</button>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <button className={`${openDigitalMarketing && "active"}`} onClick={toggleDigitalMarketingDropdown}>Digital Marketing</button>
          <div className={`list flex overflow-hidden mt-4 duration-500 ${openDigitalMarketing ? "h-14" : "h-0"} absolute top-[100%] z-50`}>
            <button onClick={() => setShowData("socialMedia")} className="child">Social Media</button>
            <button onClick={()=>setShowData('mediaBuying')} className="child">Media Buying</button>
            <button onClick={()=>setShowData('influencer')} className="child">Influencer Marketing</button>
            <button onClick={()=>setShowData('seo')} className="child">SEO Services</button>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <button className={`${openEventManage && "active"}`} onClick={toggleEventManagementDropdown}>Event Management</button>
          <div className={`list flex overflow-hidden mt-4 duration-500 ${openEventManage ? "h-14" : "h-0"} absolute top-[100%] right-0 z-50`}>
            <button onClick={()=>setShowData('Implementation')} className="child">    Implementation of conference-related work</button>
            <button onClick={()=>setShowData('Conference')} className="child">
            Conference management and organization
              
            </button>
          </div>
        </div>
      </div>

      <div className="data px-[2vw] md:px-[7vw] py-5 fade-in">
        {showData === "all" ? <AllWorks /> : showData === "socialMedia" ? <SocialMediaPage /> : showData === "development" ? <Development /> : showData === 'renting' ? <RentingStudios /> : showData === 'postProduction' ? <PostProduction /> : showData === 'photography' ? <Photography/> : showData === 'videography' ? <Videography/> : showData === 'platforms' ? <TranningPlatforms/> : showData === 'trainingContent' ? <TranningContent/> : showData === 'bags' ? <TranningBags/> : showData === 'electronic' ? <ElectronicMarketing/> : showData === 'virtial' ? <VirtualProject/> : showData === 'Pm' ? <ProjectManagement/> : showData === 'webDesign' ? <WebDesgin/>:showData === 'Implementation' ? <Implementation/> : showData === 'Conference' ? <Conference/> : showData==='mediaBuying'?<MediaBuyingWorks/> : showData === 'influencer' ?<InfluencerMarketing/> : showData === 'seo' && <SeoServices/>}
      </div>
    </div>
  );
};

export default LandingPortfolioPart;
