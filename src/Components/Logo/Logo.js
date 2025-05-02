import React from "react";
import logo from "../../Images/Logo.svg";
import { Link } from "react-router-dom";
const Logo = (props) => {
  return <Link to='/'> <img src={logo} alt="Sunmed" width={props.width} className={props.class}/></Link>;
};

export default Logo;
