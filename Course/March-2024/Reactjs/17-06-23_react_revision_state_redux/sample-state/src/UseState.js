import {useState} from 'react';

function UseState(){

    const [getState,setState]=useState('suresh');
 
 
   return (
     <>
     <div>{getState}</div>
     <div><input type="text" onChange={(event)=>setState(event.target.value)}/></div>
     </>
   )
 }

 
