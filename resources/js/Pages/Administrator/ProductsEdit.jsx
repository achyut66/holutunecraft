import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import PageTitle from "@/Components/Pagetitle";
import axios from "axios";
import "../../../css/form.css";

const EditProduct = ({ product }) => {
    // Initialize the form data with the existing product details
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        price: product.price,
        currency: product.currency,
        category: product.category, // Add category_id here
        description: product.description,
        detail_info: product.detail_info,
        weight: product.weight,
        q_unit: product.q_unit,
        image: null, // For image file
        diameter: product.diameter,
        d_unit: product.d_unit,
        quantity: product.quantity,
        discount_percent: product.discount_percent,
        sound: null, // For sound file
        flag: 1, // assuming you want to keep this active, adjust if needed
    });

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        setData(e.target.name, e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("currency", data.currency);
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("detail_info", data.detail_info);
        formData.append("weight", data.weight);
        formData.append("q_unit", data.q_unit);
        formData.append("diameter", data.diameter);
        formData.append("d_unit", data.d_unit);
        formData.append("quantity", data.quantity);
        formData.append("discount_percent", data.discount_percent);
        formData.append("flag", 1);

        // Check if image and sound are file objects
        if (data.image) {
            console.log("Image to be uploaded:", data.image);
            formData.append("image", data.image);
        }
        if (data.sound) {
            console.log("Sound to be uploaded:", data.sound);
            formData.append("sound", data.sound);
        }

        // Make the PUT request
        axios
            .put(`/api/products-update/${product.id}`, formData)
            .then((response) => {
                alert("Product updated successfully");
            })
            .catch((error) => {
                console.error("Error updating product", error);
                alert("Failed to update product");
            });
    };

    return (
        <>
            <Head title="EditForm" />
            <Navbar />
            <div className="form-container">
                <PageTitle dynamictitle={"edit products"} />
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
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
                            value={data.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="currency">Currency</label>
                        <select
                            className="form-control"
                            name="currency"
                            value={data.currency}
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
                            value={data.category}
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
                            value={data.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="detail_info">Detail Information</label>
                        <textarea
                            id="detail_info"
                            name="detail_info"
                            value={data.detail_info}
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
                            value={data.weight}
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
                            value={data.q_unit}
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
                            value={data.diameter}
                            onChange={handleInputChange}
                            required
                            step="0.1" // This allows decimal values for diameter
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="d_unit">Unit</label>
                        <select
                            className="form-control"
                            name="d_unit"
                            value={data.d_unit}
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
                            value={data.quantity}
                            onChange={handleInputChange}
                            required
                            step="0.1"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="discount_percent">Discount</label>
                        <input
                            type="number"
                            id="discount_percent"
                            name="discount_percent"
                            value={data.discount_percent}
                            onChange={handleInputChange}
                            required
                            step="0.1"
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

export default EditProduct;
