import React from "react";
import alsiaLogo from '../../assets/images/alsia.png';
import userLogo from '../../assets/images/user.png';
import './navbar.css';
import SearchBar from "../searchBar/searchBar";

const Navbar = () => {
  return (
    <nav className="alsia-navbar">

      {/* Logo */}
      <img src={alsiaLogo} alt="alsia" className="alsia-navbar-logo" />

      {/* Titre */}
      <span className="alsia-navbar-title">ALSIA</span>

      {/* Barre de recherche */}
      <div className="alsia-navbar-search-bar">
        <SearchBar />
      </div>

      {/* Utilisateur */}
      <img src={userLogo} alt="user" className="alsia-navbar-user" />

    </nav>
  );
};

export default Navbar;
