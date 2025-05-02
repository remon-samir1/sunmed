



import React, { useState, useRef } from "react";
import "./PortfolioWorks.css";
import AllWorks from "./Works/AllWorks/AllWorks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialMediaPage from "./Works/SocialMediaPage/SocialMediaPage";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Development from "./Works/Development/Development";

gsap.registerPlugin(ScrollTrigger);

const PortfolioWorks = () => {
  const [showData, setShowData] = useState("all");
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  const sectionRef = useRef(null);

  // GSAP effect for fade-in on scroll
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
    setOpenDigitalMarketing(false); // Close digital marketing dropdown when web is opened
  };

  const toggleDigitalMarketingDropdown = () => {
    setOpenDigitalMarketing((prev) => !prev);
    setOpenWeb(false); // Close web dropdown when digital marketing is opened
  };


  return (
    <div ref={sectionRef} className="PortfolioWorks py-[4vh] md:py-[10vh]">
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

export default PortfolioWorks;


