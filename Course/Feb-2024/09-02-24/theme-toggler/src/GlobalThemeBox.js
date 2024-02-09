import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import {LocalThemeBox} from './LocalThemeBox';

export const GlobalThemeBox=()=>{
    
    const {theme,setThemeToggler} = useContext(ThemeContext);

    return (<>
   
            <div className={`box bg-${theme}`}>
                  <LocalThemeBox/> 
            </div>
            
       <button onClick={setThemeToggler}>Toggle button</button>
      </>)
}