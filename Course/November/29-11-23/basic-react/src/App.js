import './App.css';

function Employee(){
     
    let age = 56;

    const displayMessage = ()=>{
        alert("display");
    }

    return <div id="heading" className="headingDetails">
         <h1>hello world - salman</h1>
           <div>{2+2}</div>
           <div>{age}</div>
           <div>{age>=56?<h1>Yes</h1>:<h1>No</h1>}</div>
           {/* <div>{displayMessage()}</div> */}
           <button onClick={displayMessage}>Submit</button>
          </div>
  
}

export default Employee;
//Employee component name