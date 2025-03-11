import React from "react";
import Header from "@/Pages/Header/Header";
import { Head } from "@inertiajs/react";
import ReviewsComponent from "@/Components/Reviews";
import Footer from "./Header/Footer";
import PageTitle from "@/Components/Pagetitle";
import StatusBar from "@/Components/StatusBar";

export default function ReviewsPage() {
    return (
        <>
            <Head title="Customer Reviews" />
            <Header />
            <PageTitle dynamictitle={"Reviews"} />
            <div>
                <ReviewsComponent />
            </div>
            <PageTitle dynamictitle={"we provide"} />
            <StatusBar />
            <Footer />
        </>
    );
}
