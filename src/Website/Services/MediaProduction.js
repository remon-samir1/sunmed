import React from 'react';
import HeroMediaProduction from './MediaProduction/HeroMediaProduction';
import AboutMediaProduction from './MediaProduction/AboutMediaProduction/AboutMediaProduction';
import OurMediaProduction from './MediaProduction/OurMediaProduction/OurMediaProduction';
import WithUs from '../Landing/WithUs/WithUs';
import Footer from '../../Components/Footer/Footer';

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
