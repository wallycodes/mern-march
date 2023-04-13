import Form from './components/Form'
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';


function App(props) {

useEffect(()=> {
  axios.get('http://localhost:8000/api/allProjects')
  .then((response) => {
    setProjectList(response.data.projects)
  })
  .catch((err) => {
    console.log(err);
  })
},[])

  const [projectList, setProjectList] = useState([])

  return (
    <div className="App">
      <Form projectList={projectList} setProjectList={setProjectList}/>
    </div>
  );
}

export default App;
