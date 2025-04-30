import React from 'react';
import PortfolioHero from './PoerfolioHero/PortfolioHero';
import StoryAndHighlights from './Story&Highlights/StoryAndHighlights';
import PortfolioWorks from './PortfolioWorks/PortfolioWorks';

const PortfolioLanding = () => {
  return (
    <div>
      <PortfolioHero/>
      <StoryAndHighlights/>
      <PortfolioWorks/>
      
    </div>
  );
}

export default PortfolioLanding;
