import Form from './components/Form'
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';


function App(props) {
  const [productList, setProductList] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>

      <Link style={{color:"#fff",fontSize:"35px"}} to={'/createProduct/form'}>Add a Product</Link>
      <br/>
      <Link style={{color:"#fff",fontSize:"35px"}} to={'/'}>Home</Link>
      

        <Routes>
          <Route path='/' element={<Display setProductList={setProductList} productList={productList}/>}/>
          <Route path='/createProduct/form' element={<Form productList={productList} setProductList={setProductList}/>}/>
          <Route path='/viewProduct/:id' element={<OneProduct/>}/>
          <Route path='/updateProduct/:id' element={<EditProduct/>}/>
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
