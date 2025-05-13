import React, { useEffect, useRef } from 'react';
import EducationProjectDetailsHero from './EducationProjectDetailsHero/EducationProjectDetailsHero';
import EducationDetailsofProject from './EducationDetailsofProject/EducationDetailsofProject';
import PortfplioDivider from '../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../SocialDivider/SocialDivider';
import Footer from '../../../../Components/Footer/Footer';

const EducationProjectDetailsLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      <EducationProjectDetailsHero/>
      <EducationDetailsofProject/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default EducationProjectDetailsLanding;
