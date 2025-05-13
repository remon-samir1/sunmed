import React, { useEffect, useRef } from 'react';
import SeoServicesHero from './SeoServicesHero/SeoServicesHero';
import AvalibleSeoServices from './AvalibleSeoServices/AvalibleSeoServices';
import SelectedSeoServices from './SelectedSeoServices/SelectedSeoServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const SeoServicesLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
    <div ref={scrollRef}></div>
      <SeoServicesHero/>
      <AvalibleSeoServices/>
      <SelectedSeoServices />
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default SeoServicesLanding;
