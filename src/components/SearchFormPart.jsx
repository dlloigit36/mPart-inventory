import React, {useState} from "react";


function SearchForm(props) {
    const [part, setPart] = useState("");

    function handleChange(event) {
    const { name, value } = event.target;
        setPart(value);
        
    }
    
    return(
        <div className="search-form">
            <form>
                <input 
                    name="part"
                    placeholder="Enter part name to search..."
                    value={part}
                    onChange={handleChange}
                    />
            </form>
        </div>
    );
    
}

export default SearchForm;