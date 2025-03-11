// Navbar.js
import React from "react";
import "../../css/sidebar.css";

const Navbar = ({ toggleMobileMenu, isMobileMenuOpen }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Hamburger Icon for Mobile View */}
                <button className="hamburger-icon" onClick={toggleMobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}
                >
                    {/* Log Out Button or any other links can go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
