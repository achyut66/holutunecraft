import React from "react";
import { Link } from "@inertiajs/react";
import {
    FaPaypal,
    FaCcVisa,
    FaCcMastercard,
    FaCreditCard,
} from "react-icons/fa"; // Import payment icons from React Icons

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <div className="footer-column">
                    <h4 className="headname">Know Us</h4>
                    <ul className="footul">
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/ourteam">Our Team</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blogs</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms of services</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="headname">Customer Service</h4>
                    <ul className="footul">
                        <li>
                            <Link href="/trackmyorder">Track My Order</Link>
                        </li>
                        <li>
                            <Link href="/faq">F.A.Q</Link>
                        </li>
                        <li>
                            <Link href="/wholesale">Wholesale Enquiry</Link>
                        </li>
                        <li>
                            <Link href="/shipping">Shipping Information</Link>
                        </li>
                        <li>
                            <Link href="/refund">Refund & Return Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="headname">What We Do</h4>
                    <p className="paragraph">
                        We provide high-quality handmade crafts and creative
                        solutions to enhance your lifestyle.
                    </p>
                    <br />
                    <div className="payment-methods">
                        <span className="payment-icon">
                            <FaPaypal size={40} title="PayPal" />
                        </span>
                        <span className="payment-icon">
                            <FaCcVisa size={40} title="Visa" />
                        </span>
                        <span className="payment-icon">
                            <FaCcMastercard size={40} title="MasterCard" />
                        </span>
                        <span className="payment-icon">
                            <FaCreditCard size={40} title="Debit Card" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2025 Holytunecraft. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
