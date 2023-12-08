import React, { useState } from 'react'

import '../styles/App.css';

const App = () => {

const [getUserName, setUserName] = useState('');

const [getPassword, setPassword] = useState('');

const [getEmail, setEmail] = useState('');

const[getMessage,setMessage] = useState('');

const[getColor,setColor] = useState('');

const setUserNameHandler = (event) => {

setUserName(event.target.value);

}

const setPasswordHandler = (event) => {

setPassword(event.target.value);

}

const setEmailHandler = (event) => {

setEmail(event.target.value);

}

const onSubmitHandler = (event) => {

event.preventDefault();

if(!getUserName || !getPassword || !getEmail){

setColor('red');

setMessage('All Fields must be filled');

}

else if(!getEmail.includes("@")){

setColor('red');

setMessage('Email is invalid');

}

else{

setColor('green');

setMessage('No Error Found Congrats the user is logged in.');

}

}

return (

<div id="main">

<form>

<input type="text" onChange={setUserNameHandler} />

<br />

<input type="password" onChange={setPasswordHandler} />

<br />

<input type="email" onChange={setEmailHandler} />

<br />

<div style={{color:getColor}} className="error"> {getMessage}</div>

<button onClick={onSubmitHandler}>Login</button>

</form>

</div>

);

}

export default App;