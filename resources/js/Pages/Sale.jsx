import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import SaleComponent from "@/Components/Sale";
import PageTitle from "@/Components/Pagetitle";
import StatusBar from "@/Components/StatusBar";
import Footer from "./Header/Footer";

export default function SalePage() {
    const pageTitle = "Sales"; // This is the dynamic title
    return (
        <div>
            <Head>
                <title>Sales</title>
            </Head>
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="sale-container">
                Explore our Sale Page for exclusive discounts on a wide range of
                spiritual and artisanal products. Find special offers on
                Thangkas, singing bowls, spiritual jewelry, and more. Enjoy
                authentic Tibetan craftsmanship at unbeatable prices. Don’t miss
                out on these limited-time deals to enrich your spiritual
                journey.
            </div>
            <SaleComponent />
            <div>
                <PageTitle dynamictitle={"We Provide"} />
            </div>
            <StatusBar />
            <Footer />
        </div>
    );
}
