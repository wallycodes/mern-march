import Form from './components/Form'
import './App.css';
import { useState } from 'react';


function App(props) {

  const [projectList, setProjectList] = useState([])

  return (
    <div className="App">
      <Form projectList={projectList} setProjectList={setProjectList}/>
    </div>
  );
}

export default App;
