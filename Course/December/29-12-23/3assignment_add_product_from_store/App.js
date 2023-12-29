import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Favorites from './Favorites';

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<SingleProduct />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
