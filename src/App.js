import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Website/Landing/Landing";
import Navbar from './Components/Navbar/Navbar';
import MenuContext, { Menu } from './Context/MenuOpen/MenuContext';
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
import Blogs from "./Website/Blogs/Blogs";
import HighlightsStories from "./Components/SingleStory/SingleStory";
import StoryWithHeaderAndClose from "./Components/SingleStory/SingleStory";
import SingleStory from "./Components/SingleStory/SingleStory";
import HighlightCard from "./Components/HighLights/HighLights";
import Highlights from "./Components/HighLights/HighLights";
import HighlightsPage from "./Components/HighLights/HighLights";
import HighlightsStoriesSwiper from "./Components/HighLights/HighLights";
import Loading from "./Components/Loading/loading";
import LoadingContext, { LoadingCon } from "./Context/LoadingContext/LoadingContext";

function App() {
  // height on open navbar
  const [dynamicHeight ,setDynamicHeight ] = useState('100vh')
  const menu = useContext(Menu)
  const closed = "translate3d(0, 0, 0) scaleY(1)"; 
  const isOpen = menu.isOpen
  const resize =  window.innerWidth > 600 ? "translate3d(-400px, 20%, 0) scaleY(1)" : " translate3d(-330px, 20%, 0) scaleY(1)"
  //  set Loading screen
  const LoadingContext = useContext(LoadingCon)
  const loading = LoadingContext.loading
  useEffect(() => {
    if(!isOpen){
  setDynamicHeight('100vh')
      
      const timer = setTimeout(() => {
        setDynamicHeight('auto');
      }, 700); 
      
      
      return () => clearTimeout(timer);
    }else{
      setDynamicHeight('100vh')
    }

}, [isOpen]);
  return (
      <>
      {
loading &&
<Loading/>

      }
    <Router>
    <div className=' flex'>
    <div className={`duration-700 flex-1  overflow-auto  will-change-transform`} style={{ transform: isOpen ? resize: closed , height:isOpen?'70vh' : dynamicHeight,margin:'auto'}} >

      <Routes>

        <Route element={<Landing />} path="/" />
        <Route element={<SingleStory />} path="/stories" />
        <Route element={<HighlightsStoriesSwiper />} path="/highlights" />
        <Route element={<ContactUs />} path="/contact" />
        <Route element={<BookNow />} path="/bookNow" />
        <Route element={<Blogs />} path="/blog" />
        <Route element={<MediaProduction />} path="/media-production" />
        <Route element={<WebSolutionsLanding />} path="/web-solution" />
        <Route element={<MediaBuyingLanding />} path="/media-buying" />
        <Route element={<SocialMediaLanding />} path="/social-media" />
        <Route element={<SeoLanding />} path="/seo" />
        <Route element={<PortfolioLanding />} path="/portfolio" />
        <Route element={<PortFolioMediaProduction />} path="/portfolio/media-production-datails" />
        <Route element={<DevelopmentPage />} path="/portfolio/development" />
      </Routes>
    </div>
    <div>
      <Navbar/>
    </div>
    </div>
    </Router>
      </>
  );
}

export default App;


