import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
        initial();  
  },[])

  const initial= async ()=>{
        try{ 
          let response = await fetch('https://api.quotable.io/random');
          response = await response.json();
          console.log(response.content);

        }catch(err){
          alert("error");
        }
  }


  return (
    <div className="App">
        hello world
    </div>
  );
}

export default App;
