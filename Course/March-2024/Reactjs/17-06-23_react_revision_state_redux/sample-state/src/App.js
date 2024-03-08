import StateUpdateWithoutHooks from "./StateUpdateWithoutHooks";
import UseState from "./UseState";
import UseReducer from "./UseReducer";
import Display from "./Display";
import { useState } from "react";
import React from "react";

export const UserContext = React.createContext();


function App(){

  const [getCity,setCity] = useState('Delhi');

  return (
    <>
   {/* <StateUpdateWithoutHooks/> */}
   {/* <UseState/> */}
   {/* <UseReducer/> */}
   <UserContext.Provider value={getCity}> 
   <Display city={getCity}/>
   </UserContext.Provider>
  
    </>
  )
}
export default App;