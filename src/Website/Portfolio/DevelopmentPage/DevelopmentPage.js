import React from "react";
import DevelopmentPageHero from "./DevelopmentPageHero/DevelopmentPageHero";
import DevelopmentProjectDetails from "./DevelopmentProjectDetails/DevelopmentProjectDetails";
import PortfplioDivider from "../PortfplioDivider/PortfplioDivider";
import Footer from "../../../Components/Footer/Footer";

const DevelopmentPage = () => {
  return (
    <div className="overflow-hidden">
      <DevelopmentPageHero />

      <DevelopmentProjectDetails />
      <PortfplioDivider/>
      <Footer/>
    </div>
  );
};

export default DevelopmentPage;
