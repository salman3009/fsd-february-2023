import './App.css';
import {useState} from 'react';

function Employee(){
     
    const[getFlag,setFlag]= useState(false);
    const updateChangeHandler=()=>{
        setFlag(true)
    }

    return <div id="heading" className="headingDetails">
           
           <button onClick={updateChangeHandler}>click here</button>
            {getFlag && <p>Welcome to javascript</p>}
          </div>
  
}

export default Employee;
//Employee component name