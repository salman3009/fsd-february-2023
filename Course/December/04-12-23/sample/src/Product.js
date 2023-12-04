import './Product.css';
import {useState,useEffect} from 'react';

function Product(){

     const[getPage,setPage] = useState(1);

     useEffect(()=>{
        alert("callback");
     },[getPage])

     useEffect(()=>{
        intial();
     },[])

     const onChangeHandler=()=>{
        setPage(getPage+1);//asynchronous
        
     }

     const intial = async()=>{
        try{
           let response = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${getPage}&limit=5`);
           let data = await response.json();
           console.log(data);
        }catch(err){
           console.log(err);
        }
     }

     
    return (<div className="box">
         <h1>{getPage}</h1>
         <button onClick={onChangeHandler}>Click</button>
    </div>)
}

export default Product;