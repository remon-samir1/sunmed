import "./StartProject.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
        <p className="py-3 fz-[1.1rem]">Be more creative</p>
        <h3>Stay ahead of industry trends</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum amet tincidunt sed viverra ut sed.
          Gravida morbi augue ipsum pulvinar neque velit nunc senectus. Quam
          tristique semper tristique bibendum maecenas viverra lectus.
        </p>
        <Link className=" btn-hover">
          <span>

          START PROJECT
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="img ">
        <img
          src={require("../../../Images/media-buying-about.png")}
          alt="project"
        />
      </div>
    </div>
  );
};

export default StartProject;
