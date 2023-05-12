import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar">
                <Link to="/"><FontAwesomeIcon icon = {faHouse} /> Home</Link>
                <Link to="/create-post"><FontAwesomeIcon icon = {faFilePen} /> Create Post</Link>
                <Link to="/login"><FontAwesomeIcon icon = {faArrowRightToBracket} /> Login</Link>
        </nav>
    );
}

export default Navbar;
