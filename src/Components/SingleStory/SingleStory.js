


import React, { useRef } from "react";
import Stories from "react-insta-stories";
import image from '../../Images/media.png';
import logo from '../../Images/story-logo.png';
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SingleStory = () => {
  const navigate = useNavigate();
  const storyWrapperRef = useRef(null);
  const bgRef = useRef(null);
  const exitBtnRef = useRef(null); 

  const storyData = [
    { title: "Sunmed Story ", image: image, logo: logo },
    { title: "Sunmed Story", image: image, logo: logo },
    { title: "Sunmed Story", image: image, logo: logo },
  ];

  const storyContent = storyData.map((story, index) => ({
    content: () => (
      <div style={{ width: "100%", height: "100%", position: "relative", cursor: 'pointer' }} key={index}>
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
          <span style={{ color: "#fff", fontWeight: "bold" }}>{story.title}</span>
        </div>
      </div>
    ),
  }));

  useGSAP(() => {
    gsap.from(storyWrapperRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 20,
      ease: "linear",
      repeat: -1
    });
  });

  const handleExit = () => {
    const tl = gsap.timeline({
      onComplete: () => navigate("/portfolio")
    });

    tl.to([storyWrapperRef.current, exitBtnRef.current], {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.0
    });
  };

  return (
    <div className="relative linear-bg h-[100vh] pt-6" ref={bgRef}>
      <div
        ref={exitBtnRef}
        className="w-[2.8rem] z-50 h-[2.8rem] rounded-full bg-[#636572] absolute hidden  md:top-6   md:right-[20vw] md:flex justify-center items-center"
      >
        <button onClick={handleExit} className="text-white">
          <Icon icon="dashicons:no" width="25" height="25" />
        </button>
      </div>

      <div ref={storyWrapperRef} className="md:w-[30vw] w-[95vw] h-[90vh] m-auto  rounded-lg overflow-hidden">
        <Stories stories={storyContent} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default SingleStory;
