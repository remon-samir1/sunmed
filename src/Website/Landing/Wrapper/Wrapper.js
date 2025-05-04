import { Icon } from "@iconify/react";
import React from "react";
import './Wrapper.css'
const Wrapper = () => {
  return (
    <div className="Wrapper">
      <div className="items-container">

      <div className="item">
        <Icon
          icon="eos-icons:project-outlined"
          width="64"
          height="64"
          className="icon"
          />
        <div className="text">
          <span>988+</span>
          <span>Project compelete</span>
        </div>
      </div>
      <div className="item">
        <Icon
          icon="material-symbols:rewarded-ads-outline"
          width="64"
          height="64" className="icon"
          />
        <div className="text">
          <span>150+</span>
          <span>Win awards</span>
        </div>
      </div>
      <div className="item">
        <Icon icon="carbon:customer" width="64" height="64"  className="icon"/>
        <div className="text">
          <span>225+</span>
          <span>Customers</span>
        </div>
      </div>
      <div className="item">
      <Icon icon="garden:face-very-happy-stroke-12" width="64" height="64"  className="icon"/>
        <div className="text">
          <span>321+</span>
          <span>Employees</span>
        </div>
      </div>
          </div>
    </div>
  );
};

export default Wrapper;
