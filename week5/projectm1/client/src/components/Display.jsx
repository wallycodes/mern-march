import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';




const Display = (props) =>{
    const {projectList, setProjectList} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/allProjects')
        .then((response) => {
          setProjectList(response.data.projects)
        })
        .catch((err) => {
          console.log(err);
        })
      },[])
    return(
        <div className='centerMe'>
            <h2 className='titleFont'>All Our Projects</h2>
            <div className='displayCards'>
            
            {
                projectList.map((project) =>(
                    
                    <div class="card mx-auto" style={{maxWidth: "18rem"}}>
                        <div key={project._id} class="card-body">
                        <h5 class="card-title">Title: {project.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Price: {project.price}</h6>
                        <p class="card-text">Description: {project.description}</p>
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