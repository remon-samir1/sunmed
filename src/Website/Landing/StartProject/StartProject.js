import './StartProject.css';
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const StartProject = () => {
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%", 
        toggleActions: "play none none reverse", 
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <div className="StartProject px-[7vw] py-7">
      <div className="content" ref={contentRef}>
        <p className='py-3 fz-[1.1rem]'>Be more creative</p>
        <h3>Stay ahead of industry trends</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum amet tincidunt sed viverra ut sed.
          Gravida morbi augue ipsum pulvinar neque velit nunc senectus. Quam
          tristique semper tristique bibendum maecenas viverra lectus.
        </p>
        <Link className="link">START PROJECT</Link>
      </div>
      <div className="img ">
        <img src={require('../../../Images/media-buying-about.png')} alt="project"   />
      </div>
    </div>
  );
};

export default StartProject;
