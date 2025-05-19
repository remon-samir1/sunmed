import React, { useEffect } from 'react';
import BlogBox from './BlogBox';
import './BlogsContainer.css'
import { Axios } from '../../../../Components/Helpers/Axios';
const BlogsContainer = () => {
  useEffect(()=>{
    Axios.get('/blogs').then(data=>console.log(data))
  },[])
  return (
    <>
    <div  className='BlogsContainer py-9 md:px-[7vw] px-[3vw]' >
      <BlogBox/>
      <BlogBox/>
      <BlogBox/>
      <BlogBox/>
      <BlogBox/>
      <BlogBox/>
    </div>
      <div className="text-center  bg-[#fafafa] py-5">
        <button className='normal-btn'>Load more</button>
      </div>
    </>
  );
}

export default BlogsContainer;
