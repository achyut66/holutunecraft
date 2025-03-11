import React from "react";
import ItemsNew from "@/Components/Items";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";
const NewComponent = () => {
    return (
        <>
            <div className="new-container">
                Check out our New Arrivals for fresh additions to our
                collection. Discover the latest Thangkas, spiritual jewelry,
                singing bowls, and more, each piece crafted with care and
                authenticity. Stay updated with our newest items that bring
                spiritual insight and artistic beauty to your life
            </div>
            <div>
                <ItemsNew />
            </div>
            <div>
                <PageTitle dynamictitle={"We Provide"} />
            </div>
            <div>
                <StatusBar />
            </div>
        </>
    );
};

export default NewComponent;
