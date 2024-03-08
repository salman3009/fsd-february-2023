import Sub from "./Sub";
function Display(props){
    return (<>
    <h1>Display Component</h1>
    <Sub city={props.city}/>
    </>)
}
export default Display;