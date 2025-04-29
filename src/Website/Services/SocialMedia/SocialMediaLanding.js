import React from 'react';
import SocialMediaHero from './SocialMediaHero/SocialMediaHero';
import AboutSocialMedia from './AboutSocialMedia/AboutSocialMedia';

const SocialMediaLanding = () => {
  return (
    <div className='overflow-hidden'>
      <SocialMediaHero/>
      <AboutSocialMedia/>
    </div>
  );
}

export default SocialMediaLanding;
