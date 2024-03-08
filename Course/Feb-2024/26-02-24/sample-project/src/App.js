

import logo from './logo.svg';
import './App.css';
import{useState} from 'react';


function App() {

  const [toggle,setToggle] = useState(false);

  const context =()=>{
    return toggle?'darkMode':'lightMode'
  }

  const list =[
    {
    name:"akash",
    age:33
   },
   {
    name:"satish",
    age:22
   }
];

  return (
    <div className={`App ${context()}`}>
     {list.map((obj,index)=>{
      return (<div key={index}>
         <h1>{obj.name}</h1>
      </div>)
     })}

{list.map((obj,index)=>(
         <div key={index}>
         <h1>{obj.name}</h1>
      </div>)
     )}

    </div>
  );
}

export default App;
