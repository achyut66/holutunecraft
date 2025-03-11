import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import BlogComponent from "@/Components/Blog";
import PageTitle from "@/Components/Pagetitle";
import Footer from "./Header/Footer";
import StatusBar from "@/Components/StatusBar";

export default function BlogPage() {
    const pageTitle = "Blog"; // This is the dynamic title

    return (
        <>
            <Head title={pageTitle} /> {/* Set page title dynamically */}
            <Header />
            <div>
                <PageTitle dynamictitle={pageTitle} />
                <BlogComponent />
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
