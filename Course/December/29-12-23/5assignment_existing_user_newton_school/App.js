import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <div id="main">
    <Router>
      <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </Router>
    </div>
  )
}


export default App;
