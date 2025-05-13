import React, { useEffect, useRef } from 'react';
import HeroMediaProduction from './HeroMediaProduction';
import AboutMediaProduction from './AboutMediaProduction/AboutMediaProduction';
import OurMediaProduction from './OurMediaProduction/OurMediaProduction';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';
import MediaProductionPortfolioPart from './MediaProductionPortfolioPart/MediaProductionPortfolioPart';

const MediaProduction = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>

      <HeroMediaProduction/>
      <AboutMediaProduction/>
      <MediaProductionPortfolioPart/>
      <OurMediaProduction/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default MediaProduction;
