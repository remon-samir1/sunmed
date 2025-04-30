import React, { useState } from "react";
import "./PortfolioWorks.css";
import AllWorks from "./Works/AllWorks/AllWorks";
const PortfolioWorks = () => {
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigitalMarketing, setOpenDigitalMarketing] = useState(false);
  return (
    <div className="PortfolioWorks px-[7vw] py-[10vh]">
      <div className="categories">
        <button>All</button>
        <button>Media production</button>
        <button>Education services</button>
        <div className="flex flex-col items-center relative">
          <button onClick={() => setOpenWeb((prev) => !prev)}>
            Web solution
          </button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openWeb ? "h-14 " : "h-0"
            } absolute top-[100%]`}
          >
            <button className=""> UI/UX design</button>
            <button>Development</button>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <button onClick={() => setOpenDigitalMarketing((prev) => !prev) }>
            Digital Marteting
          </button>
          <div
            className={`list flex overflow-hidden mt-4 duration-500 ${
              openDigitalMarketing ? "h-14 " : "h-0"
            } absolute top-[100%]`}
          >
            <button className="">Social media</button>
            <button>Media buying</button>
          </div>
        </div>
        <button>Evevnt management</button>
      </div>
      <div className={`data translate-y-0 py-5 will-change-auto duration-700 ${openDigitalMarketing || openWeb ? 'pt-24  ' : ''}`}>
        <AllWorks/>
        {/* <AllWorks/> */}
      </div>
    </div>
  );
};

export default PortfolioWorks;
