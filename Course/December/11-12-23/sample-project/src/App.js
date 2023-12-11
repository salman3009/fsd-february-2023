import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

  //part 1
 const[getQuote,setQuote] = useState('');

 //part 3
  useEffect(()=>{
        initial();  
  },[])

  //part 4
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


  //part 2 //part 5
  return (
    <div className="App">
        <h1>{getQuote}</h1>
    </div>
  );
}

export default App;
