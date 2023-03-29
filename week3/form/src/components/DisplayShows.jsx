import React, { useState } from "react";


const DisplayShows = (props) =>{
    const {showList, setShowList} = props
    return(
        <div>
            {
                showList.map((show) => (
                    <div>
                        <h2>Title: {show.title}</h2>
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre: {show.genre}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayShows;