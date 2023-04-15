import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';




const Display = (props) =>{
    const {productList, setProductList} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) => {
          setProductList(response.data.product)
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
                productList.map((product) =>(
                    
                    <div class="card mx-auto" style={{maxWidth: "18rem"}}>
                        <div key={product._id} class="card-body">
                        <h5 class="card-title">Title: {product.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
                        <p class="card-text">Description: {product.description}</p>
                        <a href="#" class="card-link">Edit</a>
                        <a href="#" class="card-link">Delete</a>
                        </div>
                  </div>
                ))
            }
        </div>
        </div>
        
    )
}

export default Display