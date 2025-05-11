import React from "react";
import PhotographyHero from "./PhotographyHero/PhotographyHero";
import AvailbleServicesPhoto from "./AvailbleServicesPhoto/AvailbleServicesPhoto";
import SelectedServicesPhoto from "./SelectedServicesPhoto/SelectedServicesPhoto";
import PortfplioDivider from "../../../../../PortfplioDivider/PortfplioDivider";
import SocialDivider from "../../../../../SocialDivider/SocialDivider";
import Footer from "../../../../../../../Components/Footer/Footer";

const PhotographyLanding = () => {
  return (
    <div>
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
