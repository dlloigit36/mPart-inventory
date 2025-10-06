import React from "react"

function Client(props) {
    
    return(
        <div className="client">
            <h2>{props.clientName}</h2>
            <p>{props.clientDesc}</p>
        </div>
    );
    
}

export default Client;