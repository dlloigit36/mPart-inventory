import React from "react";

function ButtonShowAll(props) {

    function handleClick() {
        props.onShowAllClicked()
    }
    
    return(
        <div className="show-all">
            <button onClick={() => handleClick()}>{props.textLabel}</button>
        </div>
    );
    
}

export default ButtonShowAll;