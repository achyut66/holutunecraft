import React from "react";
import Header from "./Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Trackmyorder() {
    const pageTitle = "Track My Order";
    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="track-myorder-container">
                <div className="trackClass">1. Order Status Updates</div>
                <p>
                    Customers can check if their order is processed, shipped, or
                    delivered. This lets them know the current stage of their
                    order in the fulfillment process.
                </p>

                <h2 className="trackClass">2. Shipping Carrier Information</h2>
                <p>
                    The system typically shows the name of the shipping carrier
                    (e.g., FedEx, UPS, DHL) and a tracking number, allowing
                    customers to directly track their package on the carrier’s
                    website or app.
                </p>

                <h2 className="trackClass">3. Estimated Delivery Date</h2>
                <p>
                    Customers can see the expected delivery date, providing a
                    clear idea of when they can expect their package.
                </p>

                <h2 className="trackClass">4. Shipping and Transit History</h2>
                <p>
                    Users can see a detailed history of their order’s movement
                    from the moment it leaves the warehouse to when it reaches
                    their doorstep. This includes transit points, stops, and any
                    issues that arise during delivery, such as delays.
                </p>

                <h2 className="trackClass">5. Delivery Confirmation</h2>
                <p>
                    When the order is successfully delivered, customers will
                    receive a notification or confirmation indicating the
                    package’s arrival. Some systems also include signature
                    confirmation if required.
                </p>

                <h2 className="trackClass">6. Notifications</h2>
                <p>
                    Customers may receive SMS or email alerts for updates on
                    their order status, including when it ships, when it’s out
                    for delivery, or if there are any delivery issues or delays.
                </p>
                <h2 className="trackClass">7. Support and Assistance</h2>
                <p>
                    In case of issues, the Track My Order feature often provides
                    access to customer service or instructions on how to handle
                    missing or delayed packages.
                </p>
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
