import React from "react";
import "./StoryAndHighlights.css";
const StoryAndHighlights = () => {
  return (
    <div className="StoryAndHighlights px-[7vw] py-7">
      <div className="story-container">
        <div className="story">
          <img
            src={require("../../../Images/logo-story.png")}
            alt="story"
            loading="lazy"
          />
        </div>
        <div className="texts">
          <h3>SUNMED AGENCY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet sem condimentum massa
            morbi. Neque arcu dictum imperdiet non accumsan eget quis. Turpis
            nibh cras tortor natoque auctor. Pellentesque ut faucibus
            pellentesque porttitor mi habitant eu. Gravida sed orci in
            pellentesque nascetur.
          </p>
        </div>
      </div>
      <div className=" highlights-container">
        <h3>our Highlights</h3>
        <div className="flex justify-center items-center gap-[5vw] mt-10">
          <div className="highlight">
            <img
              src={require("../../../Images/logo-story.png")}
              alt="story"
              loading="lazy"
            />
            <span>About us</span>
          </div>
          <div className="highlight">
            <img
              src={require("../../../Images/reviews1.png")}
              alt="story"
              loading="lazy"
            />
            
          <span>Reviews</span>
          </div>

          <div className="highlight">
            <img
              src={require("../../../Images/highlight2.png")}
              alt="story"
              loading="lazy"
            />
            <span>Reviews</span>
          </div>
          <div className="highlight">
            <img
              src={require("../../../Images/logo-story.png")}
              alt="story"
              loading="lazy"
            />
          <span>Reviews</span>

          </div>
          <div className="highlight">
            <img
              src={require("../../../Images/logo-story.png")}
              alt="story"
              loading="lazy"
            />
            <span>About us</span>

          </div>
          <div className="highlight">
            <img
              src={require("../../../Images/add-highlight.png")}
              alt="story"
              loading="lazy"
            />
            <span>New</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAndHighlights;
