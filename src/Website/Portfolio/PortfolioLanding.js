import React from 'react';
import PortfolioHero from './PoerfolioHero/PortfolioHero';
import StoryAndHighlights from './Story&Highlights/StoryAndHighlights';
import PortfolioWorks from './PortfolioWorks/PortfolioWorks';
import PortfplioDivider from './PortfplioDivider/PortfplioDivider';
import SocialDivider from './SocialDivider/SocialDivider';
import Footer from '../../Components/Footer/Footer';

const PortfolioLanding = () => {
  return (
    <div className='overflow-hidden'>
      <PortfolioHero/>
      <StoryAndHighlights/>
      <PortfolioWorks/>
       <PortfplioDivider/>
       <SocialDivider/>
       <Footer/>
    </div>
  );
}

export default PortfolioLanding;
