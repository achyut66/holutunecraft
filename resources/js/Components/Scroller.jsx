import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroller = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} style={styles.scrollButton}>
                    <FaArrowUp />
                </div>
            )}
        </div>
    );
};

const styles = {
    scrollButton: {
        position: "fixed",
        bottom: "50px",
        right: "50px",
        backgroundColor: "red",
        color: "#fff",
        borderRadius: "50%",
        padding: "20px",
        cursor: "pointer",
        zIndex: 1000,
    },
};

export default Scroller;
