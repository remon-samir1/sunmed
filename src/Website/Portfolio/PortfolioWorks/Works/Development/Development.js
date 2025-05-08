import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Development.css'
const Development = () => {
  return (
    <div className='AllWorks flex development'>
      <div className="work ">
        <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-1.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-2.png')} alt="work" loading='lazy' />
      </div>

      <div className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-3.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-4.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-5.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
      <div className="details">
          <div className="text">
            <p>Graphic</p>
            <p>Fimilor experience</p>

          </div>
          <Link to='/portfolio/development' className="icon-container">

          <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
          </Link>
        </div>
        <img src={require('../../../../../Images/work-6.png')} alt="work" loading='lazy' />
      </div>
    </div>
  );
}

export default Development;
