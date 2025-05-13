import React, { useEffect, useRef } from 'react';
import EventServDetailsHero from './EventServDetailsHero/EventServDetailsHero';
import EventProjectDetails from './EventProjectDetails/EventProjectDetails';
import PortfplioDivider from '../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../SocialDivider/SocialDivider';
import Footer from '../../../../Components/Footer/Footer';

const EventServDetailsLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className='overflow-hidden'>
    <div ref={scrollRef}></div>
      <EventServDetailsHero/>
      <EventProjectDetails/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default EventServDetailsLanding;
