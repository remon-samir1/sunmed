import React from "react";
import "./PortfolioMediaPage.css";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const PortfolioMediaPage = () => {
  return (
    <div className="PortfolioMediaPage py-[10vh]">
      <div className="content px-[7vw] py-[10vh]">
        <div className="images">
          <div className="img">
            <img
              src={require("../../../../Images/media.png")}
              alt="media"
              loading="lazy"
            />
          </div>
          <div className="img">
            <img
              src={require("../../../../Images/media-2.png")}
              alt="media"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text">
          <h3>Media production</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Urna neque nibh pretium hac
            eu turpis posuere. Erat sem adipiscing non vitae lacus pellentesque
            justo est. Non eu eu aliquet cras in a. Pharetra neque eleifend
            nulla adipiscing faucibus feugiat interdum nibh. Commodo erat nullam
            pharetra at mauris tincidunt lacus turpis elementum.
          </p>
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
            <div className="social-links">
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

      <div className="videos px-[7vw] md:mt-[10vh]">
        <div className="video">
          <video src={require("../../../../Videos/media-1.mp4")} controls></video>
          
        </div>
        <div className="video">
          <video
            src={require("../../../../Videos/media-2.mp4")}
            controls
          ></video>
        </div>
        <div className="video hidden md:inline-block">
          <video src={require("../../../../Videos/media-1.mp4")} controls></video>
          
        </div>
      </div>
    </div>
  );
};

export default PortfolioMediaPage;
