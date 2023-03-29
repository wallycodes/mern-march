import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Shows from './components/Shows';

function App() {

  const nums = [1,2,3,4,5,6]

  const newNums = nums.map((num) => {
    return num *3
  })

  console.log(newNums)


  return (
    <div className="App">
      <Nav header={"Some Text"}>
        <h1>Children</h1>
        <p>This is a child</p>
        <p>This is a child</p>
        <p>This is a child</p>
        <p>This is a child</p>
      </Nav>
      

      {/* <Shows title={'Breaking Bad'} releaseYear={'2008'}/> */}
    </div>
  );
}

export default App;
