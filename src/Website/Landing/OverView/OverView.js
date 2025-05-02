import React, { useState } from "react";
import "./OverView.css";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SlRocket } from "react-icons/sl";
import WebDevelopment from "./OverViewContent/WebDevelopment/WebDevelopment";
import SocialMediaTab from "./OverViewContent/SocialMediaTab";
import SeoTab from "./OverViewContent/SeoTab";
import ProductionTab from "./OverViewContent/ProductionTab";
import MediaBuyingTab from "./OverViewContent/MediaBuyingTab";

const OverView = () => {
  const [change , setChange] = useState('web')
  return (
    <>
    <div className="h-[50px] bg-[#FAFAFA]"></div>
    <div className="OverView px-[7vw] pt-[15vh]">
      <div className="texts">
        <h2>OVERVIEW</h2>
        <h3>our services</h3>
      </div>
      <div className="links">
        <button className={`link ${change === 'web' && 'active'}`} onClick={()=>setChange('web')} >
          <Icon
            icon="streamline:browser-website-1"
            className="icon"
            width="40"
            height="40"
          />
          <span>Web Development</span>
        </button>
        <button className={`link ${change === 'social' && 'active'}`} onClick={()=>setChange('social')}>
          <Icon
            icon="hugeicons:marketing"
            className="icon"
            width="40"
            height="40"
          />
          <span>Social Media Marketing</span>
        </button>
        <button className={`link ${change === 'seo' && 'active'}`} onClick={()=>setChange('seo')}>
          <SlRocket className="icon" />
          <span>SEO</span>
        </button>
        <button className={`link ${change === 'production' && 'active'}`} onClick={()=>setChange('production')}>
          <Icon
            icon="ix:media-player"
            width="40"
            height="40"
            className="icon"
          />
          <span>Media Production</span>
        </button>
        <button className={`link ${change === 'buying' && 'active'}`} onClick={()=>setChange('buying')}>
          <Icon
            icon="streamline:browser-website-1"
            className="icon"
            width="40"
            height="40"
            />

          <span>Media Buying</span>
        </button>
      </div>
      <div className="mt-14">

      {
        change === 'web' ? <WebDevelopment/> : change === 'social' ? <SocialMediaTab/> : change === 'seo' ? <SeoTab/> : change === 'production' ? <ProductionTab/> : change === 'buying' && <MediaBuyingTab/>
      }
      </div>
    </div>
      </>
  );
};

export default OverView;
