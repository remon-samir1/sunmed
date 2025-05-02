import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMediaProduction = () => {
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
    <div className="StartProject px-[7vw] py-7 !flex-row">
      <div className="content" ref={contentRef}>
        <p className="py-3 fz-[1.1rem]">Media production services</p>
        <h3>Our philosophy</h3>
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
              viewBox="0 0 24 24"
            >
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                <path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10" />
                <path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18" />
              </g>
            </svg>
          </span>
        </Link>
      </div>
      <div className="img">
        <img
          src={require("../../../../Images/media-services.png")}
          alt="media services"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutMediaProduction;
