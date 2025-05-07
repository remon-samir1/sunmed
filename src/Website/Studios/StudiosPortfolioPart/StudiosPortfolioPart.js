import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./StudiosPortfolioPart.css";

const StudiosPortfolioPart = () => {
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
  const works = [
    {
      image: "digital-test.png",
      title: "Graphic",
      subtitle: "Fimilor experience",
      link: "/work/1",
    },
    {
      image: "work-2.png",
      title: "Design",
      subtitle: "UX/UI project",
      link: "/work/2",
    },
    {
      image: "work-3.png",
      title: "Animation",
      subtitle: "Motion graphics",
      link: "/work/3",
    },
    {
      image: "work-4.png",
      title: "Development",
      subtitle: "Frontend app",
      link: "/work/4",
    },
    {
      image: "work-5.png",
      title: "Branding",
      subtitle: "Identity design",
      link: "/work/5",
    },
    {
      image: "work-6.png",
      title: "Photography",
      subtitle: "Product shots",
      link: "/work/6",
    },
  ];

  return (
    <div className="StudiosPortfolioPart">
      <h3 className="pl-[5vw] py-7">OUR PORTFOLIO</h3>
      <div className="AllWorks">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={resize > 450 ? false : true}
          spaceBetween={20}
          className="t-swiper"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="work">
                <div className="details">
                  <div className="text">
                    <p>{work.title}</p>
                    <p>{work.subtitle}</p>
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
                  src={require(`../../../Images/${work.image}`)}
                  alt={`work-${index + 1}`}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center py-7">

      <button className="normal-btn !rounded-none">
        SEE OUR PORTFOLIO
      </button>
      </div>
    </div>
  );
};

export default StudiosPortfolioPart;
