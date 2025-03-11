import React from "react";
import { Link } from "@inertiajs/react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import { Head } from "@inertiajs/react";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Giftcard() {
    return (
        <>
            <Head title="Giftcard" />
            <Header />
            <StatusBar />
            <PageTitle title="Giftcard" />
            <div className="giftcard-container"></div>
            <PageTitle dynamictitle={"we provide"} />
            <StatusBar />
            <Footer />
        </>
    );
}
