import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

 const[getQuote,setQuote] = useState('');

  useEffect(()=>{
        initial();  
  },[])

  const initial= async ()=>{
        try{ 
          let response = await fetch('https://api.quotable.io/random');
          response = await response.json();
          console.log(response.content);
          setQuote(response.content);

        }catch(err){
          alert("error");
        }
  }


  return (
    <div className="App">
        <h1>{getQuote}</h1>
    </div>
  );
}

export default App;
