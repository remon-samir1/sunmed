import React from "react";
import "./OurLatestStudios.css";
const OurLatestStudios = () => {


  return (
    <div className="OurLatestStudios px-[7vw] py-7">
      <div className="text">
        <h3>Our latest studios</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum lectus.
        </p>
      </div>
      <div className="images">
        <div className="top">
          <div className="img">

          <img src={require('../../../Images/studio-1.png')} alt="studios" loading="lazy"/>
          </div>
          <div className="img">

          <img src={require('../../../Images/studio-2.png')} alt="studios" loading="lazy"/>
          </div>

        </div>
        <div className="down">
          <div className="img">

          <img src={require('../../../Images/studio-3.png')} alt="studios" loading="lazy"/>
          </div> 
          <div className="img">

          <img src={require('../../../Images/studio-4.png')} alt="studios" loading="lazy"/>
          </div> 
          <div className="img">

          <img src={require('../../../Images/studio-5.png')} alt="studios" loading="lazy"/>
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default OurLatestStudios;
