import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import { Link, Head } from "@inertiajs/react";
import PageTitle from "@/Components/Pagetitle";
import StatusBar from "@/Components/StatusBar";
import SingingBowlGuide from "@/Components/Singingbowlguide";
import Productlists from "@/Components/Productlists";
const ProductDetails = ({ product }) => {
    return (
        <>
            <div className="product-details-container">
                <Head title={product.name} />
                <Header />
                <PageTitle dynamictitle={product.name} />
                <div className="product-details-content">
                    <div className="product-image">
                        <div className="image-zoom-container">
                            <img
                                src={`/storage/${product.image}`}
                                alt={product.name}
                                className="zoom-image"
                            />
                        </div>
                    </div>
                    <div className="product-info">
                        {product.quantity < 3 ? (
                            <div
                                className="p-text"
                                style={{
                                    color: "red",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="25"
                                    height="25"
                                    fill="red"
                                    style={{ marginRight: "8px" }} // Adds space between the icon and the text
                                >
                                    <path d="M18.36 5.64a9 9 0 1 0 0 12.72 9 9 0 0 0 0-12.72zm-1.42 11.31a7.5 7.5 0 1 1 0-10.61 7.5 7.5 0 0 1 0 10.61zM12 7l1.41 1.41L9.83 12l3.58 3.59L12 17l-5-5 5-5z" />
                                </svg>
                                <span>Out of Stock</span>
                            </div>
                        ) : (
                            <div
                                className="p-text"
                                style={{
                                    color: "green",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="25"
                                    height="25"
                                    fill="green"
                                    style={{ marginRight: "8px" }} // Adds space between the icon and the text
                                >
                                    <path d="M9 19l-7-7 1.41-1.41L9 16.17l11.29-11.29L22 6l-13 13z" />
                                </svg>
                                <span>Item is in Stock</span>
                            </div>
                        )}
                        <hr className="product-hr" />
                        <p className="product-description">
                            {product.detail_info}
                        </p>

                        {product.discount_percent > 0 ? (
                            <div className="product-price-container">
                                <p
                                    className="original-price"
                                    style={{ textDecoration: "line-through" }}
                                >
                                    {product.currency} {product.price}
                                </p>
                                <p className="new-product-price">
                                    {product.currency}{" "}
                                    {product.price -
                                        (product.price *
                                            product.discount_percent) /
                                            100}
                                </p>
                            </div>
                        ) : (
                            <p className="product-price">
                                {product.currency} {product.price}
                            </p>
                        )}

                        <div className="additional-info">
                            <p>
                                <strong>Weight:</strong> {product.weight}{" "}
                                {product.q_unit}
                            </p>
                            <p>
                                <strong>Diameter:</strong> {product.diameter}{" "}
                                {product.d_unit}
                            </p>
                            <p>
                                <strong>Discount:</strong>{" "}
                                {product.discount_percent}% OFF
                            </p>
                        </div>

                        <div className="action-buttons">
                            <button className="add-to-cart-btn">
                                Add to Cart
                            </button>
                            <button
                                className="play-sound-btn"
                                onClick={() => playSound(product.sound)}
                            >
                                &#9658; Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PageTitle dynamictitle={"Singing bowl guide"} />
            <SingingBowlGuide />
            <PageTitle dynamictitle={"related products"} />
            <Productlists />
            <PageTitle dynamictitle={"We provide"} />
            <StatusBar />
            <Footer />
        </>
    );
};

const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
};

export default ProductDetails;
