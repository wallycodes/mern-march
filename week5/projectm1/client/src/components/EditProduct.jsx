import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const EditProduct = (props) =>{
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
    return(
        <div>

        </div>
    )
}

export default EditProduct