import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

  const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  //part 1
 const[getQuote,setQuote] = useState('');
 const [getInput,setInput] = useState('');

 
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
     setInput(getInput+event.target.value);
    }

    if(getQuote){
     return <div>{getQuote}</div>
    }

  //part 2 //part 5
  return (
   
    <div className="App">
       {getInput}
        <input type="text" onChange={onChangeHandler}/>
        {
          keys.map((input)=>{
               return <span key={input}>
                 {input ==' '? <button value={input} onClick={onChangeHandler}>space</button>:<button value={input} onClick={onChangeHandler}>{input}</button>}
               </span>
          })
        }
    </div>
  );
}

export default App;
