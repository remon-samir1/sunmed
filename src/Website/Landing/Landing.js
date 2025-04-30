import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AboutUs from './AboutUs/AboutUs';
import StartProject from './StartProject/StartProject';
import OverView from './OverView/OverView';
import LatestInsights from './LatestInsights/LatestInsights';
import Divider from './Divider/Divider';
import WithUs from './WithUs/WithUs';
import Footer from '../../Components/Footer/Footer';

const Landing = () => {
  return (
    <div className=''>
      <HeroSection/>
      <AboutUs/>
      <StartProject/>
      <OverView/>
      <LatestInsights/>
      <Divider/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default Landing;
