import React, { useState } from "react";


const DisplayShows = (props) =>{
    const {showList, setShowList} = props
//review this part
    const toggleShow = (show) =>{
        const updatedShowList = showList.map((tvShow) =>{
            if(tvShow === show){
                tvShow.watchedShow = !tvShow.watchedShow
            }
            return tvShow
        })
        setShowList(updatedShowList)
    }
    const deleteHandler = (show) =>{
        const updatedShowList = showList.filter((tvShow) => tvShow !== show)
        setShowList(updatedShowList)
    }

    return(
        <div>
            {
                showList.map((show,idx) => (
                    <div key={idx}>
                        {
                            show.watchedShow?
                            <h2 className="line-through">Title: {show.title}</h2>:
                            <h2>Title: {show.title}</h2>
                        }
                        
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre: {show.genre}</h2>
                        <span>Watched this show?</span>
                        <input type="checkbox" name="watchedShow" checked={show.watchedShow} onClick={() => toggleShow(show)}/>
                       <br/>
                        <button className="btn-danger" onClick={() => deleteHandler(show)}>Delete Show</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayShows;