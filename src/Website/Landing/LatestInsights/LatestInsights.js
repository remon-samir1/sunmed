import "./LatestInsights.css";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Axios } from "../../../Components/Helpers/Axios";
const LatestInsights = () => {

  const [data , setData] = useState([]);

  useEffect(()=>{
    Axios.get('/blogs').then(data=>setData(data.data.data))


  },[])
  




  return (
    <div className="LatestInsights px-[7vw] py-[5vh]">
      <div className="text">
        <h2>Read our news</h2>
        <h3 className="uppercase">Latest insights </h3>
      </div>

      <div className="blogs">
        <Link className="main-blog" to={`/single-blog/${data[0]?.uuid}`}>
          <div className="img">
            <img src={data[0]?.cover} loading='lazy' alt="blog" />
            <p>
            
            </p>
          </div>
          <div className="content">
            <p dangerouslySetInnerHTML={{__html:data[0]?.content}}>
            
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span>By sunmed agency</span>
              <FaArrowRightLong className="icon" />
            </div>
          </div>
        </Link>
        <div className="second-blogs">
          <Link className="blog" to={`/single-blog/${data[1]?.uuid}`}>
            <div className="img">
              <img src={data[1]?.cover} loading='lazy' alt="blog" />
              <p>
                {data[1]?.title}
              </p>
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{__html:data[1]?.content}}>
              
              </p>
              <div className="mt-12 flex justify-between items-center">
                <span>By sunmed agency</span>
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </Link>

          <Link className="blog" to={`/single-blog/${data.uuid}`}>
            <div className="img">
              <img src={data[2]?.cover}loading='lazy' alt="blog" />
              <p>
              {data[2]?.cover}
              </p>
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{__html:data[2]?.content}}>
          
              </p>
              <div className="mt-12 flex justify-between items-center">
                <span>By sunmed agency</span>
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
