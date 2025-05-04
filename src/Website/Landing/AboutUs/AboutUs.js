import { Link } from "react-router-dom";
import "./AboutUs.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lottie from 'react-lottie';
import animation from '../../../Animation/AboutUs.json'
import video from '../../../Videos/about.mp4'
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const contentRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


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
            Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis
            feugiat id. Sed lectus ultricies elementum amet tincidunt sed
            viverra ut sed. Gravida morbi augue ipsum pulvinar neque velit nunc
            senectus. Quam tristique semper tristique bibendum maecenas viverra
            lectus.
          </p>
          <Link className="link btn-hover">
            <span>

            ABOUT US
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="img">
        {/* <Lottie options={defaultOptions}
              height={400}
              width={400}
        /> */}
        {/* <video src={require('../../../Videos/about.mp4')}></video> */}
          <img src={require("../../../Images/seo.png")} alt="" />
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA] py-8 ">
        <img
          className="object-cover"
          src={require("../../../Images/vector1.png")}
          alt="devolpment"
        />
      </div>
    </>
  );
};

export default AboutUs;
