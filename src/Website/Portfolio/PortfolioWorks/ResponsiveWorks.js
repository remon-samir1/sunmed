import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ResponsiveWorks = (props) => {
  const [OpenMedia, setOpenMedia] = useState(false);
  const [openeducation, setOpenEducation] = useState(false);
  const [openWeb, setOpenWeb] = useState(false);
  const [openDigital, setOpenDigital] = useState(false);

  return (
    <div className="ResponsiveWorks">
        <NavLink onClick={()=>props.setFilter(prev=>!prev)} className='link1' to="all">All</NavLink>

      <button onClick={() => {
        
        setOpenMedia((prev) => !prev)}} className="link1">
        Media Producation
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: OpenMedia ? "122px" : "0px" }}
      >
        <NavLink
          onClick={() => {
            setOpenMedia((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="renting-studios"
        >
          Renting Company Studios
        </NavLink>
        <NavLink
          onClick={() => {
            setOpenMedia((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="post-production"
        >
          Post ProducTion
        </NavLink>
        <NavLink
          onClick={() => {
            setOpenMedia((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="Photography"
        >
          Photography
        </NavLink>

        <NavLink
          onClick={() => {
            setOpenMedia((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="/videography"
        >
          Videography
        </NavLink>
      </div>
      <button onClick={() => {
        
        setOpenEducation((prev) => !prev)}} className="link1">
        Education Services
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openeducation ? "172px" : "0px" }}
      >
        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="tranning-platforms"
        >
          Management of training platforms
        </NavLink>
        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="tranning-bags"
        >
          Preparing training bags
        </NavLink>
        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="electronic-marketing"
        >
          Electronic marketing
        </NavLink>

        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="tranning-content"
        >
          Register training content
        </NavLink>
        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="project-management"
        >
          Project management
        </NavLink>
        <NavLink
          onClick={() => {
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="virtual-project"
        >
          Virtual projects
        </NavLink>
      </div>


      <button onClick={() => setOpenWeb((prev) => !prev)} className="link1">
        Web Solution
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openWeb ? "50px" : "0px" }}
      >
        <NavLink
          onClick={() => {
            setOpenWeb((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="web-design"
        >
      Web Design
        </NavLink>
        <NavLink
          onClick={() => {
            setOpenWeb((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="development"
        >
          Web Development
        </NavLink>
      
      </div>
      <button onClick={() => setOpenDigital((prev) => !prev)} className="link1">
      Digital Marketing
      </button>
      <div
        className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: openDigital ? "50px" : "0px" }}
      >
        <NavLink
          onClick={() => {
            setOpenDigital((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="social-media"
        >
      Socail Media
        </NavLink>
        <NavLink
          onClick={() => {
            setOpenDigital((prev) => !prev);
            props.setFilter(prev=>!prev)
          }}
          className="link"
          to="media-buying"
        >
        Media Buying
        </NavLink>
      
      </div>
    </div>
  );
};

export default ResponsiveWorks;
