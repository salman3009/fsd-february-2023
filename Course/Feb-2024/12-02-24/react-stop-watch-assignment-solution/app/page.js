'use client'
import React, { useRef, useState } from 'react'

function Home() {

  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

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

  secondsElapsed = (currentTime - startTime.current)/1000;

  const lapWatch=()=>{
   setLaps([...laps,secondsElapsed]);
  }


  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{secondsElapsed}</h1>
        <section className='buttons'>
          <button onClick={startStopWatch} className="start-btn">START</button>
          <button onClick={stopWatch} className="stop-btn">STOP</button>
          <button onClick={lapWatch} className="lap-btn">LAP</button>
          <button onClick={resetWatch} className="reset-btn">RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
        {
        laps.map((obj)=>{
          return (<p key={obj}>
              {obj}
          </p>)
        })
       }
        </section>
      </section>
    </div>
  )
}

export default Home
