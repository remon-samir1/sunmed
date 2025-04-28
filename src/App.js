import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Website/Landing/Landing";
import Navbar from './Components/Navbar/Navbar';
import MenuContext, { Menu } from './Context/MenuOpen/MenuContext';
import { useContext, useEffect, useState } from "react";
import WebDevelopment from "./Website/Landing/OverView/WebDevelopment/WebDevelopment";

function App() {
  const [dynamicHeight ,setDynamicHeight ] = useState('100vh')
  const menu = useContext(Menu)
  const closed = "translate3d(0, 0, 0) scaleY(1)"; 
  const isOpen = menu.isOpen
  const resize =  window.innerWidth > 600 ? "translate3d(-400px, 20%, 0) scaleY(1)" : " translate3d(-330px, 20%, 0) scaleY(1)"
  useEffect(() => {
    if(!isOpen){
  setDynamicHeight('100vh')
      
      const timer = setTimeout(() => {
        setDynamicHeight('auto');
      }, 700); 
      
      
      return () => clearTimeout(timer);
    }else{
      setDynamicHeight('100vh')
    }

}, [isOpen]);
  return (
    <div className='relative flex'>
    <div className={`duration-700 flex-1 overflow-auto will-change-transform`} style={{ transform: isOpen ? resize: closed , height:isOpen?'70vh' : dynamicHeight,margin:'auto'}} >

    <Router>
      <Routes>

        <Route element={<Landing />} path="/" />
      </Routes>
    </Router>
    </div>
    <div>
      <Navbar/>
    </div>
    </div>
  );
}

export default App;


