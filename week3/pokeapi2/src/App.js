import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [pokemonChar, setPokemonChar] = useState([])

  // Here we have everything to use API
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
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
        pokemonChar.map((pokemon, idx)=>(
          <div key={idx}>
            <li>{pokemon.name}</li>
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
