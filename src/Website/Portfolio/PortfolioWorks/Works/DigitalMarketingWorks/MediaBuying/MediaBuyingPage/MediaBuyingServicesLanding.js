import React, { useEffect, useRef } from 'react';
import MediaBuyingServHero from './MediaBuyingServHero/MediaBuyingServHero';
import AvailbleMediaBuyingServices from './AvailbleMediaBuyingServices/AvailbleMediaBuyingServices';
import SelectedMediaBuyingServices from './SelectedMediaBuyingServices/SelectedMediaBuyingServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const MediaBuyingServicesLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
    <div ref={scrollRef}></div>
    <MediaBuyingServHero/>
    <AvailbleMediaBuyingServices/>
    <SelectedMediaBuyingServices/>
    <PortfplioDivider/>
    <SocialDivider/>
    <Footer/>
    </div>
  );
}

export default MediaBuyingServicesLanding;
