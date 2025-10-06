import React from "react"

function Part(props) {
    return(
        <div className="part">
            <h2>{props.clientName}</h2>
            <p><small>Part name:</small>{props.partName}, <small>Number:</small>{props.partNumber}</p>
            <p><small>Id:</small>{props.partId}, <small>Photo:</small>{props.partUri}</p>
        </div>
    );
    
}

export default Part;