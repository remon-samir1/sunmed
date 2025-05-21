import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import "./Footer.css";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Icon } from "@iconify/react";
import Logo from "../Logo/Logo";
import { Axios } from "../Helpers/Axios";
import { Link } from "react-router-dom";
const Footer = () => {
  const [data , setData] = useState([]);

  useEffect(()=>{
    Axios.get('/blogs').then(data=>setData(data.data.data.slice(-3)))


  },[])


  

  return (
    <footer className="Footer">
      <div className="content">
        <div className="getIn">
          <h4 className="header">Get in touch</h4>
          <div className="item">
            <Icon
              icon="fluent:call-32-regular"
              width="12"
              height="12"
              className="icon"
            />
            <span>(+966) 535 338 760</span>
          </div>
          <div className="item">
            <Icon
              icon="fluent:call-32-regular"
              width="12"
              height="12"
              className="icon"
            />

            <span>+201006024005</span>
          </div>
          <div className="item">
            <AiOutlineMail className="icon mt-1" />
            <span>sales@winmarketagency.com</span>
          </div>
          <div className="item">
            <Icon
              icon="fluent:location-12-filled"
              width="12"
              height="12"
              className="icon"
            />
            <span>70 Abu Hayan Al Tawhid,AlHay Alsabea, Nasr city, Egypt</span>
          </div>
          <div className="item">
            <PiShoppingBagOpenFill className="icon" />
            <span>Sunday - Thursday from 9am - 5pm</span>
          </div>
        </div>
        <div className="details">
          <h4 className="header">Our tools</h4>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>ROAS calculator</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>CPC calculator</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>(CTR) calculator</span>
          </div>
        </div>

        <div className="details">
          <h4 className="header">Our services</h4>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>Media Production</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight />
            <span>Social media marketing</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>Media buying</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>SEO</span>
          </div>
          <div className="item">
            <AiOutlineCaretRight className="icon" />
            <span>Website development</span>
          </div>
        </div>
        <div className="blogs">
          <h4 className="header">Blogs</h4>


          {
            data.map((data,index)=>(

<Link key={index} className="blog" to={`/single-blog/${data.uuid}`}>
            <div className="img">
              <img
                src={data.cover}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="text">
            <p >
            {data.title}
            </p>
              <p className="flex items-center gap-1 ">
                <Icon
                  icon="fe:calendar"
                  width="16"
                  height="16"
                  className="icon"
                />
                <span>{
                 new Date(data.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                
                }</span>
              </p>
            </div>
          </Link>

            ))
          }
          {/* <div className="blog">
            <div className="img">
              <img
                src={require("../../Images/blog.png")}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p className="flex items-center gap-1">
                <Icon
                  icon="fe:calendar"
                  width="16"
                  height="16"
                  className="icon"
                />
                <span>21 June, 2025</span>
              </p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img
                src={require("../../Images/blog.png")}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p className="flex items-center gap-1">
                <Icon
                  icon="fe:calendar"
                  width="16"
                  height="16"
                  className="icon"
                />
                <span>21 June, 2025</span>
              </p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img
                src={require("../../Images/blog.png")}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p className="flex items-center gap-1">
                <Icon
                  icon="fe:calendar"
                  width="16"
                  height="16"
                  className="icon"
                />
                <span>21 June, 2025</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="identity">
        <div className="logo">
          <Logo class='md:w-[100px] w-[60px]'/>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="icon-container">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon-container">
            <IoLogoTwitter className="icon" />
          </div>
          <div className="icon-container">
            <IoLogoInstagram className="icon" />
          </div>
          <div className="icon-container">
            <FaLinkedinIn className="icon" />
          </div>
          <div className="icon-container">
            <FaBehance className="icon" />
          </div>
        </div>
        <p>Sunmed.agency@2024.com</p>
      </div>
    </footer>
  );
};

export default Footer;
