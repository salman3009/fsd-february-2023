import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const GlobalThemeBox=()=>{
    
    const {theme,setThemeToggler} = useContext(ThemeContext);

    return (<>
   
            <div className={`box bg-${theme}`}>
            {theme}
            </div>
            
       <button onClick={setThemeToggler}>Toggle button</button>
      </>)
}