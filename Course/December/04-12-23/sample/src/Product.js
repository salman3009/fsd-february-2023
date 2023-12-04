import './Product.css';
import {useState,useEffect} from 'react';

function Product(){

     const[getPage,setPage] = useState(0);

     useEffect(()=>{
        alert("callback");
     },[getPage])

     useEffect(()=>{
        alert("intial rendering");
     },[])

     const onChangeHandler=()=>{
        setPage(getPage+1);//asynchronous
        
     }

    return (<div className="box">
         <h1>{getPage}</h1>
         <button onClick={onChangeHandler}>Click</button>
    </div>)
}

export default Product;