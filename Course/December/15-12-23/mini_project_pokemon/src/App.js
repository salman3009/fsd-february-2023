import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [getPokemon, setPokemon] = useState([]);

  const getAllDetails = async () => {
    try {
      debugger;
      let response = await fetch("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
      let data = await response.json();
      console.log(data[0].results);
      let list = data[0].results;

      //random data
      // list.forEach(async (obj)=>{
      //   let responsePokemon = await fetch(obj.url);
      //   let dataPokemon = await responsePokemon.json();
      //   console.log(dataPokemon);
      // })

      //sequential data
      for await (let obj of list) {
        let responsePokemon = await fetch(obj.url);
        let dataPokemon = await responsePokemon.json();
        console.log(dataPokemon);
        //setPokemon([...getPokemon, dataPokemon]);
        setPokemon((currentList)=>[...currentList,dataPokemon]);
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllDetails();
  }, [])

  

  return (
    <div className="App">
      <div className="container">
        {getPokemon.map((obj, index) => {
          return (<div className="box">
            <div className="number">#1</div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
            <div className="details-wrapper">
              <h3>BULBASAUR</h3>
              <button className="pokeinfo">Know More...</button>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
