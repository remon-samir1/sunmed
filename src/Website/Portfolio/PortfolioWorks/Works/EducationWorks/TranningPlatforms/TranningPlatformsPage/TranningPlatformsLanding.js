import React, { useEffect, useRef } from "react";
import TranningPlatformsHero from "./TranningPlatformsHero/TranningPlatformsHero";
import SelectedTrainingPlatformServ from "./SelectedTrainingPlatformServ/SelectedTrainingPlatformServ";
import PortfplioDivider from "../../../../../PortfplioDivider/PortfplioDivider";
import SocialDivider from "../../../../../SocialDivider/SocialDivider";
import Footer from "../../../../../../../Components/Footer/Footer";


const TranningPlatformsLanding = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, []);
  return (
    <div className="overflow-hidden">
      <div ref={scrollRef}></div>
    <TranningPlatformsHero/>
    <SelectedTrainingPlatformServ/>
    <PortfplioDivider/>
    <SocialDivider/>
    <Footer/>
    
    </div>
  );
};

export default TranningPlatformsLanding;
