import axios from 'axios';
import {useEffect,useState} from 'react';

function Home(){
   
  const[getList,setList]=useState([]);

   const listOfDetails=async ()=>{
           axios.get('https://academics.newtonschool.co/api/v1/music/song').then((response)=>{
                       console.log(response.data.data);
                      setList(response.data.data);
           }).catch((error)=>{
                       console.log(error);
           })
        
   }
    useEffect(()=>{
      listOfDetails();
    },[])


    return (<>
       {
        getList.map((obj,index)=>{
                 return (<div key={index}>
                  <img src={obj.thumbnail}/>
                 </div>)
        })
       }
    </>)

}
export default Home;