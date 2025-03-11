import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/About";
import Footer from "./Header/Footer";
import PageTitle from "@/Components/Pagetitle";
import StatusBar from "@/Components/StatusBar";

export default function About() {
    return (
        <>
            <Head title="About us" />
            <Header />
            <div>
                <AboutUs />
            </div>
            <PageTitle dynamictitle={"we provide"} />
            <StatusBar />
            <Footer />
        </>
    );
}
