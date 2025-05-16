import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Axios } from '../../../../../../Components/Helpers/Axios';
const WebDesgin = () => {
  const [data, setData] = useState([]);
    const [skeleton,setSkeleton] = useState(true)
    useEffect(() => {
      Axios.get("/projects").then((data) =>{ 
        setData(data.data.data)
      setSkeleton(false)
      });
    }, []);
    const filter = data.filter(data => data.service.id === 9 )


  return (
    <div className='AllWorks flex development'>


{
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
