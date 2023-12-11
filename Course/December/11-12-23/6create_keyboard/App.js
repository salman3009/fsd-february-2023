import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {

  const [getInput,setInput] = useState('');
  const [getQuote,setQuote] = useState('');
  
  const onClickHandler=(key)=>{
     setInput(getInput + key);
  }

  useEffect(()=>{
    if(getInput == "forty two"){
          initial();
    }
  },[getInput])

  const initial=async ()=>{
       try{
        let response = await fetch("https://api.quotable.io/random");
        response = await response.json();
        setQuote(response.content);
       }catch(err){
           console.log("error");
       }
  }

  if(getQuote){
     return (
      <div className="quote">{getQuote}</div>
      );
  }

  return (
    <div className="keyboard">
      <div className="preview">{getInput}</div>
      <div>
        {keys.map(( key) => (
          <button key={key} onClick={()=>onClickHandler(key)} id={key === " " ? `key-space` : `key-${key}`}>
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;