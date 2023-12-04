import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div id="container">
            <Header id="header" content="This is the header"/>
            <Main id="main" content="This is the main"/>
            <Footer id="footer" content="This is the footer"/>
        </div>
    );
}

export default App;