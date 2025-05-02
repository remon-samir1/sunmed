import React from "react";
import Stories from "react-insta-stories";
import image from '../../Images/media.png'
import logo from '../../Images/story-logo.png'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SingleStory = () => {
  const storyData = [
    { title: "Story 1", image: image, logo: logo },
    { title: "Story 2", image: image, logo: logo },
    { title: "Story 3", image: image, logo: logo },
  ];

  const storyContent = storyData.map((story, index) => ({
    content: () => {
      return (
        <div style={{ width: "100%", height: "100%", position: "relative" , cursor:'pointer' }} key={index}>
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
      );
    },
  }));

  return (

    <div className="relative ">
      <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#636572] absolute top-[0vh] right-[5vw]  md:right-[20vw] flex justify-center items-center">

      <Link to='/portfolio' className="text-white ">
      <Icon icon="dashicons:no" width="25" height="25" />
      </Link>
      </div>
    <div className="md:w-[30vw] w-[95vw]  h-[90vh]  m-auto mt-6 rounded-lg overflow-hidden">
      <Stories stories={storyContent} width="100%" height="100%" />
    </div>
    </div>
  );
};

export default SingleStory;
