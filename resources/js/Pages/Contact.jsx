import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import ContactComponent from "@/Components/Contact";
import PageTitle from "@/Components/Pagetitle";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";

export default function ContactPage() {
    const pageTitle = "Contact Us"; // This is the dynamic title
    return (
        <div>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <ContactComponent />
            <PageTitle dynamictitle={"We Provide"} />
            <StatusBar />
            <Footer />
        </div>
    );
}
