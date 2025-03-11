import React from "react";
import { Link, Head } from "@inertiajs/react";
import saleitem from "../../../src/data/sale";

export default function Items() {
    return (
        <div>
            <>
                <div className="sale-products-grid">
                    {saleitem.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <button className="sale-button">
                                {product.status}
                            </button>
                            <h2>{product.name}</h2>
                            <div className="product-info">
                                <p>{product.description}</p>
                                <p className="sale-product-price">
                                    Before: {product.currency}
                                    {product.price}
                                </p>
                                <p className="sale-product-price-new">
                                    After: {product.currency}
                                    {product.newprice}
                                </p>
                            </div>
                            <button className="add-to-cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </>
        </div>
    );
}
