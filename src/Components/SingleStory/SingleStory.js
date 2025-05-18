
import React, { useEffect, useRef, useState } from "react";
import Stories from "react-insta-stories";
import Axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const StoryPage = () => {
  const [storyData, setStoryData] = useState([]);
    const storyWrapperRef = useRef(null);
  const bgRef = useRef(null);
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
      repeat: -1,
    });
  });
  useEffect(() => {
    Axios.get("https://sunmedagency.com/api/stories")
      .then((res) => {
        const stories = res.data?.data;

        const formattedStories = stories.flatMap((story) =>
          (Array.isArray(story.attachments) ? story.attachments : []).map(
            (url) => ({
              content: () => (
                <video
                  src={url}
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex:'10'
                  }}
                />
              ),
            })
          )
        );

        setStoryData(formattedStories);
      })
      .catch((err) => {
        console.error("Error loading stories:", err);
      });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "98dvh",
        position: "relative",
      }}
      ref={bgRef}
      className="px-[7vw] !rounded-3xl  py-[2vh] pb-[2vh]  md:px-[10vw] z-50 !overflow-hidden linear-bg "
    >
        {storyData.length > 0 &&
        <>
      <div className="absolute top-[5%] left-[12%] z-50 flex items-center gap-3">
        <div className="w-[50px] h-[50px]">
          <img
            src={require("../../Images/logo-story.png")}
            alt="story"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white font-bold uppercase">Sunmed Story</span>
      </div>
      <Link to='/portfolio' className='absolute top-[3vh] right-[1vw] md:right-[5vw] z-50 md:w-[35px] w-[25px] h-[25px]  md:h-[35px] rounded-full bg-gray-700  flex justify-center items-center'>
      <IoCloseSharp className="text-white md:w-[25px] w-[15px] md:h-[25px] h-[15px]"/>
      </Link>
</>
}
      {storyData.length > 0 ? (
        <Stories
        stories={storyData}
          defaultInterval={8000}
          width="100%"
          height="100vh"
          className='rounded-xl overflow-hidden'
          loop
        />
      ) : (
        <p style={{ color: "white", textAlign: "center", paddingTop: "50dvh" }}>
          Loading stories...
        </p>
      )}
    </div>
  );
};

export default StoryPage;
