import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainNavBar.css'; // Assuming you have some CSS for styling
import logo from '../assets/logo.png'; // Removed extra space

const MainNavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/services">How it Works</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className="Icon">
                <img src={logo} alt="Logo" />
            </div>
            <div className='authentication'>
            <Link to="/signup" className="login-button">Sign Up</Link>
            <Link to="/login" className="login-button">Login</Link> {/* Styled as a button */}
            </div>
        </nav>
    );
};

export default MainNavBar;