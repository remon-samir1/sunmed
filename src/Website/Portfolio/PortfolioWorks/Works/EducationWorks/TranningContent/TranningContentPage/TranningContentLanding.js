import React, { useEffect, useRef } from 'react';
import TranningContentHero from './TranningContentHero/TranningContentHero';
import SelectedTrainingContentServices from './SelectedTrainingContentServices/SelectedTrainingContentServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const TranningContentLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (

    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>

      <TranningContentHero/>
      <SelectedTrainingContentServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default TranningContentLanding;
