import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
 
 const[getCounterOne,setCounterOne] = useState(0);
 const [getCounterTwo,setCounterTwo] = useState(0);

 const counterOneHandler=()=>{
   setCounterOne(getCounterOne+1);
 }

 const counterTwoHandler=()=>{
     setCounterTwo(getCounterTwo+1);
 }

  return (
    <div id="main">
      <button id="btnA" onClick={counterOneHandler}>
        Increment A
      </button>
      <button id = "btnB" onClick={counterTwoHandler}>
        Increment B
      </button>
      <div id="countA">{getCounterOne}</div>
      <div id = "countB">{getCounterTwo}</div>
    </div>
  )
}


export default App;