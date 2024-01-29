import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Products from './Products';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
         <Routes>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/products" element={<Products/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;