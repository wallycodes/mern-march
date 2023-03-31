
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>routing example</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
