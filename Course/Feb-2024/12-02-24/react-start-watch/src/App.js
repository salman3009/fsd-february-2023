import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';


function App() {
  
   const startTime = useRef(0);
   const intervalRef = useRef(0);
  const [currenTime,setCurrentTime] = useState(0);
  const [laps,setLaps] = useState([]);


   let secondsElapsed = 0;

   const startStopWatch=()=>{
    startTime.current = Date.now();
    intervalRef.current = setInterval(()=>{
       setCurrentTime(Date.now());
    },10)
   }

   const stopWatch=()=>{
      clearInterval(intervalRef.current)
   }

   const resetWatch=()=>{
      setCurrentTime(0);
      secondsElapsed = 0;
      startTime.current=0;
      clearInterval(intervalRef.current); 
      setLaps([]);  
   }

   secondsElapsed = (currenTime - startTime.current)/1000;

   const lapWatch=()=>{
    setLaps([...laps,secondsElapsed]);
   }

  return (
    <div className="App">
      <h1>{secondsElapsed.toFixed(3)}</h1>
      <section>
        <button onClick={startStopWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
        <button onClick={resetWatch}>Reset</button>
        <button onClick={lapWatch}>Lap</button>
      </section>
       {
        laps.map((obj)=>{
          return (<p key={obj}>
              {obj}
          </p>)
        })
       }
    </div>
  );
}

export default App;
