import { UserContext } from "./App";

function Mini(props){
    return (<>
     <h1>Mini component</h1>
     <UserContext.Consumer>
        {
            (obj)=>{
               return <h3>The city name is -{obj} </h3>
            }
        }
     </UserContext.Consumer>
     
    </>)
}
export default Mini;