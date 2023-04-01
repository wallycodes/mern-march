// import methods
import React, {useState, useEffect} from 'react';

// import components
import Form from './components/Form';
import './App.css';
import DisplayTask from './components/DisplayTask';

function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <div className="App">
      <Form taskList={taskList} setTaskList={setTaskList}/>
      <DisplayTask taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
