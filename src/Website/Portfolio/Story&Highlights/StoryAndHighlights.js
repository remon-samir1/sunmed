

import React, { useEffect, useRef, useState } from "react";
import "./StoryAndHighlights.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SingleStory from "../../../Components/Highlight/SingleStory";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const StoryAndHighlights = () => {
  const sectionRef = useRef(null);
  const [showStory , setShowStory] = useState(false)
  useGSAP(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".zoom-in"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions:'play none none reverse'

        },
      }
    );
  });

  return (
    <>
    <div ref={sectionRef} className="StoryAndHighlights py-7">
  
  


      <div className="story-container !px-[4vw] md:!px-[7vw] zoom-in">
        <Link className="story" to='/stories'>
          <img
            src={require("../../../Images/logo-story.png")}
            alt="story"
            loading="lazy"
          />
        </Link>
        <div className="texts">
          <h3>SUNMED AGENCY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet sem condimentum massa
            morbi. Neque arcu dictum imperdiet non accumsan eget quis. Turpis
            nibh cras tortor natoque auctor. Pellentesque ut faucibus
            pellentesque porttitor mi habitant eu. Gravida sed orci in
            pellentesque nascetur.
          </p>
        </div>
      </div>

      <div className="highlights-container zoom-in">
        <h3 className="px-[4vw] md:px-[7vw] py-7">our Highlights</h3>
        <div className="flex justify-center items-center gap-[2vw] md:gap-[5vw] mt-10 px-[0] md:px-[7vw]">
          {[
            { src: "logo-story.png", label: "About us" },
            { src: "reviews1.png", label: "Reviews" },
            { src: "highlight2.png", label: "Reviews" },
            { src: "logo-story.png", label: "Reviews" },
            { src: "logo-story.png", label: "About us" },
            { src: "add-highlight.png", label: "New" },
          ].map((item, index) => (
            <div key={index} className="highlight zoom-in">
              <img
                src={require(`../../../Images/${item.src}`)}
                alt="story"
                loading="lazy"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default StoryAndHighlights;
