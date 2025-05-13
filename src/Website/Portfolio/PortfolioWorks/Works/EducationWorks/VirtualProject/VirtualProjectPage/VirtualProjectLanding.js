import React, { useEffect, useRef } from 'react';
import VirtualProjectHero from './VirtualProjectHero/VirtualProjectHero';
import AvalibleVirualServices from './AvalibleVirualServices/AvalibleVirualServices';
import SelectedVirualWork from './SelectedVirualWork/SelectedVirualWork';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const VirtualProjectLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>

      <VirtualProjectHero/>
      <AvalibleVirualServices/>
      <SelectedVirualWork/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default VirtualProjectLanding;
