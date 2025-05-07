import React from 'react';
import StudioHero from './StudioHero/StudioHero';
import AboutStudios from './AboutStudios/AboutStudios';
import StudiosPortfolioPart from './StudiosPortfolioPart/StudiosPortfolioPart';
import StudioDetails from './StudioDetails/StudioDetails';
import WithUs from '../Landing/WithUs/WithUs';
import Footer from '../../Components/Footer/Footer';

const StudiosLanding = () => {
  return (
    <div className='overflow-hidden'>
      <StudioHero/>
      <AboutStudios/>
      <StudiosPortfolioPart/>
      <StudioDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default StudiosLanding;
