import React, { useEffect, useRef } from "react";
import PhotographyHero from "./PhotographyHero/PhotographyHero";
import AvailbleServicesPhoto from "./AvailbleServicesPhoto/AvailbleServicesPhoto";
import SelectedServicesPhoto from "./SelectedServicesPhoto/SelectedServicesPhoto";
import PortfplioDivider from "../../../../../PortfplioDivider/PortfplioDivider";
import SocialDivider from "../../../../../SocialDivider/SocialDivider";
import Footer from "../../../../../../../Components/Footer/Footer";

const PhotographyLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div>
      <div ref={scrollRef}></div>

      <PhotographyHero />
      <AvailbleServicesPhoto />
      <SelectedServicesPhoto/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
};

export default PhotographyLanding;
