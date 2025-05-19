import React, { useEffect, useState } from 'react';

import "./PortfolioMediaPage.css";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { Axios } from '../../../../Components/Helpers/Axios';
const PortfolioMediaPage = () => {
  const { id } = useParams();
    //  GET DATA
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get("/projects").then((data) => setData(data.data.data));
    }, []);
    const filter = data.filter(data => data.id == id )

    const isImage = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);
    const formattedDate = new Date(filter[0]?.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
  
  








  return (
    <div className="PortfolioMediaPage py-[10vh]">
      <div className="content px-[7vw] py-[10vh]">
        <div className="images">
        {filter[0]?.attachments.map((data, index) => {
  if (isImage(data)) {
    return (
      <div className="img" key={index}>
        <img
          src={data}
          alt="media"
          loading="lazy"
        />
      </div>
    );
  }
  return null; 
})}



    
        </div>
        <div className="text">
          <h3 className='uppercase'>{filter[0]?.title}</h3>
          <p dangerouslySetInnerHTML={{__html:filter[0]?.description}}>
          </p>
        </div>

        <div className="details gap-[7vw] md:gap-[10vw]">
          <div className="detail">
            <h5>Published</h5>
            <h4>{formattedDate}</h4>
          </div>
          <div className="detail">
            <h5>Category</h5>
            <h4>{filter[0]?.service.title}</h4>
          </div>
          <div className="detail">
            <h5>Share</h5>
            <div className="social-links flex-wrap md:flex-nowrap !justify-start md:justify-center ">
              <div className="icon-container">
                <FaFacebookF className="icon" />
              </div>
              <div className="icon-container">
                <IoLogoTwitter className="icon" />
              </div>
              <div className="icon-container">
                <IoLogoInstagram className="icon" />
              </div>
              <div className="icon-container">
                <FaLinkedinIn className="icon" />
              </div>
              <div className="icon-container">
                <FaBehance className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videos px-[7vw] md:mt-[10vh]">


        {filter[0]?.attachments.map((data, index) => {
  if (isVideo(data)) {
    return (
      <div className="video">
      <video
        src={data}
        controls
      ></video>
    </div>
    );
  }
  return null; 
})}


      </div>
    </div>
  );
};

export default PortfolioMediaPage;
