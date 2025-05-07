

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./EyeAnimation.css";

const Home = () => {
  const irisRef = useRef(null);
  const playBtnRef = useRef(null);
  const eyeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = eyeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(irisRef.current, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(playBtnRef.current, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {

    gsap.to(".eye-wrapper", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        navigate("/stories");
      },
    });
  };

  return (
    <div className="eye-wrapper">
      <div className="eye" ref={eyeRef}>
        <div className="iris" ref={irisRef}>
          <div className="images bg-black">
            {/* <img src={require('../../Images/portfolio.png')} alt="1" loading="lazy"/>
            <img src={require('../../Images/hero-section.png')} alt="1" loading="lazy"/>
            <img src={require('../../Images/web-development.png')} alt="1" loading="lazy"/>
            <img src={require('../../Images/logo-story.png')} alt="1" loading="lazy"/>
         */}
          </div>
        </div>
        <div className="play-button" ref={playBtnRef} onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Home;
