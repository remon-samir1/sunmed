import React from "react";
// import Swiper from 'swiper';
import image from "../../Images/media.png";
import logo from "../../Images/story-logo.png";
import Stories from "react-insta-stories";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import arrow from '../../Images/arrow.svg'

import "./HighLights.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HighLights = () => {
  const storyData = [
    { title: "Sunmed Story ", image: image, logo: logo },
    { title: "Sunmed Story", image: image, logo: logo },
    { title: "Sunmed Story", image: image, logo: logo },
  ];

  const storyContent = storyData.map((story, index) => ({
    content: () => {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            cursor: "pointer",
          }}
          key={index}
        >
          <img
            src={story.image}
            alt="blurred background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(5px) brightness(0.6)",
              zIndex: 0,
            }}
          />
          <img
            src={story.image}
            alt="main story"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              zIndex: 1,
              borderRadius: 10,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 10px",
              borderRadius: "20px",
              zIndex: 2,
            }}
          >
            <img
              src={story.logo}
              alt="profile"
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            />
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              {story.title}
            </span>
          </div>
        </div>
      );
    },
  }));
  return (
    <div className="relative !bg-transparent pl-[2vw] pr-[8vw]">
      {/* <div className="w-[2.8rem] z-50 h-[2.8rem] rounded-full bg-[#636572] absolute hidden  md:top-[0vh]   md:right-[20vw] md:flex justify-center items-center">
        <Link to="/portfolio" className="text-white ">
          <Icon icon="dashicons:no" width="25" height="25" />
        </Link>
      </div> */}
      <Swiper
      slidesPerView={window.innerWidth > 768 ? 3 : 1}
        navigation={{ nextEl: ".custom-next",}}
        modules={[Navigation]}
        className="highlight-Swiper"
      >
          <div className="custom-next">
              <img src={arrow} alt="next" />
            </div>
        <SwiperSlide className="">
          <div className=" md:w-[10vw] w-[95vw]  h-[70vh]  m-auto mt-6 rounded-lg overflow-hidden">
            <Stories className='z-50' stories={storyContent} width="100%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="z-50 md:w-[20vw] w-[95vw]  h-[70vh]  m-auto mt-6 rounded-lg overflow-hidden">
            <Stories stories={storyContent} width="100%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[20vw] w-[95vw]  h-[70vh]   m-auto mt-6 rounded-lg overflow-hidden">
            <Stories stories={storyContent} width="100%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[20vw] w-[95vw]  h-[70vh]  m-auto mt-6 rounded-lg overflow-hidden">
            <Stories stories={storyContent} width="100%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[20vw] w-[95vw]  h-[70vh]  m-auto mt-6 rounded-lg overflow-hidden">
            <Stories stories={storyContent} width="100%" height="100%" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HighLights;
