import { Link } from "react-router-dom";
import "./AboutUs.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -50,   
      
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <>
    <div className="AboutUs px-[7vw] py-7">
      <div className="content" ref={contentRef}>
        <h3>We know your pain</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum amet tincidunt sed viverra ut sed.
          Gravida morbi augue ipsum pulvinar neque velit nunc senectus. Quam
          tristique semper tristique bibendum maecenas viverra lectus.
        </p>
        <Link className="link">ABOUT US</Link>
      </div>
      <div className="img">
        <img src={require('../../../Images/seo.png')} alt="" />
      </div>
    </div>
    <div className="w-full bg-[#FAFAFA] py-8 ">
      <img className="object-cover" src={require('../../../Images/vector1.png')} alt="devolpment"  />
    </div>
    </>
  );
};

export default AboutUs;
