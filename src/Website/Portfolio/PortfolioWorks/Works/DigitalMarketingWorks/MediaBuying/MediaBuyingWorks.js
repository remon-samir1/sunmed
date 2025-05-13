import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const MediaBuyingWorks = () => {
  return (
    <div className='AllWorks flex'>
      <div className="img-container">

      <Link to='/media-buying-page' className="work">
        <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-1.png')} alt="work" loading='lazy' />
      </Link>
      <Link to='/media-buying-page' className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-2.png')} alt="work" loading='lazy' />
      </Link>

      </div>
      <div className="img-container container-2">

      <Link to='/media-buying-page' className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-3.png')} alt="work" loading='lazy' />
      </Link>
      <Link to='/media-buying-page' className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-4.png')} alt="work" loading='lazy' />
      </Link>
      </div>
      <div className="img-container">

      <Link to='/media-buying-page' className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-5.png')} alt="work" loading='lazy' />
      </Link>
      <Link to='/media-buying-page' className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <div className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </div>
        </div>
        <img src={require('../../../../../../Images/work-6.png')} alt="work" loading='lazy' />
      </Link>
      </div>
    </div>
  );
}

export default MediaBuyingWorks;
