import './App.css';

function Employee(){
     
    let age = 56;

    const updateAgeDetails = ()=>{
        age = 20;
        console.log(age);
    }

    return <div id="heading" className="headingDetails">
           <div>{age}</div>
           <button onClick={updateAgeDetails}>Submit</button>
          </div>
  
}

export default Employee;
//Employee component name