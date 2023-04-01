import React,{useState} from "react";

const DisplayTask = (props)=>{
    const {taskList, setTaskList} = props

    // line through task
    const toggleTask = (task) =>{
        const updatedTaskList = taskList.map((singularTask)=>{
            if(singularTask === task){
                singularTask.taskCompleted = !singularTask.taskCompleted
            }
            return singularTask
        })
        setTaskList(updatedTaskList)
    }
    // delete
    const deleteHandler = (task) =>{
        const updatedTaskList = taskList.filter((singularTask) => singularTask !== task )
        // singulartask does not equal task that was passed in
        setTaskList(updatedTaskList)
    }

    return(
        <div>
        {
            // displays card by iterating through task
            taskList.map((task,idx) => (
                <div className="card cardDisplay" key={idx}>
                    <div className="card-body">
                    {
                        task.taskCompleted?
                        <h3 className="line-through">Task: {task.taskToDo}</h3>:
                        <h3>Task: {task.taskToDo}</h3>
                        
                    }
                    </div>
                    <input name="taskCompleted" checked={task.taskCompleted} style={{margin:"10px"}} type="checkbox" onClick={() => toggleTask(task)}/>
                    <button onClick={() => deleteHandler(task)} type="button" class="btn btn-danger">Delete</button>
                </div>
            ))
        }
        </div>
    
    )
}

export default DisplayTask;