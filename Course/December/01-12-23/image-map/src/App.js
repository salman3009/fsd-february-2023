import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const image=[11,22,33,44,55];
  const [getIndex,setIndex] = useState(0);

  const NextPageHandler=()=>{
    if(getIndex>=(image.length-1)){
      setIndex(0);
    }else{
      setIndex(getIndex+1);
    }  
  }

  const previousPageHandler=()=>{
    //4<=4
    if(getIndex<=0){
      setIndex(0);
    }else{
      setIndex(getIndex-1);
    }  
  }
  

  return (
    <div className="App">
         <div>{undefined}{false}{null}{''}</div>
         <div>{image[getIndex]}</div>
         <button onClick={previousPageHandler}>Previous</button>
         <button onClick={NextPageHandler}>Next</button>
    </div>
  );
}

export default App;
