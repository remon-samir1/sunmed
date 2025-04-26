import React from "react";
import "./OverView.css";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SlRocket } from "react-icons/sl";

const OverView = () => {
  return (
    <div className="OverView px-[7vw] pt-[15vh]">
      <div className="texts">
        <h2>OVERVIEW</h2>
        <h3>our services</h3>
      </div>
      <div className="links">
        <NavLink className='link' to="web">
          <Icon
            icon="streamline:browser-website-1"
            className="icon"
            width="40"
            height="40"
          />
          <span>Web Development</span>
        </NavLink>
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

      <Outlet />
      </div>
    </div>
  );
};

export default OverView;
