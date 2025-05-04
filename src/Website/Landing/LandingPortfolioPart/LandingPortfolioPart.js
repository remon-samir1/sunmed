



import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import AllWorks from "../../Portfolio/PortfolioWorks/Works/AllWorks/AllWorks";
import SocialMediaPage from "../../Portfolio/PortfolioWorks/Works/SocialMediaPage/SocialMediaPage";
import Development from "../../Portfolio/PortfolioWorks/Works/Development/Development";

gsap.registerPlugin(ScrollTrigger);

const LandingPortfolioPart = () => {
  const [showData, setShowData] = useState("all");
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  const sectionRef = useRef(null);

  useGSAP( () => {
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
  };

  const toggleDigitalMarketingDropdown = () => {
    setOpenDigitalMarketing((prev) => !prev);
    setOpenWeb(false); 
  };


  return (
    <div ref={sectionRef} className="PortfolioWorks py-[4vh] md:py-[0vh]">
      <h3 className="md:pl-[7vw] py-[5vh] pl-[1rem] text-[1.8rem] text-[#cbb434] font-semibold  uppercase" style={{letterSpacing:'1px'}}>Best projects</h3>
      <div
        className={`categories ${openWeb || openDigitalMarketing ? "h-[120px]" : ""} !duration-500 md:px-[7vw] fade-in`}
      >
        <button onClick={() => setShowData("all")}>All</button>
        <Link to='/portfolio/media-production-datails'>Media production</Link>
        <button>Education services</button>

          <button onClick={() => setShowData("development")}>Web Development</button>
        

        <div className="flex flex-col items-center relative">
          <button onClick={toggleDigitalMarketingDropdown}>Digital Marketing</button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${openDigitalMarketing ? "h-14" : "h-0"} absolute top-[100%] z-50`}
          >
            <button onClick={() => setShowData("socialMedia")}>Social media</button>
            <button>Media buying</button>
          </div>
        </div>

        <button>Evevnt management</button>
      </div>

      <div
        className={`data px-[2vw] md:px-[7vw] translate-y-0 py-5 will-change-auto duration-700 fade-in ${
          window.innerWidth > 768
            ? openDigitalMarketing || openWeb
              ? "pt-10"
              : ""
            : ""
        }`}
      >
        {showData === "all" ? <AllWorks /> :showData === "socialMedia" ?  <SocialMediaPage /> :showData === "development" && <Development/>  }
      </div>
    </div>
  );
};

export default LandingPortfolioPart;


