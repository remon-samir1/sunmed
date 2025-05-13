 import React, { useEffect, useRef } from 'react';
import WebDevHero from './WebDevHero/WebDevHero';
import SelectedWebDevServices from './SelectedWebDevServices/SelectedWebDevServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const WebDevLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      <WebDevHero/>
      <SelectedWebDevServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default WebDevLanding;
