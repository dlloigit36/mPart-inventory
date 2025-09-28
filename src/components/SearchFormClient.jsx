import React, {useState} from "react";


function SearchForm(props) {
    const [client, setClient] = useState("");
    const [isHidden, setHidden] = useState(true);
    

    function handleChange(event) {
    const { name, value } = event.target;
        setClient(value);
        setHidden(false)
    }

    return(
        <div className="search-form">
            <form>
                <input 
                    name="client"
                    placeholder="Enter client name to search...."
                    value={client}
                    onChange={handleChange}
                    />
                <button><span>Search</span></button>
            </form>
            <p hidden={isHidden}>Searching client: {client}</p>
        </div>
    );
    
}

export default SearchForm;