import React from "react";
import "./searchBar.css";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder = "Rechercher..." }) => {
  return (
    <div className="search-bar-container">
      <InputGroup className="search-bar-group">
        <Button variant="outline-secondary" className="search-bar-button">
          <FaSearch />
        </Button>
        <Form.Control placeholder={placeholder} className="search-bar-text" />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
