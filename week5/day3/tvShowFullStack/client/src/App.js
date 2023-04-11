import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {

  const [tvShowList, SetTvShowList] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:8000/api/allShows')
    .then((response) => {
      console.log(response);
      SetTvShowList(response.data.shows)
    })
    .catch((err) =>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      {
        tvShowList.map((show,idx)=>(
          <div key={idx}>
            <h1>{show.title}</h1>
            <h1>{show.releaseYear}</h1>
            <h1>{show.genre}</h1>
            <h1>{show.creator}</h1>
          </div>
        ))
        
      }
    </div>
  );
}

export default App;
