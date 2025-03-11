import React from "react";
import Header from "./Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Refund() {
    const pageTitle = "Refund & Return Policy";
    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="wholesale-container">
                <div className="wholesaleClass">1. Returns</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Eligibility for Return:
                    </span>{" "}
                    Returns are accepted within 14 days from the date of
                    delivery. If more than 14 days have passed since your
                    purchase, unfortunately, we cannot offer you a refund or
                    exchange.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Conditions for Return:
                    </span>{" "}
                    To be eligible for a return, the item must be in its
                    original, unused condition and in the original packaging. It
                    should not have been altered or damaged in any way. Please
                    ensure that all tags and labels are still attached to the
                    item.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Exemptions:</span>{" "}
                    Custom-made or personalized products (such as customized
                    singing bowls or engraved items) are non-returnable unless
                    they are defective or damaged during shipping. Please review
                    your order carefully before finalizing the purchase.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Return Process:</span>{" "}
                    To initiate a return, please contact us at
                    <span style={{ color: "blue" }}>
                        nepal@holytunecraft.com
                    </span>{" "}
                    with your order number and the reason for your return. We
                    will provide you with instructions on how to return the
                    product.
                </li>

                <div className="trackClass">2. Refunds</div>

                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Refund Eligibility:
                    </span>{" "}
                    Once your return is received and inspected, we will notify
                    you of the approval or rejection of your refund. If your
                    return is approved, we will process the refund to your
                    original payment method. Refunds may take 5-10 business days
                    to appear in your account, depending on your payment
                    provider.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Partial Refunds:</span>{" "}
                    In certain cases, only a partial refund may be granted if:
                    <li style={{ padding: "10px" }}>
                        <span>
                            The item is returned in a condition that is not new,
                            such as signs of wear, damage, or missing parts.
                        </span>
                    </li>
                    <li style={{ padding: "10px" }}>
                        <span>
                            The return is for items that were on sale or
                            discounted.
                        </span>
                    </li>
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Shipping cost:</span>{" "}
                    Please note that shipping costs are non-refundable. If you
                    are returning an item due to a change of mind, you are
                    responsible for the return shipping costs. If the return is
                    due to a defective or damaged item, we will cover the return
                    shipping costs.
                </li>

                <div className="trackClass">3. Damaged or Defective Items</div>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Damaged or Defective Goods:
                    </span>{" "}
                    If your item arrives damaged or defective, please contact us
                    within 7 days of receiving the product. We may request
                    photos of the damage or defect to assist with processing
                    your claim. We will offer you the option of a full refund,
                    replacement, or store credit.
                </li>
                <li style={{ padding: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Shipping Damage:</span>{" "}
                    If your item is damaged during shipping, please keep all
                    packaging materials and contact our customer service
                    immediately. We will guide you through the process of filing
                    a claim with the shipping carrier.
                </li>

                <div className="trackClass">4. Non-Returnable Items</div>
                <p>Certain items cannot be returned or refunded:</p>
                <li style={{ padding: "10px" }}>
                    Custom-made or personalized items
                </li>
                <li style={{ padding: "10px" }}>
                    Items purchased on sale or clearance (unless defective or
                    damaged)
                </li>
                <li style={{ padding: "10px" }}>
                    Gift cards or downloadable software products
                </li>

                <div className="trackClass">5. International Returns</div>
                <p>
                    For international orders, customers are responsible for all
                    return shipping fees, customs duties, and taxes. Please be
                    aware that international returns may take longer to process.
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
