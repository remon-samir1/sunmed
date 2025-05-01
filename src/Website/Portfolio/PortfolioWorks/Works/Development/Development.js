import React, { useRef } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import arrow from '../../../../../Images/arrow.svg'
import './Development.css'
import { Link } from 'react-router-dom';
const Development = () => {
  const imagesRef = useRef([]);

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


  });



  return (
    <div className="PhaseDevelopment !block  py-[2vh]">
      <h2 className='Development-h md:p-5'>Development</h2>
    <div className="images flex justify-center md:!py-[8vh]">
      <div className="relative mx-auto flex justify-center  md:w-[70vw]">
        <Swiper
          className="mySwiper"
          navigation={window.innerWidth < 768 ?{ nextEl: ".custom-next",} : false} 
          slidesPerView={window.innerWidth < 768 ? 1 : 4}
          modules={[Navigation]}
          spaceBetween={50}
        >
          <div className="custom-next">
            <img src={arrow} alt="next" />
          </div>
          <SwiperSlide>
            <Link to='/portfolio/development' className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-1.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Link to="/portfolio/development" className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-2.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/portfolio/development' className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-3.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="portfolio/development" className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-1.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/portfolio/development' className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-2.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/portfolio/development' className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-3.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to= '/portfolio/development' className="card" ref={(el) => (imagesRef.current[2] = el)}>
              <video
                src={require("../../../../../Videos/deve-1.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="video"
              ></video>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  );
}

export default Development;
