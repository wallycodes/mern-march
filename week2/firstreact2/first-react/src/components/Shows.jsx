import React from 'react';

const Shows = (props) =>{
    return(
        <div>
            <ul>
                <li>{props.item}</li>
            </ul>
            {/* <h2>Title: {props.title}</h2>
            <h2>Released in: {props.releaseYear}</h2> */}
        </div>
    )
}

export default Shows;