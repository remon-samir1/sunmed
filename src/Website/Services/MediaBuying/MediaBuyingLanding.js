import React from 'react';
import MediaBuyingHero from './MediaBuyingHero/MediaBuyingHero';
import OurMediaBuying from './OurMediaBuying/OurMediaBuying';
import MediaBuyingDetails from './MediaBuyingDetails/MediaBuyingDetails';
import WithUs from '../../Landing/WithUs/WithUs';
import Footer from '../../../Components/Footer/Footer';

const MediaBuyingLanding = () => {
  return (
    <div className='overflow-hidden'>
      <MediaBuyingHero/>
      <OurMediaBuying/>
      <MediaBuyingDetails/>
      <WithUs/>
      <Footer/>
    </div>
  );
}

export default MediaBuyingLanding;
