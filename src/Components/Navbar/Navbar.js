import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Menu } from "../../Context/MenuOpen/MenuContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openServe, setOpenServe] = useState(false);
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const setIsOpen = menu.setIsOpen;

  return (
    <div className={`navbar ${isOpen && "open"}`}>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <button onClick={() => setOpenServe(prev => !prev)} className="link">
          Services
        </button>
        <div
          className="services-list m-0 flex flex-col justify-start items-start gap-[6px] overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: openServe ? '122px' : '0px' }}
        >
          <Link className="link" to="/media-production">Media production</Link>
          <Link className="link" to="/">Education services</Link>
          <Link className="link" to="/web-solution">Web solution</Link>
          <Link className="link" to="/">Digital marketing</Link>
          <Link className="link" to="/">Event management</Link>
        </div>
        <Link to="/" className="link">
          Blog
        </Link>
        <Link to="/" className="link">
          Contact
        </Link>
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
      {isOpen && (
        <div className="close" onClick={() => setIsOpen(prev => !prev)}>
          <IoMdClose className="icon" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
