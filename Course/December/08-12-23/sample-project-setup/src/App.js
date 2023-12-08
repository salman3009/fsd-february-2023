import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const[getEmail,setEmail] = useState('');
  const[getpassword,setPassword] = useState('');

  const onSubmitHandler=(event)=>{
      event.preventDefault();
      alert(getEmail);
      alert(getpassword);
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
      
    </div>
  );
}

export default App;
