import React from 'react';
import { Link } from 'react-router-dom';
const RentingStudios = () => {
  return (
    <div className='PostProduction'>
      <h3>PROJECTS</h3>
      <div className="projects">
    {
      Array.from({length:4}).map((data , index)=>(
        <Link to='/portfolio/media-production-datails' className='project'>
         <img src={require('../../../../../../Images/cairo.png')} alt="projects" loading='lazy'/>
         <div className="text">
          <h4>Project 1</h4>
          <p>E-commerce</p>
         </div>
        </Link>
      ))
    }
      </div>
    </div>
  );
}

export default RentingStudios;
