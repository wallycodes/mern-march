import Form from './components/Form'
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App(props) {
  const [projectList, setProjectList] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>

      <Link to={'/createProject/form'}>Add a Project</Link>
      <br/>
      <Link to={'/'}>Home</Link>

        <Routes>
          <Route path='/' element={<Display setProjectList={setProjectList} projectList={projectList}/>}/>
          <Route path='/createProject/form' element={<Form projectList={projectList} setProjectList={setProjectList}/>}/>
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
