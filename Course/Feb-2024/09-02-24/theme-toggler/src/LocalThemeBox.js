import { useState } from "react"


export const LocalThemeBox=()=>{
    const [theme,setTheme] = useState('light');
    
    const onChangeHandler=()=>{
        setTheme(theme == 'light'?'dark':'light');
    }
    return (<>
    <div className={`local-box bg-${theme}`}>
         local box
         <button onClick={onChangeHandler}>Local box toggler</button>
    </div>
    </>)
}