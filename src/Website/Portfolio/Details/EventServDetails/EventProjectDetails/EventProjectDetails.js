import React from "react";

import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const EventProjectDetails = () => {
  return (
    <div className="EducationDetailsofProject py-10 px-[7vw]">
      <div className="text">
        <h3> EVENT MANAGEMENT DETAILS</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna neque nibh pretium hac eu
          turpis posuere. Erat sem adipiscing non vitae lacus pellentesque justo
          est. Non eu eu aliquet cras in a. Pharetra neque eleifend nulla
          adipiscing faucibus feugiat interdum nibh. Commodo erat nullam
          pharetra at mauris tincidunt lacus turpis elementum.
        </p>
      </div>
      <div className="imges">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="img" key={index}>
            <img
              src={require("../../../../../Images/educationProject.png")}
              alt="education"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-7">
        <button className="normal-btn">LOAD MORE</button>
      </div>




      <div className="details gap-[7vw] md:gap-[10vw]">
          <div className="detail">
            <h5>Published</h5>
            <h4>September 17, 2022</h4>
          </div>
          <div className="detail">
            <h5>Category</h5>
            <h4>Branding, Graphic Design</h4>
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

export default EventProjectDetails;
