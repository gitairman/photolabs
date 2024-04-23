import React, { useState } from 'react';

import '../styles/SearchBar.scss';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setSearchTerm('');
    handleSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        onChange={({ target }) => setSearchTerm(target.value)}
        id="search-input"
        value={searchTerm}
        placeholder="type something to search for"
      />
      <button onClick={handleSearchClick} >Search</button>
    </div>
  );
};

export default SearchBar;
