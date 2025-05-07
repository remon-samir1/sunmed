import React from 'react';
import BlogBox from './BlogBox';
import './BlogsContainer.css'
const BlogsContainer = () => {
  return (
    <>
    <div  className='BlogsContainer py-9 px-[7vw]'>
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
