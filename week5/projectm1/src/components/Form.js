// import React, {useState} from "react";


const Form = (props) =>{
    
    return(
       
            <div>
                <div className="container formStyle">
                    <div className="row">
                        <form className="show-form mx-auto">
                            <h1 style={{padding:"50px;"}}>Project Management 1</h1>
                            <div class="mb-3">
                                <label align="left" class="form-label">Title</label>
                                <input type="text" name="title" class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Price</label>
                                <input type="text" name="title" class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input type="text" name="title" class="form-control"/>
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