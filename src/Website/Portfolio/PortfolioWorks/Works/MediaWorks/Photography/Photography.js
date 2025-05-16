import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../../../../../Components/Helpers/Axios";
const Photography = () => {
  //  GET DATA
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("/projects").then((data) => setData(data.data.data));
  }, []);
  const filter = data.filter((data) => data.service.id === 6);
  return (
    <div className="PostProduction">
      <h3>PROJECTS</h3>
      <div className="projects">
        {filter.length == 0 ? (
          <div className="text-center">
            <p className="text-gray-500 capitalize font-semibold text-[25px] ">
              no projects Added
            </p>
          </div>
        ) : (
          filter.map((data, index) => (
            <Link
              to={`/portfolio/media-production-datails/${data.id}`}
              className="project"
            >
              <img src={data.attachments[0]} alt="projects" loading="lazy" />
              <div className="text">
                <h4>{data.title}</h4>
                <p>{data.service.title}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Photography;
