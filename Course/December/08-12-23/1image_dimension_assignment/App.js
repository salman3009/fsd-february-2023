import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [getHeight, setHeight] = useState(320);
  const [getWidth, setWidth] = useState(320);

  const setHeightHandler = (event) => {
    setHeight(event.target.value);
  }

  const setWidthHandler = (event) => {
    setWidth(event.target.value);
  }
  return (
    <div id="main">
      <img src="https://shorturl.at/dkBCO" style={{ width: `${getWidth}px`, height: `${getHeight}px` }} id="resizable-img" />
      <br />
      <input id="height-slider" type="range" min="100" max="800" onChange={setHeightHandler} />
      <br />
      <input id="width-slider" type="range" min="100" max="800" onChange={setWidthHandler} />

    </div>
  )
}


export default App;