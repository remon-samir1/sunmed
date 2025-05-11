import React, { useEffect, useRef } from 'react';
import PostProducationHero from './PostProducationHero/PostProducationHero';
import AvailableServices from './AvailableServices/AvailableServices';
import SelectedServices from './SelectedServices/SelectedServices';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const PostProductionLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div>
      <div ref={scrollRef}></div>

      <PostProducationHero/>
      <AvailableServices/>
      <SelectedServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default PostProductionLanding;
