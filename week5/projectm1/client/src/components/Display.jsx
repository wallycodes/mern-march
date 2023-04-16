import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'




const Display = (props) =>{
    const {productList, setProductList} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) => {
          setProductList(response.data.products)
        })
        .catch((err) => {
          console.log(err);
        })
      },[])
    return(
        <div className='centerMe'>
            <h2 className='titleFont'>All Our Products</h2>
            <div className='displayCards'>
            
            {
                productList.map((product,idx) =>(
                    
                    <div key={idx} class="card mx-auto" style={{maxWidth: "18rem"}}>
                        <div class="card-body">
                        <h5 class="card-title">Title: {product.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
                        <p class="card-text">Description: {product.description}</p>
                        <Link to={`/viewProduct/${product._id}`}>View</Link>                        
                        <Link to={`/editProduct/${product._id}`}>Edit</Link>
                        <Link to={`/deleteProduct/${product._id}`}>Delete</Link>
                        </div>
                  </div>
                ))
            }
        </div>
        </div>
        
    );
}

export default Display