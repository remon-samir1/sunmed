import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "./Website/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import MenuContext, { Menu } from "./Context/MenuOpen/MenuContext";
import { useContext, useEffect, useState } from "react";
import MediaProduction from "./Website/Services/MediaProduction/MediaProduction";
import WebSolutionsLanding from "./Website/Services/WebSolutions/WebSolutionsLanding";
import MediaBuyingLanding from "./Website/Services/MediaBuying/MediaBuyingLanding";
import SocialMediaLanding from "./Website/Services/SocialMedia/SocialMediaLanding";
import SeoLanding from "./Website/Services/Seo/SeoLanding";
import PortfolioLanding from "./Website/Portfolio/PortfolioLanding";
import PortFolioMediaProductionHero from "./Website/Portfolio/PortFolioMediaProduction/PortFolioMediaProductionHero/PortFolioMediaProductionHero";
import PortFolioMediaProduction from "./Website/Portfolio/PortFolioMediaProduction/PortFolioMediaProduction";
import ContactUs from "./Website/ContactUs/ContactUs";
import BookNow from "./Website/BookNow/BookNow";
import DevelopmentPage from "./Website/Portfolio/DevelopmentPage/DevelopmentPage";
import HighlightsStories from "./Components/SingleStory/SingleStory";
import StoryWithHeaderAndClose from "./Components/SingleStory/SingleStory";
import SingleStory from "./Components/SingleStory/SingleStory";
import HighlightCard from "./Components/HighLights/HighLights";
import Highlights from "./Components/HighLights/HighLights";
import HighlightsPage from "./Components/HighLights/HighLights";
import HighlightsStoriesSwiper from "./Components/HighLights/HighLights";
import Loading from "./Components/Loading/loading";
import LoadingContext, {
  LoadingCon,
} from "./Context/LoadingContext/LoadingContext";
import SingleBlog from "./Website/Blogs/Single-blog/SingleBlog";
import MainBlogPage from "./Website/Blogs/MainBlogPage/MainBlogPage";
import StudiosLanding from "./Website/Studios/DigitalMarketingLanding";
import AllWorks from "./Website/Portfolio/PortfolioWorks/Works/AllWorks/AllWorks";
import SocialMediaPage from "./Website/Portfolio/PortfolioWorks/Works/SocialMediaServices/SocialMediaTab";
import EducationServicesLanding from "./Website/Services/EducationServices/EducationServicesLanding";
import PostProduction from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/PostProduction/PostProduction";
import Photography from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/Photography/Photography";
import RentingStudios from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/RentingStudios/RentingStudios";
import TranningPlatforms from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningPlatforms/TranningPlatforms";
import TranningBags from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningBags/TranningBags";
import ElectronicMarketing from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/ElectronicMarketing/ElectronicMarketing";
import TranningContent from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningContent/TranningContent";
import ProjectManagement from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/ProjectManagement/ProjectManagement";
import VirtualProject from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/VirtualProject/VirtualProject";
import EventManagementLanding from "./Website/Services/EventManagement/EventManagementLanding";
import PostProductionLanding from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/PostProduction/PostProductionPage/PostProductionLanding";
import RentingStudioLanding from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/RentingStudios/RentingStudioPage/RentingStudioLanding";
import PhotographyLanding from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/Photography/PhotographyPage/PhotographyLanding";
import Videography from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/Videography/Videography";
import VideographyLanding from "./Website/Portfolio/PortfolioWorks/Works/MediaWorks/Videography/VideographyPage/VideographyLanding";
import VirtualProjectLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/VirtualProject/VirtualProjectPage/VirtualProjectLanding";
import ProjectManagementLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/ProjectManagement/ProjectManagementPage/ProjectManagementLanding";
import TranningContentLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningContent/TranningContentPage/TranningContentLanding";
import ElectronicMarketingLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/ElectronicMarketing/ElectronicMarketingPage/ElectronicMarketingLanding";
import TranningBagsLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningBags/TranningBagsPage/TranningBagsLanding";
import TranningPlatformsLanding from "./Website/Portfolio/PortfolioWorks/Works/EducationWorks/TranningPlatforms/TranningPlatformsPage/TranningPlatformsLanding";
import Development from "./Website/Portfolio/PortfolioWorks/Works/Development/WebDevelopmentServices/Development";
import WebDesgin from "./Website/Portfolio/PortfolioWorks/Works/Development/WebDesgin/WebDesgin";
import DevelopmentTesting from "./Website/Portfolio/PortfolioWorks/Works/Development/DevelopmentTesting/DevelopmentTesting";
import WebDevLanding from "./Website/Portfolio/PortfolioWorks/Works/Development/WebDevelopmentServices/WebDevPage/WebDevLanding";
import WebDesignLanding from "./Website/Portfolio/PortfolioWorks/Works/Development/WebDesgin/WebDesignPage/WebDesignLanding";
import DevelopmentTestingLanding from "./Website/Portfolio/PortfolioWorks/Works/Development/DevelopmentTesting/DevelopmentTestingPage/DevelopmentTestingLanding";
import SocialMediaTab from "./Website/Portfolio/PortfolioWorks/Works/SocialMediaServices/SocialMediaTab";
import SocialMediaServicesLanding from "./Website/Portfolio/PortfolioWorks/Works/SocialMediaServices/SocialMediaServicesPage/SocialMediaServicesLanding";
import MediaBuyingWorks from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/MediaBuying/MediaBuyingWorks";
import MediaBuyingServicesLanding from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/MediaBuying/MediaBuyingPage/MediaBuyingServicesLanding";
import InfluencerMarketing from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/InfluencerMarketing/InfluencerMarketing";
import InfleuncerMarketingHero from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/InfluencerMarketing/infleuncerMarketingPage/InfleuncerMarketingHero/InfleuncerMarketingHero";
import InfleuncerMarketingLanding from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/InfluencerMarketing/infleuncerMarketingPage/infleuncerMarketingLanding";
import SeoServices from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/SeoServices/SeoServices";
import SeoServicesLanding from "./Website/Portfolio/PortfolioWorks/Works/DigitalMarketingWorks/SeoServices/SeoServicesPage/SeoServicesLanding";
import Implementation from "./Website/Portfolio/PortfolioWorks/Works/EventManagementWorks/Implementation/Implementation";
import Conference from "./Website/Portfolio/PortfolioWorks/Works/EventManagementWorks/Conference/Conference";
import ImplementationLanding from "./Website/Portfolio/PortfolioWorks/Works/EventManagementWorks/Implementation/ImplementationPage/ImplementationLanding";
import ConferenceLanding from "./Website/Portfolio/PortfolioWorks/Works/EventManagementWorks/Conference/ConferencePage/ConferenceLanding";
import EducationProjectDetailsLanding from "./Website/Portfolio/Details/EducationProjectDetails/EducationProjectDetailsLanding";
import SocialMediaServDetailsHero from "./Website/Portfolio/Details/SocialMediaServDetails/SocialMediaServDetailsHero/SocialMediaServDetailsHero";
import SocialMediaServDetailsLanding from "./Website/Portfolio/Details/SocialMediaServDetails/SocialMediaServDetailsLanding";
import EventServDetailsLanding from "./Website/Portfolio/Details/EventServDetails/EventServDetailsLanding";
import LoadScreen from "./Components/LoadScreen/LoadScreen";

function App() {
  // height on open navbar
  const [dynamicHeight, setDynamicHeight] = useState("100vh");
  const menu = useContext(Menu);
  const closed = "translate3d(0, 0, 0) scaleY(1)";
  const isOpen = menu.isOpen;
  const resize =
    window.innerWidth > 600
      ? "translate3d(-400px, 20%, 0) scaleY(1)"
      : " translate3d(-330px, 20%, 0) scaleY(1)";
  //  set Loading screen
  const LoadingContext = useContext(LoadingCon);
  const loading = LoadingContext.loading;
  useEffect(() => {
    if (!isOpen) {
      setDynamicHeight("100vh");

      const timer = setTimeout(() => {
        setDynamicHeight("auto");
      }, 700);

      return () => clearTimeout(timer);
    } else {
      setDynamicHeight("100vh");
    }
  }, [isOpen]);
  const [loadScreen , setLoadScreen] = useState(false);
  // const location = useLocation()
  useEffect(()=>{
    setLoadScreen(true)
    const timer = setTimeout(()=>{
      setLoadScreen(false)
    },3000)
    return ()=> clearTimeout(timer)
  },[window.location.pathname])
  return (
    <>
      {loading && <Loading />}
    { loadScreen ? <LoadScreen/> :
<>
        <Router>
        <div className=" flex">
          <div
            className={`duration-700 flex-1  overflow-auto  will-change-transform`}
            style={{
              transform: isOpen ? resize : closed,
              height: isOpen ? "70vh" : dynamicHeight,
              margin: "auto",
            }}
            >
            <Routes>
              <Route element={<Landing />} path="/" />
              <Route element={<LoadScreen />} path="/lo" />
              <Route element={<SingleStory />} path="/stories" />
              <Route element={<HighlightsStoriesSwiper />} path="/highlights" />
              <Route element={<ContactUs />} path="/contact" />
              <Route element={<BookNow />} path="/bookNow" />

              <Route element={<SingleBlog />} path="/single-blog" />
              <Route element={<MainBlogPage />} path="/blogs" />
              <Route element={<EducationServicesLanding />} path="/education" />
              <Route element={<MediaProduction />} path="/media-production" />
              <Route
                path="/event-management"
                element={<EventManagementLanding />}
              />
              <Route element={<WebSolutionsLanding />} path="/web-solution" />
              <Route element={<MediaBuyingLanding />} path="/media-buying" />
              <Route element={<SocialMediaLanding />} path="/social-media" />
              <Route element={<SeoLanding />} path="/seo" />
              <Route
                element={<PostProductionLanding />}
                path="/post-production-page"
                />
              <Route
                element={<RentingStudioLanding />}
                path="/renting-studio-page"
                />
              <Route
                element={<PhotographyLanding />}
                path="/photography-page"
                />
              <Route
                element={<VideographyLanding />}
                path="/videography-page"
                />
              <Route
                element={<VirtualProjectLanding />}
                path="/virtual-project-page"
                />
              <Route
                element={<ProjectManagementLanding />}
                path="/project-management-page"
              />
              <Route
                element={<TranningContentLanding />}
                path="/rigister-training-content"
              />
              <Route
                element={<ElectronicMarketingLanding />}
                path="/electronic-marketing-page"
              />
              <Route
                element={<TranningBagsLanding />}
                path="/training-bags-page"
                />
              <Route
                element={<TranningPlatformsLanding />}
                path="/training-platform-page"
                />
              <Route element={<WebDevLanding />} path="/web-dev-page" />
              <Route element={<WebDesignLanding />} path="/web-design-page" />
              <Route
                element={<DevelopmentTestingLanding />}
                path="/web-testing-page"
                />
              <Route
                element={<SocialMediaServicesLanding />}
                path="/social-media-page"
                />
              <Route
                element={<MediaBuyingServicesLanding />}
                path="/media-buying-page"
                />
              <Route
                element={<InfleuncerMarketingLanding />}
                path="/influencer-marketing-page"
                />
              <Route
                element={<SeoServicesLanding />}
                path="/seo-services-page"
                />
              <Route
                element={<ImplementationLanding />}
                path="/implementation-page"
                />
              <Route element={<ConferenceLanding />} path="/Conference-page" />
              {/* start portfolio */}
              <Route element={<PortfolioLanding />} path="/portfolio">
                <Route index element={<Navigate to="all" />} />
                <Route path="all" element={<AllWorks />} />
                <Route path="development" element={<Development />} />
                <Route path="web-design" element={<WebDesgin />} />
                <Route
                  path="development-testing"
                  element={<DevelopmentTesting />}
                  />
                <Route path="social-media" element={<SocialMediaTab />} />
                <Route
                  path="infleuncer-marketing"
                  element={<InfluencerMarketing />}
                  />
                <Route path="seo-services" element={<SeoServices />} />
                <Route path="media-buying" element={<MediaBuyingWorks />} />
                <Route path="post-production" element={<PostProduction />} />
                <Route path="Photography" element={<Photography />} />
                <Route path="videography" element={<Videography />} />
                <Route path="renting-studios" element={<RentingStudios />} />
                <Route
                  path="tranning-platforms"
                  element={<TranningPlatforms />}
                  />
                <Route path="tranning-bags" element={<TranningBags />} />
                <Route
                  path="electronic-marketing"
                  element={<ElectronicMarketing />}
                  />
                <Route path="tranning-content" element={<TranningContent />} />
                <Route
                  path="project-management"
                  element={<ProjectManagement />}
                  />
                <Route path="virtual-project" element={<VirtualProject />} />
                <Route path="Implementation" element={<Implementation />} />
                <Route path="Conference" element={<Conference />} />
              </Route>
              <Route
                element={<PortFolioMediaProduction />}
                path="/portfolio/media-production-datails"
              />
              <Route
                element={<DevelopmentPage />}
                path="/portfolio/development/details"
                />
              <Route
                element={<EducationProjectDetailsLanding />}
                path="/portfolio/education/details"
                />
              <Route
                element={<SocialMediaServDetailsLanding />}
                path="/portfolio/digital/details"
                />
              <Route
                element={<EventServDetailsLanding />}
                path="/portfolio/event/details"
                />
              <Route element={<StudiosLanding />} path="/digital-marketing" />
            </Routes>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </Router>
  </>
  }
    </>
  );
}

export default App;
