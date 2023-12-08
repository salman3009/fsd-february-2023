import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[getWidth,setWidth] = useState(200);

  const [getHeight,setHeight] = useState(200);

  const setWidthIncreaseHandler=()=>{
    setWidth(getWidth+50);
  }

  const setWidthDecreaseHandler=()=>{
    setWidth(getWidth-50);
  }

  const onHeightHandler=(event)=>{
       console.log(event.target.value);
       setHeight(event.target.value);
  }

  

  return (
    <div className="App">
      <img src="https://shorturl.at/dkBCO" style={{width:`${getWidth}px`,height:`${getHeight}px`}}/>
      <br/>
      <button onClick={setWidthIncreaseHandler}>Increase width</button>
      <button onClick={setWidthDecreaseHandler}>Decrease width</button>
      <br/><br/>
      <input type="range" min="200" max="1000" onChange={onHeightHandler}/>
    </div>
  );
}

export default App;
