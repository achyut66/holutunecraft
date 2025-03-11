import React, { useState, useEffect } from "react";
import axios from "axios";

const CartComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("/api/allcart")
            .then((response) => {
                console.log(response.data); // Log response to inspect the data structure
                setItems(response.data.cart); // Access the cart items using response.data.cart
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the cart items!",
                    error
                );
            });
    }, []);

    const handleBuy = () => {
        alert("Proceeding to checkout!");
    };

    return (
        <div className="cart-container">
            {items.length > 0 ? (
                <div className="cart-items">
                    {items.map((item, index) => (
                        <div key={index} className="cart-item-card">
                            <img
                                className="cart-image"
                                src={`/storage/${item.image}`} // Correctly using template literals
                                alt={item.product_name}
                            />
                            <div className="cart-item-info">
                                <p className="cart-item-name">
                                    {item.product_name}
                                </p>
                                <p className="cart-item-price">
                                    Price: {item.product_currency}{" "}
                                    {item.product_price}
                                </p>
                                <button
                                    className="buy-button"
                                    onClick={handleBuy}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty-cart-message text-center">
                    Your cart is empty.
                </p>
            )}
        </div>
    );
};

export default CartComponent;
