import React, { useState } from "react";
import "./OverView.css";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SlRocket } from "react-icons/sl";
import WebDevelopment from "./OverViewContent/WebDevelopment/WebDevelopment";
import SocialMediaTab from "./OverViewContent/DigitalMarketingTab";
import SeoTab from "./OverViewContent/EducationTab";
import ProductionTab from "./OverViewContent/ProductionTab";
import EventMangeTab from "./OverViewContent/EventMangeTab";
import DigitalMarketingTab from "./OverViewContent/DigitalMarketingTab";
import EducationTab from "./OverViewContent/EducationTab";

const OverView = () => {
  const [change , setChange] = useState('web')
  return (
    <>
    <div className="h-[50px] bg-[#FAFAFA]"></div>
    <div className="OverView px-[7vw] pt-[15vh]">
      <div className="texts">
        <h2>OVERVIEW</h2>
        <h3 className="uppercase">our services</h3>
      </div>
      <div className="links">
      <button className={`link ${change === 'production' && 'active'}`} onClick={()=>setChange('production')}>
          <Icon
            icon="ix:media-player"
            width="40"
            height="40"
            className="icon"
          />
          <span>Media Production</span>
        </button>
        <button className={`link ${change === 'education' && 'active'}`} onClick={()=>setChange('education')}>
        <Icon icon="gg:notes" width="40" height="40" className="icon"/>
          <span>Education services</span>
        </button>
        <button className={`link ${change === 'web' && 'active'}`} onClick={()=>setChange('web')} >
          <Icon
            icon="icon-park-solid:new-computer"
            className="icon"
            width="40"
            height="40"
          />
          <span>Web Development</span>
        </button>
        <button className={`link ${change === 'digital' && 'active'}`} onClick={()=>setChange('digital')}>
          <Icon
            icon="simple-icons:digitalocean" 
            className="icon"
            width="40"
            height="40"
          />
          <span>Digital Marketing</span>
        </button>
    

        <button className={`link ${change === 'event' && 'active'}`} onClick={()=>setChange('event')}>
          <Icon
            icon="material-symbols:event-note"
            className="icon"
            width="40"
            height="40"
            />

          <span>Event management</span>
        </button>
      </div>
      <div className="mt-14">

      {
        change === 'web' ? <WebDevelopment/> : change === 'digital' ? <DigitalMarketingTab/> : change === 'education' ? <EducationTab/> : change === 'production' ? <ProductionTab/> : change === 'event' && <EventMangeTab/>
      }
      </div>
    </div>
      </>
  );
};

export default OverView;
