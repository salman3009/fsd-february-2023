import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [getList, setList] = useState([]);
  const[getAPI,setAPI] = useState('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');

  const getAllPokemon = async () => {
    try {
      let response = await fetch(getAPI);
      let data = await response.json();
      console.log(data[0].results);
      setAPI(data[0].next);
      let list = data[0].results;
      for await (let obj of list) {
        let responsePokemon = await fetch(obj.url);
        let dataPokemon = await responsePokemon.json();
        console.log(dataPokemon);
        setList((currentData) => [...currentData, dataPokemon[0]]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPokemon();
  }, [])

  const nextLoadData = ()=>{
    getAllPokemon();
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {getList.map((obj, index) => {
              return (<div key={index} className={`thumb-container ${obj.type}`}>
                <div className="number">
                  <small>{obj.id}</small>
                </div>
                <img src={obj.image} alt={obj.name} />
                <div className="detail-wrapper">
                  <h3>{obj.name}</h3>
                  <small>Type: {obj.type}</small>
                  <button className="pokeinfo">Know more...</button>
                </div>
              </div>)
            })}
          </div>
          <button className="load-more" onClick={nextLoadData}>More Pokemons</button>
        </div>
      </div>

    </div>
  );
}

export default App;
