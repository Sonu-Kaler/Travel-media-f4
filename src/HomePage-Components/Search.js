import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
        <h2>
            Social Media For Travellers
        </h2>
      <input
        className="input-field"
        type="text"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
