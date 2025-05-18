import { Icon } from '@iconify/react';
import React from 'react';
const AvailableServicesBox = (props) => {
  return (
    <div className='AvailableServicesBox '>
      <img src={props.img} alt="services" loading='lazy' />
      <div className="details">
        <div className="icon-container ">
        <img src={props.icon}  />
        </div>
        <span>
          {props.text}
        </span>
      </div>

    </div>
  );
}

export default AvailableServicesBox;
