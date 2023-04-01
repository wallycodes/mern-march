import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';

function App() {
  const [pokemonChar, setPokemonChar] = useState([])

  // Here we have everything to use API
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) =>{
      // console.log('RESPONSE');
      // console.log(response);
      setPokemonChar(response.data.results)
    })
    .catch((err) =>{
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      {
        pokemonChar.map((pokemon)=>(
          <div>
            <h2>Pokemon{pokemon.name}</h2>
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
