import React, { useEffect, useState } from "react";
import "./OurPartners.css";
import { Icon } from "@iconify/react";
import { Axios } from "../../../Components/Helpers/Axios";
const OurPartners = () => {
const [data,setData] = useState([])
useEffect(()=>{
  Axios.get('/partners').then(data=>setData(data.data.data))
},[])
console.log(data);


  return (
    <div className="OurPartners">
      <div className="content">
        <h3>our partners</h3>
        <div className="items-container">
          {data.map((item, key) => (
            <div className="item" key={key}>
              <div className="img">
                
            <img src={item.image} alt="" />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
