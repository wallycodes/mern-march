import React,{useState} from "react";

const Form = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col ">
                <form>
                    <div class="mt-5 mb-3 w-50 mx-auto">
                        <h1 for="exampleInputEmail1" class="form-label">ToDo List</h1>
                        <input placeholder="What needs to be done?" type="text" class="form-control" aria-describedby="emailHelp"/>
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