import React from "react";

function ButtonShowAll(props) {
    
    return(
        <div className="show-all">
            <button>Show all {props.type}</button>
        </div>
    );
    
}

export default ButtonShowAll;