import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutSeo = () => {
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
        <p className="py-3 fz-[1.1rem]">SEO SERVICES</p>
        <h3 className=" md:max-w-[40vw]">
        WHY CREATIVE BRAND USE SEO
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
          <span>

          CHECK MY SEO
          </span>
          <span>

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M14 2.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-4.47 4.47a.75.75 0 0 1-1.06 0L8.5 6.56l-4.22 4.22a.75.75 0 1 1-1.06-1.06l4.75-4.75a.75.75 0 0 1 1.06 0l2.47 2.47l3.94-3.94h-.69a.75.75 0 0 1-.75-.75M3.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m4.75-2.25a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0zM11.75 13a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75m4.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0z"/></svg>
          </span>
          </Link>
      </div>
      <div className="img">
        <img
          ref={imgRef}
          src={require("../../../../Images/seo.png")}
          alt="devolpment"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutSeo;
