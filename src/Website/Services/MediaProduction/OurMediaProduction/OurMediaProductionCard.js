import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const OurMediaProductionCard = (props) => {
  return (
    <Link to={props.link} className="OurMediaProductionCard">
      <div className="icon-container">
        <Icon icon={props.icon} width="48" height="48" className="icon"/>
      </div>
      <h4>{props.title}</h4>
      <p>
      {props.disc}
      </p>
    </Link>
  );
};

export default OurMediaProductionCard;
