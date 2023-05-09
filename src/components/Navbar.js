import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/create-post">Create Post</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
        </nav>
    );
}

export default Navbar;
