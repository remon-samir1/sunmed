import React, { useEffect, useRef } from 'react';
import ConferenceHero from './ConferenceHero/ConferenceHero';
import SelectedConferenceServices from './SelectedConferenceServices/SelectedConferenceServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const ConferenceLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
<div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      <ConferenceHero/>
      <SelectedConferenceServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default ConferenceLanding;
