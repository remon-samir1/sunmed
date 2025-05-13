import React, { useEffect, useRef } from "react";

import WithUs from "../Landing/WithUs/WithUs";
import Footer from "../../Components/Footer/Footer";
import DigitalMarketingTypes from "./DigitalMarketingTypes/DigitalMarketingTypes";
import DigitalMarketingLandingPortfolioPart from "./DigitalMarketingLandingPortfolioPart/DigitalMarketingLandingPortfolioPart";
import AboutDigitalMarketing from "./AboutDigitalMarketing/AboutDigitalMarketing";
import DigitalMarketingHero from "./DigitalMarketingHero/DigitalMarketingHero";

const DigitalMarketingLanding = () => {
  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className="overflow-hidden">
      <div ref={scrollRef}></div>

      <DigitalMarketingHero />
      <AboutDigitalMarketing />
      <DigitalMarketingLandingPortfolioPart />
      <DigitalMarketingTypes />
      <WithUs />
      <Footer />
    </div>
  );
};

export default DigitalMarketingLanding;
