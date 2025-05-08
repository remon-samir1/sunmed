import React from "react";

import WithUs from "../Landing/WithUs/WithUs";
import Footer from "../../Components/Footer/Footer";
import DigitalMarketingTypes from "./DigitalMarketingTypes/DigitalMarketingTypes";
import DigitalMarketingLandingPortfolioPart from "./DigitalMarketingLandingPortfolioPart/DigitalMarketingLandingPortfolioPart";
import AboutDigitalMarketing from "./AboutDigitalMarketing/AboutDigitalMarketing";
import DigitalMarketingHero from "./DigitalMarketingHero/DigitalMarketingHero";

const DigitalMarketingLanding = () => {
  return (
    <div className="overflow-hidden">
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
