import logo from './logo.svg';
import './App.css';

function App() {

  const initial= async ()=>{
        try{ 
          let response = await fetch('https://api.quotable.io/random');
          response = await response.json();
          console.log(response);

        }catch(err){
          alert("error");
        }
  }


  return (
    <div className="App">
        hello world
    </div>
  );
}

export default App;
