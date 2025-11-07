import { useState, useEffect, useRef } from "react";
 
export default function SearchClientBox(props) {
  const [query, setQuery] = useState('');
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
 
  function handleItemClick(itemName) {
    setQuery(itemName);
  };
 
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search client..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => setTimeout(() => setResults([]), 200)}
        className="search-input"
      />
      {results.length > 0 && (
        <ul className="result-list">
          {results.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.name)}
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
 