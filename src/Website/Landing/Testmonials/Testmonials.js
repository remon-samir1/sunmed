import React, { useEffect, useState } from "react";
import "./Testmonials.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TestmonialBox from "./TestmonialBox";
const Testmonials = () => {
  const [resize, setResize] = useState("");
  useEffect(() => {
    const resizeWidth = () => {
      setResize(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, [window.innerWidth]);
  console.log(resize);
  return (
    <div className="Testmonials  ">
      <div className="text ">
        <h3>testmonials</h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum lectus.
        </p>
      </div>
      <div className="t-container mt-[10vh]">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={resize > 450 ? false : true}
          pagination={true}
          spaceBetween={40}
          modules={[Pagination]}
          className="t-swiper"
        >
          <SwiperSlide>
            <TestmonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestmonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestmonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestmonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestmonialBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;
