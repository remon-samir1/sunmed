import React, { useEffect, useRef } from 'react';
import SocialMediaHero from './SocialMediaHero/SocialMediaHero';
import AboutSocialMedia from './AboutSocialMedia/AboutSocialMedia';
import SocialMediaDetails from './SocialMediaDetails/SocialMediaDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const SocialMediaLanding = () => {
 const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>

      <SocialMediaHero/>
      <AboutSocialMedia/>
      <SocialMediaDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default SocialMediaLanding;
