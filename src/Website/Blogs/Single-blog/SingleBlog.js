import React, { useEffect, useRef, useState } from "react";
import "./Blogs.css";
import Header from "../../../Components/Header/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { Axios } from "../../../Components/Helpers/Axios";
import SkeletonShow from "../../../Components/Skeleton/Skeleton";
const SingleBlog = () => {
  const [data , setData] = useState([]);
  const [skeleton , setSkeleton] = useState(true)
  useEffect(()=>{
    Axios.get('/blogs').then(data=>{
      setSkeleton(false)
      setData(data.data.data)})

  },[])
  const {id} =useParams() 
const filter = data.filter(data=>data.uuid == id)
  
console.log(filter);



  const scrollRef = useRef(null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <>
    <div ref={scrollRef}></div>
    <div className="custom-blog ">

      <Header />
    {   skeleton? 
    <>
    <div className="text-center px-[7vw]">
      
    <SkeletonShow length ={1} height='60vh' width="100%"/>
    </div>
    <div className="text-center px-[7vw]">
    <SkeletonShow length ={10} height='15px' class='mt-8' width="100%"/>

    </div>
    </>
    :
    <>
      <div className="img px-[7vw]">
      <img src={filter[0]?.cover} alt="" />
      </div>
      <div className="content px-[7vw]" dangerouslySetInnerHTML={{__html:filter[0]?.content}}></div>
      
      </>
      }
  
    </div>
    <Footer/>

    </>
  );
};

export default SingleBlog;

