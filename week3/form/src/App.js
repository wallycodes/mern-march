import Form from './components/Form'
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import DisplayShows from './components/DisplayShows';

function App(props) {

  const [showList, setShowList] = useState([])
  return (
    <div className="App">
      
        <Form showList={showList} setShowList={setShowList}/>
        <DisplayShows  showList={showList} setShowList={setShowList}/>
    </div>
  );
}

export default App;
