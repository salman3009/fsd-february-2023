import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const[getEmail,setEmail] = useState('');
  const[getpassword,setPassword] = useState('');
  const[getMessage,setMessage] = useState('');

  const onSubmitHandler=(event)=>{
      event.preventDefault();
      if(!getEmail || !getpassword){
        setMessage("All fields must be filled");
      }
      else{
        setMessage("congrats login is successful");
      }
  }

  const setEmailHandler=(event)=>{
    setEmail(event.target.value);
  }

  const setPasswordHandler=(event)=>{
    setPassword(event.target.value);
  }

  return (
    <div className="App">
      <form>
      <input type="text" name="emai" onChange={setEmailHandler}/>
       <br/><br/>
       <input type="password" name="password" onChange={setPasswordHandler}/>
       <br/><br/>
       <button onClick={onSubmitHandler}>Login</button>
      </form>
       <h1>{getMessage}</h1>
    </div>
  );
}

export default App;
