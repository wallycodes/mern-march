import React from "react";

const Nav = (props) => {
    return(
        <div>
            {props.children}

            <h1>{props.header}</h1>
        </div>
    )
}
export default Nav;