import React, { useEffect, useRef } from 'react';
import EducationHero from './EducationHero/EducationHero';
import AboutEducation from './AboutEducation/AboutEducation';
import EducationPortfolioPart from './EducationPortfolioPart/EducationPortfolioPart';
import EducationDetails from './EducationDetails/EducationDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const EducationServicesLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
      <div ref={scrollRef}></div>
      
      <EducationHero/>
      <AboutEducation/>
      <EducationPortfolioPart/>
      <EducationDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default EducationServicesLanding;
