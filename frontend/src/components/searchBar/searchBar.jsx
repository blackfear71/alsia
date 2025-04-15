import React from "react";
import './searchBar.css';

const SearchBar = ({ placeholder = "Rechercher..." }) => {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder={placeholder} />
  );
};

export default SearchBar;
