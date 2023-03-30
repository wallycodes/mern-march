import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [starWarsChar, setStarWarsChar] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      console.log(`RESPONSE :`);
      // console.log(response.data.results);
      setStarWarsChar(response.data.results)
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <div className="App">
      <h1>API Intro</h1>
      {
        starWarsChar.map((character, idx) =>(
          <div key={idx}>
            <h2>Name: {character.name}</h2>
            
          </div>
        ))
      }
    </div>
  );
}

export default App;
