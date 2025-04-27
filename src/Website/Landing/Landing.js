import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AboutUs from './AboutUs/AboutUs';
import StartProject from './StartProject/StartProject';
import OverView from './OverView/OverView';
import LatestInsights from './LatestInsights/LatestInsights';
import Divider from './Divider/Divider';
import WithUs from './WithUs/WithUs';

const Landing = () => {
  return (
    <div className='overflow-auto'>
      <HeroSection/>
      <AboutUs/>
      <StartProject/>
      <OverView/>
      <LatestInsights/>
      <Divider/>
      <WithUs/>
    </div>
  );
}

export default Landing;
