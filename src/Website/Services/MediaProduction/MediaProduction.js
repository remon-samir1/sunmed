import React from 'react';
import HeroMediaProduction from './HeroMediaProduction';
import AboutMediaProduction from './AboutMediaProduction/AboutMediaProduction';
import OurMediaProduction from './OurMediaProduction/OurMediaProduction';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const MediaProduction = () => {
  return (
    <div className='overflow-hidden'>
      <HeroMediaProduction/>
      <AboutMediaProduction/>
      <OurMediaProduction/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default MediaProduction;
