import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Axios } from '../../../../../../Components/Helpers/Axios';
import SkeletonShow from '../../../../../../Components/Skeleton/Skeleton';
const WebDesgin = () => {
  const [data, setData] = useState([]);
    const [skeleton,setSkeleton] = useState(true)
    useEffect(() => {
      Axios.get("/projects").then((data) =>{ 
        setData(data.data.data)
      setSkeleton(false)
      });
    }, []);
    const filter = data.filter(data => data.service.id === 16 )


  return (
    <div className='AllWorks flex development'>


{
   skeleton ?   
   <SkeletonShow height="250px" width="300px" length={3}  />

:  filter.length == 0 ? (
<div className="text-center">
 <p className="text-gray-500 capitalize font-semibold text-[25px] ">
   no projects Added
 </p>
</div>
) :
  filter.map((data , index)=>(
    <div className="work ">
    <div className="details">
      <div className="text">
        <p>{data.title}</p>
        <p>{data.service.title}</p>

      </div>
      <Link to={`/portfolio/development/details/${data.id}`} className="icon-container">

      <Icon icon="solar:arrow-right-linear" width="32" height="32" className='icon' />
      </Link>
    </div>
    <img src={data.attachments[0]} alt="work" loading='lazy' className='work-img'/>
  </div>
  ))
}







    </div>
  );
}

export default WebDesgin;
