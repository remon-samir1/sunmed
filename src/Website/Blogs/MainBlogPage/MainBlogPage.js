
import React from 'react';
import HeroBlogsPage from './HeroBlogsPage/HeroBlogsPage';
import BlogsContainer from './BlogsContainer/BlogsContainer';
import Footer from '../../../Components/Footer/Footer';

const MainBlogPage = () => {
  return (
    <div className='overflow-hidden'>
      <HeroBlogsPage/>
      <BlogsContainer/>
      <Footer/>
    </div>
  );
}

export default MainBlogPage;
