import React, { useState } from "react";
import "./PortfolioWorks.css";
import AllWorks from "./Works/AllWorks/AllWorks";
import Development from "./Works/Development/Development";
const PortfolioWorks = () => {
  const [showData , setShowData] = useState('all')
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  console.log(showData);
  return (
    <div className="PortfolioWorks px-[7vw] py-[4vh] md:py-[10vh]">
      <div className={`categories high !duration-500`}>
        <button onClick={()=>setShowData('all')}>All</button>
        <button>Media production</button>
        <button>Education services</button>
        <div className="flex flex-col items-center relative">
          <button onClick={() =>{
             setOpenWeb((prev) => !prev)
          setOpenDigitalMarketing(false)
             
             }}>
            Web solution
          </button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openWeb ? "h-14 " : "h-0"
            }  top-[100%] absolute z-50`}
          >
            <button className=""> UI/UX design</button>
            <button onClick={()=>setShowData('development')}>Development</button>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <button onClick={() => {
            setOpenDigitalMarketing((prev) => !prev);
            setOpenWeb(false)
            
            }}>
            Digital Marteting
          </button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openDigitalMarketing ? "h-14 " : "h-0"
            } absolute top-[100%] z-50`}
          >
            <button className="">Social media</button>
            <button>Media buying</button>
          </div>
        </div>
        <button>Evevnt management</button>
      </div>
      <div className={`data translate-y-0 py-5 will-change-auto duration-700 ${window.innerWidth > 768 ? openDigitalMarketing || openWeb ? 'pt-24  ' : '' : ''}`}>

        {
          showData === 'all' ? 
          
          <AllWorks/>
          :
          <Development/>
        }
        
      </div>
    </div>
  );
};

export default PortfolioWorks;
