import { useState,useContext} from "react"
import { ThemeContext } from "./ThemeProvider";

export const LocalThemeBox=()=>{
    // const [theme,setTheme] = useState('light');
    
    // const onChangeHandler=()=>{
    //     setTheme(theme == 'light'?'dark':'light');
    // }

    const {theme,setThemeToggler} = useContext(ThemeContext);

    return (<>
    <div className={`local-box bg-${theme}`}>
         local box
         {/* <button onClick={onChangeHandler}>Local box toggler</button> */}
         <button onClick={setThemeToggler}>Local box toggler</button>
    </div>
    </>)
}