import React from "react";
import { Link, Head } from "@inertiajs/react";
import newproducts from "../../../src/data/newitems";

export default function Items() {
    return (
        <div>
            <div className="new-products-grid">
                {newproducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <button className="new-button">{product.status}</button>
                        <h2>{product.name}</h2>
                        <div className="product-info">
                            <p>{product.description}</p>
                            <p className="product-price">
                                {product.currency}
                                {product.price}
                            </p>
                        </div>
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="buy-btn">Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
