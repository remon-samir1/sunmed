import React, { useEffect, useState } from 'react';
import BlogBox from './BlogBox';
import './BlogsContainer.css'
import { Axios } from '../../../../Components/Helpers/Axios';
const BlogsContainer = () => {
  const [data , setData] = useState([]);

  useEffect(()=>{
    Axios.get('/blogs').then(data=>setData(data.data.data))


  },[])
  
  return (
    <>
    <div  className='BlogsContainer py-2 md:py-9 md:px-[7vw] px-[3vw]' >
      {
        data.map((data,index)=>(
    

          <BlogBox key={index} cover={data.cover} id={data.uuid} content={data.content} title={data.title}/>
        ))
      }
    
    </div>
      <div className="text-center  bg-[#fafafa] py-5">
        {/* <button className='normal-btn'>Load more</button> */}
      </div>
    </>
  );
}

export default BlogsContainer;
