import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const OneProduct = (props) =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()
    // console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res) =>{
            // console.log(res.data.product)
            setProduct(res.data.product)
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])
    return(
        <div className='centerMe'>
            <h2 className='titleFont'>Product</h2>
            <div className='displayCards'>
                <div className="card mx-auto" style={{maxWidth: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Title: {product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
                        <p className="card-text">Description: {product.description}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default OneProduct