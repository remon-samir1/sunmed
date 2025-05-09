import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutWebSolution = () => {
  const contentRef = useRef(null);
  const imgRef = useRef(null);
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
    gsap.from(imgRef.current, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="StartProject px-[7vw] py-7 !flex-row">
      <div className="content" ref={contentRef}>
        <p className="py-3 fz-[1.1rem]">WEB DEVELOPMENT</p>
        <h3 className=" md:max-w-[40vw]">
          WHY CREATIVE BRANDS USED WEB DEVELOPMENT?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum viverra lectus. Lorem ipsum dolor
          sit amet consectetur. Dictumst amet in duis feugiat id. Sed lectus
          ultricies elementum senectus. Quam tristique semper tristique bibendum
          maecenas viverra lectus. Lorem ipsum dolor sit amet consectetur.
          Dictumst amet in duis feugiat id. Sed lectus ultricies elementum amet
          tincidunt sed viverra ut sed. Gravida morbi augue ipsum pulvinar neque
          velit nunc senectus. Quam tristique semper tristique bibendum maecenas
          viverra lectus.
        </p>
        <Link className="btn-hover">
          <span>What’s include</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M1024 1024h768v896H128V256h896zM256 384v640h640V384zm640 1408v-640H256v640zm768 0v-640h-640v640zM1280 0h768v768h-768zm640 640V128h-512v512z"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="img">
        <img
          ref={imgRef}
          src={require("../../../../Images/web-development.png")}
          alt="devolpment"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutWebSolution;
