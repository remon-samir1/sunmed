import React from 'react';
import SeoHero from './SeoHero/SeoHero';
import AboutSeo from './AboutSeo/AboutSeo';
import SeoDivider from './SeoDivider/SeoDivider';
import PhaseSeo from './PhaseSeo/PhaseSeo';
import PhaseGoogle from './PhaseGoogle/PhaseGoogle';
import SeoDetails from './SeoDetails/SeoDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const SeoLanding = () => {
  return (
    <div className='overflow-hidden'>
      <SeoHero/>
      <AboutSeo/>
      <SeoDivider/>
      <PhaseSeo/>
      <PhaseGoogle/>
      <SeoDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default SeoLanding;
