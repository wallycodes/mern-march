import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      console.log(`RESPONSE :`);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <div className="App">
      <h1>API Intro</h1>
    </div>
  );
}

export default App;
