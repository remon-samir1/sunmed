import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const BlogBox = (props) => {
  return (
    <Link className="blog" to={`/single-blog/${props.id}`}>
    <div className="img">
      <img src={props.cover} loading='lazy' alt="blog" />
      <p>
    {props.title}
      
      </p>
    </div>
    <div className="content">
      <div>

      <h3>
    {props.title}
      </h3>
      <p className='content-blog' dangerouslySetInnerHTML={{__html:  props.content}}>

      </p>
      </div>
      <div className=" flex justify-between items-center">
        <span>By sunmed agency</span>
        <FaArrowRightLong className="icon" />
      </div>
    </div>
  </Link>
  );
}

export default BlogBox;
