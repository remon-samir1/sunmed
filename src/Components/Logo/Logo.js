import React from "react";
import logo from "../../Images/Logo.svg";
const Logo = (props) => {
  return <img src={logo} alt="Sunmed" width={props.width}/>;
};

export default Logo;
