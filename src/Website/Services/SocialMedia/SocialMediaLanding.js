import React from 'react';
import SocialMediaHero from './SocialMediaHero/SocialMediaHero';
import AboutSocialMedia from './AboutSocialMedia/AboutSocialMedia';
import SocialMediaDetails from './SocialMediaDetails/SocialMediaDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const SocialMediaLanding = () => {
  return (
    <div className='overflow-hidden'>
      <SocialMediaHero/>
      <AboutSocialMedia/>
      <SocialMediaDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default SocialMediaLanding;
