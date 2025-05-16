import React, { useEffect, useState } from "react";
import "./AllWorks.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import arrow from "../../../../../Images/arrow.svg";
import { Axios } from "../../../../../Components/Helpers/Axios";
import SkeletonShow from "../../../../../Components/Skeleton/Skeleton";

const AllWorks = () => {
  const [resize, setResize] = useState(window.innerWidth);
  //  GET DATA
  const [data, setData] = useState([]);
  const [skeleton,setSkeleton] = useState(true)

    useEffect(() => {
      Axios.get("/projects").then((data) =>{ 
        setData(data.data.data)
      setSkeleton(false)
      });
    }, []);

  useEffect(() => {
    const resizeWidth = () => {
      setResize(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, [window.innerWidth]);
  return (
    <div className="AllWorks">

      <Swiper
      autoplay
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={"auto"}
        centeredSlides={resize > 450 ? false : true}
        modules={[Navigation]}
        spaceBetween={40}
        className="t-swiper"
      >
        {
        skeleton ?   
        Array.from({length:4}).map(()=>(

        <SwiperSlide>

        <SkeletonShow height="250px" width="300px" length={1}  />
        </SwiperSlide>
        ))
  
:  data.length == 0 ? (
    <div className="text-center">
      <p className="text-gray-500 capitalize font-semibold text-[25px] ">
        no projects Added
      </p>
    </div>
  ) : 
        
        data.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="work">
              <div className="details">
                <div className="text">
                  <p>{work.title}</p>
                  <p>{work.service.title}</p>
                </div>
                <Link to={work.link} className="icon-container">
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="32"
                    height="32"
                    className="icon"
                  />
                </Link>
              </div>
              <img
                src={work.attachments[0]}
                alt={`work-${index + 1}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllWorks;
