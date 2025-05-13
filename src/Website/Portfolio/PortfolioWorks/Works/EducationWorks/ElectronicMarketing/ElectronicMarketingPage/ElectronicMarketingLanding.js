import React, { useEffect, useRef } from 'react';
import ElectronicMarketingHero from './ElectronicMarketingHero/ElectronicMarketingHero';
import SelectedElectronicMarkServices from './SelectedElectronicMarkServices/SelectedElectronicMarkServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';


const ElectronicMarketingLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (

    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
<ElectronicMarketingHero/>
<SelectedElectronicMarkServices/>
<PortfplioDivider/>
<SocialDivider/>
<Footer/>
    
    </div>
  );
}

export default ElectronicMarketingLanding;
