import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

  const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  console.log(keys);
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

  const onChangeHandler=(key)=>{
     alert(key);
     setInput(key);//asynchronous code
  
    }

    if(getQuote){
     return <div>{getQuote}</div>
    }

  //part 2 //part 5
  return (
    <div className="App">
        <button onClick={()=>onChangeHandler("details")}>Details</button>
        {/* <input type="text" onChange={onChangeHandler}/> */}
        {
          keys.map((input)=>{
               return <span key={input}>
                 {input ==' '? <button onClick={()=>onChangeHandler(input)}>space</button>:<button onClick={()=>onChangeHandler(input)}>{input}</button>}
               </span>
          })
        }
    </div>
  );
}

export default App;
