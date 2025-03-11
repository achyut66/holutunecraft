import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Megamenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleItemHover = (item) => {
        setHoveredItem(item);
    };

    const handleItemLeave = () => {
        setHoveredItem(null);
    };

    const menuItems = [
        {
            name: "Himalayas",
            image: "../assets/images/himalaya.jpg",
            detail_info:
                "The Himalayan Singing Bowl is a handcrafted metal bowl used in meditation and healing practices. Known for its deep, resonant sound, it promotes relaxation, balances energy, and enhances spiritual well-being.",
        },
        {
            name: "Carved",
            image: "../assets/images/varved.jpg",
            detail_info:
                "A carved singing bowl is a handmade bowl featuring intricate designs or patterns carved into its surface. These bowls produce rich, soothing sounds, used in meditation, sound therapy, and spiritual rituals to promote healing and relaxation.",
        },
        {
            name: "Full Moon",
            image: "../assets/images/fullmoon.jpg",
            detail_info:
                "The full moon is the lunar phase when the moon is fully illuminated by the sun, creating a bright, round appearance. It symbolizes completion, illumination, and renewal in many cultures.",
        },
        {
            name: "7 Chakra",
            image: "../assets/images/7chakra.jpg",
            detail_info:
                "The 7 Chakras are energy centers in the body, each corresponding to different physical, emotional, and spiritual aspects. From the root to the crown, they are: Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown.",
        },
        {
            name: "Antique",
            image: "../assets/images/antique.jpg",
            detail_info:
                "An antique is an item of significant age, often valued for its craftsmanship, historical importance, and uniqueness. Typically over 100 years old, antiques are prized for their aesthetic, cultural, and collectible value.",
        },
    ];

    const menuItems1 = [
        {
            name: "Singing Bowl Striker",
            image: "../assets/images/striker.jpg",
            detail_info:
                "A singing bowl striker is a mallet used to play a singing bowl. Made from wood, rubber, or felt, it helps produce the bowl's resonant sound when struck or rubbed, enhancing meditation and healing practices.",
        },
        {
            name: "Resting Cushion",
            image: "../assets/images/resting.jpg",
            detail_info:
                "A resting cushion is a supportive pillow used during meditation or spiritual practices, providing comfort and promoting proper posture. It helps reduce strain on the body, allowing for deeper relaxation and focus.",
        },
        {
            name: "Protective Bags",
            image: "../assets/images/bags.jpg",
            detail_info:
                "Protective bags offer durable, water-resistant protection for items, ensuring safety from damage, dust, dirt, and moisture during storage or transport.",
        },
    ];

    const menuItems2 = [
        {
            name: "Gongs",
            image: "../assets/images/gongs.jpg",
            detail_info:
                "Gongs are large, resonant percussion instruments producing deep, powerful sounds. They are traditionally used in various cultural ceremonies and music.",
        },
        {
            name: "Tingsha & Bells",
            image: "../assets/images/tingsa.jpg",
            detail_info:
                "Tingsha and bells are traditional Tibetan instruments, producing clear, resonant sounds used in meditation, rituals, and spiritual practices.",
        },
    ];

    const defaultImage = "../assets/images/crystal.jpg";
    const defaultText =
        "Crystal singing bowls produce harmonic, soothing sounds that aid in meditation, healing, and balancing energy through vibrational frequencies.";

    return (
        <nav className="fixed-nav">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <a href="/">
                            <img src={"../assets/logo.png"} alt="Logo" />
                        </a>
                    </div>
                    <div className={`main_menu ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="mega_menu_dropdown has_dropdown">
                                <a href="#">
                                    Categories{" "}
                                    <i className="fas fa-angle-down"></i>
                                </a>
                                <div className="mega_menu sub_menu">
                                    <div className="menu-section">
                                        <h2 className="mega-menu-head-h2 btn btn-primary">
                                            <u>Singing Bowls</u>
                                        </h2>
                                        <div className="menu-items-row">
                                            {menuItems.map((item, index) => (
                                                <li key={index}>
                                                    <div
                                                        className="mega_menu_item"
                                                        onMouseEnter={() =>
                                                            handleItemHover(
                                                                item
                                                            )
                                                        }
                                                        onMouseLeave={
                                                            handleItemLeave
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                </li>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="menu-section">
                                        <h2 className="mega-menu-head-h2">
                                            <u> Accessories</u>
                                        </h2>
                                        <div className="menu-items-row">
                                            {menuItems1.map((item, index) => (
                                                <li key={index}>
                                                    <div
                                                        className="mega_menu_item"
                                                        onMouseEnter={() =>
                                                            handleItemHover(
                                                                item
                                                            )
                                                        }
                                                        onMouseLeave={
                                                            handleItemLeave
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                </li>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="menu-section instrument-section">
                                        <h2 className="mega-menu-head-h2">
                                            <u> Instruments</u>
                                        </h2>
                                        <div className="menu-items-row">
                                            {menuItems2.map((item, index) => (
                                                <li key={index}>
                                                    <div
                                                        className="mega_menu_item"
                                                        onMouseEnter={() =>
                                                            handleItemHover(
                                                                item
                                                            )
                                                        }
                                                        onMouseLeave={
                                                            handleItemLeave
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                </li>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="menu-section">
                                        <div className="image-menu-items-row">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div
                                                        className="card-image"
                                                        style={{
                                                            backgroundImage: `url(${
                                                                hoveredItem
                                                                    ? hoveredItem.image
                                                                    : defaultImage
                                                            })`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-section">
                                        <div className="card-image-text">
                                            {hoveredItem
                                                ? hoveredItem.detail_info
                                                : defaultText}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href={route("blog")}>Blog</Link>
                            </li>
                            <li>
                                <Link href={route("new")}>New</Link>
                            </li>
                            <li>
                                <Link href={route("sale")}>Sale</Link>
                            </li>
                            <li>
                                <Link href={route("contact")}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {hoveredItem && (
                    <div className="selected-item-info">
                        <p>{hoveredItem.name}</p>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Megamenu;
