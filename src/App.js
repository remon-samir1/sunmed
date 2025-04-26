import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Website/Landing/Landing";
import Navbar from './Components/Navbar/Navbar';
import MenuContext, { Menu } from './Context/MenuOpen/MenuContext';
import { useContext } from "react";

function App() {
  const menu = useContext(Menu)
  const isOpen = menu.isOpen
  return (
    <div className='relative flex'>
    <div className={`duration-500 flex-1 overflow-auto`} style={{ transform: isOpen &&"translate3d(-400px, 20%, 0) scaleY(1)" , maxHeight:isOpen&&'70vh', margin:isOpen&&'auto'}} >

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
