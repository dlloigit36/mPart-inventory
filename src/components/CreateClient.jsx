import React, { useState } from "react";

function CreateClient(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [client, setClient] = useState({
        cName: "",
        cDesc: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setClient(prevClient => {
          return {
            ...prevClient, [name]: value
          }
        });
    }

    function submitClient(event) {
      props.onAddClient(client)
        setClient({
          cName: "",
          cDesc: ""
        });
      event.preventDefault();
      
    }

function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-client" onClick={expand} hidden={props.hidden}>
      <form >
        <input 
            name="cName"
            value={client.cName}
            onChange={handleChange}
            placeholder="Enter new client/company name to add......."
        />
        { isExpanded && <textarea 
            name="cDesc"
            value={client.cDesc}
            onChange={handleChange}
            placeholder="Client/company description......"
        /> }
        
        { isExpanded && <button onClick={submitClient}><span>+</span></button> }
        
      </form>
    </div>
  );
}

export default CreateClient;
