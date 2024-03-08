import Mini from "./Mini";
import { UserContext } from "./App";

function Sub(props){
    return (<>
    <h1>Sub Component</h1>
     <UserContext.Consumer>
        {
            obj=>{
                return <h5>{obj}</h5>
            }
        }
     </UserContext.Consumer>
    <Mini city={props.city}/>
    </>)
}

export default Sub;