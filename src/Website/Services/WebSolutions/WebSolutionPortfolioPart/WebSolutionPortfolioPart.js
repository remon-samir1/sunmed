import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Axios } from "../../../../Components/Helpers/Axios";
import SkeletonShow from "../../../../Components/Skeleton/Skeleton";


const WebSolutionPortfolioPart = () => {

  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    Axios.get("/projects").then((data) => {
      setData(data.data.data);
      setSkeleton(false);
    });
  }, []);
  const filter = data.filter((data) => [9,10,11,12,13,14].includes(data.service.id));










  const [resize, setResize] = useState(window.innerWidth);
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
    <div className="DigitalMarketingLandingPortfolioPart">
      <h3 className="pl-[5vw] py-7">OUR PORTFOLIO</h3>
      <div className="AllWorks">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={resize > 450 ? false : true}
          spaceBetween={20}
          className="t-swiper"
        >
  {
          skeleton ? (
            <SkeletonShow height="250px" width="300px" length={3} />
          ) : filter.length == 0 ? (
            <div className="text-center">
              <p className="text-gray-500 capitalize font-semibold text-[25px] ">
                no projects Added
              </p>
            </div>
          ) : 
          filter?.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="work">
                <div className="details">
                  <div className="text">
                    <p>{work.title}</p>
                    <p>{work.service.title}</p>
                  </div>
                  <Link to={`/portfolio/development/details/${work.id}`} className="icon-container">
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
      <div className="text-center py-7">

      <Link to='/portfolio/development' className="normal-btn !rounded-none">
        SEE OUR PORTFOLIO
      </Link>
      </div>
    </div>
  );
};

export default WebSolutionPortfolioPart;
