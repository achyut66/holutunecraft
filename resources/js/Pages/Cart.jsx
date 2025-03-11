import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import CartComponent from "@/Components/CartComponet";
import PageTitle from "@/Components/Pagetitle";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";

export default function CartPage() {
    const pageTitle = "Cart";
    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <div>
                <PageTitle dynamictitle={pageTitle} />
                <CartComponent />
            </div>
            <div>
                <PageTitle dynamictitle={"We Provide"} />
            </div>
            <div>
                <StatusBar />
            </div>
            <Footer />
        </>
    );
}
