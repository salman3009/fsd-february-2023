import Count from "./Count";
import { useState ,useCallback} from "react";
const UseCallback=()=>{

  const [getAge,setAge] = useState(0);
  const [getSalary,setSalary] = useState(0);

  const changeAgeHandler=useCallback(()=>setAge(getAge+1),[getAge]);

  const changSalaryHandler=useCallback(()=>setSalary(getSalary+1),[getSalary]);

  return (<div>
    <Count text="age" count={getAge}/>
    <Count text="salary" count={getSalary}/>
    <button onClick={changeAgeHandler}>Add Age</button>
    <br/>
    <br/>
    <button onClick={changSalaryHandler}>Add Salary</button>
  </div>)
}
export default UseCallback;