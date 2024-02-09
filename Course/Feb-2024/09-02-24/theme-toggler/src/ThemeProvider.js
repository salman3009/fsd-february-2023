
import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider=(props)=>{
     const [theme,setTheme] = useState('light');

     const setThemeToggler=()=>{
        setTheme(theme == "light"?"dark":"light");
     }

      return (<>
      <ThemeContext.Provider value={{theme,setThemeToggler}}>
      {props.children}
      </ThemeContext.Provider>
         
      </>)
}