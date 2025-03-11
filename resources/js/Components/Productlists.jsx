import React, { useRef, useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Productlists = () => {
    const scrollRef = useRef(null);
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    let scrollInterval;

    useEffect(() => {
        fetchCartCount();
        fetchProducts();
    }, []);

    const fetchCartCount = async () => {
        try {
            const response = await axios.get("/api/cart/count");
            setCartCount(response.data.count);
        } catch (error) {
            console.error("Error fetching cart count:", error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("/api/products");
            console.log(response.data);
            setProducts(response.data); // Store the fetched products in state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const startScrolling = (direction) => {
        scrollInterval = setInterval(() => {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -30 : 30,
                behavior: "smooth",
            });
        }, 30);
    };

    const stopScrolling = () => {
        clearInterval(scrollInterval);
    };

    const playSound = (sound) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const audio = new Audio(sound);
        setCurrentAudio(audio);
        setIsPlaying(true);
        audio.play();

        audio.addEventListener("timeupdate", () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        });

        audio.addEventListener("ended", () => {
            setIsPlaying(false);
            setProgress(0);
        });
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            currentAudio.pause();
        } else {
            currentAudio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const addToCart = async (product) => {
        try {
            const response = await axios.post("/api/cart", product);
            fetchCartCount(); // Update cart count
            setMessage(response.data.message); // Set the message
            setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="container-product-list">
            {message && <div className="notification">{message}</div>}

            <div className="products-grid" ref={scrollRef}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            {/* Link to Product Details Page */}
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.name}
                                />
                                <h2>{product.name}</h2>
                                <div className="product-info">
                                    <p>{product.description}</p>
                                    <p className="product-price">
                                        {product.currency}
                                        {product.price}
                                    </p>
                                </div>
                            </Link>

                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="play-pause-btn"
                                onClick={() =>
                                    isPlaying
                                        ? togglePlayPause()
                                        : playSound(`/storage/${product.sound}`)
                                }
                            >
                                {isPlaying ? "Pause" : "Play"}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>

            <button
                onMouseEnter={() => startScrolling("left")}
                onMouseLeave={stopScrolling}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onMouseEnter={() => startScrolling("right")}
                onMouseLeave={stopScrolling}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default Productlists;
