import React from 'react';
import EventManagementHero from './EventManagementHero/EventManagementHero';
import AboutEventManagement from './AboutEventManagement/AboutEventManagement';
import EventPortfolioPart from './EventPortfolioPart/EventPortfolioPart';
import EventManagementDetails from './EventManagementDetails/EventManagementDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const EventManagementLanding = () => {
  return (
    <div className='overflow-hidden'>
      <EventManagementHero/>
      <AboutEventManagement/>
      <EventPortfolioPart/>
      <EventManagementDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default EventManagementLanding;
