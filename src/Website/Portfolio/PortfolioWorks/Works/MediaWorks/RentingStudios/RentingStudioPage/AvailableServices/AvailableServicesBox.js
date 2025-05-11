import { Icon } from '@iconify/react';
import React from 'react';
const AvailableServicesBox = (props) => {
  return (
    <div className='AvailableServicesBox '>
      <img src={props.img} alt="services" loading='lazy' />
      <div className="details">
        <div className="icon-container">
        <Icon icon="system-uicons:write"color='white' width="40" height="40" />
        </div>
        <span>
          {props.text}
        </span>
      </div>

    </div>
  );
}

export default AvailableServicesBox;
