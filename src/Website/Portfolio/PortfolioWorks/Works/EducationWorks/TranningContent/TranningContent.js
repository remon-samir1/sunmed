import React from 'react';
import { Link } from 'react-router-dom';
const TranningContent = () => {
  return (
    <div className='tranningPlatforms'>
      <h3>PROJECTS</h3>
      <div className="projects">
    {
      Array.from({length:6}).map((data , index)=>(
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

export default TranningContent;
