import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useUser} from './UserProvider';

function UpdatePassword() {

    const {signInUser,getUser} = useUser();

  const [getData, setData] = useState({
    email:getUser.email?getUser.email:'',
    name:getUser.name?getUser.name:'',
    passwordCurrent:'',
    password: '',
    appType:"music"
  })

  
  

  const[getError,setError] = useState("");

  const navigate = useNavigate();


  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError('');
    axios.patch("https://academics.newtonschool.co/api/v1/user/updateMyPassword",getData,{
      headers: {
        Authorization: `Bearer ${getUser.token}`
      }
    }).then((response)=>{
               console.log(response.data);
               debugger;
               localStorage.setItem("token",response.data.token);
               navigate('/');
    }).catch((error)=>{
      console.log(error);
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
      else{
        setError("unknow error please try after sometime");
      }
    })
  }


  return (<>
    <section id="students-offer">
      <h3>Update Passwod Here</h3>
      <form onSubmit={onSubmitHandler}>
         <h2 style={{color:'red'}}>{getError}</h2>
        <input type="email" name="email" id="email" value={getData.email} disabled/>
        <input type="text" name="email" id="email" value={getData.name} disabled/>
        <h1>Current Password</h1>
        <input type="password" name="passwordCurrent" id="passwordCurrent"  value={getData.passwordCurrent} onChange={onChangeHandler} placeholder="passwordCurrent" required autoComplete="off" />
        <h1>Password</h1>
        <input type="password" name="password" id="password"  value={getData.password} onChange={onChangeHandler} placeholder="Password" required autoComplete="off" />
        <button type="submit">SUBMIT</button>
      </form>
    </section>
  </>)

}
export default UpdatePassword;