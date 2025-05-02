import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AboutUs from './AboutUs/AboutUs';
import StartProject from './StartProject/StartProject';
import OverView from './OverView/OverView';
import LatestInsights from './LatestInsights/LatestInsights';
import Divider from './Divider/Divider';
import WithUs from './WithUs/WithUs';
import Footer from '../../Components/Footer/Footer';
import HighlightsStories from '../../Components/Highlight/SingleStory';

const Landing = () => {
  return (
    <div className='overflow-hidden'>
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
