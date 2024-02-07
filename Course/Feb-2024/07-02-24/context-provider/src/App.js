import './App.css';
import { Product } from './Product';
import  { useState,createContext } from 'react';

export const UserLanguage = createContext();

function App() {
  const [getLanguage,setLanguage] = useState("en");

  const setLanguageHandler=(event)=>{
    setLanguage(event.target.value)
  }

  return (
    <div className="App">
      <UserLanguage.Provider value={{getLanguage,setLanguageHandler}}>
        <Product />
      </UserLanguage.Provider>

    </div>
  );
}

export default App;
