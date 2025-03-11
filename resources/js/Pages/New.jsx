import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import NewComponent from "@/Components/New";
import PageTitle from "@/Components/Pagetitle";
import Footer from "./Header/Footer";
import Marquee from "@/Components/Marque";

export default function ContactPage() {
    const pageTitle = "New Items"; // This is the dynamic title
    return (
        <div>
            <Head>
                <title>New Arrivals</title>
            </Head>
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <NewComponent />
            <Marquee />
            <Footer />
        </div>
    );
}
