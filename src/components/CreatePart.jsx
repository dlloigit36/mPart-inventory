import React, { useState } from "react";

function CreatePart(props) {
  const [isExpanded, setExpanded] = useState(false);

  
  
  const [part, setPart] = useState({
    clientName: "",
    pName: "",
    pNumber: "",
    pId: "",
    pUri: ""        
  });

  function handleChange(event) {
    const { name, value } = event.target;
        setPart(prevPart => {
          return {
            ...prevPart, [name]: value
          }
        });    
  }

  function submitPart(event) {
    props.onAddPart(part)
    setPart({
          clientName: "",
          pName: "",
          pNumber: "",
          pId: "",
          pUri: ""
          });
    event.preventDefault();
  }

  function expand(params) {
    setExpanded(true)
    
  }

  return (
    <div className="create-part" onClick={expand}>
      <form >
        { isExpanded && <input 
          name= "clientName"
          value={part.clientName}
          onChange={handleChange}
          placeholder="Enter client name......."
        /> }
        <input 
            name="pName"
            value={part.pName}
            onChange={handleChange}
            placeholder="Enter new part name/title to add......."
        />
        { isExpanded && <input 
            name="pNumber"
            value={part.pNumber}
            onChange={handleChange}
            placeholder="Enter part number to add......."
        /> }
        { isExpanded && <input 
            name="pId"
            value={part.pId}
            onChange={handleChange}
            placeholder="Enter part id to add......."
        /> }
        { isExpanded && <input 
            name="pUri"
            value={part.pUri}
            onChange={handleChange}
            placeholder="Enter part photo url to add......."
        /> }
        
        
        { isExpanded && <button onClick={submitPart}><span>add</span></button> }
        
        
      </form>
    </div>
  );
}

export default CreatePart;
