import React, {useState} from "react";
import axios from 'axios'


const Form = (props) =>{
    
    const [project, setProject] = useState({
        title:'',
        price:'',
        description:'',
        projectCompleted:false
    })

    const changeHandler = (e) =>{
        setProject({...project, [e.target.name]:e.target.value})
    }
    
    const {projectList, setProjectList} = props

    const submitHandler = (e) =>{
        e.preventDefault()
            axios.post('http://localhost:8000/api/newProjects', project)
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
                            <h1 style={{padding:"50px;"}}>Project Management 1</h1>
                            <div class="mb-3">
                                <label align="left" class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" onChange={changeHandler} value={project.title}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Price</label>
                                <input type="text" name="price" class="form-control" onChange={changeHandler} value={project.price}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input type="text" name="description" class="form-control" onChange={changeHandler} value={project.description}/>
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