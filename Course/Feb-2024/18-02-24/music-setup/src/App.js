import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {SideBar} from './SideBar';
import {Home} from './Home';
import { Browse } from './Browse';

function App() {
  return (
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
  );
}

export default App;
