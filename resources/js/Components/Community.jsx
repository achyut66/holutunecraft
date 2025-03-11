import React from "react";

const Community = () => {
    return (
        <div
            style={{
                backgroundImage: "url('assets/images/img2.jpg')",
                padding: "50px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 20px",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Join Our Community
                </h2>
                <p style={{ textAlign: "center", marginBottom: "40px" }}>
                    Be a part of our vibrant community and stay updated with the
                    latest trends and offers in our ecommerce store.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "4px 0 0 4px",
                            outline: "none",
                            width: "300px",
                        }}
                    />
                    <button
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "0 4px 4px 0",
                            backgroundColor: "red",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
