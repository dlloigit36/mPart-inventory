import React, { useState } from "react";

function CreatePart(props) {
  const [isExpanded, setExpanded] = useState(false);
  
  const [part, setPart] = useState({
    client: "",
    title: "",
    number: "",
    id: "",
    photoUrl: ""        
  });

  function handleChange(event) {
    const { name, value } = event.target;
        setPart({
            [name]: value
        });    
  }

  function submitPart(event) {
    setPart({
          client: "",
          title: "",
          number: "",
          id: "",
          photoUrl: ""
          });
  }

  function expand(params) {
    setExpanded(true)
    
  }

  return (
    <div className="create-part" onClick={expand}>
      <form >
        { isExpanded && <input 
          name= "client"
          value={props.client}
          readOnly
        /> }
        <input 
            name="title"
            value={part.title}
            onChange={handleChange}
            placeholder="Enter new part name/title to add......."
        />
        { isExpanded && <input 
            name="number"
            value={part.number}
            onChange={handleChange}
            placeholder="Enter part number to add......."
        /> }
        { isExpanded && <input 
            name="id"
            value={part.id}
            onChange={handleChange}
            placeholder="Enter part id to add......."
        /> }
        { isExpanded && <input 
            name="photoUrl"
            value={part.photoUrl}
            onChange={handleChange}
            placeholder="Enter part photo url to add......."
        /> }
        
        
        { isExpanded && <button onClick={submitPart}><span>add</span></button> }
        
      </form>
    </div>
  );
}

export default CreatePart;
