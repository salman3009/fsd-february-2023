import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,amount,fetchDetails } from './counterSlice';
import { useEffect } from 'react';

function App() {
    

  useEffect(()=>{
       dispatch(fetchDetails());
  },[])


  //const value = useSelector((state)=>state.counter.value);
  const {value,email,status} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  if(status == 'pending'){
    return <div>Loading.....</div>
  }


  const onChangeHandler=(event)=>{
    dispatch(amount(event.target.value));
  }


  return (
    <div className="App">
      <h1>{value}-{email}</h1>
       <h1>Hello Redux</h1>
        <br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br/>
        <input type="text" onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
