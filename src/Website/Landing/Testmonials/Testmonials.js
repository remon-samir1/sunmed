import React from "react";
import './Testmonials.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TestmonialBox from "./TestmonialBox";
const Testmonials = () => {
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

      <Swiper  slidesPerView={window.innerWidth > 600 ?  3 : 1} centeredSlides={true} pagination={true}  spaceBetween={10} modules={[Pagination]} className="t-swiper">
        <SwiperSlide>
 <TestmonialBox/>

        </SwiperSlide>
      
        <SwiperSlide>
 <TestmonialBox/>

        </SwiperSlide>
      
        <SwiperSlide>
 <TestmonialBox/>

        </SwiperSlide>
      
        <SwiperSlide>
 <TestmonialBox/>

        </SwiperSlide>
      
        <SwiperSlide>
 <TestmonialBox/>

        </SwiperSlide>
      
    
      </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;
