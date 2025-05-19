import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutUs from "./AboutUs/AboutUs";
import StartProject from "./StartProject/StartProject";
import OverView from "./OverView/OverView";
import LatestInsights from "./LatestInsights/LatestInsights";
import Divider from "./Divider/Divider";
import WithUs from "./WithUs/WithUs";
import Footer from "../../Components/Footer/Footer";
import HighlightsStories from "../../Components/SingleStory/SingleStory";
import LandingPortfolioPart from "./LandingPortfolioPart/LandingPortfolioPart";
import OurLatestStudios from "./OurLatestStudios/OurLatestStudios";
import Wrapper from "./Wrapper/Wrapper";
import OurPartners from "./OurPartners/OurPartners";
import Testmonials from "./Testmonials/Testmonials";
import Loading from "../../Components/Loading/loading";
import LoadScreen from "../../Components/LoadScreen/LoadScreen";

const Landing = () => {
  const [loadScreen, setLoadScreen] = useState(false);

  useEffect(() => {
    setLoadScreen(true);
    const timer = setTimeout(() => {
      setLoadScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="overflow-hidden">
      {loadScreen ? (
        <LoadScreen />
      ) :
      <>
      <HeroSection />
      <AboutUs />
      <LandingPortfolioPart />
      <OurLatestStudios />
      <StartProject />
      <OverView />
      <OurPartners />
      <Testmonials />
      <Divider />

      <WithUs />
      <LatestInsights />
      <Footer />
      </>
}
    </div>
  );
};

export default Landing;
