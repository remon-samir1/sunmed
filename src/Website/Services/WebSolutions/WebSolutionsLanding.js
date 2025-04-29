import React from 'react';
import WebSolutionsHero from './WebSolutionsHero/WebSolutionsHero';
import AboutWebSolution from './AboutWebSolution/AboutWebSolution';
import PhaseDevelopment from './PhaseDevelopment/PhaseDevelopment';
import PostLaunch from './PostLaunch/PostLaunch';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const WebSolutionsLanding = () => {
  return (
    <div className='overflow-hidden'>
      <WebSolutionsHero/>
      <AboutWebSolution/>
      <PhaseDevelopment/>
      <PostLaunch/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default WebSolutionsLanding;
