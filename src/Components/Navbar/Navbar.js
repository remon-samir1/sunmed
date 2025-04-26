import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Menu } from "../../Context/MenuOpen/MenuContext";
const Navbar = () => {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const setIsOpen = menu.setIsOpen;
  return (
    <div className={`navbar ${isOpen && "open"}`}>
      <div className="links">
        <button to="/" className="link">
          Home
        </button>
        <button to="/" className="link">
          Services
        </button>
        <button to="/" className="link">
          Blog
        </button>
        <button to="/" className="link">
          Contact
        </button>
      </div>
      <div className="social-links">
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
      <div className="contact mt-4">
        <div className="flex items-center gap-3 mt-2">
          <IoCallOutline className="icon" />
          <span>(+966) 535 338 760</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <IoCallOutline className="icon" />
          <span>+201006024005</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <AiOutlineMail className="icon" />
          <span>sales@winmarketagency.com</span>
        </div>
      </div>
      {
        isOpen&&
      <div className="close" onClick={()=>setIsOpen(prev=>!prev)}>
        <IoMdClose className="icon" />
      </div>
      }
    </div>
  );
};

export default Navbar;
