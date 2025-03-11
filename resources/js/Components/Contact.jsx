import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactComponent = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-title">Feel Free To Contact Us</div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="foot-container">
                <div className="foot-contact">
                    <div className="foot-contact-item">
                        <FaPhone size={24} />
                        <span>Phone: +977-9851402057</span>
                    </div>
                    <div className="foot-contact-item">
                        <FaEnvelope size={24} />
                        <span>Email: holytunecraft@gmail.com</span>
                    </div>
                    <div className="foot-contact-item">
                        <FaWhatsapp size={24} />
                        <span>Whatsapp: +977-9812345678</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactComponent;
