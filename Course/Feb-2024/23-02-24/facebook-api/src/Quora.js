import { useState,useEffect } from "react";
import axios from 'axios';

function Quora(){

    const postDetails=async (event)=>{
         event.preventDefault();
        //  let body={
        //     'title': 'Newton',
        //     'content': 'postContent',
        //     'images': 'https://academics.newtonschool.co/car.png',
        //  }

         let imageData = document.getElementById('images').files[0];
         console.log(imageData);
         let formData = new FormData();
         formData.append('title', 'Newton');
         formData.append('content', 'postContent');
         formData.append('images',imageData);

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
      <form>
       <input type="file" name="images" id="images"/>
      <button onClick={postDetails}>Post Details</button>
      </form>
     
   </div>)
}
export default Quora;