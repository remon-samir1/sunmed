import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Axios } from "../../../../../Components/Helpers/Axios";
import SkeletonShow from "../../../../../Components/Skeleton/Skeleton";
const SocialMediaTab = () => {
  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    Axios.get("/projects").then((data) => {
      setData(data.data.data);
      setSkeleton(false);
    });
  }, []);
  const filter = data.filter((data) => data.service.id === 19);
  return (
    <div className="AllWorks flex">
      <div className="img-container">
        {skeleton ? (
          <div className="flex gap-6">
            <SkeletonShow height="250px" width="300px" length={3} />
          </div>
        ) : filter.length == 0 ? (
          <div className="text-center">
            <p className="text-gray-500 capitalize font-semibold text-[25px] ">
              no projects Added
            </p>
          </div>
        ) : (
          filter?.map((data, index) => (
            <Link
              key={index}
              to={`/portfolio/digital/details/${data.id}`}
              className="work"
            >
              <div className="details">
                <div className="text">
                  <p>{data.title}</p>
                  <p>{data.service.title}</p>
                </div>
                <div className="icon-container">
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="32"
                    height="32"
                    className="icon"
                  />
                </div>
              </div>
              <img src={data.attachments[0]} alt="work" loading="lazy" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SocialMediaTab;
