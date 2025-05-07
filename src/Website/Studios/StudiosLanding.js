import React from 'react';
import StudioHero from './StudioHero/StudioHero';
import AboutStudios from './AboutStudios/AboutStudios';

const StudiosLanding = () => {
  return (
    <div className='overflow-hidden'>
      <StudioHero/>
      <AboutStudios/>
    </div>
  );
}

export default StudiosLanding;
