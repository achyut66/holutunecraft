import React from "react";
import Header from "./Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Wholesale() {
    const pageTitle = "Wholesale Enquiry";
    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="wholesale-container">
                <div className="wholesaleClass">1. Business Information</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Company Name:</span>{" "}
                    Holytune Craft Pvt.Ltd
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Business Type:</span>{" "}
                    Online Shop (Nepali Handicrafts)
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                    <a
                        style={{ color: "blue" }}
                        href="https://www.google.com/maps/place/Thamel,+Kathmandu+44600/@27.7150086,85.3071212,16z/data=!3m1!4b1!4m6!3m5!1s0x39eb18fcb77fd4bd:0x58099b1deffed8d4!8m2!3d27.7153902!4d85.3123293!16zL20vMGI2Mmpr?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Location (Thamel, Kathmandu)
                    </a>
                </li>

                <div className="trackClass">2. Contact Information</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Contact Person:</span>{" "}
                    Ganesh Silwal
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Contact Number:</span>{" "}
                    977-9851402057
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Email Address:</span>{" "}
                    <a
                        style={{ color: "blue" }}
                        href="mailto:nepal@holytunecraft.com,holytunecraft@gmail.com"
                    >
                        holytunecraft@gmail.com
                    </a>
                </li>

                <div className="trackClass">3. Payment and Terms</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Payment Preferences:
                    </span>{" "}
                    PayPal,Skrill, Bank Transfer, Cash on Delivery, Credit Card
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Credit Terms:</span>{" "}
                    Maximum upto 30 days
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Request for Pricing:
                    </span>{" "}
                    As per request and the relationship with the company
                </li>

                <div className="trackClass">4. Shipping and Delivery</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Shipping Destination:
                    </span>{" "}
                    The address or region where the products will be delivered.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Preferred Shipping Methods:
                    </span>{" "}
                    Whether the buyer has preferred carriers or shipping methods
                    (e.g., express, economy, freight).
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Import/Export Requirements:
                    </span>{" "}
                    For international orders, any customs, taxes, or duty
                    preferences the buyer has.
                </li>

                <div className="trackClass">5. Minimum Order Requirements</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        MOQ (Minimum Order Quantity):
                    </span>{" "}
                    Buyers often inquire about the minimum quantity of items
                    that need to be purchased in order to qualify for wholesale
                    pricing.
                </li>

                <div className="trackClass">
                    6. Return/Refund Policy Inquiry
                </div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Returns and Warranty:
                    </span>{" "}
                    Some buyers may want clarification on return policies or
                    warranties for the items they plan to purchase wholesale.
                </li>
                <div className="trackClass">
                    7. Certification or Compliance Inquiry
                </div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Quality Assurance and Certifications
                    </span>{" "}
                    Wholesale buyers might request information regarding product
                    quality, certifications, or compliance with local or
                    international standards, especially if the products are
                    handmade or have specific cultural significance.
                </li>
            </div>
            <div>
                <PageTitle dynamictitle={"we provide"} />
            </div>
            <div>
                <StatusBar />
            </div>
            <Footer />
        </>
    );
}
