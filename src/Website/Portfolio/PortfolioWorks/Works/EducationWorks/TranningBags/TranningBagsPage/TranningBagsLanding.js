import React, { useEffect, useRef } from "react";
import TranningBagsHero from "./TranningBagsHero/TranningBagsHero";
import SelectedTraninigBagsServices from "./SelectedTraninigBagsServices/SelectedTraninigBagsServices";
import PortfplioDivider from "../../../../../PortfplioDivider/PortfplioDivider";
import SocialDivider from "../../../../../SocialDivider/SocialDivider";
import Footer from "../../../../../../../Components/Footer/Footer";

const TranningBagsLanding = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, []);
  return (
    <div className="overflow-hidden">
      <div ref={scrollRef}></div>
      <TranningBagsHero />
      <SelectedTraninigBagsServices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    
    </div>
  );
};

export default TranningBagsLanding;
