import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Artists from "./Artists";
const Artists = lazy(() => import("./Artists"))
class App extends React.Component {
 render(){
    return(<div>
        <BrowserRouter>
        <Suspense fallback={<h1>Still Loading…</h1>}>
        <Routes>
        <Route path="/artist" element={<Artists/>}></Route>
        </Routes>
        </Suspense>
        </BrowserRouter>
       </div>)
 }
}
ReactDOM.render(<App />, document.getElementById("root"));