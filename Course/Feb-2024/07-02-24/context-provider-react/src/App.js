import './App.css';
import { Product } from './Product';
import { LanguageContext } from './LanguageContext';

function App() {


  return (
    <div className="App">
      <LanguageContext>
        <Product />
      </LanguageContext>


    </div>
  );
}

export default App;
