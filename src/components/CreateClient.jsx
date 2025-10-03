import React, { useState } from "react";

function CreateClient(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [client, setClient] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setClient({
            [name]: value
        });
    }

    function submitClient(event) {
        setClient({
            title: "",
            content: ""
        })

    }

function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-client" onClick={expand}>
      <form >
        <input 
            name="title"
            value={client.title}
            onChange={handleChange}
            placeholder="Enter new client/company name to add......."
        />
        { isExpanded && <textarea 
            name="content"
            onChange={handleChange}
            value={client.content}
            placeholder="Client/company description......"
        /> }
        
        { isExpanded && <button onClick={submitClient}><span>add</span></button> }
        
      </form>
    </div>
  );
}

export default CreateClient;
