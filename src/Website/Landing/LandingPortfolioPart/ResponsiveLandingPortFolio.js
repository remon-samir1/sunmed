// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const ResponsiveLandingPortFolio = (props) => {
//   const [OpenMedia, setOpenMedia] = useState(false);
//   const [openeducation, setOpenEducation] = useState(false);
//   const [openWeb, setOpenWeb] = useState(false);
//   const [openDigital, setOpenDigital] = useState(false);

//   return (
//     <div className="ResponsiveWorks">
//         <NavLink onClick={()=>props.setFilter(prev=>!prev)} className='link1' to="all">All</NavLink>

//       <button onClick={() => {
        
//         setOpenMedia((prev) => !prev)}} className="link1">
//         Media Producation
//       </button>
//       <div
//         className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: OpenMedia ? "122px" : "0px" }}
//       >
//         <NavLink
//           onClick={() => {
//             setOpenMedia((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="renting-studios"
//         >
//           Renting Company Studios
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             setOpenMedia((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="post-production"
//         >
//           Post ProducTion
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             setOpenMedia((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="Photography"
//         >
//           Photography
//         </NavLink>

//         <NavLink
//           onClick={() => {
//             setOpenMedia((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="/videography"
//         >
//           Videography
//         </NavLink>
//       </div>
//       <button onClick={() => {
        
//         setOpenEducation((prev) => !prev)}} className="link1">
//         Education Services
//       </button>
//       <div
//         className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: openeducation ? "172px" : "0px" }}
//       >
//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="tranning-platforms"
//         >
//           Management of training platforms
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="tranning-bags"
//         >
//           Preparing training bags
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="electronic-marketing"
//         >
//           Electronic marketing
//         </NavLink>

//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="tranning-content"
//         >
//           Register training content
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="project-management"
//         >
//           Project management
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="virtual-project"
//         >
//           Virtual projects
//         </NavLink>
//       </div>


//       <button onClick={() => setOpenWeb((prev) => !prev)} className="link1">
//         Web Solution
//       </button>
//       <div
//         className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: openWeb ? "50px" : "0px" }}
//       >
//         <NavLink
//           onClick={() => {
//             setOpenWeb((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="web-design"
//         >
//       Web Design
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             setOpenWeb((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="development"
//         >
//           Web Development
//         </NavLink>
      
//       </div>
//       <button onClick={() => setOpenDigital((prev) => !prev)} className="link1">
//       Digital Marketing
//       </button>
//       <div
//         className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: openDigital ? "50px" : "0px" }}
//       >
//         <NavLink
//           onClick={() => {
//             setOpenDigital((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="social-media"
//         >
//       Socail Media
//         </NavLink>
//         <NavLink
//           onClick={() => {
//             setOpenDigital((prev) => !prev);
//             props.setFilter(prev=>!prev)
//           }}
//           className="link"
//           to="media-buying"
//         >
//         Media Buying
//         </NavLink>
      
//       </div>
//     </div>
//   );
// };

// export default ResponsiveLandingPortFolio;
import React, { useState } from "react";

const ResponsiveLandingPortFolio = (props) => {
  const [OpenMedia, setOpenMedia] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigital, setOpenDigital] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);

  return (
    <div className="ResponsiveWorks">
      <button
        onClick={() => {
          props.setFilter(prev => !prev);
          props.setShowData("All");
        }}
        className="link1"
      >
        All
      </button>

      <button onClick={() => setOpenMedia(prev => !prev)} className="link1">
        Media Production
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: OpenMedia ? "122px" : "0px" }}
      >
        <button
          onClick={() => {
            setOpenMedia(false);
            props.setFilter(prev => !prev);
            props.setShowData("renting");
          }}
          className="link"
        >
          Renting Company Studios
        </button>
        <button
          onClick={() => {
            setOpenMedia(false);
            props.setFilter(prev => !prev);
            props.setShowData("postProduction");
          }}
          className="link"
        >
          Post Production
        </button>
        <button
          onClick={() => {
            setOpenMedia(false);
            props.setFilter(prev => !prev);
            props.setShowData("Photography");
          }}
          className="link"
        >
          Photography
        </button>
        <button
          onClick={() => {
            setOpenMedia(false);
            props.setFilter(prev => !prev);
            props.setShowData("Videography");
          }}
          className="link"
        >
          Videography
        </button>
      </div>

      <button onClick={() => setOpenEducation(prev => !prev)} className="link1">
        Education Services
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openEducation ? "172px" : "0px" }}
      >
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("platforms");
          }}
          className="link"
        >
          Management of training platforms
        </button>
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("bags");
          }}
          className="link"
        >
          Preparing training bags
        </button>
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("electronic");
          }}
          className="link"
        >
          Electronic marketing
        </button>
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("trainingContent");
          }}
          className="link"
        >
          Register training content
        </button>
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("Pm");
          }}
          className="link"
        >
          Project management
        </button>
        <button
          onClick={() => {
            props.setFilter(prev => !prev);
            props.setShowData("virtial");
          }}
          className="link"
        >
          Virtual projects
        </button>
      </div>

      <button onClick={() => setOpenWeb(prev => !prev)} className="link1">
        Web Solution
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openWeb ? "50px" : "0px" }}
      >
        <button
          onClick={() => {
            setOpenWeb(false);
            props.setFilter(prev => !prev);
            props.setShowData("webDesign");
          }}
          className="link"
        >
          Web Design
        </button>
        <button
          onClick={() => {
            setOpenWeb(false);
            props.setFilter(prev => !prev);
            props.setShowData("development");
          }}
          className="link"
        >
          Web Development
        </button>
      </div>

      <button onClick={() => setOpenDigital(prev => !prev)} className="link1">
        Digital Marketing
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openDigital ? "50px" : "0px" }}
      >
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("socialMedia");
          }}
          className="link"
        >
          Social Media
        </button>
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("mediaBuying");
          }}
          className="link"
        >
          Media Buying
        </button>
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("influencer");
          }}
          className="link"
        >
        Influencer Marketing
        </button>
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("seo");
          }}
          className="link"
        >
          Seo Services
        </button>
      </div>
      <button onClick={() => setOpenEvent(prev => !prev)} className="link1">
        Event Management
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openEvent ? "50px" : "0px" }}
      >
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("Implementation");
          }}
          className="link"
        >
     Implementation of conference-related work
        </button>
        <button
          onClick={() => {
            setOpenDigital(false);
            props.setFilter(prev => !prev);
            props.setShowData("Conference");
          }}
          className="link"
        >
          Conference management and organization
        </button>
    
    
      </div>
    </div>
  );
};

export default ResponsiveLandingPortFolio;

