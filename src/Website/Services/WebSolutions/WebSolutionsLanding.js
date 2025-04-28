import React from 'react';
import WebSolutionsHero from './WebSolutionsHero/WebSolutionsHero';
import AboutWebSolution from './AboutWebSolution/AboutWebSolution';

const WebSolutionsLanding = () => {
  return (
    <div className='overflow-hidden'>
      <WebSolutionsHero/>
      <AboutWebSolution/>
    </div>
  );
}

export default WebSolutionsLanding;
