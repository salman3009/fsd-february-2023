import React from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () =>{
    const {theme,toggleTheme} = React.useContext(ThemeContext)

    return (
        <button class={`btn btn-${theme} txt-${theme}`} onClick={toggleTheme} id="global-theme-toggler">
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    )

}
export {ThemeToggleButton}