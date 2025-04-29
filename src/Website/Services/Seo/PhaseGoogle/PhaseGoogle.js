import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import google from "../../../../Images/devicon_google.svg";
gsap.registerPlugin(ScrollTrigger);

const PhaseGoogle = () => {
  const imagesRef = useRef([]);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(imagesRef.current, {
      scrollTrigger: {
        trigger: imagesRef.current[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <div className="PhaseDevelopment px-[7vw] py-[5vh] flex justify-center ">
      <div className="flex-1 flex justify-center">
        <img src={google} alt="google" loading="lazy" className="w-[21rem] h-[21rem]"/>
      </div>

      <div className="content flex-1" ref={contentRef}>
        <h5>PHASE 4</h5>
        <h3>DEVELOPMENT</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi posuere tempus vitae at
          lacus tristique tristique rutrum imperdiet. Cras bibendum pulvinar
          pharetra sed id porta tristique gravida venenatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi posuere tempus vitae at
          lacus tristique tristique rutrum imperdiet. Cras bibendum pulvinar
          pharetra sed id porta tristique gravida venenatis.
        </p>
        
      </div>
    </div>
  );
};

export default PhaseGoogle;
