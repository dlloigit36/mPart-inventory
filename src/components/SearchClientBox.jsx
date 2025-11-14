import { useState, useEffect, useRef } from "react";
import { FaSearch } from 'react-icons/fa';
import ButtonShowAll from "./ButtonShowAll";
 
export default function SearchClientBox(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
 
  useEffect(() => {
    if (query === "") {
      setResults([])
    } else {
      const filtered = props.dbClients.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
   
  }, [query]);
 
  function handleItemClick(item) {
    setQuery(item.name);
    props.onReturnClientName(item);
  };

  function onShowAllClicked() {
        console.log("client show all clicked");
        props.onResetFilteredClient();
        setQuery("");
    }
 
  return (
    <div className="search-input">
      <ButtonShowAll 
        textLabel="Click to show all clients..."
        onShowAllClicked={onShowAllClicked}
      />
      <input
        type="text"
        placeholder="Search client..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => setTimeout(() => setResults([]), 200)}
        className="search-input"
      />
      <FaSearch className="search-icon" />
      {results.length > 0 && (
        <ul className="result-list">
          {results.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="result-item"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
 