import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Website/Landing/Landing";
import Navbar from './Components/Navbar/Navbar';
import MenuContext, { Menu } from './Context/MenuOpen/MenuContext';
import { useContext } from "react";
import WebDevelopment from "./Website/Landing/OverView/WebDevelopment/WebDevelopment";

function App() {
  const menu = useContext(Menu)
  const isOpen = menu.isOpen
  const resize =  window.innerWidth > 600 ?"translate3d(-400px, 20%, 0) scaleY(1)" : " translate3d(-330px, 20%, 0) scaleY(1)"
  return (
    <div className='relative flex'>
    <div className={`duration-500 flex-1 overflow-auto`} style={{ transform: isOpen && resize , maxHeight:isOpen&&'70vh', margin:isOpen&&'auto'}} >

    <Router>
      <Routes>

        <Route element={<Landing />} path="/" >
          <Route element={<WebDevelopment/>} path="web"/>
        </Route>
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
