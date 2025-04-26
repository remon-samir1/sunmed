import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AboutUs from './AboutUs/AboutUs';
import StartProject from './StartProject/StartProject';
import OverView from './OverView/OverView';
import LatestInsights from './LatestInsights/LatestInsights';

const Landing = () => {
  return (
    <div className='overflow-auto'>
      <HeroSection/>
      <AboutUs/>
      <StartProject/>
      <OverView/>
      <LatestInsights/>
    </div>
  );
}

export default Landing;
