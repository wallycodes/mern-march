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

      const deleteHandler = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
          .then((res)=>{
            // console.log(res)
            const updatedProductList = productList.filter((product) => product._id !== id)
            setProductList(updatedProductList)
          })
          .catch((err) =>{
            console.log(err)
          })
      }
    return(
        <div className='centerMe container'>
            <h2 className='titleFont'>All Our Products</h2>
            <div className='displayCards row row-cols-4'>
            
            {
                productList.map((product,idx) =>(
                    
                    <div key={idx} className="card mx-auto" style={{maxWidth: "18rem",minWidth: "18rem",margin:"15px",height: "200px"}}>
                        <div className="card-body">
                          <h5 className="card-title">Title: {product.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
                          <p className="card-text">Description: {product.description}</p>
                          <Link style={{padding:"5px"}} to={`/viewProduct/${product._id}`}>View</Link>                        
                          <Link style={{padding:"5px"}} to={`/updateProduct/${product._id}`}>Edit</Link>
                          <Link style={{padding:"5px"}} onClick={() => deleteHandler(product._id)}>Delete</Link>
                        </div>
                  </div>
                ))
            }
        </div>
        </div>
        
    );
}

export default Display