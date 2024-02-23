import { useState,useEffect } from "react";
import axios from 'axios';

function Quora(){

    const postDetails=async ()=>{
        //  let body={
        //     'title': 'Newton',
        //     'content': 'postContent',
        //     'images': 'https://academics.newtonschool.co/car.png',
        //  }

         let formData = new FormData();
         formData.append('title', 'Newton');
         formData.append('content', 'postContent');
         formData.append('images', 'https://academics.newtonschool.co/car.png');

        try{
          const result = await axios.post('https://academics.newtonschool.co/api/v1/quora/post/',formData,
          {
            'headers':{
            projectID:"f104bi07c490",
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzNhZDljNjQzNmM5MjRkNDBkMGNhNyIsImlhdCI6MTcwODcwNzg5NSwiZXhwIjoxNzQwMjQzODk1fQ.pmQPX4e0pXhDsvmR6TAHsSIUa5iP6WU8ncll4NCdm6M`
          }    
          })
          console.log(result);
        }catch(err){
           alert(err.message);
        }
      }


   return (<div>
      <h1>Quora</h1>
      <button onClick={postDetails}>Post Details</button>
   </div>)
}
export default Quora;