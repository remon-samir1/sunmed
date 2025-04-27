import { Link } from 'react-router-dom';
import './Divider.css'
import React from 'react';

const Divider = () => {
  return (
    <div className="divider-conrainer">

    <div className='Divider'>
      <h3>
      We’re Ready to Bring Bigger <br/>& Stronger Projects
      </h3>
      <Link className='link'>Book now</Link>
    </div>
    </div>
  );
}

export default Divider;
