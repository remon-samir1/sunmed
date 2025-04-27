import React, { useState } from "react";
import "./OverView.css";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SlRocket } from "react-icons/sl";
import WebDevelopment from "./WebDevelopment/WebDevelopment";

const OverView = () => {
  const [change , setChange] = useState('web')
  return (
    <div className="OverView px-[7vw] pt-[15vh]">
      <div className="texts">
        <h2>OVERVIEW</h2>
        <h3>our services</h3>
      </div>
      <div className="links">
        <button className={`link ${change === 'web' && 'active'}`}>
          <Icon
            icon="streamline:browser-website-1"
            className="icon"
            width="40"
            height="40"
          />
          <span>Web Development</span>
        </button>
        <NavLink className='link' to="/s">
          <Icon
            icon="hugeicons:marketing"
            className="icon"
            width="40"
            height="40"
          />
          <span>Social Media Marketing</span>
        </NavLink>
        <NavLink className='link' to="/s">
          <SlRocket className="icon" />
          <span>SEO</span>
        </NavLink>
        <NavLink className='link' to="/s">
          <Icon
            icon="ix:media-player"
            width="40"
            height="40"
            className="icon"
          />
          <span>Media Production</span>
        </NavLink>
        <NavLink className='link' to="/t">
          <Icon
            icon="streamline:browser-website-1"
            className="icon"
            width="40"
            height="40"
          />

          <span>Media Buying</span>
        </NavLink>
      </div>
      <div className="mt-14">

      {
        change === 'web' && <WebDevelopment/>
      }
      </div>
    </div>
  );
};

export default OverView;
