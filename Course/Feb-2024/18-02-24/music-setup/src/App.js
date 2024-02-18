import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {SideBar} from './SideBar';
import {Home} from './Home';
import { Browse } from './Browse';

function App() {
  return (
    <div>
<div className="App">
       <BrowserRouter>
       <div className="leftBar">
           <SideBar/>
       </div>
       <div className="rightBar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
       </div> 
       </BrowserRouter>
    </div>
    <div className="footer">
        <div className="sectionOne">Section 1</div>
        <div className="sectionTwo">Section 2</div>
        <div className="sectionThree">Section 3</div>
        <div className="sectionFour">Section 4</div>
       </div>
    </div>
    
  );
}

export default App;
