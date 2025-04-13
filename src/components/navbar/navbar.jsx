import React from "react";
import alsiaLogo from '../../assets/images/alsia.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1 d-flex align-items-center">
        <img src={alsiaLogo} alt="alsia" height="80" className="me-2" />
        ALSIA
      </span>
    </nav>
  );
};

export default Navbar;
