import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {

    const images = [
        'https://shorturl.at/efGQZ',
        'https://shorturl.at/ptHMR',
        'https://shorturl.at/brsz3',
        'https://shorturl.at/tGJVY',
        'https://shorturl.at/etx14'
    ];

    const [getIndex, setIndex] = useState(0);

    const nextButtonHandler = () => {
        if (getIndex >= (images.length - 1)) {
            setIndex(0);
        } else {
            setIndex(getIndex + 1);
        }
    }

    const previousButtonHandler = () => {
        if (getIndex <= 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(getIndex - 1);
        }
    }

    return (
        <div className="container">
            <h1 className="title">Slideshow</h1>
            <div className="slideshow">
                <button className="prev-button" onClick={previousButtonHandler}>Previous</button>
                <img src={images[getIndex]} className="image" alt="Slideshow" />
                <button className="next-button" onClick={nextButtonHandler} >Next</button>
            </div>
        </div>
    );
};

export default App;
