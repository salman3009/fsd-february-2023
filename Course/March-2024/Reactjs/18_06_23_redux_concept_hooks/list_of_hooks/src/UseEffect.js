import {useEffect,useState} from 'react';

const UseEffect =()=>{

    const [getName,setName] = useState('akash');
    const [getAge,setAge] = useState(22);

    useEffect(()=>{
      alert("initial rendering");
      //intial binding of api data 
    },[])

    useEffect(()=>{
        alert("update rendering");
        //intial binding of api data 
      },[getAge])

    return (<div>
         hello world
         <button onClick={()=>setAge(getAge+1)}>age update</button>
    </div>)
}
export default UseEffect;