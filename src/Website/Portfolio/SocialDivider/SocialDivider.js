import React from 'react';
import './SocialDivider.css'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const SocialDivider = () => {
  return (
    <div className='SocialDivider px-[7vw] py-[10vh]">'>
      <div className="insta">
      <div className="text">
        <h5>Follow us on</h5>
        <h4># Instagram</h4>
      </div>
      </div>


      <div className="identity">
        
        <div className="flex items-center justify-center gap-2">
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
        <p>Sunmed.agency@2024.com</p>
      </div>
    </div>
  );
}

export default SocialDivider;
