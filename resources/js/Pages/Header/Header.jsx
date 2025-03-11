import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faPhone,
    faUser,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Megamenu from "@/Components/Megamenu";
import axios from "axios";

function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetchCartCount();
    }, []);

    const fetchCartCount = async () => {
        try {
            const response = await axios.get("/api/cart/count");
            setCartCount(response.data.count);
        } catch (error) {
            console.error("Error fetching cart count:", error);
        }
    };

    return (
        <header className="header-container">
            <nav className="top-header-nav">
                <ul className="social-icons">
                    <li>
                        <a
                            href="https://web.facebook.com/profile.php?id=61573798764868"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/holytunecraft/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:holytunecraft@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </li>
                </ul>
                <ul className="menu-left">
                    <li>
                        <Link href={route("reviews")}>Reviews</Link>
                    </li>
                    <li>
                        <Link href={route("about")}>About Us</Link>
                    </li>
                    <li>
                        <Link href={route("wishlist")}>My Wishlist</Link>
                    </li>
                    <li>
                        <Link href={route("giftcard")}>Gift Cards</Link>
                    </li>
                </ul>
                <ul className="menu-right">
                    <li>
                        <Link href={route("login")} className="icon-user">
                            <FontAwesomeIcon icon={faUser} />
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href={route("cart")} className="icon-user-cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Cart
                            {cartCount > 0 && (
                                <span className="cart-count-badge">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="megamenu-container">
                <Megamenu />
                <hr className="header-ends" />
            </div>
        </header>
    );
}

export default Header;
