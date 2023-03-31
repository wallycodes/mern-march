import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <h1>routing example</h1> */}
      
      <BrowserRouter>
        {/* <Link to={'/home'}>Home</Link>
        <br/>
        <Link to={'/about'}>About</Link> */}
        <Routes>          
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/:text' element={<Hello/>}/>
          <Route path='/:word/:color/:bgCol' element={<Word/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;