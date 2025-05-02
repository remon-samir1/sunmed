import React, { useEffect, useRef } from 'react';
import PortFolioMediaProductionHero from './PortFolioMediaProductionHero/PortFolioMediaProductionHero';
import PortfolioMediaPage from './PortfolioMediaPage/PortfolioMediaPage';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const PortFolioMediaProduction = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView({behavior:'smooth'})
  }
,[])
  return (
    <div>
      <div ref={scrollRef}></div>
      <PortFolioMediaProductionHero/>
      <PortfolioMediaPage/>
      <WithUs/>
      <Footer/>
      
    </div>
  );
}

export default PortFolioMediaProduction;
