import { useState,useContext,useEffect} from "react"
import { ThemeContext } from "./ThemeProvider";

export const LocalThemeBox=()=>{
    const [localtheme,setTheme] = useState('light');
    
    const onChangeHandler=()=>{
        setTheme(localtheme == 'light'?'dark':'light');
    }

    const {theme} = useContext(ThemeContext);

    useEffect(()=>{
        setTheme(theme);
    },[theme])

    return (<>
    <div className={`local-box bg-${localtheme}`}>
         local box
         <button onClick={onChangeHandler}>Local box toggler</button>
    </div>
    </>)
}