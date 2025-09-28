import React, {useState} from "react";


function SearchForm(props) {
    const [part, setPart] = useState("");
    const [isHidden, setHidden] = useState(true);

    function handleChange(event) {
    const { name, value } = event.target;
        setPart(value);
        setHidden(false)
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
                <button><span>Search</span></button>
            </form>
            <p hidden={isHidden}>Searching part: {part}</p>
        </div>
    );
    
}

export default SearchForm;