import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'


const EditProduct = (props) =>{
    const {id} = useParams()
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title:'',
        price:'',
        description:'',
        productCompleted:false
    })

    const changeHandler = (e) =>{
        setProduct({...product, [e.target.name]:e.target.value})
    }

    //  Find product to update first
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) =>{
                // console.log(res.data.product)
                setProduct(res.data.product)
            })
            .catch((err) =>{
                console.log(err);
        })
    },[])

    const [errors, setErrors] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
            axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
            .then((res) =>{
                // console.log(res)
                navigate('/')
            })
            .catch((err) =>{
                // console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
            
    }
    return(
        <div>
                <div className="container formStyle">
                    <div className="row">
                        <form className="show-form mx-auto" onSubmit={submitHandler}>
                            <h1 style={{padding:"50px;"}}>Edit Product</h1>
                            <div class="mb-3">
                                <label align="left" class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" onChange={changeHandler} value={product.title}/>
                                {
                                    errors.title?
                                    <p className="text-danger">{errors.title.message}</p>:
                                    null
                                }
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Price</label>
                                <input type="text" name="price" class="form-control" onChange={changeHandler} value={product.price}/>
                                {
                                    errors.price?
                                    <p className="text-danger">{errors.price.message}</p>:
                                    null
                                }
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input type="text" name="description" class="form-control" onChange={changeHandler} value={product.description}/>
                                {
                                    errors.description?
                                    <p className="text-danger">{errors.description.message}</p>:
                                    null
                                }
                            </div>
                            <div class="mb-3 pt-4">
                                <button type="submit" className="btn-primary btn-lg">Submit Change</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default EditProduct