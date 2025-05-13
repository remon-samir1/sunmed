import React, { useEffect, useRef } from 'react';
import SocialMediaServDetailsHero from './SocialMediaServDetailsHero/SocialMediaServDetailsHero';
import SocialMediaProjectDetails from './SocialMediaProjectDetails/SocialMediaProjectDetails';
import PortfplioDivider from '../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../SocialDivider/SocialDivider';
import Footer from '../../../../Components/Footer/Footer';

const SocialMediaServDetailsLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
    <div ref={scrollRef}></div>
    <SocialMediaServDetailsHero/>
    <SocialMediaProjectDetails/>
    <PortfplioDivider/>
    <SocialDivider/>
    <Footer/>
    </div>
  );
}

export default SocialMediaServDetailsLanding;
