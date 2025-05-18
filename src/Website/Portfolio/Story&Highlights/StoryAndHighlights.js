

import React, { useEffect, useRef, useState } from "react";
import "./StoryAndHighlights.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SingleStory from "../../../Components/SingleStory/SingleStory";
import { Link } from "react-router-dom";
import { Axios } from "../../../Components/Helpers/Axios";

gsap.registerPlugin(ScrollTrigger);


const StoryAndHighlights = () => {
  const [highlights , setHighlights] = useState([])
  const sectionRef = useRef(null);
  useEffect(()=>{
    Axios.get('/high_lights').then(data=>setHighlights(data.data.data))
  },[])
  console.log(highlights);
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
          {highlights.map((item, index) => (
            <Link to={`/highlights/${item.id}`} key={index} className="highlight zoom-in">
              <img
                src={require(`../../../Images/logo-story.png`)}
                alt="story"
                loading="lazy"
              />
              <span>Highlight {index +1}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default StoryAndHighlights;
