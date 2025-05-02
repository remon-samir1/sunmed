import React from 'react';
import PortFolioMediaProductionHero from './PortFolioMediaProductionHero/PortFolioMediaProductionHero';
import PortfolioMediaPage from './PortfolioMediaPage/PortfolioMediaPage';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const PortFolioMediaProduction = () => {
  return (
    <div>
      <PortFolioMediaProductionHero/>
      <PortfolioMediaPage/>
      <WithUs/>
      <Footer/>
      
    </div>
  );
}

export default PortFolioMediaProduction;
