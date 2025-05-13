import React, { useEffect, useRef } from "react";
import ProjectManagementHero from "./ProjectManagementHero/ProjectManagementHero";
import AvaliblePMservices from "./AvaliblePMservices/AvaliblePMservices";
import SelectedPMservices from "./SelectedPMservices/SelectedPMservices";
import PortfplioDivider from "../../../../../PortfplioDivider/PortfplioDivider";
import SocialDivider from "../../../../../SocialDivider/SocialDivider";
import Footer from "../../../../../../../Components/Footer/Footer";

const ProjectManagementLanding = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, []);
  return (
    <div className="overflow-hidden">
      <div ref={scrollRef}></div>

      <ProjectManagementHero />
      <AvaliblePMservices/>
      <SelectedPMservices/>
      <PortfplioDivider/>
      <SocialDivider/>
      <Footer/>
    </div>
  );
};

export default ProjectManagementLanding;
