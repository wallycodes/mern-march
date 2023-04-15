import React, {useState} from "react";
import axios from 'axios'


const Form = (props) =>{
    
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

    const submitHandler = (e) =>{
        e.preventDefault()
            axios.post('http://localhost:8000/api/newProducts', product)
            .then((res) =>{
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
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
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Price</label>
                                <input type="text" name="price" class="form-control" onChange={changeHandler} value={product.price}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input type="text" name="description" class="form-control" onChange={changeHandler} value={product.description}/>
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