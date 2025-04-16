import React from "react";
import alsiaLogo from "../../assets/images/alsia.png";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";
import SearchBar from "../searchBar/searchBar";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <img src={alsiaLogo} alt="alsia" className="navbar-logo" />

      {/* Barre de recherche */}
      <SearchBar />

      {/* Utilisateur */}
      <FaUserCircle size={40} color="#BE5031" className="navbar-user" />
    </nav>
  );
};

export default Navbar;
