import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Quora from './Quora';

function App() {
  const[getData,setData] = useState([]);

  useEffect(()=>{
    intial();
  },[])

  const intial = async ()=>{
    const result = await axios.get("https://academics.newtonschool.co/api/v1/facebook/post",
    {
      'headers':{projectID:"f104bi07c490"}
    })
    console.log(result.data.data);
    setData(result.data.data);
  }


  const likeHandler=async (id)=>{
    try{
      const result = await axios.post(`https://academics.newtonschool.co/api/v1/facebook/like/${id}`,null,
      {
        'headers':{
        projectID:"f104bi07c490",
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzNhZDljNjQzNmM5MjRkNDBkMGNhNyIsImlhdCI6MTcwODcwNDY5MiwiZXhwIjoxNzQwMjQwNjkyfQ.Hf-3bx4_u_uk_v99TjdojbPs2TL-6-edHh7V81rhUPE`
      }    
      })
      intial();
    }catch(err){
       alert(err.message);
    }

    //intial();
  }

  return (
    <div className="App">
      {/* {
        getData.map((obj,index)=>{
           return (<div key={index}>
            <h1>{obj._id}</h1>
            <h1>{obj.likeCount}</h1>
            <button onClick={()=>likeHandler(obj._id)}>Like</button>
           </div>)
        })
      } */}
      <Quora/>
    </div>
  );
}

export default App;
