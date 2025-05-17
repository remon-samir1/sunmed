


import React, { useEffect, useState, useRef } from "react";
import "./EducationDetailsofProject.css";
import { Axios } from "../../../../../Components/Helpers/Axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EducationDetailsofProject = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const imagesRef = useRef([]);
  const videosRef = useRef([]);
  const buttonRef = useRef(null);
  const detailsRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    Axios.get("/projects").then((data) => setData(data.data.data));
  }, []);

  const filter = data.filter((data) => data.id == id);
  const formattedDate = new Date(filter[0]?.created_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const isImage = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);
  const Images = filter[0]?.attachments || [];
  const imagesToDisplay = showAll ? Images : Images.slice(0, 6);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (descriptionRef.current) {
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }

    if (detailsRef.current) {
      gsap.from(detailsRef.current.children, {
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  useEffect(() => {
    if (imagesRef.current.length > 0) {
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.fromTo(
            img,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: img,
                start: "top 75%",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            }
          );
        }
      });
    }

    if (videosRef.current.length > 0) {
      videosRef.current.forEach((video, index) => {
        if (video) {
          gsap.fromTo(
            video,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: video,
                start: "top 80%",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            }
          );
        }
      });
    }
  }, [showAll, Images]);

  return (
    <div className="EducationDetailsofProject py-10 px-[7vw]">
      <div className="text">
        <h3 className="uppercase" ref={titleRef}>
          {filter[0]?.title}
        </h3>
        <p ref={descriptionRef}>{filter[0]?.description}</p>
      </div>

      <div className="imges">
        {imagesToDisplay?.map((data, index) => {
          if (isImage(data)) {
            return (
              <div
                className="img"
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
              >
                <img src={data} alt="media" loading="lazy" />
              </div>
            );
          } else if (isVideo(data)) {
            return (
              <div
                className="img"
                key={index}
                ref={(el) => (videosRef.current[index] = el)}
              >
                <video src={data} controls className="w-full rounded-lg" />
              </div>
            );
          }
          return null;
        })}
      </div>

      {Images.length > 6 && (
        <div className="flex justify-center items-center py-7">
          <button
            ref={buttonRef}
            onClick={() =>{ setShowAll((prev) => !prev)
            showAll &&  titleRef.current.scrollIntoView()
            }}
            className="normal-btn"
          >
            {showAll ? "SHOW LESS" : "LOAD MORE"}
          </button>
        </div>
      )}

      <div
        className="details gap-[7vw] md:gap-[10vw]"
        ref={detailsRef}
      >
        <div className="detail">
          <h5>Published</h5>
          <h4>{formattedDate}</h4>
        </div>
        <div className="detail">
          <h5>Category</h5>
          <h4>{filter[0]?.service.title}</h4>
        </div>
        <div className="detail">
          <h5>Share</h5>
          <div className="social-links flex-wrap md:flex-nowrap !justify-start md:justify-center ">
            <div className="icon-container">
              <FaFacebookF className="icon" />
            </div>
            <div className="icon-container">
              <IoLogoTwitter className="icon" />
            </div>
            <div className="icon-container">
              <IoLogoInstagram className="icon" />
            </div>
            <div className="icon-container">
              <FaLinkedinIn className="icon" />
            </div>
            <div className="icon-container">
              <FaBehance className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsofProject;
