import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import './ContactHero.css'
import { useGSAP } from "@gsap/react";
import Header from "../../../Components/Header/Header";
const ContactUsHero = () => {
  const [coords2, setCoords2] = useState({ x: 10, y: 0 });
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
const paragraph = 'Home >> Contact'
  const handleMouseMove2 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords2({ x, y });
  };

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,

      y: 50,
      delay: 1,
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
  });

  return (
    <div className="HeroSection ContactHero overflow-hidden">
      <Header />
      <div className="content !gap-3">
        <p className="!p-0 md:max-w-[70%] !font-bold !text-[1rem]" ref={paragraphRef}>
  {paragraph}
        </p>
        <h1 className="uppercase md:!w-[60%] text-center " ref={titleRef}>Contact us</h1>

    
      </div>
    </div>
  );
};

export default ContactUsHero;
