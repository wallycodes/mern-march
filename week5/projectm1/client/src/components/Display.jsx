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
                    
                    <div key={idx} className="card mx-auto" style={{maxWidth: "18rem"}}>
                        <div className="card-body">
                        <h5 className="card-title">Title: {product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
                        <p className="card-text">Description: {product.description}</p>
                        <Link style={{padding:"5px"}} to={`/viewProduct/${product._id}`}>View</Link>                        
                        <Link style={{padding:"5px"}} to={`/editProduct/${product._id}`}>Edit</Link>
                        <Link style={{padding:"5px"}} to={`/deleteProduct/${product._id}`}>Delete</Link>
                        </div>
                  </div>
                ))
            }
        </div>
        </div>
        
    );
}

export default Display