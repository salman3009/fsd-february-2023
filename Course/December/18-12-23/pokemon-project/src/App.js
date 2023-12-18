import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {

  const getAllPokemon= async ()=>{
     try{
       let response = await fetch('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
       let data = await response.json();
       console.log(data[0].results);
       let list = data[0].results;
       for await(let obj of list){
        let responsePokemon = await fetch(obj.url);
        let dataPokemon = await responsePokemon.json();
        console.log(dataPokemon);
       }
     }catch(err){
      console.log(err);
     }
  }

  useEffect(()=>{
    getAllPokemon();
  },[])

  return (
    <div className="App">
       <h1>Hello world</h1>
    </div>
  );
}

export default App;
