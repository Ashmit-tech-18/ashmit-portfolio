import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigate("/"); // First comes to home route
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" className="outlined-text">Ashmit<span>.</span></Link>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="/" onClick={handleHomeClick}>Home</a>
                </li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#blogs">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/#resume">Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
