import React from "react";
import Header from "./Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Shipping() {
    const pageTitle = "Shipping Information";
    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="wholesale-container">
                <div className="wholesaleClass">1. Shipping Methods</div>
                <p>
                    To provide clarity for your customers, outline the different
                    shipping options available to them.
                </p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Express Shipping (FedEx/DHL)::
                    </span>{" "}
                    For customers in city-side locations, express services like
                    FedEx and DHL are ideal. They offer quick delivery times
                    (usually 3-7 days) for areas located within major cities or
                    commercial zones.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Standard Shipping (FedEx/DHL):
                    </span>{" "}
                    For both city-side and countryside locations, FedEx and DHL
                    also provide standard international shipping with varying
                    delivery times. The delivery window is typically longer
                    (7-15 days), depending on the destination and service level
                    chosen.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Freight Shipping (Sea or Air Freight):
                    </span>{" "}
                    For larger bulk orders or customers in countryside areas
                    that are more remote, sea freight or air freight may be
                    required. Freight shipping usually takes longer (30-60 days)
                    but is more cost-effective for larger quantities.
                </li>

                <div className="trackClass">2. Shipping Destinations</div>
                <p>
                    Provide a clear indication that your business can ship both
                    to city-side and countryside areas internationally, with the
                    shipping method varying based on location.
                </p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        City-Side Locations:
                    </span>{" "}
                    Deliveries to urban or metropolitan areas within
                    international countries are typically straightforward. Most
                    international couriers like FedEx, DHL, and UPS cover these
                    locations with fast delivery times.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Countryside or Rural Locations:
                    </span>{" "}
                    Shipping to rural or countryside areas may take longer.
                    Freight shipping may be required, and the delivery time will
                    vary based on the availability of local carriers or access
                    to the destination. Couriers like FedEx and DHL may also
                    provide rural delivery options, but longer delivery windows
                    should be expected.
                </li>

                <div className="trackClass">3. Shipping Cost</div>
                <p>
                    Shipping cost will depend on factors such as destination
                    (city vs. countryside), weight, size, and shipping method.
                    Clearly communicate this on your website or in your shipping
                    policy
                </p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For City-Side Locations:
                    </span>{" "}
                    Express shipping options are often more expensive but are
                    faster. Costs will be calculated based on the weight and
                    volume of the package.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For Countryside Locations:
                    </span>{" "}
                    Freight or sea shipping might be more affordable, especially
                    for bulk orders, but the cost will depend on the distance to
                    the destination and the weight of the package.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Customs & Duties:
                    </span>{" "}
                    Always inform customers that customs duties or taxes may
                    apply for international shipments. These charges are
                    typically the responsibility of the customer and are not
                    included in the shipping costs.
                </li>

                <div className="trackClass">4. Estimated Delivery Times</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        City-Side Deliveries:
                    </span>{" "}
                    <li style={{ padding: "10px" }}>
                        <span>Express (FedEx/DHL): 3-7 business days</span>{" "}
                    </li>
                    <li style={{ padding: "10px" }}>
                        <span>Standard (FedEx/DHL): 7-15 business days</span>{" "}
                    </li>
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Country-Side Deliveries:
                    </span>{" "}
                    <li style={{ padding: "10px" }}>
                        <span>Express (FedEx/DHL): 7-14 business days</span>{" "}
                    </li>
                    <li style={{ padding: "10px" }}>
                        <span>Standard (FedEx/DHL): 30-60 business days</span>{" "}
                    </li>
                </li>

                <div className="trackClass">5. Tracking Your Order</div>
                <p>Include tracking information for your customers:</p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For FedEx/DHL Express/Standard Shipping:
                    </span>{" "}
                    Provide tracking numbers as soon as the order is shipped.
                    Customers can track their shipments directly through the
                    FedEx or DHL websites or mobile apps.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For Freight Shipping:
                    </span>{" "}
                    Freight shipments often come with tracking details, but it
                    may require more manual monitoring. You can either provide
                    customers with a tracking number from the freight forwarder
                    or a point of contact to inquire about their shipment.
                </li>

                <div className="trackClass">6. Address Format</div>
                <p>
                    Provide specific guidelines for customers to ensure their
                    city-side or countryside addresses are correctly formatted
                    for shipment. Some remote locations may have unique postal
                    codes or may require additional address details to ensure
                    accurate delivery.
                </p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For City-Side Addresses:
                    </span>{" "}
                    Ensure that customers include complete street addresses,
                    city names, postal codes, and any other relevant city
                    identifiers.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For Countryside Addresses:
                    </span>{" "}
                    Advise customers to include landmarks or rural identifiers
                    (such as local district names or rural postal codes) to
                    assist the courier in locating the destination.
                </li>
                <div className="trackClass">
                    7. Contact Information for Shipping Issues
                </div>
                <p>
                    In case of problems with delivery, provide a clear way for
                    customers to get in touch for support:
                </p>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        For FedEx and DHL deliveries:
                    </span>{" "}
                    Provide the customer service contact of these courier
                    companies for customers to follow up on shipping issues or
                    delays.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>For Freight:</span> If
                    using sea or air freight, offer your contact details or a
                    freight forwarder's contact for handling any shipping
                    concerns.
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
