import React, { useEffect, useRef, useState } from "react";
import "./Blogs.css";
import Header from "../../../Components/Header/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { Axios } from "../../../Components/Helpers/Axios";
const SingleBlog = () => {
  const [data , setData] = useState([]);

  useEffect(()=>{
    Axios.get('/blogs').then(data=>setData(data.data.data))

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
    <div className="custom-blog">

      <Header />
      <div className="content" dangerouslySetInnerHTML={{__html:filter[0]?.content}}></div>
  
    </div>
    <Footer/>

    </>
  );
};

export default SingleBlog;

