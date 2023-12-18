import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [getList, setList] = useState([]);
  const [getAPI, setAPI] = useState('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
  const [getModal,setModal] = useState(false);

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

  const nextLoadData = () => {
    getAllPokemon();
  }

  const modalEventHandler=()=>{
    setModal(!getModal);
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {getList.map((obj, index) => {
              return (<div key={index} className={`thumb-container ${obj.type}`}>
                <div className="number">
                  <small>#{obj.id}</small>
                </div>
                <img src={obj.image} alt={obj.name} />
                <div className="detail-wrapper">
                  <h3>{obj.name.toUpperCase()}</h3>
                  <small>Type: {obj.type}</small>
                  <button onClick={modalEventHandler} className="pokeinfo">Know more...</button>
                </div>
              </div>)
            })}
          </div>
          <button className="load-more" onClick={nextLoadData}>More Pokemons</button>
        </div>
      </div>


     {getModal && <div class="expanded-overlay normal visible"><button onClick={modalEventHandler} class="close-button normal ">X</button>
        <div class="expanded-left"><img class="expanded-image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg"
          alt="rattata" />
          <h3 class="expanded-name">rattata</h3>
        </div>
        <div class="expanded-right  normal ">
          <table class="expanded-table normal ">
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Weight:</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>Height:</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Stat1:</td>
                        <td>hp</td>
                      </tr>
                      <tr>
                        <td>Stat2:</td>
                        <td>attack</td>
                      </tr>
                      <tr>
                        <td>Stat3:</td>
                        <td>defense</td>
                      </tr>
                      <tr>
                        <td>Stat4:</td>
                        <td>special-attack</td>
                      </tr>
                      <tr>
                        <td>Stat5:</td>
                        <td>special-defense</td>
                      </tr>
                      <tr>
                        <td>Stat6:</td>
                        <td>speed</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Bs1:</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Bs2:</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>Bs3:</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>Bs4:</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>Bs5:</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>Bs6:</td>
                        <td>72</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>} 

    </div>
  );
}

export default App;
