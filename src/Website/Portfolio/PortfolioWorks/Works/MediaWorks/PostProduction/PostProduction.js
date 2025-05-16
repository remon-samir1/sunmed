import React, { useEffect, useState } from 'react';
import './PostProduction.css'
import { Link } from 'react-router-dom';
import { Axios } from '../../../../../../Components/Helpers/Axios';
import SkeletonShow from '../../../../../../Components/Skeleton/Skeleton';
const PostProduction = () => {


    //  GET DATA
    const [data, setData] = useState([]);
    const [skeleton,setSkeleton] = useState(true)
    useEffect(() => {
      Axios.get("/projects").then((data) =>{ 
        setData(data.data.data)
      setSkeleton(false)
      });
    }, []);
    const filter = data.filter(data => data.service.id === 5 )
  return (
    <div className='PostProduction'>
      <h3>PROJECTS</h3>
      <div className="projects">
      {
       skeleton ?   
              <SkeletonShow height="250px" width="300px" length={3}  />
        
    :  filter.length == 0 ? (
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
}

export default PostProduction;
