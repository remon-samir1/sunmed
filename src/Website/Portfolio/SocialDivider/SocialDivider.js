

import React, { useEffect } from "react";
import "./SocialDivider.css";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SocialDivider = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".fade-up",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".SocialDivider",
          start: "top 60%",
          toggleActions:'play none none reverse'
        },
      }
    );
  });

  return (
    <div className="SocialDivider px-[7vw] py-[10vh]">
      <div className="insta fade-up">
        <div className="text">
          <h5>Follow us on</h5>
          <h4># Instagram</h4>
        </div>
      </div>

      <div className="identity fade-up">
        <div className="flex items-center justify-center gap-2">
          <div className="icon-container fade-up">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon-container fade-up">
            <IoLogoTwitter className="icon" />
          </div>
          <div className="icon-container fade-up">
            <IoLogoInstagram className="icon" />
          </div>
          <div className="icon-container fade-up">
            <FaLinkedinIn className="icon" />
          </div>
          <div className="icon-container fade-up">
            <FaBehance className="icon" />
          </div>
        </div>
        <p className="fade-up">Sunmed.agency@2024.com</p>
      </div>
    </div>
  );
};

export default SocialDivider;
