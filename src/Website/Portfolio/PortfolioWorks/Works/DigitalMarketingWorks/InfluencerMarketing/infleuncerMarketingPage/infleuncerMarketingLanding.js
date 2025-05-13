import React, { useEffect, useRef } from 'react';
import InfleuncerMarketingHero from './InfleuncerMarketingHero/InfleuncerMarketingHero';
import AvalibleInfluencerServices from './AvalibleInfluencerServices/AvalibleInfluencerServices';
import SelectedInfluencerServices from './SelectedInfluencerPage/SelectedInfluencerServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const InfleuncerMarketingLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
    <div ref={scrollRef}></div>
    <InfleuncerMarketingHero/>
    <AvalibleInfluencerServices/>
    <SelectedInfluencerServices/>
    <PortfplioDivider/>
    <SocialDivider/>
    <Footer/>
    </div>
  );
}

export default InfleuncerMarketingLanding;
