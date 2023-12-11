import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[getQuestion,setQuestion] = useState('');
  const [getAnswer,setAnswer] = useState('');
  const [getInput,setInput] = useState('');
  const [getResult,setResult] = useState('');

  useEffect(()=>{
    intiail();
  },[])

  const intiail= async ()=>{
     try{
        let response = await fetch('https://opentdb.com/api.php?amount=1');
        response = await response.json();
        if(response.response_code == 0){
          setQuestion(response.results[0].question);
          setAnswer(response.results[0].correct_answer);
        }
     }catch(err){
      console.log(err);
     }
  }

  const onChangeHandler=(event)=>{
    setInput(event.target.value);
  }

  const onSubmitHandler=()=>{
     if(getInput === getAnswer){
      setResult("correct");
     }
     else{
      setResult("Incorrect");
     }
  }

  return (
    <div className="App">
        <h1>{getQuestion}</h1>
        <h2>{getAnswer}</h2>
        <input type="text" onChange={onChangeHandler}/>
        <br/>
        <button onClick={onSubmitHandler}>Submit</button>
        <h1>{getResult}</h1>
    </div>
  );
}

export default App;
