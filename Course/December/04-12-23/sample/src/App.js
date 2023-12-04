import './App.css';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <Product name="samsung" price="200"/>
      <Product name="sony" price="400"/>
      <Product name="lg" price="260"/>
      <Product name="nokia" price="800"/>
    </div>
  );
}

export default App;
