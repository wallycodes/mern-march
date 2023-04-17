import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Form = (props) =>{
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
    
    const {productList, setProductList} = props
    const [errors, setErrors] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
            axios.post('http://localhost:8000/api/newProducts', product)
            .then((res) =>{
                console.log(res)
                navigate('/')
            })
            .catch((err) =>{
                // console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
            // setProjectList([...projectList, project])
            // setProject({
            // title:'',
            // price:'',
            // description:'',
            // projectCompleted:false
            // })
    }
    
    return(
            <div>
                <div className="container formStyle">
                    <div className="row">
                        <form className="show-form mx-auto" onSubmit={submitHandler}>
                            <h1 style={{padding:"50px;"}}>Product Management 1</h1>
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
                                <button type="submit" className="btn-primary btn-lg">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    )
}

export default Form