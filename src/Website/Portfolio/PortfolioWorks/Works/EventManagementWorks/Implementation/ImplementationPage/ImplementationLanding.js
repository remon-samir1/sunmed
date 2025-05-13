import React, { useEffect, useRef } from 'react';
import ImplementationHero from './ImplementationHero/ImplementationHero';
import SelectedImplementaionWorks from './SelectedImplementaionWorks/SelectedImplementaionWorks';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const ImplementationLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      <ImplementationHero/>
      <SelectedImplementaionWorks/>

      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default ImplementationLanding;
