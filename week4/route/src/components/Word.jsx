import React, {useState} from "react";
import { useParams } from "react-router-dom";

const Word = (props) =>{
    const {word,color,bgCol} = useParams()
    return(
        <div>
            {
                isNaN(word)?

            <h1 style={color?{color:color, backgroundColor: bgCol}:null}>The word is: {word}</h1>:
                null
            }
        
        </div>
)}

export default Word;