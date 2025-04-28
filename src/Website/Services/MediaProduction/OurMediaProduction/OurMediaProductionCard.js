import { Icon } from "@iconify/react";
import React from "react";

const OurMediaProductionCard = (props) => {
  return (
    <div className="OurMediaProductionCard">
      <div className="icon-container">
        <Icon icon={props.icon} width="48" height="48" className="icon"/>
      </div>
      <h4>{props.title}</h4>
      <p>
      {props.disc}
      </p>
    </div>
  );
};

export default OurMediaProductionCard;
