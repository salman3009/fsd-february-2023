import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

  //part 1
 const[getQuote,setQuote] = useState('');
 const [getInput,setInput] = useState('');

 //part 3
  useEffect(()=>{
        initial();  
  },[])

  useEffect(()=>{
    if(getInput == "two"){
      initial(); 
    }
  },[getInput])

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

  const onChangeHandler=(event)=>{
     setInput(event.target.value);//asynchronous code
  
    }

    if(getQuote){
     return <div>{getQuote}</div>
    }

  //part 2 //part 5
  return (
    <div className="App">
        <input type="text" onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
