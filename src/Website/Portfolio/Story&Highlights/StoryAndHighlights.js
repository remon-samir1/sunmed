

import React, { useEffect, useRef, useState } from "react";
import "./StoryAndHighlights.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SingleStory from "../../../Components/SingleStory/SingleStory";
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
    <div ref={sectionRef} className="StoryAndHighlights py-32 md:py-12  ">
  




      <div className="highlights-container zoom-in">
        <h3 className="px-[4vw] md:px-[7vw] py-4 uppercase">our Highlights</h3>
        <div className="flex justify-center items-center gap-[2vw] md:gap-[5vw] mt-10 px-[0] md:px-[7vw]">
          {[
            { src: "logo-story.png", label: "About us",to:'/highlights' },
            { src: "reviews1.png", label: "Reviews",to:'/highlights' },
            { src: "highlight2.png", label: "Reviews" ,to:'/highlights'},
            { src: "logo-story.png", label: "Reviews",to:'/highlights' },
            { src: "logo-story.png", label: "About us" ,to:'/highlights'},
            { src: "add-highlight.png", label: "New" ,to:'/bookNow'},
          ].map((item, index) => (
            <Link to={item.to} key={index} className="highlight zoom-in">
              <img
                src={require(`../../../Images/${item.src}`)}
                alt="story"
                loading="lazy"
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default StoryAndHighlights;
