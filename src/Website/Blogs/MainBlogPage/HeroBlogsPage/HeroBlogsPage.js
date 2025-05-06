import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "../../../../Components/Header/Header";

const HeroBlogsPage = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      delay: 0.5,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="HeroSection">

      <Header />

      <div className="content">

        <h1 ref={titleRef}>OUR BLOG</h1>

        <p ref={paragraphRef}>
          Lorem ipsum dolor sit amet consectetur. Faucibus vel tempor quisque
          scelerisque et ac. Nunc ut interdum platea elementum volutpat nunc at
          sed. Cursus adipiscing ornare velit consectetur congue ipsum leo
          penatibus.
        </p>
         
      </div>

    </div>
  );
};

export default HeroBlogsPage;
