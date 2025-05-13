import React from 'react';
import './LoadScreen.css'
import logo from "../../Images/Logo.svg";

const LoadScreen = () => {
  return (
    <div className='LoadScreen'>
      <img src={logo} alt="Sunmed"/>
    </div>
  );
}

export default LoadScreen;
