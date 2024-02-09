import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const {theme} = React.useContext(ThemeContext)
    const txtColor = `txt-${theme}`
    
    return(
        <div className={"container "+`bg-${theme}`} id="themed-page">
            <p className={txtColor} id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme} ${txtColor}`} id="themed-button">Sup</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }