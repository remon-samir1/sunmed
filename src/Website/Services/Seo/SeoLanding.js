import React from 'react';
import SeoHero from './SeoHero/SeoHero';
import AboutSeo from './AboutSeo/AboutSeo';
import SeoDivider from './SeoDivider/SeoDivider';
import PhaseSeo from './PhaseSeo/PhaseSeo';
import PhaseGoogle from './PhaseGoogle/PhaseGoogle';

const SeoLanding = () => {
  return (
    <div className='overflow-hidden'>
      <SeoHero/>
      <AboutSeo/>
      <SeoDivider/>
      <PhaseSeo/>
      <PhaseGoogle/>
    </div>
  );
}

export default SeoLanding;
