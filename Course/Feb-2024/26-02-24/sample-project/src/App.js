import logo from './logo.svg';
import './App.css';

function App() {

  const list =[
    {
    name:"akash",
    age:33
   },
   {
    name:"satish",
    age:22
   }
];

  return (
    <div className="App">
     {list.map((obj,index)=>{
      return (<div key={index}>
         <h1>{obj.name}</h1>
      </div>)
     })}

{/* {list.map((obj,index)=>(
         <div key={index}>
         <h1>{obj.name}</h1>
      </div>)
     )} */}

    </div>
  );
}

export default App;
