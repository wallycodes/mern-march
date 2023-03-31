import React, {useState} from "react";
import { useParams } from "react-router-dom";

const Text = (props) =>{
    const {text} = useParams()
    return(
        <div>
            <h2>Text Component</h2>
            {
                isNaN(text)?
                <h1>The word is: {text}</h1>:
                <h1>The number is: {text}</h1>
            }
            
        </div>
)}

export default Text;