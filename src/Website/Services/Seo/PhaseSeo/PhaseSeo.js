import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import arrow from '../../../../Images/arrow.svg'
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
    <div className="PhaseDevelopment md:pr-[7vw] py-[5vh]">
      <div className="images">
      <div className="relative  md:w-[50vw]">
          <Swiper
            className="mySwiper"
            navigation={window.innerWidth < 768 ?{ nextEl: ".custom-next",} : false} 
            slidesPerView={window.innerWidth < 768 ? 1.3 : 3}
            modules={[Navigation]}
            spaceBetween={10}
          >
            <div className="custom-next">
              <img src={arrow} alt="next" />
            </div>
            <SwiperSlide>
              <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
                <video
                  src={require("../../../../Videos/deve-1.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
                <video
                  src={require("../../../../Videos/deve-2.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
                <video
                  src={require("../../../../Videos/deve-3.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
                <video
                  src={require("../../../../Videos/deve-1.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" ref={(el) => (imagesRef.current[2] = el)}>
                <video
                  src={require("../../../../Videos/deve-2.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                ></video>
              </div>
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
