import React, { useEffect, useRef } from "react";
import DevelopmentPageHero from "./DevelopmentPageHero/DevelopmentPageHero";
import DevelopmentProjectDetails from "./DevelopmentProjectDetails/DevelopmentProjectDetails";
import PortfplioDivider from "../PortfplioDivider/PortfplioDivider";
import Footer from "../../../Components/Footer/Footer";

const DevelopmentPage = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView({behavior:'smooth'})
  }
,[])
  return (
    <div className="overflow-hidden " >
      <div ref={scrollRef}></div>
      <DevelopmentPageHero />

      <DevelopmentProjectDetails />
      <PortfplioDivider/>
      <Footer/>
    </div>
  );
};

export default DevelopmentPage;
