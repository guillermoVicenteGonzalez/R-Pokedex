import React, { useState } from "react";

const SearchBar = ({ onNewSearch }) => {
  const [newSearch, setNewSearch] = useState("");

  return (
    <input
      className="searchBar"
      value={newSearch}
      type="text"
      onChange={(e) => setNewSearch(e.target.value)}
    ></input>
  );
};

export default SearchBar;
