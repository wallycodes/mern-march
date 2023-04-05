import React,{useState} from "react";

const Form = (props)=>{

    // setup variables to keep track of state/task using props getter/setter
    const {taskList, setTaskList} = props

    // set variables for todo list this would be for inputs in our form 
    const [task, setTask] = useState({
        taskToDo:'',
        taskCompleted:false
    })


    const changeHandler = (e) =>{
        setTask({...task, [e.target.name]:e.target.value})
        // console.log(e)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        setTaskList([...taskList, task])
        setTask({
            taskToDo:'',
            taskCompleted:false
        })
    }
    

    return(
        <div className="container">
            <div className="row">
                <div className="col ">
                <form onSubmit={submitHandler}>
                    <div class="mt-5 mb-3 w-50 mx-auto">
                        <h1 for="exampleInputEmail1" class="form-label">ToDo List</h1>
                        <input value={task.taskToDo} placeholder="What needs to be done?" onChange={changeHandler} name="taskToDo" type="text" class="form-control"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    
                    {/* <div class="mb-3 form-check w-50 mx-auto">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Form;