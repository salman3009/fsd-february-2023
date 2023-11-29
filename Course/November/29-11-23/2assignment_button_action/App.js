import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const[getFlag,setFlag] = useState(false);

  const displayPara = ()=>{
    setFlag(true);
  }

  return (
    <div id="main">
    {getFlag && <p id="para">
     Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
     </p>} 
     <button id="click" onClick={displayPara}>click here</button>
    </div>
  );
}


export default App;