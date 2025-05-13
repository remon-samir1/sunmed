import React, { useEffect, useRef } from 'react';
import DevTestingHero from './DevTestingHero/DevTestingHero';
import SelectedDevTestingServices from './SelectedDevTestingServices/SelectedDevTestingServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const DevelopmentTestingLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
<DevTestingHero/>
<SelectedDevTestingServices/>
<PortfplioDivider/>
<SocialDivider/>
<Footer/>
      
    </div>
  );
}

export default DevelopmentTestingLanding;
