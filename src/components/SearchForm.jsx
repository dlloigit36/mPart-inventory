import React, {useState} from "react";


function SearchForm(props) {
    const [client, setClient] = useState("");

    function handleChange(event) {
    const { name, value } = event.target;
        setClient(value);
    }
    
    return(
        <div className="search-form">
            <form>
                <input 
                    name={props.name}
                    placeholder={props.text4placeholder}
                    value={client}
                    onChange={handleChange}
                    />
                <button><span>Search</span></button>
            </form>
        </div>
    );
    
}

export default SearchForm;