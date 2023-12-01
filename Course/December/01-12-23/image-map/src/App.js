import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const employee = [
  {
    id: "1",
    name: "rajesh",
    email: "rajesh@gmail.com",
    status: true
  },
  {
    id: "1",
    name: "kumar",
    email: "rak@gmail.com",
    status: false
  },
  {
    id: "1",
    name: "suresh",
    email: "sur@gmail.com",
    status: true
  }
];

function App() {

  return (
    <div className="App">
       {employee.map((input,index)=>{
            return (<div key={index}>
              <h1>{input.email}</h1>
              <h1>{input.name}</h1>
            </div>)
       })
       }
    </div>
  );
}

export default App;
