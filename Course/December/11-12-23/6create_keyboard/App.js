import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {

  const [getInput,setInput] = useState('');
  
  const onClickHandler=(event)=>{
     setInput(getInput+event.target.value);
  }
  return (
    <div className="keyboard">
      <div className="preview">{getInput}</div>
      <div>
        {keys.map(( key) => (
          <button key={key} value={key} onClick={onClickHandler} id={key === " " ? `key-space` : `key-${key}`}>
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;