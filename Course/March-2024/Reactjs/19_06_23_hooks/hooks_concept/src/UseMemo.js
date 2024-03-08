import {useState,useMemo} from 'react';

const UseMemo=()=>{
   const [getCount,setCount]=useState(1000);
   const [getAge,setAge] = useState(0);

   const expensiveCalculation =()=>{
    let num=0;
    for(let i=0;i<getCount;i++){
        num+=i;
        console.log("calculate" ,i);
    }
    if(num%2 ==0){
        return true;
    }
    else{
        return false;
    }
   }

   //const Even = expensiveCalculation();
   const Even = useMemo(()=>expensiveCalculation(),[getCount]);

   return (<div>
        <h1>Count:{getCount}</h1>
        <h1>Age:{getAge}</h1>
       <button onClick={()=>setCount(getCount+1)}>Increase the count</button>
       <br/>
       <button onClick={()=>setAge(getAge+1)}>Increase the Age</button>
       <br/>
       <div>{Even?"even number":"old number"}</div>
   </div>)
}
export default UseMemo;