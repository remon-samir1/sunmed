import React from "react";
import "./OurPartners.css";
import { Icon } from "@iconify/react";
const OurPartners = () => {
  return (
    <div className="OurPartners">
      <div className="content">
        <h3>our partners</h3>
        <div className="items-container">
       {Array.from({length:6}).map((_,key)=>(
                  <div className="item" key={key}>
                  <Icon icon="tdesign:logo-cnb-filled" width="36" height="36" className='icon' />
                  <span>
                  Lorem ipsim
                  </span>
                  </div>
       ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
