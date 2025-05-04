import React, { useEffect, useRef } from 'react';
import HeroMediaProduction from './HeroMediaProduction';
import AboutMediaProduction from './AboutMediaProduction/AboutMediaProduction';
import OurMediaProduction from './OurMediaProduction/OurMediaProduction';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

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
      <OurMediaProduction/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default MediaProduction;
