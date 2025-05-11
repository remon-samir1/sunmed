import React, { useEffect, useRef } from 'react';
import RentingStudioHero from './RentingStudioHero/RentingStudioHero';
import AvailableServicesRenting from './AvailableServices/AvailableServicesRenting';
import SelectedRentingServices from './SelectedRentingServices/SelectedRentingServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const RentingStudioLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>

      
      <RentingStudioHero/>
      <AvailableServicesRenting/>
      <SelectedRentingServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>

    </div>
  );
}

export default RentingStudioLanding;
