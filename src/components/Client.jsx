import React from "react"

function Client(props) {
    function handleSelect() {
        props.onSelected(props.clientId, props.clientName, props.clientDesc)
    }
    
    return(
        <div className="client" onClick={handleSelect}>
            <h2>{props.clientName}</h2>
            <p>{props.clientDesc}</p>
        </div>
    );
    
}

export default Client;