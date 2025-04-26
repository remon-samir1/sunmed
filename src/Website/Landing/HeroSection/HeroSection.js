import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap"; // استيراد GSAP
import "./HeroSection.css";
import Logo from "../../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Header from "../../../Components/Header/Header";

const HeroSection = () => {
  const [coords1, setCoords1] = useState({ x: 10, y: 0 });
  const [coords2, setCoords2] = useState({ x: 10, y: 0 });

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);

  const handleMouseMove1 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords1({ x, y });
  };

  const handleMouseMove2 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords2({ x, y });
  };

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      
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

    gsap.from(link1Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(link2Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1.2,
      ease: "power3.out",
    });
  }, []); 

  return (
    <div className="HeroSection">
   <Header/>
      <div className="content">
        <h1 ref={titleRef}>DATA - DRIVEN REVENUE MARKETING</h1>

        <p ref={paragraphRef}>
          Digital marketing agency that drives sales for your business
        </p>

        <div className="flex justify-center items-center gap-7">
          <Link
            ref={link1Ref}
            onMouseMove={handleMouseMove1}
            style={{
              backgroundImage: `radial-gradient(circle at ${coords1.x}px ${coords1.y}px, rgba(255,255,255,0.4), rgba(0,0,0,0) 40%)`,
            }}
            className="link"
          >
            Free consultation
          </Link>

          <Link
            ref={link2Ref}
            onMouseMove={handleMouseMove2}
            style={{
              backgroundImage: `radial-gradient(circle at ${coords2.x}px ${coords2.y}px, rgba(255,255,255,0.4), rgba(0,0,0,0) 40%)`,
            }}
            className="link"
          >
            Start project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
