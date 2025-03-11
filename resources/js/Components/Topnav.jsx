import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const Topnav = () => {
    return (
        <nav className="top-header-nav">
            {/* Social Media Icons */}
            <ul className="social-icons">
                <li>
                    <a
                        href="https://www.facebook.com/Dharmashop"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/thedharmashop/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="mailto:info@dharmashop.com">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                </li>
            </ul>

            {/* Left Menu */}
            <ul className="menu-left">
                <li>
                    <Link to={route("login")}>Reviews</Link>
                </li>
                <li>
                    <Link href={route("review")}>About Us</Link>
                </li>
                <li>
                    <Link href={route("review")}>My Wishlist</Link>
                </li>
                <li>
                    <Link href={route("review")}>Sale Items</Link>
                </li>
                <li>
                    <Link href={route("review")}>Gift Cards</Link>
                </li>
            </ul>

            {/* Right Menu */}
            <ul className="menu-right">
                <li>
                    <Link href={route("login")} className="icon-user">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/" className="icon-user">
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Topnav;
