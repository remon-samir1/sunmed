import React from 'react';
import VideographyHero from './VideographyHero/VideographyHero';
import AvailableServicesVid from './AvailableServicesVid/AvailableServicesVid';
import SelectedServicesVid from './SelectedServicesVid/SelectedServicesVid';
import PortfplioDivider from '../../../../../PortfplioDivider/PortfplioDivider';
import SocialDivider from '../../../../../SocialDivider/SocialDivider';
import Footer from '../../../../../../../Components/Footer/Footer';

const VideographyLanding = () => {
  return (
    <div className='overflow-hidden'>
      <VideographyHero/>
      <AvailableServicesVid/>
      <SelectedServicesVid/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
}

export default VideographyLanding;
