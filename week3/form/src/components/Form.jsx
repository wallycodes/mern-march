import React, { useState } from "react";


const Form = (props) =>{
    // const [showList, setShowList] = useState([]) have to lift state, moved to app.js
    // console.log(props);
    const {showList, setShowList} = props

    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        genre:''
    })

    const changeHandler = (e) =>{
        setShow({...show, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log('this is the new show' + show);
        // console.log(`this is the new show ${JSON.stringify(show)}`) you can see the data with stringify
        setShowList([...showList, show])
        setShow({
            title:'',
            releaseYear:1920,
            genre:''
        })
    }

    return(
        <div className="outerDiv">
            <form className="show-form" onSubmit={submitHandler}>
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input type="text" name="title" class="form-control" onChange={changeHandler} value={show.title}/>
                    {
                        show.title.length > 0 && show.title.length <3?
                        <p>The title must be more than 3 characters!</p>:
                        null
                    }
                        
                </div>
                <div class="mb-3">
                    <label class="form-label">Release Year</label>
                    <input type="number" class="form-control" name="releaseYear" onChange={changeHandler} value={show.releaseYear}/>
                    {
                        show.releaseYear < 1920 ?
                        <p>The release year must be 1920 or newer!</p>:
                        null
                    }
                </div>
                <div class="mb-3">
                    <label class="form-label" >Genre</label>
                    <input type="text" class="form-control" name="genre" onChange={changeHandler} value={show.genre}/>
                    {
                        show.genre.length > 0 && show.genre.length < 4 ?
                        <p>Genre must be atleast 4 characters</p>:
                        null
                    }
                </div>
                <div>
                    <button type="submit">Add Show</button>
                </div>
            </form>
        </div>
    )
}

export default Form;