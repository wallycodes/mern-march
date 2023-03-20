import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Shows from './components/Shows';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Shows item={'Learn React'}/>
      <Shows item={'Climb Mt. Everest'}/>
      <Shows item={'Run a marathon'}/>
      <Shows item={'Feed the dogs'}/>

      {/* <Shows title={'Breaking Bad'} releaseYear={'2008'}/> */}
    </div>
  );
}

export default App;
