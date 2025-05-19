import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import './Header.css'
import { Menu } from "../../Context/MenuOpen/MenuContext";
const Header = () => {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen
  const isOpen = menu.isOpen
  return (
    <div className="custom-head ">

    <div className="Header ">
      <header className="flex px-10 justify-between items-center h-20">
        <Logo  class="w-[95px] md:w-[120px]" />
        <div className="menu" onClick={()=>setIsOpen(prev=> !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
    </div>
  );
};

export default Header;
