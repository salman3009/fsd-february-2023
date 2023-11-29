import './App.css';
import {useState} from 'react';

function Employee(){
     
  

    const[getAge,setAge] = useState(76);

    const updateAgeDetails = ()=>{
        
    }

    return <div id="heading" className="headingDetails">
           <div>{getAge}</div>
           <button onClick={updateAgeDetails}>Submit</button>
          </div>
  
}

export default Employee;
//Employee component name