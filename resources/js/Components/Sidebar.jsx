// Sidebar.js
import React from "react";
import Dropdown from "@/Components/Dropdown";
import "../../css/sidebar.css"; // Import custom CSS for styling (optional)

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <div className="sidebar-container">
                <div>Holytune Craft</div>
                <a href="/">
                    <img
                        src={"../assets/logo.png"}
                        alt="logo"
                        style={{ width: "100px", height: "80px" }}
                    ></img>
                </a>
                <hr
                    style={{
                        border: "1px solid white",
                        marginTop: "1px",
                        width: "120px",
                    }}
                />
                {/* Sidebar Links */}
                <ul className="sidebar-links">
                    <li>
                        <a href="/cms-page">Home</a>
                    </li>
                    <li>
                        <a href={route("cms-products")}>Our Products</a>
                    </li>
                    <li>
                        <a href="#services">Categories</a>
                    </li>
                    <li>
                        <a href="#contact">New Items</a>
                    </li>
                    <li>
                        <a href="#contact">Sale Item</a>
                    </li>
                    <li>
                        <a href="#contact">Blog Posts</a>
                    </li>
                    <hr
                        style={{
                            border: "1px solid white",
                            marginTop: "100px",
                            width: "120px",
                        }}
                    />
                    <li style={{ marginTop: "10px" }}>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            style={{ background: "red" }}
                        >
                            Log Out
                        </Dropdown.Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
