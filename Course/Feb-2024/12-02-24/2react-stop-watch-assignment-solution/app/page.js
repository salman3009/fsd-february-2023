'use client'
import React, { useRef, useState } from 'react'

const Home = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  let secondsElapsed = 0;

  const startStopWatch = () => {
    startTime.current = Date.now();
    intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  }

  const stopStopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
  }

  secondsElapsed = ((currentTime - startTime.current) / 1000);

  const resetStopWatch = () => {
    setCurrentTime(0);
    startTime.current = 0;
    secondsElapsed = 0;
    setLaps([]);
  }

  const trackLaps = () => {
    setLaps([...laps, secondsElapsed])
  }

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{secondsElapsed.toFixed(3)}</h1>
        <section className='buttons'>
          <button onClick={startStopWatch} className="start-btn">START</button>
          <button onClick={stopStopWatch} className="stop-btn">STOP</button>
          <button onClick={trackLaps} className="lap-btn">LAP</button>
          <button onClick={resetStopWatch} className="reset-btn">RESET</button>
        </section>
      </section>
      {laps?.length ? (
        <section className='lap-section'>
          <h2>Laps</h2>
          <section className='laps'>
            {laps.map((lap) => (
              <p key={lap}>{lap}</p>
            ))}
          </section>
        </section>
      ) : null}
    </div>
  )
}


export default Home;
