import { FaUserCircle } from 'react-icons/fa';

import alsiaLogo from '../../assets/images/alsia.png';

import SearchBar from '../searchBar/searchBar';

import './navbar.css';

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
