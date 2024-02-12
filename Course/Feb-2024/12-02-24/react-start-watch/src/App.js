import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';


function App() {
  
   const startTime = useRef(0);
   const intervalRef = useRef(0);
  const [currenTime,setCurrentTime] = useState(0);


   let secondsElapsed = 0;

   const startStopWatch=()=>{
    startTime.current = Date.now();
    intervalRef.current = setInterval(()=>{
       setCurrentTime(Date.now());
    },10)
   }

   secondsElapsed = (currenTime - startTime.current)/1000;

  return (
    <div className="App">
      <h1>{secondsElapsed.toFixed(3)}</h1>
      <section>
        <button onClick={startStopWatch}>Start</button>
      </section>
    </div>
  );
}

export default App;
