import React from 'react';
import './AllWorks.css'
const AllWorks = () => {
  return (
    <div className='AllWorks flex'>
      <div className="work">
        <img src={require('../../../../../Images/work-1.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
        <img src={require('../../../../../Images/work-2.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
        <img src={require('../../../../../Images/work-3.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
        <img src={require('../../../../../Images/work-4.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
        <img src={require('../../../../../Images/work-5.png')} alt="work" loading='lazy' />
      </div>
      <div className="work">
        <img src={require('../../../../../Images/work-6.png')} alt="work" loading='lazy' />
      </div>
    </div>
  );
}

export default AllWorks;
