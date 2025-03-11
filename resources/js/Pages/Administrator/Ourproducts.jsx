import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/form.css";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import PageTitle from "@/Components/Pagetitle";
import { Head, Link } from "@inertiajs/react";

const ProductForm = () => {
    // State to manage form values
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        currency: "USD",
        category: "Himalaya",
        description: "",
        detail_info: "",
        weight: "",
        q_unit: "KG",
        image: null,
        diameter: "",
        d_unit: "INCH",
        quantity: "",
        discount_percent: "",
        sound: null,
        flag: 1,
    });
    // State to manage product list
    const [products, setProducts] = useState([]);

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("/api/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page from refreshing

        // Create a FormData object to handle file uploads
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await axios.post("/api/store", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute("content"), // Add CSRF token
                },
            });
            alert("Product added successfully");
            window.location.href = "/cms-products";
        } catch (error) {
            if (error.response) {
                console.error(
                    "Server responded with an error:",
                    error.response.data
                );
                alert(
                    "There was an error submitting the form: " +
                        JSON.stringify(error.response.data)
                );
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received:", error.request);
                alert("No response received from the server.");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error setting up the request:", error.message);
                alert("Error setting up the request: " + error.message);
            }
        }
    };

    // const handleEdit = (productId) => {
    //     console.log("Edit product with ID:", productId);
    // };

    const handleDelete = async (productId) => {
        try {
            const response = await axios.delete(`/api/products/${productId}`);
            if (response.status === 200) {
                setProducts(
                    products.filter((product) => product.id !== productId)
                );
                alert("Product deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error deleting product");
        }
    };

    return (
        <>
            <Navbar />
            <Head title={"AddProducts"} />

            <div className="productinput-list-container">
                <PageTitle dynamictitle={"our products"} />
                <table className="table table-responsive striped w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.name}
                                            className="w-12 h-12 object-cover"
                                        />
                                    </td>
                                    <td>
                                        <Link
                                            href={`/products-edit/${product.id}`}
                                        >
                                            <button className="btn btn-edit">
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(product.id)
                                            }
                                            className="btn btn-delete"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="form-container">
                <PageTitle dynamictitle={"add products"} />
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="currency">Currency</label>
                        <select
                            className="form-control"
                            name="currency"
                            value={formData.currency}
                            onChange={handleInputChange}
                        >
                            <option value={"USD"}>USD</option>
                            <option value={"INR"}>INR</option>
                            <option value={"NPR"}>NPR</option>
                            <option value={"EUR"}>EUR</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <optgroup label="Singing Bowl">
                                <option value="Himalaya">Himalaya</option>
                                <option value="Carved">Carved</option>
                                <option value="Fullmoon">Fullmoon</option>
                                <option value="7Chakra">7Chakra</option>
                                <option value="Antique">Antique</option>
                            </optgroup>
                            <optgroup label="Singing Bowl Accessories">
                                <option value="Singing Bowl Striker">
                                    Singing Bowl Striker
                                </option>
                                <option value="Resting Cushion">
                                    Resting Cushion
                                </option>
                                <option value="Protective Bags">
                                    Protective Bags
                                </option>
                            </optgroup>
                            <optgroup label="Sound Healing Instrument">
                                <option value="Gongs">Gongs</option>
                                <option value="Tingsa & Bells">
                                    Tingsa & Bells
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="detail_info">Detail Information</label>
                        <textarea
                            id="detail_info"
                            name="detail_info"
                            value={formData.detail_info}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="weight">Weight</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            required
                            step="0.1" // This allows decimal values for weight
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="q_unit">Unit</label>
                        <select
                            className="form-control"
                            name="q_unit"
                            value={formData.q_unit}
                            onChange={handleInputChange}
                        >
                            <option value={"KG"}>KG</option>
                            <option value={"POUND"}>POUND</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                        />
                        <p style={{ color: "red" }}>
                            Supports .jpg,.jpeg,.png only
                        </p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="diameter">Diameter</label>
                        <input
                            type="number"
                            id="diameter"
                            name="diameter"
                            value={formData.diameter}
                            onChange={handleInputChange}
                            required
                            step="0.1" // This allows decimal values for weight
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="d_unit">Unit</label>
                        <select
                            className="form-control"
                            name="d_unit"
                            value={formData.d_unit}
                            onChange={handleInputChange}
                        >
                            <option value={"INCH"}>INCH</option>
                            <option value={"CM"}>CM</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            required
                            step="0.1" // This allows decimal values for weight
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="discount_percent">Discount</label>
                        <input
                            type="number"
                            id="discount_percent"
                            name="discount_percent"
                            value={formData.discount_percent}
                            onChange={handleInputChange}
                            required
                            step="0.1" // This allows decimal values for weight
                        />
                        %
                    </div>
                    <div className="input-group">
                        <label htmlFor="sound">Sound</label>
                        <input
                            type="file"
                            id="sound"
                            name="sound"
                            onChange={handleFileChange}
                        />
                        <p style={{ color: "red" }}>MP3 file only</p>
                    </div>
                    <button
                        type="submit"
                        style={{ width: "100%", height: "50%" }}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Sidebar />
        </>
    );
};

export default ProductForm;
