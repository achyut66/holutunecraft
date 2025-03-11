import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/trending.css"; // Import the CSS file

const Trending = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(["Himalaya"]); // Default category
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState("");

    // Function to handle category changes
    const handleCategoryChange = (e) => {
        const selectedCategories = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setCategories(selectedCategories);
    };

    const addToCart = async (product) => {
        try {
            const response = await axios.post("/api/cart", product);
            fetchCartCount();
            setMessage(response.data.message);
            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    // Fetch products whenever the categories change
    useEffect(() => {
        fetchCartCount();
        const categoryQuery = categories.join("&categories[]=");

        axios
            .get(`/api/category?categories[]=${categoryQuery}`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [categories]);

    const fetchCartCount = async () => {
        try {
            const response = await axios.get("/api/cart/count");
            setCartCount(response.data.count);
        } catch (error) {
            console.error("Error fetching cart count:", error);
        }
    };

    return (
        <div className="trending-container">
            {message && <div className="notification">{message}</div>}
            {/* Category Filter on the Right */}
            <div className="category-filter">
                <h3>Filter by Category</h3>
                <select
                    multiple
                    value={categories}
                    onChange={handleCategoryChange}
                    className="category-select"
                >
                    <option value="Himalaya">Himalaya</option>
                    <option value="Carved">Carved</option>
                    <option value="Fullmoon">Fullmoon</option>
                    <option value="7Chakra">7Chakra</option>
                    <option value="Antique">Antique</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="trending-grid">
                {products.map((product) => (
                    <div key={product.id} className="trending-product-card">
                        <div className="product-image">
                            <img
                                src={`/storage/${product.image}`} // Assuming the image is stored in 'storage/app/public'
                                alt={product.name}
                                className="product-img"
                            />
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="product-price">${product.price}</p>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Trending;
