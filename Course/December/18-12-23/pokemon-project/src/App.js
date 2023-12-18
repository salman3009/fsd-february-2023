import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {

  const [getList,setList] = useState([]);

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
        setList((currentData)=>[...currentData,dataPokemon[0]]);
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
      {getList.map((obj)=>{
           return (<>
             <h1>HELLO</h1>
           </>)
      })}
    </div>
  );
}

export default App;
