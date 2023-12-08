import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[getWidth,setWidth] = useState(200);

  const setWidthIncreaseHandler=()=>{
    setWidth(getWidth+50);
  }

  const setWidthDecreaseHandler=()=>{
    setWidth(getWidth-50);
  }

  return (
    <div className="App">
      <img src="https://shorturl.at/dkBCO" style={{width:`${getWidth}px`,height:"200px"}}/>
      <br/>
      <button onClick={setWidthIncreaseHandler}>Increase width</button>
      <button onClick={setWidthDecreaseHandler}>Decrease width</button>
    </div>
  );
}

export default App;
