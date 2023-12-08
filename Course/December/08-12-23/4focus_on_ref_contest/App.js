import React, { useRef, useState } from 'react';
export function App() {
 const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();



  
  

  return (
    <div className="App">
      <h1>User Registration</h1>
      <form >
        <label>
          First Name: <input type="text"  />
        </label><br/>
        <label>
          Last Name: <input type="text"  />
        </label><br/>
        <label>
          Email: <input type="email"  />
        </label><br/>
        <label>
          Password: <input type="password"  />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }
  