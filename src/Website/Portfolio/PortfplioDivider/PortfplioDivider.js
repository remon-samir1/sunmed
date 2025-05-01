import { Link } from 'react-router-dom';
import React from 'react';

const PortfplioDivider = () => {
  return (
    <div className="divider-conrainer">

    <div className='Divider flex-col !items-center !justify-center !gap-12'>
      <h3 className='text-center font-bold'>
      We’re Ready to Bring Bigger & Stronger  <br/> Projects
      </h3>
      <Link to='/bookNow' className='link'>Book now</Link>
    </div>
    </div>
  );
}

export default PortfplioDivider;
