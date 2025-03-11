import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import PageTitle from "@/Components/Pagetitle";

const SidebarWithNavbar = () => {
    return (
        <>
            <Navbar />
            <PageTitle dynamictitle={"Welcome to holytunecraft"} />
            <Sidebar />
        </>
    );
};

export default SidebarWithNavbar;
