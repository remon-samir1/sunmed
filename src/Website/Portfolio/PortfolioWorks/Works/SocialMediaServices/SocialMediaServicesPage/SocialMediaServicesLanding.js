import React, { useEffect, useRef } from 'react';
import SocialMediaServHero from './SocialMediaServHero/SocialMediaServHero';
import AvalibleSocialMediaServices from './AvalibleSocialMediaServices/AvalibleSocialMediaServices';
import SelectedSocialMediaServices from './SelectedSocialMediaServices/SelectedSocialMediaServices';
import PortfplioDivider from '../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../Components/Footer/Footer';

const SocialMediaServicesLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      <SocialMediaServHero/>
      <AvalibleSocialMediaServices/>
    <SelectedSocialMediaServices/>
    <PortfplioDivider/>
    <SocialDivider/>
    <Footer/>
    </div>
  );
}

export default SocialMediaServicesLanding;
