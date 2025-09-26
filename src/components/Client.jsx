import React from "react"

function Client(props) {
    
    return(
        <div className="client">
            <h2>client name {props.name}</h2>
            <p>description of client</p>
        </div>
    );
    
}

export default Client;