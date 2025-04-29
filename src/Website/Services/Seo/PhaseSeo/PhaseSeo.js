import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollTrigger);

const PhaseSeo = () => {
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
    <div className="PhaseDevelopment pr-[7vw] py-[5vh]">
      <div className="images">
        <div className="cards !hidden lg:!flex">
          <div className="card" ref={(el) => (imagesRef.current[0] = el)}>
            <img
              src={require("../../../../Images/phase-4.png")}
              alt="development"
              loading="lazy"
            />
          </div>
          <div className="card" ref={(el) => (imagesRef.current[1] = el)}>
            <img
              src={require("../../../../Images/phase-5.png")}
              alt="development"
              loading="lazy"
            />
          </div>
          <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
            <img
              src={require("../../../../Images/phase-6.png")}
              alt="development"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative lg:hidden">
          <Swiper className="mySwiper" slidesPerView={"auto"} spaceBetween={10}>
            <SwiperSlide>
              <img
                src={require("../../../../Images/phase-6.png")}
                alt="development"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={require("../../../../Images/phase-5.png")}
                alt="development"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../../../Images/phase-4.png")}
                alt="development"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="content" ref={contentRef}>
        <h5>PHASE 4</h5>
        <h3>DEVELOPMENT</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id.
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur. Mi posuere tempus vitae at
              lacus tristique tristique rutrum imperdiet. Cras bibendum
              pulvinar.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Mi posuere tempus vitae at
              lacus tristique tristique rutrum imperdiet. Cras bibendum
              pulvinar.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Mi posuere tempus vitae at
              lacus tristique tristique rutrum imperdiet. Cras bibendum
              pulvinar.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PhaseSeo;
